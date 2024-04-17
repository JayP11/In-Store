import React, { useEffect, useState } from "react";
import "./RetailerFaqPage.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import { ACCEPT_HEADER, get_about } from "../../utils/Constant";
import { Faq } from "../../components";
import images from "../../constants/images";

const RetailerFaqPage = () => {
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
        // console.log("store");
        // console.log("store data", JSON.stringify(res.data, null, 2));
        if (res.data.success === 1) {
          setStoreData(res.data.data[0]);
          setLoading(false);
        } else {
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
                backgroundImage: `url(${
                  
                  images.faq_banner
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                // getStoreData ? getStoreData.image_path : ""
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


            <Faq />

            {/* about instore end */}
          </div>
        </>
      )}
    </>
  );
};

export default RetailerFaqPage