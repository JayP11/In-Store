import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { ACCEPT_HEADER, mall_create_eatery } from "../utils/Constant";
import axios from "axios";
import Notification from "../utils/Notification"
import { IoChevronBack } from "react-icons/io5";
import { MallHero } from "../components";


const AddEateries = ({ get_mall_auth_data, setTab }) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([]);
  const [time, setTime] = useState("");

  const [getstoreName, setStoreName] = useState("");
  const [getstoreNo, setStoreNo] = useState();
  const [getstoreLevel, setStoreLevel] = useState("");
  const [getcontactNo, setContactNo] = useState();
  const [email, setEmail] = useState("");
  const [getstoreDes, setStoreDes] = useState("");

  // tranding times
  const [monFromTime, setMonFromTime] = useState("");
  const [monToTime, setMonToTime] = useState("");
  const [satFromTime, setSatFromTime] = useState("");
  const [satToTime, setSatToTime] = useState("");
  const [sunFromTime, setSunFromTime] = useState("");
  const [sunToTime, setSunToTime] = useState("");
  const [holidayFromTime, setHolidayFromTime] = useState("");
  const [holidayToTime, setHolidayToTime] = useState("");

  // Add Etaries

  const onHandleEmailChange = (e) => {
    let email = e.target.value;
    if (email === "" || regEx.test(email)) {
      setEmail(email);
    } else {
      return;
    }
  };


  const [isAcceptTerm, setIsAcceptTerm] = useState(false);

  const handleTermChange = (event) => {
    setIsAcceptTerm((current) => !current);
  };
  const addEateries = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));

    if (getstoreName == "" || undefined) {
      Notification("error", "Error", "Please Enter Store Name");
      return;
    } else if (getstoreNo == "" || undefined) {
      Notification("error", "Error", "Please Enter Store Number");
      return;
    } else if (getstoreLevel == "" || undefined) {
      Notification("error", "Error", "Please Enter Store Level");
      return;
    } else if (getcontactNo == "" || undefined) {
      Notification("error", "Error", "Please Enter Contact Number");
      return;
    }
    // else if (getcontactNo.length < 10 || getcontactNo.length > 10) {
    //   // alert("Enter valid mobile number...");
    //   Notification("error", "Error!", "Enter valid mobile number...");

    //   return;
    // }
    else if (email == "" || undefined) {
      Notification("error", "Error", "Please Enter Email");
      return;
    } else if (getstoreDes == "" || undefined) {
      Notification("error", "Error", "Please Enter Description");
      return;
    }
    else {
      const formdata = await new FormData();
      formdata.append("name", getstoreName);
      formdata.append("store_no", getstoreNo);
      formdata.append("store_level", getstoreLevel);
      formdata.append("number", getcontactNo);
      formdata.append("email", email);
      formdata.append("description", getstoreDes);

      if (files && files.length > 0) {
        formdata.append("store_logo", files[0]);
      }

      if (files2 && files2.length > 0) {
        formdata.append("banner_store", files2[0]);
      }

      formdata.append("mon_fri_from_time", monFromTime);
      formdata.append("mon_fri_to_time", monToTime);
      formdata.append("sat_from_time", satFromTime);
      formdata.append("sat_to_time", satToTime);
      formdata.append("sun_from_time", sunFromTime);
      formdata.append("sun_to_time", sunToTime);
      formdata.append("holiday_from_time", holidayFromTime);
      formdata.append("holiday_to_time", holidayToTime);

      try {
        const response = await axios.post(mall_create_eatery, formdata, {
          headers: {
            Accept: ACCEPT_HEADER,
            Authorization: "Bearer " + token,
          },
        });

        if (response.data.success == 1) {
          Notification("success", "Success!", "Eatery Added Successfully!");
          setTab(4);
          console.log("mall_create_eatery", response.data);
        }
        return response.data;
      } catch (error) {
        console.log("error", error);
      }
    }


  };

  useEffect(() => {
    console.log("files", files);
  }, [files]);

  useEffect(() => {
    console.log("files2", files2);
  }, [files2]);

  const { getRootProps: getRootLogoProps, getInputProps: getInputLogoProps } = useDropzone({
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
      if (acceptedFiles.length === 0) {
        window.location.reload(true);
      }
    },
  });

  const { getRootProps: getRootBannerProps, getInputProps: getInputBannerProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log("acceptedFiles", acceptedFiles);
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

  useEffect(() => {
    console.log("time", time);
  }, []);

  return (
    <>
      <MallHero get_mall_auth_data={get_mall_auth_data} />
      <div className="mm_main_wrapp mm_form_wrapp_add_brand_mall">
        <div className='edit-brand-back-iconbox' onClick={() => setTab(4)}><IoChevronBack className='edit-brand-back-icon' /> <p className='edit-brand-back-txt'>Back</p></div>
        {/* mall management name start */}
        <div className="mall_name_wrapp">
          <p className="mall_name_heading">{get_mall_auth_data.name}:</p>
          <span>Add Eatery </span>
        </div>
        <div className="mm_horizontal_line"></div>
        {/* mall management name end */}

        {/* mall management form start */}
        <div className="mm_form_wrapp mm_form_wrapp_add_brand_mall">
          {/* text-input wrapp start */}
          <div className="mm_form_input_wrapp">
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "140px" }}>Store Name</label>
              <input
                type="text"
                value={getstoreName}
                onChange={(e) => setStoreName(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "140px" }}>Store Number</label>
              <input
                type="text"
                value={getstoreNo}
                onChange={(e) => setStoreNo(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "140px" }}>Store Level</label>
              <input
                type="text"
                value={getstoreLevel}
                onChange={(e) => setStoreLevel(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "140px" }}>Contact Number</label>
              <input
                type="number"
                value={getcontactNo}
                onChange={(e) => setContactNo(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "140px" }}>Email Address</label>
              <input
                type="email"
                onChange={(e) => onHandleEmailChange(e)}
                name=""
                id=""
                className="input_box"
              />
            </div>

            {/* tranding sec start */}
            <div className="mm_tranding_wrapp">
              <label
                style={{ fontSize: "16px", fontWeight: "400", minWidth: "140px" }}
                htmlFor=""
              >
                Trading Hours
              </label>
              <div className="tranding_times_wrapp">
                {/* single time */}
                <div className="tranding_times_wrapp_sec">
                  <label
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      minWidth: "140px",
                    }}
                    htmlFor=""
                  >
                    Monday - Friday
                  </label>
                  <div className="tranding_sigle_time_wrapp" style={{ gap: "0px", width: "138px" }}>
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
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >

                    </p>
                  </div>
                  <div className="tranding_sigle_time_wrapp" style={{ gap: "0px", width: "138px" }}>
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
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >

                    </p>
                  </div>
                </div>
                {/* single time */}
                <div className="tranding_times_wrapp_sec">
                  <label
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      minWidth: "140px",
                    }}
                    htmlFor=""
                  >
                    Saturday
                  </label>
                  <div className="tranding_sigle_time_wrapp" style={{ gap: "0px", width: "138px" }}>
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
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >

                    </p>
                  </div>
                  <div className="tranding_sigle_time_wrapp" style={{ gap: "0px", width: "138px" }}>
                    <input
                      type="time"
                      name=""
                      value={satToTime}
                      onChange={(e) => setSatToTime(e.target.value)}
                      id=""
                      className="input_box"
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >

                    </p>
                  </div>
                </div>
                {/* single time */}
                <div className="tranding_times_wrapp_sec">
                  <label
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      minWidth: "140px",
                    }}
                    htmlFor=""
                  >
                    Sunday
                  </label>
                  <div className="tranding_sigle_time_wrapp" style={{ gap: "0px", width: "138px" }}>
                    <input
                      type="time"
                      name=""
                      value={sunFromTime}
                      onChange={(e) => setSunFromTime(e.target.value)}
                      id=""
                      className="input_box"
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >

                    </p>
                  </div>
                  <div className="tranding_sigle_time_wrapp" style={{ gap: "0px", width: "138px" }}>
                    <input
                      type="time"
                      name=""
                      value={sunToTime}
                      onChange={(e) => setSunToTime(e.target.value)}
                      id=""
                      className="input_box"
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >

                    </p>
                  </div>
                </div>
                {/* single time */}
                <div className="tranding_times_wrapp_sec">
                  <label
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      minWidth: "140px",
                    }}
                    htmlFor=""
                  >
                    Public Holidays
                  </label>
                  <div className="tranding_sigle_time_wrapp" style={{ gap: "0px", width: "138px" }}>
                    <input
                      type="time"
                      name=""
                      value={holidayFromTime}
                      onChange={(e) => setHolidayFromTime(e.target.value)}
                      id=""
                      className="input_box"
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >

                    </p>
                  </div>
                  <div className="tranding_sigle_time_wrapp" style={{ gap: "0px", width: "138px" }}>
                    <input
                      type="time"
                      name=""
                      value={holidayToTime}
                      onChange={(e) => setHolidayToTime(e.target.value)}
                      id=""
                      className="input_box"
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >

                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* tranding sec end */}

            {/* text-area sec start */}
            <div
              className="mm_form_single_input"
              style={{ alignItems: "flex-start" }}
            >
              <label htmlFor="">Store Description</label>
              <textarea
                type="text"
                value={getstoreDes}
                onChange={(e) => setStoreDes(e.target.value)}
                name=""
                id=""
                className="input_box"
                rows={8}
              />
            </div>

            <div className="mm_form_single_input mb_8">
              <label htmlFor="" style={{ minWidth: "140px" }}></label>
              <div className="signup_terms_wrapp indep-side">
                <input
                  type="checkbox"
                  value={isAcceptTerm}
                  onChange={handleTermChange}
                  checked={isAcceptTerm}
                />

                <p className="fs-des" style={{ fontWeight: "400", fontSize: "14px" }}>
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Terms and Conditions</a> &{" "}
                  <a className="signup_terms_link">Privacy Policy</a>
                </p>
              </div>
            </div>
            {/* text-area sec end */}
          </div>
          {/* text-input wrapp end */}
          <div className="brand-add-img-flex">
            {/* upload images wrapp start */}
            <div className="mm_img_upload_wrapp" style={{ width: "100%" }}>
              {/* single upload image */}
              <div className="myprofile_inner_sec2">
                <h4 style={{ marginBottom: "10px" }} className="myprofile_upload_img_card_name">Upload the eatery logo <br />
                  (200 x 150 pixels)</h4>
                {files && files.length > 0 ? (
                  <div className="myprofile_inner_sec2_img_upload">{thumbs}</div>
                ) : (
                  <div style={{ width: "100%" }} {...getRootLogoProps()}>
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
                        {...getInputLogoProps()}
                        accept="image/jpeg, image/jpg, image/png, image/eps"
                      />
                      <button type="button" className="click_upload_btn" style={{ marginBottom: "10px" }}>
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
                        style={{ marginBottom: "10px" }}
                      >
                        Upload File
                      </button>
                    </div>
                  </div>
                )}
                {/* <div className="myprofile_upload_img_btn_wrapp"> */}
                <button className="btn btn-blue" onClick={() => setFiles([])}>
                  Cancel
                </button>
                {/* </div> */}
              </div>
            </div>
            {/* upload images wrapp end */}

            {/* upload images wrapp start */}
            <div className="mm_img_upload_wrapp" style={{ width: "100%" }}>
              {/* single upload image */}
              <div className="myprofile_inner_sec2">
                <h4 style={{ marginBottom: "10px" }} className="myprofile_upload_img_card_name">Upload the eatery banner <br />
                  (200 x 150 pixels)</h4>
                {files2 && files2.length > 0 ? (
                  <div className="myprofile_inner_sec2_img_upload">{thumbs2}</div>
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
                      <button type="button" className="click_upload_btn" style={{ marginBottom: "10px" }}>
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
                        style={{ marginBottom: "10px" }}
                      >
                        Upload File
                      </button>
                    </div>
                  </div>
                )}
                {/* <div className="myprofile_upload_img_btn_wrapp"> */}
                <button className="btn btn-blue" onClick={() => setFiles2([])}>
                  Cancel
                </button>
                {/* </div> */}
              </div>
            </div>
            {/* upload images wrapp end */}
          </div>
        </div>
        <div className="signup_terms_wrapp indep-side-show">
          <input
            type="checkbox"
            value={isAcceptTerm}
            onChange={handleTermChange}
            checked={isAcceptTerm}
          />

          <p className="fs-des" style={{ fontWeight: "400", fontSize: "14px" }}>
            I have read and agree to the{" "}
            <a className="signup_terms_link">Terms and Conditions</a> &{" "}
            <a className="signup_terms_link">Privacy Policy</a>
          </p>

        </div>
        <div className="mm_form_single_input mb_8">
          <label htmlFor="" style={{ minWidth: "140px" }}></label>
          <button
            style={{ marginTop: "20px", width: "25%" }}
            className="btn btn-orange add-eatery-resp"
            onClick={() => {
              addEateries();
              console.log("smnbsmdb");

            }}

          >
            Submit
          </button>
        </div>
        {/* mall management form end */}
      </div >
    </>
  );
};

export default AddEateries;