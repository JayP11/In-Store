import React from "react";
// import "./ContactDetail.css";
import images from "../../constants/images";
import { FaInstagramSquare, FaPhone } from "react-icons/fa";
import { CustomerHeroSecond, MallHero } from "../../components";
import { AiFillFacebook } from "react-icons/ai";

const CustomerContactDetail = ({ getsingalmalldata }) => {

  console.log("123321",getsingalmalldata);
  return (
    <>
      <div className="">
        {/* <MallHero getsingalmalldata={getsingalmalldata} /> */}
        <CustomerHeroSecond getsingalmalldata={getsingalmalldata} />
      </div>

      <div className="mm_main_wrapp">
        {/* mall management name start */}
        <div
          className="mall_name_wrapp mall_con_wrapp"
          style={{ paddingLeft: "0rem" }}
        >
          <p className="mall_name_heading">{getsingalmalldata.name}:</p>
          <span style={{ fontWeight: 600 }}>Contact Details</span>
        </div>
        {/* <div className="mm_horizontal_line"></div> */}
        <div className="" style={{ marginTop: "2rem" }}></div>

        <div className="cd_main_wrapp" style={{ marginLeft: "0rem" }}>
          <h5 className="cd_heading" style={{ fontWeight: 600 }}>
            We would love to hear from you!
          </h5>
          <p className="cd_des"></p>

          {/* <h5 className="cd_heading"> Contact The {getsingalmalldata.name}</h5> */}
          <p className="cd_des">{getsingalmalldata.description}</p>

          <div className="cd_address_wrapp">
            {/* about address 2 */}
            <div
              style={{
                display: "flex",
                gap: "5rem",
                width: "100%",
                marginTop: "2rem",
              }}
              className="mall_con_detailss_main"
            >
              <div className="cd_address_wrapp_inner_part">
                <h5 style={{ fontWeight: "700" }}>
                  {getsingalmalldata.name} Head Office
                </h5>
                <div className="cd_add_time_wrapp">
                  <img src={images.clock} alt="" />
                  <p
                    style={{
                      color: "var(--color-black)",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    Trading hours:{" "}
                    {getsingalmalldata.mon_fri_from_time &&
                      getsingalmalldata.mon_fri_from_time}
                    am -{" "}
                    {getsingalmalldata.mon_fri_to_time &&
                      getsingalmalldata.mon_fri_to_time}
                    pm (Mon-Sun)
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
                <div className="cd_add_time_wrapp">
                  <FaPhone color="var(--color-orange)" size={16} />
                  <a href={
                      "tel:" + `${getsingalmalldata.ho_number && getsingalmalldata.ho_number}`
                    }
                    style={{
                      color: "var(--color-black)",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    {getsingalmalldata.ho_number && getsingalmalldata.ho_number}
                  </a>
                </div>
                <div className="cd_add_time_wrapp">
                  <img src={images.send} alt="" />
                  <a href={"mailto:" + `${getsingalmalldata.email && getsingalmalldata.email}`}
                    style={{
                      color: "var(--color-black)",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    {getsingalmalldata.email && getsingalmalldata.email}
                  </a>
                </div>
                <div className="cd_add_time_wrapp">
                  <img src={images.location} alt="" />
                  <p
                    style={{
                      color: "var(--color-black)",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    {/* {getsingalmalldata.name},{getsingalmalldata.address},
                    {getsingalmalldata.address_2},{getsingalmalldata.address_3}. */}
                    {getsingalmalldata.name},{getsingalmalldata.address}
                  </p>
                </div>
              </div>
              <div>
                <h5 className="mall_con_lease" style={{ fontWeight: 700 }}>
                  Let's Connect
                </h5>
                {/* <div className="cd_add_time_wrapp">
                  <FaPhone color="var(--color-orange)" size={16} />
                  <a
                    style={{
                      color: "var(--color-black)",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    {getsingalmalldata.fb && getsingalmalldata.fb}
                  </a>
                </div>
                <div className="cd_add_time_wrapp">
                  <img src={images.send} alt="" />
                  <a
                    style={{
                      color: "var(--color-black)",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    {getsingalmalldata.insta && getsingalmalldata.insta}
                  </a>
                </div> */}

                <div className="custwelmall-social-icon-flex">
                <AiFillFacebook className="custwelmall-social-icon" />
                <a href={getsingalmalldata.fb && getsingalmalldata.fb} target="_blank" className="custwelmall-social-name" style={{fontSize:"16px"}}>Facebook</a>
                
              </div>
              <div className="custwelmall-social-icon-flex">
                <FaInstagramSquare className="custwelmall-social-icon" />
                <a href={getsingalmalldata.insta && getsingalmalldata.insta} target="_blank" className="custwelmall-social-name" style={{fontSize:"16px"}}>Instagram</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerContactDetail;