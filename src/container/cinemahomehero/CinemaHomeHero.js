import React from "react";
import images from "../../constants/images";
import "./CinemaHomeHero.css";
const CinemaHomeHero = () => {
  return (
    <div
      className="homehero_main_wrapp show_bg_2"
      style={{
        backgroundImage: `url(${images.hero_banner})`,
        backgroundPosition: "center",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "revert-layer",
        backgroundSize: "cover",
      }}>
      <div className="banner-overlay"></div>

      <div div className="homehero_text_main">
        <div className="homehero_text_base">
          {/* <img src={getHomeData ? getHomeData.logo_img_path : ""} alt="" /> */}
          {/* <img src={images.brandlogo} alt="" /> */}
          {/* <p className="home-hero-txtt">
            {getHomeData ? getHomeData.img_text : ""}
          </p> */}
          <h1 style={{ fontSize: "28px", fontWeight: "600" }} className="">
            Experiance In-store <br /> on a new level.
          </h1>
          <div className=".apps_logos_wrapp apps_logos_wrapp_cinemahomehero">
            <div>
              <p className="sociallogo_cinemahomehero_head">
                Download the app.
              </p>
            </div>
            <div className="logoimagesocial_cinemahomehero">
              <img
                src={images.play_store_logo}
                style={{ width: "155px", height: "46px" }}
                alt="play store logo"
              />
              <img
                src={images.app_store_logo}
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