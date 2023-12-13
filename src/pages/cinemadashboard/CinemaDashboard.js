import React, { useEffect, useState } from "react";
import "./CinemaDashboard.css";
import { CinemaNavbar, Footer, Navbar } from "../../common";
import { FiChevronLeft } from "react-icons/fi";
import {
  CinemaAccountSetting,
  CinemaProfilePage,
  MallHero,
  MallNavbar,
} from "../../components";
import { CSSTransition } from "react-transition-group";

import {
  AddEateries,
  AddMallFacility,
  CinemaCart,
  CinemaCheckout,
  CinemaThankYou,
  ContactDetail,
  Eateries,
  EditEateriesDetails,
  EditFacilities,
  EditMallEvent,
  EditStoreDetail,
  Facilities,
  MallAddEvents,
  MallAddMvie,
  MallEditMovie,
  MallEvents,
  MallManagement,
  MallMovieCards,
  MallProfilePart,
  RetailerTypeSheet,
  StoreDirectory,
  UploadEateryDirectory,
  UploadMovieDirectory,
  UploadSd,
  UploadStoreDirectory,
} from "../../container";
import { useMallContext } from "../../context/mall_context";
import { useMeventContext } from "../../context/mevent_context";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  ACCEPT_HEADER,
  get_eatery_mall_wise,
  get_mall_event,
  get_store_mall_wise,
} from "../../utils/Constant";
import MallAddStore from "../../container/MallAddStore";
import CinemaTiles from "../../container/cinematiles/CinemaTiles";
import CinemaTahankYou from "../../container/cinemathankyou/CinemaThankYou";
import CinemaProRateCard from "../../container/cinemaproratecard/CinemaProRateCard";
import FaqPage from "../faqpage/FaqPage";
import MallCart from "../../container/mallCart/MallCart";

