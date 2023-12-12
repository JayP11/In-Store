import React from 'react'
import "./CustomerProfile.css"
import images from '../../constants/images'

const CustomerProfile = ({ setTab }) => {
    return (
        <>
            <div className="mallpp_main_wrapp">
                <div className="mallpp_part1">
                    <h4 className="h4 cust-profile-heading">Welcome Jane!</h4>
                    <h5 className="h5 mb_10">
                        Let’s start by setting up your account profile:
                    </h5>

                    <ul>
                        <li className="mallpp_sigle_list">
                            Populate your profile with your details under
                            <button onClick={() => setTab(4)}>Account Settings</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            <button onClick={() => setTab(3)}>Explore shopping malls</button>
                            across the whole of South Africa and nearest to you
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your favorite products under
                            <button onClick={() => setTab(3)}>my wishlist</button>
                        </li>
                    </ul>
                </div>

                {/* profile cards wrapp start */}
                <div className="mallpp_part2">
                    {/* single cards start */}
                    <div
                        className="mallpp_part2_card"
                        style={{
                            backgroundImage: `url(${images.home_card_bg_1})`,
                            backgroundPosition: "center",
                        }}
                    >
                        <h5 className="mallpp_part2_card_heading">100% Native</h5>
                        <p className="mallpp_part2_card_description">
                            In-store’s unique marketing adds respembles the experience of stores
                            in a mall
                        </p>
                    </div>
                    <div
                        className="mallpp_part2_card"
                        style={{
                            backgroundImage: `url(${images.home_card_bg_2})`,
                            backgroundPosition: "center",
                        }}
                    >
                        <h5 className="mallpp_part2_card_heading">Fulfillment</h5>
                        <p className="mallpp_part2_card_description">
                            One buying journey, multiple fulfillment options with preference for
                            In-store.
                        </p>
                    </div>
                    <div
                        className="mallpp_part2_card"
                        style={{
                            backgroundImage: `url(${images.home_card_bg_3})`,
                            backgroundPosition: "center",
                        }}
                    >
                        <h5 className="mallpp_part2_card_heading">Unified</h5>
                        <p className="mallpp_part2_card_description">
                            Unified channel for retail brands to bring together consumers,
                            marketing & products
                        </p>
                    </div>
                    <div
                        className="mallpp_part2_card"
                        style={{
                            backgroundImage: `url(${images.home_card_bg_2})`,
                            backgroundPosition: "center",
                        }}
                    >
                        <h5 className="mallpp_part2_card_heading">Personalised</h5>
                        <p className="mallpp_part2_card_description">
                            The In-store platform takes personalised content advertising to a
                            whole new level
                        </p>
                    </div>
                    <div
                        className="mallpp_part2_card"
                        style={{
                            backgroundImage: `url(${images.home_card_bg_3})`,
                            backgroundPosition: "center",
                        }}
                    >
                        <h5 className="mallpp_part2_card_heading">Intergrated Publishing</h5>
                        <p className="mallpp_part2_card_description">
                            Digital brand marketing/ advertising
                        </p>
                    </div>
                    <div
                        className="mallpp_part2_card"
                        style={{
                            backgroundImage: `url(${images.home_card_bg_1})`,
                            backgroundPosition: "center",
                        }}
                    >
                        <h5 className="mallpp_part2_card_heading">Simplified</h5>
                        <p className="mallpp_part2_card_description">
                            The In-store platform offers small business and enterprise solutions
                        </p>
                    </div>
                    {/* single cards end */}
                </div>
                {/* profile cards wrapp end */}
            </div>
        </>
    )
}

export default CustomerProfile