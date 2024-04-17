import React, { useEffect, useState } from "react";
import "./BrandDashboard.css";
import { RetailerNavbar } from "../../common";
import { FiChevronLeft } from "react-icons/fi";
import { BrandHeroEdit, LocationComponent } from "../../components";
import {
  AddProductBanner,
  AddProductTilesBanner,
  AddPromotionBanner,
  AddRetailLandingPageBanner,
  AddRetailerLandingpageLeaderboard,
  ArchivesBrand,
  BrandAccountSetting,
  BrandAnalytics,
  BrandCart,
  BrandEdit,
  BrandInMall,
  BuyBrandAnalytics,
  ChooseProduct,
  FaqCinema,
  LeaderBoard,
  PromotionalBanner,
  RetailLandingPageSquareTile,
  RetailLandingpageTile,
  RetailerAddLandingPageSquareTile,
  RetailerFaqPage,
  RetailerLandingPageLeaderboard,
  RetailerProRateCard,
  RetailerProfile,
  RetailerTQCard,
  RetailerThankYou,
  RetailerTrackAnalytics,
  StoreCheckout,
  StoreThankyou,
  // Table,
  UploadMultipleBrand,
} from "../../container";
import { useMeventContext } from "../../context/mevent_context";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useMallContext } from "../../context/mall_context";
import ProductBanner from "../../container/ProductBanner.jsx/ProductBanner";
import ProductTiles from "../../container/producttiles/ProductTiles";
import { useStoreContext } from "../../context/store_context";
import { useAuthContext } from "../../context/auth_context";
import AddLeaderboardBanner from "../../container/addleaderboard/AddLeaderboardBanner";

