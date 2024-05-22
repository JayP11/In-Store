import React, { useEffect, useState } from "react";
// import "./AddProductTilesBannerCard.css"
import "./AddCinemaProductTileBannerCard.css"
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMallContext } from "../../context/mall_context";
import { useStoreContext } from "../../context/store_context";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Notification from "../../utils/Notification";
import moment from "moment";
import { DateRangePicker } from "rsuite";
import { ACCEPT_HEADER, get_age_restriction } from "../../utils/Constant";
import axios from "axios";

const animatedComponents = makeAnimated();

const AddCinemaProductTileBannerCard = ({
  item,
  mindx,
  openMallModal,
  setTab,
  gatweek,
  setweek,
  peopleInfo,
  mallidarray,
  regionidarray,
  selectedMalls,
}) => {
  const {
    DeleteProductTileApi,
    category_data,
    cinema_category_data,
    CreateProductTileApi,
    multiple_week_data,
  } = useStoreContext();
  const { get_brand_data, get_mall_data } = useMallContext();

  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [bookingUrl, setBookingUrl] = useState("");
  const [BrandName, setBrandName] = useState("");
  const [age, setAge] = useState("");
  const [ageId, setAgeId] = useState("");
  const [agearray, SetAgeArray] = useState([]);

  const [Category, setCategory] = useState("");
//   const [Price, setPrice] = useState("");
//   const [Description, setDiscription] = useState("");
  const [Week, setWeek] = useState("");
  const [Region, setRegion] = useState([]);
  const [mallsOption, setMallsOption] = useState([]);
//   const [getTag, setTag] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  // const [Category, setCategory] = useState("");

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  const { allowedMaxDays, beforeToday, combine } = DateRangePicker;

  // const [deletemodalstate, setDleteModalstate] = useState(false);
  const [getcondition, setCondition] = useState(true);

  useEffect(() => {
    // setTitle(item.title ? item.title : "");
    // setMallName(item.malls.name ? item.malls.name : '');
    // setBrandName(item.brands.name ? item.brands.name : "");
    // setCategory(item.categorys.name ? item.categorys.name : item.categorys.name);
    // setDiscription(item.description ? item.description : item.description);
    // setPrice(item.price ? item.price : item.price);
    // setWeek(item.title ? item.title : "");
    console.log("get brand is", get_brand_data);
  }, []);

  const handleDateChange = (startDate, endDate) => {
    console.log("==>", startDate, endDate);
    setSelectedDates({ startDate, endDate });
  };

  // logo dropzon

  // const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
  //   useDropzone({
  //     onDrop: (acceptedFiles) => {
  //       console.log("file type", files[0]);
  //       console.log("acceptedFiles", acceptedFiles[0].File);
  //       const filteredFiles = acceptedFiles.filter(file => file.size <= 50000); // Limit size to 200KB (in bytes)

  //       {
  //         setFiles(
  //           filteredFiles.map((file) =>
  //             Object.assign(file, {
  //               preview: URL.createObjectURL(file),
  //             })
  //           )
  //         );
  //         if (filteredFiles.length !== acceptedFiles.length) {
  //           Notification("error", "Error!", "Some files exceed the maximum size limit of 50KB and will not be uploaded.");
  //         }
  //       }
  //       setCondition(true);
  //       if (acceptedFiles.length === 0) {
  //         window.location.reload(true);
  //       }
  //     },
  //   });

  // const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } = useDropzone({
  //   onDrop: (acceptedFiles) => {
  //     setCondition(true);
  
  //     const filteredFiles = acceptedFiles.filter(file => {
  //       const isSizeValid = file.size <= 50000; // Limit size to 50KB (in bytes)
  //       const isImage = file.type.startsWith('image/'); // Check if it's an image file
  //       let isDimensionsValid = false; // Assume dimensions are valid by default
  
  //       // Check image dimensions
  //       if (isImage) {
  //         const img = new Image();
  //         img.src = URL.createObjectURL(file);
  //         img.onload = () => {
  //           if (img.width <= 100 && img.height <= 100) {
  //             isDimensionsValid = true;
  //           }
  //         };
  //       }
  
  //       return isSizeValid && isImage && isDimensionsValid;
  //     });
  
  //     setFiles(
  //       filteredFiles.map((file) =>
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file),
  //         })
  //       )
  //     );
  
  //     if (filteredFiles.length !== acceptedFiles.length) {
  //       Notification("error", "Error!", "Some files exceed the maximum size limit of 50KB or do not meet the dimension requirements of 100x100 pixels and will not be uploaded.");
  //     }
  
  //     if (acceptedFiles.length === 0) {
  //       window.location.reload(true);
  //     }
  //   },
  // });
  
  
 
  

  // const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
  // useDropzone({
  //   onDrop: async (acceptedFiles) => {
  //     setCondition(true);

  //     const filteredFiles = await Promise.all(
  //       acceptedFiles.map(async (file) => {
  //         const isSizeValid = file.size <= 4000; // Limit size to 50KB (in bytes)
  //         const isImage = file.type.startsWith("image/"); // Check if it's an image file

  //         if (!isImage || !isSizeValid) {
  //           return null; // Skip files that are not images or exceed size limit
  //         }

  //         // Load image and wait for it to load
  //         const img = new Image();
  //         img.src = URL.createObjectURL(file);
  //         await new Promise((resolve, reject) => {
  //           img.onload = resolve;
  //           img.onerror = reject;
  //         });

  //         // Check image dimensions
  //         const isDimensionsValid = img.width <= 100 && img.height <= 100;

  //         return isDimensionsValid ? file : null; // Return file if dimensions are valid, otherwise skip it
  //       })
  //     );

  //     // Filter out null values (files that were skipped)
  //     const validFiles = filteredFiles.filter((file) => file !== null);

  //     setFiles(
  //       validFiles.map((file) =>
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file),
  //         })
  //       )
  //     );

  //     if (validFiles.length !== acceptedFiles.length) {
  //       Notification(
  //         "error",
  //         "Error!",
  //         "Some files exceed the maximum size limit of 50KB or do not meet the dimension requirements of 100x100 pixels and will not be uploaded."
  //       );
  //     }

  //     if (acceptedFiles.length === 0) {
  //       window.location.reload(true);
  //     }
  //   },
  // });

  const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
    useDropzone({
      onDrop: async (acceptedFiles) => {
        setCondition(true);

        const maxSizeKB = 50; // Maximum size limit in KB
        const maxSizeBytes = maxSizeKB * 1024; // Convert KB to bytes

        const filteredFiles = await Promise.all(
          acceptedFiles.map(async (file) => {
            const isSizeValid = file.size <= maxSizeBytes; // Limit size to 50KB (in bytes)
            const isImage = file.type.startsWith("image/"); // Check if it's an image file

            if (!isImage || !isSizeValid) {
              return null; // Skip files that are not images or exceed size limit
            }

            // Load image and wait for it to load
            const img = new Image();
            img.src = URL.createObjectURL(file);
            await new Promise((resolve, reject) => {
              img.onload = resolve;
              img.onerror = reject;
            });

            // Check image dimensions
            const isDimensionsValid = img.width == 418 && img.height == 590;

            return isDimensionsValid ? file : null; // Return file if dimensions are valid, otherwise skip it
          })
        );

        // Filter out null values (files that were skipped)
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
            "Some files exceed the maximum size limit of 50KB or do not meet the dimension requirements of 418x590 pixels and will not be uploaded."
          );
        }

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

  const AddProductTilesBanner = async () => {
    console.log("test");
    const { startDate, endDate } = selectedDates;
    console.log("==>11", selectedDates);

    if (title == "" || undefined) {
      Notification("error", "Error!", "Please Enter Title!");
      return;
    } else if (mallidarray == "" || undefined) {
      Notification("error", "Error!", "Please Select Mall!");
      return;
    } else if (startDate == "" || startDate == undefined) {
      Notification("error", "Error", "Please Enter Start Date");
      return;
    } else if (endDate == "" || endDate == undefined) {
      Notification("error", "Error", "Please Enter End Date");
      return;
    } else if (regionidarray == "" || undefined) {
      Notification("error", "Error!", "Please Select Region!");
    } 
    // else if (BrandName == "" || undefined) {
    //   Notification("error", "Error!", "Please Select Brand!");
    // } 
    else if (ageId == "" || undefined) {
        Notification("error", "Error!", "Please Select Age!");
      }  else if (files == "" || undefined) {
        Notification("error", "Error", "Please Upload Image");
        return;
      }  else {
      const formdata = await new FormData();
      await formdata.append("title", title);
      await formdata.append("booking_url",bookingUrl);
      await formdata.append("age_restriction_id", ageId);
      for (var i = 0; i < regionidarray.length; i++) {
        await formdata.append("region_id[" + i + "]", regionidarray[i].id);
      }
      for (var i = 0; i < mallidarray.length; i++) {
        await formdata.append("mall_id[" + i + "]", mallidarray[i].id);
      }
      // await formdata.append("brand_id", BrandName);
      await formdata.append("cinema_category_id", Category);
    //   await formdata.append("price", Price);
    //   await formdata.append("description", Description);
    //   await formdata.append("tag", getTag);
      await formdata.append(
        "from_date",
        moment(startDate[0]).format("YYYY-MM-DD")
      );
      await formdata.append("to_date", moment(startDate[1]).format("YYYY-MM-DD"));
      await formdata.append("region_child_id[0]", "");
      if (files[0] !== undefined) {
        await formdata.append("image", files[0]);
      }

      console.log("-=-=-=->", formdata);
      const data = await CreateProductTileApi(formdata);
      if (data) {
        if (data.success === 1) {
          console.log("category-data", data);
          Notification(
            "success",
            "Success!",
            "Product Tiles Added Successfully!"
          );

          setTab(1);
          // getLeaderboard();
          // window.location.reload();
        }
      }
    }
  };

  const DeleteProductTilesboard = async () => {
    console.log("test");

    const formdata = await new FormData();
    await formdata.append("id", item.id);

    console.log("-=-=-=->", formdata);
    const data = await DeleteProductTileApi(formdata);
    if (data) {
      if (data.success === 1) {
        console.log("mall-data", data);
        setTab(1);
        // getLeaderboard();
      }
    }
  };

  // const testfunction = () => {
  //   console.log("test");
  // }

  const onDateChage = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    getAge();

    console.log("cinema category data", cinema_category_data);
  },[]);

  const getAge = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
        .get(get_age_restriction, {
            headers: {
                Accept: ACCEPT_HEADER,
                Authorization: "Bearer " + token,
            },
        })
        .then((res) => {
            console.log("ggg", JSON.stringify(res.data, null, 2));
            if (res.data.success == 1) {
                SetAgeArray(res.data.data);
            } else {
                null;
            }
        })
        .catch((err) => {
            console.log("err11", err);
        });
};
  return (
    <div className="leaderboard-card-main-wrapp product-tiles-card-main-wrapp">
      {/* Leaderboard flex start */}
      <div className="leaderboard-card-flex-wrapp">
        {/* Leaderboard first part responsive side start */}
        <div className="leaderboard-card-first-resp-main-wrapp">
          <p className="leaderboard-last-part-txt">
            {/* Service fee will apply if canceled */}
          </p>
          <button
            className="leaderboard-delete-icon-btn"
            onClick={() => DeleteProductTilesboard()}>
            cancel{" "}
            <img src={images.delete_icon} className="leaderboard-delete-icon" />
          </button>
        </div>
        {/* Leaderboard first part responsive side end*/}

        {/* Leaderboard part first start */}
        <div
          className="leaderboard-card-part-first leaderboard-card-part-first-cinema {
"
          style={{ width: "42% !important" }}>
          {/* Leaderboad form start */}

          {/* Leaderboard inputbox start */}
          <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl" style={{minWidth:"130px"}}>Title:<span className="star_require">*</span></label>
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
            <label className="leaderboard-card-lbl" 
            
            
            
            style={{minWidth:"130px"}}>Mall(s):</label>
            <div
              onClick={() => openMallModal()}
              className="leaderboard-card-inp"
              style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {selectedMalls && selectedMalls.length > 0
                ? selectedMalls.map((mall, mindx) => {
                  return <p className="mall-lib-font">{mall}</p>;
                })
                : null}
           
            </div>
            
          </div>
          {/* Leaderboard inputbox end */}
          <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl" style={{minWidth:"130px"}} htmlFor="" >
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
                placeholder="Select your Week"

                className="leaderboard-card-inp DateRangePicker_LeaderboardCard"
                startDate={selectedDates.startDate} // Set the initial start date
                endDate={selectedDates.endDate}
                onChange={handleDateChange}
                disabledDate={combine(allowedMaxDays(7), beforeToday())}
              />
          </div>
          {/* Leaderboard inputbox start */}
          {/* <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl">Brand(s):</label>
            <div className="select-wrapper" style={{ width: "100%" }}>
              <select
                className="leaderboard-card-inp"
                onChange={(e) => {
                  console.log("rrr", e.target.value);
                  setBrandName(e.target.value);
                }}>
                <option selected disabled value="">
                  Select Brand
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

          {/* Leaderboard inputbox start */}

          <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl" style={{minWidth:"130px"}}>Categories:<span className="star_require">*</span></label>
            <div className="select-wrapper" style={{ width: "100%" }}>
              <select
                className="leaderboard-card-inp"
                onChange={(e) => {
                  console.log("rrr", e.target.value);
                  setCategory(e.target.value);
                }}>
                <option selected disabled value="">
                  Select Category
                </option>
                {cinema_category_data &&
                    cinema_category_data.map((item, index) => {
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

          {/* <div className="leaderboard-card-inpbox-wrapp">
                        <label className="leaderboard-card-lbl">From:</label>
                        <DatePicker
                            // selected={birthDate}
                            // onChange={(date) => setBirthDate(date)}
                            className="red-border leaderboard-card-inp"
                            placeholderText="Date Of Birth"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div> */}
          {/* Leaderboard inputbox end */}

          {/* Leaderboard inputbox start */}
          {/* <div className="leaderboard-card-inpbox-wrapp">
                        <label className="leaderboard-card-lbl">Until:</label>
                        <DatePicker
                            // selected={birthDate}
                            // onChange={(date) => setBirthDate(date)}
                            className="red-border leaderboard-card-inp"
                            placeholderText="Date Of Birth"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div> */}
          {/* Leaderboard inputbox end */}

          {/* Leaderboard inputbox start */}
          <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl" style={{minWidth:"130px"}}>Age restriction:<span className="star_require">*</span></label>
              <div className="select-wrapper" style={{ width: "100%" }}>
                <select
                placeholder="Select age restriction"
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    setAge(e.target.value);
                    setAgeId(e.target.value);
                  }}>
                  <option selected disabled value="">
                    {age}
                  </option>
                  {agearray &&
                    agearray.map((item, index) => {
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

          <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl" style={{minWidth:"130px"}}>Booking URL:<span className="star_require">*</span></label>
            <input
              type="text"
              className="leaderboard-card-inp"
              placeholder="Enter URL"
              value={bookingUrl}
              onChange={(e) => setBookingUrl(e.target.value)}
            />
          </div>
          {/* <button onClick={() => openMallModal()} className="leaderboard-delete-icon-btn">
                        <span className="leaderboard-extend-txt">Chose Date</span>{" "}
                        <img src={images.banner_cal_img} className="leaderboard-delete-icon" style={{ width: "42px", height: "42px" }} />
                    </button> */}

          {/* Leaderboard inputbox end */}

          {/* Leaderboad form end */}
        </div>

        {/* Leaderboard part first end */}

        {/* Leaderboard part second start */}

        <div
          className="leaderboard-card-part-sec product-tiles-card-sec-part leaderboard-card-part-sec-chng cinema_pro_tile_sec"
          style={{ width: "235px", height: "200px" }}
          {...getRootlogoProps()}>
          <input
            {...getInputlogoProps()}
            accept="image/jpeg, image/jpg, image/png, image/eps"
          />
          {getcondition === true ? (
            <>
              {files && files.length > 0 ? (
                <div className="myprofile_inner_sec2_img_upload leaderboard-card-part-img-upl leaderboard-card-part-img-upl-cinema myprofile_inner_sec2_img_upload_border">
                  {thumbs}
                </div>
              ) : (
                <div style={{ width: "100%" }}>
                  <div className="leaderboard-card-part-sec2"style={{height:"255px",textAlign:"center",paddingLeft:"1.1rem",paddingRight:"1.1rem"}}>
                    <AiOutlineCloudUpload
                      style={{
                        width: "60px",
                        height: "60px",
                        color: "var(--color-orange)",
                        marginBottom: "10px",
                      }}
                    />
                    <h4 style={{ fontSize: "14px" }}>.JPG .PNG .GIF (418 x 590 pixels)</h4>
                    <p style={{ fontSize: "14px" }}>
                      (max 50kb)
                    </p>
                    <p style={{ fontSize: "14px" }}>
                    You can also upload file by
                    </p>

                    <button
                      type="button"
                      className="click_upload_btn"
                      style={{ marginBottom: "10px",fontWeight:"600",color:"var(--color-orange)" }}>
                      click here
                    </button>
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
                    <h4 style={{ fontSize: "14px" }}>.PDF .JPG .PNG</h4>
                    <p style={{ fontSize: "14px" }}>
                      You can also upload file by
                    </p>

                    <button
                      type="button"
                      className="click_upload_btn"
                      style={{ marginBottom: "10px" }}>
                      click here
                    </button>
                    {/* <a href="">clicking here</a> */}
                  </div>
                </div>
              ) : (
                <div className="myprofile_inner_sec2_img_upload leaderboard-card-part-img-upl leaderboard-card-part-img-upl-cinema myprofile_inner_sec2_img_upload_border">
                  <img
                    src={item.image_path}
                    style={{ width: "100%", height: "100%" }}
                    className="img-fluidb"
                  />
                </div>
              )}
            </>
          )}
        </div>
        {/* Leaderboard part second end */}

        {/* Leaderboard part third start */}
        <div
          className="leaderboard-card-part-third"
          style={{ width: "24%", alignSelf: "end" }}>
          {/* <button className='leaderboard-delete-icon-btn' onClick={() => DeleteProductTilesboard()}>cancel <img src={images.delete_icon} className='leaderboard-delete-icon' /></button>
                    <p className='leaderboard-last-part-txt'>Service fee will
                        apply if canceled</p>
                    <Link className='leaderboard-delete-icon-btn'><span className='leaderboard-extend-txt'>Extend</span> <img src={images.extend_icon} className='leaderboard-delete-icon' /></Link> */}
          <div className="leaderboard-btn-box">
            <button style={{ backgroundColor: "#ff8b00",fontSize:"16px",padding:"0.4rem" }}
              className="btn btn-orange"
              onClick={() => AddProductTilesBanner()}>
              Publish
            </button>
          </div>
        </div>
        {/* Leaderboard part third end */}

        {/* Leaderboard last part responsive side start */}
        <div className="leaderboard-card-sec-resp-main-wrapp">
          {/* <Link className='leaderboard-delete-icon-btn'><span className='leaderboard-extend-txt'>Extend</span> <img src={images.extend_icon} className='leaderboard-delete-icon' /></Link> */}
          <div className="leaderboard-btn-box">
            <button
              className="btn btn-orange"
              onClick={() => AddProductTilesBanner()}>
              Publish
            </button>
          </div>
        </div>
        {/* Leaderboard last part responsive side end */}
      </div>
      {/* Leaderboard flex start */}
    </div>
  );
};

export default AddCinemaProductTileBannerCard;
