import React, { useEffect } from "react";
import "./MallProfilePart.css";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { MallHeroEdit } from "../../components";
import { ACCEPT_HEADER, get_welcome_page } from "../../utils/Constant";
import { useState } from "react";
import axios from "axios";

const MallProfilePart = ({ setTab, get_mall_auth_data, sidebaropen }) => {

  const [welData,setWelData] = useState()
  const [loading,setLoading] = useState()


  const getWelcomeData = async () => {
    console.log("dtttttr");
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
      <MallHeroEdit get_mall_auth_data={get_mall_auth_data} sidebaropen={sidebaropen} setTab={setTab} />
      {/* <div className={`${sidebaropen ? 'mall-profile-slider-off-margin' : ''}`} style={{paddingLeft:"5rem",paddingRight:"5rem"}}> */}

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
            <h5 className="h5 mb_10" style={{fontWeight:"600 !important" }}>
              Let’s start by setting up your account profile:
            </h5>
            <div>
            <div className="cinema_profile_bullet">
            <div>●</div>
              <div className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Brands</button>
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Edit your
                <button onClick={() => setTab()} style={{ fontWeight: "600" }}>&nbsp;Eateries</button>
              </div>
              </div>
              <div className="cinema_profile_bullet">
              
              <div>●</div>
              <li className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </li>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </div>
              </div>
             
            </div>
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message : ""}              </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd"
              style={{
                // backgroundImage: `url(${images.card_main_orange_blue})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title2 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message2 : ""}
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title3 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message3 : ""}
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title4 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message4 : ""}
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
              {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message5 : ""}   
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title6 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message6 : ""}
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

            <div>
            <div className="cinema_profile_bullet">
            <div>●</div>
              <div className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </div>
              
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Brands</button>
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </div>
              </div>
             <div className="cinema_profile_bullet">
             <div>●</div>
              <div className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </div>
              </div>
            </div>
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">{welData ? welData.title : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message : ""}
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">{welData ? welData.title2 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message2 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">{welData ? welData.title3 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message3 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_description_big2">{welData ? welData.title4 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message4 : ""}

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
              {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message5 : ""} 
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">{welData ? welData.title6 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message6 : ""}

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

            <div>
            <div className="cinema_profile_bullet">
            <div>●</div>
            <div className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </div>
            </div>
             
             <div className="cinema_profile_bullet">
               <div>●</div>
               <div className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Brands</button>
              </div>
             </div>
             
             <div className="cinema_profile_bullet">
             <div>●</div>
             <div className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </div>
             </div>
             
             <div  className="cinema_profile_bullet">
             <div>●</div>
              <div className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </div>
              </div>
              <div  className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </div>
              </div>
              
            </div>
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big3">{welData ? welData.title : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big3">
              {welData ? welData.message : ""}
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">{welData ? welData.title2 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message2 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big mallpp_part2_card_description_big2">{welData ? welData.title3 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message3 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big mallpp_part2_card_description_big2">{welData ? welData.title4 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message4 : ""}

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
              {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message5 : ""}               </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd3"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_3})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">{welData ? welData.title6 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message6 : ""}

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
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </div>
            </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Brands</button>
              </div>
              </div>
             <div className="cinema_profile_bullet">
             <div>●</div>
             <div className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </div>
             </div>
              
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </div>
              </div>
              
            </div>
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big3">{welData ? welData.title : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big3">
              {welData ? welData.message : ""}
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">{welData ? welData.title2 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message2 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big mallpp_part2_card_description_big2">{welData ? welData.title3 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message3 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big mallpp_part2_card_description_big2">{welData ? welData.title4 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message4 : ""}

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
              {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message5 : ""}               </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd4"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_4})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big2">{welData ? welData.title6 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big2">
              {welData ? welData.message6 : ""}

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
            <div>●</div>
              <div className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Brands</button>
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </div>
              </div>
             <div className="cinema_profile_bullet">
             <div>●</div>
              <div className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </div>
              </div>
              
            </div>
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
              <h5 className="mallpp_part2_card_heading">{welData ? welData.title : ""}</h5>
              <p className="mallpp_part2_card_description">
              {welData ? welData.message : ""}
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
              <h5 className="mallpp_part2_card_heading">{welData ? welData.title2 : ""}</h5>
              <p className="mallpp_part2_card_description">
              {welData ? welData.message2 : ""}

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
              <h5 className="mallpp_part2_card_heading">{welData ? welData.title3 : ""}</h5>
              <p className="mallpp_part2_card_description">S
              {welData ? welData.message3 : ""}

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
              <h5 className="mallpp_part2_card_heading">{welData ? welData.title4 : ""}</h5>
              <p className="mallpp_part2_card_description">
              {welData ? welData.message4 : ""}

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
              {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description">
              {welData ? welData.message5 : ""}               </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd5"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_5})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading">{welData ? welData.title6 : ""}</h5>
              <p className="mallpp_part2_card_description">
              {welData ? welData.message6 : ""}

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

            <div>
            <div className="cinema_profile_bullet">
            <div>●</div>
              <div className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Brands</button>
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </div>
              </div>
             <div className="cinema_profile_bullet">
             <div>●</div>
              <div className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </div>
              </div>
            </div>
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">{welData ? welData.title : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
              {welData ? welData.message : ""}
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">{welData ? welData.title2 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
              {welData ? welData.message2 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">{welData ? welData.title3 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">S
              {welData ? welData.message3 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">{welData ? welData.title4 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
              {welData ? welData.message4 : ""}

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
              {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
              {welData ? welData.message5 : ""}               </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd6"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_6})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">{welData ? welData.title6 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big6">
              {welData ? welData.message6 : ""}

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
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Brands</button>
              </div>
              </div>
             <div className="cinema_profile_bullet">
             <div>●</div>
              <div className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </div>
              </div>
              
            </div>
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">{welData ? welData.title : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
              {welData ? welData.message : ""}
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">{welData ? welData.title2 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
              {welData ? welData.message2 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">{welData ? welData.title3 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">S
              {welData ? welData.message3 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">{welData ? welData.title4 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
              {welData ? welData.message4 : ""}

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
              {welData ? welData.title5 : ""}
              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
              {welData ? welData.message5 : ""}               </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd7"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_7})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big6">{welData ? welData.title6 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big7">
              {welData ? welData.message6 : ""}

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

            <div>
            <div className="cinema_profile_bullet">
            <div>●</div>
            <div className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </div>
            </div>
             <div className="cinema_profile_bullet">
             <div>●</div>
             <div className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Brands</button>
              </div>
             </div>
              <div  className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </div>
              </div>
            </div>
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message : ""}
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">{welData ? welData.title2 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
              {welData ? welData.message2 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">{welData ? welData.title3 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
              {welData ? welData.message3 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">{welData ? welData.title4 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
              {welData ? welData.message4 : ""}

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
              {welData ? welData.title5 : ""}              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
              {welData ? welData.message5 : ""}               </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd8"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_8})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big8">{welData ? welData.title6 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big8">
              {welData ? welData.message6 : ""}

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

            <div>
            <div className="cinema_profile_bullet">
            <div>●</div>
            <div className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </div>
            </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Brands</button>
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </div>
              </div>
              
            </div>
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message : ""}
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title2 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message2 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title3 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message3 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title4 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message4 : ""}

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
              {welData ? welData.title5 : ""}              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message5 : ""}               </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd9"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_9})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title6 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message6 : ""}

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

            <div>
            <div className="cinema_profile_bullet">
            <div>●</div>
            <div className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </div>
            </div>
             <div className="cinema_profile_bullet">
             <div>●</div>
             <div className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Brands</button>
              </div>
             </div>
             <div className="mallpp_sigle_list">
             <div>●</div>
              <div className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </div>
              </div>
              
            </div>
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message : ""}
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title2 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message2 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title3 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message3 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title4 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message4 : ""}

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
              {welData ? welData.title5 : ""}              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message5 : ""}               </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd10"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_10})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">Simplif{welData ? welData.title6 : ""}ied</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message6 : ""}

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

            <div>
            <div className="cinema_profile_bullet">
            <div>●</div>
            <div className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </div>
            </div>
             <div className="cinema_profile_bullet">
             <div>●</div>
             <div className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Brands</button>
              </div>
             </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </div>
              </div>
            </div>
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">{welData ? welData.title : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
              {welData ? welData.message : ""}
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">{welData ? welData.title2 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
              {welData ? welData.message2 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">{welData ? welData.title3 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
              {welData ? welData.message3 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">{welData ? welData.title4 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
              {welData ? welData.message4 : ""}

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
              {welData ? welData.title5 : ""}              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
              {welData ? welData.message5 : ""}               </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd11"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink_11})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big11">{welData ? welData.title6 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big11">
              {welData ? welData.message6 : ""}

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

            <div>
            <div className="cinema_profile_bullet">
            <div>●</div>
              <div className="mallpp_sigle_list">
                Populate your profile to introduce your shopping center/mall on
                In-store under{" "}
                <button onClick={() => setTab(2)} style={{ fontWeight: "600" }}>Account Settings</button>
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Advertise your collection of retailers in your mall under{" "}
                <button onClick={() => setTab(3)} style={{ fontWeight: "600" }}> Mall Brands</button>
              </div>
              </div>
              <div className="cinema_profile_bullet">
              <div>●</div>
              <div className="mallpp_sigle_list">
                Upload the
                <button onClick={() => setTab(4)} style={{ fontWeight: "600" }}>&nbsp;Eateries</button> in your Mall
              </div>
              </div>
             <div className="cinema_profile_bullet">
             <div>●</div>
             <div className="mallpp_sigle_list">
                Update and promote
                <button onClick={() => setTab(5)} style={{ fontWeight: "600" }}>&nbsp;Events</button> in your Mall
              </div>
             </div>
             <div  className="cinema_profile_bullet">
             <div>●</div>
              <div className="mallpp_sigle_list">
                List your Mall's
                <button onClick={() => setTab(6)} style={{ fontWeight: "600" }}>&nbsp;Facilities</button>
              </div>
              </div>
            </div>
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message : ""}
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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title2 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message2 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title3 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message3 : ""}

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
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title5 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message4 : ""}

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
              {welData ? welData.title5 : ""}              </h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message5 : ""}               </p>
            </div>
            <div
              className="mallpp_part2_card mallpp_part2_cardd12"
              style={{
                // backgroundImage: `url(${images.card_main_blue_pink})`,
                background:"#000",
                backgroundPosition: "center",
              }}
            >
              <h5 className="mallpp_part2_card_heading mallpp_part2_card_heading_big">{welData ? welData.title6 : ""}</h5>
              <p className="mallpp_part2_card_description mallpp_part2_card_description_big">
              {welData ? welData.message6 : ""}

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

export default MallProfilePart;
