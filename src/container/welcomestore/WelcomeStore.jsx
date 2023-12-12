import React, { useEffect, useState } from "react";
import "./WelcomeStore.css";
import { WelcomeCard } from "../../components";
import images from "../../constants/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const responsive = {
//   0: { items: 1 },
//   720: { items: 2 },
//   1200: { items: 3 },
// };

const WelcomeStore = ({ WcBtn, titie, des }) => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1440,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         arrows: false,
  //       },
  //     },
  //     {
  //       breakpoint: 920,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  // useEffect(() => {
  //   console.log("home title", titie);
  // }, []);

  return (
    <div className="main_wrapp">
      <div className="container welcome_store_wrapp wel-sec-gap">
        <h1 className="h1" style={{ marginBottom: "1rem" }}>
          {titie ? titie.welcome_title : "Welcome to In-storeeee"}
        </h1>
        <p className="wel-store-txt">{des ? des.welcome_description : ""}</p>
        <div className="welcome_cards_warpp">
          {/* <Slider {...settings}> */}
          {/* <WelcomeCard
              img1={images.wcard_3}
              h3="MALL PRESENCE"
              h4="EXPERIENCE SHOPPING ON A WHOLE NEW LEVEL"
              color="#d813a5"
              wc_btn={WcBtn ? "Register mall" : null}
            />
            <WelcomeCard
              img1={images.wcard_2}
              h3="MARKETING DATA"
              h4="TRACK <br /> VALUEABLE <br />  CUSTOMERDATA "
              color="#ff8b00"
              wc_btn={WcBtn ? "Register brand" : null}
            />{" "} */}
          {/* <WelcomeCard
              img1={images.wcard_1}
              h3="THE BIGGEST SELECTION"
              h4="OF RETAIL <br /> BRANDS IN <br />YOUR AREA"
              color="#4397ff"
              wc_btn={WcBtn ? "Sign up" : null}
            /> */}
          {/* </Slider> */}
          <div className="home-wel-card-flex">
            <WelcomeCard
              img1={images.wcard_3}
              h3="HEY MALL OWNERS"
              h4="EXPERIENCE SHOPPING ON A WHOLE NEW LEVEL"
              color="#d813a5"
              wc_btn={WcBtn ? "Register mall" : null}
              wc_btnlink={WcBtn ? "/mall" : null}
              style={{ margin: "0px" }}
            />
            <WelcomeCard
              img1={images.wcard_2}
              h3="HEY RETAIL OWNERS"
              h4="TRACK <br /> VALUEABLE <br />  CUSTOMERDATA "
              color="#ff8b00"
              wc_btn={WcBtn ? "Register brand" : null}
              wc_btnlink={WcBtn ? "/retailer" : null}
              style={{ margin: "0px" }}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeStore;