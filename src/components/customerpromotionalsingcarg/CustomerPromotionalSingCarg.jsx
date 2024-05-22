import React, { useEffect } from "react";
import "./CustomerPromotionalSingCarg.css";
import images from "../../constants/images";
const CustomerPromotionalSingCarg = ({ x, setTab, SetProId, SetBrandId,setStoreName }) => {
    useEffect(() => {
        console.log("rer", x);
    }, []);

    return (
        <button
            onClick={() => {
                SetProId(x.mall_id);
                // SetBrandId(x.brand_id);
                SetBrandId(x.store_id);
                setStoreName(x.stores?.name)
                setTab(12);
            }}
            className="cust-promotional-banner-imgbox"
        >
            <img src={x.image_path} className="cust-promotional-banner-sing-img" alt="" />
            {/* <img src={images.about_1} className="cust-promotional-banner-sing-img" /> */}
        </button>
    );
};

export default CustomerPromotionalSingCarg;