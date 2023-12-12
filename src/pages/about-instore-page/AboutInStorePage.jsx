import React, { useEffect, useState } from "react";
import "./AboutInStorePage.css";
import { Footer, Navbar } from "../../common";
import images from "../../constants/images";
import { RegisterMall } from "../../container";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import { ACCEPT_HEADER, get_about } from "../../utils/Constant";

const AboutInStorePage = () => {
  const [getStoreData, setStoreData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStoreDataApi();
  }, []);

  const getStoreDataApi = async () => {
    setLoading(true);
    axios
      .get(get_about, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      })
      .then((res) => {
        console.log("store");
        console.log("store data", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          setStoreData(res.data.data[0]);
          setLoading(false);
        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  return (
    <>
      {loading === true ? (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Helmet>
            <title>About In-store</title>
          </Helmet>
          <Navbar
          // setCustomerDropdown={setCustomerDropdown}
          // getcustomerDropdown={getcustomerDropdown}
          />

          <div>
            {/* <Navbar /> */}
            {/* hero start */}
            {/* <div className="about_hero_wrapp">
          <img src={images.about_hero} alt="" />
        </div> */}

            <div
              className="about_hero_wrapp"
              style={{
                // backgroundImage: `url(${images.about_hero})`,
                backgroundImage: `url(${getStoreData ? getStoreData.image_path : ""
                  })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}>
              {/* <img src={images.hero_banner} alt="" /> */}
              <div className="homehero_text_main">
                <div className="homehero_text_base homehero_text_base_retailer">
                  {/* <img src={images.instore_app_header_logo} alt="" /> */}
                  <img
                    src={getStoreData ? getStoreData.logo_img_path : ""}
                    alt=""
                  />
                  {/* social media account button start */}
                  <div className="apps_logos_wrapp">
                    {/* <img src={images.play_store_logo} alt="play store logo" /> */}
                    <img
                      style={{ width: "155px", height: "46px" }}
                      src={getStoreData ? getStoreData.play_store_img_path : ""}
                      alt="play store logo"
                    />
                    <img
                      style={{ width: "155px", height: "46px" }}
                      src={getStoreData ? getStoreData.app_store_img_path : ""}
                      alt="app store logo"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* hero end */}

            {/* about in store start */}
            <div className="main_wrapp mt_16">
              <div className="container whayjoin_wrapp about-extra-gap-section">
                <h1 className="h1 mb_10">
                  {getStoreData ? getStoreData.about_title : ""}
                </h1>
                <p className="mb_16">
                  {getStoreData ? getStoreData.about_description : ""}
                  {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat. */}
                </p>
                <div className="whyjoin_grid">
                  <div className="whyjoin_grid_item">
                    <img
                      src={getStoreData ? getStoreData.about_image_1_path : ""}
                      alt=""
                    />

                    <p>
                      {getStoreData ? getStoreData.about_1 : ""}

                      {/* Shopping centre/Mall, promotions and activities are displayed
                  first in the user experience. */}
                    </p>
                  </div>
                  <div className="whyjoin_grid_item">
                    {/* <img src={images.home_location} alt="" /> */}
                    <img
                      src={getStoreData ? getStoreData.about_image_2_path : ""}
                      alt=""
                    />
                    <p>
                      {getStoreData ? getStoreData.about_2 : ""}
                      {/* Users can view the shopping centre/Mall from anywhere */}
                    </p>
                  </div>
                  <div className="whyjoin_grid_item">
                    {/* <img src={images.home_shapes} alt="" /> */}
                    <img
                      src={getStoreData ? getStoreData.about_image_3_path : ""}
                      alt=""
                    />
                    <p>
                      {getStoreData ? getStoreData.about_3 : ""}
                      {/* Multiple marketing initiatives, promo events, competitions can
                  be featured simultaneously on the platform. */}
                    </p>
                  </div>
                  <div className="whyjoin_grid_item">
                    {/* <img src={images.home_archive} alt="" /> */}
                    <img
                      src={getStoreData ? getStoreData.about_image_4_path : ""}
                      alt=""
                    />
                    <p>
                      {getStoreData ? getStoreData.about_4 : ""}
                      {/* Shopping centre/Mall can engage with users via notifications
                  for specials, sales, or events. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* about instore end */}

            {/* about in store register part-1 start*/}
            <div className="main_wrapp registermall_main_wrapp bg-blue">
              <div className="container registermall_base_wrapp">
                <div className="registermall_sec1">
                  <h2 className="h2">
                    {getStoreData ? getStoreData.details_title_1 : ""}
                    {/* Malls Have More
                <br /> Presence */}
                  </h2>
                  <p>
                    {getStoreData ? getStoreData.details_description_1 : ""}

                    {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo. */}
                  </p>
                  <Link to="/mall" className="homepage-black-btn">
                    Register your mall
                  </Link>
                </div>
                <div className="registermall_sec2">
                  <img
                    src={getStoreData ? getStoreData.details_image_1_path : ""}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* about in store register part-1 end*/}

            {/* about in store register part-2 start*/}
            <div className="main_wrapp registermall_main_wrapp bg-pink">
              <div className="container registermall_base_wrapp fd-rr">
                <div className="registermall_sec1">
                  <h2 className="h2">
                    {getStoreData ? getStoreData.details_title_2 : ""}
                    {/* Stores Can Track
                <br /> Customer Data */}
                  </h2>
                  <p>
                    {getStoreData ? getStoreData.details_description_2 : ""}

                    {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo. */}
                  </p>
                  <Link to="/retailer" className="homepage-black-btn">
                    Register your brand
                  </Link>
                </div>
                <div className="registermall_sec2">
                  <img
                    src={getStoreData ? getStoreData.details_image_2_path : ""}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* about in store register part-2 end*/}

            <RegisterMall getStoreData={getStoreData} />
          </div>
        </>
      )}
    </>
  );
};

export default AboutInStorePage;
