import React from "react";
import images from "../../constants/images";
import "./CinemaHomeHero.css";
const CinemaHomeHero = ({getHomeData}) => {
  console.log("get home data are home hero part",getHomeData);
  return (
    <div
      className="homehero_main_wrapp show_bg_2"
      style={{
        // backgroundImage: `url(${images.hero_banner})`,
        backgroundImage: `url(${getHomeData ? getHomeData.image_path : ""})`,
        backgroundPosition: "center",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "revert-layer",
        backgroundSize: "cover",
      }}>
      <div className="banner-overlay"></div>

      <div div className="homehero_text_main">
        <div className="homehero_text_base homehero_text_base_home">
          {/* <img src={getHomeData ? getHomeData.logo_img_path : ""} alt="" />  */}
          {/* <img src={images.brandlogo} alt="" /> */}
    
          <h1  style={{ fontSize: "36px", fontWeight: "600" }} className="landing_hearo_head">
            {/* Experiance In-store <br /> on a new level */}
            {getHomeData ? getHomeData.img_text : ""}

          </h1>
          <div className=".apps_logos_wrapp apps_logos_wrapp_cinemahomehero">
            <div>
              <p className="sociallogo_cinemahomehero_head">
                Download the app
              </p>
            </div>
            <div className="logoimagesocial_cinemahomehero">
              <img
                src=            {getHomeData ? getHomeData.play_store_img_path : ""}

                style={{ width: "155px", height: "46px" }}
                alt="play store logo"
              />
              <img
                   src={getHomeData ? getHomeData.app_store_img_path : ""}

                style={{ width: "155px", height: "46px" }}
                alt="app store logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaHomeHero;