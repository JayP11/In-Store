import React, { useState } from "react";
import "./RetailerTrackAnalytics.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const RetailerTrackAnalytics = ({ get_mall_auth_data }) => {
  const [mainName, setMainName] = useState(
    get_mall_auth_data &&
      get_mall_auth_data.retailers &&
      get_mall_auth_data.retailers.name !== null
      ? get_mall_auth_data.retailers.name
      : ""
  );
  return (
    <div className="RetailerTrackAnalytics_main">
      <div
        className="mall_name_wrapp"
        style={{
          paddingLeft: "0px",
        }}>
        <p className="mall_name_heading">{mainName}:</p>
        <span style={{ fontWeight: "600" }}>Get Your Data!</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
          Select the analytic options you would like to purchase
        </h3>

        <div>
          <p>
            By selecting the multiple options below we will be able to establish
            your complete &nbsp;
            <Link
              to={""}
              style={{ color: "var(--color-orange)", fontWeight: "700" }}>
              Analytics Dashboard
            </Link>
          </p>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div>
            <img src={images.tick} alt="tick" />
          </div>
          <div>
            <p>Track mall page visits on In-store</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div>
            <img src={images.tick} alt="tick" />
          </div>
          <div>
            <p>Track users in active regions</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div>
            <img src={images.tick} alt="tick" />
          </div>
          <div>
            <p>
              Track my mall attractions (brands, eateries, events and
              facilities)
            </p>{" "}
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div>
            <img src={images.tick} alt="tick" />
          </div>
          <div>
            <p>
              Basic stats (total brands registered, total eateries registered,
              average rating)
            </p>{" "}
          </div>
        </div>
      </div>
      <div>
        <div className="signup_terms_wrapp" style={{ gap: "10px" }}>
          {/* <label htmlFor="" className="editfac_label"></label> */}
          <input type="checkbox" />
          <p className="fs-des">
            I have read and agree to the &nbsp;
            <Link to="" className="signup_terms_link">
              Privacy Policy
            </Link>
            {/* <a className="signup_terms_link">Privacy Policy</a> */}
          </p>
        </div>
        <div className="signup_terms_wrapp" style={{ gap: "10px" }}>
          <input type="checkbox" />
          <p className="fs-des">
            I have read and agree to the
            <Link to="" className="signup_terms_link">
              Terms and Conditions{" "}
            </Link>
          </p>
        </div>
      </div>
      <div style={{ width: "200px" }}>
        <button
          className="btn btn-orange"
          onClick={() => {
            // CreateLeaderBoardBanner(item.id);
          }}>
          <img src={images.basket_white} alt="basket_white" />
          &nbsp; Add to basket
        </button>
      </div>
    </div>
  );
};

export default RetailerTrackAnalytics;