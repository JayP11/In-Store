import React from "react";
// import "./MallHero.css";
import images from "../../constants/images";

const CustomerHeroSecond = ({ getsingalmalldata }) => {
    return (
        <div className="mall_hero_main_wrapp">
            <img
                src={getsingalmalldata.banner_mall_path ? getsingalmalldata.banner_mall_path : null}
                alt=""
                className="mall_hero_banner_img"
            />
            {/* <div className="mall_hero_logo_wrapp">
                <img src={get_mall_auth_data ? get_mall_auth_data.shopping_center_logo_mall_path : null} alt="" />
            </div> */}
        </div>
    );
};

export default CustomerHeroSecond;
