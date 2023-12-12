// import React, { useEffect, useState } from "react";
// import "./CinemaAccountSetting.css";
// import { useDropzone } from "react-dropzone";
// import { AiOutlineCloudUpload } from "react-icons/ai";
// import { useMallContext } from "../../context/mall_context";
// import { MallHeroEdit } from "../../components";
// import images from "../../constants/images";
// import { ACCEPT_HEADER, get_mall_master } from "../../utils/Constant";
// import Notification from "../../utils/Notification"

// import axios from "axios";
// const MallManagement = ({ get_mall_auth_data, sidebaropen, setTab }) => {
//   const { UpdateMall } = useMallContext();
//   const regEx =
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   const [files, setFiles] = useState([]);
//   const [files2, setFiles2] = useState([]);
//   const [files3, setFiles3] = useState([]);
//   const [files4, setFiles4] = useState([]);

//   // console.log("check get_mall_auth_data", get_mall_auth_data);

//   useEffect(() => {
//     console.log(
//       "check get_mall_auth_data",
//       JSON.stringify(get_mall_auth_data, null, 2)
//     );
//   }, []);

//   // update mall states
//   const [mallid, setMallId] = useState(
//     get_mall_auth_data.mall_master_id ? get_mall_auth_data.mall_master_id : ""
//   );
//   const [mallName, setMallName] = useState(
//     get_mall_auth_data.mall_masters ? get_mall_auth_data.mall_masters.name : ""
//   );
//   const [malldescription, setMallDescription] = useState(
//     get_mall_auth_data.description ? get_mall_auth_data.description : ""
//   );
//   const [physicalAddress, setPhysicalAddress] = useState(
//     get_mall_auth_data.address ? get_mall_auth_data.address : ""
//   );

//   const [mapurl, SetMapUrl] = useState(
//     get_mall_auth_data.map_url ? get_mall_auth_data.map_url : ""
//   );
//   const [mapcode, SetMapCode] = useState(
//     get_mall_auth_data.map_short_code ? get_mall_auth_data.map_short_code : ""
//   );
//   // const [province, setProvince] = useState(
//   //   get_mall_auth_data.province ? get_mall_auth_data.province : ""
//   // );
//   const [mallWebsite, setMallWebsite] = useState(
//     get_mall_auth_data.website ? get_mall_auth_data.website : ""
//   );
//   const [mallEmail, setMallEmail] = useState(
//     get_mall_auth_data.email ? get_mall_auth_data.email : ""
//   );
//   const [mallInsta, setMallInsta] = useState(
//     get_mall_auth_data.insta ? get_mall_auth_data.insta : ""
//   );
//   const [mallfb, setMallfb] = useState(
//     get_mall_auth_data.fb ? get_mall_auth_data.fb : ""
//   );
//   const [mallTwitter, setMallTwitter] = useState(
//     get_mall_auth_data.tweet ? get_mall_auth_data.tweet : ""
//   );
//   const [gethoNumber, setHoNumber] = useState(
//     get_mall_auth_data.ho_number ? get_mall_auth_data.ho_number : ""
//   );
//   const [gethoEmail, setHoEmail] = useState(
//     get_mall_auth_data.ho_email ? get_mall_auth_data.ho_email : ""
//   );
//   // const [contactNumber, setContactNumber] = useState(
//   //   get_mall_auth_data.number && get_mall_auth_data.number
//   // );
//   const [email, setEmail] = useState(
//     get_mall_auth_data.email ? get_mall_auth_data.email : ""
//   );

//   const [isAcceptTerm, setIsAcceptTerm] = useState(0);

//   // tranding times
//   const [monFromTime, setMonFromTime] = useState(
//     get_mall_auth_data.mon_fri_from_time && get_mall_auth_data.mon_fri_from_time
//   );
//   const [monToTime, setMonToTime] = useState(
//     get_mall_auth_data.mon_fri_to_time && get_mall_auth_data.mon_fri_to_time
//   );
//   const [satFromTime, setSatFromTime] = useState(
//     get_mall_auth_data.sat_from_time && get_mall_auth_data.sat_from_time
//   );
//   const [satToTime, setSatToTime] = useState(
//     get_mall_auth_data.sat_to_time && get_mall_auth_data.sat_to_time
//   );
//   const [sunFromTime, setSunFromTime] = useState(
//     get_mall_auth_data.sun_from_time && get_mall_auth_data.sun_from_time
//   );
//   const [sunToTime, setSunToTime] = useState(
//     get_mall_auth_data.sun_to_time && get_mall_auth_data.sun_to_time
//   );
//   const [holidayFromTime, setHolidayFromTime] = useState(
//     get_mall_auth_data.holiday_from_time && get_mall_auth_data.holiday_from_time
//   );
//   const [holidayToTime, setHolidayToTime] = useState(
//     get_mall_auth_data.holiday_to_time && get_mall_auth_data.holiday_to_time
//   );

//   const onHandleEmailChange = (e) => {
//     let email = e.target.value;
//     if (email === "" || regEx.test(email)) {
//       setEmail(email);
//     } else {
//       return;
//     }
//   };

//   const onHandleMallEmailChange = (e) => {
//     let mallEmail = e.target.value;
//     if (mallEmail === "" || regEx.test(mallEmail)) {
//       setMallEmail(mallEmail);
//     } else {
//       return;
//     }
//   };
//   const handleHeadOfficeEmailChange = (e) => {
//     let gethoEmail = e.target.value;
//     if (gethoEmail === "" || regEx.test(gethoEmail)) {
//       setHoEmail(gethoEmail);
//     } else {
//       return;
//     }
//   };

//   const handleTermChange = (e) => {
//     setIsAcceptTerm(1);
//     console.log("e.targate.value");
//   };

//   // logo dropzon

//   const [getcondation, SetCondation] = useState(false);
//   const [getcondation1, SetCondation1] = useState(false);
//   const [getcondation2, SetCondation2] = useState(false);
//   const [getcondation3, SetCondation3] = useState(false);
//   const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
//     useDropzone({
//       onDrop: (acceptedFiles) => {
//         console.log("acceptedFiles", acceptedFiles);
//         {
//           setFiles(
//             acceptedFiles.map((file) =>
//               Object.assign(file, {
//                 preview: URL.createObjectURL(file),
//               })
//             )
//           );
//         }
//         SetCondation(true);
//         if (acceptedFiles.length === 0) {
//           window.location.reload(true);
//         }
//       },
//     });

//   // map dropzon

//   const { getRootProps: getRootMapProps, getInputProps: getInputMapProps } =
//     useDropzone({
//       onDrop: (acceptedFiles) => {
//         console.log("acceptedFiles", acceptedFiles);
//         {
//           setFiles2(
//             acceptedFiles.map((file) =>
//               Object.assign(file, {
//                 preview: URL.createObjectURL(file),
//               })
//             )
//           );
//         }
//         SetCondation1(true);
//         if (acceptedFiles.length === 0) {
//           window.location.reload(true);
//         }
//       },
//     });

//   // banner dropzon

//   const {
//     getRootProps: getRootBannerProps,
//     getInputProps: getInputBannerProps,
//   } = useDropzone({
//     onDrop: (acceptedFiles) => {
//       console.log("acceptedFiles", acceptedFiles);
//       {
//         setFiles3(
//           acceptedFiles.map((file) =>
//             Object.assign(file, {
//               preview: URL.createObjectURL(file),
//             })
//           )
//         );
//       }
//       SetCondation2(true);

//       if (acceptedFiles.length === 0) {
//         window.location.reload(true);
//       }
//     },
//   });

//   // thumbline dropzon

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: "image/*",
//     onDrop: (acceptedFiles) => {
//       console.log("acceptedFiles", acceptedFiles);
//       {
//         setFiles4(
//           acceptedFiles.map((file) =>
//             Object.assign(file, {
//               preview: URL.createObjectURL(file),
//             })
//           )
//         );
//       }
//       SetCondation3(true);

//       if (acceptedFiles.length === 0) {
//         window.location.reload(true);
//       }
//     },
//   });

//   const thumbs = files.map((file) => (
//     <img
//       src={file.preview}
//       style={{ width: "100%", height: "100%", maxHeight: "175px" }}
//       className="img-fluid"
//       alt="file"
//     />
//   ));

//   const thumbs2 = files2.map((file) => (
//     <img
//       src={file.preview}
//       style={{ width: "100%", height: "100%", }}
//       className="img-fluid"
//       alt="file"
//     />
//   ));

//   const thumbs3 = files3.map((file) => (
//     <img
//       src={file.preview}
//       style={{ width: "100%", height: "100%", maxHeight: "175px" }}
//       className="img-fluid"
//       alt="file"
//     />
//   ));

//   const thumbs4 = files4.map((file) => (
//     <img
//       src={file.preview}
//       style={{ width: "100%", height: "100%", maxHeight: "175px" }}
//       className="img-fluid"
//       alt="file"
//     />
//   ));

//   // console.log("test file1", files);
//   // console.log("test file2", files2);

//   // update mall api

//   const UpdateMallData = async () => {
//     {
//       const formdata = await new FormData();
//       await formdata.append("mall_master_id", mallid);
//       await formdata.append("description", malldescription);
//       await formdata.append("address", physicalAddress);
//       await formdata.append("map_url", mapurl);
//       await formdata.append("map_short_code", mapcode);
//       await formdata.append("website", mallWebsite);
//       await formdata.append("email", mallEmail);
//       await formdata.append(" mon_fri_from_time", monFromTime);
//       await formdata.append("mon_fri_to_time", monToTime);
//       await formdata.append("sat_from_time", satFromTime);
//       await formdata.append("sat_to_time", satToTime);
//       await formdata.append("sun_from_time", sunFromTime);
//       await formdata.append("sun_to_time", sunToTime);
//       await formdata.append("holiday_from_time", holidayFromTime);
//       await formdata.append("holiday_to_time", holidayToTime);
//       await formdata.append("insta", mallInsta);
//       await formdata.append("fb", mallfb);
//       await formdata.append("tweet", mallTwitter);
//       await formdata.append("ho_email", gethoEmail);
//       await formdata.append(" ho_number", gethoNumber);
//       await formdata.append("terms_condition", isAcceptTerm === true ? 1 : 0);
//       if (files[0] !== undefined) {
//         await formdata.append("shopping_center_logo_mall", files[0]);
//       } else {
//       }

//       if (files2[0] !== undefined) {
//         await formdata.append("banner_mall", files2[0]);
//       } else {
//       }

//       if (files3[0] !== undefined) {
//         await formdata.append("shopping_center_thumbnail_mall", files3[0]);
//       } else {
//       }

//       if (files4[0] !== undefined) {
//         await formdata.append("shopping_center_map_mall", files4[0]);
//       } else {
//       }

//       // await formdata.append("name", mallName);

//       // await formdata.append("description", malldescription);
//       // await formdata.append("address", physicalAddress);
//       // await formdata.append("website", mallWebsite);
//       // await formdata.append("email_mall", mallEmail);
//       // await formdata.append("email", email);
//       // await formdata.append("insta", mallInsta);
//       // await formdata.append("fb", mallfb);
//       // await formdata.append("tweet", mallTwitter);
//       // await formdata.append("ho_email", gethoEmail);
//       // await formdata.append(" ho_number", gethoNumber);
//       // if (files[0] !== undefined) {
//       //   await formdata.append("shopping_center_logo_mall", files[0]);
//       // } else {
//       // }

//       // if (files2[0] !== undefined) {
//       //   await formdata.append("banner_mall", files2[0]);
//       // } else {
//       // }

//       // if (files3[0] !== undefined) {
//       //   await formdata.append("shopping_center_thumbnail_mall", files3[0]);
//       // } else {
//       // }

//       // if (files4[0] !== undefined) {
//       //   await formdata.append("shopping_center_map_mall", files4[0]);
//       // } else {
//       // }

//       // await formdata.append(" mon_fri_from_time", monFromTime);
//       // await formdata.append("mon_fri_to_time", monToTime);
//       // await formdata.append("sat_from_time", satFromTime);
//       // await formdata.append("sat_to_time", satToTime);
//       // await formdata.append("sun_from_time", sunFromTime);
//       // await formdata.append("sun_to_time", sunToTime);
//       // await formdata.append("holiday_from_time", holidayFromTime);
//       // await formdata.append("holiday_to_time", holidayToTime);

//       console.log("-=-=-=->", formdata);
//       const data = await UpdateMall(formdata);
//       if (data) {
//         if (data.success === 1) {
//           Notification("success", "Success!", "Account Setting Updated Successfully!");
//           setTab(1);
//           console.log("mall-data", data);

//         }
//       }
//     }
//   };

//   useEffect(() => {
//     getMallMaster();
//   }, []);

//   const [getmallarray, SetMallArray] = useState([]);
//   const [getmall, SetMall] = useState("");

//   const getMallMaster = async () => {
//     const token = JSON.parse(localStorage.getItem("is_token"));

//     axios
//       .get(get_mall_master, {
//         headers: {
//           Accept: ACCEPT_HEADER,
//           Authorization: "Bearer " + token,
//         },
//       })
//       .then((res) => {
//         console.log("ggg", JSON.stringify(res.data, null, 2));
//         if (res.data.success == 1) {
//           SetMallArray(res.data.data);
//         } else {
//           null;
//         }
//       })
//       .catch((err) => {
//         console.log("err11", err);
//       });
//   };

//   return (
//     <>
//       {/* <MallHeroEdit thumbs={thumbs} /> */}
//       <div>
//         <div className="brand-hero-edit-main-wrapp" {...getRootMapProps()}>
//           <input
//             {...getInputMapProps()}
//             accept="image/jpeg, image/jpg, image/png, image/eps"
//           />

//           {/* banner img */}
//           {getcondation1 === true ? (
//             <>
//               {files2 && files2.length > 0 ? (
//                 thumbs2
//               ) : (
//                 <button type="button">
//                   <img
//                     src={images.card_edit}
//                     className="brand-hero-edit-icon"
//                   />
//                 </button>
//               )}
//             </>
//           ) : (
//             <>
//               <img
//                 src={get_mall_auth_data.banner_mall_path}
//                 style={{ width: "100%", height: "100%", }}
//                 className="img-fluid"
//               />
//               <img src={images.card_edit} alt="" style={{ position: "absolute", top: "105px", right: "100px" }} className="mall-hero-edit-icon edit-icon-positon-resp" />
//             </>
//           )}
//         </div>

//         {/* logo wrapp */}
//         <div className="band-inn-logo-wrapp" style={{ left: sidebaropen === false ? "5%" : "" }} {...getRootlogoProps()}>
//           {/* <div style={{ width: '100%' }} {...getRootlogoProps()}> */}
//           <input
//             {...getInputlogoProps()}
//             accept="image/jpeg, image/jpg, image/png, image/eps"
//           />
//           {getcondation === true ? (
//             <>
//               {files && files.length > 0 ? (
//                 thumbs
//               ) : (
//                 <button type="button">
//                   <img
//                     src={images.card_edit}
//                     className="brand-hero-logo-edit-icon"
//                   />
//                 </button>
//               )}
//             </>
//           ) : (
//             <>
//               <img
//                 src={get_mall_auth_data.shopping_center_logo_mall_path}
//                 style={{ width: "100%", height: "100%", maxHeight: "175px" }}
//                 className="img-fluid"
//               />
//               <img src={images.card_edit} alt="" style={{ position: "absolute", top: "25px", right: "20px" }} />
//             </>
//           )}
//           {/* </div> */}
//         </div>
//       </div>

//       <div className="mm_main_wrapp">
//         {/* mall management name start */}
//         <div className="mall_name_wrapp">
//           <p className="mall_name_heading">{get_mall_auth_data.name}:</p>
//           <span>Account Settings</span>
//         </div>
//         <div className="mm_horizontal_line"></div>
//         {/* mall management name end */}

//         {/* mall management form start */}
//         <div className="mall_acc-manager-flex">
//           {/* text-input wrapp start */}
//           <div className="mm_form_input_wrapp">
//             {/* single text-input */}
//             {/* <div className="mm_form_single_input">
//               <label htmlFor="">Mall Name</label>
//               <input
//                 type="text"
//                 value={mallName}
//                 onChange={(e) => setMallName(e.target.value)}
//                 name=""
//                 id=""
//                 className="input_box"
//               />
//             </div> */}

//             <div className="mm_form_single_input">
//               <label className="leaderboard-card-lbl">Mall Name</label>{" "}
//               <input
//                 type="text"
//                 disabled={true}
//                 value={mallName}
//                 className="input_box"
//               // placeholder="Auto fill from databse"
//               />

//               {/* <select
//                 className="leaderboard-card-inp"
//                 onChange={(e) => {
//                   SetMall(e.target.value);
//                   console.log(e.target.value);
//                 }}
//                 // onChange={(e) => SetRegionId(e.target.value)}
//               >
//                 <option selected disabled value=""></option>
//                 {getmallarray &&
//                   getmallarray.map((item, index) => {
//                     return (
//                       <>
                       
