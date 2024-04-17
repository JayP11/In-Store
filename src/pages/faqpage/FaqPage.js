import React, { useEffect, useState } from "react";
import "./FaqPage.css";
import { CinemaNavbar, Footer, Navbar } from "../../common";
import images from "../../constants/images";
import { RegisterMall } from "../../container";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import { ACCEPT_HEADER, get_about } from "../../utils/Constant";
import { Faq } from "../../components";

const FaqPage = () => {
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
            <title>FAQ</title>
          </Helmet>
          {/* <CinemaNavbar /> */}

          <div>
            {/* <Navbar /> */}
            {/* hero start */}
            {/* <div className="about_hero_wrapp">
          <img src={images.about_hero} alt="" />
        </div> */}

            <div
              className="faq_mall_main_wrapper about_hero_wrapp2"
              style={{
                // backgroundImage: url(${images.about_hero}),
                backgroundImage: `url(${
                  // getStoreData ? getStoreData.image_path : ""
                  images.faq_banner
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

            {/* FAQ Component Start */}

            <Faq />

            {/* about instore end */}
          </div>
        </>
      )}
    </>
  );
};

export default FaqPage;