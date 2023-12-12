import React from "react";
import "./MallProfilePart.css";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { MallHeroEdit } from "../../components";

const MallProfilePart = ({ setTab, get_mall_auth_data, sidebaropen }) => {
  return (
    <>
      <MallHeroEdit get_mall_auth_data={get_mall_auth_data} sidebaropen={sidebaropen} />
      <div className={`${sidebaropen ? '' : 'mall-profile-slider-off-margin'}`}>
        <div className="mallpp_main_wrapp mall-display-none">
          <div className="mallpp_part1">
            <p className="mall_part_1_heading">
              Welcome{" "}
              {get_mall_auth_data &&
                get_mall_auth_data.name &&
                get_mall_auth_data.name}
              !
            </p>
            <h5 className="h5 mb_10">
              Let’s start by setting up your account profile:
            </h5>

            <ul>
              <li className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </li>
              <li className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Retailers</button>
              </li>
              <li className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li>
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd"
              style={{
                background:"#ff8b00",
                // backgroundImage: `url(${images.card_main_blue_pink})`,
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">100% Native</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                In-store’s unique marketing adds respembles the experience of
                stores in a mall
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Fulfillment</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                One buying journey, multiple fulfillment options with preference
                for In-store.
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange})`,
                background:"#ff8b00",
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
                // backgroundImage: `url(${images.card_main_orange_blue})`,
                background:"#000",
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
                // backgroundImage: `url(${images.card_main_pink_blue})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                Intergrated Publishing
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                Digital brand marketing/ advertising
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Simplified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                The In-store platform offers small business and enterprise
                solutions
              </p>
            </div>
            {/* single cards end */}
          </div>
          {/* profile cards wrapp end */}
        </div>

        <div className="mallpp_main_wrapp mall-display-none2">
          <div className="mallpp_part1">
            <p className="mall_part_1_heading">
              Welcome{" "}
              {get_mall_auth_data &&
                get_mall_auth_data.name &&
                get_mall_auth_data.name}
              !
            </p>
            <h5 className="h5 mb_10">
              Let’s start by setting up your account profile:
            </h5>

            <ul>
              <li className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </li>
              <li className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Retailers</button>
              </li>
              <li className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li>
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap" >
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd2"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_2})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">100% Native</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                In-store’s unique marketing adds respembles the experience of
                stores in a mall
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd2"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_2})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Fulfillment</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                One buying journey, multiple fulfillment options with preference
                for In-store.
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd2"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_2})`,
                background:"#ff8b00",
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
                // backgroundImage: `url(${images.card_main_orange_blue_2})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_description_big2">Personalised</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                The In-store platform takes personalised content advertising to a
                whole new level
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd2"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue_2})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">
                Intergrated Publishing
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                Digital brand marketing/ advertising
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd2"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_2})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Simplified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                The In-store platform offers small business and enterprise
                solutions
              </p>
            </div>
            {/* single cards end */}
          </div>
          {/* profile cards wrapp end */}
        </div>

        <div className="mallpp_main_wrapp mall-display-none3">
          <div className="mallpp_part1">
            <p className="mall_part_1_heading">
              Welcome{" "}
              {get_mall_auth_data &&
                get_mall_auth_data.name &&
                get_mall_auth_data.name}
              !
            </p>
            <h5 className="h5 mb_10">
              Let’s start by setting up your account profile:
            </h5>

            <ul>
              <li className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </li>
              <li className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Retailers</button>
              </li>
              <li className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li>
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap" >
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd3"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_3})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big3">100% Native</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big3">
                In-store’s unique marketing adds respembles the experience of
                stores in a mall
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd3"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_3})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Fulfillment</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                One buying journey, multiple fulfillment options with preference
                for In-store.
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd3"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_3})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big mallpp_part2_card_description_big2">Unified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                Unified channel for retail brands to bring together consumers,
                marketing & products
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd3"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_3})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big mallpp_part2_card_description_big2">Personalised</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                The In-store platform takes personalised content advertising to a
                whole new level
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd3"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue_3})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">
                Intergrated Publishing
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                Digital brand marketing/ advertising
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd3"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_3})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Simplified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                The In-store platform offers small business and enterprise
                solutions
              </p>
            </div>
            {/* single cards end */}
          </div>
          {/* profile cards wrapp end */}
        </div>

        <div className="mallpp_main_wrapp mall-display-none4">
          <div className="mallpp_part1">
            <p className="mall_part_1_heading">
              Welcome{" "}
              {get_mall_auth_data &&
                get_mall_auth_data.name &&
                get_mall_auth_data.name}
              !
            </p>
            <h5 className="h5 mb_10">
              Let’s start by setting up your account profile:
            </h5>

            <ul>
              <li className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </li>
              <li className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Retailers</button>
              </li>
              <li className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li>
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap" >
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd4"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_4})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big3">100% Native</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big3">
                In-store’s unique marketing adds respembles the experience of
                stores in a mall
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd4"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_4})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Fulfillment</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                One buying journey, multiple fulfillment options with preference
                for In-store.
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd4"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_4})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big mallpp_part2_card_description_big2">Unified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                Unified channel for retail brands to bring together consumers,
                marketing & products
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd4"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_4})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big mallpp_part2_card_description_big2">Personalised</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                The In-store platform takes personalised content advertising to a
                whole new level
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd4"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue_4})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">
                Intergrated Publishing
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                Digital brand marketing/ advertising
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd4"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_4})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">Simplified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                The In-store platform offers small business and enterprise
                solutions
              </p>
            </div>
            {/* single cards end */}
          </div>
          {/* profile cards wrapp end */}
        </div>

        <div className="mallpp_main_wrapp mall-display-none5">
          <div className="mallpp_part1">
            <p className="mall_part_1_heading">
              Welcome{" "}
              {get_mall_auth_data &&
                get_mall_auth_data.name &&
                get_mall_auth_data.name}
              !
            </p>
            <h5 className="h5 mb_10">
              Let’s start by setting up your account profile:
            </h5>

            <ul>
              <li className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </li>
              <li className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Retailers</button>
              </li>
              <li className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li>
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap" >
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd5"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_5})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading">100% Native</h5>
              <p className="mallpp_part2_card_description">
                In-store’s unique marketing adds respembles the experience of
                stores in a mall
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd5"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_5})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading">Fulfillment</h5>
              <p className="mallpp_part2_card_description">
                One buying journey, multiple fulfillment options with preference
                for In-store.
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd5"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_5})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading">Unified</h5>
              <p className="mallpp_part2_card_description">S
                Unified channel for retail brands to bring together consumers,
                marketing & products
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd5"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_5})`,
                background:"#000",
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
                // backgroundImage: `url(${images.card_main_pink_blue_5})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading">
                Intergrated Publishing
              </h5>
              <p className="mallpp_part2_card_description">
                Digital brand marketing/ advertising
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd5"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_5})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading">Simplified</h5>
              <p className="mallpp_part2_card_description">
                The In-store platform offers small business and enterprise
                solutions
              </p>
            </div>
            {/* single cards end */}
          </div>
          {/* profile cards wrapp end */}
        </div>

        <div className="mallpp_main_wrapp mall-display-none6">
          <div className="mallpp_part1">
            <p className="mall_part_1_heading">
              Welcome{" "}
              {get_mall_auth_data &&
                get_mall_auth_data.name &&
                get_mall_auth_data.name}
              !
            </p>
            <h5 className="h5 mb_10">
              Let’s start by setting up your account profile:
            </h5>

            <ul>
              <li className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </li>
              <li className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Retailers</button>
              </li>
              <li className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li>
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap" >
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd6"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_6})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">100% Native</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                In-store’s unique marketing adds respembles the experience of
                stores in a mall
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd6"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_6})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Fulfillment</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                One buying journey, multiple fulfillment options with preference
                for In-store.
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd6"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_6})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Unified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">S
                Unified channel for retail brands to bring together consumers,
                marketing & products
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd6"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_6})`,
                background:"#000",
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
                // backgroundImage: `url(${images.card_main_pink_blue_6})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">
                Intergrated Publishing
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                Digital brand marketing/ advertising
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd6"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_6})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Simplified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                The In-store platform offers small business and enterprise
                solutions
              </p>
            </div>
            {/* single cards end */}
          </div>
          {/* profile cards wrapp end */}
        </div>

        <div className="mallpp_main_wrapp mall-display-none7">
          <div className="mallpp_part1">
            <p className="mall_part_1_heading">
              Welcome{" "}
              {get_mall_auth_data &&
                get_mall_auth_data.name &&
                get_mall_auth_data.name}
              !
            </p>
            <h5 className="h5 mb_10">
              Let’s start by setting up your account profile:
            </h5>

            <ul>
              <li className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </li>
              <li className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Retailers</button>
              </li>
              <li className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li>
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap" >
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd7"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_7})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">100% Native</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                In-store’s unique marketing adds respembles the experience of
                stores in a mall
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd7"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_7})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Fulfillment</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                One buying journey, multiple fulfillment options with preference
                for In-store.
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd7"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_7})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Unified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">S
                Unified channel for retail brands to bring together consumers,
                marketing & products
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd7"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_7})`,
                background:"#000",
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
                // backgroundImage: `url(${images.card_main_pink_blue_7})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">
                Intergrated Publishing
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                Digital brand marketing/ advertising
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd7"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_7})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">Simplified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                The In-store platform offers small business and enterprise
                solutions
              </p>
            </div>
            {/* single cards end */}
          </div>
          {/* profile cards wrapp end */}
        </div>

        <div className="mallpp_main_wrapp mall-display-none8">
          <div className="mallpp_part1">
            <p className="mall_part_1_heading">
              Welcome{" "}
              {get_mall_auth_data &&
                get_mall_auth_data.name &&
                get_mall_auth_data.name}
              !
            </p>
            <h5 className="h5 mb_10">
              Let’s start by setting up your account profile:
            </h5>

            <ul>
              <li className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </li>
              <li className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Retailers</button>
              </li>
              <li className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li>
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd8"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_8})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">100% Native</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                In-store’s unique marketing adds respembles the experience of
                stores in a mall
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd8"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_8})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">Fulfillment</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
                One buying journey, multiple fulfillment options with preference
                for In-store.
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd8"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_8})`,
                background:"#ff8b00",
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
                // backgroundImage: `url(${images.card_main_orange_blue_8})`,
                background:"#000",
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
                // backgroundImage: `url(${images.card_main_pink_blue_8})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">
                Intergrated Publishing
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
                Digital brand marketing/ advertising
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd8"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_8})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">Simplified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
                The In-store platform offers small business and enterprise
                solutions
              </p>
            </div>
            {/* single cards end */}
          </div>
          {/* profile cards wrapp end */}
        </div>

        <div className="mallpp_main_wrapp mall-display-none9">
          <div className="mallpp_part1">
            <p className="mall_part_1_heading">
              Welcome{" "}
              {get_mall_auth_data &&
                get_mall_auth_data.name &&
                get_mall_auth_data.name}
              !
            </p>
            <h5 className="h5 mb_10">
              Let’s start by setting up your account profile:
            </h5>

            <ul>
              <li className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </li>
              <li className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Retailers</button>
              </li>
              <li className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li>
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd9"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_9})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">100% Native</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                In-store’s unique marketing adds respembles the experience of
                stores in a mall
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd9"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_9})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Fulfillment</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                One buying journey, multiple fulfillment options with preference
                for In-store.
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd9"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_9})`,
                background:"#ff8b00",
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
                // backgroundImage: `url(${images.card_main_orange_blue_9})`,
                background:"#000",
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
                // backgroundImage: `url(${images.card_main_pink_blue_9})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                Intergrated Publishing
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                Digital brand marketing/ advertising
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd9"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_9})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Simplified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                The In-store platform offers small business and enterprise
                solutions
              </p>
            </div>
            {/* single cards end */}
          </div>
          {/* profile cards wrapp end */}
        </div>

        <div className="mallpp_main_wrapp mall-display-none10">
          <div className="mallpp_part1">
            <p className="mall_part_1_heading">
              Welcome{" "}
              {get_mall_auth_data &&
                get_mall_auth_data.name &&
                get_mall_auth_data.name}
              !
            </p>
            <h5 className="h5 mb_10">
              Let’s start by setting up your account profile:
            </h5>

            <ul>
              <li className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </li>
              <li className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Retailers</button>
              </li>
              <li className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li>
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd10"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_10})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">100% Native</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                In-store’s unique marketing adds respembles the experience of
                stores in a mall
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd10"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_10})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Fulfillment</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                One buying journey, multiple fulfillment options with preference
                for In-store.
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd10"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_10})`,
                background:"#ff8b00",
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
                // backgroundImage: `url(${images.card_main_orange_blue_10})`,
                background:"#000",
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
                // backgroundImage: `url(${images.card_main_pink_blue_10})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                Intergrated Publishing
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                Digital brand marketing/ advertising
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd10"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_10})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Simplified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                The In-store platform offers small business and enterprise
                solutions
              </p>
            </div>
            {/* single cards end */}
          </div>
          {/* profile cards wrapp end */}
        </div>

        <div className="mallpp_main_wrapp mall-display-none11">
          <div className="mallpp_part1">
            <p className="mall_part_1_heading">
              Welcome{" "}
              {get_mall_auth_data &&
                get_mall_auth_data.name &&
                get_mall_auth_data.name}
              !
            </p>
            <h5 className="h5 mb_10">
              Let’s start by setting up your account profile:
            </h5>

            <ul>
              <li className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </li>
              <li className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Retailers</button>
              </li>
              <li className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li>
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd11"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_11})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">100% Native</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                In-store’s unique marketing adds respembles the experience of
                stores in a mall
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd11"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_11})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">Fulfillment</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                One buying journey, multiple fulfillment options with preference
                for In-store.
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd11"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_11})`,
                background:"#ff8b00",
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
                // backgroundImage: `url(${images.card_main_orange_blue_11})`,
                background:"#000",
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
                // backgroundImage: `url(${images.card_main_pink_blue_11})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">
                Intergrated Publishing
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                Digital brand marketing/ advertising
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd11"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_11})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">Simplified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                The In-store platform offers small business and enterprise
                solutions
              </p>
            </div>
            {/* single cards end */}
          </div>
          {/* profile cards wrapp end */}
        </div>

        <div className="mallpp_main_wrapp mall-display-none12">
          <div className="mallpp_part1">
            <p className="mall_part_1_heading">
              Welcome{" "}
              {get_mall_auth_data &&
                get_mall_auth_data.name &&
                get_mall_auth_data.name}
              !
            </p>
            <h5 className="h5 mb_10">
              Let’s start by setting up your account profile:
            </h5>

            <ul>
              <li className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </li>
              <li className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Retailers</button>
              </li>
              <li className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </li>
              <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li>
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd12"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">100% Native</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                In-store’s unique marketing adds respembles the experience of
                stores in a mall
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd12"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Fulfillment</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                One buying journey, multiple fulfillment options with preference
                for In-store.
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd12"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange})`,
                background:"#ff8b00",
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
                // backgroundImage: `url(${images.card_main_orange_blue})`,
                background:"#000",
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
                // backgroundImage: `url(${images.card_main_pink_blue})`,
                background:"#ff8b00",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                Intergrated Publishing
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                Digital brand marketing/ advertising
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd12"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Simplified</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                The In-store platform offers small business and enterprise
                solutions
              </p>
            </div>
            {/* single cards end */}
          </div>
          {/* profile cards wrapp end */}
        </div>
      </div>

    </>
  );
};

export default MallProfilePart;
