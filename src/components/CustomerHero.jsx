
import React from "react";
import images from "../constants/images";

const CustomerHero = ({ getsingalmalldata, getbdetalis }) => {
  console.log("aaaaaa", getsingalmalldata);
  return (
    <div className="mall_hero_main_wrapp">
      <img
        src={
          getbdetalis.banner_store_path === null
            ? images.mall_hero_banner
            : getbdetalis.banner_store_path
        }
        alt=""
        className="mall_hero_banner_img"
      />
      <div className="mall_hero_logo_wrapp">
        <img
          src={
            getbdetalis.store_logo_path === null
              ? images.mall_hero_logo
              : getbdetalis.store_logo_path
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default CustomerHero;
