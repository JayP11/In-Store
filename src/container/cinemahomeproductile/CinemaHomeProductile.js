import React, { useEffect, useState } from "react";
import "./CinemaHomeProductile.css";
import images from "../../constants/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ACCEPT_HEADER, get_landingpage_squaretile_without_auth } from "../../utils/Constant";
import axios from "axios";
import Item from "antd/es/list/Item";
import ReactPlayer from "react-player";


const CinemaHomeProductile = () => {

  const imageBanner = [
    { imageUrl: images.about_hero },
    { imageUrl: images.brand_page_hero },
    { imageUrl: images.card_main_blue_pink_3 },
    { imageUrl: images.cinema_banner },
    { imageUrl: images.cinemahomebanner },
  ];

  var settings = {
    // dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    fade: true,
    cssEase: 'linear',

  };

  
   var  img = require('../../assets/images/production_id_3752531 (1080p).mp4')
  

  const [getHomeSquareTileData, setHomeSquareTileData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getHomeSquareTileDataApi();
    // console.log("Get Home Data--->", getHomeData);
  }, []);

  const getHomeSquareTileDataApi = async () => {
    setLoading(true);
    axios
      .get(get_landingpage_squaretile_without_auth, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      })
      .then((res) => {
        console.log("first");
        console.log("home data", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          setHomeSquareTileData(res.data.data);
          setLoading(false);
        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

const [getIndex,setIndex] = useState(0)

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
          <div className="CinemaHomeProductile_main">


            {getHomeSquareTileData && getHomeSquareTileData.map((item ,index) => {

              var type = item.multiple_images[0].image.split('.')[1]
              return (
                <div className="home-slider-main-img"
                onMouseEnter={()=>{
                  setIndex(index)
                }}
                >
                  <>
                    {type === 'mp4' ? <>
                    <div style={{width:"200px",height:"200px"}}>
                      <ReactPlayer className="landingpage_video"
                        url={item.multiple_images[0].image_path}
                        muted={true}
                        autoplay={true}
                        controls={true}
                        playing={true}
                        width="200px"
                        height="200px"
                  
                      />
                      </div>
                    </> : <>
                      <img
                        src={item.multiple_images[0].image_path}
                        alt="cinematrackpant"
                        className="CinemaHomeProductile_img_inner"
                      />
                    </>}

                  </>
                  <div className="slider-main-home">
                    {getHomeSquareTileData && getHomeSquareTileData.map((item, index) => {
                      return (
                        <>
                        {index === getIndex ?
                          <Slider {...settings} key={index}>
                            {item.multiple_images.map((itm,ind) => {
                              return (

                                <>
                                {type === 'mp4' ? <>
                                    <div style={{width:"200px",height:"200px"}}>
                      <ReactPlayer className="landingpage_video"
                        url={item.multiple_images[0].image_path}
                        muted={true}
                        autoplay={true}
                        controls={true}
                        playing={true}
                        width="200px"
                        height="200px"
                  
                      />
                      </div>
                                </>:<>
                                <div className={`slider_inner_sing_img_main`+ `${ind}`}>
                                <img
                                    src={itm.image_path}
                                    alt="cinematrackpant"
                                    className="CinemaHomeProductile_img_inner"
                                  />

                                </div>
                                </>}
                               
                                </>
                              )
                            })}
                          </Slider>
                          :null}

                        
                        </>
                      )
                    })
                    }

                 

                  </div>
                  
                </div>
              )
            })}



          </div>
        </>)}
    </>
  );
};

export default CinemaHomeProductile;