const CinemaDashboard = () => {
  const {
    get_mall_auth_data,
    get_mall_store_data,
    get_mall_auth_loading,
    getMallAuthWise,
  } = useMallContext();
  const { get_mevent_data } = useMeventContext();
  const [gettab, setTab] = useState(1);
  const [geteventId, setEventId] = useState();
  const [geteventData, setEventData] = useState();
  const [getstore_is, setStore_id] = useState();
  const [getfacility_id, setfacility_id] = useState();
  const [getsingleStoreData, setSingleStoreData] = useState({});
  const [getsinglefacilitydata, setsinglefacilitydata] = useState({});
  const [sidebaropen, setSidebarOpen] = useState(true);
  const [mallheadname, setMallheadname] = useState("");
  const [getsingleEventData, setSingleEventData] = useState({});
  const [geteventdata1, SetEventData] = useState("");
  const [showElement, setShowElement] = useState(true);

  // store api start
  const storePerPage = 3;
  const [storetotalPages, setStoreTotalPages] = useState(1);
  const [storepage, setStorePage] = useState(1);

  // store api end

  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(false);
  const perPage = 3;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const EventApi = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    setLoading(true);
    fetch(get_mall_event + `?per_page=${perPage}&page=${page}`, {
      method: "GET",
      headers: {
        Accept: ACCEPT_HEADER,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("re754775775675", res.data);
        setTotalPages(res.data.last_page);
        setEventList([...eventList, ...res.data.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    EventApi();
  }, [page]);

  // eatery api start

  const eateryPerPage = 3;
  const [eaterytotalPages, setEateryTotalPages] = useState(1);
  const [eaterypage, setEateryPage] = useState(1);

  const [moviedata, SetMovieData] = useState("");

  const [geteatery, SetEatery] = useState(false);

  // eatery api end

  const navigate = useNavigate();

  var islogin = localStorage.getItem("is_login");

  console.log("get_mall_auth_data", get_mall_auth_data);

  useEffect(() => {
    setMallheadname(get_mall_auth_data.name);
  }, []);

  useEffect(() => {
    if (
      get_mall_auth_data === "" ||
      get_mall_auth_data == null ||
      get_mall_auth_data.length === 0 ||
      get_mall_auth_data == undefined
    ) {
      window.location.reload(false);
      navigate("/");
    }
  }, []);

  useEffect(() => {
    getMallAuthWise();
    console.log("geteventData", geteventData);
    console.log("getsingleStoreData", getsingleStoreData);
    // window.location.reload(true);
  }, []);

  console.log("edit store is is", getstore_is);

  // Mall Event Api Start

  // const [eventList, setEventList] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const perPage = 3;
  // const [totalPages, setTotalPages] = useState(1);
  // const [page, setPage] = useState(1);

  const [getbranddata, SetBrandData] = useState("");

  // const EventApi = async () => {
  //   console.log("event checked");
  //   const token = await JSON.parse(localStorage.getItem("is_token"));
  //   setLoading(true);
  //   fetch(get_mall_event + ?per_page=${perPage}&page=${page}, {
  //     method: "GET",
  //     headers: {
  //       Accept: ACCEPT_HEADER,
  //       Authorization: "Bearer " + token,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("event_list", res.data.last_page);
  //       setTotalPages(res.data.last_page);
  //       setEventList([...eventList, ...res.data.data]);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // };

  // useEffect(() => {
  //   EventApi();
  // }, [page]);

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
  // Facility data map

  // const = { get_facility_data } = useMa

  // const history = useNavigate();

  // useEffect(() => {
  //   const preventNavigation = (e) => {
  //     e.preventDefault();
  //     e.returnValue = ''; // For Chrome
  //   };

  //   const confirmNavigation = () => {
  //     return 'Are you sure you want to leave this page?';
  //   };

  //   history.block(confirmNavigation);

  //   window.addEventListener('beforeunload', preventNavigation);

  //   return () => {
  //     history.block(null);
  //     window.removeEventListener('beforeunload', preventNavigation);
  //   };
  // }, [history]);

  const [isPromptActive, setPromptActive] = useState(false);

  useEffect(() => {
    const confirmNavigation = (e) => {
      e.preventDefault();
      e.returnValue = ""; // For Chrome
    };

    const handleBeforeUnload = (e) => {
      if (isPromptActive) {
        confirmNavigation(e);
      }
    };

    const handleNavigation = (location) => {
      if (location.pathname === "/your-specific-url") {
        setPromptActive(true);
      } else {
        setPromptActive(false);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isPromptActive]);

  const handlePromptCancel = () => {
    setPromptActive(false);
  };

  return (
    <>
      {isPromptActive && (
        <div>
          Are you sure you want to leave?
          <button onClick={handlePromptCancel}>Stay</button>
        </div>
      )}
      <Helmet>
        <title>Profile | In-Store</title>
      </Helmet>

      <div>
        {/* <Navbar
        // setCustomerDropdown={setCustomerDropdown}
        // getcustomerDropdown={getcustomerDropdown}
        /> */}
        {/* <MallNavbar setTab={setTab} get_mall_auth_data={get_mall_auth_data} /> */}
        <CinemaNavbar />
        {get_mall_auth_loading ? (
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
          <div className="profilepage_main_wrapp profilepage_slider_transition">
            {/* side-bar start  */}

            <div style={{ backgroundColor: "#E5E4E2", minHeight: "100vh" }}>
              {/* <CSSTransition
                in={showElement}
                timeout={300}
                classNames="fade"
              // unmountOnExit
              > */}

              <div
                className="pro-side-none-resp"
                style={{
                  display: "flex",
                  gap: "5px",
                  width: sidebaropen ? "300px" : "0px",
                  transition: "width 1s ease",

                  // position: sidebaropen === true ? null : "absolute",

                  // left: sidebaropen === true ? null : "-400px",
                  // transition: 'left 2s ease'
                }}
                // className="profilepage_sidebarr profilepage_slider_transition"
              >
                <div className="profile_sidebar_wrapp">
                  <div
                    style={{
                      position: "relative",
                      width: sidebaropen ? "300px" : "0px",
                      transition: "width 1s ease",
                    }}
                    className="">
                    <button
                      style={{
                        background: gettab === 1 ? "#ff8b00" : "#fff",
                        color: gettab === 1 ? "#fff" : "#000",
                        fontWeight: gettab === 1 ? "700" : "500",
                        width: sidebaropen ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderleft: "1px solid",
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
                        width: sidebaropen ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderleft: "1px solid",
                      }}
                      onClick={() => setTab(2)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      Account Setting
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>
                    <button
                      style={{
                        background: gettab === 21 ? "#ff8b00" : "#fff",
                        color: gettab === 21 ? "#fff" : "#000",
                        fontWeight: gettab === 21 ? "700" : "500",
                        width: sidebaropen ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderleft: "1px solid",
                      }}
                      onClick={() => setTab(21)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      Product Rate Card
                    </button>
                    <button
                      style={{
                        background: gettab === 22 ? "#ff8b00" : "#fff",
                        color: gettab === 22 ? "#fff" : "#000",
                        fontWeight: gettab === 22 ? "700" : "500",
                        width: sidebaropen ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderleft: "1px solid",
                      }}
                      onClick={() => setTab(22)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      FAQ
                    </button>
                    <button
                      style={{
                        background: gettab === 3 ? "#ff8b00" : "#fff",
                        color: gettab === 3 ? "#fff" : "#000",
                        fontWeight:
                          gettab === 3 || gettab === 9 || gettab === 10
                            ? "700"
                            : "500",
                        width: sidebaropen ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderleft: "1px solid",
                      }}
                      onClick={() => setTab(3)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      {/* &nbsp;&nbsp;&nbsp; - Brands */}
                      &nbsp;&nbsp;&nbsp; - Product Tiles
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>
                    <button
                      style={{
                        background: gettab === 4 ? "#ff8b00" : "#fff",
                        color: gettab === 4 ? "#fff" : "#000",
                        fontWeight:
                          gettab === 4 || gettab === 8 ? "700" : "500",
                        width: sidebaropen ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderleft: "1px solid",
                      }}
                      onClick={() => setTab(4)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      {/* &nbsp;&nbsp;&nbsp; - Eateries */}
                      &nbsp;&nbsp;&nbsp; - Track Analytics
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>
                    <button
                      style={{
                        background: gettab === 17 ? "#ff8b00" : "#fff",
                        color: gettab === 17 ? "#fff" : "#000",
                        fontWeight: gettab === 17 ? "700" : "500",
                        width: sidebaropen ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderleft: "1px solid",
                      }}
                      onClick={() => setTab(17)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      {/* &nbsp;&nbsp;&nbsp; - Movies */}
                      &nbsp;&nbsp;&nbsp; - My Brand in Malls
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>
                    <button
                      style={{
                        background: gettab === 5 ? "#ff8b00" : "#fff",
                        color: gettab === 5 ? "#fff" : "#000",
                        fontWeight: gettab === 5 ? "700" : "500",
                        width: sidebaropen ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderleft: "1px solid",
                      }}
                      onClick={() => setTab(5)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      {/* &nbsp;&nbsp;&nbsp; - Events */}
                      &nbsp;&nbsp;&nbsp; -My Cart
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>

                    <button
                      style={{
                        background: gettab === 6 ? "#ff8b00" : "#fff",
                        color: gettab === 6 ? "#fff" : "#000",
                        fontWeight: gettab === 6 ? "700" : "500",
                        width: sidebaropen ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderleft: "1px solid",
                      }}
                      onClick={() => setTab(6)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      {/* &nbsp;&nbsp;&nbsp; - Events */}
                      &nbsp;&nbsp;&nbsp; - Cinema Checkout
                      {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                    </button>

                    <button
                      style={{
                        background: gettab === 7 ? "#ff8b00" : "#fff",
                        color: gettab === 7 ? "#fff" : "#000",
                        fontWeight: gettab === 7 ? "700" : "500",
                        width: sidebaropen ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderleft: "1px solid",
                      }}
                      onClick={() => setTab(7)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      &nbsp;&nbsp;&nbsp; - Thank You
                    </button>
                    <button
                      style={{
                        background: gettab === 23 ? "#ff8b00" : "#fff",
                        color: gettab === 23 ? "#fff" : "#000",
                        fontWeight: gettab === 23 ? "700" : "500",
                        width: sidebaropen ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                        borderRight: "1px solid",
                        borderleft: "1px solid",
                      }}
                      onClick={() => setTab(23)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn">
                      &nbsp;&nbsp;&nbsp; - Mall cart
                    </button>
                    {/* <button
                      style={{
                        background: gettab === 6 ? "#ff8b00" : "#fff",
                        color: gettab === 6 ? "#fff" :"#000",
                        fontWeight: gettab === 6 ? "700" : "500",
                        width: sidebaropen ? "400px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",

                      }}
                      onClick={() => setTab(6)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn"
                    >
                      &nbsp;&nbsp;&nbsp; - Facilities
                     
                    </button> */}
                    {/* <button
                      style={{
                        background: gettab === 7 ? "#ff8b00" : "#fff",
                        color: gettab === 7 ? "#fff" :"#000",
                        fontWeight: gettab === 7 ? "700" : "500",
                        width: sidebaropen ? "400px" : "0px",
                        overflow: "hidden",
                        transition: "width 1s ease",
                        whiteSpace: "nowrap",
                      }}
                      onClick={() => setTab(7)}
                      className="profile_sidebar_sig_btn cinema_sidebar_sig_btn"
                    >
                      Contact Details
                      
                    </button> */}

                    <div className="profilepage_slider_transition">
                      <div
                        className="profile_sidebar_sig_btn_right_arrow"
                        onClick={() => {
                          setSidebarOpen(!sidebaropen);
                          setShowElement(!showElement);

                          console.log("check", sidebaropen);
                        }}>
                        <FiChevronLeft color="#fff" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </CSSTransition> */}
            </div>

            {/* side-bar end  */}

            {/* main-cotainer start */}
            <div className="profile_main_sec_wrapp">
              {/* <div className="">
                <MallHero get_mall_auth_data={get_mall_auth_data} />
              </div> */}
              {gettab === 1 && (
                <CinemaProfilePage
                  setTab={setTab}
                  get_mall_auth_data={get_mall_auth_data}
                  sidebaropen={sidebaropen}
                />
              )}
              {gettab === 2 && (
                <CinemaAccountSetting
                  get_mall_auth_data={get_mall_auth_data}
                  sidebaropen={sidebaropen}
                  setTab={setTab}
                />
              )}
              {gettab === 21 && (
                <CinemaProRateCard
                  get_mall_auth_data={get_mall_auth_data}
                  sidebaropen={sidebaropen}
                  setTab={setTab}
                />
              )}
              {gettab === 22 && (
                <FaqPage
                  get_mall_auth_data={get_mall_auth_data}
                  sidebaropen={sidebaropen}
                  setTab={setTab}
                />
              )}
              {gettab === 23 && (
                <MallCart
                  get_mall_auth_data={get_mall_auth_data}
                  sidebaropen={sidebaropen}
                  setTab={setTab}
                />
              )}
              {gettab === 3 && (
                <CinemaTiles
                  setTab={setTab}
                  gettab={gettab}
                  get_mall_auth_data={get_mall_auth_data}
                />
              )}
              {gettab === 4 && (
                <CinemaThankYou
                  // eaterypage={eaterypage}
                  // setEateryPage={setEateryPage}
                  // eaterytotalPages={eaterytotalPages}
                  // setTab={setTab}
                  // setSingleStoreData={setSingleStoreData}
                  // getsingleStoreData={getsingleStoreData}
                  get_mall_auth_data={get_mall_auth_data}
                  // setStore_id={setStore_id}
                />
              )}
              {gettab === 5 && (
                <CinemaCart
                  get_mall_auth_data={get_mall_auth_data}
                  setTab={setTab}
                  getTab={gettab}
                />
              )}
              {gettab === 6 && (
                <CinemaCheckout
                  setTab={setTab}
                  get_mall_auth_data={get_mall_auth_data}
                />
              )}
              {gettab === 7 && (
                <CinemaThankYou get_mall_auth_data={get_mall_auth_data} />
              )}
              {gettab === 8 && (
                <EditEateriesDetails
                  getsingleStoreData={getsingleStoreData}
                  getstore_is={getstore_is}
                  setTab={setTab}
                  get_mall_auth_data={get_mall_auth_data}
                />
              )}
              {gettab === 9 && (
                <EditStoreDetail
                  getsingleStoreData={getsingleStoreData}
                  getstore_is={getstore_is}
                  get_mall_auth_data={get_mall_auth_data}
                  setTab={setTab}
                  // getStoreList={getStoreList}
                />
              )}
              {gettab === 10 && (
                <UploadStoreDirectory
                  getsingleStoreData={getsingleStoreData}
                  get_mall_auth_data={get_mall_auth_data}
                  setTab={setTab}
                />
              )}
              {gettab === 11 && (
                <EditMallEvent
                  setTab={setTab}
                  eventList={eventList}
                  geteventId={geteventId}
                  get_mall_auth_data={get_mall_auth_data}
                  EventApi={EventApi}
                  geteventdata1={geteventdata1}
                />
              )}
              {gettab === 12 && (
                <EditFacilities
                  get_mall_auth_data={get_mall_auth_data}
                  getfacility_id={getfacility_id}
                  getsinglefacilitydata={getsinglefacilitydata}
                  setTab={setTab}
                  mallheadname={mallheadname}
                />
              )}
              {gettab === 13 && (
                <MallAddEvents
                  get_mall_auth_data={get_mall_auth_data}
                  setTab={setTab}
                  // EventApi={EventApi}
                />
              )}
              {gettab === 14 && (
                <AddMallFacility
                  get_mall_auth_data={get_mall_auth_data}
                  setTab={setTab}
                />
              )}
              {gettab === 15 && (
                <AddEateries
                  get_mall_auth_data={get_mall_auth_data}
                  setTab={setTab}
                />
              )}
              {gettab === 16 && (
                <MallAddStore
                  getsingleStoreData={getsingleStoreData}
                  getstore_is={getstore_is}
                  get_mall_auth_data={get_mall_auth_data}
                  setTab={setTab}
                  // getStoreList={getStoreList}
                />
              )}

              {gettab === 17 && (
                <CinemaProfilePage
                  setTab={setTab}
                  get_mall_auth_data={get_mall_auth_data}
                  sidebaropen={sidebaropen}
                />
              )}

              {gettab === 18 && (
                <UploadMovieDirectory
                  getsingleStoreData={getsingleStoreData}
                  getstore_is={getstore_is}
                  get_mall_auth_data={get_mall_auth_data}
                  setTab={setTab}
                />
              )}

              {gettab === 19 && (
                <MallEditMovie
                  getsingleStoreData={getsingleStoreData}
                  getstore_is={getstore_is}
                  get_mall_auth_data={get_mall_auth_data}
                  setTab={setTab}
                  moviedata={moviedata}
                />
              )}
              {gettab === 20 && (
                <MallAddMvie
                  getsingleStoreData={getsingleStoreData}
                  getstore_is={getstore_is}
                  get_mall_auth_data={get_mall_auth_data}
                  setTab={setTab}
                  gettab={gettab}
                />
              )}

              {gettab === 33 && (
                <RetailerTypeSheet
                  getsingleStoreData={getsingleStoreData}
                  get_mall_auth_data={get_mall_auth_data}
                  getstore_is={getstore_is}
                />
              )}

              {gettab === 34 && (
                <UploadEateryDirectory
                  getsingleStoreData={getsingleStoreData}
                  get_mall_auth_data={get_mall_auth_data}
                  getstore_is={getstore_is}
                  setTab={setTab}
                />
              )}
            </div>
            {/* main-cotainer end */}
          </div>
        )}
      </div>
    </>
  );
};

export default CinemaDashboard;