//                         <option value={item.id} key={index}>
//                           {item.name} &nbsp;&nbsp;&nbsp; {item.from_date}{" "}
//                           &nbsp;&nbsp;&nbsp; {item.to_date}
//                         </option>
//                       </>
//                     );
//                   })}
//               </select> */}
//             </div>
//             {/* single text-input */}
//             <div
//               className="mm_form_single_input"
//               style={{ alignItems: "flex-start" }}
//             >
//               <label htmlFor="">Mall Description</label>
//               <textarea
//                 type="text"
//                 value={malldescription}
//                 onChange={(e) => setMallDescription(e.target.value)}
//                 name=""
//                 id=""
//                 className="input_box"
//                 rows={5}
//               />
//             </div>
//             {/* single text-input */}
//             <div className="mm_form_single_input">
//               <label htmlFor="">Physical Address</label>
//               <input
//                 type="text"
//                 value={physicalAddress}
//                 onChange={(e) => setPhysicalAddress(e.target.value)}
//                 name=""
//                 id=""
//                 className="input_box"
//               // placeholder="Auto fill from databse"
//               />
//             </div>

//             {/* single text-input */}
//             <div className="mm_form_single_input">
//               <label htmlFor="">Google Maps URL</label>
//               <input
//                 type="text"
//                 value={mapurl}
//                 onChange={(e) => SetMapUrl(e.target.value)}
//                 name=""
//                 id=""
//                 className="input_box"
//               />
//             </div>

//             {/* single text-input */}
//             <div
//               className="mm_form_single_input"
//               style={{ alignItems: "flex-start" }}
//             >
//               <label
//                 htmlFor=""

//                 className="cus-acc-man-live-map width-resp-live-map"
//               >
//                 Live map embeded short code (optional)
//               </label>
//               <textarea
//                 type="text"
//                 value={mapcode}
//                 onChange={(e) => SetMapCode(e.target.value)}
//                 name=""
//                 id=""
//                 className="input_box"
//                 rows={5}
//               />
//             </div>

//             {/* single text-input */}
//             {/* <div className="mm_form_single_input">
//             <label htmlFor="">Province</label>
//             <input
//               type="text"
//               value={province}
//               onChange={(e) => setProvince(e.target.value)}
//               name=""
//               id=""
//               className="input_box"
//             />
//           </div> */}
//             {/* single text-input */}
//             <div className="mm_form_single_input">
//               <label htmlFor="">Website URL</label>
//               <input
//                 type="text"
//                 value={mallWebsite}
//                 onChange={(e) => setMallWebsite(e.target.value)}
//                 name=""
//                 id=""
//                 className="input_box"
//               />
//             </div>
//             {/* single text-input */}
//             <div className="mm_form_single_input">
//               <label htmlFor="">Mall Email</label>
//               <input
//                 type="text"
//                 onChange={(e) => setMallEmail(e.target.value)}
//                 name=""
//                 id=""
//                 value={mallEmail}
//                 className="input_box"
//               />
//             </div>

//             {/* tranding sec strat */}
//             <div className="mm_tranding_wrapp">
//               <label
//                 style={{
//                   fontSize: "16px",
//                   fontWeight: "400",
//                   minWidth: "145px",
//                 }}
//                 htmlFor=""
//               >
//                 Trading Hours
//               </label>
//               <div className="tranding_times_wrapp">
//                 {/* single time */}
//                 <div className="tranding_times_wrapp_sec">
//                   <label
//                     style={{
//                       fontSize: "16px",
//                       fontWeight: "400",
//                       minWidth: "127px",
//                     }}
//                     htmlFor=""
//                   >
//                     Monday - Friday
//                   </label>
//                   <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
//                     {/* <select className="input_box">
//                     <option value="1">09:00</option>
//                   </select> */}
//                     <input
//                       type="time"
//                       name=""
//                       value={monFromTime}
//                       onChange={(e) => setMonFromTime(e.target.value)}
//                       id=""
//                       className="input_box"
//                       style={{ width: "165px" }}
//                     />
//                     <p
//                       style={{
//                         fontSize: "16px",
//                         fontWeight: "400",
//                       }}
//                     >

//                     </p>
//                   </div>
//                   <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
//                     {/* <select className="input_box">
//                     <option value="1">21:00</option>
//                   </select> */}
//                     <input
//                       type="time"
//                       name=""
//                       value={monToTime}
//                       onChange={(e) => setMonToTime(e.target.value)}
//                       id=""
//                       className="input_box"
//                       style={{ width: "165px" }}
//                     />
//                     <p
//                       style={{
//                         fontSize: "16px",
//                         fontWeight: "400",
//                       }}
//                     >

//                     </p>
//                   </div>
//                 </div>
//                 {/* single time */}
//                 <div className="tranding_times_wrapp_sec">
//                   <label
//                     style={{
//                       fontSize: "16px",
//                       fontWeight: "400",
//                       minWidth: "127px",
//                     }}
//                     htmlFor=""
//                   >
//                     Saturday
//                   </label>
//                   <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
//                     {/* <select className="input_box">
//                     <option value="1">09:00</option>
//                   </select> */}
//                     <input
//                       type="time"
//                       name=""
//                       value={satFromTime}
//                       onChange={(e) => setSatFromTime(e.target.value)}
//                       id=""
//                       className="input_box"
//                       style={{ width: "165px" }}
//                     />
//                     <p
//                       style={{
//                         fontSize: "16px",
//                         fontWeight: "400",
//                       }}
//                     >

//                     </p>
//                   </div>
//                   <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
//                     <input
//                       type="time"
//                       name=""
//                       value={satToTime}
//                       onChange={(e) => setSatToTime(e.target.value)}
//                       id=""
//                       className="input_box"
//                       style={{ width: "165px" }}
//                     />
//                     <p
//                       style={{
//                         fontSize: "16px",
//                         fontWeight: "400",
//                       }}
//                     >

//                     </p>
//                   </div>
//                 </div>
//                 {/* single time */}
//                 <div className="tranding_times_wrapp_sec">
//                   <label
//                     style={{
//                       fontSize: "16px",
//                       fontWeight: "400",
//                       minWidth: "127px",
//                     }}
//                     htmlFor=""
//                   >
//                     Sunday
//                   </label>
//                   <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
//                     <input
//                       type="time"
//                       name=""
//                       value={sunFromTime}
//                       onChange={(e) => setSunFromTime(e.target.value)}
//                       id=""
//                       className="input_box"
//                       style={{ width: "165px" }}
//                     />
//                     <p
//                       style={{
//                         fontSize: "16px",
//                         fontWeight: "400",
//                       }}
//                     >

//                     </p>
//                   </div>
//                   <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
//                     <input
//                       type="time"
//                       name=""
//                       value={sunToTime}
//                       onChange={(e) => setSunToTime(e.target.value)}
//                       id=""
//                       className="input_box"
//                       style={{ width: "165px" }}
//                     />
//                     <p
//                       style={{
//                         fontSize: "16px",
//                         fontWeight: "400",
//                       }}
//                     >

//                     </p>
//                   </div>
//                 </div>
//                 {/* single time */}
//                 <div className="tranding_times_wrapp_sec">
//                   <label
//                     style={{
//                       fontSize: "16px",
//                       fontWeight: "400",
//                       minWidth: "127px",
//                     }}
//                     htmlFor=""
//                   >
//                     Public Holidays
//                   </label>
//                   <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
//                     <input
//                       type="time"
//                       name=""
//                       value={holidayFromTime}
//                       onChange={(e) => setHolidayFromTime(e.target.value)}
//                       id=""
//                       className="input_box"
//                       style={{ width: "165px" }}
//                     />
//                     <p
//                       style={{
//                         fontSize: "16px",
//                         fontWeight: "400",
//                       }}
//                     >

//                     </p>
//                   </div>
//                   <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
//                     <input
//                       type="time"
//                       name=""
//                       value={holidayToTime}
//                       onChange={(e) => setHolidayToTime(e.target.value)}
//                       id=""
//                       className="input_box"
//                       style={{ width: "165px" }}
//                     />
//                     <p
//                       style={{
//                         fontSize: "16px",
//                         fontWeight: "400",
//                       }}
//                     >

//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* tranding sec end */}

