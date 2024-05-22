import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { ACCEPT_HEADER, get_brand_multiple, get_category, get_eatery_category, mall_create_eatery } from "../utils/Constant";
import axios from "axios";
import Notification from "../utils/Notification"
import { IoChevronBack } from "react-icons/io5";
import { MallHero } from "../components";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();



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
  const [retailerType, setRetailerType] = useState(1);

  const [getstoreContactPerson, setStoreContactPerson] = useState("");
  const [mallsOption, setMallsOption] = useState([]);
  const [getMultipleBrand, setMultipleBrand] = useState([]);



  // tranding times
  const [monFromTime, setMonFromTime] = useState("");
  const [monToTime, setMonToTime] = useState("");
  const [satFromTime, setSatFromTime] = useState("");
  const [satToTime, setSatToTime] = useState("");
  const [sunFromTime, setSunFromTime] = useState("");
  const [sunToTime, setSunToTime] = useState("");
  const [holidayFromTime, setHolidayFromTime] = useState("");
  const [holidayToTime, setHolidayToTime] = useState("");
  const [catarray, SetArray] = useState([]);
  const [storeCategory, setStoreCategory] = useState("");



  // Add Etaries

  const onHandleEmailChange = (e) => {
    let email = e.target.value;
    if (email === "" || regEx.test(email)) {
      setEmail(email);
    } else {
      return;
    }
  };


  const [isAcceptTerm, setIsAcceptTerm] = useState(0);
  const [isAcceptTerm2, setIsAcceptTerm2] = useState(0);

  const handleTermChange = (e) => {
    setIsAcceptTerm(1);
    console.log("e.targate.value");
  };
  const handleTermChange2 = (e) => {
    setIsAcceptTerm2(1);
    console.log("e.targate.value");
  };


  useEffect(() => {
    getcat();
  }, [])

  const addEateries = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));

    if (getstoreName == "" || undefined) {
      Notification("error", "Error", "Please Enter Store Name");
      return;
    } else if (storeCategory == "" || undefined) {
      Notification("error", "Error!", "Please Select Eatery Category!");
      return;
    } else if (getstoreNo == "" || undefined) {
      Notification("error", "Error", "Please Enter Store Number");
      return;
    }
    // else if (getstoreLevel == "" || undefined) {
    //   Notification("error", "Error", "Please Enter Store Level");
    //   return;
    // } 
    else if (getcontactNo == "" || undefined) {
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
      formdata.append("category_id", storeCategory);

      formdata.append("store_no", getstoreNo);
      formdata.append("store_level", getstoreLevel);
      // formdata.append("number", getcontactNo);
      formdata.append("contact_no", getcontactNo);
      await formdata.append("contact_person", getstoreContactPerson);

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
      await formdata.append("type", retailerType);

      formdata.append("terms_condition", isAcceptTerm);
      formdata.append("privacy_policy", isAcceptTerm2);

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

  const getcat = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_eatery_category, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          SetArray(res.data.data);

        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  useEffect(() => {
    console.log("files2", files2);
  }, [files2]);

  useEffect(() => {
    console.log("eatery category",catarray);
  }, []);

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
      style={{ width: "100%", height: "100%", maxHeight: "175px", filter: "grayscale(100%)" }}
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
    getMutipleBrand();
  }, []);

  const getMutipleBrand = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
        .get(get_brand_multiple, {
            headers: {
                Accept: ACCEPT_HEADER,
                Authorization: "Bearer " + token,
            },
        })
        .then((res) => {
            console.log("get multiple brand data", JSON.stringify(res.data, null, 2));
            if (res.data.success == 1) {
                setMultipleBrand(res.data.data);
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
      <MallHero get_mall_auth_data={get_mall_auth_data} />
      <div className="mm_main_wrapp mm_form_wrapp_add_brand_mall">
        <div className='edit-brand-back-iconbox' onClick={() => setTab(4)}><IoChevronBack className='edit-brand-back-icon' />
          <p className='edit-brand-back-txt'>Back</p></div>
        {/* mall management name start */}
        <div className="mall_name_wrapp mm_form_wrapp_name_padding">
          <p className="mall_name_heading">{get_mall_auth_data.name}:</p>
          <span style={{ fontWeight: "600" }}>Add Eatery </span>
        </div>
        {/* <div className="mm_horizontal_line"></div> */}
        <div className="" style={{ marginBottom: "2rem" }}></div>
        {/* mall management name end */}

        {/* mall management form start */}
        <div className="mm_form_wrapp mm_form_wrapp_add_brand_mall mm_form_wrapp_padding">
          {/* text-input wrapp start */}
          <div className="mm_form_input_wrapp">
            {/* single text-input */}

            <div className="signup_terms_wrapp indep-side">
                            <div className="mm_form_single_input">
                                <label htmlFor="" style={{ minWidth: "162px" }}>Retailer type</label>

                                <div className="radio-btn-flex-brand radio-btn-flex-brand-mall">
                                    <div className="radio-btn-inner-flex">
                                        <input
                                            type="radio"
                                            id="Online"
                                            name="gender"
                                            value="1"
                                            onChange={(e) => { setRetailerType(e.target.value); console.log("-->", retailerType); }}
                                        // onChange={(e) => { setRetailerType(1); console.log("-->", retailerType); }}

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
                                            onChange={(e) => { setRetailerType(e.target.value); console.log("-->", retailerType); }}
                                        />
                                        <label className="course-form-txt" for="specifyColor">
                                            Group Retailer
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>


            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "162px" }}>Eatery Name<span className="star_require">*</span></label>
              <input
                type="text"
                value={getstoreName}
                onChange={(e) => setStoreName(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>

            {retailerType == 2 ? <>
                            <div className="mm_form_single_input">
                                <label htmlFor="" className="" style={{ minWidth: "162px" }}>Select Brands</label>

                                <Select
                                    value={mallsOption}
                                    styles={{ width: "100%", padding: "0px" }}
                                    className="leaderboard-card-inp"
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    // defaultValue={[colourOptions[4], colourOptions[5]]}

                                    isMulti
                                    options={getMultipleBrand}
                                    onChange={setMallsOption}
                                />
                            </div>
                        </> : <></>}

            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "162px" }}>Category<span className="star_require">*</span></label>
              <div className="select-wrapper" style={{ width: "100%" }}>
                <select
                  className="leaderboard-card-inp cons_select_nav"
                  onChange={(e) => {
                    setStoreCategory(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option defaultValue value=""></option>
                  {catarray &&
                    catarray.map((item, index) => {
                      return (
                        <>
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
              {/* <input
              type="text"
              value={storeCategory}
              //   onChange={(e) => setStoreName(e.target.value)}
              name=""
              id=""
              className="input_box"
              placeholder="Fashion, homeware, audio visual"
            /> */}
            </div>
            {/* single text-input */}
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "162px" }}>Shop Number<span className="star_require">*</span></label>
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
              <label htmlFor="" style={{ minWidth: "162px" }}>Eatery Level</label>
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

            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "162px" }}>Contact Person</label>
              <input
                type="text"
                value={getstoreContactPerson}
                onChange={(e) => setStoreContactPerson(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "162px" }}>Contact Number<span className="star_require">*</span></label>
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
              <label htmlFor="" style={{ minWidth: "162px" }}>Email Address<span className="star_require">*</span></label>
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
                style={{ fontSize: "16px", fontWeight: "400", minWidth: "162px" }}
                htmlFor=""
              >
                Trading Hours<span className="star_require">*</span>
              </label>
              <div className="tranding_times_wrapp">
                {/* single time */}
                <div className="tranding_times_wrapp_sec">
                  <label
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      minWidth: "162px",
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
                      minWidth: "162px",
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
                      minWidth: "162px",
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
                      minWidth: "162px",
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
              <label htmlFor="" style={{ minWidth: "157px" }}>Eatery Description<span className="star_require">*</span></label>
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
            <div
              className="mm_form_single_input"
              style={{ alignItems: "flex-start" }}
            >
              <label htmlFor="" style={{ minWidth: "157px" }}></label>
              <span style={{ fontSize: "14px", color: "#bbb" }}>*Required Fields including all image uploads.</span>

            </div>

            <div className="mm_form_single_input mb_8">
              <label htmlFor="" style={{ minWidth: "162px" }}></label>
              <div className="signup_terms_wrapp indep-side">
                <input
                  type="checkbox"
                  value={isAcceptTerm}
                  onChange={handleTermChange}
                  checked={isAcceptTerm}
                />

                <p className="fs-des" style={{ fontWeight: "400", fontSize: "14px" }}>
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Privacy Policy</a>
                </p>
              </div>
            </div>

            <div className="mm_form_single_input mb_8" >
              <label htmlFor="" style={{ minWidth: "162px" }}></label>
              <div className="signup_terms_wrapp indep-side" style={{ marginTop: "-12px" }}>
                <input
                  type="checkbox"
                  value={isAcceptTerm2}
                  onChange={handleTermChange2}
                  checked={isAcceptTerm2}
                />

                <p className="fs-des" style={{ fontWeight: "400", fontSize: "14px" }}>
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Terms and Conditions</a>
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
                <h4 style={{ marginBottom: "10px", fontSize: "14px", fontWeight: "600" }} className="myprofile_upload_img_card_name">Upload black and white  <br />
                  Eatery logo <br /> (200 x 200 pixels) <br /> (max 40kb)<span className="star_require">*</span></h4>
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
                      <h4>.JPG .PNG</h4>
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
                        className="btn btn-black"
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
                <button className="btn" onClick={() => setFiles([])}>
                  Cancel
                </button>
                {/* </div> */}
              </div>
            </div>
            {/* upload images wrapp end */}
            <p className="upload_img_instr">All Brand logo’s to be uploaded <br />
              in black and white format <br />
              (no colour logo’s)</p>
            {/* upload images wrapp start */}
            <div className="mm_img_upload_wrapp" style={{ width: "100%" }}>
              {/* single upload image */}
              <div className="myprofile_inner_sec2">
                <h4 style={{ marginBottom: "10px", fontSize: "14px", fontWeight: "600" }} className="myprofile_upload_img_card_name">Upload the Eatery banner  <br />
                  (1050px x 284px) <br /> (max 200kb)<span className="star_require">*</span></h4>
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
                      <h4>.JPG .PNG</h4>
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
                        className="btn btn-black"
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
                <button className="btn" onClick={() => setFiles2([])}>
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
            <a className="signup_terms_link">Privacy Policy</a>
          </p>

        </div>
        <div className="signup_terms_wrapp indep-side-show" style={{ marginTop: "-12px" }}>
          <input
            type="checkbox"
            value={isAcceptTerm2}
            onChange={handleTermChange2}
            checked={isAcceptTerm2}
          />

          <p className="fs-des" style={{ fontWeight: "400", fontSize: "14px" }}>
            I have read and agree to the{" "}
            <a className="signup_terms_link">Terms and Conditions</a>
          </p>

        </div>
        <div className="mm_form_single_input mb_8 btn_eatery_res">
          <label htmlFor="" style={{ minWidth: "235px" }}></label>
          <button
                            disabled={isAcceptTerm == 1 && isAcceptTerm2 ==1 ? false : true}

            style={{ marginTop: "20px", width: "200px" }}
            className="btn btn-black add-eatery-resp"
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