import React from "react";
import images from "../../constants/images";

const CustomerEateryHero = ({ getsingalmalldata, getedetalis }) => {
    console.log("aaaaaa", getsingalmalldata);
    return (
        <div className="mall_hero_main_wrapp">
            <img
                src={
                    getedetalis.banner_store_path === null
                        ? images.mall_hero_banner
                        : getedetalis.banner_store_path
                }
                alt=""
                className="mall_hero_banner_img img_fluid_position"
            />
            <div className="mall_hero_logo_wrapp">
                <img
                    src={
                        getedetalis.store_logo_path === null
                            ? images.mall_hero_logo
                            : getedetalis.store_logo_path
                    }
                    alt=""
                />
            </div>
        </div>
    );
};

export default CustomerEateryHero;
