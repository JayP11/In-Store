import React from "react";
import images from "../../constants/images";
import "./CinemaHomeBanner_Container.css";
const CinemaHomeBanner_Container = () => {
  return (
    <div>
      <img
        src={images.cinemahomebanner}
        alt="CinemaHomeBanner"
        className="CinemaHomeBanner_img_inner"
      />
    </div>
  );
};

export default CinemaHomeBanner_Container