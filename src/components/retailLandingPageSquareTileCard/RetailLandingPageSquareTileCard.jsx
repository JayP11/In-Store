import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import ReactPlayer from "react-player";

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
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";

import {
  ACCEPT_HEADER,
  add_store_cart,
  get_region_mall,
} from "../../utils/Constant";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Notification from "../../utils/Notification";
import { DateRangePicker } from "rsuite";

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

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const animatedComponents = makeAnimated();

const RetailLandingPageSquareTileCard = ({
  item,
  mindx,
  getLeaderboard,
  setTab,
  peopleInfo,
  setPeopleInfo,

  getweek,
}) => {
  const { get_brand_data, get_mall_data } = useMallContext();
  const { retailer_data, getRetailerApi, week_data } = useStoreContext();

  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [BrandName, setBrandName] = useState("");
  const [BrandId, setBrandId] = useState("");
  const [MallName, setMallName] = useState("");
  const [MallId, SetMaillId] = useState("");
  const [Category, setCategory] = useState("");
  const [CategoryId, setCategoryId] = useState("");
  const [Week, setWeek] = useState("");
  const [weekname, SetWeekName] = useState("");
  const [weekname1, SetWeekName1] = useState("");
  const [weekname2, SetWeekName2] = useState("");
  const [Region, setRegion] = useState([]);
  const [mallsOption, setMallsOption] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  const { allowedMaxDays, beforeToday, combine } = DateRangePicker;

  // const [deletemodalstate, setDleteModalstate] = useState(false);

  useEffect(() => {
    setTitle(item.title ? item.title : "");
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
    // setWeek(item.week_id ? item.week_id : "");
    SetWeekName(item.weeks ? item.weeks.name : "");
    SetWeekName1(item.from_date ? item.from_date : "");
    SetWeekName2(item.to_date ? item.to_date : "");
    SetMallArray(item.multiple_malls ? item.multiple_malls : "");

    // setMallsOption(item.multiple_malls ? item.multiple_malls : "");
  }, []);

  useEffect(() => {
    for (let i = 0; i < item.multiple_malls.length; i++) {
      mallsOption.push({
        value: item.multiple_malls[i].mall_id,
        label: item.multiple_malls[i]
          ? item.multiple_malls[i].malls
            ? item.multiple_malls[i].malls.name
            : ""
          : "",
      });
    }
  }, []);

  useEffect(() => {
    getBrand(item.stores.retailer_id);
    GetRegion();
    console.log("item isssss=>", item);
  }, []);

  const {
    deleteLeaderBoardApi,
    UpdateLeaderBoardApi,
    category_data,
    cinema_category_data,
    multiple_week_data,
    UpdateLandingpageSquareTileApi,
    deleteLandingpagSquareTileApi,
  } = useStoreContext();

  const { getBrand } = useMallContext();

  const [getcondation, SetCondation] = useState(false);

  // select date funtion is start

  // useEffect(() => { }, [startDate, endDate]);

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
  // const handleStartDateChange = (date) => {
  //   setStartDate(date);

  //   const nextSunday = moment(date).endOf("isoWeek").toDate();
  //   if (isRangeValid(date, nextSunday)) {
  //     setEndDate(nextSunday);
  //   } else {
  //     setEndDate(null);
  //   }
  // };

  // Event handler for selecting the end date
  // const handleEndDateChange = (date) => {
  //   if (isRangeValid(startDate, date)) {
  //     setEndDate(date);
  //   }
  // };

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

  const [getuploadnumber, SetUploadNumber] = useState(false);

  const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
    // useDropzone({
    //   maxFiles: 8,
    //   onDrop: (acceptedFiles) => {
    //     console.log("accept file are", acceptedFiles);
    //     SetCondation(true);
    //     for (let i = 0; i < acceptedFiles.length; i++) {
    //       if (acceptedFiles.length > 1) {
    //         if (
    //           acceptedFiles[i].type === "image/gif" ||
    //           acceptedFiles[i].type === "video/mp4"
    //         ) {
    //           Notification(
    //             "error",
    //             "Error!",
    //             "Please Select maximum 1 gif OR 8 images OR 1 video!"
    //           );

    //           SetUploadNumber(true);
    //         } else {
    //           {
    //             setFiles(
    //               acceptedFiles.map((file) =>
    //                 Object.assign(file, {
    //                   preview: URL.createObjectURL(file),
    //                 })
    //               )
    //             );
    //           }

    //           if (acceptedFiles.length === 0) {
    //             // window.location.reload(true);
    //             Notification(
    //               "error",
    //               "Error!",
    //               "Please Select maximum 8 images!"
    //             );
    //           }
    //           SetUploadNumber(false);
    //         }
    //       } else {
    //         {
    //           setFiles(
    //             acceptedFiles.map((file) =>
    //               Object.assign(file, {
    //                 preview: URL.createObjectURL(file),
    //               })
    //             )
    //           );
    //         }
    //         if (acceptedFiles.length === 0) {
    //           // window.location.reload(true);
    //           Notification(
    //             "error",
    //             "Error!",
    //             "Please Select maximum 8 images!"
    //           );
    //         }
    //         SetUploadNumber(false);
    //       }
    //     }
    //   },
    // });
    useDropzone({
      maxFiles: 1,
      onDrop: async (acceptedFiles) => {
        SetCondation(true);

        const maxSizeKB = 50;
        const maxSizeBytes = maxSizeKB * 1024;

        const filteredFiles = await Promise.all(
          acceptedFiles.map(async (file) => {
            const isSizeValid = file.size <= maxSizeBytes; // Limit size to 50KB (in bytes)
            const isImage = file.type.startsWith("image/"); // Check if it's an image file

            if (!isImage || !isSizeValid) {
              return null;
            }

            const img = new Image();
            img.src = URL.createObjectURL(file);
            await new Promise((resolve, reject) => {
              img.onload = resolve;
              img.onerror = reject;
            });

            // Check image dimensions
            const isDimensionsValid = img.width == 232 && img.height == 232;

            return isDimensionsValid ? file : null; // Return file if dimensions are valid, otherwise skip it
          })
        );
        const validFiles = filteredFiles.filter((file) => file !== null);

        setFiles(
          validFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
        if (validFiles.length !== acceptedFiles.length) {
          Notification(
            "error",
            "Error!",
            "Some files exceed the maximum size limit of 50KB or do not meet the dimension requirements of 232x232 pixels and will not be uploaded."
          );
        }
        // SetCondation(false);

        if (acceptedFiles.length === 0) {
          window.location.reload(true);
        }
      },
    });

  const thumbs = files.map((file) => (
    <>
      {file.type === "video/mp4" ? (
        <>
          <ReactPlayer
            url={file.preview}
            muted={true}
            autoplay={true}
            controls={false}
            playing={true}
            width="210px"
            height="210px"
            // autoplay={playing}
            // onReady={handlePlayerReady}
          />
        </>
      ) : (
        <img
          src={file.preview}
          style={{ width: "210px", height: "210px" }}
          className="img-fluidb img-fluid-width"
          alt="file"
        />
      )}
    </>
  ));

  // Update Leaderboard Api
  const [getweekcondation, SetWeekCondation] = useState(false);

  // const UpdateLeaderboard = async () => {
  //   const { startDate, endDate } = selectedDates;
  //   console.log("==>11", selectedDates);

  //   if (title == "" || undefined) {
  //     Notification("error", "Error!", "Please Enter Title!");
  //     return;
  //   } else if (weekname1 === "") {
  //     Notification("error", "Error", "Please Enter Start Date");
  //     return;
  //   } else if (weekname2 === "") {
  //     Notification("error", "Error", "Please Enter End Date");
  //     return;
  //   } else if (getmallarray.length < 0) {
  //     Notification("error", "Error!", "Please Select Mall!");
  //   } else if (BrandName == "" || undefined) {
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
  //     await formdata.append("brand_id", BrandId);
  //     await formdata.append("category_id", CategoryId);
  //     await formdata.append("region_child_id[0]", "");
  //     if (files[0] !== undefined) {
  //       // await formdata.append("image", files[0]);
  //       for (var j = 0; j < files.length; j++) {
  //         formdata.append("image[" + j + "]", files[j]);
  //       }
  //     }

  //     console.log("leaderboard formdata", formdata);

  //     const data = await UpdateLandingpageSquareTileApi(formdata);
  //     if (data) {
  //       if (data.success === 1) {
  //         console.log("category-data", data);
  //         Notification(
  //           "success",
  //           "Success!",
  //           "Landing Page Square Tile Updated Successfully!"
  //         );

  //         setTab(1);
  //         // getLeaderboard();
  //         // window.location.reload();
  //       } else if (data.success === 0){
  //         Notification(
  //           "error",
  //           "Error!",
  //           data.message
  //         );
  //       }
  //     }
  //   }
  // };

  // Deleate Leaderboard Api

  const UpdateLeaderboard = async () => {
    const { startDate, endDate } = selectedDates;
    console.log("==>11", selectedDates);

    if (weekname1 === "") {
      Notification("error", "Error", "Please Enter Start Date");
      return;
    } else if (weekname2 === "") {
      Notification("error", "Error", "Please Enter End Date");
      return;
    } else {
      const formdata = await new FormData();
      await formdata.append("id", item.id);

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

      if (files[0] !== undefined) {
        // await formdata.append("image", files[0]);
        for (var j = 0; j < files.length; j++) {
          formdata.append("image[" + j + "]", files[j]);
        }
      }

      console.log("leaderboard formdata", formdata);

      const data = await UpdateLandingpageSquareTileApi(formdata);
      if (data) {
        if (data.success === 1) {
          console.log("category-data", data);
          Notification(
            "success",
            "Success!",
            "Landing Page Square Tile Updated Successfully!"
          );

          setTab(1);
          // getLeaderboard();
          // window.location.reload();
        } else if (data.success === 0) {
          Notification("error", "Error!", data.message);
        }
      }
    }
  };
  const DeleteLeaderboard = async () => {
    const formdata = await new FormData();
    await formdata.append("id", item.id);

    const data = await deleteLandingpagSquareTileApi(formdata);
    if (data) {
      if (data.success === 1) {
        console.log("mall-data", data);
        Notification(
          "success",
          "Success!",
          "Landing Page Square Tile Deleted Successfully!"
        );

        setTab(1);
        getLeaderboard();
      }
    }
  };

  const Addtocart = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    const formdata = await new FormData();
    await formdata.append("qty", 1);
    await formdata.append("landing_page_square_tile_id", item.id);

    axios
      .post(add_store_cart, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(JSON.stringify(res, null, 2));
        Notification("success", "Success!", "Add to cart Successfully!");
        window.location.reload(true);
        // getLeaderboard();
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
          null();
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

  var [inputarray, setinputarray] = useState([]);
  const setChange = async (text, index, item) => {
    console.log("text ----->", text);
    console.log("item ----->", item.id);
    console.log("inputarray--->", inputarray);
    var check_id_exist = inputarray.some((i, index) => i.id === item.id);
    var exist_index = inputarray.findIndex((i, index) => i.id === item.id);

    console.log("-===========", check_id_exist, exist_index);
    const temp = inputarray;

    if (check_id_exist) {
      temp[exist_index].text = text;
      inputarray = temp;
    } else {
      inputarray.push({ id: item.id, text: text });
    }
  };
  //    setChange(text, index, item);

  return (
    <>
      <div className="leaderboard-card-main-wrapp">
        {/* Leaderboard flex start */}
        <div className="leaderboard-card-flex-wrapp leaderboard-card-flex-wrapp-half">
          {/* Leaderboard first part responsive side start */}
          <div className="leaderboard-card-first-resp-main-wrapp">
            <p className="leaderboard-last-part-txt">
              {/* Service fee will apply if canceled */}
            </p>
            <button className="leaderboard-delete-icon-btn">
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
            {/* <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl">Title:</label>
              <input
                type="text"
                className="leaderboard-card-inp"
                placeholder="Summer Campaign 2024"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div> */}
            {/* Leaderboard inputbox end */}

            {/* Leaderboard inputbox start */}
            {/* <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl">Mall(s):</label>
              <div
                onClick={() => {
                  openMallModal();
                }}
                className="leaderboard-card-inp"
                style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}
              >
                {gettrue === true ? (
                  <>
                    {selectedMalls && selectedMalls.length > 0
                      ? selectedMalls.map((mall, mindx) => {
                          return <p className="mall-lib-font">{mall}</p>;
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
            </div> */}
            {/* Leaderboard inputbox end */}
            <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl" htmlFor="">
                Week:<span className="star_require">*</span>
              </label>
              {/* <input
              type="date"
              value={eventEndDate}
              onChange={(e) => setEventEndDate(e.target.value)}
              name=""
              id=""
              className="input_box"
            /> */}
              {/* <DatePicker
                selected={startDate}
                onChange={onDateChage}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                // selectsDisabledDaysInRange
                // inline
                monthsShown={2}
                calendarStartDay={1}
                className="leaderboard-card-inp"
                placeholderText="Select your week"
              /> */}
              <DateRangePicker
                oneTap
                hoverRange="week"
                isoWeek
                placeholder={`${weekname1} - ${weekname2}`}
                className="leaderboard-card-inp DateRangePicker_LeaderboardCard"
                startDate={selectedDates.startDate} // Set the initial start date
                endDate={selectedDates.endDate}
                onChange={handleDateChange}
                disabledDate={combine(allowedMaxDays(7), beforeToday())}
              />
            </div>
          </div>
          <div className="leaderboard-card-part-sec" {...getRootlogoProps()}>
            <input
              {...getInputlogoProps()}
              accept="image/jpeg, image/jpg, image/png, image/eps,image/gif,image/gif,video/*"
            />
            {/* <div className="myprofile_inner_sec2"> */}
            {getcondation === true ? (
              <>
                {files && files.length > 0 ? (
                  <div
                    className="myprofile_inner_sec2_img_upload leaderboard-card-part-img-upl myprofile_inner_sec2_img_upload_border"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      width: "210px",
                      flexWrap: "wrap",
                      height: "210px",
                    }}>
                    {thumbs}
                  </div>
                ) : (
                   
                    <div
                      className="leaderboard-card-part-sec2"
                      style={{
                        width: "210px",
                        textAlign: "center",
                      }}>
                      <AiOutlineCloudUpload
                        style={{
                          width: "60px",
                          height: "60px",
                          color: "var(--color-orange)",
                          marginBottom: "10px",
                        }}
                      />
                      <h4 style={{ fontSize: "14px" }}>
                        .JPG .PNG .GIF (232 x 232 pixels)
                      </h4>
                      <p style={{ fontSize: "14px" }}>(max 50kb)</p>
                      <p style={{ fontSize: "14px" }}>
                        You can also upload file by
                      </p>
                      {/* <input
                      {...getInputlogoProps()}
                      accept="image/jpeg, image/jpg, image/png, image/eps"
                    /> */}
                      <button
                        type="button"
                        className="click_upload_btn"
                        style={{ marginBottom: "10px" }}>
                        click here
                      </button>
                      {/* <a href="">clicking here</a> */}
                    </div>
                
                )}
              </>
            ) : (
              <>
                {item.multiple_images === null ? (
                  <div
                    className="leaderboard-card-part-sec2"
                    style={{
                      width: "210px",
                      textAlign: "center",
                    }}>
                    <AiOutlineCloudUpload
                      style={{
                        width: "60px",
                        height: "60px",
                        color: "var(--color-orange)",
                        marginBottom: "10px",
                      }}
                    />
                    <h4 style={{ fontSize: "14px" }}>
                      .JPG .PNG .GIF (200 x 200 pixels)
                    </h4>
                    <p style={{ fontSize: "14px" }}>(max 100kb)</p>
                    <p style={{ fontSize: "14px" }}>
                      You can also upload file by
                    </p>
                    {/* <input
                      {...getInputlogoProps()}
                      accept="image/jpeg, image/jpg, image/png, image/eps"
                    /> */}
                    <button
                      type="button"
                      className="click_upload_btn"
                      style={{ marginBottom: "10px" }}>
                      click here
                    </button>
                    {/* <a href="">clicking here</a> */}
                  </div>
                ) : (
                  <>
                    <div
                      className="myprofile_inner_sec2_img_upload leaderboard-card-part-img-upl myprofile_inner_sec2_img_upload_border"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        flexWrap: "wrap",
                        width: "210px",
                        height: "210px",
                      }}>
                      {item.multiple_images &&
                        item.multiple_images.map((item) => {
                          var type = item.image.split(".")[1];

                          return (
                            <>
                              {type === "mp4" ? (
                                <ReactPlayer
                                  url={item.image_path}
                                  muted={true}
                                  autoplay={true}
                                  controls={false}
                                  playing={true}
                                  width="210px"
                                  height="210px"
                                  // autoplay={playing}
                                  // onReady={handlePlayerReady}
                                />
                              ) : (
                                <img
                                  src={item.image_path}
                                  style={{ width: "210px", height: "210px" }}
                                  className="img-fluidb img-fluid-width"
                                />
                              )}
                            </>
                          );
                        })}
                    </div>
                  </>
                )}
              </>
            )}

            {/* </div> */}
          </div>
          {/* Leaderboard part second end */}

          {/* Leaderboard part third start */}
          <div className="leaderboard-card-part-third leaderboard-card-part-third-half">
            <button
              onClick={() => {
                DeleteLeaderboard();
              }}
              className="leaderboard-delete-icon-btn">
              cancel{" "}
              <img
                src={images.delete_icon}
                className="leaderboard-delete-icon"
              />
            </button>
            <p className="leaderboard-last-part-txt">
              {/* Service fee will apply if canceled */}
            </p>
            <div className="leaderboard-btn-box" style={{ gap: "0.5rem" }}>
              {item.cart_status === 0 ? (
                <>
                  <button
                    className="btn btn-black"
                    style={{ padding: "0.4rem", fontSize: "16px" }}
                    onClick={() => {
                      Addtocart();
                      // window.location.reload(true);
                    }}>
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
                disabled={getuploadnumber === true ? true : false}
                onClick={() => {
                  UpdateLeaderboard();
                }}>
                Update
              </button>
            </div>
          </div>
          {/* Leaderboard part third end */}

          {/* Leaderboard last part responsive side start */}
          <div
            className="leaderboard-card-sec-resp-main-wrapp"
            style={{ gap: "0.5rem" }}>
            <div className="leaderboard-btn-box">
              {item.cart_status === 0 ? (
                <>
                  <button
                    style={{ width: "165px" }}
                    className="btn btn-black"
                    onClick={() => {
                      Addtocart();
                    }}>
                    Add To Cart
                  </button>
                </>
              ) : (
                <button
                  style={{ width: "165px" }}
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
            {/* <Link className="leaderboard-delete-icon-btn">
              <span className="leaderboard-extend-txt">Extend</span>{" "}
              <img
                src={images.extend_icon}
                className="leaderboard-delete-icon"
              />
            </Link> */}
            <div className="leaderboard-btn-box">
              <button
                style={{ width: "165px" }}
                className="btn btn-orange"
                disabled={getuploadnumber === true ? true : false}
                onClick={() => {
                  UpdateLeaderboard();
                }}>
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
        style={customStyles}>
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
                        key={mindx}>
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
                }}>
                Region
              </p>

              {getregion_array && getregion_array.length > 0
                ? getregion_array.map((item, index) => {
                    return (
                      <div
                        className="bim_accordian_wrapp"
                        style={{ marginBottom: "6px" }}
                        key={item.region_id}>
                        <button
                          className="bim_accordian_btn"
                          onClick={() => {
                            setToggle(item.region_id);
                            handleRegionChange(
                              item.region_name,
                              item.region_id
                            );
                          }}>
                          <p
                            style={{
                              color:
                                item.region_id === toggle ? "#ff8b00" : "#000",
                              fontWeight:
                                item.region_id === toggle ? "500" : "300",
                            }}>
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
                                    }}>
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
                }}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default RetailLandingPageSquareTileCard;
