import React, { useEffect, useState } from "react";
import "./BrandDashboard.css";
import { Footer, Navbar, RetailerNavbar } from "../../common";
import { FiChevronLeft } from "react-icons/fi";
import { BrandHeroEdit, MallHero } from "../../components";
import {
  AddProductBanner,
  AddProductTilesBanner,
  AddPromotionBanner,
  BrandAccountSetting,
  BrandCart,
  BrandEdit,
  BrandInMall,
  ChooseProduct,
  ContactDetail,
  Eateries,
  EditEateriesDetails,
  EditMallEvent,
  EditStoreDetail,
  Facilities,
  LeaderBoard,
  MallEvents,
  MallManagement,
  MallProfilePart,
  PromotionalBanner,
  RetailerProfile,
  StoreCheckout,
  StoreDirectory,
  StoreThankyou,
  UploadMultipleBrand,
  UploadSd,
  UploadStoreDirectory,
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
  const { get_mall_auth_data, get_mall_store_data } = useMallContext();
  const { get_store_data, get_store_loading, getStore } = useStoreContext();

  const { register_store_data } = useStoreContext();
  const { get_mevent_data } = useMeventContext();
  const [gettab, setTab] = useState(1);
  const [geteventId, setEventId] = useState();
  const [geteventData, setEventData] = useState();
  const [getstore_is, setStore_id] = useState();
  const [getsingleStoreData, setSingleStoreData] = useState({});
  const [loading, setLoadng] = useState(false);
  const [sidebaropen, setSidebarOpen] = useState(true);


  const navigate = useNavigate();

  useEffect(() => {
    getStore();
  }, [])

  useEffect(() => {
    if (get_store_data == undefined) {
      window.location.reload(false);
      navigate("/");
    }
  }, []);

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
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
          }}
        >
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {/* <Navbar
          // setCustomerDropdown={setCustomerDropdown}
          // getcustomerDropdown={getcustomerDropdown}
          /> */}

          <RetailerNavbar setTab={setTab} />


          <div className="profilepage_main_wrapp">
            {/* side-bar start  */}
            <div style={{ backgroundColor: "#E5E4E2", minHeight: "100vh" }}>

              <div className="pro-side-none-resp"
                style={{
                  display: "flex",
                  gap: "5px",

                  // position: sidebaropen === true ? null : "absolute",

                  // left: sidebaropen === true ? null : "-400px",
                  width: sidebaropen ? "400px" : "0px",
                  transition: "width 1s ease",
                }}
              // className="profilepage_sidebarr"
              >
                <div className="profile_sidebar_wrapp">
                  <div style={{ position: "relative", width: sidebaropen ? "400px" : "0px", transition: "width 1s ease", }}>
                    <button
                      style={{
                        background: gettab === 1 ? "#ff8b00" : "#ffb103",
                        fontWeight: gettab === 1 ? "700" : "500",
                        width: sidebaropen ? "400px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",

                      }}
                      onClick={() => setTab(1)}
                      className="profile_sidebar_sig_btn"
                    >
                      My Profile
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>
                    <button
                      style={{
                        background: gettab === 2 ? "#ff8b00" : "#ffb103",
                        fontWeight: gettab === 2 ? "700" : "500",
                        width: sidebaropen ? "400px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",

                      }}
                      onClick={() => setTab(2)}
                      className="profile_sidebar_sig_btn"
                    >
                      Account Settings
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>
                    <button
                      style={{
                        background: gettab === 3 ? "#ff8b00" : "#ffb103",
                        fontWeight: gettab === 3 ? "700" : "500",
                        width: sidebaropen ? "400px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",

                      }}
                      onClick={() => setTab(3)}
                      className="profile_sidebar_sig_btn"
                    >
                      &nbsp;&nbsp;&nbsp; - Leaderboard Banners
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>
                    <button
                      style={{
                        background: gettab === 4 ? "#ff8b00" : "#ffb103",
                        fontWeight: gettab === 4 ? "700" : "500",
                        width: sidebaropen ? "400px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",

                      }}
                      onClick={() => setTab(4)}
                      className="profile_sidebar_sig_btn"
                    >
                      &nbsp;&nbsp;&nbsp; - Promotional Banners
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>
                    <button
                      style={{
                        background: gettab === 5 ? "#ff8b00" : "#ffb103",
                        fontWeight: gettab === 5 ? "700" : "500",
                        width: sidebaropen ? "400px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",

                      }}
                      onClick={() => setTab(5)}
                      className="profile_sidebar_sig_btn"
                    >
                      &nbsp;&nbsp;&nbsp; - Product Banners
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>
                    <button
                      style={{
                        background: gettab === 6 ? "#ff8b00" : "#ffb103",
                        fontWeight: gettab === 6 ? "700" : "500",
                        width: sidebaropen ? "400px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",

                      }}
                      onClick={() => setTab(6)}
                      className="profile_sidebar_sig_btn"
                    >
                      &nbsp;&nbsp;&nbsp; - Product Tiles
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>
                    <button
                      style={{
                        background: gettab === 7 ? "#ff8b00" : "#ffb103",
                        fontWeight: gettab === 7 ? "700" : "500",
                        width: sidebaropen ? "400px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",

                      }}
                      onClick={() => setTab(7)}
                      className="profile_sidebar_sig_btn"
                    >
                      &nbsp;&nbsp;&nbsp; - Track Analytics
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>

                    <button
                      style={{
                        background: gettab === 8 ? "#ff8b00" : "#ffb103",
                        fontWeight: gettab === 8 ? "700" : "500",
                        width: sidebaropen ? "400px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",

                      }}
                      onClick={() => setTab(8)}
                      className="profile_sidebar_sig_btn"
                    >
                      My Brand in Mall
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                      <FiChevronLeft color="#fff" size={20} />
                    </div> */}
                    </button>

                    <button
                      style={{
                        background: gettab === 9 ? "#ff8b00" : "#ffb103",
                        fontWeight: gettab === 9 ? "700" : "500",
                        width: sidebaropen ? "400px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",

                      }}
                      onClick={() => setTab(9)}
                      className="profile_sidebar_sig_btn"
                    >
                      My Cart
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>

                    {/* <button
                style={{
                  background: gettab === 10 ? "#ff8b00" : "#ffb103",
                  fontWeight: gettab === 10 ? "700" : "500",
                }}
                onClick={() => setTab(10)}
                className="profile_sidebar_sig_btn"
              >
                Edit Brand
                <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div>
              </button>
                  <button
                    style={{
                      background: gettab === 11 ? "#ff8b00" : "#ffb103",
                      fontWeight: gettab === 11 ? "700" : "500",
                    }}
                    onClick={() => setTab(11)}
                    className="profile_sidebar_sig_btn"
                  >
                    Store Thankyou
                    <div className="profile_sidebar_sig_btn_right_arrow">
                      <FiChevronLeft color="#fff" size={20} />
                    </div>
                  </button> */}
                    <button
                      style={{
                        background: gettab === 12 ? "#ff8b00" : "#ffb103",
                        fontWeight: gettab === 12 ? "700" : "500",
                        width: sidebaropen ? "400px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",

                      }}
                      onClick={() => setTab(12)}
                      className="profile_sidebar_sig_btn"
                    >
                      Checkout
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>
                  </div>

                  <div>
                    <div
                      className="profile_sidebar_sig_btn_right_arrow"
                      onClick={() => {
                        setSidebarOpen(!sidebaropen);
                        console.log("check", sidebaropen);
                      }}
                    >
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
                {gettab !== 2 ? (
                  <BrandHeroEdit get_mall_auth_data={get_store_data} sidebaropen={sidebaropen} />
                ) : null}
              </div>
              {gettab === 1 && (
                <RetailerProfile
                  setTab={setTab}
                  get_mall_auth_data={get_store_data}
                  sidebaropen={sidebaropen}
                />
              )}
              {gettab === 2 && (
                <BrandAccountSetting get_mall_auth_data={get_store_data} setTab={setTab} getTab={gettab} sidebaropen={sidebaropen} />
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
              {gettab === 7 && (
                <ChooseProduct get_mall_auth_data={get_store_data} setTab={setTab} />
              )}
              {gettab === 8 && (
                <BrandInMall get_mall_auth_data={get_store_data} setTab={setTab} getTab={gettab} />
              )}
              {gettab === 9 && (
                <BrandCart
                  get_mall_auth_data={get_store_data}
                  setTab={setTab}
                  getTab={gettab}
                />
              )}

              {gettab === 10 && (
                <BrandEdit get_mall_auth_data={get_store_data} setTab={setTab} getTab={gettab} />
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
            </div>
            {/* main-cotainer end */}
          </div>
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};

export default BrandDashboard;