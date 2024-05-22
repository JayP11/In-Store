import React, { useEffect, useState } from "react";
import "./BrandCart.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BrandCartCard } from "../../components";
import axios from "axios";
import { ACCEPT_HEADER, get_store_cart } from "../../utils/Constant";

const AccordionData = [
  {
    id: 1,
    name: "Landing Page 1/2 Tile",
  },
  {
    id: 2,
    name: "Landing Page Square Tiles",
  },
  {
    id: 3,
    name: "Landing Page Leaderboard Banner",
  },
  {
    id: 4,
    name: "Leaderboard Banner Mall",
  },
  {
    id: 5,
    name: "Promotional Banner",
  },
  {
    id: 6,
    name: "In Mall Brand Banner sider",
  },
  {
    id: 7,
    name: "In Mall Product Tiles",
  },
  // {
  //   id: 7,
  //   name: "Cinema Analytics Bundles",
  // },
];

const BrandCart = ({ setTab, get_mall_auth_data }) => {


  const [toggle, setToggle] = useState(null);
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };

  useEffect(() => {
    Get_cart();
  }, []);
  const [isload, SetLoad] = useState(false);
  const [totallead, SetTotalLead] = useState("");
  const [totalpro, SetTotalPro] = useState("");

  const [totalpduct, SetTotalPduct] = useState("");
  const [totalpducttil, SetTotalPducttil] = useState("");
  const [totalsquare, SetTotalSquare] = useState("");
  const [totalomebytwo, SetTotalOnebyTwo] = useState("");
  const [totallandingleaderboard, SetLandingLeaderboard] = useState("");
  const [totalbundleanalytic, SetBundleAnalytic] = useState("");

  const Get_cart = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    SetLoad(true);
    axios
      .get(get_store_cart, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("parth-crat--->", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          SetnearStore(res.data.data);
          SetTotalLead(res.data.total_leaderboard_amt);
          SetTotalPro(res.data.total_promotion_banner_amt);
          SetTotalPduct(res.data.total_product_banner_amt);
          SetTotalPducttil(res.data.total_product_banner_tile_amt);
          SetTotalSquare(res.data.total_landing_page_square_tile_amt);
          SetTotalOnebyTwo(res.data.total_landing_page_tile_amt);
          SetLandingLeaderboard(res.data.total_landing_page_leaderboard_amt);
          SetBundleAnalytic(res.data.total_analitic_bundle_amt);
          SetLoad(false);
        } else {
          SetLoad(false);
        }
      })
      .catch((err) => {
        console.log("err11", err);
        SetLoad(false);
      });
  };
  const [getnearStore, SetnearStore] = useState([]);
  const [sort_array, SetSort_Array] = useState([]);

  const array_sort = (id) => {
    if (id == 1) {
      const numDescending = [...getnearStore].filter((a, b) =>
        a.landing_page_tile_id ? a.landing_page_tile_id : ""
      );
      console.log("ffff", numDescending);
      SetSort_Array(numDescending);
    } else if (id == 2) {
      const numDescending = [...getnearStore].filter((a, b) =>
        a.landing_page_square_tile_id ? a.landing_page_square_tile_id : ""
      );
      console.log("ffff", numDescending);
      SetSort_Array(numDescending);
    } else if (id == 3) {
      const numDescending = [...getnearStore].filter((a, b) =>
        a.landing_page_leaderboard_id ? a.landing_page_leaderboard_id : ""
      );
      console.log("ffff", numDescending);
      SetSort_Array(numDescending);
    } else if (id == 4) {
      const numDescending = [...getnearStore].filter((a, b) =>
        a.leaderboard_banner_id ? a.leaderboard_banner_id : ""
      );
      console.log("ffff", numDescending);
      SetSort_Array(numDescending);
    } else if (id == 5) {
      const numDescending = [...getnearStore].filter((a, b) =>
        a.promotion_banner_id ? a.promotion_banner_id : ""
      );
      console.log("ffff", numDescending);
      SetSort_Array(numDescending);
    } else if (id == 6) {
      const numDescending = [...getnearStore].filter((a, b) =>
        a.product_banner_id ? a.product_banner_id : ""
      );
      console.log("ffff", numDescending);
      SetSort_Array(numDescending);
    } else if (id == 7) {
      const numDescending = [...getnearStore].filter((a, b) =>
        a.product_banner_tile_id ? a.product_banner_tile_id : ""
      );
      console.log("ffff", numDescending);
      SetSort_Array(numDescending);
    } else {
      null;
    }
  };
  return (
    <div>
      {isload === true ? (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="loader"></div>
        </div>
      ) : (
        <div className="mm_main_wrapp brand_carttt">
          <div
            className="mall_name_wrapp_retailer_cart"
            style={{ paddingLeft: "0px", fontWeight: "600" }}
          >
            <p className="mall_name_heading">
              {get_mall_auth_data &&
                get_mall_auth_data.retailers.name &&
                get_mall_auth_data.retailers.name}
              :{" "}
            </p>
            <span className="retailer_cart_span" style={{fontWeight:"600",}}>My Cart</span>
          </div>
          <div className="mm_horizontal_line"></div>

          <div className="brand_cart_main_wrapp">
            {AccordionData && AccordionData.length > 0
              ? AccordionData.map((item, index) => {
                  return (
                    <div className="brand_cart_single_itm" key={item.id}>
                      <button
                        className="brand_cart_itm_name_wrapp"
                        onClick={() => {
                          handleToggle(item.id);
                          array_sort(item.id);
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "5px",
                          }}
                        >
                          <p className="cinema-cart-oro-name"
                            style={{
                              color: item.id === toggle ? "#ff8b00" : "#000",
                              fontWeight: item.id === toggle ? "800" : "500",
                              fontSize: "22px",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {item.name}
                          </p>
                          {item.id === toggle ? (
                            <IoIosArrowUp size={28} color="#ff8b00" />
                          ) : (
                            <IoIosArrowDown size={28} />
                          )}
                        </div>
                        {item.id == 1 ? (
                          <p
                            className="cinema-cart-oro-name"
                            style={{
                              fontWeight: item.id === toggle ? "800" : "600",
                              fontSize: "22px",
                            }}
                          >
                            R {totalomebytwo}
                          </p>
                        ) : item.id == 2 ? (
                          <p
                            className="cinema-cart-oro-name"
                            style={{
                              fontWeight: item.id === toggle ? "800" : "600",
                              fontSize: "22px",
                            }}
                          >
                            R {totalsquare}
                          </p>
                        ) : item.id == 3 ? (
                          <p
                            className="cinema-cart-oro-name"
                            style={{
                              fontWeight: item.id === toggle ? "800" : "600",
                              fontSize: "22px",
                            }}
                          >
                            R {totallandingleaderboard}
                          </p>
                        ) : item.id == 4 ? (
                          <p
                            className="cinema-cart-oro-name"
                            style={{
                              fontWeight: item.id === toggle ? "800" : "600",
                              fontSize: "22px",
                            }}
                          >
                            R {totallead}
                          </p>
                        ) : item.id == 5 ? (
                          <p
                            className="cinema-cart-oro-name"
                            style={{
                              fontWeight: item.id === toggle ? "800" : "600",
                              fontSize: "22px",
                            }}
                          >
                            R {totalpro}
                          </p>
                        ) : item.id == 6 ? (
                          <p
                            className="cinema-cart-oro-name"
                            style={{
                              fontWeight: item.id === toggle ? "800" : "600",
                              fontSize: "22px",
                            }}
                          >
                            R {totalpduct}
                          </p>
                        ) :item.id == 7 ? (
                          <p
                            className="cinema-cart-oro-name"
                            style={{
                              fontWeight: item.id === toggle ? "800" : "600",
                              fontSize: "22px",
                            }}
                          >
                            R {totalpducttil}
                          </p>
                        ) : null 
                        
                        }
                      </button>
                      {item.id === toggle ? null : (
                        <div className="mm_horizontal_line"></div>
                      )}
                      {/* {item.id === toggle ? (
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                          color: "var(--color-black)",
                          margin: "10px auto",
                          alignSelf: "self-start",
                          width: "100%",
                        }}
                      >
                        Western Cape
                      </p>
                    ) : null} */}
                      {item.id === toggle ? (
                        <>
                          {sort_array && sort_array.length > 0
                            ? sort_array.map((mall, mindx) => {
                                return (
                                  <BrandCartCard
                                    item={mall}
                                    toggle={toggle}
                                    Get_cart={Get_cart}
                                    setToggle={setToggle}
                                  />
                                );
                              })
                            : null}
                        </>
                      ) : null}
                    </div>
                  );
                })
              : null}
          </div>

          <div className="brandcart_total_wrapp">
            <h4 className="h4">
              Total R{" "}
              {totalomebytwo +
                totalsquare +
                totallandingleaderboard +
                totallead +
                totalpro +
                totalpduct+
                totalpducttil +
                totalbundleanalytic}{" "}
            </h4>
            <button
              onClick={() => {
                setTab(12);
              }}
              className="btn btn-orange"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandCart;