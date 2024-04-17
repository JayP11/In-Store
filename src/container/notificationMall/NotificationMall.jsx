import React from "react";
import "./NotificationMall.css";
import { MallHero } from "../../components";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
const NotificationMall = ({ get_mall_auth_data, setTab }) => {
  return (
    <div className="NotificationMall_main">
      <MallHero get_mall_auth_data={get_mall_auth_data} />
      <div className="mm_main_wrapp">
        <div className="edit-brand-back-iconbox" onClick={() => setTab(3)}>
          <IoChevronBack className="edit-brand-back-icon" />{" "}
          <p className="edit-brand-back-txt">Back</p>
        </div>
        <div className="mall_name_wrapp mm_form_wrapp_name_padding">
          <p className="mall_name_heading">
            {get_mall_auth_data.name ? get_mall_auth_data.name : ""}:
          </p>
          <span style={{ fontWeight: 700 }}>Notification</span>
        </div>
        <div style={{ marginTop: "2rem" }}></div>
        <div
          className="mm_form_input_wrapp"
          style={{ margin: "5rem", marginTop: "0px" }}>
          <div className="mm_form_single_input">
            <label htmlFor="" style={{ minWidth: "148px" }}>
              Title
            </label>
            <input
              type="text"
              // value={storeName}
              // onChange={(e) => setStoreName(e.target.value)}
              name=""
              id=""
              className="input_box"
            />
          </div>
          <div
            className="mm_form_single_input"
            style={{ alignItems: "flex-start" }}>
            <label htmlFor="" style={{ minWidth: "148px" }}>
              Description
            </label>
            <textarea
              type="text"
              //   value={storeDes}
              //   onChange={(e) => setStoreDes(e.target.value)}
              name=""
              id=""
              className="input_box"
              rows={8}
            />
          </div>
          <div className="mm_form_single_input mb_8">
            <label htmlFor="" style={{ minWidth: "148px" }}></label>
            <div className="signup_terms_wrapp indep-side">
              <input
                type="checkbox"
                // value={isAcceptTerm}
                // onChange={handleTermChange2}
                // checked={isAcceptTerm}
              />

              <p
                className="fs-des"
                style={{ fontWeight: "400", fontSize: "14px" }}>
                I have read and agree to the{" "}
                <Link to="" className="signup_terms_link">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
          <div className="mm_form_single_input mb_8">
            <label htmlFor="" style={{ minWidth: "148px" }}></label>
            <div
              className="signup_terms_wrapp indep-side"
              style={{ marginTop: "-12px" }}>
              <input
                type="checkbox"
                // value={isAcceptTerm2}
                // onChange={handleTermChange3}
                // checked={isAcceptTerm2}
              />

              <p
                className="fs-des"
                style={{ fontWeight: "400", fontSize: "14px" }}>
                I have read and agree to the{" "}
                <Link to="" className="signup_terms_link">
                  Terms and Conditions
                </Link>
              </p>
            </div>
          </div>

          <div className="mm_form_single_input brand-resp-btn">
            <button
              className="btn btn-black"
              //   onClick={() => AddStoreNallData()}
              style={{ width: "200px", marginLeft: "10rem" }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationMall;
