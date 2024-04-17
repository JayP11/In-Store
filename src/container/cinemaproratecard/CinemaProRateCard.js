import React, { useEffect, useState } from "react";
import { CinemaHeroEdit, CinemaNavigationBar } from "../../components";
import "./CinemaProRateCard.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  ACCEPT_HEADER,
  get_ratecard,
  get_retecard,
  rate_card_pdf_url,
} from "../../utils/Constant";
import axios from "axios";
import { Link } from "react-router-dom";

const CinemaProRateCard = ({
  get_mall_auth_data,
  sidebaropen,
  setTab,
  gettab,
}) => {
  const [getProCard, SetProCard] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductRatecardData();
  }, []);

  const getProductRatecardData = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    setLoading(true);
    axios
      .get(get_ratecard, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          setLoading(false);
          SetProCard(res.data.data);
          // Notification("success", "Success!", "Mall Registerated Successfully!");
        } else {
        }
      })
      .catch((err) => {
        console.log("err11", err);
        setLoading(false);
      });
  };
  const PdfDownload = async (id) => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(rate_card_pdf_url + id, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.data.success === 1) {
          window.open(res.data.data, "_blank");
        } else {
          // null;
        }
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };

  return (
    <div>
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
      ) : (
        <>
          <CinemaHeroEdit
            get_mall_auth_data={get_mall_auth_data}
            sidebaropen={sidebaropen}
          />
          <div className="CinemaProRateCard_content_main">
            {/* <CinemaNavigationBar
              title="Product Rate Card"
            title="Account Setting"
            setTabType={gettab === 21 ? "Product Rate Card" : ""}
            /> */}

            <div style={{ display: "flex" }}><Link to="/">Home</Link>&nbsp;  /&nbsp;
              <p style={{ color: "var(--color-orange)", fontWeight: "800" }}>Product Rate Card</p></div>

            <div>
              <h3 className="h3" style={{ fontWeight: "600" }}>
                Rate Card: Choose your Product
              </h3>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy ipsum.
              </p>
            </div>
            <div className="CinemaProRateCard_card_block_line_main">
              <div className="CinemaProRateCard_card_block_line_inner">
                <div>
                  <h5 className="h5">
                    <p>
                      <b className="">Products:</b>&nbsp; In-store App landing
                      page
                    </p>
                  </h5>
                </div>
                <div>
                  <div className="CinemaProRateCard_card_block_main">
                    <div className="CinemaProRateCard_card_black_main CinemaProRateCard_card_black_main_edited">
                      {/* <div>
                        <b className="pro_card_head">Landing Page </b>
                        <br />
                        <b className="">1/2 Tile</b>
                      </div> */}

                      <b className="pro_card_head" style={{maxWidth:"135px"}}>
                        {getProCard && getProCard.title_1_by_2}
                      </b>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setTab(40)}
                          className="pro_card_text">
                          R{getProCard && getProCard.landing_page_1_2_tile} per
                          unit, per week
                        </p>
                        <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                      </div>
                    </div>
                    <div className="CinemaProRateCard_card_black_main CinemaProRateCard_card_black_main_edited">
                      {/* <div>
                        <b className="pro_card_head">Landing Page </b>
                        <br />
                        <b className="pro_card_head">Square Tiles</b>
                      </div> */}

                      <b className="pro_card_head" style={{maxWidth:"175px"}}>
                        {getProCard && getProCard.title_landing_page_square_tiles}
                      </b>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setTab(46)}
                          className="pro_card_text">
                          R{getProCard && getProCard.landing_page_square_tiles}{" "}
                          per unit, per week
                        </p>
                        <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                      </div>
                    </div>
                    <div className="CinemaProRateCard_card_black_main CinemaProRateCard_card_black_main_edited">
                      {/* <div>
                        <b className="pro_card_head">Landing Page </b>
                        <br />
                        <b className="pro_card_head">Leaderboard Banner</b>
                      </div> */}

                      <b className="pro_card_head" style={{maxWidth:"188px"}}>
                        {getProCard && getProCard.title_landing_page_leaderboard_banner}
                      </b>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <button
                          style={{ cursor: "pointer" }}
                          onClick={() => setTab(42)}
                          className="pro_card_text">
                          R
                          {getProCard &&
                            getProCard.landing_page_leaderboard_banner}{" "}
                          per unit, per week
                        </button>
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
                    <div className="CinemaProRateCard_card_black_main CinemaProRateCard_card_black_main_edited">
                      {/* <div>
                        <b className="pro_card_head">Leaderboard</b>
                        <br />
                        <b className="pro_card_head">Banner Mall</b>
                      </div> */}
                      <b className="pro_card_head" style={{maxWidth:"130px"}}>
                        {getProCard && getProCard.title_leaderboard_banner_mall}
                      </b>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <p
                          className="pro_card_text"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setTab(35);
                            // console.log("123");
                          }}>
                          R{getProCard && getProCard.leaderboard_banner_mall}{" "}
                          per unit, per week
                        </p>
                        <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                      </div>
                    </div>
                    <div className="CinemaProRateCard_card_black_main CinemaProRateCard_card_black_main_edited">
                      {/* <div>
                        <b className="pro_card_head">Promotional</b>
                        <br />
                        <b className="pro_card_head">Banner</b>
                      </div> */}
                      <b className="pro_card_head" style={{maxWidth:"130px"}}>
                        {getProCard && getProCard.title_promotional_banner}
                      </b>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setTab(37)}
                          className="pro_card_text">
                          R{getProCard && getProCard.promotional_banner} per
                          unit, per week
                        </p>
                        <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                      </div>
                    </div>
                    <div className="CinemaProRateCard_card_black_main CinemaProRateCard_card_black_main_edited">
                      {/* <div>
                        <b className="pro_card_head">Cinemas</b>
                        <br />
                        <b className="pro_card_head">Product Tiles</b>
                      </div> */}

                      <b className="pro_card_head" style={{maxWidth:"130px"}}>
                        {getProCard && getProCard.title_product_tiles}
                      </b>
                      <div>
                        <p>Movie Tiles</p>
                        <p
                          onClick={() => {
                            setTab(3);
                          }}
                          className="pro_card_text"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                          }}>
                          R{getProCard && getProCard.product_tiles} per unit,
                          per week
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
                    <div className="CinemaProRateCard_card_black_main CinemaProRateCard_card_black_main_edited">
                      {/* <div>
                        <b className="pro_card_head">Cinema</b>
                        <br />
                        <b className="pro_card_head">Analytics Bundles</b>
                      </div> */}

                      <b className="pro_card_head" style={{maxWidth:"175px"}}>{getProCard && getProCard.title_analytics_bundles}</b>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => setTab(44)}
                          className="pro_card_text">
                          R{getProCard && getProCard.analytics_bundles} per
                          month
                        </p>
                        <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                      </div>
                    </div>
                    <div
                      className="CinemaProRateCard_card_black_main CinemaProRateCard_card_black_main_edited cinema-pro-display-none"
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
                      className="CinemaProRateCard_card_black_main CinemaProRateCard_card_black_main_edited cinema-pro-display-none"
                      style={{ background: "white" }}>
                      <div>
                        <b className="pro_card_head"></b>
                        <br />
                        <b className="pro_card_head"></b>
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
                onClick={() => {
                  PdfDownload(1);
                }}
                className="btn btn-orange"
                style={{ width: "210px", fontSize: "16px" }}>
                Download Rate Card
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CinemaProRateCard;