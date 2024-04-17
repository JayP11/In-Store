import React, { useEffect, useState } from "react";
import "./ProfileAccountSetting.css";
import { useDropzone } from "react-dropzone";
import {
  AiOutlineCloudUpload,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { async } from "@firebase/util";
import { useCustomerContext } from "../../context/customer_context";
import { useAuthContext } from "../../context/auth_context";
import Notification from "../../utils/Notification";

const ProfileAccountSetting = () => {
  const { setCustomerUpdate, get_customer_loading, get_customer_data } =
    useCustomerContext();

  const { region_data } = useAuthContext();
  const [files, setFiles] = useState([]);
  const [fristname, SetFristName] = useState(
    get_customer_data.first_name ? get_customer_data.first_name : ""
  );
  const [lastname, SetLastName] = useState(
    get_customer_data.last_name ? get_customer_data.last_name : ""
  );
  const [regionid, SetRegionId] = useState(
    get_customer_data.region_id ? get_customer_data.region_id : ""
  );
  const [email, SetEmail] = useState(
    get_customer_data.email ? get_customer_data.email : ""
  );
  const [number, SetNumber] = useState(
    get_customer_data.number ? get_customer_data.number : ""
  );
  const [password, SetPassword] = useState(
    get_customer_data.showpassword ? get_customer_data.showpassword : ""
  );
  const [password1, SetPassword1] = useState(
    get_customer_data.showpassword ? get_customer_data.showpassword : ""
  );
  const [tram, SetTram] = useState(
    get_customer_data.terms_condition ? get_customer_data.terms_condition : ""
  );
  const [tram1, SetTram1] = useState(
    get_customer_data.privacy_policy ? get_customer_data.privacy_policy : ""
  );
  const [image, SetImage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [getcondation, setcondation] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };

  // logo dropzon

  const handleImage = (e) => {
    const file = e.target.files[0];

    SetImage(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
        // console.log("acceptedFiles", acceptedFiles[0].File);
      }
      setcondation(true);
      if (acceptedFiles.length === 0) {
        window.location.reload(true);
      }
    },
  });

  const thumbs = files.map((file) => (
    <>
      <img
        src={file.preview}
        style={{ width: "100%", height: "100%", maxHeight: "175px" }}
        className="img-fluid"
        alt="file"
      />
    </>
  ));

  const UpdateProfile = async () => {
    const formdata = await new FormData();

    await formdata.append("first_name", fristname);
    await formdata.append("last_name", lastname);
    await formdata.append("region_id", Number(regionid));
    await formdata.append("email", email);
    await formdata.append("password", password);

    await formdata.append("terms_condition", tram === "on" ? 1 : 0);
    await formdata.append("privacy_policy", tram1 === "on" ? 1 : 0);
    if (files.length > 0) {
      await formdata.append("cus_profile", files[0]);
    } else {
      null;
    }
    console.log("formdata", formdata);

    const data = await setCustomerUpdate(formdata);
    if (data) {
      if (data.success === 1) {
        console.log("mall-data", data);
        Notification("success", "Success!", "Update Successfully!");
      } else {
        console.log("velidation");
      }
    }
  };

  return (
    <div className="mm_main_wrapp cus-acc-setting">
      {get_customer_loading === true ? (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="loader"></div>
        </div>
      ) : null}
      {/* mall management name start */}
      <div className="mall_name_wrapp cus_acc_mall_name_wrapp">
        <h4
          className="h3 cust-profile-heading"
          style={{ fontWeight: "700", marginBottom: "20px" }}
        >
          Account Settings
        </h4>
        {/* <span>Account Settings</span> */}
      </div>
      {/* <div className="mm_horizontal_line"></div> */}
      {/* mall management name end */}

      <div className="cus-profile-acc-setting-form-flex">
        {/* mall management form start */}
        <div className="mm_form_wrapp-customer-acc-setting">
          {/* text-input wrapp start */}
          <div className="mm_form_input_wrapp-customer-acc-setting">
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "150px" }}>
                First name
              </label>
              <input
                type="text"
                value={fristname}
                placeholder="Enter Your Frist Name"
                onChange={(e) => SetFristName(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}

            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "150px" }}>
                Last name
              </label>
              <input
                type="text"
                value={lastname}
                placeholder="Enter Your Last Name"
                onChange={(e) => SetLastName(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label
                className="leaderboard-card-lbl"
                style={{ minWidth: "150px" }}
              >
                Region
              </label>
              <select
                className="leaderboard-card-inp"
                onChange={(e) => SetRegionId(e.target.value)}
              >
                <option selected disabled value="">
                  Select region
                </option>
                {region_data &&
                  region_data.map((item, index) => {
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

            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "150px" }}>
                Email address
              </label>
              <input
                type="email"
                value={email}
                placeholder="Enter Your Email address"
                onChange={(e) => SetEmail(e.target.value)}
                name=""
                id=""
                style={{ minWidth: "150px" }}
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "150px" }}>
                Contact number
              </label>
              <input
                type="number"
                placeholder="Enter Mobile Number"
                value={number}
                onChange={(e) => SetNumber(e.target.value)}
                name=""
                id=""
                className="input_box"
                style={{ minWidth: "150px" }}
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "150px" }}>
                Password
              </label>
              <div
                style={{
                  background: "#dadada",
                  display: "flex",
                  alignItems: "center",
                }}
                className="input_box-cus-pass"
              >
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  placeholder="Enter Your Password"
                  onChange={(e) => SetPassword(e.target.value)}
                  name=""
                  id=""
                  className="input_box"
                ></input>
                {passwordVisible === true ? (
                  <AiOutlineEye size={22} onClick={togglePasswordVisibility}>
                    {passwordVisible ? "Hide" : "Show"}
                  </AiOutlineEye>
                ) : (
                  <AiOutlineEyeInvisible
                    size={22}
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? "Hide" : "Show"}
                  </AiOutlineEyeInvisible>
                )}
              </div>
            </div>

            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "150px" }}>
                Confirm Password
              </label>
              <div
                style={{
                  background: "#dadada",
                  display: "flex",
                  alignItems: "center",
                }}
                className="input_box-cus-pass"
              >
                <input
                  type={passwordVisible2 ? "text" : "password"}
                  value={password}
                  placeholder="Enter Your Password"
                  onChange={(e) => SetPassword(e.target.value)}
                  name=""
                  id=""
                  className="input_box"
                  style={{
                    minWidth: "150px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                ></input>
                {passwordVisible2 === true ? (
                  <AiOutlineEye size={22} onClick={togglePasswordVisibility2}>
                    {passwordVisible2 ? "Hide" : "Show"}
                  </AiOutlineEye>
                ) : (
                  <AiOutlineEyeInvisible
                    size={22}
                    onClick={togglePasswordVisibility2}
                  >
                    {passwordVisible2 ? "Hide" : "Show"}
                  </AiOutlineEyeInvisible>
                )}
              </div>
            </div>

            <div className="cust-profile-acc-setting-last-part-flex">
          {/* mm terms condition wrapp */}
          <div className="mm_form_single_input">
            <label htmlFor="" style={{ minWidth: "150px" }}></label>
            <div>
              <div className="signup_terms_wrapp" style={{marginTop:"0rem"}}>
                <input
                  type="checkbox"
                  value={tram}
                  onChange={(e) => SetTram(e.target.value)}
                />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Terms and Conditions</a>{" "}
                </p>
              </div>

              <div className="signup_terms_wrapp">
                <input
                  type="checkbox"
                  value={tram1}
                  onChange={(e) => SetTram1(e.target.value)}
                />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>

          {/* upload button */}
          <div className="mm_form_single_input">
            <label htmlFor="" style={{ minWidth: "150px" }}></label>
            <div className="mall_upload_btn_wrapp mall_upload_btn_wrapp-customer-acc-setting mall_upload_btn_wrapp_res">
              <button
                className="btn btn-orange btn-pro-acc-cus"
                onClick={() => UpdateProfile()}
              >
                Update
              </button>
              <button className="btn btn-black btn-pro-acc-cus">Reset</button>
            </div>
          </div>
        </div>
          </div>
          {/* text-input wrapp end */}

          {/* upload images wrapp start */}
          <div className="profile-setting_img_upload_wrapp">
            {/* single upload image */}
            <div className="img-upl-border">
              <div
                className="myprofile_inner_sec2"
                {...getRootProps()}
                style={{ border: "none", paddingBottom: "0px" }}
              >
                {/* <input
                {...getInputlogoProps()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              /> */}
                <h4 style={{ marginBottom: "10px" }}>
                  Upload profile pricture (200 x 200 pixels)
                </h4>
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
                          {/* <input
                            {...getRootProps()}
                            accept="image/jpeg, image/jpg, image/png, image/eps"
                          /> */}
                          <button
                            type="button"
                            className="click_upload_btn"
                            style={{ marginBottom: "10px" }}
                          >
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
                            }}
                          >
                            Upload File
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {get_customer_data.cus_profile_path === null ? (
                      <>
                        <div style={{ width: "100%" }} {...getRootProps()}>
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
                              {...getRootProps()}
                              accept="image/jpeg, image/jpg, image/png, image/eps"
                            />
                            <button
                              type="button"
                              className="click_upload_btn"
                              style={{ marginBottom: "10px" }}
                            >
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
                              }}
                            >
                              Upload File
                            </button>
                          </div>
                        </div>
                        <button
                          className="btn btn-black"
                          onClick={() => setFiles([])}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="myprofile_inner_sec2_img_upload">
                          <img
                            src={get_customer_data.cus_profile_path}
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
                            }}
                          >
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
                }}
              >
                <button
                  className="btn btn-black"
                  onClick={() => setFiles([])}
                  style={{
                    marginBottom: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          {/* upload images wrapp end */}

          <div className="cust-profile-acc-setting-last-part-flex cust-profile-acc-setting-last-part-flex-resp">
          {/* mm terms condition wrapp */}
          <div className="mm_form_single_input mm_form_single_input_cus_accresp">
            <label htmlFor="" style={{ minWidth: "150px" }}></label>
            <div>
              <div className="signup_terms_wrapp" style={{marginTop:"0rem"}}>
                <input
                  type="checkbox"
                  value={tram}
                  onChange={(e) => SetTram(e.target.value)}
                />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Terms and Conditions</a>{" "}
                </p>
              </div>

              <div className="signup_terms_wrapp">
                <input
                  type="checkbox"
                  value={tram1}
                  onChange={(e) => SetTram1(e.target.value)}
                />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>

          {/* upload button */}
          <div className="mm_form_single_input">
            {/* <label htmlFor="" style={{ minWidth: "150px" }}></label> */}
            <div className="mall_upload_btn_wrapp mall_upload_btn_wrapp-customer-acc-setting mall_upload_btn_wrapp_res">
              <button
                className="btn btn-orange btn-pro-acc-cus"
                onClick={() => UpdateProfile()}
              >
                Update
              </button>
              <button className="btn btn-black btn-pro-acc-cus">Reset</button>
            </div>
          </div>
        </div>
        </div>

        {/* customer profile account form last part start */}
        {/* <div className="cust-profile-acc-setting-last-part-flex">
          <div className="mm_form_single_input">
            <label htmlFor="" style={{ minWidth: "150px" }}></label>
            <div>
              <div className="signup_terms_wrapp">
                <input
                  type="checkbox"
                  value={tram}
                  onChange={(e) => SetTram(e.target.value)}
                />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Terms and Conditions</a>{" "}
                </p>
              </div>

              <div className="signup_terms_wrapp">
                <input
                  type="checkbox"
                  value={tram1}
                  onChange={(e) => SetTram1(e.target.value)}
                />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>

          <div className="mm_form_single_input">
            <label htmlFor="" style={{ minWidth: "150px" }}></label>
            <div className="mall_upload_btn_wrapp mall_upload_btn_wrapp-customer-acc-setting mall_upload_btn_wrapp_res">
              <button
                className="btn btn-orange btn-pro-acc-cus"
                onClick={() => UpdateProfile()}
              >
                Update
              </button>
              <button className="btn btn-black btn-pro-acc-cus">Reset</button>
            </div>
          </div>
        </div> */}

      </div>
      {/* mall management form end */}
    </div>
  );
};

export default ProfileAccountSetting;