//             {/* single text-input */}
//             <div className="mm_form_single_input">
//               <label htmlFor="">Instagram URL</label>
//               <input
//                 type="text"
//                 value={mallInsta}
//                 onChange={(e) => setMallInsta(e.target.value)}
//                 name=""
//                 id=""
//                 className="input_box"
//               />
//             </div>
//             {/* single text-input */}
//             <div className="mm_form_single_input">
//               <label htmlFor="">Facebook URL</label>
//               <input
//                 type="text"
//                 value={mallfb}
//                 onChange={(e) => setMallfb(e.target.value)}
//                 name=""
//                 id=""
//                 className="input_box"
//               />
//             </div>
//             {/* single text-input */}
//             <div className="mm_form_single_input">
//               <label htmlFor="" s>
//                 Twitter URL
//               </label>
//               <input
//                 type="text"
//                 value={mallTwitter}
//                 onChange={(e) => setMallTwitter(e.target.value)}
//                 name=""
//                 id=""
//                 className="input_box"
//               />
//             </div>
//             {/* single text-input */}
//             <div className="mm_form_single_input">
//               <label
//                 htmlFor=""
//                 style={{
//                   fontSize: "16px",
//                   fontWeight: "400",
//                   minWidth: "145px",
//                 }}
//               >
//                 Head Office Email
//               </label>
//               <input
//                 type="text"
//                 value={gethoEmail}
//                 onChange={(e) => setHoEmail(e.target.value)}
//                 name=""
//                 id=""
//                 className="input_box"
//               // placeholder="Auto fill from databse"
//               />
//             </div>
//             {/* single text-input */}
//             <div className="mm_form_single_input">
//               <label
//                 htmlFor=""
//                 style={{
//                   fontSize: "16px",
//                   fontWeight: "400",
//                   minWidth: "145px",
//                 }}
//               >
//                 Head Office Number
//               </label>
//               <input
//                 type="number"
//                 value={gethoNumber}
//                 onChange={(e) => setHoNumber(e.target.value)}
//                 name=""
//                 id=""
//                 className="input_box"
//               // placeholder="Auto fill from databse"
//               />
//             </div>
//             {/* single text-input */}
//             {/* <div className="mm_form_single_input">
//               <label htmlFor="">Email Address</label>
//               <input
//                 type="text"
//                 onChange={(e) => onHandleEmailChange(e)}
//                 name=""
//                 id=""
//                 className="input_box"
//               />
//             </div> */}
//             {/* mm terms condition wrapp */}
//             <div className="mm_form_single_input fs-des-resp">
//               <label htmlFor=""></label>
//               <div className="signup_terms_wrapp">
//                 <input
//                   type="checkbox"
//                   value={isAcceptTerm}
//                   onChange={handleTermChange}
//                   checked={isAcceptTerm == 1}
//                 />
//                 <p className="fs-des ">
//                   I have read and agree to the{" "}
//                   <a className="signup_terms_link">Terms and Conditions</a> &{" "}
//                   <a className="signup_terms_link">Privacy Policy</a>
//                 </p>
//               </div>
//             </div>

//             {/* upload button */}
//             <div className="mm_form_single_input">
//               <label htmlFor=""></label>
//               <div className="mall_upload_btn_wrapp">
//                 <button
//                   className="btn btn-orange"
//                   disabled={isAcceptTerm == 1 ? false : true}
//                   onClick={() => UpdateMallData()}
//                 >
//                   Update
//                 </button>
//                 <button className="btn" style={{ fontWeight: "600", color: "#fff",backgroundColor:"#000",marginLeft:"20px" }}>Reset</button>
//               </div>
//             </div>
//           </div>
//           {/* text-input wrapp end */}

//           {/* upload images wrapp start */}
//           <div className="mm_img_upload_wrapp mall-acc-manager-upl-img-part">
//             {/* single upload image */}
//             <div className="img-upl-border">

//               <div className="myprofile_inner_sec2" {...getRootlogoProps()} style={{ border: "none", paddingBottom: "0px" }}>
//                 {/* <input
//                 {...getInputlogoProps()}
//                 accept="image/jpeg, image/jpg, image/png, image/eps"
//               /> */}
//                 <h6 className="myprofile_upload_img_card_name">
//                 Upload the Brand logo <br/> (200 x 150 pixels)
//                 </h6>
//                 {getcondation === true ?

//                   <>
//                     {files && files.length > 0 ? <div className="myprofile_inner_sec2_img_upload">{thumbs}</div> :

//                       <div style={{ width: "100%" }}  >
//                         <div className="myprofile_inner_sec2_img_upload">
//                           <AiOutlineCloudUpload
//                             style={{
//                               width: "60px",
//                               height: "60px",
//                               color: "var(--color-orange)",
//                               marginBottom: "10px",
//                             }}
//                           />
//                           <h4>.PDF .JPG .PNG</h4>
//                           <p>You can also upload file by</p>
//                           <input
//                             {...getInputlogoProps()}
//                             accept="image/jpeg, image/jpg, image/png, image/eps"
//                           />
//                           <button type="button" className="click_upload_btn" style={{ marginBottom: "10px" }}>
//                             click here
//                           </button>
//                           {/* <a href="">clicking here</a> */}
//                         </div>
//                         <div className="btnn-main">
//                           <button
//                             className="btn btn-orange mb_8"
//                             type="button"
//                             onClick={() => {
//                             //   setFiles([]);
//                             }}
//                           >
//                             Upload File
//                           </button>
//                         </div>
//                       </div>
//                     }

//                   </>
//                   :
//                   <>
//                     {get_mall_auth_data.shopping_center_logo_mall_path === null ?
//                       <>
//                         <div style={{ width: "100%" }}  {...getRootlogoProps()}>
//                           <div className="myprofile_inner_sec2_img_upload">
//                             <AiOutlineCloudUpload
//                               style={{
//                                 width: "60px",
//                                 height: "60px",
//                                 color: "var(--color-orange)",
//                                 marginBottom: "10px",
//                               }}
//                             />
//                             <h4>.PDF .JPG .PNG</h4>
//                             <p>You can also upload file by</p>
//                             <input
//                               {...getInputlogoProps()}
//                               accept="image/jpeg, image/jpg, image/png, image/eps"
//                             />
//                             <button type="button" className="click_upload_btn" style={{ marginBottom: "10px" }}>
//                               click here
//                             </button>
//                             {/* <a href="">clicking here</a> */}
//                           </div>
//                           <div className="btnn-main">
//                             <button
//                               className="btn btn-orange mb_8"
//                               type="button"
//                               onClick={() => {
//                                 // setFiles([]);
//                               }}
//                             >
//                               Upload File
//                             </button>
//                           </div>
//                         </div>
//                         <button className="btn btn-blue" onClick={() => setFiles([])}>
//                           Cancel
//                         </button>
//                       </>

//                       :
//                       <>
//                         <div className="myprofile_inner_sec2_img_upload">


//                           <img
//                             src={get_mall_auth_data.shopping_center_logo_mall_path}
//                             style={{ width: "100%", height: "100%" }}
//                             className="img-fluidb"
//                           />


//                         </div>
//                         <div className="btnn-main" style={{ width: "100%" }}>
//                           <button
//                             className="btn btn-orange mb_8"
//                             type="button"
//                             onClick={() => {
//                               // setFiles([]);
//                             }}
//                           >
//                             Upload File
//                           </button>
//                         </div>

//                       </>

//                     }


//                   </>

//                 }
//               </div>
//               <div style={{ display: "flex", alingitem: "center", paddingLeft: "5px", paddingRight: "5px" }}>
//                 <button className="btn btn-blue" onClick={() => setFiles([])} style={{ marginBottom: "10px", marginLeft: "10px", marginRight: "10px",backgroundColor:"#000" }}>
//                   Cancel
//                 </button>
//               </div>
//             </div>
//             {/* single upload image */}
//             <div className="img-upl-border">

//               <div className="myprofile_inner_sec2" {...getRootMapProps()} style={{ border: "none", paddingBottom: "0px" }}>
//                 {/* <input
//                 {...getInputlogoProps()}
//                 accept="image/jpeg, image/jpg, image/png, image/eps"
//               /> */}
//                 <h6 className="myprofile_upload_img_card_name">
//                 Upload the Brand Banner (max 400kb)
//                 </h6>
//                 {getcondation1 === true ?

//                   <>
//                     {files2 && files2.length > 0 ? <div className="myprofile_inner_sec2_img_upload">{thumbs2}</div> :

//                       <div style={{ width: "100%" }}  >
//                         <div className="myprofile_inner_sec2_img_upload">
//                           <AiOutlineCloudUpload
//                             style={{
//                               width: "60px",
//                               height: "60px",
//                               color: "var(--color-orange)",
//                               marginBottom: "10px",
//                             }}
//                           />
//                           <h4>.PDF .JPG .PNG</h4>
//                           <p>You can also upload file by</p>
//                           <input
//                             {...getInputMapProps()}
//                             accept="image/jpeg, image/jpg, image/png, image/eps"
//                           />
//                           <button type="button" className="click_upload_btn" style={{ marginBottom: "10px" }}>
//                             click here
//                           </button>
//                           {/* <a href="">clicking here</a> */}
//                         </div>
//                         <div className="btnn-main">
//                           <button
//                             className="btn btn-orange mb_8"
//                             type="button"
//                             onClick={() => {
//                               // setFiles([]);
//                             }}
//                           >
//                             Upload File
//                           </button>
//                         </div>
//                       </div>
//                     }

