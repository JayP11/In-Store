import React from "react";
import "./CinemaHero.css";
import images from "../../constants/images";

const CinemaHero = ({ get_mall_auth_data }) => {
  return (
    <div className={`${
      get_mall_auth_data.store_banner_path
          ? "banner_all_wrap" : "banner_all_wrap_height"
          
      }`}>
    <div className="mall_hero_main_wrapp">
      <img
        src={get_mall_auth_data ? get_mall_auth_data.store_banner_path : images.cinema_banner}
        // src={images.cinema_banner}
        alt=""
        className="mall_hero_banner_img img_fluid_position"
      />
      <div className="mall_hero_logo_wrapp">
        <img 
        src={get_mall_auth_data ? get_mall_auth_data.store_logo_path : images.cinema_logo} 
        // src={images.cinema_logo} 
        alt= "" />
      </div>
    </div>
    </div>
  );
};

export default CinemaHero;
