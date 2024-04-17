import React, { useEffect } from "react";
import "./PromotionHero.css";
import images from "../../constants/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PromotionHero = ({ getdprodata }) => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };

  console.log("123 slider",getdprodata);

  return (
    <Slider {...settings}>
      {getdprodata && getdprodata.length > 0
        ? getdprodata.map((x, i) => {
          return (
            <div className="mall_hero_main_wrapp">
              <img
                src={
                  x.image_path === null
                    ? images.hero_profile_banner
                    : x.image_path
                }
                alt=""
                className="mall_hero_banner_img" style={{ objectFit: "initial" }}
              />
            </div>
          );
        })
        : null}
    </Slider>

    // <Slider {...settings}>
    //   {getdprodata && getdprodata.length > 0
    //      ? getdprodata.map((x, i) => {
    //        return (
    //          <div className="mall_hero_main_wrapp">
    //            <img
    //              src={
    //                x.image_path === null
    //                  ? images.hero_profile_banner
    //                  : x.image_path
    //              }
    //              alt=""
    //              className="mall_hero_banner_img" style={{ objectFit: "initial" }}
    //            />
    //          </div>
    //        );
    //      })
    //      : null}
    //  </Slider>
    // <div style={{width:"100%"}}>
    //  <Slider {...settings}>
      
    //         <div className="mall_hero_main_wrapp">
    //           <img
    //             src={
    //                images.hero_profile_banner
                    
    //             }
    //             alt=""
    //             className="mall_hero_banner_img" style={{ objectFit: "initial" }}
    //           />
    //         </div>
    //         <div className="mall_hero_main_wrapp">
    //           <img
    //             src={
    //               images.hero_profile_banner
                    
    //             }
    //             alt=""
    //             className="mall_hero_banner_img" style={{ objectFit: "initial" }}
    //           />
    //         </div>
        
    // </Slider>
    // </div>

    //     <Slider {...settings}>
     
    //         <div className="mall_hero_main_wrapp">
    //           <img
    //             src={
             
    //                  images.hero_profile_banner
                
    //             }
    //             alt=""
    //             className="mall_hero_banner_img" style={{ objectFit: "initial" }}
    //           />
    //         </div>
    //         <div className="mall_hero_main_wrapp">
    //           <img
    //             src={
                 
    //                  images.hero_profile_banner
                 
    //             }
    //             alt=""
    //             className="mall_hero_banner_img" style={{ objectFit: "initial" }}
    //           />
    //         </div>
      
    // </Slider>
  );
};

export default PromotionHero;

//  <div className="mall_hero_main_wrapp">
//         <img
//           src={images.hero_profile_banner}
//           alt=""
//           className="mall_hero_banner_img"
//         />
//       </div>
//       <div className="mall_hero_main_wrapp">
//         <img
//           src={images.hero_profile_banner}
//           alt=""
//           className="mall_hero_banner_img"
//         />
//       </div>
