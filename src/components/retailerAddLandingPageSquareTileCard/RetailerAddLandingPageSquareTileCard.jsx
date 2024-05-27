// import React, { useEffect, useState } from "react";
// // import "./AddLeaderBoardCard.css";
// import { useDropzone } from "react-dropzone";
// import { AiOutlineCloudUpload } from "react-icons/ai";
// import moment from "moment";
// import { useStoreContext } from "../../context/store_context";
// import { useMallContext } from "../../context/mall_context";
// import Select from "react-select";
// import makeAnimated from "react-select/animated";
// import Notification from "../../utils/Notification";
// import { DateRangePicker } from "rsuite";
// import ReactPlayer from "react-player";
// // import DatePicker from 'rsuite/DatePicker';

// // import 'rsuite/dist/rsuite.min.css';

// const RetailerAddLandingPageSquareTileCard = ({
//   openMallModal,
//   setTab,
//   gatweek,
//   setweek,
//   peopleInfo,
//   mallidarray,
//   regionidarray,
//   selectedMalls,
// }) => {
//   useEffect(() => {
//     // console.log("mallidarray", mallidarray);
//   }, [gatweek]);

//   const {
//     cinema_category_data,
//     category_data,
//     CreateLandingPageSquareTileApi,
//   } = useStoreContext();
//   const { get_brand_data, get_mall_data } = useMallContext();
//   const [files, setFiles] = useState([]);
//   const [uploadNumber, setUploadNumber] = useState(false);

//   const [title, setTitle] = useState("");
//   const [BrandName, setBrandName] = useState("");
//   const [MallName, setMallName] = useState("");
//   const [Category, setCategory] = useState("");
//   const [Price, setPrice] = useState("");
//   const [Description, setDiscription] = useState("");
//   const [mallsOption, setMallsOption] = useState([]);
//   const [selectedDates, setSelectedDates] = useState({
//     startDate: null,
//     endDate: null,
//   });

//   const { allowedMaxDays, beforeToday, combine } = DateRangePicker;

//   // const [startDate, setStartDate] = useState();
//   // const [endDate, setEndDate] = useState();

//   const [Week, setWeek] = useState("");
//   const [Region, setRegion] = useState([]);

//   // select date funtion is start

//   const [startDate, setStartDate] = useState();
//   const [endDate, setEndDate] = useState();

//   const onDateChage = (dates) => {
//     const [start, end] = dates;
//     setStartDate(start);
//     setEndDate(end);

//     const mmm = moment(start).format("MMM");
//     console.log("s", mmm);

//     if (montharray.includes(start)) {
//       console.log("yesss");
//     } else {
//       console.log("nooooo");
//     }
//   };

//   // const handleDateChange = (dates) => {
//   //   const [start, end] = dates;
//   //   setStartDate(start);
//   //   setEndDate(end);
//   // };

//   const handleDateChange = (startDate, endDate) => {
//     console.log("==>", startDate, endDate);
//     setSelectedDates({ startDate, endDate });
//   };

//   const maxDate = startDate ? new Date(startDate) : null;
//   if (maxDate) {
//     maxDate.setDate(maxDate.getDate() + 7);
//   }

//   // Calculate the minimum and maximum dates for a one-week range
//   const today = new Date();
//   const oneWeekLater = new Date(today);
//   oneWeekLater.setDate(oneWeekLater.getDate() + 7);
//   const { getBrand } = useMallContext();
//   // Helper function to check if a date is a Monday
//   const isMonday = (date) => {
//     return moment(date).isoWeekday() === 1;
//   };

//   // Helper function to check if a date is a Sunday
//   const isSunday = (date) => {
//     return moment(date).isoWeekday() === 7;
//   };

//   // Helper function to check if the selected range is valid
//   const isRangeValid = (start, end) => {
//     if (!start || !end) {
//       return false; // No selection made
//     }

//     // Check if the range is exactly 7 days
//     return moment(end).diff(moment(start), "days") === 6;
//   };

