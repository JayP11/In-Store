import React from "react";
import "./CinemaHomeProductile.css";
import images from "../../constants/images";

const CinemaHomeProductile = () => {
  return (
    <div className="CinemaHomeProductile_main">
      <img
        src={images.cinemahoodie}
        alt="cinemahoodie"
        className="CinemaHomeProductile_img_inner"
      />
      <img
        src={images.cinematrackpant}
        alt="cinematrackpant"
        className="CinemaHomeProductile_img_inner"
      />
      <img
        src={images.cinemashoes}
        alt="cinemashoes"
        className="CinemaHomeProductile_img_inner"
      />
      <img
        src={images.cinemaheadphone}
        alt="cinemaheadphone"
        className="CinemaHomeProductile_img_inner"
      />
    </div>
  );
};

export default CinemaHomeProductile;