const BrandDashboard = () => {
  const { get_cinema_data, getCategoryApi } = useStoreContext();
  const { get_mall_auth_data, getBrand } = useMallContext();
  const { get_store_data, get_store_loading, getStore, getStoreCartApi } =
    useStoreContext();

  const [gettab, setTab] = useState(1);
  const [getstore_is, setStore_id] = useState();
  const [getsingleStoreData, setSingleStoreData] = useState({});
  const [sidebaropen, setSidebarOpen] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getStore();
    getCategoryApi();
    getStoreCartApi();
  }, []);

  useEffect(() => {
    getBrand(get_mall_auth_data.retailer_id);
  }, []);

  useEffect(() => {
    if (get_store_data == undefined) {
      window.location.reload(false);
      navigate("/");
    }
  }, []);

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const handlePopstate = () => {
    window.history.pushState(null, document.title, window.location.href);
  };

  // get_store_data == null && set_store_data == "" ? setLoading(true):setLoadng(false);

  return (
    <>
      <Helmet>
        <title>Profile | In-store</title>
      </Helmet>

      {/* {get_store_data == "" || get_store_data == null || get_store_data == undefined ? setLoadng(true) : setLoadng(false)} */}
      {get_store_loading === true ? (
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
        <div>
          <RetailerNavbar setTab={setTab} />

          <div className="profilepage_main_wrapp">
            {/* side-bar start  */}
            <div style={{ backgroundColor: "#E5E4E2" }}>
              <div
                className="pro-side-none-resp"
                style={{
                  display: "flex",
                  gap: "5px",

                  // position: sidebaropen === true ? null : "absolute",
                  // left: sidebaropen === true ? null : "-400px",
                  width: sidebaropen ? "275px" : "0px",
                  transition: "width 1s ease",
                }}
                // className="profilepage_sidebarr"
              >
                <div className="profile_sidebar_wrapp">
                  <div
                    style={{
                      position: "relative",
                      // width: sidebaropen ? "275px" : "0px",
                      width: sidebaropen ? "275px" : "0px",
                      transition: "width 1s ease",
                    }}>
                    <button
                      style={{
                        background: gettab === 1 ? "#ff8b00" : "#fff",
                        color: gettab === 1 ? "#fff" : "#000",
                        fontWeight: gettab === 1 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(1)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      My Profile
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>
                    <button
                      style={{
                        background: gettab === 2 ? "#ff8b00" : "#fff",
                        color: gettab === 2 ? "#fff" : "#000",
                        fontWeight: gettab === 2 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(2)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      Account Settings
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>
                    <button
                      style={{
                        background: gettab === 13 ? "#ff8b00" : "#fff",
                        color: gettab === 13 ? "#fff" : "#000",
                        fontWeight: gettab === 13 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(13)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      Product Rate card
                    </button>
                    <button
                      style={{
                        background:
                          gettab === 40 || gettab === 41 ? "#ff8b00" : "#fff",
                        color: gettab === 40 || gettab === 41 ? "#fff" : "#000",
                        fontWeight:
                          gettab === 40 || gettab === 41 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(40)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn profile_sidebar_sig_btn_padding">
                      - Landing Page <br />
                      1/2 Page Tile
                    </button>
                    <button
                      style={{
                        background:
                          gettab === 46 || gettab === 47 ? "#ff8b00" : "#fff",
                        color: gettab === 46 || gettab === 47 ? "#fff" : "#000",
                        fontWeight:
                          gettab === 46 || gettab === 47 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(46)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn profile_sidebar_sig_btn_padding">
                      - Landing Page <br />
                      Square Tiles
                    </button>
                    <button
                      style={{
                        background:
                          gettab === 42 || gettab === 43 ? "#ff8b00" : "#fff",
                        color: gettab === 42 || gettab === 43 ? "#fff" : "#000",
                        fontWeight:
                          gettab === 42 || gettab === 43 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(42)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn profile_sidebar_sig_btn_padding">
                      - Landing Page <br />
                      Leaderboard Banners
                    </button>
                    <button
                      style={{
                        background:
                          gettab === 3 || gettab === 20 ? "#ff8b00" : "#fff",
                        color: gettab === 3 || gettab === 20 ? "#fff" : "#000",
                        fontWeight:
                          gettab === 3 || gettab === 20 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(3)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn profile_sidebar_sig_btn_padding">
                      - In Mall Leaderboard <br /> Banners
                    </button>
                    <button
                      style={{
                        background:
                          gettab === 4 || gettab === 21 ? "#ff8b00" : "#fff",
                        color: gettab === 4 || gettab === 21 ? "#fff" : "#000",
                        fontWeight:
                          gettab === 4 || gettab === 21 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(4)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn profile_sidebar_sig_btn_padding">
                      - In Mall Promotional <br /> Banners
                    </button>
                    <button
                      style={{
                        background:
                          gettab === 5 || gettab === 22 ? "#ff8b00" : "#fff",
                        color: gettab === 5 || gettab === 22 ? "#fff" : "#000",
                        fontWeight:
                          gettab === 5 || gettab === 22 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(5)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn profile_sidebar_sig_btn_padding">
                      - In Mall Brand
                      <br /> Banner Slider
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>
                    <button
                      style={{
                        background:
                          gettab === 6 || gettab === 23 ? "#ff8b00" : "#fff",
                        color: gettab === 6 || gettab === 23 ? "#fff" : "#000",
                        fontWeight:
                          gettab === 6 || gettab === 23 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(6)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn profile_sidebar_sig_btn_padding">
                      - In Mall Product Tiles
                    </button>

                    <button
                      style={{
                        background: gettab === 26 ? "#ff8b00" : "#fff",
                        color: gettab === 26 ? "#fff" : "#000",
                        fontWeight: gettab === 26 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000",
                      }}
                      onClick={() => setTab(26)}
                      className="profile_sidebar_sig_btn">
                      - My Analytics
                    </button>
                    <button
                      style={{
                        background: gettab === 7 ? "#ff8b00" : "#fff",
                        color: gettab === 7 ? "#fff" : "#000",
                        fontWeight: gettab === 7 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      // onClick={() => setTab(7)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      Track My Analytics
                    </button>

                    {/* <button
                      style={{
                        background: gettab === 8 ? "#ff8b00" : "#fff",
                        color: gettab === 8 ? "#fff" : "#000",
                        fontWeight: gettab === 8 ? "700" : "500",
                        width: sidebaropen ? "350px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(8)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      My Brand in Mall
                    </button> */}

                    <button
                      style={{
                        background: gettab === 25 ? "#ff8b00" : "#fff",
                        color: gettab === 25 ? "#fff" : "#000",
                        fontWeight: gettab === 25 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000",
                      }}
                      onClick={() => setTab(25)}
                      className="profile_sidebar_sig_btn">
                      - My Archives
                    </button>
                    <button
                      style={{
                        background: gettab === 9 ? "#ff8b00" : "#fff",
                        color: gettab === 9 ? "#fff" : "#000",
                        fontWeight: gettab === 9 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(9)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      My Cart
                    </button>

                    <button
                      style={{
                        background: gettab === 14 ? "#ff8b00" : "#fff",
                        color: gettab === 14 ? "#fff" : "#000",
                        fontWeight: gettab === 14 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(14)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      FAQ
                    </button>
                    {/* <button
                      style={{
                        background: gettab === 15 ? "#ff8b00" : "#fff",
                        color: gettab === 15 ? "#fff" : "#000",
                        fontWeight: gettab === 15 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(15)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      Table
                    </button> */}
                    {/* <button
                      style={{
                        background: gettab === 16 ? "#ff8b00" : "#fff",
                        color: gettab === 16 ? "#fff" : "#000",
                        fontWeight: gettab === 16 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(16)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      Thank You
                    </button> */}
                    {/* <button
                      style={{
                        background: gettab === 17 ? "#ff8b00" : "#fff",
                        color: gettab === 17 ? "#fff" : "#000",
                        fontWeight: gettab === 17 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(17)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      Thank You Card
                    </button> */}
                    {/* <button
                      style={{
                        background: gettab === 111 ? "#ff8b00" : "#fff",
                        color: gettab === 111 ? "#fff" : "#000",
                        fontWeight: gettab === 111 ? "700" : "500",
                        width: sidebaropen ? "275px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(111)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      Location{" "}
                    </button> */}

                    {/* <button
                      style={{
                        background: gettab === 12 ? "#ff8b00" : "#fff",
                        color: gettab === 12 ? "#fff" : "#000",
                        fontWeight: gettab === 12 ? "700" : "500",
                        width: sidebaropen ? "350px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderLeft: "1px solid",
                      }}
                      onClick={() => setTab(12)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      Checkout
                    </button> */}
                  </div>

                  <div>
                    <div
                      className="profile_sidebar_sig_btn_right_arrow"
                      onClick={() => {
                        setSidebarOpen(!sidebaropen);
                      }}>
                      <FiChevronLeft color="#fff" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* side-bar end  */}

            {/* main-cotainer start */}
            <div className="profile_main_sec_wrapp">
              <div className="">
                {gettab !== 2 &&
                gettab !== 14 &&
                gettab !== 12 &&
                gettab !== 9 ? (
                  <BrandHeroEdit
                    get_mall_auth_data={get_store_data}
                    sidebaropen={sidebaropen}
                    setTab={setTab}
                  />
                ) : null}
              </div>

              {gettab === 111 && (
                <LocationComponent
                  setTab={setTab}
                  get_mall_auth_data={get_store_data}
                  sidebaropen={sidebaropen}
                />
              )}
              {gettab === 1 && (
                <RetailerProfile
                  setTab={setTab}
                  get_mall_auth_data={get_store_data}
                  sidebaropen={sidebaropen}
                />
              )}
              {gettab === 2 && (
                <BrandAccountSetting
                  get_mall_auth_data={get_store_data}
                  setTab={setTab}
                  getTab={gettab}
                  sidebaropen={sidebaropen}
                />
              )}
              {gettab === 3 && (
                <LeaderBoard
                  get_mall_auth_data={get_store_data}
                  setTab={setTab}
                  getTab={gettab}
                />
              )}
              {gettab === 4 && (
                <PromotionalBanner
                  get_mall_auth_data={get_store_data}
                  setTab={setTab}
                  getTab={gettab}
                />
              )}
              {gettab === 5 && (
                <ProductBanner
                  get_mall_auth_data={get_store_data}
                  setTab={setTab}
                  getTab={gettab}
                />
              )}
              {gettab === 6 && (
                <ProductTiles
                  get_mall_auth_data={get_store_data}
                  setTab={setTab}
                  getTab={gettab}
                />
              )}
              {/* {gettab === 7 && (
                <RetailerTrackAnalytics
                  get_mall_auth_data={get_store_data}
                  setTab={setTab}
                />
              )} */}
              {/* {gettab === 7 && (
                <ChooseProduct
                  get_mall_auth_data={get_store_data}
                  setTab={setTab}
                />
              )} */}
              {/* {gettab === 8 && (
                <BrandInMall
                  get_mall_auth_data={get_store_data}
                  setTab={setTab}
                  getTab={gettab}
                />
              )} */}
              {gettab === 9 && (
                <BrandCart
                  get_mall_auth_data={get_store_data}
                  setTab={setTab}
                  getTab={gettab}
                />
              )}
              {gettab === 10 && (
                <BrandEdit
                  get_mall_auth_data={get_store_data}
                  setTab={setTab}
                  getTab={gettab}
                />
              )}
              {gettab === 11 && (
                <StoreThankyou
                  setTab={setTab}
                  get_mall_auth_data={get_store_data}
                  getTab={gettab}
                />
              )}
              {gettab === 12 && (
                <StoreCheckout
                  setTab={setTab}
                  get_mall_auth_data={get_store_data}
                  getTab={gettab}
                />
              )}
              {gettab === 13 && (
                <RetailerProRateCard
                  get_mall_auth_data={get_cinema_data}
                  sidebaropen={sidebaropen}
                  setTab={setTab}
                  gettab={gettab}
                />
              )}
              {gettab === 14 && <RetailerFaqPage />}
              {/* {gettab === 14 && <FaqCinema />} */}

              {/* {gettab === 15 && <Table />} */}

              {gettab === 16 && <RetailerThankYou />}
              {gettab === 17 && <RetailerTQCard />}

              {gettab === 20 && (
                <AddLeaderboardBanner
                  setTab={setTab}
                  get_mall_auth_data={get_store_data}
                  getTab={gettab}
                />
              )}
              {gettab === 21 && (
                <AddPromotionBanner
                  setTab={setTab}
                  get_mall_auth_data={get_store_data}
                  getTab={gettab}
                />
              )}
              {gettab === 22 && (
                <AddProductBanner
                  setTab={setTab}
                  get_mall_auth_data={get_store_data}
                  getTab={gettab}
                />
              )}
              {gettab === 23 && (
                <AddProductTilesBanner
                  setTab={setTab}
                  get_mall_auth_data={get_store_data}
                  getTab={gettab}
                />
              )}
              {gettab === 24 && (
                <UploadMultipleBrand
                  setTab={setTab}
                  get_mall_auth_data={get_store_data}
                  getTab={gettab}
                />
              )}
              {gettab === 40 && (
                <RetailLandingpageTile
                  setTab={setTab}
                  get_mall_auth_data={get_store_data}
                  getTab={gettab}
                />
              )}
              {gettab === 41 && (
                <AddRetailLandingPageBanner
                  getsingleStoreData={getsingleStoreData}
                  get_mall_auth_data={get_store_data}
                  getstore_is={getstore_is}
                  setTab={setTab}
                />
              )}
              {gettab === 42 && (
                <RetailerLandingPageLeaderboard
                  getsingleStoreData={getsingleStoreData}
                  get_mall_auth_data={get_store_data}
                  getstore_is={getstore_is}
                  setTab={setTab}
                  getTab={gettab}
                />
              )}
              {/* RetailerAddCinemaLandingpageLeaderboard */}
              {gettab === 43 && (
                <AddRetailerLandingpageLeaderboard
                  getsingleStoreData={getsingleStoreData}
                  get_mall_auth_data={get_store_data}
                  getstore_is={getstore_is}
                  setTab={setTab}
                />
              )}
              {gettab === 46 && (
                <RetailLandingPageSquareTile
                  getsingleStoreData={getsingleStoreData}
                  get_mall_auth_data={get_store_data}
                  getstore_is={getstore_is}
                  setTab={setTab}
                  getTab={gettab}
                />
              )}
              {gettab === 47 && (
                <RetailerAddLandingPageSquareTile
                  getsingleStoreData={getsingleStoreData}
                  get_mall_auth_data={get_store_data}
                  getstore_is={getstore_is}
                  setTab={setTab}
                />
              )}
              {gettab === 25 && (
                <ArchivesBrand
                  getsingleStoreData={getsingleStoreData}
                  get_mall_auth_data={get_store_data}
                  getstore_is={getstore_is}
                  setTab={setTab}
                  gettab={gettab}
                />
              )}

              {gettab === 26 && (
                <BrandAnalytics setTab={setTab} gettab={gettab}   get_mall_auth_data={get_store_data}  />
              )}
              {gettab === 27 && (
                <BuyBrandAnalytics setTab={setTab} gettab={gettab} />
              )}
            </div>
            {/* main-cotainer end */}
          </div>
        </div>
      )}
    </>
  );
};

export default BrandDashboard;