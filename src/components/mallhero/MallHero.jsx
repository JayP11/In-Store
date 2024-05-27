import React from "react";
import "./MallHero.css";
import images from "../../constants/images";

const MallHero = ({ get_mall_auth_data }) => {
  console.log("2522",get_mall_auth_data);
  return (
    <div className={`${
      get_mall_auth_data.banner_mall_path 
         ? "banner_all_wrap" : "banner_all_wrap_height"
         
     }`}>
    <div className="mall_hero_main_wrapp">
      <img
        src={get_mall_auth_data ? get_mall_auth_data?.banner_mall_path : images.mall_hero_banner}
        alt=""
        className="mall_hero_banner_img"
      />
      <div className="mall_hero_logo_wrapp">
        <img src={get_mall_auth_data ? get_mall_auth_data.shopping_center_logo_mall_path : images.mall_hero_logo} alt="" />
      </div>
    </div>
    </div>
  );
};

export default MallHero;
