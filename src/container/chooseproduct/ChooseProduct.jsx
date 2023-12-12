import React from 'react'
import "./ChooseProduct.css"
import images from '../../constants/images'
import { Link } from 'react-router-dom'

const ChooseProduct = ({ setTab }) => {
    return (
        <div className="mm_main_wrapp">
            {/* Choose product name start */}
            <div className="mall_name_wrapp">
                <p className="mall_name_heading">GUESS South Africa:</p>
                <span>You’re all set!</span>
            </div>
            <div className="mm_horizontal_line"></div>
            {/* Choose product  name end */}


            {/* Choose product sub heading start */}

            <div className='choose-prod-sub-heading-wrapp'>
                <p className='choose-prod-sub-heading'>Choose your product</p>
                <p className='choose-prod-sub-heading-txt'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ipsum.</p>
            </div>

            {/* Choose product sub heading end */}


            {/* choose product cards wrapp start */}
            <div className="choose-prod-card-flex">
                {/* single cards start */}
                <div
                    className="mallpp_part2_card"
                    style={{
                        backgroundImage: `url(${images.home_card_bg_1})`,
                        backgroundPosition: "center",
                    }}
                >
                    <h5 className="mallpp_part2_card_heading choose-card-heading">Leaderboard
                        Banner</h5>
                    <Link to="" onClick={() => setTab(3)} className="mallpp_part2_card_description">
                        Check it out! &gt;
                    </Link>
                </div>
                <div
                    className="mallpp_part2_card"
                    style={{
                        backgroundImage: `url(${images.home_card_bg_2})`,
                        backgroundPosition: "center",
                    }}
                >
                    <h5 className="mallpp_part2_card_heading choose-card-heading">Promotional
                        Banners</h5>
                    <Link to="" onClick={() => setTab(3)} className="mallpp_part2_card_description">
                        Check it out! &gt;
                    </Link>
                </div>
                <div
                    className="mallpp_part2_card"
                    style={{
                        backgroundImage: `url(${images.home_card_bg_3})`,
                        backgroundPosition: "center",
                    }}
                >
                    <h5 className="mallpp_part2_card_heading choose-card-heading">Product
                        Banners</h5>
                    <Link to="" onClick={() => setTab(3)} className="mallpp_part2_card_description">
                        Check it out! &gt;
                    </Link>
                </div>
                <div
                    className="mallpp_part2_card"
                    style={{
                        backgroundImage: `url(${images.home_card_bg_3})`,
                        backgroundPosition: "center",
                    }}
                >
                    <h5 className="mallpp_part2_card_heading choose-card-heading">Product
                        Tiles</h5>
                    <Link to="" onClick={() => setTab(3)} className="mallpp_part2_card_description">
                        Check it out! &gt;
                    </Link>
                </div>
                <div
                    className="mallpp_part2_card"
                    style={{
                        backgroundImage: `url(${images.home_card_bg_1})`,
                        backgroundPosition: "center",
                    }}
                >
                    <h5 className="mallpp_part2_card_heading choose-card-heading">Track
                        Analytics</h5>
                    <Link to="" onClick={() => setTab(3)} className="mallpp_part2_card_description">
                        Check it out! &gt;
                    </Link>
                </div>

                {/* single cards end */}
            </div>
            {/* choose product cards wrapp end */}

            {/* Choose Product location part start */}

            <div className="choose-prod-location-wrapp">

                {/* Choose Product location part inner parts start */}

                {/* Choose Product location part inner first part start */}

                <div className="choose-prod-location-first-part">
                    <p className="h4 choose-prod-location-txt" style={{ fontWeight: '800' }}>Keep track of all your
                        retail brands across
                        all your regions</p>
                    <div className="choose-prod-location-btn-wrapp">
                        <Link to="" className="btn btn-orange">View analytics</Link>
                    </div>

                </div>

                {/* Choose Product location part inner first part end */}


                {/* Choose Product location part inner seconed parts start */}
                <div className="choose-prod-location-sec-part">
                    <div className="choose-prod-location-imgbox">
                        <img src={images.home_location} className="choose-prod-location-img" />
                    </div>

                </div>

                {/* Choose Product location part inner seconed parts end */}

                {/* Choose Product location part inner parts end */}

            </div>
            {/* Choose Product location part end */}
        </div>

    )
}

export default ChooseProduct