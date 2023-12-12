import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { CinemaHero } from "../../components";
// import "./StoreThankyou.css"

const CinemaThankYou = ({ setTab, get_mall_auth_data }) => {
    return (
        <>
        <CinemaHero/>
        <div className="mm_main_wrapp">
            {/* Choose product name start */}
            <div className="mall_name_wrapp">
                {/* <p className="mall_name_heading">
                    {" "}
                    {get_mall_auth_data &&
                        get_mall_auth_data.retailers.name &&
                        get_mall_auth_data.retailers.name}
                    :
                </p> */}
                <p className="mall_name_heading">
                Sterkinikor:
                </p>
                <span>Thank you!</span>
            </div>
            <div className="mm_horizontal_line"></div>
            {/* Choose product  name end */}

            {/* Choose product sub heading start */}

            {/* <div className='choose-prod-sub-heading-wrapp'> */}
            {/* <p className='choose-prod-sub-heading'>Choose your product</p> */}
            <p className="mallpp_sigle_list">
                Thank you for purchasing with In-store! Keep track of your customer
                behaviour through{" "}
                <button onClick={() => setTab()}> tracking their analytics</button>
            </p>
            {/* </div> */}

            {/* Choose product sub heading end */}

            {/* choose product cards wrapp start */}
            <div className="choose-prod-card-flex">
                {/* single cards start */}
                <div
                    className="mallpp_part2_card"
                    style={{
                        // backgroundImage: `url(${images.home_card_bg_1})`,
                        backgroundColor:"#ff8b00",
                        backgroundPosition: "center",
                    }}
                >
                     <h5 className="mallpp_part2_card_heading" style={{fontSize:"20px !important"}}>100% NATIVE</h5>
              <p className="mallpp_part2_card_description" style={{fontSize:"14px !important"}}>
                In-store’s unique marketing adds respembles the experience of
                stores in a mall
              </p>
                    {/* <Link to="" className="mallpp_part2_card_description">
                        Check it out! &gt;
                    </Link> */}
                </div>
                <div
                    className="mallpp_part2_card"
                    style={{
                        // backgroundImage: `url(${images.home_card_bg_2})`,
                        backgroundColor:"#000",
                        backgroundPosition: "center",
                    }}
                >
                    <h5 className="mallpp_part2_card_heading" style={{fontSize:"20px !important"}}>Fulfillment</h5>
              <p className="mallpp_part2_card_description" style={{fontSize:"14px !important"}}>
                One buying journey, multiple fulfillment options with preference
                for In-store.
              </p>
                    {/* <Link to="" className="mallpp_part2_card_description">
                        Check it out! &gt;
                    </Link> */}
                </div>
                <div
                    className="mallpp_part2_card"
                    style={{
                        // backgroundImage: `url(${images.home_card_bg_3})`,
                        backgroundColor:"#ff8b00",
                        backgroundPosition: "center",
                    }}
                >
                    <h5 className="mallpp_part2_card_heading" style={{fontSize:"20px !important"}}>Unified</h5>
              <p className="mallpp_part2_card_description" style={{fontSize:"14px !important"}}>
                Unified channel for retail brands to bring together consumers,
                marketing & products
              </p>
                    {/* <Link to="" className="mallpp_part2_card_description">
                        Check it out! &gt;
                    </Link> */}
                </div>
                <div
                    className="mallpp_part2_card"
                    style={{
                        // backgroundImage: `url(${images.home_card_bg_3})`,
                        backgroundColor:"#000",
                        backgroundPosition: "center",
                    }}
                >
                    <h5 className="mallpp_part2_card_heading" style={{fontSize:"20px !important"}}>Personalised</h5>
              <p className="mallpp_part2_card_description" style={{fontSize:"14px !important"}}>
                The In-store platform takes personalised content advertising to a
                whole new level
              </p>
                    {/* <Link to="" className="mallpp_part2_card_description">
                        Check it out! &gt;
                    </Link> */}
                </div>
                <div
                    className="mallpp_part2_card"
                    style={{
                        // backgroundImage: `url(${images.home_card_bg_1})`,
                        backgroundColor:"#ff8b00",
                        backgroundPosition: "center",
                    }}
                >
                                <h5 className="mallpp_part2_card_heading" style={{fontSize:"20px"}}>
                Intergrated Publishing
              </h5>
              <p className="mallpp_part2_card_description" style={{fontSize:"14px"}}>
                Digital brand marketing/ advertising
              </p>

                    {/* <Link to="" className="mallpp_part2_card_description">
                        Check it out! &gt;
                    </Link> */}
                </div>

                <div
                    className="mallpp_part2_card"
                    style={{
                        // backgroundImage: `url(${images.home_card_bg_1})`,
                        backgroundColor:"#000",
                        backgroundPosition: "center",
                    }}
                >
                               <h5 className="mallpp_part2_card_heading" style={{fontSize:"20px !important"}}>Simplified</h5>
              <p className="mallpp_part2_card_description" style={{fontSize:"14px !important"}}>
                The In-store platform offers small business and enterprise
                solutions
              </p>
                    {/* <Link to="" className="mallpp_part2_card_description">
                        Check it out! &gt;
                    </Link> */}
                </div>

                {/* single cards end */}
            </div>
            {/* choose product cards wrapp end */}

            {/* Choose Product location part start */}

            <div className="choose-prod-location-wrapp" style={{marginTop:"75px"}}>
                {/* Choose Product location part inner parts start */}

                {/* Choose Product location part inner first part start */}

                <div className="choose-prod-location-first-part">
                    <p
                        className="h4 choose-prod-location-txt"
                        style={{ fontWeight: "800",fontSize:"28px !important" }}
                    >
                        Keep track of all your retail brands across all your regions
                    </p>
                    <div className="choose-prod-location-btn-wrapp">
                        <Link to="" className="btn btn-orange">
                            View analytics
                        </Link>
                    </div>
                </div>

                {/* Choose Product location part inner first part end */}

                {/* Choose Product location part inner seconed parts start */}
                <div className="choose-prod-location-sec-part">
                    <div className="choose-prod-location-imgbox">
                        <img
                            src={images.home_location}
                            className="choose-prod-location-img"
                        />
                    </div>
                </div>

                {/* Choose Product location part inner seconed parts end */}

                {/* Choose Product location part inner parts end */}
            </div>
            {/* Choose Product location part end */}
        </div>
        </>
    );
};

export default CinemaThankYou;