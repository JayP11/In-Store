import React from "react";
import images from "../constants/images";

const CustomerHeroCinema = ({getlist2}) => {
  console.log("aaaaaa", getlist2);
  return (
    <div className="mall_hero_main_wrapp">
      <img
        src={
          getlist2 && getlist2.store_banner_path === null
            ? images.mall_hero_banner
            : getlist2 && getlist2.store_banner_path
        }
        alt=""
        className="mall_hero_banner_img"
      />
      <div className="mall_hero_logo_wrapp">
        <img
          src={
            getlist2 && getlist2.store_logo_path === null
              ? images.mall_hero_logo
              : getlist2 && getlist2.store_logo_path
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default CustomerHeroCinema;
