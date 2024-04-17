import React, { useEffect, useState } from "react";
import "./PromotionBannerCard.css";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { BsChevronDown } from "react-icons/bs";
import { useStoreContext } from "../../context/store_context";
import ReactModal from "react-modal";
import { useMallContext } from "../../context/mall_context";
import {
  ACCEPT_HEADER,
  add_store_cart,
  get_region_mall,
} from "../../utils/Constant";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Notification from "../../utils/Notification";
import { DateRangePicker } from "rsuite";

const animatedComponents = makeAnimated();

// model style

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    backgroundColor: "none",
    border: "none",
    borderRadius: "0px",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

const PromotionBannerCard = ({
  item,
  mindx,
  getLeaderboard,
  setTab,
  peopleInfo,
  setPeopleInfo,
  getweek,
}) => {
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [BrandName, setBrandName] = useState("");
  const [MallName, setMallName] = useState("");
  const [mallid, SetMaillId] = useState("");
  const [Category, setCategory] = useState("");
  const [CategoryId, setCategoryId] = useState("");

  const [BrandId, setBrandId] = useState("");
  const [Week, setWeek] = useState("");
  const [weekname, SetWeekName] = useState("");
  const [weekname1, SetWeekName1] = useState("");
  const [weekname2, SetWeekName2] = useState("");
  const [Region, setRegion] = useState([]);
  const [getcondition, setCondition] = useState([]);
  const [mallsOption, setMallsOption] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { allowedMaxDays, beforeToday, combine } = DateRangePicker;

  // const initialStartDate = new Date(); // Replace with your desired default start date
  // const initialEndDate = new Date();

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    getBrand(item.stores.retailer_id);
    GetRegion();
  }, []);

  const { getBrand } = useMallContext();

  // const [deletemodalstate, setDleteModalstate] = useState(false);

  useEffect(() => {
    setTitle(item.description ? item.description : "");
    SetMaillId(item.malls ? item.malls.id : "");
    setMallName(
      item.malls == null ||
        item.malls == "" ||
        item.malls.name == null ||
        item.malls.name == ""
        ? ""
        : item.malls.name
    );
    setBrandName(
      item.brands == null ||
        item.brands == "" ||
        item.brands.name == null ||
        item.brands.name == ""
        ? ""
        : item.brands.name
    );
    setBrandId(
      item.brands == null ||
        item.brands == "" ||
        item.brands.id == null ||
        item.brands.id == ""
        ? ""
        : item.brands.id
    );
    setCategory(
      item.categorys == null ||
        item.categorys == "" ||
        item.categorys.name == null ||
        item.categorys.name == ""
        ? ""
        : item.categorys.name
    );
    setCategoryId(
      item.categorys == null ||
        item.categorys == "" ||
        item.categorys.id == null ||
        item.categorys.id == ""
        ? ""
        : item.categorys.id
    );
    // setWeek(item.title ? item.title : "");
    SetWeekName(item.weeks ? item.weeks.name : "");
    SetWeekName1(item.from_date ? item.from_date : "");
    SetWeekName2(item.to_date ? item.to_date : "");
    SetMallArray(item.multiple_malls ? item.multiple_malls : "");
    // console.log('jasy-->', item.from_date ? item.from_date : "");
  }, []);

  const {
    UpdatePromotionBoardApi,
    category_data,
    deletePromotionBannerApi,
    multiple_week_data,
    week_data,
  } = useStoreContext();
  const { get_brand_data, get_mall_data } = useMallContext();

  // select date funtion is start

  // Helper function to check if a date is a Monday
  const isMonday = (date) => {
    return moment(date).isoWeekday() === 1;
  };

  // Helper function to check if a date is a Sunday
  const isSunday = (date) => {
    return moment(date).isoWeekday() === 7;
  };

  // Helper function to check if the selected range is valid
  const isRangeValid = (start, end) => {
    if (!start || !end) {
      return false; // No selection made
    }

    // Check if the range is exactly 7 days
    return moment(end).diff(moment(start), "days") === 6;
  };

  // Event handler for selecting the start date
  const handleStartDateChange = (date) => {
    setStartDate(date);

    // Calculate the end date based on the selected start date
    const nextSunday = moment(date).endOf("isoWeek").toDate();
    if (isRangeValid(date, nextSunday)) {
      setEndDate(nextSunday);
    } else {
      setEndDate(null);
    }
  };

  // Event handler for selecting the end date
  const handleEndDateChange = (date) => {
    if (isRangeValid(startDate, date)) {
      setEndDate(date);
    }
  };

  const onDateChage = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleDateChange = (startDate, endDate) => {
    if ((startDate && endDate !== "") || (startDate && endDate !== null)) {
      SetWeekCondation(true);
    } else {
      SetWeekCondation(false);
    }
    setSelectedDates({ startDate, endDate });
  };

  // const [gettitle, SetTitile] = useState(item.title ? item.title : "");
  // select date funtion is end

  // logo dropzon

  const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        // console.log("file type", files[0]);
        // console.log("acceptedFiles", acceptedFiles[0].File);

        {
          setFiles(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
        }
        setCondition(true);
        if (acceptedFiles.length === 0) {
          window.location.reload(true);
        }
      },
    });

  const thumbs = files.map((file) => (
    <img
      src={file.preview}
      style={{ width: "100%", height: "100%" }}
      className="img-fluidb"
      alt="file"
    />
  ));

  // Update Promotion Banner Api

  const [getweekcondation, SetWeekCondation] = useState(false);

  // const UpdatePromotionBanner = async () => {
  //   const { startDate, endDate } = selectedDates;

  //   if (title == "" || undefined) {
  //     Notification("error", "Error!", "Please Enter Title!");
  //     return;
  //   }  else if (weekname1 === "") {
  //     Notification("error", "Error", "Please Enter Start Date");
  //     return;
  //   } else if (weekname2 === "") {
  //     Notification("error", "Error", "Please Enter End Date");
  //     return;
  //   } else if (getmallarray.length < 0) {
  //     Notification("error", "Error!", "Please Select Mall!");
  //   }else if (BrandName == "" || undefined) {
  //     Notification("error", "Error!", "Please Select Brand!");
  //   } else if (CategoryId == "" || undefined) {
  //     Notification("error", "Error!", "Please Select Category!");
  //   } else {
  //     const formdata = await new FormData();
  //     await formdata.append("id", item.id);
  //     await formdata.append("title", title);

  //     if (gettrue === true) {
  //       for (var i = 0; i < regionidarray.length; i++) {
  //         await formdata.append("region_id[" + i + "]", regionidarray[i].id);
  //       }
  //       for (var i = 0; i < mallidarray.length; i++) {
  //         await formdata.append("mall_id[" + i + "]", mallidarray[i].id);
  //       }
  //     } else {
  //       for (var i = 0; i < getmallarray.length; i++) {
  //         await formdata.append(
  //           "region_id[" + i + "]",
  //           getmallarray[i].region_id
  //         );
  //       }
  //       for (var i = 0; i < getmallarray.length; i++) {
  //         await formdata.append("mall_id[" + i + "]", getmallarray[i].mall_id);
  //       }
  //     }

  //     await formdata.append("brand_id", BrandId);

  //     await formdata.append("category_id", CategoryId);
  //     if (getweekcondation === true) {
  //       await formdata.append(
  //         "from_date",
  //         moment(startDate[0]).format("YYYY-MM-DD")
  //       );
  //       await formdata.append(
  //         "to_date",
  //         moment(startDate[1]).format("YYYY-MM-DD")
  //       );
  //     } else {
  //       await formdata.append("from_date", weekname1);
  //       await formdata.append("to_date", weekname2);
  //     }

  //     // await formdata.append("week_id", Week);
  //     // await formdata.append("region_child_id[0]", "")
  //     if (files[0] !== undefined) {
  //       await formdata.append("image", files[0]);
  //     }

  //     // console.log("-=-=-=->", formdata);
  //     const data = await UpdatePromotionBoardApi(formdata);
  //     if (data) {
  //       if (data.success === 1) {
  //         // console.log("category-data", data);
  //         Notification(
  //           "success",
  //           "Success!",
  //           "Promotion Banner Updated Successfully!"
  //         );
  //         setTab(1);
  //         // getLeaderboard();
  //         // window.location.reload();
  //       }
  //     }

  //     // console.log("test");
  //   }
  // };
  // Deleate Leaderboard Api


  const UpdatePromotionBanner = async () => {
    const { startDate, endDate } = selectedDates;

    if (title == "" || undefined) {
      Notification("error", "Error!", "Please Enter Title!");
      return;
    } else if (weekname1 === "") {
      Notification("error", "Error", "Please Enter Start Date");
      return;
    } else if (weekname2 === "") {
      Notification("error", "Error", "Please Enter End Date");
      return;
    } else if (getmallarray.length < 0) {
      Notification("error", "Error!", "Please Select Mall!");
    } else if (CategoryId == "" || undefined) {
      Notification("error", "Error!", "Please Select Category!");
    } else {
      const formdata = await new FormData();
      await formdata.append("id", item.id);
      await formdata.append("title", title);

      if (gettrue === true) {
        for (var i = 0; i < regionidarray.length; i++) {
          await formdata.append("region_id[" + i + "]", regionidarray[i].id);
        }
        for (var i = 0; i < mallidarray.length; i++) {
          await formdata.append("mall_id[" + i + "]", mallidarray[i].id);
        }
      } else {
        for (var i = 0; i < getmallarray.length; i++) {
          await formdata.append(
            "region_id[" + i + "]",
            getmallarray[i].region_id
          );
        }
        for (var i = 0; i < getmallarray.length; i++) {
          await formdata.append("mall_id[" + i + "]", getmallarray[i].mall_id);
        }
      }


      await formdata.append("category_id", CategoryId);
      if (getweekcondation === true) {
        await formdata.append(
          "from_date",
          moment(startDate[0]).format("YYYY-MM-DD")
        );
        await formdata.append(
          "to_date",
          moment(startDate[1]).format("YYYY-MM-DD")
        );
      } else {
        await formdata.append("from_date", weekname1);
        await formdata.append("to_date", weekname2);
      }

      // await formdata.append("week_id", Week);
      // await formdata.append("region_child_id[0]", "")
      if (files[0] !== undefined) {
        await formdata.append("image", files[0]);
      }

      // console.log("-=-=-=->", formdata);
      const data = await UpdatePromotionBoardApi(formdata);
      if (data) {
        if (data.success === 1) {
          // console.log("category-data", data);
          Notification(
            "success",
            "Success!",
            "Promotion Banner Updated Successfully!"
          );
          setTab(1);
          // getLeaderboard();
          // window.location.reload();
        }
      }

      // console.log("test");
    }
  };
  const DeletePromotionBanner = async () => {
    // console.log("test");

    const formdata = await new FormData();
    await formdata.append("id", item.id);

    // console.log("-=-=-=->", formdata);
    const data = await deletePromotionBannerApi(formdata);
    if (data) {
      if (data.success === 1) {
        // console.log("mall-data", data);
        Notification(
          "success",
          "Success!",
          "Promotion Banner Deleted Successfully!"
        );

        setTab(1);
        // getStore();
      } else if (data.success === 0) {
        Notification(
          "error",
          "Error!",
          data.message
        );
      }
    }
  };

  // const testfunction = () => {
  //   console.log("test");
  // }

  const Addtocart = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    const formdata = await new FormData();
    await formdata.append("qty", 1);
    await formdata.append("promotion_banner_id", item.id);

    // console.log("-=-=-=->", formdata);
    axios
      .post(add_store_cart, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        // console.log(JSON.stringify(res, null, 2));
        window.location.reload(true);
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  // madhav
  const [mallMolalOpen, setMallModalIsOpen] = useState(false);
  function closeMallModal() {
    setMallModalIsOpen(false);
  }
  function openMallModal() {
    setMallModalIsOpen(true);
  }

  const [getmallarray, SetMallArray] = useState([]);

  const [gettrue, SetTrue] = useState(false);

  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedMalls, setSelectedMalls] = useState([]);

  const [mallidarray, SetMallidarray] = useState([]);
  const [regionidarray, SetRegionidarray] = useState([]);

  const handleRegionChange = (regionName, id) => {
    const updatedSelectedRegions = [...selectedRegions];
    const index = updatedSelectedRegions.indexOf(regionName);

    if (index > -1) {
      updatedSelectedRegions.splice(index, 1);
    } else {
      updatedSelectedRegions.push(regionName);
      regionidarray.push({ id: id });
    }

    setSelectedRegions(updatedSelectedRegions);
  };

  const handleMallChange = (mallName, id) => {
    const updatedSelectedMalls = [...selectedMalls];
    const index = updatedSelectedMalls.indexOf(mallName);

    if (index > -1) {
      updatedSelectedMalls.splice(index, 1);
    } else {
      updatedSelectedMalls.push(mallName);
      mallidarray.push({ id: id });
    }

    setSelectedMalls(updatedSelectedMalls);
  };

  const [getregion_array, SetRigion_Array] = useState([]);

  const GetRegion = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_region_mall, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.data.success == 1) {
          SetRigion_Array(res.data.data);
        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  const [toggle, setToggle] = useState(null);
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };

  //

  return (
    <>
      <div className="leaderboard-card-main-wrapp">
        {/* Leaderboard flex start */}
        <div className="leaderboard-card-flex-wrapp leaderboard-card-flex-wrapp-half">
          {/* Leaderboard first part responsive side start */}
          <div className="leaderboard-card-first-resp-main-wrapp">
            <p className="leaderboard-last-part-txt">
              Service fee will apply if canceled
            </p>
            <button
              className="leaderboard-
                    -icon-btn"
            >
              cancel{" "}
              <img
                src={images.delete_icon}
                className="leaderboard-delete-icon"
              />
            </button>
          </div>
          {/* Leaderboard first part responsive side end*/}

          {/* Leaderboard part first start */}
          <div className="leaderboard-card-part-first leaderboard-card-part-first-half">
            {/* Leaderboad form start */}

            {/* Leaderboard inputbox start */}
            <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl">Title:<span className="star_require">*</span></label>
              <input
                type="text"
                className="leaderboard-card-inp"
                placeholder="Summer Campaign 2024"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* Leaderboard inputbox end */}

            {/* Leaderboard inputbox start */}
            <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl">Mall(s):</label>
              <div
                onClick={() => openMallModal()}
                className="leaderboard-card-inp"
                style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}
              >
                {gettrue === true ? (
                  <>
                    {selectedMalls && selectedMalls.length > 0
                      ? selectedMalls.map((mall, mindx) => {
                        return <p className="">{mall}</p>;
                      })
                      : null}
                  </>
                ) : (
                  <>
                    {getmallarray && getmallarray.length > 0
                      ? getmallarray.map((itm, mindx) => {
                        return (
                          <p className="mall-lib-font">
                            {itm.malls ? itm.malls.name : ""}
                          </p>
                        );
                      })
                      : null}
                  </>
                )}
              </div>

            </div>
            {/* Leaderboard inputbox end */}

            {/* Leaderboard inputbox start */}
            {/* <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl">Brand(s):</label>
              <div className="select-wrapper" style={{ width: "100%" }}>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    // console.log("rrr", e.target.value);
                    setBrandName(e.target.value);
                    setBrandId(e.target.value);
                  }}
                >
                  <option selected disabled value="">
                    {BrandName}
                  </option>
                  {get_brand_data &&
                    get_brand_data.map((item, index) => {
                      return (
                        <>
                          <option value={item.id} key={index}>
                            {item.name}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
            </div> */}
            {/* Leaderboard inputbox end */}
            <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl" htmlFor="">
                Week:<span className="star_require">*</span>
              </label>

              <DateRangePicker
                oneTap
                hoverRange="week"
                isoWeek
                // defaultCalendarValue={weekname1 - weekname2}
                placeholder={`${weekname1} - ${weekname2}`}
                className="leaderboard-card-inp DateRangePicker_LeaderboardCard"
                // startDate={moment(selectedDates.startDate).format('YYYY-MM-DD')} // Set the initial start date
                // endDate={moment(selectedDates.endDate).format('YYYY-MM-DD')}
                onChange={handleDateChange}
                disabledDate={combine(allowedMaxDays(7), beforeToday())}
              />
            </div>
            {/* Leaderboard inputbox start */}
            <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl">Categories:<span className="star_require">*</span></label>
              <div className="select-wrapper" style={{ width: "100%" }}>
                <select
                  className="leaderboard-card-inp cons_select_nav"
                  onChange={(e) => {
                    console.log("rrr", e.target.value);
                    setCategory(e.target.value);
                    setCategoryId(e.target.value);
                  }}
                >
                  <option selected disabled value="">
                    {Category}
                  </option>
                  {category_data &&
                    category_data.map((item, index) => {
                      return (
                        <>
                          <option value={item.id} key={index}>
                            {item.name}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
            </div>
            {/* Leaderboard inputbox end */}

            {/* start date and end date demo start */}
            {/* <div>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Select start date (Monday)"
              filterDate={isMonday}
              calendarStartDay={1}
            />
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Select end date (Sunday)"
              filterDate={isSunday}
              disabled={!startDate}
              calendarStartDay={1}
            />
          </div> */}
            {/* start date and end date demo end */}

            {/* Leaderboard inputbox start */}
            {/* <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl">Start:</label>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Select start date (Monday)"
              filterDate={isMonday}
              calendarStartDay={1}
              className="leaderboard-card-inp"
              dateFormat="dd/MM/yyyy"
            />
          </div> */}
            {/* Leaderboard inputbox end */}

            {/* Leaderboard inputbox start */}
            {/* <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl">Until:</label>
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Select end date (Sunday)"
              filterDate={isSunday}
              disabled={true}
              calendarStartDay={1}
              className="leaderboard-card-inp"
              dateFormat="dd/MM/yyyy"
            />
          </div> */}
            {/* Leaderboard inputbox end */}

            {/* Leaderboad form end */}
          </div>
          {/* Leaderboard part first end */}

          {/* Leaderboard part second start */}
          <div className="leaderboard-card-part-sec" {...getRootlogoProps()}>
            <input
              {...getInputlogoProps()}
              accept="image/jpeg, image/jpg, image/png, image/eps"
            />

            {getcondition === true ? (
              <>
                {files && files.length > 0 ? (
                  <div className="myprofile_inner_sec2_img_upload leaderboard-card-part-img-upl">
                    {thumbs}
                  </div>
                ) : (
                  <div style={{ width: "100%" }}>
                    <div className="leaderboard-card-part-sec2">
                      <AiOutlineCloudUpload
                        style={{
                          width: "60px",
                          height: "60px",
                          color: "var(--color-orange)",
                          marginBottom: "10px",
                        }}
                      />
                      <h4>.JPG .PNG .GIF(1050 x 284 pixels)</h4>
                      <p>(max 200kb)</p>
                      <p>You can also upload file by</p>

                      <button
                        type="button"
                        className="click_upload_btn"
                        style={{ marginBottom: "10px",color:"var(--color-orange)",fontWeight:"600" }}
                      >
                        click here
                      </button>
                      {/* <a href="">clicking here</a> */}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {item.image_path === null ? (
                  <div style={{ width: "100%" }}>
                    <div className="leaderboard-card-part-sec2">
                      <AiOutlineCloudUpload
                        style={{
                          width: "60px",
                          height: "60px",
                          color: "var(--color-orange)",
                          marginBottom: "10px",
                        }}
                      />
                      <h4>.PDF .JPG .PNG</h4>
                      <p>You can also upload file by</p>

                      <button
                        type="button"
                        className="click_upload_btn"
                        style={{ marginBottom: "10px" }}
                      >
                        click here
                      </button>
                      {/* <a href="">clicking here</a> */}
                    </div>
                  </div>
                ) : (
                  <div className="myprofile_inner_sec2_img_upload leaderboard-card-part-img-upl">
                    <img
                      src={item.image_path}
                      style={{ width: "100%", height: "100%" }}
                      className="img-fluidb"
                    />
                  </div>
                )}
              </>
            )}

            {/* <div className="myprofile_inner_sec2"> */}

            {/* </div> */}
          </div>
          {/* Leaderboard part second end */}

          {/* Leaderboard part third start */}
          <div className="leaderboard-card-part-third leaderboard-card-part-third-half">
            <button
              onClick={() => {
                DeletePromotionBanner();
              }}
              className="leaderboard-delete-icon-btn"
            >
              cancel{" "}
              <img
                src={images.delete_icon}
                className="leaderboard-delete-icon"
              />
            </button>
            <p className="leaderboard-last-part-txt">
              Service fee will apply if canceled
            </p>
            <div className="leaderboard-btn-box">
              {item.cart_status === 0 ? (
                <>
                  <button style={{ padding: "0.4rem", fontSize: "16px" }}
                    className="btn btn-black"
                    onClick={() => {
                      Addtocart();
                      // window.location.reload(true);
                    }}
                  >
                    Add To Cart
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-black"
                // onClick={() => {
                //   window.location.reload(true);
                //   Addtocart();
                // }}
                >
                  Added
                </button>
              )}
            </div>
            {/* <button
              onClick={() => openMallModal()}
              className="leaderboard-delete-icon-btn"
            >
              <span className="leaderboard-extend-txt">Extend</span>{" "}
              <img
                src={images.extend_icon}
                className="leaderboard-delete-icon"
              />
            </button> */}
            <div className="leaderboard-btn-box">
              <button
                className="btn btn-orange"
                onClick={() => UpdatePromotionBanner()}
              >
                Update
              </button>
            </div>
          </div>
          {/* Leaderboard part third end */}

          {/* Leaderboard last part responsive side start */}
          <div className="leaderboard-card-sec-resp-main-wrapp leaderboard-card-sec-resp-main-wrapp_edited">
            <div className="leaderboard-btn-box">
              {item.cart_status === 0 ? (
                <>
                  <button
                    className="btn btn-black cartbtnblack"
                    onClick={() => {
                      Addtocart();
                      // window.location.reload(true);
                    }}
                  >
                    Add To Cart
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-black updatebtnorg"
                  style={{ background: "black" }}>
                  Added
                </button>
              )}
            </div>

            <div className="leaderboard-btn-box">
              <button
                className="btn btn-orange updatebtnorg"
                onClick={() => UpdatePromotionBanner()}
              >
                Update
              </button>
            </div>
          </div>
          {/* Leaderboard last part responsive side end */}
        </div>

        {/* Leaderboard flex start */}

        {/* select mall modal start */}

        {/* select mall modal end */}
      </div>
      <ReactModal
        isOpen={mallMolalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeMallModal}
        style={customStyles}
      >
        <div className="select_mall_main_wrapp">
          <div className="select_mall_base_wrapp">
            {/* mall heading */}
            <p className="select_mall_heading">
              Select the malls that your brand features in:
            </p>

            <div className="select_mall_serch_wrapp">
              <input type="search" placeholder="Search" className="input_box" />
              <BiSearch
                className="select_mall_search_icon"
                size={25}
                color="var(--color-orange)"
              />
            </div>

            {/* <div
              className="leaderboard-card-inpbox-wrapp"
              style={{ alignItems: "center" }}
            >
              <label className="leaderboard-card-lbl">Slect Weeks:</label>
              <select
                className="leaderboard-card-inp"
                // value={MallName}
                onChange={(e) => {
                  setWeek(e.target.value);
                }}
              >
                <option selected disabled value="">
                  {weekname} {weekname1} {weekname2}
                </option>

                {week_data &&
                  week_data.map((item, index) => {
                    return (
                      <>
                      
                        <option value={item.id} key={index}>
                          {item.name} &nbsp;&nbsp;&nbsp; {item.from_date}{" "}
                          &nbsp;&nbsp;&nbsp; {item.to_date}
                        </option>
                      </>
                    );
                  })}
              </select>
            </div> */}

            {/* mall selected tag */}
            <div className="select_mall_tag_btns_wrapp">
              {selectedMalls && selectedMalls.length > 0
                ? selectedMalls.map((mall, mindx) => {
                  return (
                    <button
                      className="select_mall_tag_single_btn"
                      style={{ backgroundColor: "#4FBB10" }}
                      key={mindx}
                    >
                      {mall}
                    </button>
                  );
                })
                : null}
            </div>

            <div className="mall_Select_wrapp">
              <p
                style={{
                  fontSize: "18px",
                  alignSelf: "start",
                  marginBottom: "1rem",
                }}
              >
                Region
              </p>

              {getregion_array && getregion_array.length > 0
                ? getregion_array.map((item, index) => {
                  return (
                    <div
                      className="bim_accordian_wrapp"
                      style={{ marginBottom: "6px" }}
                      key={item.region_id}
                    >
                      <button
                        className="bim_accordian_btn"
                        onClick={() => {
                          setToggle(item.region_id);
                          handleRegionChange(
                            item.region_name,
                            item.region_id
                          );
                        }}
                      >
                        <p
                          style={{
                            color:
                              item.region_id === toggle ? "#ff8b00" : "#000",
                            fontWeight:
                              item.region_id === toggle ? "500" : "300",
                          }}
                        >
                          {item.region_name}
                        </p>

                        {item.region_id == toggle ? (
                          <IoIosArrowUp size={20} color="#ff8b00" />
                        ) : (
                          <IoIosArrowDown size={20} />
                        )}
                      </button>
                      {item.region_id == toggle ? (
                        <div className="bim_accordian_mall_wrapp">
                          {item.malls.map((itm, ind) => {
                            return (
                              <>
                                <div
                                  key={itm.id}
                                  style={{
                                    display: "flex",
                                    gap: "10px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    checked={selectedMalls.includes(itm.name)}
                                    // value={peopleInfo}
                                    onChange={(e) => {
                                      // handleCheckboxChange(e, itm, ind);
                                      handleMallChange(itm.name, itm.id);
                                    }}

                                  // type="checkbox"
                                  // checked={
                                  //   getcheck[(itm, ind, "", item.region_id)]
                                  // }
                                  // onChange={(e) => {
                                  //   check(itm, ind, "", item.region_id);
                                  // }}
                                  // value={peopleInfo}
                                  />
                                  <label htmlFor={itm.id}>{itm.name}</label>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })
                : null}
            </div>

            <div className="leaderboard-btn-box">
              <button
                className="btn btn-orange"
                onClick={() => {
                  closeMallModal();
                  SetTrue(true);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default PromotionBannerCard;