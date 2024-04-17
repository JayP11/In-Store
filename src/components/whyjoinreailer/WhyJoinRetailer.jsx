import React from "react";
// import "./WhayJoin.css";
import images from "../../constants/images";

const WhayJoinRetailer = ({ getRetailerHomeData }) => {


    return (
        <div className="main_wrapp">
            <div className="container whayjoin_wrapp why-sec-gap">
                <h2 className="h2" style={{ marginBottom: "15px",fontWeight:"600" }}>{getRetailerHomeData ? getRetailerHomeData.benifit_title : ""}</h2>
                <p></p>
                <div className="whyjoin_grid">
                    <div className="whyjoin_grid_item">
                        <img src={getRetailerHomeData ? getRetailerHomeData.benifit_image_1_path : ""} alt="" />
                        <p style={{fontSize:"14px"}}>
                            {getRetailerHomeData ? getRetailerHomeData.benifit_1 : ""}
                        </p>
                    </div>
                    <div className="whyjoin_grid_item">
                        <img src={getRetailerHomeData ? getRetailerHomeData.benifit_image_2_path : ""} alt="" />
                        <p style={{fontSize:"14px"}}>{getRetailerHomeData ? getRetailerHomeData.benifit_2 : ""}</p>
                    </div>
                    <div className="whyjoin_grid_item">
                        <img src={getRetailerHomeData ? getRetailerHomeData.benifit_image_3_path : ""} alt="" />
                        <p style={{fontSize:"14px"}}>
                            {getRetailerHomeData ? getRetailerHomeData.benifit_3 : ""}
                        </p>
                    </div>
                    <div className="whyjoin_grid_item">
                        <img src={getRetailerHomeData ? getRetailerHomeData.benifit_image_4_path : ""} alt="" />
                        <p style={{fontSize:"14px"}}>
                            {getRetailerHomeData ? getRetailerHomeData.benifit_4 : ""}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhayJoinRetailer;
