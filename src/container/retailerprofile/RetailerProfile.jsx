import React from 'react'
import images from '../../constants/images'
import "./RetailerProfile.css"

const RetailerProfile = ({ setTab, get_mall_auth_data, sidebaropen }) => {
    return (
        <div className={`${sidebaropen ? '' : 'mall-profile-slider-off-margin'}`}>
            <div className="mallpp_main_wrapp mallpp_main_wrapp-resp mall-display-none">

                <div className="mallpp_part1">
                    <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.name && get_mall_auth_data.name}!</p>
                    {/* <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.retailers.name && get_mall_auth_data.retailers.name}!</p> */}

                    <h5 className="h5 mb_10">
                        Let’s start by setting up your account profile:
                    </h5>

                    <ul>
                        <li className="mallpp_sigle_list">
                            Populate your store profile with your store details under
                            <button onClick={() => setTab(2)}>Account Settings</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Upload marketing content via{" "}
                            <button onClick={() => setTab(3)}>Leaderboard Banners,</button>&nbsp;
                            <button onClick={() => setTab(4)}>Promotional Banners,</button>&nbsp;
                            <button onClick={() => setTab(5)}> Product Banners</button>
                            &nbsp;<span>and</span>&nbsp;
                            <button onClick={() => setTab(6)}>Product Tiles</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(7)}>marketing analytics</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(8)}>brand in malls</button>
                        </li>
                        {/* <li className="mallpp_sigle_list">
                        Mange your mall’s facilities under{" "}
                        <button onClick={() => setTab(6)}>Facilities</button>
                    </li> */}
                    </ul>
                </div>

                {/* profile cards wrapp start */}
                <div className="mallpp_part2 mallpp_part2-mall-side-max-width">
                    <div className="mallpp_part2">
                        {/* single cards start */}
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">100% Native</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                In-store’s unique marketing adds respembles the experience of stores
                                in a mall
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Fulfillment</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                One buying journey, multiple fulfillment options with preference for
                                In-store.
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_orange})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Unified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                Unified channel for retail brands to bring together consumers,
                                marketing & products
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Personalised</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                The In-store platform takes personalised content advertising to a
                                whole new level
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_blue})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Intergrated Publishing</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                Digital brand marketing/ advertising
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Simplified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                The In-store platform offers small business and enterprise solutions
                            </p>
                        </div>
                        {/* single cards end */}
                    </div>
                </div>
                {/* profile cards wrapp end */}
            </div>

            <div className="mallpp_main_wrapp mallpp_main_wrapp-resp mall-display-none2">

                <div className="mallpp_part1">
                    <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.name && get_mall_auth_data.name}!</p>
                    {/* <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.retailers.name && get_mall_auth_data.retailers.name}!</p> */}

                    <h5 className="h5 mb_10">
                        Let’s start by setting up your account profile:
                    </h5>

                    <ul>
                        <li className="mallpp_sigle_list">
                            Populate your store profile with your store details under
                            <button onClick={() => setTab(2)}>Account Settings</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Upload marketing content via{" "}
                            <button onClick={() => setTab(3)}>Leaderboard Banners,</button>&nbsp;
                            <button onClick={() => setTab(4)}>Promotional Banners,</button>&nbsp;
                            <button onClick={() => setTab(5)}> Product Banners</button>
                            &nbsp;<span>and</span>&nbsp;
                            <button onClick={() => setTab(6)}>Product Tiles</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(7)}>marketing analytics</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(8)}>brand in malls</button>
                        </li>
                        {/* <li className="mallpp_sigle_list">
                        Mange your mall’s facilities under{" "}
                        <button onClick={() => setTab(6)}>Facilities</button>
                    </li> */}
                    </ul>
                </div>

                {/* profile cards wrapp start */}
                <div className="mallpp_part2 mallpp_part2-mall-side-max-width">
                    <div className="mallpp_part2">
                        {/* single cards start */}
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd2"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_2})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">100% Native</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                In-store’s unique marketing adds respembles the experience of stores
                                in a mall
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd2"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_2})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Fulfillment</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                One buying journey, multiple fulfillment options with preference for
                                In-store.
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd2"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_orange_2})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Unified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                Unified channel for retail brands to bring together consumers,
                                marketing & products
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd2"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_2})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Personalised</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                The In-store platform takes personalised content advertising to a
                                whole new level
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd2"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_blue_2})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Intergrated Publishing</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                Digital brand marketing/ advertising
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd2"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_2})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Simplified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                The In-store platform offers small business and enterprise solutions
                            </p>
                        </div>
                        {/* single cards end */}
                    </div>
                </div>
                {/* profile cards wrapp end */}
            </div>

            <div className="mallpp_main_wrapp mallpp_main_wrapp-resp mall-display-none3">

                <div className="mallpp_part1">
                    <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.name && get_mall_auth_data.name}!</p>
                    {/* <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.retailers.name && get_mall_auth_data.retailers.name}!</p> */}

                    <h5 className="h5 mb_10">
                        Let’s start by setting up your account profile:
                    </h5>

                    <ul>
                        <li className="mallpp_sigle_list">
                            Populate your store profile with your store details under
                            <button onClick={() => setTab(2)}>Account Settings</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Upload marketing content via{" "}
                            <button onClick={() => setTab(3)}>Leaderboard Banners,</button>&nbsp;
                            <button onClick={() => setTab(4)}>Promotional Banners,</button>&nbsp;
                            <button onClick={() => setTab(5)}> Product Banners</button>
                            &nbsp;<span>and</span>&nbsp;
                            <button onClick={() => setTab(6)}>Product Tiles</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(7)}>marketing analytics</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(8)}>brand in malls</button>
                        </li>
                        {/* <li className="mallpp_sigle_list">
                        Mange your mall’s facilities under{" "}
                        <button onClick={() => setTab(6)}>Facilities</button>
                    </li> */}
                    </ul>
                </div>

                {/* profile cards wrapp start */}
                <div className="mallpp_part2 mallpp_part2-mall-side-max-width">
                    <div className="mallpp_part2">
                        {/* single cards start */}
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd3"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_3})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big3">100% Native</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big3">
                                In-store’s unique marketing adds respembles the experience of stores
                                in a mall
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd3"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_3})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Fulfillment</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                One buying journey, multiple fulfillment options with preference for
                                In-store.
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd3"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_orange_3})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Unified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                Unified channel for retail brands to bring together consumers,
                                marketing & products
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd3"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_3})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Personalised</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                The In-store platform takes personalised content advertising to a
                                whole new level
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd3"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_blue_3})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Intergrated Publishing</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                Digital brand marketing/ advertising
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd3"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_3})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Simplified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                The In-store platform offers small business and enterprise solutions
                            </p>
                        </div>
                        {/* single cards end */}
                    </div>
                </div>
                {/* profile cards wrapp end */}
            </div>

            <div className="mallpp_main_wrapp mallpp_main_wrapp-resp mall-display-none4">

                <div className="mallpp_part1">
                    <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.name && get_mall_auth_data.name}!</p>
                    {/* <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.retailers.name && get_mall_auth_data.retailers.name}!</p> */}

                    <h5 className="h5 mb_10">
                        Let’s start by setting up your account profile:
                    </h5>

                    <ul>
                        <li className="mallpp_sigle_list">
                            Populate your store profile with your store details under
                            <button onClick={() => setTab(2)}>Account Settings</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Upload marketing content via{" "}
                            <button onClick={() => setTab(3)}>Leaderboard Banners,</button>&nbsp;
                            <button onClick={() => setTab(4)}>Promotional Banners,</button>&nbsp;
                            <button onClick={() => setTab(5)}> Product Banners</button>
                            &nbsp;<span>and</span>&nbsp;
                            <button onClick={() => setTab(6)}>Product Tiles</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(7)}>marketing analytics</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(8)}>brand in malls</button>
                        </li>
                        {/* <li className="mallpp_sigle_list">
                        Mange your mall’s facilities under{" "}
                        <button onClick={() => setTab(6)}>Facilities</button>
                    </li> */}
                    </ul>
                </div>

                {/* profile cards wrapp start */}
                <div className="mallpp_part2 mallpp_part2-mall-side-max-width">
                    <div className="mallpp_part2">
                        {/* single cards start */}
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd4"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_4})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big3">100% Native</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big3">
                                In-store’s unique marketing adds respembles the experience of stores
                                in a mall
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd4"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_4})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Fulfillment</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                One buying journey, multiple fulfillment options with preference for
                                In-store.
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd4"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_orange_4})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Unified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                Unified channel for retail brands to bring together consumers,
                                marketing & products
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd4"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_4})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Personalised</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                The In-store platform takes personalised content advertising to a
                                whole new level
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd4"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_blue_4})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Intergrated Publishing</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                Digital brand marketing/ advertising
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd4"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_4})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Simplified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                                The In-store platform offers small business and enterprise solutions
                            </p>
                        </div>
                        {/* single cards end */}
                    </div>
                </div>
                {/* profile cards wrapp end */}
            </div>

            <div className="mallpp_main_wrapp mallpp_main_wrapp-resp mall-display-none5">

                <div className="mallpp_part1">
                    <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.name && get_mall_auth_data.name}!</p>
                    {/* <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.retailers.name && get_mall_auth_data.retailers.name}!</p> */}

                    <h5 className="h5 mb_10">
                        Let’s start by setting up your account profile:
                    </h5>

                    <ul>
                        <li className="mallpp_sigle_list">
                            Populate your store profile with your store details under
                            <button onClick={() => setTab(2)}>Account Settings</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Upload marketing content via{" "}
                            <button onClick={() => setTab(3)}>Leaderboard Banners,</button>&nbsp;
                            <button onClick={() => setTab(4)}>Promotional Banners,</button>&nbsp;
                            <button onClick={() => setTab(5)}> Product Banners</button>
                            &nbsp;<span>and</span>&nbsp;
                            <button onClick={() => setTab(6)}>Product Tiles</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(7)}>marketing analytics</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(8)}>brand in malls</button>
                        </li>
                        {/* <li className="mallpp_sigle_list">
                        Mange your mall’s facilities under{" "}
                        <button onClick={() => setTab(6)}>Facilities</button>
                    </li> */}
                    </ul>
                </div>

                {/* profile cards wrapp start */}
                <div className="mallpp_part2 mallpp_part2-mall-side-max-width">
                    <div className="mallpp_part2">
                        {/* single cards start */}
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd5"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_5})`,
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
                            className="mallpp_part2_card mallpp_part2_cardd5"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_5})`,
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
                            className="mallpp_part2_card mallpp_part2_cardd5"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_orange_5})`,
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
                            className="mallpp_part2_card mallpp_part2_cardd5"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_5})`,
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
                            className="mallpp_part2_card mallpp_part2_cardd5"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_blue_5})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading">Intergrated Publishing</h5>
                            <p className="mallpp_part2_card_description">
                                Digital brand marketing/ advertising
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd5"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_5})`,
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
                </div>
                {/* profile cards wrapp end */}
            </div>

            <div className="mallpp_main_wrapp mallpp_main_wrapp-resp mall-display-none6">

                <div className="mallpp_part1">
                    <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.name && get_mall_auth_data.name}!</p>
                    {/* <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.retailers.name && get_mall_auth_data.retailers.name}!</p> */}

                    <h5 className="h5 mb_10">
                        Let’s start by setting up your account profile:
                    </h5>

                    <ul>
                        <li className="mallpp_sigle_list">
                            Populate your store profile with your store details under
                            <button onClick={() => setTab(2)}>Account Settings</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Upload marketing content via{" "}
                            <button onClick={() => setTab(3)}>Leaderboard Banners,</button>&nbsp;
                            <button onClick={() => setTab(4)}>Promotional Banners,</button>&nbsp;
                            <button onClick={() => setTab(5)}> Product Banners</button>
                            &nbsp;<span>and</span>&nbsp;
                            <button onClick={() => setTab(6)}>Product Tiles</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(7)}>marketing analytics</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(8)}>brand in malls</button>
                        </li>
                        {/* <li className="mallpp_sigle_list">
                        Mange your mall’s facilities under{" "}
                        <button onClick={() => setTab(6)}>Facilities</button>
                    </li> */}
                    </ul>
                </div>

                {/* profile cards wrapp start */}
                <div className="mallpp_part2 mallpp_part2-mall-side-max-width">
                    <div className="mallpp_part2">
                        {/* single cards start */}
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd6"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_6})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">100% Native</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                                In-store’s unique marketing adds respembles the experience of stores
                                in a mall
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd6"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_6})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Fulfillment</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                                One buying journey, multiple fulfillment options with preference for
                                In-store.
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd6"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_orange_6})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Unified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                                Unified channel for retail brands to bring together consumers,
                                marketing & products
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd6"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_6})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Personalised</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                                The In-store platform takes personalised content advertising to a
                                whole new level
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd6"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_blue_6})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Intergrated Publishing</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                                Digital brand marketing/ advertising
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd6"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_6})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Simplified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                                The In-store platform offers small business and enterprise solutions
                            </p>
                        </div>
                        {/* single cards end */}
                    </div>
                </div>
                {/* profile cards wrapp end */}
            </div>

            <div className="mallpp_main_wrapp mallpp_main_wrapp-resp mall-display-none7">

                <div className="mallpp_part1">
                    <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.name && get_mall_auth_data.name}!</p>
                    {/* <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.retailers.name && get_mall_auth_data.retailers.name}!</p> */}

                    <h5 className="h5 mb_10">
                        Let’s start by setting up your account profile:
                    </h5>

                    <ul>
                        <li className="mallpp_sigle_list">
                            Populate your store profile with your store details under
                            <button onClick={() => setTab(2)}>Account Settings</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Upload marketing content via{" "}
                            <button onClick={() => setTab(3)}>Leaderboard Banners,</button>&nbsp;
                            <button onClick={() => setTab(4)}>Promotional Banners,</button>&nbsp;
                            <button onClick={() => setTab(5)}> Product Banners</button>
                            &nbsp;<span>and</span>&nbsp;
                            <button onClick={() => setTab(6)}>Product Tiles</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(7)}>marketing analytics</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(8)}>brand in malls</button>
                        </li>
                        {/* <li className="mallpp_sigle_list">
                        Mange your mall’s facilities under{" "}
                        <button onClick={() => setTab(6)}>Facilities</button>
                    </li> */}
                    </ul>
                </div>

                {/* profile cards wrapp start */}
                <div className="mallpp_part2 mallpp_part2-mall-side-max-width">
                    <div className="mallpp_part2">
                        {/* single cards start */}
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd7"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_7})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">100% Native</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                                In-store’s unique marketing adds respembles the experience of stores
                                in a mall
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd7"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_7})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Fulfillment</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                                One buying journey, multiple fulfillment options with preference for
                                In-store.
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd7"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_orange_7})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Unified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                                Unified channel for retail brands to bring together consumers,
                                marketing & products
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd7"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_7})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Personalised</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                                The In-store platform takes personalised content advertising to a
                                whole new level
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd7"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_blue_7})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Intergrated Publishing</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                                Digital brand marketing/ advertising
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd7"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_7})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Simplified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                                The In-store platform offers small business and enterprise solutions
                            </p>
                        </div>
                        {/* single cards end */}
                    </div>
                </div>
                {/* profile cards wrapp end */}
            </div>

            <div className="mallpp_main_wrapp mallpp_main_wrapp-resp mall-display-none8">

                <div className="mallpp_part1">
                    <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.name && get_mall_auth_data.name}!</p>
                    {/* <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.retailers.name && get_mall_auth_data.retailers.name}!</p> */}

                    <h5 className="h5 mb_10">
                        Let’s start by setting up your account profile:
                    </h5>

                    <ul>
                        <li className="mallpp_sigle_list">
                            Populate your store profile with your store details under
                            <button onClick={() => setTab(2)}>Account Settings</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Upload marketing content via{" "}
                            <button onClick={() => setTab(3)}>Leaderboard Banners,</button>&nbsp;
                            <button onClick={() => setTab(4)}>Promotional Banners,</button>&nbsp;
                            <button onClick={() => setTab(5)}> Product Banners</button>
                            &nbsp;<span>and</span>&nbsp;
                            <button onClick={() => setTab(6)}>Product Tiles</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(7)}>marketing analytics</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(8)}>brand in malls</button>
                        </li>
                        {/* <li className="mallpp_sigle_list">
                        Mange your mall’s facilities under{" "}
                        <button onClick={() => setTab(6)}>Facilities</button>
                    </li> */}
                    </ul>
                </div>

                {/* profile cards wrapp start */}
                <div className="mallpp_part2 mallpp_part2-mall-side-max-width">
                    <div className="mallpp_part2">
                        {/* single cards start */}
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd8"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_8})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">100% Native</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
                                In-store’s unique marketing adds respembles the experience of stores
                                in a mall
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd8"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_8})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">Fulfillment</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
                                One buying journey, multiple fulfillment options with preference for
                                In-store.
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd8"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_orange_8})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">Unified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
                                Unified channel for retail brands to bring together consumers,
                                marketing & products
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd8"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_8})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">Personalised</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
                                The In-store platform takes personalised content advertising to a
                                whole new level
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd8"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_blue_8})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">Intergrated Publishing</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
                                Digital brand marketing/ advertising
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd8"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_8})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">Simplified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
                                The In-store platform offers small business and enterprise solutions
                            </p>
                        </div>
                        {/* single cards end */}
                    </div>
                </div>
                {/* profile cards wrapp end */}
            </div>

            <div className="mallpp_main_wrapp mallpp_main_wrapp-resp mall-display-none9">

                <div className="mallpp_part1">
                    <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.name && get_mall_auth_data.name}!</p>
                    {/* <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.retailers.name && get_mall_auth_data.retailers.name}!</p> */}

                    <h5 className="h5 mb_10">
                        Let’s start by setting up your account profile:
                    </h5>

                    <ul>
                        <li className="mallpp_sigle_list">
                            Populate your store profile with your store details under
                            <button onClick={() => setTab(2)}>Account Settings</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Upload marketing content via{" "}
                            <button onClick={() => setTab(3)}>Leaderboard Banners,</button>&nbsp;
                            <button onClick={() => setTab(4)}>Promotional Banners,</button>&nbsp;
                            <button onClick={() => setTab(5)}> Product Banners</button>
                            &nbsp;<span>and</span>&nbsp;
                            <button onClick={() => setTab(6)}>Product Tiles</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(7)}>marketing analytics</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(8)}>brand in malls</button>
                        </li>
                        {/* <li className="mallpp_sigle_list">
                        Mange your mall’s facilities under{" "}
                        <button onClick={() => setTab(6)}>Facilities</button>
                    </li> */}
                    </ul>
                </div>

                {/* profile cards wrapp start */}
                <div className="mallpp_part2 mallpp_part2-mall-side-max-width">
                    <div className="mallpp_part2">
                        {/* single cards start */}
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd9"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_9})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">100% Native</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                In-store’s unique marketing adds respembles the experience of stores
                                in a mall
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd9"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_9})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Fulfillment</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                One buying journey, multiple fulfillment options with preference for
                                In-store.
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd9"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_orange_9})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Unified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                Unified channel for retail brands to bring together consumers,
                                marketing & products
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd9"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_9})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Personalised</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                The In-store platform takes personalised content advertising to a
                                whole new level
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd9"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_blue_9})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Intergrated Publishing</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                Digital brand marketing/ advertising
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd9"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_9})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Simplified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                The In-store platform offers small business and enterprise solutions
                            </p>
                        </div>
                        {/* single cards end */}
                    </div>
                </div>
                {/* profile cards wrapp end */}
            </div>

            <div className="mallpp_main_wrapp mallpp_main_wrapp-resp mall-display-none10">

                <div className="mallpp_part1">
                    <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.name && get_mall_auth_data.name}!</p>
                    {/* <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.retailers.name && get_mall_auth_data.retailers.name}!</p> */}

                    <h5 className="h5 mb_10">
                        Let’s start by setting up your account profile:
                    </h5>

                    <ul>
                        <li className="mallpp_sigle_list">
                            Populate your store profile with your store details under
                            <button onClick={() => setTab(2)}>Account Settings</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Upload marketing content via{" "}
                            <button onClick={() => setTab(3)}>Leaderboard Banners,</button>&nbsp;
                            <button onClick={() => setTab(4)}>Promotional Banners,</button>&nbsp;
                            <button onClick={() => setTab(5)}> Product Banners</button>
                            &nbsp;<span>and</span>&nbsp;
                            <button onClick={() => setTab(6)}>Product Tiles</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(7)}>marketing analytics</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(8)}>brand in malls</button>
                        </li>
                        {/* <li className="mallpp_sigle_list">
                        Mange your mall’s facilities under{" "}
                        <button onClick={() => setTab(6)}>Facilities</button>
                    </li> */}
                    </ul>
                </div>

                {/* profile cards wrapp start */}
                <div className="mallpp_part2 mallpp_part2-mall-side-max-width">
                    <div className="mallpp_part2">
                        {/* single cards start */}
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd10"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_10})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">100% Native</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                In-store’s unique marketing adds respembles the experience of stores
                                in a mall
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd10"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_10})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Fulfillment</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                One buying journey, multiple fulfillment options with preference for
                                In-store.
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd10"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_orange_10})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Unified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                Unified channel for retail brands to bring together consumers,
                                marketing & products
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd10"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_10})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Personalised</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                The In-store platform takes personalised content advertising to a
                                whole new level
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd10"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_blue_10})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Intergrated Publishing</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                Digital brand marketing/ advertising
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd10"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_10})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Simplified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                The In-store platform offers small business and enterprise solutions
                            </p>
                        </div>
                        {/* single cards end */}
                    </div>
                </div>
                {/* profile cards wrapp end */}
            </div>

            <div className="mallpp_main_wrapp mallpp_main_wrapp-resp mall-display-none11">

                <div className="mallpp_part1">
                    <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.name && get_mall_auth_data.name}!</p>
                    {/* <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.retailers.name && get_mall_auth_data.retailers.name}!</p> */}

                    <h5 className="h5 mb_10">
                        Let’s start by setting up your account profile:
                    </h5>

                    <ul>
                        <li className="mallpp_sigle_list">
                            Populate your store profile with your store details under
                            <button onClick={() => setTab(2)}>Account Settings</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Upload marketing content via{" "}
                            <button onClick={() => setTab(3)}>Leaderboard Banners,</button>&nbsp;
                            <button onClick={() => setTab(4)}>Promotional Banners,</button>&nbsp;
                            <button onClick={() => setTab(5)}> Product Banners</button>
                            &nbsp;<span>and</span>&nbsp;
                            <button onClick={() => setTab(6)}>Product Tiles</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(7)}>marketing analytics</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(8)}>brand in malls</button>
                        </li>
                        {/* <li className="mallpp_sigle_list">
                        Mange your mall’s facilities under{" "}
                        <button onClick={() => setTab(6)}>Facilities</button>
                    </li> */}
                    </ul>
                </div>

                {/* profile cards wrapp start */}
                <div className="mallpp_part2 mallpp_part2-mall-side-max-width">
                    <div className="mallpp_part2">
                        {/* single cards start */}
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd11"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_11})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">100% Native</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                                In-store’s unique marketing adds respembles the experience of stores
                                in a mall
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd11"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_11})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">Fulfillment</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                                One buying journey, multiple fulfillment options with preference for
                                In-store.
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd11"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_orange_11})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">Unified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                                Unified channel for retail brands to bring together consumers,
                                marketing & products
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd11"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue_11})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">Personalised</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                                The In-store platform takes personalised content advertising to a
                                whole new level
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd11"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_blue_11})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">Intergrated Publishing</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                                Digital brand marketing/ advertising
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd11"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink_11})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">Simplified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                                The In-store platform offers small business and enterprise solutions
                            </p>
                        </div>
                        {/* single cards end */}
                    </div>
                </div>
                {/* profile cards wrapp end */}
            </div>

            <div className="mallpp_main_wrapp mallpp_main_wrapp-resp mall-display-none12">

                <div className="mallpp_part1">
                    <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.name && get_mall_auth_data.name}!</p>
                    {/* <p className="mall_part_1_heading">Welcome {get_mall_auth_data && get_mall_auth_data.retailers.name && get_mall_auth_data.retailers.name}!</p> */}

                    <h5 className="h5 mb_10">
                        Let’s start by setting up your account profile:
                    </h5>

                    <ul>
                        <li className="mallpp_sigle_list">
                            Populate your store profile with your store details under
                            <button onClick={() => setTab(2)}>Account Settings</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Upload marketing content via{" "}
                            <button onClick={() => setTab(3)}>Leaderboard Banners,</button>&nbsp;
                            <button onClick={() => setTab(4)}>Promotional Banners,</button>&nbsp;
                            <button onClick={() => setTab(5)}> Product Banners</button>
                            &nbsp;<span>and</span>&nbsp;
                            <button onClick={() => setTab(6)}>Product Tiles</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(7)}>marketing analytics</button>
                        </li>
                        <li className="mallpp_sigle_list">
                            Keep track of your{" "}
                            <button onClick={() => setTab(8)}>brand in malls</button>
                        </li>
                        {/* <li className="mallpp_sigle_list">
                        Mange your mall’s facilities under{" "}
                        <button onClick={() => setTab(6)}>Facilities</button>
                    </li> */}
                    </ul>
                </div>

                {/* profile cards wrapp start */}
                <div className="mallpp_part2 mallpp_part2-mall-side-max-width">
                    <div className="mallpp_part2">
                        {/* single cards start */}
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd12"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">100% Native</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                In-store’s unique marketing adds respembles the experience of stores
                                in a mall
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd12"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Fulfillment</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                One buying journey, multiple fulfillment options with preference for
                                In-store.
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd12"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_orange})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Unified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                Unified channel for retail brands to bring together consumers,
                                marketing & products
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd12"
                            style={{
                                backgroundImage: `url(${images.card_main_orange_blue})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Personalised</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                The In-store platform takes personalised content advertising to a
                                whole new level
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd12"
                            style={{
                                backgroundImage: `url(${images.card_main_pink_blue})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Intergrated Publishing</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                Digital brand marketing/ advertising
                            </p>
                        </div>
                        <div
                            className="mallpp_part2_card mallpp_part2_cardd12"
                            style={{
                                backgroundImage: `url(${images.card_main_blue_pink})`,
                                backgroundPosition: "center",
                            }}
                        >
                            <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Simplified</h5>
                            <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                                The In-store platform offers small business and enterprise solutions
                            </p>
                        </div>
                        {/* single cards end */}
                    </div>
                </div>
                {/* profile cards wrapp end */}
            </div>


        </div>
    )
}

export default RetailerProfile