//                   </>
//                   :
//                   <>
//                     {get_mall_auth_data.banner_mall_path === null ?
//                       <>
//                         <div style={{ width: "100%" }}  {...getRootMapProps()}>
//                           <div className="myprofile_inner_sec2_img_upload">
//                             <AiOutlineCloudUpload
//                               style={{
//                                 width: "60px",
//                                 height: "60px",
//                                 color: "var(--color-orange)",
//                                 marginBottom: "10px",
//                               }}
//                             />
//                             <h4>.PDF .JPG .PNG</h4>
//                             <p>You can also upload file by</p>
//                             <input
//                               {...getInputlogoProps()}
//                               accept="image/jpeg, image/jpg, image/png, image/eps"
//                             />
//                             <button type="button" className="click_upload_btn" style={{ marginBottom: "10px" }}>
//                               click here
//                             </button>
//                             {/* <a href="">clicking here</a> */}
//                           </div>
//                           <div className="btnn-main">
//                             <button
//                               className="btn btn-orange mb_8"
//                               type="button"
//                               onClick={() => {
//                                 // setFiles([]);
//                               }}
//                             >
//                               Upload File
//                             </button>
//                           </div>
//                         </div>
//                         <button className="btn btn-blue" onClick={() => setFiles2([])} style={{backgroundColor:"#000"}}>
//                           Cancel
//                         </button>
//                       </>

//                       :
//                       <>
//                         <div className="myprofile_inner_sec2_img_upload">


//                           <img
//                             src={get_mall_auth_data.banner_mall_path}
//                             style={{ width: "100%", height: "100%" }}
//                             className="img-fluidb"
//                           />


//                         </div>
//                         <div className="btnn-main" style={{ width: "100%" }}>
//                           <button
//                             className="btn btn-orange mb_8"
//                             type="button"
//                             onClick={() => {
//                               // setFiles([]);
//                             }}
//                           >
//                             Upload File
//                           </button>
//                         </div>

//                       </>

//                     }


//                   </>

//                 }
//               </div>
//               <div style={{ display: "flex", alingitem: "center", paddingLeft: "5px", paddingRight: "5px" }}>
//                 <button className="btn btn-blue" onClick={() => setFiles2([])} style={{ marginBottom: "10px", marginLeft: "10px", marginRight: "10px",backgroundColor:"#000" }}>
//                   Cancel
//                 </button>
//               </div>
//             </div>
//             {/* single upload image */}
//             {/* single upload image */}
//             {/* <div className="img-upl-border">

//               <div className="myprofile_inner_sec2" {...getRootBannerProps()} style={{ border: "none", paddingBottom: "0px" }}>
                
//                 <h6 className="myprofile_upload_img_card_name">
//                   Upload the Shopping centre thumbnail (720px x 200px)
//                 </h6>
//                 {getcondation2 === true ?

//                   <>
//                     {files3 && files3.length > 0 ? <div className="myprofile_inner_sec2_img_upload">{thumbs3}</div> :

//                       <div style={{ width: "100%" }}  >
//                         <div className="myprofile_inner_sec2_img_upload">
//                           <AiOutlineCloudUpload
//                             style={{
//                               width: "60px",
//                               height: "60px",
//                               color: "var(--color-orange)",
//                               marginBottom: "10px",
//                             }}
//                           />
//                           <h4>.PDF .JPG .PNG</h4>
//                           <p>You can also upload file by</p>
//                           <input
//                             {...getRootBannerProps()}
//                             accept="image/jpeg, image/jpg, image/png, image/eps"
//                           />
//                           <button type="button" className="click_upload_btn" style={{ marginBottom: "10px" }}>
//                             click here
//                           </button>
//                         </div>
//                         <div className="btnn-main">
//                           <button
//                             className="btn btn-orange mb_8"
//                             type="button"
//                             onClick={() => {
//                               // setFiles([]);
//                             }}
//                           >
//                             Upload File
//                           </button>
//                         </div>
//                       </div>
//                     }

//                   </>
//                   :
//                   <>
//                     {get_mall_auth_data.shopping_center_thumbnail_mall_path === null ?
//                       <>
//                         <div style={{ width: "100%" }}  {...getRootBannerProps()}>
//                           <div className="myprofile_inner_sec2_img_upload">
//                             <AiOutlineCloudUpload
//                               style={{
//                                 width: "60px",
//                                 height: "60px",
//                                 color: "var(--color-orange)",
//                                 marginBottom: "10px",
//                               }}
//                             />
//                             <h4>.PDF .JPG .PNG</h4>
//                             <p>You can also upload file by</p>
                           
//                             <button type="button" className="click_upload_btn" style={{ marginBottom: "10px" }}>
//                               click here
//                             </button>
//                           </div>
//                           <div className="btnn-main">
//                             <button
//                               className="btn btn-orange mb_8"
//                               type="button"
//                               onClick={() => {
//                               }}
//                             >
//                               Upload File
//                             </button>
//                           </div>
//                         </div>
//                         <button className="btn btn-blue" onClick={() => setFiles3([])}>
//                           Cancel
//                         </button>
//                       </>

//                       :
//                       <>
//                         <div className="myprofile_inner_sec2_img_upload">


//                           <img
//                             src={get_mall_auth_data.shopping_center_thumbnail_mall_path}
//                             style={{ width: "100%", height: "100%" }}
//                             className="img-fluidb"
//                           />


//                         </div>
//                         <div className="btnn-main" style={{ width: "100%" }}>
//                           <button
//                             className="btn btn-orange mb_8"
//                             type="button"
//                             onClick={() => {
//                             }}
//                           >
//                             Upload File
//                           </button>
//                         </div>

//                       </>

//                     }


//                   </>

//                 }
//               </div>
//               <div style={{ display: "flex", alingitem: "center", paddingLeft: "5px", paddingRight: "5px" }}>
//                 <button className="btn btn-blue" onClick={() => setFiles3([])} style={{ marginBottom: "10px", marginLeft: "10px", marginRight: "10px" }}>
//                   Cancel
//                 </button>
//               </div>
//             </div> */}
//             {/* single upload image */}
//             {/* <div className="img-upl-border">

//               <div className="myprofile_inner_sec2" {...getRootProps()} style={{ border: "none", paddingBottom: "0px" }}>
              
//                 <h6 className="myprofile_upload_img_card_name">
//                   Upload the Shopping centre map (max 800kb)
//                 </h6>
//                 {getcondation3 === true ?

//                   <>
//                     {files4 && files4.length > 0 ? <div className="myprofile_inner_sec2_img_upload">{thumbs4}</div> :

//                       <div style={{ width: "100%" }}  >
//                         <div className="myprofile_inner_sec2_img_upload">
//                           <AiOutlineCloudUpload
//                             style={{
//                               width: "60px",
//                               height: "60px",
//                               color: "var(--color-orange)",
//                               marginBottom: "10px",
//                             }}
//                           />
//                           <h4>.PDF .JPG .PNG</h4>
//                           <p>You can also upload file by</p>
                        
//                           <button type="button" className="click_upload_btn" style={{ marginBottom: "10px" }}>
//                             click here
//                           </button>
//                         </div>
//                         <div className="btnn-main">
//                           <button
//                             className="btn btn-orange mb_8"
//                             type="button"
//                             onClick={() => {
//                             }}
//                           >
//                             Upload File
//                           </button>
//                         </div>
//                       </div>
//                     }

//                   </>
//                   :
//                   <>
//                     {get_mall_auth_data.shopping_center_map_mall_path === null ?
//                       <>
//                         <div style={{ width: "100%" }}>
//                           <div className="myprofile_inner_sec2_img_upload">
//                             <AiOutlineCloudUpload
//                               style={{
//                                 width: "60px",
//                                 height: "60px",
//                                 color: "var(--color-orange)",
//                                 marginBottom: "10px",
//                               }}
//                             />
//                             <h4>.PDF .JPG .PNG</h4>
//                             <p>You can also upload file by</p>
                           
//                             <button type="button" className="click_upload_btn" style={{ marginBottom: "10px" }}>
//                               click here
//                             </button>
//                           </div>
//                           <div className="btnn-main">
//                             <button
//                               className="btn btn-orange mb_8"
//                               type="button"
//                               onClick={() => {
//                               }}
//                             >
//                               Upload File
//                             </button>
//                           </div>
//                         </div>
                        
//                       </>

//                       :
//                       <>
//                         <div className="myprofile_inner_sec2_img_upload">


//                           <img
//                             src={get_mall_auth_data.shopping_center_map_mall_path}
//                             style={{ width: "100%", height: "100%" }}
//                             className="img-fluidb"
//                           />


//                         </div>
//                         <div className="btnn-main" style={{ width: "100%" }}>
//                           <button
//                             className="btn btn-orange mb_8"
//                             type="button"
//                             onClick={() => {
//                             }}
//                           >
//                             Upload File
//                           </button>
//                         </div>

//                       </>

//                     }


//                   </>

//                 }
//               </div>
//               <div style={{ display: "flex", alingitem: "center", paddingLeft: "5px", paddingRight: "5px" }}>
//                 <button className="btn btn-blue" onClick={() => setFiles4([])} style={{ marginBottom: "10px", marginLeft: "10px", marginRight: "10px" }}>
//                   Cancel
//                 </button>
//               </div>
//             </div> */}
//           </div>

