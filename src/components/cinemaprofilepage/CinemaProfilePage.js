import React, { useEffect, useState } from "react";
import "./CinemaProfilePage.css";
import { CinemaHeroEdit } from "../../components";
import { ACCEPT_HEADER, get_welcome_page } from "../../utils/Constant";
import axios from "axios";

const CinemaProfilePage = ({ setTab, get_mall_auth_data, sidebaropen }) => {


  const [welData,setWelData] = useState()
  const [loading,setLoading] = useState()

  const getWelcomeData = async () => {
    console.log("dtttttr")
    setLoading(true);

    const token = await JSON.parse(localStorage.getItem("is_token"));
    axios
      .get(get_welcome_page, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.data.success == 1) {
          setWelData(res.data.data);
          console.log("wel data are",welData);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("errr", err);
        setLoading(false)
      });
  };

  useEffect(()=>{
    getWelcomeData();
  },[])
  return (
    <>
      <CinemaHeroEdit
        get_mall_auth_data={get_mall_auth_data}
        sidebaropen={sidebaropen}
        setTab={setTab}
      />
      {/* <div className={`${sidebaropen ? '' : 'mall-profile-slider-off-margin'}`}> */}

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
      ) :(
      <div className="mall_profilepage_padding">
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
              <div>
                <li className="mallpp_sigle_list">
                  Populate your store profile with your store details under
                  <button
                    onClick={() => setTab(2)}
                    style={{ fontWeight: "600" }}>
                    Account Settings
                  </button>
                </li>
              </div>
              <li className="mallpp_sigle_list">
                Upload marketing content via{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}>
                  {" "}
                  Product Tiles
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>
                  &nbsp; marketing analytics
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>
                  &nbsp; brand in malls
                </button>
              </li>
              {/* <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li> */}
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title2 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message2: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
              {welData ? welData.title3 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message3: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title4 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message4: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message5: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title6 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message6: ""}
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
                Populate your store profile with your store details under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>
                  Account Settings
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Upload marketing content via{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}>
                  {" "}
                  Product Tiles
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>
                  &nbsp; marketing analytics
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>
                  &nbsp; brand in malls
                </button>
              </li>
              {/* <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li> */}
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd2"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_2})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">
                {welData ? welData.title : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd2"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_2})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">
                {welData ? welData.title2 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message2: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd2"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_2})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">
              {welData ? welData.title3 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message3: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd2"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_2})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_description_big2">
                {welData ? welData.title4 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message4: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd2"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue_2})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">
                {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message5: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd2"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_2})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">
                {welData ? welData.title6 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message6: ""}
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
                Populate your store profile with your store details under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>
                  Account Settings
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Upload marketing content via{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}>
                  {" "}
                  Product Tiles
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>
                  &nbsp; marketing analytics
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>
                  &nbsp; brand in malls
                </button>
              </li>
              {/* <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li> */}
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd3"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_3})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big3">
                {welData ? welData.title : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big3">
                {welData ? welData.message: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd3"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_3})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">
                {welData ? welData.title2 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message2: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd3"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_3})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big mallpp_part2_card_description_big2">
              {welData ? welData.title3 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message3: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd3"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_3})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big mallpp_part2_card_description_big2">
                {welData ? welData.title4 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message4: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd3"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue_3})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">
                {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message5: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd3"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_3})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">
                {welData ? welData.title6 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message6: ""}
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

            <div>
              <div className="cinema_profile_bullet">
                <div>●</div>
                <div className="mallpp_sigle_list">
                  Populate your store profile with your store details under{" "}
                  <button
                    onClick={() => setTab(2)}
                    style={{ fontWeight: "600" }}>
                    Account Settings
                  </button>
                </div>
              </div>
              <div className="cinema_profile_bullet">
                <div>●</div>
                <div className="mallpp_sigle_list">
                  Upload marketing content via{" "}
                  <button
                    onClick={() => setTab(3)}
                    style={{ fontWeight: "600" }}>
                    {" "}
                    Product Tiles
                  </button>
                </div>
              </div>
              <div className="cinema_profile_bullet">
                <div>●</div>
                <div className="mallpp_sigle_list">
                  Keep track of your
                  <button
                    onClick={() => setTab(4)}
                    style={{ fontWeight: "600" }}>
                    &nbsp; marketing analytics
                  </button>
                </div>
              </div>
              <div className="cinema_profile_bullet">
                <div>●</div>
                <div className="mallpp_sigle_list">
                  Keep track of your
                  <button
                    onClick={() => setTab(5)}
                    style={{ fontWeight: "600" }}>
                    &nbsp; brand in malls
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd4"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_4})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big3">
                {welData ? welData.title : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big3">
                {welData ? welData.message: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd4"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_4})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">
                {welData ? welData.title2 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message2: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd4"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_4})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big mallpp_part2_card_description_big2">
              {welData ? welData.title3 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message3: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd4"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_4})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big mallpp_part2_card_description_big2">
                {welData ? welData.title4 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message4: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd4"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue_4})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">
                {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message5: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd4"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_4})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">
                {welData ? welData.title6 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
                {welData ? welData.message6: ""}
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

            <div>
              <div className="cinema_profile_bullet">
                <div>
                  <b>●</b>
                </div>
                <div className="mallpp_sigle_list">
                  Populate your store profile with your store details under{" "}
                  <button
                    onClick={() => setTab(2)}
                    style={{ fontWeight: "600" }}>
                    Account Settings
                  </button>
                </div>
              </div>
              <div className="cinema_profile_bullet">
                <div>
                  <b>●</b>
                </div>
                <div className="mallpp_sigle_list">
                  Upload marketing content via{" "}
                  <button
                    onClick={() => setTab(3)}
                    style={{ fontWeight: "600" }}>
                    Product Tiles
                  </button>
                </div>
              </div>
              <div className="cinema_profile_bullet">
                <div>
                  <b>●</b>
                </div>
                <div className="mallpp_sigle_list">
                  Keep track of your
                  <button
                    onClick={() => setTab(4)}
                    style={{ fontWeight: "600" }}>
                    marketing analytics{" "}
                  </button>
                </div>
              </div>
              <div className="cinema_profile_bullet">
                <div>
                  <b>●</b>
                </div>
                <div className="mallpp_sigle_list">
                  Keep track of your
                  <button
                    onClick={() => setTab(5)}
                    style={{ fontWeight: "600" }}>
                    &nbsp; brand in malls
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd5"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_5})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading">{welData ? welData.title : ""}</h5>
              <p className="mallpp_part2_card_description">
                {welData ? welData.message: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd5"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_5})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading">{welData ? welData.title2 : ""}</h5>
              <p className="mallpp_part2_card_description">
                {welData ? welData.message2: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd5"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_5})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading">{welData ? welData.title3 : ""}</h5>
              <p className="mallpp_part2_card_description">
                S {welData ? welData.message3: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd5"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_5})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading">{welData ? welData.title4 : ""}</h5>
              <p className="mallpp_part2_card_description">
                {welData ? welData.message4: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd5"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue_5})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading">
                {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description">
                {welData ? welData.message5: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd5"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_5})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading">{welData ? welData.title6 : ""}</h5>
              <p className="mallpp_part2_card_description">
                {welData ? welData.message6: ""}
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
                Populate your store profile with your store details under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>
                  Account Settings
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Upload marketing content via{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}>
                  {" "}
                  Product Tiles
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>
                  &nbsp; marketing analytics
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>
                  &nbsp; brand in malls
                </button>
              </li>
              {/* <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li> */}
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd6"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_6})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">
                {welData ? welData.title : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                {welData ? welData.message: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd6"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_6})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">
                {welData ? welData.title2 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                {welData ? welData.message2: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd6"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_6})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">
              {welData ? welData.title3 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                S {welData ? welData.message3: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd6"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_6})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">
                {welData ? welData.title4 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                {welData ? welData.message4: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd6"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue_6})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">
                {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                {welData ? welData.message5: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd6"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_6})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">
                {welData ? welData.title6 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
                {welData ? welData.message6: ""}
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

            <div>
              <div className="cinema_profile_bullet">
                <div>●</div>
                <div className="mallpp_sigle_list">
                  Populate your store profile with your store details under{" "}
                  <button
                    onClick={() => setTab(2)}
                    style={{ fontWeight: "600" }}>
                    Account Settings
                  </button>
                </div>
              </div>
              <div className="cinema_profile_bullet">
                <div>●</div>
                <div className="mallpp_sigle_list">
                  Upload marketing content via
                  <button
                    onClick={() => setTab(3)}
                    style={{ fontWeight: "600" }}>
                    Product Tiles
                  </button>
                </div>
              </div>
              <div className="cinema_profile_bullet">
                <div>●</div>
                <div className="mallpp_sigle_list">
                  Keep track of your
                  <button
                    onClick={() => setTab(4)}
                    style={{ fontWeight: "600" }}>
                    &nbsp; marketing analytics
                  </button>
                </div>
              </div>
              <div className="cinema_profile_bullet">
                <div>●</div>
                <div className="mallpp_sigle_list">
                  Keep track of your
                  <button
                    onClick={() => setTab(5)}
                    style={{ fontWeight: "600" }}>
                    &nbsp; brand in malls
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd7"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_7})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">
                {welData ? welData.title : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                {welData ? welData.message: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd7"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_7})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">
                {welData ? welData.title2 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                {welData ? welData.message2: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd7"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_7})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">
              {welData ? welData.title3 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                S {welData ? welData.message3: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd7"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_7})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">
                {welData ? welData.title4 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                {welData ? welData.message4: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd7"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue_7})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">
                {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                {welData ? welData.message5: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd7"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_7})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">
                {welData ? welData.title6 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
                {welData ? welData.message6: ""}
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
                Populate your store profile with your store details under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>
                  Account Settings
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Upload marketing content via{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}>
                  {" "}
                  Product Tiles
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>
                  &nbsp; marketing analytics
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>
                  &nbsp; brand in malls
                </button>
              </li>
              {/* <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li> */}
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd8"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_8})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd8"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_8})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">
                {welData ? welData.title2 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
                {welData ? welData.message2: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd8"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_8})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">
              {welData ? welData.title3 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
                {welData ? welData.message3: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd8"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_8})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">
                {welData ? welData.title4 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
                {welData ? welData.message4: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd8"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue_8})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">
                {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
                {welData ? welData.message5: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd8"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_8})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">
                {welData ? welData.title6 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
                {welData ? welData.message6: ""}
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
                Populate your store profile with your store details under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>
                  Account Settings
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Upload marketing content via{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}>
                  {" "}
                  Product Tiles
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>
                  &nbsp; marketing analytics
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>
                  &nbsp; brand in malls
                </button>
              </li>
              {/* <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li> */}
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd9"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_9})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd9"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_9})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title2 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message2: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd9"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_9})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
              {welData ? welData.title3 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message3: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd9"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_9})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title4 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message4: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd9"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue_9})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message5: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd9"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_9})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title6 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message6: ""}
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
                Populate your store profile with your store details under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>
                  Account Settings
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Upload marketing content via{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}>
                  {" "}
                  Product Tiles
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>
                  &nbsp; marketing analytics
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>
                  &nbsp; brand in malls
                </button>
              </li>
              {/* <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li> */}
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd10"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_10})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd10"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_10})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title2 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message2: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd10"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_10})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
              {welData ? welData.title3 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message3: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd10"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_10})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title4 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message4: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd10"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue_10})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message5: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd10"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_10})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title6 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message6: ""}
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
                Populate your store profile with your store details under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>
                  Account Settings
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Upload marketing content via{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}>
                  {" "}
                  Product Tiles
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>
                  &nbsp; marketing analytics
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>
                  &nbsp; brand in malls
                </button>
              </li>
              {/* <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li> */}
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd11"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_11})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">
                {welData ? welData.title : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                {welData ? welData.message: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd11"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_11})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">
                {welData ? welData.title2 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                {welData ? welData.message2: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd11"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange_11})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">
              {welData ? welData.title3 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                {welData ? welData.message3: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd11"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue_11})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">
                {welData ? welData.title4 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                {welData ? welData.message4: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd11"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue_11})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">
                {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                {welData ? welData.message5: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd11"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_11})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">
                {welData ? welData.title6 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
                {welData ? welData.message6: ""}
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
                Populate your store profile with your store details under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>
                  Account Settings
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Upload marketing content via{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}>
                  {" "}
                  Product Tiles
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>
                  &nbsp; marketing analytics
                </button>
              </li>
              <li className="mallpp_sigle_list">
                Keep track of your
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>
                  &nbsp; brand in malls
                </button>
              </li>
              {/* <li className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </li> */}
            </ul>
          </div>

          {/* profile cards wrapp start */}
          <div className="mallpp_part2 mallpp_part2-mall-side-max-width mall-profile-gap">
            {/* single cards start */}
            <div
              className="mallpp_part2_card mallpp_part2_cardd12"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd12"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title2 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message2: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd12"
              style={{
                // backgroundImage: `url(${images.card_main_pink_orange})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
              {welData ? welData.title3 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message3: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd12"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title4 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message4: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd12"
              style={{
                // backgroundImage: `url(${images.card_main_pink_blue})`,
                // backgroundPosition: "center",
                backgroundColor: "#ff8b00",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message5: ""}
              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd12"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink})`,
                // backgroundPosition: "center",
                backgroundColor: "#000",
              }}>
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">
                {welData ? welData.title6 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
                {welData ? welData.message6: ""}
              </p>
            </div>
            {/* single cards end */}
          </div>
          {/* profile cards wrapp end */}
        </div>
      </div>)}
    </>
  );
};

export default CinemaProfilePage;