//   // Event handler for selecting the start date
//   const handleStartDateChange = (date) => {
//     setStartDate(date);

//     // Calculate the end date based on the selected start date
//     const nextSunday = moment(date).endOf("isoWeek").toDate();
//     if (isRangeValid(date, nextSunday)) {
//       setEndDate(nextSunday);
//     } else {
//       setEndDate(null);
//     }
//   };

//   // Event handler for selecting the end date
//   const handleEndDateChange = (date) => {
//     if (isRangeValid(startDate, date)) {
//       setEndDate(date);
//     }
//   };

//   const [montharray, SetMonthArray] = useState([]);

//   function getMondaysInMonth(month) {
//     console.log("month-->", month);
//     const firstDayOfMonth = moment().month(month).startOf("month");
//     const lastDayOfMonth = moment().month(month).endOf("month");

//     const mondaysInMonth = [];

//     // Iterate over the days in the month and add the Mondays to the array.
//     for (
//       let day = firstDayOfMonth;
//       day.isSameOrBefore(lastDayOfMonth);
//       day.add(1, "day")
//     ) {
//       if (day.day() === 1) {
//         console.log(JSON.stringify(day.clone(), null, 2));
//         mondaysInMonth.push(day.clone());
//       }
//     }
//     console.log("mondaysInMonth-->", mondaysInMonth);
//     SetMonthArray(mondaysInMonth);
//     // Return the array of Mondays in the month.
//     return mondaysInMonth;
//   }

//   useEffect(() => {
//     getMondaysInMonth("");
//   }, []);

//   // select date funtion is end

//   // logo dropzon
//   const [getuploadnumber, SetUploadNumber] = useState(false);

//   const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
//     useDropzone({
//       maxFiles: 1,

//       onDrop: (acceptedFiles) => {
//         const maxFileSize = 50 * 1024;
//         let validFiles = [];

//         // for (const file of acceptedFiles) {
//         //   if (file.size > maxFileSize) {
//         //     Notification(
//         //       "error",
//         //       "Error!",
//         //       "File size must be less than 50 KB"
//         //     );
//         //     return;
//         //   }

//         //   // Check image dimensions
//         //   const img = new Image();
//         //   img.onload = () => {
//         //     if (img.width !== 232 || img.height !== 232) {
//         //       Notification(
//         //         "error",
//         //         "Error!",
//         //         "Image dimensions must be 232x232 pixels"
//         //       );
//         //       return;
//         //     }

//         //     // If the file passes both checks, add it to the state
//         //     setFiles([
//         //       Object.assign(file, {
//         //         preview: URL.createObjectURL(file),
//         //       }),
//         //     ]);
//         //     setUploadNumber(false);
//         //   };
//         //   img.onerror = () => {
//         //     Notification("error", "Error!", "Invalid image file");
//         //   };
//         //   img.src = URL.createObjectURL(file);
//         // }

//         acceptedFiles.forEach((file) => {
//           // Check file size
//           if (file.size > maxFileSize) {
//             Notification(
//               "error",
//               "Error!",
//               "File size must be less than 50 KB"
//             );
//             return;
//           }

//           // Check image dimensions
//           const img = new Image();
//           img.onload = () => {
//             if (img.width !== 232 || img.height !== 232) {
//               Notification(
//                 "error",
//                 "Error!",
//                 "Image dimensions must be 232x232 pixels"
//               );
//               return;
//             }

//             // If the file passes both checks, add it to the validFiles array
//             validFiles.push(
//               Object.assign(file, {
//                 preview: URL.createObjectURL(file),
//               })
//             );

//             // Update state if there are valid files
//             if (validFiles.length > 0) {
//               setFiles(validFiles);
//               setUploadNumber(false);
//             }
//           };
//           img.onerror = () => {
//             Notification("error", "Error!", "Invalid image file");
//           };
//           img.src = URL.createObjectURL(file);
//         });
//         // const filteredFiles = await Promise.all(
//         //   acceptedFiles.map(async (file) => {
//         //     const isSizeValid = file.size <= maxSizeBytes; // Limit size to 50KB (in bytes)
//         //     const isImage = file.type.startsWith("image/"); // Check if it's an image file

