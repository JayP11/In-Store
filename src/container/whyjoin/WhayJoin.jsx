import React, { useEffect } from "react";
import "./WhayJoin.css";
import images from "../../constants/images";

const WhayJoin = ({ getHomeData }) => {
  useEffect(() => {
    console.log("beniifi home dat", getHomeData);
  }, []);
  return (
    <div className="main_wrapp">
      <div className="container whayjoin_wrapp why-sec-gap">
        <h2 className="h2" style={{ marginBottom: "15px" }}>
          {/* Why Join In-store? */}
          {getHomeData ? getHomeData.benifit_title : ""}
        </h2>
        <p>
          {/* Here are some benefits of using our online marketing platform. */}
          {getHomeData ? getHomeData.benifit_description : ""}
        </p>
        <div className="whyjoin_grid">
          <div className="whyjoin_grid_item">
            {/* <img src={images.home_eye}alt="" /> */}
            <img
              src={
                getHomeData ? getHomeData.benifit_image_1_path : ""
              }
              alt=""
            />
            <p>
              {getHomeData ? getHomeData.benifit_1 : ""}

              {/* Shopping centre/Mall, promotions and activities are displayed
              first in the user experience. */}
            </p>
          </div>
          <div className="whyjoin_grid_item">
            {/* <img src={images.home_location} alt="" /> */}
            <img
              src={
                getHomeData ? getHomeData.benifit_image_2_path : ""
              }
              alt=""
            />

            <p>
              {" "}
              {getHomeData ? getHomeData.benifit_2 : ""}
              {/* Users can view the shopping centre/Mall from anywhere */}
            </p>
          </div>
          <div className="whyjoin_grid_item">
            {/* <img src={images.home_shapes} alt="" /> */}
            <img
              src={
                getHomeData ? getHomeData.benifit_image_3_path : ""
              }
              alt=""
            />
            <p>
              {getHomeData ? getHomeData.benifit_3 : ""}
              {/* Multiple marketing initiatives, promo events, competitions can be
              featured simultaneously on the platform. */}
            </p>
          </div>
          <div className="whyjoin_grid_item">
            {/* <img src={images.home_archive} alt="" /> */}
            <img
              src={
                getHomeData ? getHomeData.benifit_image_4_path : ""
              }
              alt=""
            />
            <p>
              {getHomeData ? getHomeData.benifit_4 : ""}
              {/* Shopping centre/Mall can engage with users via notifications for
              specials, sales, or events. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhayJoin;