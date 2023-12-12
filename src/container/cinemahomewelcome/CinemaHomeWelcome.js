import React from "react";
import "./CinemaHomeWelcome.css";
import images from "../../constants/images";

const CinemaHomeWelcome = () => {
  return (
    <div className="">
      <div className="CinemaHomeWelcome_desc_main">
        <div>
          <h1
            className="CinemaHomeWelcome_head_inner">
            Welcome to In-store
          </h1>
        </div>
        <div className="CinemaHomeWelcome_para_main">
          <p style={{ fontSize: "14px", lineHeight: "1.4" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip.
          </p>
        </div>
      </div>
      <div className="cinemahome_banner_main">
        <div className="cinemahome_banner_img_main">
          <img
            src={images.cinemahomeimg1}
            alt="cinemahomeimg1"
            className="cinemahome_banner_inner"
          />
        </div>
        <div className="cinemahome_banner_img_main">
          <img
            src={images.cinemahomeimg2}
            alt="cinemahomeimg2"
            className="cinemahome_banner_inner"
          />
        </div>
      </div>
    </div>
  );
};

export default CinemaHomeWelcome;