import React, { useEffect } from "react";
import "./CustomerWelcomMall.css";
import { CustomerHeroSecond, MallHero } from "../../components";
import { RiShoppingBagFill } from "react-icons/ri";
import { AiFillFacebook, AiFillHeart, AiFillLinkedin, AiFillTwitterSquare, AiOutlineWifi } from "react-icons/ai";
import { CiForkAndKnife } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import images from "../../constants/images";
import { FaInstagramSquare, FaPhone } from "react-icons/fa";
const CustomerWelcomMall = ({ setTab, getsingalmalldata }) => {
  useEffect(() => {
    console.log("itemmmmmmm", getsingalmalldata);
  }, []);

  return (
    <>
      <div className="">
        {/* <MallHero getsingalmalldata={getsingalmalldata} /> */}
        <CustomerHeroSecond getsingalmalldata={getsingalmalldata} />
      </div>
      <div className="mallpp_main_wrapp">
        <div className="mall-near-me-sub-flex" style={{ paddingTop: "0px" }}>
          <h4 className="h1 custwelmall-head" style={{ fontWeight: "600",marginTop:"1rem" }}>
            Welcome to {getsingalmalldata && getsingalmalldata.name}
          </h4>
        </div>
        <p className="custwelmall-sub-heading" style={{marginBottom:"1.5rem"}}>
          {getsingalmalldata && getsingalmalldata.description}
        </p>

        <div className="custwelmall-menu-flex">
          {/* Customer mall card start */}
          <button
            onClick={() => {
              setTab(2);
            }}
            className="custwelmall-btn-card1"
          >
            {/* <AiFillHeart className="custwelmall-card-icon" /> */}
            <img src={images.cons_wel_promotion_icon} style={{width:"50px",height:"45px"}} alt=""/>

            <p className="custwelmall-card-txt">PROMOTIONS</p>
          </button>
          {/* Customer mall card end */}

          {/* Customer mall card start */}
          <button
            onClick={() => {
              setTab(3);
            }}
            className="custwelmall-btn-card2"
          >
            {/* <RiShoppingBagFill className="custwelmall-card-icon" /> */}
            <img src={images.cons_wel_cart_icon} style={{width:"65px",height:"45px"}} alt=""/>
            <p className="custwelmall-card-txt">BRANDS</p>
          </button>
          {/* Customer mall card end */}

          {/* Customer mall card start */}
          <button
            onClick={() => {
              setTab(4);
            }}
            className="custwelmall-btn-card3"
          >
            {/* <CiForkAndKnife className="custwelmall-card-icon" /> */}
            <img src={images.cons_wel_eatery_icon} style={{width:"65px",height:"45px"}} alt=""/>

            <p className="custwelmall-card-txt">EATERIES</p>
          </button>
          {/* Customer mall card end */}

          {/* Customer mall card start */}
          <button
            onClick={() => {
              setTab(28);
            }}
            className="custwelmall-btn-card2"
          >
            {/* <CiForkAndKnife className="custwelmall-card-icon" /> */}
            <img src={images.cons_wel_movie_icon} style={{width:"50px",height:"45px"}} alt=""/>

            <p className="custwelmall-card-txt">MOVIES</p>
          </button>
          {/* Customer mall card end */}

          {/* Customer mall card start */}

          <button
            onClick={() => {
              setTab(5);
            }}
            className="custwelmall-btn-card4"
          >
            {/* <SlCalender className="custwelmall-card-icon" /> */}
            <img src={images.cons_wel_event_icon} style={{width:"50px",height:"45px"}} alt=""/>

            <p className="custwelmall-card-txt">EVENTS</p>
          </button>

          {/* Customer mall card end */}

          {/* Customer mall card start */}
          <button
            onClick={() => {
              setTab(6);
            }}
            className="custwelmall-btn-card5"
          >
            {/* <AiOutlineWifi className="custwelmall-card-icon" /> */}
            <img src={images.cons_wel_facility_icon} style={{width:"55px",height:"45px"}} alt=""/>

            <p className="custwelmall-card-txt">FACILITIES</p>
          </button>
          {/* Customer mall card end */}
        </div>

        {/* Contact mall part start */}
        <div className="custwelmall-contact-part-main-wrapp-flex">
          <div className="custwelmall-contact-part-main-wrapp">
            <p className="custwelmall-contact-heading h5">
              Contact The {getsingalmalldata && getsingalmalldata.name}
            </p>
            <p className="custwelmall-contact-txt">
              {getsingalmalldata && getsingalmalldata.description}
            </p>

            {/* <p className="custwelmall-contact-txt">
              Both of our Information Kiosk are situated in the Victoria Wharf
              Shopping Centre. The first is opposite Nespresso and the second
              Information kiosk is situated close to the Clicks store near
              Entrance 1.
            </p> */}
          </div>
          <div className="custwelmall-contact-last-flex">
            <div>
              <p className="custwelmall-contact-addr-heading">
                {getsingalmalldata && getsingalmalldata.name} Head Office
              </p>

              {/* mall Contact part timming start */}
              <div className="custwelmall-contact-detail-flex">
                <img src={images.clock} alt="" />
                <p className="custwelmall-contact-number" style={{fontSize:"16px"}}>
                  Trading hours:{" "}
                  {getsingalmalldata && getsingalmalldata.mon_fri_from_time}{" "}
                  {getsingalmalldata && getsingalmalldata.mon_fri_to_time}{" "}
                  (Mon-Sun)
                </p>
              </div>

              <div className="cd_add_time_wrapp">
                  <img src={images.clock} alt="" />
                  <p
                    style={{
                      color: "var(--color-black)",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    Trading hours: {getsingalmalldata.sat_from_time
                    && getsingalmalldata.sat_from_time}am - {getsingalmalldata.sat_to_time && getsingalmalldata.sat_to_time
                  }pm (Saturday)
                  </p>
                </div>

                 <div className="cd_add_time_wrapp">
                  <img src={images.clock} alt="" />
                  <p
                    style={{
                      color: "var(--color-black)",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    Trading hours: {getsingalmalldata.holiday_from_time && getsingalmalldata.holiday_from_time}am - {getsingalmalldata.holiday_to_time
                    && getsingalmalldata.holiday_to_time
                  }pm (Public Holiday) 
                  </p>
                </div>
              {/* mall Contact part timming end */}

              {/* mall Contact part timming start */}
              <div className="custwelmall-contact-detail-flex">
                <FaPhone color="var(--color-orange)" size={16} />
                <a href={"tel:" + `${getsingalmalldata.ho_number && getsingalmalldata.ho_number}`}
                  style={{
                    color: "var(--color-black)",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  +{getsingalmalldata && getsingalmalldata.ho_number}
                </a>
              </div>
              {/* mall Contact part timming end */}

              {/* mall Contact part timming start */}
              <div className="custwelmall-contact-detail-flex">
                <img src={images.send} alt="" />
                <a href={"mailto:" + `${getsingalmalldata.email && getsingalmalldata.email}`}
                  style={{
                    color: "var(--color-black)",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {getsingalmalldata && getsingalmalldata.email}
                </a>
              </div>
              <div className="custwelmall-contact-detail-flex custwelmall-contact-detail-flex_addd" >
                <img src={images.location} alt="" />
                <a
                  style={{
                    color: "var(--color-black)",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {getsingalmalldata && getsingalmalldata.address}
                </a>
              </div>
            </div>
            <div className="custwelmall-contact-social-part">
              <p className="custwelmall-contact-addr-heading" style={{ marginBottom: "0px" }}>
                Let’s connect
              </p>
              {/* <div className="custwelmall-social-icon-flex">

                <AiFillTwitterSquare className="custwelmall-social-icon" />
                <a href="https://twitter.com/" target="_blank" className="custwelmall-social-name">Twitter</a>
              </div> */}
              <div className="custwelmall-social-icon-flex" style={{marginBottom:"0rem"}}>
                <AiFillFacebook className="custwelmall-social-icon" />
                <a href="https://facebook.com/" target="_blank" className="custwelmall-social-name">Facebook</a>
              </div>
              <div className="custwelmall-social-icon-flex" style={{marginBottom:"0rem"}}>
                <FaInstagramSquare className="custwelmall-social-icon" />
                <a href="https://instagram.com/" target="_blank" className="custwelmall-social-name">Instagram</a>
              </div>
              {/* <div className="custwelmall-social-icon-flex">
                <AiFillLinkedin className="custwelmall-social-icon" />
                <a href="https://www.linkedin.com/" target="_blank" className="custwelmall-social-name">LinkedIn</a>
              </div> */}
            </div>
          </div>
          {/* mall Contact part timming end */}
          {/* Contact mall part end */}
        </div>
      </div>
    </>
  );
};

export default CustomerWelcomMall;
