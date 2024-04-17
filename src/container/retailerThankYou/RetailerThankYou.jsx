import React, { useState } from "react";
import "./RetailerThankYou.css";
import { Link } from "react-router-dom";

const RetailerThankYou = ({ get_mall_auth_data }) => {
  const [mainName, setMainName] = useState(
    get_mall_auth_data &&
      get_mall_auth_data.retailers &&
      get_mall_auth_data.retailers.name !== null
      ? get_mall_auth_data.retailers.name
      : ""
  );
    return (
      <div className="RetailerThankYou_main">
        <div
          className="mall_name_wrapp  mall_name_wrapp_res"
          style={{
            paddingLeft: "0px",
          }}>
          <p className="mall_name_heading">{mainName}GUESS South Africa:</p>
          <span style={{ fontWeight: "700" }}>Thank You!</span>
        </div>

        <div>
          <p>
            Thank you for purchasing with In-store! Keep track of your customer
            behaviour under &nbsp;
            <Link
              to={""}
              style={{ color: "var(--color-orange)", fontWeight: "700" }}>
              My Consumer Data.{" "}
            </Link>
          </p>
        </div>
      </div>
    );
};

export default RetailerThankYou;