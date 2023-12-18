import React from "react";
import { CinemaHeroEdit } from "../../components";
import "./CinemaProRateCard.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const CinemaProRateCard = ({ get_mall_auth_data, sidebaropen }) => {
  return (
    <div>
      <CinemaHeroEdit
        get_mall_auth_data={get_mall_auth_data}
        sidebaropen={sidebaropen}
      />
      <div className="CinemaProRateCard_content_main">
        <div>
          <h3 className="h3" style={{ fontWeight: "600" }}>
            Rate Card: Choose your Product
          </h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy ipsum.
          </p>
        </div>
        <div className="CinemaProRateCard_card_block_line_main">
          <div className="CinemaProRateCard_card_block_line_inner">
            <div>
              <h5 className="h5">
                <p>
                  <b className="">Products:</b>&nbsp; In-store App landing page
                </p>
              </h5>
            </div>
            <div>
              <div className="CinemaProRateCard_card_block_main">
                <div className="CinemaProRateCard_card_black_main">
                  <div>
                    <b className="pro_card_head">Landing Page </b>
                    <br />
                    <b className="">1/2 Tile</b>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="pro_card_text">R1000 per unit, per week</p>
                    <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                  </div>
                </div>
                <div className="CinemaProRateCard_card_black_main">
                  <div>
                    <b className="pro_card_head">Landing Page </b>
                    <br />
                    <b className="pro_card_head">Square Tiles</b>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="pro_card_text">R400 per unit, per week</p>
                    <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                  </div>
                </div>
                <div className="CinemaProRateCard_card_black_main">
                  <div>
                    <b className="pro_card_head">Landing Page </b>
                    <br />
                    <b className="pro_card_head">Leaderboard Banner</b>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="pro_card_text">R1800 per unit, per week</p>
                    <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="CinemaProRateCard_card_block_line_inner">
            <div>
              <h5 className="h5">
                <p>
                  <b className="">Products:</b>&nbsp; Per Mall
                </p>
              </h5>
            </div>
            <div>
              <div className="CinemaProRateCard_card_block_main">
                <div className="CinemaProRateCard_card_black_main">
                  <div>
                    <b className="pro_card_head">Leaderboard</b>
                    <br />
                    <b className="pro_card_head">Banner Mall</b>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="pro_card_text">R250 per unit, per week</p>
                    <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                  </div>
                </div>
                <div className="CinemaProRateCard_card_black_main">
                  <div>
                    <b className="pro_card_head">Promotional</b>
                    <br />
                    <b className="pro_card_head">Banner</b>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="pro_card_text">R200 per unit, per week</p>
                    <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                  </div>
                </div>
                <div className="CinemaProRateCard_card_black_main">
                  <div>
                    <b className="pro_card_head">Cinemas</b>
                    <br />
                    <b cclassName="pro_card_head">Product Tiles</b>
                  </div>
                  <div>
                    <p>Movie Tiles</p>
                    <p
                      className="pro_card_text"
                      style={{ display: "flex", alignItems: "center" }}>
                      R50 per unit, per week
                      <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="CinemaProRateCard_card_block_line_inner">
            <div>
              <h5 className="h5">
                <b className="">Analytics:</b>
              </h5>
            </div>
            <div>
              <div className="CinemaProRateCard_card_block_main">
                <div className="CinemaProRateCard_card_black_main">
                  <div>
                    <b className="pro_card_head">Cinema</b>
                    <br />
                    <b className="pro_card_head">Analytics Bundles</b>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="pro_card_text">R4800 per month</p>
                    <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                  </div>
                </div>
                <div
                  className="CinemaProRateCard_card_black_main"
                  style={{ background: "white" }}>
                  <div>
                    <b className="pro_card_head">Promotional</b>
                    <br />
                    <b className="pro_card_head">Banner</b>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="pro_card_text">R200 per unit, per week</p>
                    <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                  </div>
                </div>
                <div
                  className="CinemaProRateCard_card_black_main"
                  style={{ background: "white" }}>
                  <div>
                    <b className="pro_card_head"></b>
                    <br />
                    <b cclassName="pro_card_head"></b>
                  </div>
                  <div>
                    {/* <p>Movie Tiles</p> */}
                    {/* <p
                      className="pro_card_text"
                      style={{ display: "flex", alignItems: "center" }}>
                      R50 per unit, per week
                      <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "2rem" }}>
          <div style={{ display: "flex", paddingBottom: "1rem" }}>
            <h6 className="" style={{ color: "var(--color-orange)" }}>
              Terms and Conditions
            </h6>
            &nbsp; apply.
          </div>
          <button
            className="btn btn-orange"
            style={{ width: "210px", fontSize: "16px" }}>
            Download Rate Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CinemaProRateCard;