//         //     if (!isImage || !isSizeValid) {
//         //       return null; // Skip files that are not images or exceed size limit
//         //     }

//         //     // Load image and wait for it to load
//         //     const img = new Image();
//         //     img.src = URL.createObjectURL(file);
//         //     await new Promise((resolve, reject) => {
//         //       img.onload = resolve;
//         //       img.onerror = reject;
//         //     });

//         //     // Check image dimensions
//         //     const isDimensionsValid = img.width == 354 && img.height == 350;

//         //     return isDimensionsValid ? file : null; // Return file if dimensions are valid, otherwise skip it
//         //   })
//         // );

//         for (let i = 0; i < acceptedFiles.length; i++) {
//           const file = acceptedFiles[i];
//           // Check file size
//           if (file.size > maxFileSize) {
//             Notification(
//               "error",
//               "Error!",
//               "File size must be less than 50 KB"
//             );
//             continue;
//           }
//           if (
//             acceptedFiles.length > 1 &&
//             (file.type === "image/gif" || file.type === "video/mp4")
//           ) {
//             Notification("error", "Error!", "Please Select 1 gif OR 1 image!");
//             SetUploadNumber(true);
//             return; // Exit the function if the condition is met
//           }

//           if (acceptedFiles.length > 1) {
//             if (
//               acceptedFiles[i].type === "image/gif" ||
//               acceptedFiles[i].type === "video/mp4"
//             ) {
//               Notification(
//                 "error",
//                 "Error!",
//                 "Please Select 1 gif OR 1 image!"
//               );

//               SetUploadNumber(true);
//             } else {
//               {
//                 setFiles(
//                   acceptedFiles.map((file) =>
//                     Object.assign(file, {
//                       preview: URL.createObjectURL(file),
//                     })
//                   )
//                 );
//               }
//               if (acceptedFiles.length === 0) {
//                 // window.location.reload(true);
//                 Notification("error", "Error!", "Please Select images!");
//               }
//               SetUploadNumber(false);
//             }
//           } else {
//             {
//               setFiles(
//                 acceptedFiles.map((file) =>
//                   Object.assign(file, {
//                     preview: URL.createObjectURL(file),
//                   })
//                 )
//               );
//             }
//             if (acceptedFiles.length === 0) {
//               // window.location.reload(true);
//               Notification("error", "Error!", "Please Select image!");
//             }
//             SetUploadNumber(false);
//           }
//         }

//         // if (validFiles.length > 0) {
//         //   setFiles(validFiles);
//         //   SetUploadNumber(false);
//         // } else {
//         //   Notification("error", "Error!", "Please Select images!");
//         //   SetUploadNumber(true);
//         // }
//       },
//     });

//   const thumbs = files.map((file) => (
//     <>
//       {file.type === "video/mp4" ? (
//         <>
//           <ReactPlayer
//             url={file.preview}
//             muted={true}
//             autoplay={true}
//             controls={false}
//             playing={true}
//             width="210px"
//             height="210px"
//           />
//         </>
//       ) : (
//         <img
//           src={file.preview}
//           style={{ width: "210px", height: "210px" }}
//           className="img-fluidb img-fluid-width"
//           alt="file"
//         />
//       )}
//     </>
//   ));

//   const CreateLeaderBoardBanner = async () => {
//     console.log("test");

//     const { startDate, endDate } = selectedDates;
//     console.log("==>11", selectedDates);

//     if (startDate == "" || startDate == undefined) {
//       Notification("error", "Error", "Please Enter Start Date");
//       return;
//     } else if (endDate == "" || endDate == undefined) {
//       Notification("error", "Error", "Please Enter End Date");
//       return;
//     } else if (files == "" || undefined) {
//       Notification("error", "Error", "Please Upload Image");
//       return;
//     } else {
//       const formdata = await new FormData();
//       // await formdata.append("id", item.id)
//       await formdata.append(
//         "from_date",
//         moment(startDate[0]).format("YYYY-MM-DD")
//       );
//       await formdata.append(
//         "to_date",
//         moment(startDate[1]).format("YYYY-MM-DD")
//       );

//       if (files[0] !== undefined) {
//         for (var j = 0; j < files.length; j++) {
//           console.log("----->>", files[0]);
//           await formdata.append("image[" + j + "]", files[j]);
//         }
//         // await formdata.append("image", files[0]);
//       }

//       console.log("-=-=-=->", JSON.stringify(formdata, null, 2));
//       const data = await CreateLandingPageSquareTileApi(formdata);
//       if (data) {
//         if (data.success === 1) {
//           console.log("category-data", data);
//           Notification(
//             "success",
//             "Success!",
//             "Landing Page Square Tile Added Successfully!"
//           );
//           setTab(46);
//         } else if (data.success === 0) {
//           Notification("error", "Error!", data.message);
//         }
//       }
//     }
//   };

//   // New Datepicker

//   const [objWeek, setObjWeek] = useState({
//     date: new Date(),
//     dateFrom: null,
//     dateTo: null,
//     weekNumber: null,
//   });

//   const onChange = (date) => {
//     const weekNumber = moment(date).isoWeek();
//     const dateFrom = moment(date).startOf("isoWeek").toDate();
//     const dateTo = moment(date).endOf("isoWeek").toDate();

//     setObjWeek({
//       date,
//       dateFrom,
//       dateTo,
//       weekNumber,
//     });
//   };

//   const renderValue = (date) => {
//     const weekNumber = moment(date).isoWeek();
//     const year = moment(date).year();

//     return `W${weekNumber}, ${year}`;
//   };

//   return (
//     <div className="leaderboard-card-main-wrapp">
//       {/* Leaderboard flex start */}
//       <div className="leaderboard-card-flex-wrapp leaderboard-card-flex-wrapp-half">
//         <div className="leaderboard-card-first-resp-main-wrapp">
//           <p className="leaderboard-last-part-txt"></p>
//         </div>

//         <div className="leaderboard-card-part-first leaderboard-card-part-first-half">
//           <div className="leaderboard-card-inpbox-wrapp">
//             <label className="leaderboard-card-lbl" htmlFor="">
//               Week:<span className="star_require">*</span>
//             </label>

//             <DateRangePicker
//               style={{ color: "#111" }}
//               oneTap
//               hoverRange="week"
//               isoWeek
//               placeholder="Select your Week"
//               className="leaderboard-card-inp DateRangePicker_LeaderboardCard"
//               onChange={handleDateChange}
//               disabledDate={combine(allowedMaxDays(7), beforeToday())}
//             />
//           </div>
//         </div>

//         {/* Leaderboard part second start */}
//         <div className="leaderboard-card-part-sec">
//           {/* <div className="myprofile_inner_sec2"> */}

//           {files && files.length > 0 ? (
//             <div
//               className="myprofile_inner_sec2_img_upload leaderboard-card-part-img-upl"
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: "5px",
//                 flexWrap: "wrap",
//                 height: "210px",
//               }}>
//               {thumbs}
//             </div>
//           ) : (
//             <div style={{ width: "100%" }} {...getRootlogoProps()}>
//               <div className="leaderboard-card-part-sec2">
//                 <AiOutlineCloudUpload
//                   style={{
//                     width: "60px",
//                     height: "60px",
//                     color: "var(--color-orange)",
//                     marginBottom: "10px",
//                   }}
//                 />
//                 <h4 style={{ fontSize: "14px" }}>
//                   .JPG .PNG .GIF (232 x 232 pixels)
//                 </h4>
//                 <p style={{ fontSize: "14px" }}>(max 50kb)</p>
//                 <p style={{ fontSize: "14px" }}>You can also upload file by</p>
//                 <input
//                   {...getInputlogoProps()}
//                   accept="image/jpeg, image/jpg, image/png, image/eps,'video/*',"
//                 />
//                 <button
//                   type="button"
//                   className="click_upload_btn"
//                   style={{ marginBottom: "10px" }}>
//                   click here
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//         <div
//           className="leaderboard-card-part-third leaderboard-card-part-third-half"
//           style={{ justifyContent: "flex-end", marginBottom: "0.5rem" }}>
//           <p className="leaderboard-last-part-txt"></p>

