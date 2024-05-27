import React, { useEffect, useState } from "react";
import "./MallManagement.css";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useMallContext } from "../../context/mall_context";
 import images from "../../constants/images";
import { ACCEPT_HEADER, get_mall_master } from "../../utils/Constant";
import Notification from "../../utils/Notification";
import ReactModal from "react-modal";

import axios from "axios";

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
const MallManagement = ({ get_mall_auth_data, sidebaropen, setTab }) => {
  const { UpdateMall } = useMallContext();
  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([]);
  const [files3, setFiles3] = useState([]);
  const [files4, setFiles4] = useState([]);
  const [imagecheck, setImageCheck] = useState(false);

  // console.log("check get_mall_auth_data", get_mall_auth_data);

  useEffect(() => {
    if (get_mall_auth_data.banner_mall_path) {
      setImageCheck(true);
    } else {
      setImageCheck(false);
    }
  }, []);

  useEffect(() => {
    console.log(
      "check get_mall_auth_data",
      JSON.stringify(get_mall_auth_data, null, 2)
    );
  }, []);

  // update mall states
  const [mallid, setMallId] = useState(
    get_mall_auth_data.mall_master_id ? get_mall_auth_data.mall_master_id : ""
  );
  const [mallName, setMallName] = useState(
    get_mall_auth_data.mall_masters ? get_mall_auth_data.mall_masters.name : ""
  );
  const [malldescription, setMallDescription] = useState(
    get_mall_auth_data.description ? get_mall_auth_data.description : ""
  );
  const [physicalAddress, setPhysicalAddress] = useState(
    get_mall_auth_data.address ? get_mall_auth_data.address : ""
  );

  const [mapurl, SetMapUrl] = useState(
    get_mall_auth_data.map_url ? get_mall_auth_data.map_url : ""
  );
  const [mapcode, SetMapCode] = useState(
    get_mall_auth_data.map_short_code ? get_mall_auth_data.map_short_code : ""
  );
  // const [province, setProvince] = useState(
  //   get_mall_auth_data.province ? get_mall_auth_data.province : ""
  // );
  const [mallWebsite, setMallWebsite] = useState(
    get_mall_auth_data.website ? get_mall_auth_data.website : ""
  );
  const [mallEmail, setMallEmail] = useState(
    get_mall_auth_data.email ? get_mall_auth_data.email : ""
  );
  const [mallInsta, setMallInsta] = useState(
    get_mall_auth_data.insta ? get_mall_auth_data.insta : ""
  );
  const [mallfb, setMallfb] = useState(
    get_mall_auth_data.fb ? get_mall_auth_data.fb : ""
  );
  const [mallTwitter, setMallTwitter] = useState(
    get_mall_auth_data.tweet ? get_mall_auth_data.tweet : ""
  );
  const [gethoNumber, setHoNumber] = useState(
    get_mall_auth_data.ho_number ? get_mall_auth_data.ho_number : ""
  );
  const [gethoEmail, setHoEmail] = useState(
    get_mall_auth_data.ho_email ? get_mall_auth_data.ho_email : ""
  );
  const [getLeaseNumber, setLeaseNumber] = useState(
    get_mall_auth_data.lease_request_number
      ? get_mall_auth_data.lease_request_number
      : ""
  );
  const [getLeaseEmail, setLeaseEmail] = useState(
    get_mall_auth_data.lease_request_email
      ? get_mall_auth_data.lease_request_email
      : ""
  );
  // const [contactNumber, setContactNumber] = useState(
  //   get_mall_auth_data.number && get_mall_auth_data.number
  // );
  const [email, setEmail] = useState(
    get_mall_auth_data.email ? get_mall_auth_data.email : ""
  );

  const [isAcceptTerm, setIsAcceptTerm] = useState(0);
  const [isAcceptTerm2, setIsAcceptTerm2] = useState(0);

  // tranding times
  const [monFromTime, setMonFromTime] = useState(
    get_mall_auth_data.mon_fri_from_time && get_mall_auth_data.mon_fri_from_time
  );
  const [monToTime, setMonToTime] = useState(
    get_mall_auth_data.mon_fri_to_time && get_mall_auth_data.mon_fri_to_time
  );
  const [satFromTime, setSatFromTime] = useState(
    get_mall_auth_data.sat_from_time && get_mall_auth_data.sat_from_time
  );
  const [satToTime, setSatToTime] = useState(
    get_mall_auth_data.sat_to_time && get_mall_auth_data.sat_to_time
  );
  const [sunFromTime, setSunFromTime] = useState(
    get_mall_auth_data.sun_from_time && get_mall_auth_data.sun_from_time
  );
  const [sunToTime, setSunToTime] = useState(
    get_mall_auth_data.sun_to_time && get_mall_auth_data.sun_to_time
  );
  const [holidayFromTime, setHolidayFromTime] = useState(
    get_mall_auth_data.holiday_from_time && get_mall_auth_data.holiday_from_time
  );
  const [holidayToTime, setHolidayToTime] = useState(
    get_mall_auth_data.holiday_to_time && get_mall_auth_data.holiday_to_time
  );

  const [resetmodal, setResetModal] = useState(false);

  function closeModal() {
    setResetModal(false);
  }

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
  const handleHeadOfficeEmailChange = (e) => {
    let gethoEmail = e.target.value;
    if (gethoEmail === "" || regEx.test(gethoEmail)) {
      setHoEmail(gethoEmail);
    } else {
      return;
    }
  };

  const handleTermChange = (e) => {
    setIsAcceptTerm(1);
    console.log("e.targate.value");
  };
  const handleTermChange2 = (e) => {
    setIsAcceptTerm2(1);
    console.log("e.targate.value");
  };

  const resetAccountData = () => {
    // setMallName('');
    setMallDescription("");
    setPhysicalAddress("");
    SetMapUrl("");
    SetMapCode("");
    setMallWebsite("");
    // setMallEmail('');
    setMallInsta("");
    setMallfb("");
    setMallTwitter("");
    setHoNumber("");
    setHoEmail("");
    setLeaseNumber("");
    setLeaseEmail("");
    setEmail("");
    setMonFromTime("");
    setMonToTime("");
    setSatFromTime("");
    setSatToTime("");
    setSunFromTime("");
    setSunToTime("");
    setHolidayFromTime("");
    setHolidayToTime("");
    SetCondation(true);
    SetCondation1(true);
    SetCondation2(true);
    SetCondation3(true);
    // setFiles([]);
    // setFiles2([]);
    // setFiles3([]);
    // setFiles4([]);
  };

  // logo dropzon

  const [getcondation, SetCondation] = useState(false);
  const [getcondation1, SetCondation1] = useState(false);
  const [getcondation2, SetCondation2] = useState(false);
  const [getcondation3, SetCondation3] = useState(false);
  const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        console.log("acceptedFiles", acceptedFiles);
        {
          setFiles(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
        }
        SetCondation(true);
        if (acceptedFiles.length === 0) {
          window.location.reload(true);
        }
      },
    });

  // map dropzon

  const { getRootProps: getRootMapProps, getInputProps: getInputMapProps } =
    useDropzone({
      onDrop: async (acceptedFiles) => {
        console.log("acceptedFiles", acceptedFiles);
        const maxSizeKB = 349; // Maximum size limit in KB
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
            const isDimensionsValid = img.width == 1050 && img.height == 284;
            if (isDimensionsValid) {
              setImageCheck(true);
            } else {
              setImageCheck(false);
            }
            return isDimensionsValid ? file : null; // Return file if dimensions are valid, otherwise skip it
          })
        );

        // Filter out null values (files that were skipped)
        const validFiles = filteredFiles.filter((file) => file !== null);
        {
          setFiles2(
            validFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );

          if (validFiles.length !== acceptedFiles.length) {
            if (validFiles.length !== acceptedFiles.length) {
              setImageCheck(false);
            } else {
              setImageCheck(true);
            }
            Notification(
              "error",
              "Error!",
              "Some files exceed the maximum size limit of 200KB or do not meet the dimension requirements of 1050x284 pixels and will not be uploaded."
            );
          }
        }
        SetCondation1(true);
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
    onDrop: async (acceptedFiles) => {
      console.log("acceptedFiles", acceptedFiles);

      const maxSizeKB = 200; // Maximum size limit in KB
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
          const isDimensionsValid = img.width == 720 && img.height == 200;

          return isDimensionsValid ? file : null; // Return file if dimensions are valid, otherwise skip it
        })
      );

      // Filter out null values (files that were skipped)
      const validFiles = filteredFiles.filter((file) => file !== null);
      {
        setFiles3(
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
            "Some files exceed the maximum size limit of 00mb or do not meet the dimension requirements of 720x200 pixels and will not be uploaded."
          );
        }
      }
      SetCondation2(true);

      if (acceptedFiles.length === 0) {
        window.location.reload(true);
      }
    },
  });

  // thumbline dropzon

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: async (acceptedFiles) => {
      console.log("acceptedFiles", acceptedFiles);
      const maxSizeKB = 200; // Maximum size limit in KB
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
          const isDimensionsValid = img.width == 1900 && img.height == 780;

          return isDimensionsValid ? file : null; // Return file if dimensions are valid, otherwise skip it
        })
      );

      // Filter out null values (files that were skipped)
      const validFiles = filteredFiles.filter((file) => file !== null);
      {
        setFiles4(
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
            "Some files exceed the maximum size limit of 00mb or do not meet the dimension requirements of 1900x780 pixels and will not be uploaded."
          );
        }
      }
      SetCondation3(true);

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
      style={{ width: "100%", height: "100%" }}
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

  const thumbs4 = files4.map((file) => (
    <img
      src={file.preview}
      style={{ width: "100%", height: "100%", maxHeight: "175px" }}
      className="img-fluid"
      alt="file"
    />
  ));

  // console.log("test file1", files);
  // console.log("test file2", files2);

  // update mall api

  const UpdateMallData = async () => {
    if (malldescription === "") {
      Notification("error", "Error!", "Please Enter Mall Description !");
    } else if (physicalAddress == "") {
      Notification("error", "Error!", "Please Enter Address !");
    } else if (mapurl == "") {
      Notification("error", "Error!", "Please Enter Map URL !");
    } else if (mallWebsite == "") {
      Notification("error", "Error!", "Please Enter Website !");
    } else if (mallEmail == "") {
      Notification("error", "Error!", "Please Enter Mall Email !");
    } else if (monFromTime == "") {
      Notification("error", "Error!", "Please Enter Trading Hours !");
    } else if (monToTime == "") {
      Notification("error", "Error!", "Please Enter Trading Hours !");
    } else if (satFromTime == "") {
      Notification("error", "Error!", "Please Enter Trading Hours !");
    } else if (satToTime == "") {
      Notification("error", "Error!", "Please Enter Trading Hours !");
    } else if (sunFromTime == "") {
      Notification("error", "Error!", "Please Enter Trading Hours !");
    } else if (sunToTime == "") {
      Notification("error", "Error!", "Please Enter Trading Hours !");
    } else if (holidayFromTime == "") {
      Notification("error", "Error!", "Please Enter Trading Hours !");
    } else if (holidayToTime == "") {
      Notification("error", "Error!", "Please Enter Trading Hours !");
    } else if (gethoEmail == "") {
      Notification("error", "Error!", "Please Enter Head Office Email !");
    } else if (gethoNumber == "") {
      Notification("error", "Error!", "Please Enter Head Office Number !");
    } else if (getLeaseEmail == "") {
      Notification("error", "Error!", "Please Enter Lease request email !");
    } else if (getLeaseNumber == "") {
      Notification("error", "Error!", "Please Enter Lease request number !");
    } else {
      const formdata = await new FormData();
      await formdata.append("mall_master_id", mallid);
      await formdata.append("description", malldescription);
      await formdata.append("address", physicalAddress);
      await formdata.append("map_url", mapurl);
      await formdata.append("map_short_code", mapcode);
      await formdata.append("website", mallWebsite);
      await formdata.append("email", mallEmail);
      await formdata.append(" mon_fri_from_time", monFromTime);
      await formdata.append("mon_fri_to_time", monToTime);
      await formdata.append("sat_from_time", satFromTime);
      await formdata.append("sat_to_time", satToTime);
      await formdata.append("sun_from_time", sunFromTime);
      await formdata.append("sun_to_time", sunToTime);
      await formdata.append("holiday_from_time", holidayFromTime);
      await formdata.append("holiday_to_time", holidayToTime);
      await formdata.append("insta", mallInsta);
      await formdata.append("fb", mallfb);
      await formdata.append("tweet", mallTwitter);
      await formdata.append("ho_email", gethoEmail);
      await formdata.append(" ho_number", gethoNumber);
      await formdata.append(" lease_request_email", getLeaseEmail);
      await formdata.append(" lease_request_number", getLeaseNumber);
      // await formdata.append("terms_condition", isAcceptTerm === true ? 1 : 0);
      await formdata.append("terms_condition", isAcceptTerm);
      await formdata.append("privacy_policy", isAcceptTerm2);
      if (files[0] !== undefined) {
        await formdata.append("shopping_center_logo_mall", files[0]);
      } else {
      }

      if (files2[0] !== undefined) {
        await formdata.append("banner_mall", files2[0]);
      } else {
      }

      if (files3[0] !== undefined) {
        await formdata.append("shopping_center_thumbnail_mall", files3[0]);
      } else {
      }

      if (files4[0] !== undefined) {
        await formdata.append("shopping_center_map_mall", files4[0]);
      } else {
      }

      // await formdata.append("name", mallName);

      // await formdata.append("description", malldescription);
      // await formdata.append("address", physicalAddress);
      // await formdata.append("website", mallWebsite);
      // await formdata.append("email_mall", mallEmail);
      // await formdata.append("email", email);
      // await formdata.append("insta", mallInsta);
      // await formdata.append("fb", mallfb);
      // await formdata.append("tweet", mallTwitter);
      // await formdata.append("ho_email", gethoEmail);
      // await formdata.append(" ho_number", gethoNumber);
      // if (files[0] !== undefined) {
      //   await formdata.append("shopping_center_logo_mall", files[0]);
      // } else {
      // }

      // if (files2[0] !== undefined) {
      //   await formdata.append("banner_mall", files2[0]);
      // } else {
      // }

      // if (files3[0] !== undefined) {
      //   await formdata.append("shopping_center_thumbnail_mall", files3[0]);
      // } else {
      // }

      // if (files4[0] !== undefined) {
      //   await formdata.append("shopping_center_map_mall", files4[0]);
      // } else {
      // }

      // await formdata.append(" mon_fri_from_time", monFromTime);
      // await formdata.append("mon_fri_to_time", monToTime);
      // await formdata.append("sat_from_time", satFromTime);
      // await formdata.append("sat_to_time", satToTime);
      // await formdata.append("sun_from_time", sunFromTime);
      // await formdata.append("sun_to_time", sunToTime);
      // await formdata.append("holiday_from_time", holidayFromTime);
      // await formdata.append("holiday_to_time", holidayToTime);

      console.log("-=-=-=->", formdata);
      const data = await UpdateMall(formdata);
      if (data) {
        if (data.success === 1) {
          Notification(
            "success",
            "Success!",
            "Account Setting Updated Successfully!"
          );
          setTab(1);
          console.log("mall-data", data);
        }
      }
    }
  };

  useEffect(() => {
    getMallMaster();
  }, []);

  const [getmallarray, SetMallArray] = useState([]);
  const [getmall, SetMall] = useState("");

  const getMallMaster = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_mall_master, {
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
      {/* <MallHeroEdit thumbs={thumbs} /> */}
      <div
        className={`${
          imagecheck === true ? "banner_all_wrap" : "banner_all_wrap_height"
        }`}>
        <div className="brand-hero-edit-main-wrapp" {...getRootMapProps()}>
          <input
            {...getInputMapProps()}
            accept="image/jpeg, image/jpg, image/png, image/eps"
          />

          {/* banner img */}
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
                src={get_mall_auth_data.banner_mall_path}
                style={{ width: "100%", height: "100%" }}
                className="img-fluid img_fluid_position"
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
                src={get_mall_auth_data.shopping_center_logo_mall_path}
                style={{ width: "100%", height: "100%", maxHeight: "175px" }}
                className="img-fluid"
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
        <div className="mall_name_wrapp mall_mall_name_wrapp">
          <p className="mall_name_heading mall_mall_name_heading">
            {get_mall_auth_data.name}:
          </p>
          <span
            className="mall_mall_name_heading"
            style={{ fontWeight: "600" }}>
            Account Settings
          </span>
        </div>
        {/* <div className="mm_horizontal_line"></div> */}
        <div style={{ paddingBottom: "2rem" }}></div>
        {/* mall management name end */}

        {/* mall management form start */}
        <div className="mall_acc-manager-flex">
          {/* text-input wrapp start */}
          <div className="mm_form_input_wrapp">
            {/* single text-input */}
            {/* <div className="mm_form_single_input">
              <label htmlFor="">Mall Name</label>
              <input
                type="text"
                value={mallName}
                onChange={(e) => setMallName(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div> */}
            {/* <div className="mm_form_single_input">
              <label className="leaderboard-card-lbl mm_form_single_input_mall_Acc_setting required">Select Your Region <span className="star_require">*</span></label>{" "}
              <input
                type="text"
                disabled={true}
                value={mallName}
                className="input_box"
              />

              <select
                className="leaderboard-card-inp"
                onChange={(e) => {
                  SetMall(e.target.value);
                  console.log(e.target.value);
                }}
                // onChange={(e) => SetRegionId(e.target.value)}
              >
                <option selected disabled value=""></option>
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

            {/* <div className="mm_form_single_input">
              <label className="leaderboard-card-lbl mm_form_single_input_mall_Acc_setting required">Select Your Malls <span className="star_require">*</span></label>{" "}
              <input
                type="text"
                disabled={true}
                value={mallName}
                className="input_box"
              placeholder="Auto fill from databse"
              />

              <select
                className="leaderboard-card-inp"
                onChange={(e) => {
                  SetMall(e.target.value);
                  console.log(e.target.value);
                }}
                // onChange={(e) => SetRegionId(e.target.value)}
              >
                <option selected disabled value=""></option>
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
            <div className="mm_form_single_input">
              <label className="leaderboard-card-lbl mm_form_single_input_mall_Acc_setting required">
                Mall Name <span className="star_require">*</span>
              </label>{" "}
              <input
                type="text"
                disabled={true}
                value={mallName}
                className="input_box"
                // placeholder="Auto fill from databse"
              />
              {/* <select
                className="leaderboard-card-inp"
                onChange={(e) => {
                  SetMall(e.target.value);
                  console.log(e.target.value);
                }}
                // onChange={(e) => SetRegionId(e.target.value)}
              >
                <option selected disabled value=""></option>
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
              </select> */}
            </div>
            {/* single text-input */}
            <div
              className="mm_form_single_input"
              style={{ alignItems: "flex-start" }}>
              <label
                htmlFor=""
                className="mm_form_single_input_mall_Acc_setting">
                Mall Description <span className="star_require">*</span>
              </label>
              <textarea
                type="text"
                value={malldescription}
                onChange={(e) => setMallDescription(e.target.value)}
                name=""
                id=""
                className="input_box"
                rows={5}
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label
                htmlFor=""
                className="mm_form_single_input_mall_Acc_setting">
                Physical Address <span className="star_require">*</span>
              </label>
              <input
                type="text"
                value={physicalAddress}
                onChange={(e) => setPhysicalAddress(e.target.value)}
                name=""
                id=""
                placeholder="Auto fill from database"
                className="input_box"
                // placeholder="Auto fill from databse"
              />
            </div>

            {/* single text-input */}
            <div className="mm_form_single_input">
              <label
                htmlFor=""
                className="mm_form_single_input_mall_Acc_setting">
                Google Maps URL <span className="star_require">*</span>
              </label>
              <input
                type="text"
                value={mapurl}
                onChange={(e) => SetMapUrl(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>

            {/* single text-input */}
            <div
              className="mm_form_single_input"
              style={{ alignItems: "flex-start" }}>
              <label
                htmlFor=""
                className="cus-acc-man-live-map width-resp-live-map mm_form_single_input_mall_Acc_setting">
                Live map embeded short code (optional)
              </label>
              <textarea
                type="text"
                value={mapcode}
                onChange={(e) => SetMapCode(e.target.value)}
                name=""
                id=""
                className="input_box"
                rows={5}
              />
            </div>

            {/* single text-input */}
            {/* <div className="mm_form_single_input">
            <label htmlFor="">Province</label>
            <input
              type="text"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              name=""
              id=""
              className="input_box"
            />
          </div> */}
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label
                htmlFor=""
                className="mm_form_single_input_mall_Acc_setting">
                Website URL <span className="star_require">*</span>
              </label>
              <input
                type="text"
                value={mallWebsite}
                onChange={(e) => setMallWebsite(e.target.value)}
                name=""
                id=""
                placeholder="Auto fill from database"
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label
                htmlFor=""
                className="mm_form_single_input_mall_Acc_setting">
                Mall Email <span className="star_require">*</span>
              </label>
              <input
                type="text"
                onChange={(e) => setMallEmail(e.target.value)}
                name=""
                id=""
                placeholder="Auto fill from database"
                value={mallEmail}
                className="input_box"
              />
            </div>

            {/* tranding sec strat */}
            <div className="mm_tranding_wrapp">
              <label
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  minWidth: "162px",
                }}
                htmlFor=""
                className="mm_form_single_input_mall_Acc_setting">
                Trading Hours <span className="star_require">*</span>
              </label>
              <div className="tranding_times_wrapp">
                {/* single time */}
                <div className="tranding_times_wrapp_sec">
                  <label
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      minWidth: "127px",
                    }}
                    htmlFor="">
                    Monday - Friday
                  </label>
                  <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
                    {/* <select className="input_box">
                    <option value="1">09:00</option>
                  </select> */}
                    <input
                      type="time"
                      name=""
                      value={monFromTime}
                      onChange={(e) => setMonFromTime(e.target.value)}
                      id=""
                      className="input_box"
                      style={{ width: "165px" }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                  <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
                    {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                    <input
                      type="time"
                      name=""
                      value={monToTime}
                      onChange={(e) => setMonToTime(e.target.value)}
                      id=""
                      className="input_box"
                      style={{ width: "165px" }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                </div>
                {/* single time */}
                <div className="tranding_times_wrapp_sec">
                  <label
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      minWidth: "127px",
                    }}
                    htmlFor="">
                    Saturday
                  </label>
                  <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
                    {/* <select className="input_box">
                    <option value="1">09:00</option>
                  </select> */}
                    <input
                      type="time"
                      name=""
                      value={satFromTime}
                      onChange={(e) => setSatFromTime(e.target.value)}
                      id=""
                      className="input_box"
                      style={{ width: "165px" }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                  <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
                    <input
                      type="time"
                      name=""
                      value={satToTime}
                      onChange={(e) => setSatToTime(e.target.value)}
                      id=""
                      className="input_box"
                      style={{ width: "165px" }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                </div>
                {/* single time */}
                <div className="tranding_times_wrapp_sec">
                  <label
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      minWidth: "127px",
                    }}
                    htmlFor="">
                    Sunday
                  </label>
                  <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
                    <input
                      type="time"
                      name=""
                      value={sunFromTime}
                      onChange={(e) => setSunFromTime(e.target.value)}
                      id=""
                      className="input_box"
                      style={{ width: "165px" }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                  <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
                    <input
                      type="time"
                      name=""
                      value={sunToTime}
                      onChange={(e) => setSunToTime(e.target.value)}
                      id=""
                      className="input_box"
                      style={{ width: "165px" }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                </div>
                {/* single time */}
                <div className="tranding_times_wrapp_sec">
                  <label
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      minWidth: "127px",
                    }}
                    htmlFor="">
                    Public Holidays
                  </label>
                  <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
                    <input
                      type="time"
                      name=""
                      value={holidayFromTime}
                      onChange={(e) => setHolidayFromTime(e.target.value)}
                      id=""
                      className="input_box"
                      style={{ width: "165px" }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                  <div className="tranding_sigle_time_wrapp tranding_sigle_time_wrapp-mall-management">
                    <input
                      type="time"
                      name=""
                      value={holidayToTime}
                      onChange={(e) => setHolidayToTime(e.target.value)}
                      id=""
                      className="input_box"
                      style={{ width: "165px" }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                </div>
              </div>
            </div>
            {/* tranding sec end */}

            {/* single text-input */}
            <div className="mm_form_single_input">
              <label
                htmlFor=""
                className="mm_form_single_input_mall_Acc_setting">
                Instagram URL
              </label>
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
              <label
                htmlFor=""
                className="mm_form_single_input_mall_Acc_setting">
                Facebook URL
              </label>
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
              <label
                htmlFor=""
                className="mm_form_single_input_mall_Acc_setting">
                Twitter URL
              </label>
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
              <label
                className="mm_form_single_input_mall_Acc_setting"
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  minWidth: "162px",
                }}>
                Head Office Email
                <span className="star_require">*</span>
              </label>
              <input
                type="text"
                value={gethoEmail}
                onChange={(e) => setHoEmail(e.target.value)}
                name=""
                id=""
                className="input_box"
                placeholder="Auto fill from databse"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label
                className="mm_form_single_input_mall_Acc_setting"
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  minWidth: "162px",
                }}>
                Head Office Number
                <span className="star_require">*</span>
              </label>
              <input
                type="number"
                value={gethoNumber}
                onChange={(e) => setHoNumber(e.target.value)}
                name=""
                id=""
                className="input_box"
                placeholder="Auto fill from databse"
              />
            </div>

            {/* single text-input */}
            <div className="mm_form_single_input">
              <label
                className="mm_form_single_input_mall_Acc_setting"
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  minWidth: "162px",
                }}>
                Lease request email
                <span className="star_require">*</span>
              </label>
              <input
                type="text"
                value={getLeaseEmail}
                onChange={(e) => setLeaseEmail(e.target.value)}
                name=""
                id=""
                className="input_box"
                // placeholder="Auto fill from databse"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label
                className="mm_form_single_input_mall_Acc_setting"
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  minWidth: "162px",
                }}>
                Lease request number
                <span className="star_require">*</span>
              </label>
              <input
                type="number"
                value={getLeaseNumber}
                onChange={(e) => setLeaseNumber(e.target.value)}
                name=""
                id=""
                className="input_box"
                // placeholder="Auto fill from databse"
              />
            </div>

            <div className="mm_form_single_input">
              <label
                className="mm_form_single_input_mall_Acc_setting"
                htmlFor=""
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  minWidth: "162px",
                }}></label>
              <span style={{ fontSize: "14px", color: "#bbb" }}>
                *Required Fields including all image uploads.
              </span>
            </div>

            {/* single text-input */}
            {/* <div className="mm_form_single_input">
              <label htmlFor="">Email Address</label>
              <input
                type="text"
                onChange={(e) => onHandleEmailChange(e)}
                name=""
                id=""
                className="input_box"
              />
            </div> */}
            {/* mm terms condition wrapp */}
            <div className="mm_form_single_input fs-des-resp">
              <label
                htmlFor=""
                className="mm_form_single_input_mall_Acc_setting"></label>
              <div className="signup_terms_wrapp">
                <input
                  type="checkbox"
                  value={isAcceptTerm}
                  onChange={handleTermChange}
                  checked={isAcceptTerm == 1}
                />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Privacy Policy</a>
                </p>
              </div>
            </div>

            <div
              className="mm_form_single_input fs-des-resp"
              style={{ marginTop: "-10px" }}>
              <label
                htmlFor=""
                className="mm_form_single_input_mall_Acc_setting"></label>
              <div className="signup_terms_wrapp">
                <input
                  type="checkbox"
                  value={isAcceptTerm2}
                  onChange={handleTermChange2}
                  checked={isAcceptTerm2 == 1}
                />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Terms and Conditions</a>
                  {/* <a className="signup_terms_link">Privacy Policy</a> */}
                </p>
              </div>
            </div>

            {/* upload button */}
            <div className="mm_form_single_input">
              <label
                htmlFor=""
                className="mm_form_single_input_mall_Acc_setting"></label>
              <div className="mall_upload_btn_wrapp">
                <button
                  className="btn btn-black"
                  disabled={
                    isAcceptTerm == 1 && isAcceptTerm2 == 1 ? false : true
                  }
                  onClick={() => UpdateMallData()}>
                  Update
                </button>
                <button
                  className="btn"
                  style={{ fontWeight: "600", color: "#777" }}
                  onClick={() => {
                    setResetModal(true);
                  }}>
                  Reset
                </button>
              </div>
            </div>
          </div>
          {/* text-input wrapp end */}

          {/* upload images wrapp start */}
          <div className="mm_img_upload_wrapp mall-acc-manager-upl-img-part">
            {/* single upload image */}
            <div className="img-upl-border">
              <div
                className="myprofile_inner_sec2"
                {...getRootlogoProps()}
                style={{ border: "none", paddingBottom: "0px" }}>
                {/* <input
                {...getInputlogoProps()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              /> */}
                <h6 className="myprofile_upload_img_card_name">
                  Upload the Shopping centre logo (200px x 200px)
                  <br /> (max 40kb)<span className="star_require">*</span>
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
                            style={{
                              marginBottom: "10px",
                              color: "var(--color-orange)",
                              fontWeight: "600",
                            }}>
                            click here
                          </button>
                          {/* <a href="">clicking here</a> */}
                        </div>
                        <div className="btnn-main">
                          <button
                            className="btn btn-black mb_8"
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
                    {get_mall_auth_data.shopping_center_logo_mall_path ===
                    null ? (
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
                              style={{
                                marginBottom: "10px",
                                color: "var(--color-orange)",
                                fontWeight: "600",
                              }}>
                              click here
                            </button>
                            {/* <a href="">clicking here</a> */}
                          </div>
                          <div className="btnn-main">
                            <button
                              className="btn btn-black mb_8"
                              type="button"
                              onClick={() => {
                                // setFiles([]);
                              }}>
                              Upload File
                            </button>
                          </div>
                        </div>
                        {/* <button className="btn" onClick={() => setFiles([])}>
                          Cancel
                        </button> */}
                      </>
                    ) : (
                      <>
                        <div className="myprofile_inner_sec2_img_upload">
                          <img
                            src={
                              get_mall_auth_data.shopping_center_logo_mall_path
                            }
                            style={{ width: "100%", height: "100%" }}
                            className="img-fluidb"
                          />
                        </div>
                        <div className="btnn-main" style={{ width: "100%" }}>
                          <button
                            className="btn btn-black mb_8"
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
                  className="btn"
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
                style={{ border: "none", paddingBottom: "0px" }}>
                {/* <input
                {...getInputlogoProps()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              /> */}
                <h6 className="myprofile_upload_img_card_name">
                  Upload the Shopping centre Banner (1050px x 284px) <br /> (max
                  200kb)<span className="star_require">*</span>
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
                            style={{
                              marginBottom: "10px",
                              color: "var(--color-orange)",
                              fontWeight: "600",
                            }}>
                            click here
                          </button>
                          {/* <a href="">clicking here</a> */}
                        </div>
                        <div className="btnn-main">
                          <button
                            className="btn btn-black mb_8"
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
                    {get_mall_auth_data.banner_mall_path === null ? (
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
                              style={{
                                marginBottom: "10px",
                                color: "var(--color-orange)",
                                fontWeight: "600",
                              }}>
                              click here
                            </button>
                            {/* <a href="">clicking here</a> */}
                          </div>
                          <div className="btnn-main">
                            <button
                              className="btn btn-black mb_8"
                              type="button"
                              onClick={() => {
                                // setFiles([]);
                              }}>
                              Upload File
                            </button>
                          </div>
                        </div>
                        {/* <button className="btn" onClick={() => setFiles2([])}>
                          Cancel
                        </button> */}
                      </>
                    ) : (
                      <>
                        <div className="myprofile_inner_sec2_img_upload">
                          <img
                            src={get_mall_auth_data.banner_mall_path}
                            style={{ width: "100%", height: "100%" }}
                            className="img-fluidb"
                          />
                        </div>
                        <div className="btnn-main" style={{ width: "100%" }}>
                          <button
                            className="btn btn-black mb_8"
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
                  className="btn"
                  onClick={() => {
                    setFiles2([]), setImageCheck(false);
                  }}
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
            {/* single upload image */}
            <div className="img-upl-border">
              <div
                className="myprofile_inner_sec2"
                {...getRootBannerProps()}
                style={{ border: "none", paddingBottom: "0px" }}>
                {/* <input
                {...getInputlogoProps()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              /> */}
                <h6 className="myprofile_upload_img_card_name">
                  Upload the Shopping centre thumbnail (720px x 200px) <br />
                  (max 00mb)<span className="star_require">*</span>
                </h6>
                {getcondation2 === true ? (
                  <>
                    {files3 && files3.length > 0 ? (
                      <div className="myprofile_inner_sec2_img_upload">
                        {thumbs3}
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
                          {/* <input
                            {...getRootBannerProps()}
                            accept="image/jpeg, image/jpg, image/png, image/eps"
                          /> */}
                          <button
                            type="button"
                            className="click_upload_btn"
                            style={{
                              marginBottom: "10px",
                              color: "var(--color-orange)",
                              fontWeight: "600",
                            }}>
                            click here
                          </button>
                          {/* <a href="">clicking here</a> */}
                        </div>
                        <div className="btnn-main">
                          <button
                            className="btn btn-black mb_8"
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
                    {get_mall_auth_data.shopping_center_thumbnail_mall_path ===
                    null ? (
                      <>
                        <div
                          style={{ width: "100%" }}
                          {...getRootBannerProps()}>
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
                            {/* <input
                              {...getInputlogoProps()}
                              accept="image/jpeg, image/jpg, image/png, image/eps"
                            /> */}
                            <button
                              type="button"
                              className="click_upload_btn"
                              style={{
                                marginBottom: "10px",
                                color: "var(--color-orange)",
                                fontWeight: "600",
                              }}>
                              click here
                            </button>
                            {/* <a href="">clicking here</a> */}
                          </div>
                          <div className="btnn-main">
                            <button
                              className="btn btn-black mb_8"
                              type="button"
                              onClick={() => {
                                // setFiles([]);
                              }}>
                              Upload File
                            </button>
                          </div>
                        </div>
                        {/* <button className="btn" onClick={() => setFiles3([])}>
                          Cancel
                        </button> */}
                      </>
                    ) : (
                      <>
                        <div className="myprofile_inner_sec2_img_upload">
                          <img
                            src={
                              get_mall_auth_data.shopping_center_thumbnail_mall_path
                            }
                            style={{ width: "100%", height: "100%" }}
                            className="img-fluidb"
                          />
                        </div>
                        <div className="btnn-main" style={{ width: "100%" }}>
                          <button
                            className="btn btn-black mb_8"
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
                  className="btn"
                  onClick={() => setFiles3([])}
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
                {...getRootProps()}
                style={{ border: "none", paddingBottom: "0px" }}>
                {/* <input
                {...getInputlogoProps()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              /> */}
                <h6 className="myprofile_upload_img_card_name">
                  Upload the Shopping centre map (1900 x 780 pixels)
                  <br /> (max 800kb)<span className="star_require">*</span>
                </h6>
                {getcondation3 === true ? (
                  <>
                    {files4 && files4.length > 0 ? (
                      <div className="myprofile_inner_sec2_img_upload">
                        {thumbs4}
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
                          {/* <input
                            {...getRootProps()}
                            accept="image/jpeg, image/jpg, image/png, image/eps"
                          /> */}
                          <button
                            type="button"
                            className="click_upload_btn"
                            style={{
                              marginBottom: "10px",
                              color: "var(--color-orange)",
                              fontWeight: "600",
                            }}>
                            click here
                          </button>
                          {/* <a href="">clicking here</a> */}
                        </div>
                        <div className="btnn-main">
                          <button
                            className="btn btn-black mb_8"
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
                    {get_mall_auth_data.shopping_center_map_mall_path ===
                    null ? (
                      <>
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
                            {/* <input
                              {...getRootProps()}
                              accept="image/jpeg, image/jpg, image/png, image/eps"
                            /> */}
                            <button
                              type="button"
                              className="click_upload_btn"
                              style={{
                                marginBottom: "10px",
                                color: "var(--color-orange)",
                                fontWeight: "600",
                              }}>
                              click here
                            </button>
                            {/* <a href="">clicking here</a> */}
                          </div>
                          <div className="btnn-main">
                            <button
                              className="btn btn-black mb_8"
                              type="button"
                              onClick={() => {
                                // setFiles([]);
                              }}>
                              Upload File
                            </button>
                          </div>
                        </div>
                        {/* <button className="btn btn-blue" onClick={() => setFiles4([])}>
                          Cancel
                        </button> */}
                      </>
                    ) : (
                      <>
                        <div className="myprofile_inner_sec2_img_upload">
                          <img
                            src={
                              get_mall_auth_data.shopping_center_map_mall_path
                            }
                            style={{ width: "100%", height: "100%" }}
                            className="img-fluidb"
                          />
                        </div>
                        <div className="btnn-main" style={{ width: "100%" }}>
                          <button
                            className="btn btn-black mb_8"
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
                  className="btn"
                  onClick={() => setFiles4([])}
                  style={{
                    marginBottom: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="mall_acc_setting-btn-resp">
            <div className="signup_terms_wrapp fs-des-resp2">
              <input
                type="checkbox"
                value={isAcceptTerm}
                onChange={handleTermChange}
                checked={isAcceptTerm == 1}
              />
              <p
                className="fs-des"
                style={{ fontWeight: "400", fontSize: "14px" }}>
                I have read and agree to the{" "}
                <a className="signup_terms_link">Privacy Policy</a>
              </p>
            </div>

            <div className="signup_terms_wrapp fs-des-resp2">
              <input
                type="checkbox"
                value={isAcceptTerm}
                onChange={handleTermChange2}
                checked={isAcceptTerm2 == 1}
              />
              <p
                className="fs-des"
                style={{ fontWeight: "400", fontSize: "14px" }}>
                I have read and agree to the{" "}
                <a className="signup_terms_link">Terms and Conditions</a>
              </p>
            </div>
          </div>
          {/* upload images wrapp end */}
          <div className="mall_upload_btn_wrapp-resp">
            <button
              className="btn btn-black"
              disabled={isAcceptTerm == 1 && isAcceptTerm2 == 1 ? false : true}
              onClick={() => UpdateMallData()}>
              Update
            </button>
            <button
              className="btn"
              style={{ fontWeight: "600", color: "#777" }}
              onClick={() => {
                setResetModal(true);
              }}>
              Reset
            </button>
          </div>
        </div>
        {/* mall management form end */}
      </div>

      <ReactModal
        isOpen={resetmodal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <div className="sd_model_wrapp sd_model_wrapp-delete">
          {/* edit and delete orange btns start */}
          <div className="sd_model_edit_wrap">
            <button onClick={closeModal}>
              <img src={images.close} alt="" />
            </button>
          </div>
          {/* edit and delete orange btns end */}

          {/* <p>Are you sure you want to Reset all Data</p> */}
          <p>
            Are you sure you want to reset the form? <br />
            Note that all your data will be cleared from the form by selecting
            this option
          </p>
          <div className="delete-modal-btn-box">
            <button
              onClick={() => {
                // setStore_id(itm.id);
                resetAccountData();
                setResetModal(false);
              }}
              className="delete-modal-btn">
              Yes
            </button>
            {/* onClick={() => {
              // setStore_id(itm.id);
              // DeleteMallStoreData(itm.id);
              setDeleteModal(true);
            }} */}

            <button onClick={closeModal} className="delete-modal-btn">
              No
            </button>
          </div>
        </div>
        {/* </div> */}
      </ReactModal>
    </>
  );
};

export default MallManagement;
