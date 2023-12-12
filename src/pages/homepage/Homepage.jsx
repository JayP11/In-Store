import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { Footer, HomeNavbar, Navbar } from "../../common";
import { Imgcard, WelcomeStoreHome } from "../../components";
import images from "../../constants/images";
import ReactModal from "react-modal";
import { useMallContext } from "../../context/mall_context";
import {
  HomeHero,
  RegisterMall,
  WelcomeStore,
  WhayJoin,
} from "../../container";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import { ACCEPT_HEADER, get_home } from "../../utils/Constant";

const Homepage = () => {
  const [getHomeData, setHomeData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getHomeDataApi();
    // console.log("Get Home Data--->", getHomeData);
  }, []);

  const getHomeDataApi = async () => {
    setLoading(true);
    axios
      .get(get_home, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      })
      .then((res) => {
        console.log("first");
        console.log("home data", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          setHomeData(res.data.data[0]);
          setLoading(false);
        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  const { getMall, get_mall_data } = useMallContext();

  useEffect(() => {
    // getMall()
    console.log("get_mall_data", get_mall_data);
  }, [get_mall_data]);

  <Helmet>
    <title>In-store</title>
    <meta property="og:image" content="%PUBLIC_URL%/logo512.png" />
  </Helmet>;

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
          <div>
            {/* <div className="homecards_grid">
        {get_mall_data && get_mall_data.length > 0 &&
          get_mall_data.map((item, index) => {
            return <Imgcard key={item.id} item={item} />;
          })}
      </div> */}
            {/* <Navbar
      // setCustomerDropdown={setCustomerDropdown}
      // getcustomerDropdown={getcustomerDropdown}
      /> */}
            <HomeNavbar />

            {/* <HomeHero img={images.in_store_landing_header} /> */}
            <HomeHero
              img={getHomeData ? getHomeData.image_path : ""}
              getHomeData={getHomeData}
            />
            <div className="home-page-sec-gap-wel">
              <WelcomeStoreHome
                WcBtn={true}
                titie={getHomeData}
                des={getHomeData}
              />
            </div>
            <WhayJoin getHomeData={getHomeData} />
            {/* about in store register part-1 start*/}
            <div className="main_wrapp registermall_main_wrapp bg-pink">
              <div className="container registermall_base_wrapp">
                <div className="registermall_sec1">
                  <h2 className="h2">
                    {/* Malls have more
              <br /> presence */}
                    {getHomeData ? getHomeData.details_title_1 : ""}
                  </h2>
                  <p>
                    {getHomeData ? getHomeData.details_description_1 : ""}
                    {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo. */}
                  </p>
                  <div style={{ marginTop: "20px" }}>
                    <Link to="/mall" className="homepage-black-btn">
                      Read more
                    </Link>
                  </div>
                </div>
                {/* <div className="registermall_sec2"> */}
                {/* <img src={images.about_1} alt="" /> */}
                {/* details_image_1_path
                   */}

                {/* </div> */}

                <div className="registermall_sec2">
                  <img
                    src={getHomeData ? getHomeData.details_image_1_path : ""}
                    alt=""
                  />
                  <img
                    src={images.pink_blue}
                    alt=""
                    className="registermall_sec2_vector"
                  />
                </div>
              </div>
            </div>
            {/* about in store register part-1 end*/}

            {/* about in store register part-2 start*/}
            <div className="main_wrapp registermall_main_wrapp bg-orange">
              <div className="container registermall_base_wrapp fd-rr">
                <div className="registermall_sec1">
                  <h2 className="h2">
                    {/* Retailers can track
              <br />
              their customer data */}
                    {getHomeData ? getHomeData.details_title_2 : ""}
                  </h2>
                  <p>
                    {getHomeData ? getHomeData.details_description_2 : ""}
                    {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo. */}
                  </p>
                  <div style={{ marginTop: "20px" }}>
                    <Link to="/retailer" className="homepage-black-btn">
                      Read more
                    </Link>
                  </div>
                </div>
                {/* <div className="registermall_sec2"> */}
                {/* <img src={images.about_2} alt="" /> */}
                {/* <img
                    src={getHomeData ? getHomeData.details_image_2_path : ""}
                    alt=""
                  /> */}
                {/* </div> */}

                <div className="registermall_sec2">
                  <img
                    src={getHomeData ? getHomeData.details_image_2_path : ""}
                    alt=""
                  />
                  <img
                    src={images.orange_blue}
                    alt=""
                    className="registermall_sec2_vector"
                  />
                </div>
              </div>
            </div>
            {/* about in store register part-2 end*/}
            {/* <RegisterMall /> */}
            <div className="main_wrapp registermall_main_wrapp bg-blue">
              <div className="container registermall_base_wrapp">
                <div className="registermall_sec1">
                  <h2 className="h2">
                    {/* Experience all your
              <br /> favorite brands */}
                    {getHomeData ? getHomeData.details_title_3 : ""}
                  </h2>
                  <p>
                    {getHomeData ? getHomeData.details_description_3 : ""}
                    {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo. */}
                  </p>
                  {/* <Link to="/customer" className="homepage-black-btn">Read more</Link> */}
                  <div className="apps_logos_wrapp">
                    <img
                      src={getHomeData ? getHomeData.play_store_img_path : ""}
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
                {/* <div className="registermall_sec2">
                  <img
                    src={getHomeData ? getHomeData.details_image_3_path : ""}
                    alt=""
                  />
                </div> */}
                <div className="registermall_sec2">
                  <img
                    src={getHomeData ? getHomeData.details_image_3_path : ""}
                    alt=""
                  />
                  <img
                    src={images.registermall_vector}
                    alt=""
                    className="registermall_sec2_vector"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Homepage;