//           <div className="leaderboard-btn-box">
//             <button
//               style={{ padding: "0.4rem", fontSize: "16px" }}
//               className="btn btn-orange"
//               disabled={getuploadnumber === true ? true : false}
//               onClick={() => CreateLeaderBoardBanner()}>
//               Publish
//             </button>
//           </div>
//         </div>
//         <div className="leaderboard-card-sec-resp-main-wrapp">
//           <div className="leaderboard-btn-box">
//             <button
//               className="btn btn-orange"
//               disabled={getuploadnumber === true ? true : false}
//               onClick={() => CreateLeaderBoardBanner()}>
//               Publish
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RetailerAddLandingPageSquareTileCard;

import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useStoreContext } from "../../context/store_context";
import { useMallContext } from "../../context/mall_context";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Notification from "../../utils/Notification";
import { DateRangePicker } from "rsuite";
import ReactPlayer from "react-player";
// import DatePicker from 'rsuite/DatePicker';

// import 'rsuite/dist/rsuite.min.css';

const animatedComponents = makeAnimated();

const AddLandingPageSquareTileCard = ({
  openMallModal,
  setTab,
  gatweek,
  setweek,
  peopleInfo,
  mallidarray,
  regionidarray,
  selectedMalls,
}) => {
  useEffect(() => {
    // console.log("mallidarray", mallidarray);
  }, [gatweek]);

  const {
    CreateLeaderBoardApi,
    category_data,
    multiple_week_data,
    cinema_category_data,
    CreateLandingPageSquareTileApi,
  } = useStoreContext();
  const { get_brand_data, get_mall_data } = useMallContext();
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [BrandName, setBrandName] = useState("");
  const [MallName, setMallName] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDiscription] = useState("");
  const [mallsOption, setMallsOption] = useState([]);
  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  const { allowedMaxDays, beforeToday, combine } = DateRangePicker;

  // const [startDate, setStartDate] = useState();
  // const [endDate, setEndDate] = useState();

  const [Week, setWeek] = useState("");
  const [Region, setRegion] = useState([]);

  // select date funtion is start

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const onDateChage = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    const mmm = moment(start).format("MMM");
    console.log("s", mmm);

    if (montharray.includes(start)) {
      console.log("yesss");
    } else {
      console.log("nooooo");
    }
  };

  const handleDateChange = (startDate, endDate) => {
    console.log("==>", startDate, endDate);
    setSelectedDates({ startDate, endDate });
  };

  const maxDate = startDate ? new Date(startDate) : null;
  if (maxDate) {
    maxDate.setDate(maxDate.getDate() + 7);
  }

  // Calculate the minimum and maximum dates for a one-week range
  const today = new Date();
  const oneWeekLater = new Date(today);
  oneWeekLater.setDate(oneWeekLater.getDate() + 7);
  const { getBrand } = useMallContext();
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

  const [montharray, SetMonthArray] = useState([]);

  function getMondaysInMonth(month) {
    console.log("month-->", month);
    const firstDayOfMonth = moment().month(month).startOf("month");
    const lastDayOfMonth = moment().month(month).endOf("month");

    const mondaysInMonth = [];

    // Iterate over the days in the month and add the Mondays to the array.
    for (
      let day = firstDayOfMonth;
      day.isSameOrBefore(lastDayOfMonth);
      day.add(1, "day")
    ) {
      if (day.day() === 1) {
        console.log(JSON.stringify(day.clone(), null, 2));
        mondaysInMonth.push(day.clone());
      }
    }
    console.log("mondaysInMonth-->", mondaysInMonth);
    SetMonthArray(mondaysInMonth);
    // Return the array of Mondays in the month.
    return mondaysInMonth;
  }

  useEffect(() => {
    getMondaysInMonth("");
  }, []);

  // select date funtion is end

  // logo dropzon
  const [getuploadnumber, SetUploadNumber] = useState(false);

  const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
    useDropzone({
      maxFiles: 1,
      onDrop: async (acceptedFiles) => {
        const maxSizeKB = 50;
        const maxSizeBytes = maxSizeKB * 1024;

        const filteredFiles = await Promise.all(
          acceptedFiles.map(async (file) => {
            const isSizeValid = file.size <= maxSizeBytes; // Limit size to 50KB (in bytes)
            const isImage = file.type.startsWith("image/"); // Check if it's an image file

            if (!isImage || !isSizeValid) {
              return null;             }

            // Load image and wait for it to load
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

        // const filteredFiles = await Promise.all(
        //   acceptedFiles.map(async (file) => {
        //     console.log("file type:", file.type);
        //     if (file.type === "image/jpeg") {
        //       const isSizeValid = file.size <= maxSizeBytes;
        //       const isImage = file.type.startsWith("image/");
    
        //       if (!isImage || !isSizeValid) {
        //         return null;
        //       }
    
        //       const img = new Image();
        //       img.src = URL.createObjectURL(file);
        //       await new Promise((resolve, reject) => {
        //         img.onload = resolve;
        //         img.onerror = reject;
        //       });
    
        //       // Check image dimensions
        //       const isDimensionsValid = img.width === 232 && img.height === 232;
    
        //       return isDimensionsValid ? file : null;
        //     } else {
        //       // For non-image files, just return them as is
        //       return file;
        //     }
        //   })
        // );
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

  const CreateLeaderBoardBanner = async () => {
    console.log("test");

    const { startDate, endDate } = selectedDates;
    console.log("==>11", selectedDates);
    if (startDate == "" || startDate == undefined) {
      Notification("error", "Error", "Please Enter Start Date");
      return;
    } else if (endDate == "" || endDate == undefined) {
      Notification("error", "Error", "Please Enter End Date");
      return;
    } else if (files == "" || undefined) {
      Notification("error", "Error!", "Please Upload Image!");
    } else {
      const formdata = await new FormData();
      await formdata.append(
        "from_date",
        moment(startDate[0]).format("YYYY-MM-DD")
      );
      await formdata.append(
        "to_date",
        moment(startDate[1]).format("YYYY-MM-DD")
      );

      if (files[0] !== undefined) {
        for (var j = 0; j < files.length; j++) {
          console.log("----->>", files[0]);
          await formdata.append("image[" + j + "]", files[j]);
        }
      }

      console.log("-=-=-=->", JSON.stringify(formdata, null, 2));
      const data = await CreateLandingPageSquareTileApi(formdata);
      if (data) {
        if (data.success === 1) {
          console.log("category-data", data);
          Notification(
            "success",
            "Success!",
            "Landing Page Square Tile Added Successfully!"
          );
          setTab(46);
        } else if (data.success === 0) {
          Notification("error", "Error!", data.message);
        }
      }
    }
  };
  // New Datepicker

  const [objWeek, setObjWeek] = useState({
    date: new Date(),
    dateFrom: null,
    dateTo: null,
    weekNumber: null,
  });

  const onChange = (date) => {
    const weekNumber = moment(date).isoWeek();
    const dateFrom = moment(date).startOf("isoWeek").toDate();
    const dateTo = moment(date).endOf("isoWeek").toDate();

    setObjWeek({
      date,
      dateFrom,
      dateTo,
      weekNumber,
    });
  };

  const renderValue = (date) => {
    const weekNumber = moment(date).isoWeek();
    const year = moment(date).year();

    return `W${weekNumber}, ${year}`;
  };

  return (
    <div className="leaderboard-card-main-wrapp">
      <div className="leaderboard-card-flex-wrapp leaderboard-card-flex-wrapp-half">
        <div className="leaderboard-card-first-resp-main-wrapp">
          <p className="leaderboard-last-part-txt"></p>
        </div>
        <div className="leaderboard-card-part-first leaderboard-card-part-first-half">
          <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl" htmlFor="">
              Week
            </label>
            <DateRangePicker
              style={{ color: "#111" }}
              oneTap
              hoverRange="week"
              isoWeek
              placeholder="Select your Week"
              className="leaderboard-card-inp DateRangePicker_LeaderboardCard"
              onChange={handleDateChange}
              disabledDate={combine(allowedMaxDays(7), beforeToday())}
            />
          </div>
        </div>
        <div className="leaderboard-card-part-sec leaderboard-card-part-sec-chng" style={{width:"210px"}}>
          {/* <div className="myprofile_inner_sec2"> */}

          {files && files.length > 0 ? (
            <div
              className="myprofile_inner_sec2_img_upload leaderboard-card-part-img-upl myprofile_inner_sec2_img_upload_border"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
                flexWrap: "wrap",
                height: "216px",
                width: "216px",
              }}>
              {thumbs}
            </div>
          ) : (
            <div style={{ width: "100%" }} {...getRootlogoProps()}>
              <div className="leaderboard-card-part-sec2">
                <AiOutlineCloudUpload
                  style={{
                    width: "60px",
                    height: "60px",
                    color: "var(--color-orange)",
                    marginBottom: "10px",
                  }}
                />
                <h4 style={{ fontSize: "14px",textAlign:"center" }}>
                  .JPG .PNG .GIF .WEBM <br/> (232 x 232 px)
                </h4>
                <p style={{ fontSize: "14px" }}>(max 50kb)</p>

                <p style={{ fontSize: "14px" }}>You can also upload file by</p>

                <input
                  {...getInputlogoProps()}
                  accept="image/jpeg, image/jpg, image/png, image/eps,'video/*',"
                />
                <button
                  type="button"
                  className="click_upload_btn"
                  style={{ marginBottom: "10px" }}>
                  click here
                </button>
                {/* <a href="">clicking here</a> */}
              </div>
            </div>
          )}

          {/* </div> */}
        </div>
        {/* Leaderboard part second end */}

        {/* Leaderboard part third start */}
        <div className="leaderboard-card-part-third leaderboard-card-part-third-chng">
          {/* <Link className="leaderboard-delete-icon-btn">
                        cancel{" "}
                        <img src={images.delete_icon} className="leaderboard-delete-icon" />
                    </Link> */}
          <p className="leaderboard-last-part-txt">
            {/* Service fee will apply if canceled */}
          </p>
          {/* <Link className="leaderboard-delete-icon-btn">
                        <span className="leaderboard-extend-txt">Extend</span>{" "}
                        <img src={images.extend_icon} className="leaderboard-delete-icon" />
                    </Link> */}
          <div className="leaderboard-btn-box">
            <button
              style={{ fontSize: "16px", padding: "0.4rem" }}
              className="btn btn-orange"
              disabled={getuploadnumber === true ? true : false}
              onClick={() => CreateLeaderBoardBanner()}>
              Publish
            </button>
          </div>
        </div>
        {/* Leaderboard part third end */}

        {/* Leaderboard last part responsive side start */}
        <div className="leaderboard-card-sec-resp-main-wrapp">
          {/* <Link className="leaderboard-delete-icon-btn">
                        <span className="leaderboard-extend-txt">Extend</span>{" "}
                        <img src={images.extend_icon} className="leaderboard-delete-icon" />
                    </Link> */}
          <div className="leaderboard-btn-box">
            <button
              className="btn btn-orange"
              disabled={getuploadnumber === true ? true : false}
              onClick={() => CreateLeaderBoardBanner()}>
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

export default AddLandingPageSquareTileCard;
