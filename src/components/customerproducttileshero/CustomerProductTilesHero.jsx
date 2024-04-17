import React from 'react'
import images from '../../constants/images'
import "./CustomerProductTilesHero.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerProductTilesHero = ({ item,getlist1,sidebaropen }) => {


   
    // var settings = {
    //     // dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows:false,
    //   };


    return (

        // <div className={`${sidebaropen
        //     ? "mall_hero_main_wrapp2"
        //     : "mall_hero_main_wrapp"
        //     }`}>
        // <div>
        //     <img
        //         src={item ? item.stores.store_banner_path : images.mall_hero_banner}
        //         alt=""
        //         className="mall_hero_banner_img product-tiles-hero-img" style={{height:"30vh"}}
        //     />
        //     <div className="mall_hero_logo_wrapp">
        //         <img src={item ? item.stores.store_logo_path : images.mall_hero_logo} alt="" />
        //     </div>
        // </div>
        // </div>
        <div >
        <div style={{position:"relative",width:"100%"}}>
            <img
                src={item.stores ? item.stores.store_banner_path : images.brand_banner}
                alt=""
                className="mall_hero_banner_img product-tiles-hero-img" style={{height:"30vh"}}
            />
            <div className="mall_hero_logo_wrapp" style={{top:"16%"}}>
                <img src={item.stores ? item.stores.store_logo_path : images.sl13} alt="" />
            </div>
        </div>
        </div>

      
    )
}

export default CustomerProductTilesHero