//           <div className="signup_terms_wrapp fs-des-resp2">
//             <input
//               type="checkbox"
//               value={isAcceptTerm}
//               onChange={handleTermChange}
//               checked={isAcceptTerm == 1}
//             />
//             <p className="fs-des" style={{ fontWeight: "400", fontSize: "14px" }}>
//               I have read and agree to the{" "}
//               <a className="signup_terms_link">Terms and Conditions</a> &{" "}
//               <a className="signup_terms_link">Privacy Policy</a>
//             </p>
//           </div>

//           {/* upload images wrapp end */}
//           <div className="mall_upload_btn_wrapp-resp">
//             <button 
//               className="btn btn-orange"
//               disabled={isAcceptTerm == 1 ? false : true}
//               onClick={() => UpdateMallData()}
//             >
//               Update
//             </button>
//             <button className="btn" style={{ fontWeight: "600", color: "#fff",backgroundColor:"#000",marginLeft:"20px" }}>Reset</button>
//           </div>
//         </div>
//         {/* mall management form end */}
//       </div >
//     </>
//   );
// };

// export default MallManagement;

import React, { useEffect, useState } from "react";
import "./CinemaAccountSetting.css";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useMallContext } from "../../context/mall_context";
import { useStoreContext } from "../../context/store_context";
import images from "../../constants/images";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { ACCEPT_HEADER, get_mall, get_retailer } from "../../utils/Constant";
import Notification from "../../utils/Notification";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const animatedComponents = makeAnimated();

