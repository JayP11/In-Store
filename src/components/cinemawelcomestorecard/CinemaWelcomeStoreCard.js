import React, { useState } from "react";
// import "./MallWelcomeStoreCard.css";
import { CinemaWelcomeCard, WelcomeCard } from "../../components";
import images from "../../constants/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CinemaWelcomeStoreCard.css";

// const responsive = {
//   0: { items: 1 },
//   720: { items: 2 },
//   1200: { items: 3 },
// };

const CinemaWelcomeStoreCard = ({ WcBtn, titie, des }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <div className="main_wrapp">
    <div className="container welcome_store_wrapp">
      {/* <h1 className="h1">{titie ? titie.welcome_title : "Welcome to In-store"}</h1> */}
      <p className="wel-store-txt">{des && des.welcome_description}</p>
      <div className="welcome_cards_warpp">
        {/* <Slider {...settings}> */}
        <div
          className="mall-page-wel-card-flex
          CinemaWelcomeStoreCard_welcome_cards_warpp">
          <CinemaWelcomeCard
            // img1={images.wcard_3}
            h3="HEY SHOPPERS"
            h4="LOREM IPSUM DOLOR SIT AMET CONSECTETUER"
            color="#ff8b00"
            color1="#000"
            colortxt="#000"
            // wc_btn={WcBtn ? "Register mall" : null}
          />
          <CinemaWelcomeCard
            // img1={images.wcard_2}
            h3="HEY MALL OWNERS"
            h4="LOREM IPSUM DOLOR SIT AMET CONSECTETUER"
            color="#000"
            color1="#ff8b00"
            colortxt="#fff"
            wc_btn={WcBtn ? "Register your mall" : null}
            wc_btnlink={WcBtn ? "/mall" : null}
          />{" "}
          <CinemaWelcomeCard
            // img1={images.wcard_1}
            h3="HEY BRAND OWNERS"
            h4="LOREM IPSUM DOLOR SIT AMET CONSECTETUER"
            color="#000"
            color1="#ff8b00"
            colortxt="#fff"
            // wc_btn={WcBtn ? "Sign up" : null}
            wc_btn={WcBtn ? "Register your brand" : null}
            wc_btnlink={WcBtn ? "/retailer" : null}
          />
          <CinemaWelcomeCard
            // img1={images.wcard_1}
            h3="HEY CINEMA OWNERS"
            h4="LOREM IPSUM DOLOR SIT AMET CONSECTETUER"
            color="#000"
            color1="#ff8b00"
            colortxt="#fff"
            // wc_btn={WcBtn ? "Sign up" : null}
            wc_btn={WcBtn ? "Register your brand" : null}
            wc_btnlink={WcBtn ? "/retailer" : null}
          />
        </div>
        {/* </Slider> */}
      </div>
    </div>
    // </div>
  );
};

export default CinemaWelcomeStoreCard;