const CinemaAccountSetting = ({ get_mall_auth_data, sidebaropen, setTab }) => {
  const [getmallmasterid, setmallmasterid] = useState(
    get_mall_auth_data == null ||
      get_mall_auth_data == "" ||
      get_mall_auth_data.mall_id == null ||
      get_mall_auth_data.mall_id == ""
      ? ""
      : get_mall_auth_data.mall_id
  );
  const [getmalmastername, setmallmastername] = useState(
    get_mall_auth_data.malls == null ||
      get_mall_auth_data.malls == "" ||
      get_mall_auth_data.malls.name == null ||
      get_mall_auth_data.malls.name == ""
      ? ""
      : get_mall_auth_data.malls.name
  );

  const [getbrandData, setBrandData] = useState(
    get_mall_auth_data && get_mall_auth_data
  );
  const { UpdateMall, get_brand_data, get_mall_data, getBrand } =
    useMallContext();

  const {
    retailer_data,
    UpdateStore,
    multiple_week_data,
    getRetailerApi,
    getMultipleMall,
    getStore,
  } = useStoreContext();

  useEffect(() => {
    getMultipleMall();
  }, []);
  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([]);
  const [files3, setFiles3] = useState([]);

  useEffect(() => {
    console.log("get-store-data", get_mall_auth_data);
    getRetailerApi(getmallmasterid);
  }, []);

  const [mallsOption, setMallsOption] = useState([]);

  const [mallWebsite, setMallWebsite] = useState(
    getbrandData.website ? getbrandData.website : ""
  );
  const [getbrand, SetBrand] = useState(
    getbrandData.brand_email ? getbrandData.brand_email : ""
  );
  const [mallInsta, setMallInsta] = useState(
    getbrandData.insta ? getbrandData.insta : ""
  );

  const [retailertype, setRetailertype] = useState(
    getbrandData.retailer_id && getbrandData.retailer_id
  );

  const [retailertypename, setRetailertypename] = useState(
    get_mall_auth_data.retailers == null ||
      get_mall_auth_data.retailers == "" ||
      get_mall_auth_data.retailers.name == null ||
      get_mall_auth_data.retailers.name == ""
      ? ""
      : get_mall_auth_data.retailers.name
  );

  const [mallfb, setMallfb] = useState(getbrandData.fb ? getbrandData.fb : "");

  const [mallTwitter, setMallTwitter] = useState(
    getbrandData.tweet ? getbrandData.tweet : ""
  );

  const [contactPerson, setContactPerson] = useState(
    getbrandData.number && getbrandData.number
  );

  const [contactNumber, setContactNumber] = useState(
    getbrandData.email && getbrandData.email
  );

  const [secondryemail, SetSecondryEmail] = useState(
    getbrandData.secondary_email ? getbrandData.secondary_email : ""
  );

  const [scondrycontect, SetScondryContect] = useState(
    getbrandData.secondary_contact && getbrandData.secondary_contact
  );

  const [getmode, setMode] = useState(getbrandData.type && getbrandData.type);

  const [getmallname, setMallname] = useState(
    getbrandData.brand_id && getbrandData.brand_id
  );

  // const [getbrandname, setbrandname] = useState(
  //   getbrandData.brand_id && getbrandData.brand_id
  // );

  const [getbrandname, setbrandname] = useState(
    get_mall_auth_data.brands == null ||
      get_mall_auth_data.brands == "" ||
      get_mall_auth_data.brands.name == null ||
      get_mall_auth_data.brands.name == ""
      ? ""
      : get_mall_auth_data.brands.name
  );

  const [isAcceptTerm, setIsAcceptTerm] = useState(false);

  const [brandadd, SetBrandAdd] = useState(
    getbrandData.address ? getbrandData.address : ""
  );

  const [brandadd2, SetBrandAdd2] = useState(
    getbrandData.address_2 ? getbrandData.address_2 : ""
  );

  const [brandadd3, SetBrandAdd3] = useState(
    getbrandData.address_3 ? getbrandData.address_3 : ""
  );
  const [malldrop, SetMallDrop] = useState(
    getbrandData.mall_id ? getbrandData.mall_id : ""
  );

  const [mainName, setMainName] = useState(
    get_mall_auth_data &&
      get_mall_auth_data.retailers &&
      get_mall_auth_data.retailers.name !== null
      ? get_mall_auth_data.retailers.name
      : ""
  );

  const [getcondation, SetCondation] = useState(false);
  const [getcondation1, SetCondation1] = useState(false);
  const [getmallarray, SetMallArray] = useState([]);

  useEffect(() => {
    console.log("files", files);
    console.log("check getbrandData", getbrandData);
  }, [files]);

  const onHandleEmailChange = (e) => {
    let email = e.target.value;
    if (email === "" || regEx.test(email)) {
      setEmail(email);
    } else {
      return;
    }
  };

  const onHandleMallEmailChange = (e) => {
    let mallEmail = e.target.value;
    if (mallEmail === "" || regEx.test(mallEmail)) {
      setMallEmail(mallEmail);
    } else {
      return;
    }
  };

  const handleTermChange = (event) => {
    setIsAcceptTerm((current) => !current);
  };

  // logo dropzon

  const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        console.log("file type", files[0]);
        console.log("acceptedFiles", acceptedFiles[0].File);
        SetCondation(true);
        {
          setFiles(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
        }

        if (acceptedFiles.length === 0) {
          window.location.reload(true);
        }
      },
    });

  // map dropzon

  const { getRootProps: getRootMapProps, getInputProps: getInputMapProps } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        console.log("acceptedFiles", acceptedFiles);
        SetCondation1(true);
        {
          setFiles2(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
        }
        if (acceptedFiles.length === 0) {
          window.location.reload(true);
        }
      },
    });

  // banner dropzon

  const {
    getRootProps: getRootBannerProps,
    getInputProps: getInputBannerProps,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log("acceptedFiles", acceptedFiles);
      {
        setFiles3(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
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
      style={{ width: "100%", height: "100%", maxHeight: "175px" }}
      className="img-fluid"
      alt="file"
    />
  ));

  const thumbs2 = files2.map((file) => (
    <img
      src={file.preview}
      style={{ width: "100%", height: "100%", maxHeight: "175px" }}
      className="img-fluid"
      alt="file"
    />
  ));

  const thumbs3 = files3.map((file) => (
    <img
      src={file.preview}
      style={{ width: "100%", height: "100%", maxHeight: "175px" }}
      className="img-fluid"
      alt="file"
    />
  ));

  // update mall api

  const UpdateMallData = async () => {
    {
      if (mallsOption == "" || undefined) {
        Notification("error", "Error", "Please Selct Mall");
        return;
      } else if (contactPerson == "" || undefined) {
        Notification("error", "Error", "Please Enter Number");
        return;
      } else {
        const data = await new FormData();
        await data.append("retailer_id", Number(retailertype));
        await data.append("store_type", getmode);
        await data.append("brand", getmallname);
        await data.append("address", brandadd);
        await data.append("address_2", brandadd2);
        await data.append("address_3", brandadd3);
        // await data.append("mall_id", malldrop);
        await data.append("website", mallWebsite);
        await data.append("brand_email", getbrand);
        await data.append("insta", mallInsta);
        await data.append("fb", mallfb);
        await data.append("tweet", mallTwitter);
        await data.append("number", contactPerson);
        await data.append("email", contactNumber);
        await data.append("secondary_contact", scondrycontect);
        await data.append("secondary_email", secondryemail);

        for (var i = 0; i < mallsOption.length; i++) {
          await data.append("mall_id[" + i + "]", mallsOption[i].value);
        }
        await data.append("terms_condition", isAcceptTerm === true ? 1 : 0);
        if (files[0] !== undefined) {
          await data.append("store_logo", files[0]);
        } else {
        }
        if (files2[0] !== undefined) {
          await data.append("banner_store", files2[0]);
        } else {
        }
        if (files3[0] !== undefined) {
          await data.append("store_brand", files3[0]);
        } else {
        }
        console.log("-=-=-=->brand-update", data);
        const data1 = await UpdateStore(data);
        if (data1) {
          if (data1.success === 1) {
            console.log("mall-data", data1);
            Notification(
              "success",
              "Success!",
              "Account Setting Updated Successfully!"
            );
            getStore();
            setTab(1);
          }
        }
      }
    }
  };

  useEffect(() => {
    getBrand(get_mall_auth_data.retailer_id);
  }, []);
  // get mall master

  useEffect(() => {
    getMallMaster();
  }, [getmalmastername]);

  const [getmall, SetMall] = useState("");

  const getMallMaster = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_mall, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          SetMallArray(res.data.data);
        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  return (
    <>
      <div>
        <div className="brand-hero-edit-main-wrapp" {...getRootMapProps()}>
          <input
            {...getInputMapProps()}
            accept="image/jpeg, image/jpg, image/png, image/eps"
          />

          {getcondation1 === true ? (
            <>
              {files2 && files2.length > 0 ? (
                thumbs2
              ) : (
                <button type="button">
                  <img
                    src={images.card_edit}
                    className="brand-hero-edit-icon"
                  />
                </button>
              )}
            </>
          ) : (
            <>
              <img
                src={get_mall_auth_data.store_banner_path}
                style={{ width: "100%", height: "100%" }}
                className="img-fluid"
              />
              <img
                src={images.card_edit}
                alt=""
                style={{ position: "absolute", top: "105px", right: "100px" }}
                className="mall-hero-edit-icon edit-icon-positon-resp"
              />
            </>
          )}
        </div>

        {/* logo wrapp */}
        <div
          className="band-inn-logo-wrapp"
          style={{ left: sidebaropen === false ? "5%" : "" }}
          {...getRootlogoProps()}>
          {/* <div style={{ width: '100%' }} {...getRootlogoProps()}> */}
          <input
            {...getInputlogoProps()}
            accept="image/jpeg, image/jpg, image/png, image/eps"
          />
          {getcondation === true ? (
            <>
              {files && files.length > 0 ? (
                thumbs
              ) : (
                <button type="button">
                  <img
                    src={images.card_edit}
                    className="brand-hero-logo-edit-icon"
                  />
                </button>
              )}
            </>
          ) : (
            <>
              <img
                src={get_mall_auth_data.store_logo_path}
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "175px",
                  objectFit: "contain",
                }}
                // className="img-fluidb"
              />
              <img
                src={images.card_edit}
                alt=""
                style={{ position: "absolute", top: "25px", right: "20px" }}
              />
            </>
          )}

          {/* </div> */}
        </div>
      </div>
      <div className="mm_main_wrapp">
        {/* mall management name start */}
        <div className="mall_name_wrapp">
          <p className="mall_name_heading">{mainName} Ster Kinekor :</p>
          <span>Account Settings</span>
        </div>
        <div className="mm_horizontal_line"></div>
        {/* mall management name end */}

        {/* mall management form start */}
        <div className="mm_form_wrapp mm_form_wrapp_retailer">
          {/* text-input wrapp start */}
          <div className="mm_form_input_wrapp mm_form_input_wrapp_retailer">
            {/* <div className="mm_form_single_input">
              <label htmlFor="mall">Mall Name</label>
              <select
                className="leaderboard-card-inp"
                onChange={(e) => {
                  getRetailerApi(e.target.value);
                  setmallmasterid(e.target.value);
                  setmallmastername(e.target.value);

                  console.log(e.target.value);
                }}
              >
                <option selected disabled value="">
                  {getmalmastername}
                </option>
                {getmallarray &&
                  getmallarray.map((item, index) => {
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
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="">Retailer</label>
              <div className="select-wrapper" style={{ width: "100%" }}>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    setRetailertype(e.target.value);
                    setRetailertypename(e.target.value);
                    getBrand(e.target.value);
                  }}>
                  <option defaultValue value="">
                    {retailertypename}
                  </option>
                  {retailer_data &&
                    retailer_data.map((item, index) => {
                      return (
                        <>
                          {/* <option selected disabled value="">
                      Auto-fill from database
                    </option> */}
                          <option value={item.id} key={index}>
                            {item.name}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
            </div>

            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="">Retailer type</label>

              <div className="radio-btn-flex-brand">
                <div className="radio-btn-inner-flex">
                  <input
                    type="radio"
                    id="Online"
                    name="gender"
                    value="1"
                    checked={getmode == 1}
                    onChange={(e) => {
                      setMode(e.target.value);
                      console.log("-->", getmode);
                    }}
                    // onChange={(e) => e.target.value}
                  />
                  <label className="course-form-txt" for="male">
                    Independent Retailer
                  </label>
                </div>

                <div className="radio-btn-inner-flex">
                  <input
                    type="radio"
                    id="In-Person"
                    name="gender"
                    value="2"
                    checked={getmode == 2}
                    // onChange={(e) => setMode(2)}
                    onChange={(e) => {
                      setMode(e.target.value);
                      console.log("-->", getmode);
                    }}
                  />
                  <label className="course-form-txt" for="specifyColor">
                    Group Retailer
                  </label>
                </div>
              </div>
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="">
                Your Brands <br /> <span>If applicable</span>
              </label>
              <div className="select-wrapper" style={{ width: "100%" }}>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    console.log("rrr", e.target.value);
                    setMallname(e.target.value);
                  }}>
                  <option value="">{getbrandname}</option>
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
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="">Brand Address</label>
              <input
                type="text"
                value={brandadd}
                onChange={(e) => SetBrandAdd(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}

            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor=""></label>
              <input
                type="text"
                value={brandadd2}
                onChange={(e) => SetBrandAdd2(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}

            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor=""></label>
              <input
                type="text"
                value={brandadd3}
                onChange={(e) => SetBrandAdd3(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="">Select My Malls</label>
              {/* <select
                className="leaderboard-card-inp"
                onChange={(e) => {
                  SetMallDrop(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {get_mall_data &&
                  get_mall_data.map((item, index) => {
                    return (
                      <>
                        <option selected disabled value="">
                      Auto-fill from database
                    </option>
                        <option value={item.id} key={index}>
                          {item.name}
                        </option>
                      </>
                    );
                  })}
              </select> */}

              <Select
                value={mallsOption}
                styles={{ width: "100%", padding: "0px" }}
                className="leaderboard-card-inp"
                closeMenuOnSelect={false}
                components={animatedComponents}
                // defaultValue={[colourOptions[4], colourOptions[5]]}

                isMulti
                options={multiple_week_data}
                onChange={setMallsOption}
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="">Website URL</label>
              <input
                type="text"
                value={mallWebsite}
                onChange={(e) => setMallWebsite(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="">Brand Email</label>
              <input
                type="text"
                value={getbrand}
                onChange={(e) => SetBrand(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>

            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="">Instagram</label>
              <input
                type="text"
                value={mallInsta}
                onChange={(e) => setMallInsta(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="">Facebook</label>
              <input
                type="text"
                value={mallfb}
                onChange={(e) => setMallfb(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="">Twitter</label>
              <input
                type="text"
                value={mallTwitter}
                onChange={(e) => setMallTwitter(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="">Main Contact</label>
              <input
                type="text"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="">Main Email</label>
              <input
                type="email"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="">Secondary Contact</label>
              <input
                type="number"
                value={scondrycontect}
                onChange={(e) => SetScondryContect(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="">Secondary Email</label>
              <input
                type="email"
                value={secondryemail}
                onChange={(e) => SetSecondryEmail(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* mm terms condition wrapp */}
            <div className="mm_form_single_input fs-des-resp">
              <label htmlFor=""></label>
              <div className="signup_terms_wrapp">
                <input
                  type="checkbox"
                  value={isAcceptTerm}
                  onChange={handleTermChange}
                  checked={isAcceptTerm}
                />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Terms and Conditions</a> &{" "}
                  <a className="signup_terms_link">Privacy Policy</a>
                </p>
              </div>
            </div>

            {/* upload button */}
            <div className="mm_form_single_input">
              <label htmlFor=""></label>
              <div className="mall_upload_btn_wrapp">
                <button
                  className="btn btn-orange"
                  onClick={() => UpdateMallData()}>
                  Update
                </button>
                <button
                  className="btn"
                  style={{ color: "#777", fontWeight: "600" }}>
                  Reset
                </button>
              </div>
            </div>
          </div>
          {/* text-input wrapp end */}

          {/* upload images wrapp start */}
          <div className="mm_img_upload_wrapp mm_img_upload_wrapp_retailer">
            {/* single upload image */}
            <div className="img-upl-border">
              <div
                className="myprofile_inner_sec2"
                {...getRootlogoProps()}
                style={{
                  border: "none",
                  paddingBottom: "0px",
                  maxWidth: "250px",
                }}>
                {/* <input
                {...getInputlogoProps()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              /> */}
                <h6 className="myprofile_upload_img_card_name">
                  Upload the Shopping centre logo (200px x 200px)
                </h6>
                {getcondation === true ? (
                  <>
                    {files && files.length > 0 ? (
                      <div className="myprofile_inner_sec2_img_upload">
                        {thumbs}
                      </div>
                    ) : (
                      <div style={{ width: "100%" }}>
                        <div className="myprofile_inner_sec2_img_upload">
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
                          <input
                            {...getInputlogoProps()}
                            accept="image/jpeg, image/jpg, image/png, image/eps"
                          />
                          <button
                            type="button"
                            className="click_upload_btn"
                            style={{ marginBottom: "10px" }}>
                            click here
                          </button>
                          {/* <a href="">clicking here</a> */}
                        </div>
                        <div className="btnn-main">
                          <button
                            className="btn btn-orange mb_8"
                            type="button"
                            onClick={() => {
                              // setFiles([]);
                            }}>
                            Upload File
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {get_mall_auth_data.store_logo_path === null ? (
                      <>
                        <div style={{ width: "100%" }} {...getRootlogoProps()}>
                          <div className="myprofile_inner_sec2_img_upload">
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
                            <input
                              {...getInputlogoProps()}
                              accept="image/jpeg, image/jpg, image/png, image/eps"
                            />
                            <button
                              type="button"
                              className="click_upload_btn"
                              style={{ marginBottom: "10px" }}>
                              click here
                            </button>
                            {/* <a href="">clicking here</a> */}
                          </div>
                          <div className="btnn-main">
                            <button
                              className="btn btn-orange mb_8"
                              type="button"
                              onClick={() => {
                                // setFiles([]);
                              }}>
                              Upload File
                            </button>
                          </div>
                        </div>
                        {/* <button
                          className="btn btn-blue"
                          onClick={() => setFiles([])}>
                          Cancel
                        </button> */}
                      </>
                    ) : (
                      <>
                        <div className="myprofile_inner_sec2_img_upload">
                          <img
                            src={get_mall_auth_data.store_logo_path}
                            style={{ width: "100%", height: "100%" }}
                            className="img-fluidb"
                          />
                        </div>
                        <div className="btnn-main" style={{ width: "100%" }}>
                          <button
                            className="btn btn-orange mb_8"
                            type="button"
                            onClick={() => {
                              // setFiles([]);
                            }}>
                            Upload File
                          </button>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  alingitem: "center",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}>
                <button
                  className="btn btn-blue"
                  onClick={() => setFiles([])}
                  style={{
                    marginBottom: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}>
                  Cancel
                </button>
              </div>
            </div>
            {/* single upload image */}
            <div className="img-upl-border">
              <div
                className="myprofile_inner_sec2"
                {...getRootMapProps()}
                style={{
                  border: "none",
                  paddingBottom: "0px",
                  maxWidth: "250px",
                }}>
                {/* <input
                {...getInputlogoProps()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              /> */}
                <h6 className="myprofile_upload_img_card_name">
                  Upload the Shopping centre Banner (1300px x 275px)
                </h6>
                {getcondation1 === true ? (
                  <>
                    {files2 && files2.length > 0 ? (
                      <div className="myprofile_inner_sec2_img_upload">
                        {thumbs2}
                      </div>
                    ) : (
                      <div style={{ width: "100%" }}>
                        <div className="myprofile_inner_sec2_img_upload">
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
                          <input
                            {...getInputMapProps()}
                            accept="image/jpeg, image/jpg, image/png, image/eps"
                          />
                          <button
                            type="button"
                            className="click_upload_btn"
                            style={{ marginBottom: "10px" }}>
                            click here
                          </button>
                          {/* <a href="">clicking here</a> */}
                        </div>
                        <div className="btnn-main">
                          <button
                            className="btn btn-orange mb_8"
                            type="button"
                            onClick={() => {
                              // setFiles([]);
                            }}>
                            Upload File
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {get_mall_auth_data.store_banner_path === null ? (
                      <>
                        <div style={{ width: "100%" }} {...getRootMapProps()}>
                          <div className="myprofile_inner_sec2_img_upload">
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
                            <input
                              {...getInputlogoProps()}
                              accept="image/jpeg, image/jpg, image/png, image/eps"
                            />
                            <button
                              type="button"
                              className="click_upload_btn"
                              style={{ marginBottom: "10px" }}>
                              click here
                            </button>
                            {/* <a href="">clicking here</a> */}
                          </div>
                          <div className="btnn-main">
                            <button
                              className="btn btn-orange mb_8"
                              type="button"
                              onClick={() => {
                                // setFiles([]);
                              }}>
                              Upload File
                            </button>
                          </div>
                        </div>
                        {/* <button
                          className="btn btn-blue"
                          onClick={() => setFiles2([])}>
                          Cancel
                        </button> */}
                      </>
                    ) : (
                      <>
                        <div className="myprofile_inner_sec2_img_upload">
                          <img
                            src={get_mall_auth_data.store_banner_path}
                            style={{ width: "100%", height: "100%" }}
                            className="img-fluidb"
                          />
                        </div>
                        <div className="btnn-main" style={{ width: "100%" }}>
                          <button
                            className="btn btn-orange mb_8"
                            type="button"
                            onClick={() => {
                              // setFiles([]);
                            }}>
                            Upload File
                          </button>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  alingitem: "center",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}>
                <button
                  className="btn btn-blue"
                  onClick={() => setFiles2([])}
                  style={{
                    marginBottom: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}>
                  Cancel
                </button>
              </div>
            </div>
            {/* single upload image */}
            <div
              className="myprofile_inner_sec2"
              style={{
                // border: "none",
                // paddingBottom: "0px",
                maxWidth: "250px",
              }}>
              <h4 style={{ marginBottom: "10px" }}>
                Upload the Brand in Mall (max 400kb)
              </h4>
              {files3 && files3.length > 0 ? (
                <div className="myprofile_inner_sec2_img_upload">{thumbs3}</div>
              ) : (
                <div style={{ width: "100%" }} {...getRootBannerProps()}>
                  <div className="myprofile_inner_sec2_img_upload">
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
                    <input
                      {...getInputBannerProps()}
                      accept="image/jpeg, image/jpg, image/png, image/eps"
                    />
                    <button
                      type="button"
                      className="click_upload_btn"
                      style={{ marginBottom: "10px" }}>
                      click here
                    </button>
                    {/* <a href="">clicking here</a> */}
                  </div>
                  <div className="btnn-main">
                    <button
                      className="btn btn-orange"
                      type="button"
                      onClick={() => {
                        // setFiles([]);
                      }}
                      style={{ marginBottom: "10px" }}>
                      Upload File
                    </button>
                  </div>
                </div>
              )}
              {/* <div className="myprofile_upload_img_btn_wrapp"> */}
              <button className="btn btn-blue" onClick={() => setFiles3([])}>
                Cancel
              </button>
              {/* </div> */}
            </div>
          </div>
          {/* upload images wrapp end */}
        </div>
        {/* mall management form end */}

        <div
          className="signup_terms_wrapp fs-des-resp2"
          style={{ marginBottom: "20px", marginTop: "20px" }}>
          <input
            type="checkbox"
            value={isAcceptTerm}
            onChange={handleTermChange}
            checked={isAcceptTerm == 1}
          />
          <p className="fs-des" style={{ fontWeight: "400", fontSize: "14px" }}>
            I have read and agree to the{" "}
            <a className="signup_terms_link">Terms and Conditions</a> &{" "}
            <a className="signup_terms_link">Privacy Policy</a>
          </p>
        </div>

        {/* upload images wrapp end */}
        <div className="mall_upload_btn_wrapp-resp">
          <button
            className="btn btn-orange"
            disabled={isAcceptTerm == 1 ? false : true}
            onClick={() => UpdateMallData()}>
            Update
          </button>
          <button className="btn" style={{ fontWeight: "600", color: "#777" }}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default CinemaAccountSetting;