import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FiChevronLeft } from "react-icons/fi";
import {
  ContactDetail,
  CustomerBrandItems,
  CustomerContactDetail,
  CustomerEateriesDetails,
  CustomerFacility,
  CustomerMallEateries,
  CustomerMallMap,
  CustomerProfile,
  CustomerPromotionBanner,
  CustomerSingleBrandProducts,
  CustomerWishlist,
  CutomerMallEvents,
  FaqCinema,
  FilterResult,
  MallNearMe,
  MallNearMeBrands,
  Moviess,
  NotificationConsumer,
  ProfileAccountSetrting,
  ProfileAccountSetting,
  PromotionalBanner,
} from "../../container";
import "./CustomerDashboard.css";
import CustomerWelcomMall from "../../container/customerwelcomemall/CustomerWelcomMall";
import { CustomerBlackNavbar, CustomerNavbar, Navbar } from "../../common";
import { useCustomerContext } from "../../context/customer_context";
import Notification from "../../utils/Notification"

import {
  ACCEPT_HEADER,
  get_mall_customer,
  update_notification,
} from "../../utils/Constant";
import MallNearMeSing from "../mallnearme/MallNearMeSing";
import CustomerBrandDetails from "../../container/customerbranddetails/CustomerBrandDetails";
import images from "../../constants/images";
import { IoLocationSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import ReactModal from "react-modal";
import { CustomerSingleEateriesProducts } from "../../components";

const CustomerDashboard = () => {
  const [gettab, setTab] = useState(1);
  const [checked, setChecked] = React.useState(true);
  
  function handleChange(e) {
    setChecked(e.target.checked);
    setIsOpen3(e.target.checked);
    console.log("checked",checked);
    setTab(2);
  }
  const {
    setCustomerUpdate,
    get_customer_loading,
    get_customer_data,
    getCustomer,
  } = useCustomerContext();

  const perPage = 3;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [isAcceptTerm, setIsAcceptTerm] = useState(true);

  const [mallList, setMallList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getsingalmalldata, SetSingalMallData] = useState({});
  const [sidebaropen, setSidebarOpen] = useState(true);
  const [getbdetalis, setBDetalis] = useState();
  const [getedetalis, setEDetalis] = useState();
  const [getcusdata, setCusData] = useState();
  const [getbranddatat, setBrandData] = useState();
  const [modalIsOpen3, setIsOpen3] = useState(false);

  const [proid, SetProId] = useState("");
  const [brandid, SetBrandId] = useState("");
  const [getStoreName, setStoreName] = useState("");

  useEffect(() => {
    getMallList();
  }, [page]);

  useEffect(() => {
    getCustomer();
    console.log("get_customer_data", get_customer_data);
    setCusData(get_customer_data);
    console.log("getsingalmalldata", getsingalmalldata);
    setIsOpen3(true);
  }, []);

  function closeModal3() {
    setIsOpen3(false);
  }
  const Notificationapi = async (id) => {
    console.log("123");
    const token = await JSON.parse(localStorage.getItem("is_token"));
    const formdata = new FormData();
    await formdata.append("customer_notification", id);
    axios
      .post(update_notification, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ressss", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          Notification("success", "Success!", "Update Successfully!");
          closeModal3();
          
        }

        if(id == 0) {
          setChecked(false);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const loaction = useLocation();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      backgroundColor: "none",
      border: "none",
      borderRadius: "0px",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };

  useEffect(() => {
    console.log("loaction----->", loaction.state);
    if (loaction.state !== null) {
      SetSingalMallData(loaction.state.item);
    } else {
      const data = JSON.parse(localStorage.getItem("malldata"));

      SetSingalMallData(data);
    }
    window.scrollTo(0, 0);
    setTab(2);
  }, [loaction.state]);

  useEffect(() => {
    console.log("gettab is", gettab);
  }, []);

  const getMallList = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));

    const formdata = new FormData();
    await formdata.append("search", "");

    setLoading(true);
    fetch(get_mall_customer + `per_page=${perPage}&page=${page}`, {
      method: "POST",
      body: formdata,
      headers: {
        Accept: ACCEPT_HEADER,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("ffff", res.data.last_page);
        setTotalPages(res.data.last_page);
        setMallList([...mallList, ...res.data.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // sear mall list api

  const getSearchMallList = async (value) => {
    console.log("value", value);

    const token = await JSON.parse(localStorage.getItem("is_token"));

    const formdata = new FormData();
    await formdata.append("search", value);

    setLoading(true);
    fetch(get_mall_customer + `per_page=${perPage}&page=${page}`, {
      method: "POST",
      body: formdata,
      headers: {
        Accept: ACCEPT_HEADER,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("ffff", res.data.last_page);
        console.log("Brand_list", res.data);

        setTotalPages(res.data.last_page);
        setMallList([...mallList, ...res.data.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  console.log("get_customer_data", get_customer_data);

  // useEffect(() => {
  //   SetSingalMallData(get_customer_data);
  // }, []);

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

  const [navbardata, SetNavBarData] = useState("");
  const [navbardataName, SetNavBarDataName] = useState("");
  const [navbardata1, SetNavBarData1] = useState("");

  return (
    <>
      <Helmet>
        <title>Customer Dashboard | In-store</title>
      </Helmet>

      <div>
        {/* <Navbar
        // setCustomerDropdown={setCustomerDropdown} getcustomerDropdown={getcustomerDropdown}
        /> */}

        <CustomerNavbar
          setTab={setTab}
          getsingalmalldata={getsingalmalldata}
          getcusdata={getcusdata}
          SetNavBarData={SetNavBarData}
          SetNavBarData1={SetNavBarData1}
          SetNavBarDataName={SetNavBarDataName}
          navbardataName={navbardataName}
          navbardata={navbardata}
        />
        <CustomerBlackNavbar
          mallname={getsingalmalldata.name}
          title={
            gettab === 2
              ? "Promotions"
              : gettab === 3
              ? "Brands"
              : gettab === 4
              ? "Eateries"
              : gettab === 5
              ? "Events"
              : gettab === 6
              ? "Facilities"
              : gettab === 8
              ? "My wishlist"
              : gettab === 9
              ? "Account Setting"
              : gettab === 28
              ? "Movies"
              : gettab === 29
              ? "Map"
              : gettab === 26
              ? "Brands"
              : gettab === 27
              ? "Eateries"
              : ""
          }
        />
        {get_customer_loading === true ? (
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
          <div
            style={{
              transition: "width 1s ease",
            }}>
            <div className="profilepage_main_wrapp">
              {/* style={{ transform: sidebaropen === true ? "translate(px, 0px)" : "translate(-300px, 0px)" }} */}

              {/* side-bar start  */}
              <div 
                style={{ backgroundColor: "#E5E4E2" }}
                className={`${
                  sidebaropen
                    ? "cus_slider_gray_color_main"
                    : "cus_slider_gray_color_main2"
                }`} >
                <div
                  className="cust-sidemenu-resp"
                  style={{
                    display: "flex",
                    gap: "5px",
                    width: "25%",

                    width: sidebaropen ? "100%" : "0px",
                    transition: "width 1s ease",
                    background: "#d4d4d4",
                  }}>
                  <div className="customer_sidebar_wrapp">
                    <div
                      style={{
                        position: "relative",
                        width: sidebaropen ? "100%" : "0px",
                        transition: "width 1s ease",
                      }}>
                      <div
                        style={{
                          background: gettab === 1 ? "#ff8b00" : "#fff",
                          fontWeight: gettab === 1 ? "700" : "500",
                          width: sidebaropen ? "100%" : "0px",
                          color: gettab === 1 ? "#fff" : "#000",
                          overflow: "hidden",
                          transition: "width 1s ease",
                          whiteSpace: "nowrap",
                          position: "relative",
                        }}
                        className="customer-sidebar-profile-part"
                        onClick={() => setTab(1)}>
                        <div className="cus-profile-mall-banner-main">
                          <img
                            alt=""
                            src={
                              getsingalmalldata.banner_mall_path === null
                                ? images.mall_hero_banner
                                : getsingalmalldata.banner_mall_path
                            }
                            className="cus-profile-mall-banner"
                          />
                          <div
                            className={`${
                              sidebaropen
                                ? "customer-sidebar-profile-img"
                                : "customer-sidebar-profile-img-none"
                            }`}>
                            <img
                              alt=""
                              src={
                                getsingalmalldata.shopping_center_logo_mall_path ===
                                null
                                  ? getsingalmalldata.mall_hero_logo
                                  : getsingalmalldata.shopping_center_logo_mall_path
                              }
                              className="customer-sidebar-profile-img_inner"
                            />
                          </div>
                        </div>
                        <div style={{ alignSelf: "start", paddingLeft: "9%",width:"300px" }}>
                          <p
                            className="customer-sidebar-name customer-sidebar-name-headdd"
                            style={{
                              marginBottom: "10px",
                              whiteSpace: "nowrap",
                              color: gettab === 1 ? "#fff" : "#000",
                              

                            }}>
                            {getsingalmalldata.name}
                          </p>
                          <div className="customer-sidebar-location-flex">
                            <IoLocationSharp
                              style={{ color: gettab === 1 ? "#fff" : "#000" }}
                            />
                            <p
                              className="customer-sidebar-location"
                              style={{
                                whiteSpace: "nowrap",
                                color: gettab === 1 ? "#fff" : "#000",
                              }}>
                              3 KM away
                            </p>
                          </div>
                          <div className="notification_checkbox">
                            <h6 style={{fontSize:"14px"}}>Opt-in for push notifications</h6>
                            <input
                              value="test"
                              type="checkbox"
                              checked={checked}

                              onChange={handleChange}
                            />
                            {/* {checked === true ? setIsOpen3(true) : <></>} */}
                          </div>
                        </div>
                      </div>

                      <>
                        <button
                          style={{
                            background:
                              gettab === 2 || gettab === 12
                                ? "#ff8b00"
                                : "#fff",
                            fontWeight:
                              gettab === 2 || gettab === 12 ? "700" : "500",
                            width: sidebaropen ? "100%" : "0px",
                            color:
                              gettab === 2 || gettab === 12 ? "#fff" : "#000",
                            overflow: "hidden",
                            transition: "width 1s ease",
                            whiteSpace: "nowrap",
                          }}
                          onClick={() => setTab(2)}
                          className="profile_sidebar_sig_btn customer_sidebar_sing_btn">
                          &nbsp;&nbsp;&nbsp; Promotions
                          {/* <div className="profile_sidebar_sig_btn_right_arrow">
                    <FiChevronLeft color="#fff" size={20} />
                  </div> */}
                        </button>
                        <button
                          style={{
                            background:
                              gettab === 3 || gettab === 26 || gettab === 36
                                ? "#ff8b00"
                                : "#fff",
                            fontWeight:
                              gettab === 3 || gettab === 26 || gettab === 36
                                ? "700"
                                : "500",
                            width: sidebaropen ? "100%" : "0px",
                            color:
                              gettab === 3 || gettab === 26 || gettab === 36
                                ? "#fff"
                                : "#000",
                            overflow: "hidden",
                            transition: "width 1s ease",
                            whiteSpace: "nowrap",
                          }}
                          onClick={() => setTab(3)}
                          className="profile_sidebar_sig_btn customer_sidebar_sing_btn">
                          &nbsp;&nbsp;&nbsp; Brands
                          {/* <div className="profile_sidebar_sig_btn_right_arrow">
                    <FiChevronLeft color="#fff" size={20} />
                  </div> */}
                        </button>
                        <button
                          style={{
                            background:
                              gettab === 4 || gettab === 27
                                ? "#ff8b00"
                                : "#fff",
                            fontWeight:
                              gettab === 4 || gettab === 27 ? "700" : "500",
                            width: sidebaropen ? "100%" : "0px",
                            overflow: "hidden",
                            color:
                              gettab === 4 || gettab === 27 ? "#fff" : "#000",
                            transition: "width 1s ease",
                            whiteSpace: "nowrap",
                          }}
                          onClick={() => setTab(4)}
                          className="profile_sidebar_sig_btn customer_sidebar_sing_btn">
                          &nbsp;&nbsp;&nbsp; Eateries
                          {/* <div className="profile_sidebar_sig_btn_right_arrow">
                    <FiChevronLeft color="#fff" size={20} />
                  </div> */}
                        </button>

                        <button
                          style={{
                            background: gettab === 28 ? "#ff8b00" : "#fff",
                            fontWeight: gettab === 28 ? "700" : "500",
                            width: sidebaropen ? "100%" : "0px",
                            color: gettab === 28 ? "#fff" : "#000",
                            overflow: "hidden",
                            transition: "width 1s ease",
                            whiteSpace: "nowrap",
                          }}
                          onClick={() => setTab(28)}
                          className="profile_sidebar_sig_btn customer_sidebar_sing_btn">
                          &nbsp;&nbsp;&nbsp; Cinema
                          {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                        </button>
                        <button
                          style={{
                            background: gettab === 5 ? "#ff8b00" : "#fff",
                            fontWeight: gettab === 5 ? "700" : "500",
                            width: sidebaropen ? "100%" : "0px",
                            color: gettab === 5 ? "#fff" : "#000",
                            overflow: "hidden",
                            transition: "width 1s ease",
                            whiteSpace: "nowrap",
                          }}
                          onClick={() => setTab(5)}
                          className="profile_sidebar_sig_btn customer_sidebar_sing_btn">
                          &nbsp;&nbsp;&nbsp; Events
                          {/* <div className="profile_sidebar_sig_btn_right_arrow">
                    <FiChevronLeft color="#fff" size={20} />
                  </div> */}
                        </button>
                        <button
                          style={{
                            background: gettab === 6 ? "#ff8b00" : "#fff",
                            fontWeight: gettab === 6 ? "700" : "500",
                            width: sidebaropen ? "100%" : "0px",
                            color: gettab === 6 ? "#fff" : "#000",
                            overflow: "hidden",
                            transition: "width 1s ease",
                            whiteSpace: "nowrap",
                          }}
                          onClick={() => setTab(6)}
                          className="profile_sidebar_sig_btn customer_sidebar_sing_btn">
                          &nbsp;&nbsp;&nbsp; Facilities
                          {/* <div className="profile_sidebar_sig_btn_right_arrow">
                    <FiChevronLeft color="#fff" size={20} />
                  </div> */}
                        </button>
                      </>

                      <button
                        style={{
                          background: gettab === 29 ? "#ff8b00" : "#fff",
                          fontWeight: gettab === 29 ? "700" : "500",
                          width: sidebaropen ? "100%" : "0px",
                          color: gettab === 29 ? "#fff" : "#000",
                          overflow: "hidden",
                          transition: "width 1s ease",
                          whiteSpace: "nowrap",
                        }}
                        onClick={() => setTab(29)}
                        className="profile_sidebar_sig_btn customer_sidebar_sing_btn">
                        &nbsp;&nbsp;&nbsp; Mall Map
                        {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                      </button>

                      {/* <button
                    style={{
                      background: gettab === 7 ? "#ff8b00" : "#ffb103",
                      fontWeight: gettab === 7 ? "700" : "500",
                    }}
                    onClick={() => setTab(11)}
                    className="profile_sidebar_sig_btn customer_sidebar_sing_btn"
                  >
                    My Profile
                    <div className="profile_sidebar_sig_btn_right_arrow">
                      <FiChevronLeft color="#fff" size={20} />
                    </div>
                  </button> */}
                      <button
                        style={{
                          background: gettab === 8 ? "#ff8b00" : "#fff",
                          fontWeight: gettab === 8 ? "700" : "500",
                          width: sidebaropen ? "100%" : "0px",
                          color: gettab === 8 ? "#fff" : "#000",
                          overflow: "hidden",
                          transition: "width 1s ease",
                          whiteSpace: "nowrap",
                        }}
                        onClick={() => setTab(8)}
                        className="profile_sidebar_sig_btn customer_sidebar_sing_btn">
                        &nbsp;&nbsp;&nbsp; My wishlist
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
                    className="profile_sidebar_sig_btn customer_sidebar_sing_btn"
                  >
                    Logout
                    <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div>
                  </button> */}
                      {/* <button
                    style={{
                      background: gettab === 26 ? "#ff8b00" : "#ffb103",
                      fontWeight: gettab === 26 ? "700" : "500",
                    }}
                    onClick={() => setTab(26)}
                    className="profile_sidebar_sig_btn customer_sidebar_sing_btn"
                  >
                    Brand details
                  </button> */}
                      {/* <button
                    style={{
                      background: gettab === 27 ? "#ff8b00" : "#ffb103",
                      fontWeight: gettab === 27 ? "700" : "500",
                    }}
                    onClick={() => setTab(27)}
                    className="profile_sidebar_sig_btn customer_sidebar_sing_btn"
                  >
                    Eateries Details
                 
                  </button> */}

                      <button
                        style={{
                          background: gettab === 30 ? "#ff8b00" : "#fff",
                          fontWeight: gettab === 30 ? "700" : "500",
                          width: sidebaropen ? "100%" : "0px",
                          color: gettab === 30 ? "#fff" : "#000",
                          overflow: "hidden",
                          transition: "width 1s ease",
                          whiteSpace: "nowrap",
                        }}
                        onClick={() => setTab(30)}
                        className="profile_sidebar_sig_btn customer_sidebar_sing_btn">
                        &nbsp;&nbsp;&nbsp; Contact the Mall
                        {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                      </button>

                      <button
                        style={{
                          background: gettab === 37 ? "#ff8b00" : "#fff",
                          fontWeight: gettab === 37 ? "700" : "500",
                          width: sidebaropen ? "100%" : "0px",
                          color: gettab === 37 ? "#fff" : "#000",
                          overflow: "hidden",
                          transition: "width 1s ease",
                          whiteSpace: "nowrap",
                        }}
                        onClick={() => setTab(37)}
                        className="profile_sidebar_sig_btn customer_sidebar_sing_btn">
                        &nbsp;&nbsp;&nbsp; FAQ
                        {/* <div className="profile_sidebar_sig_btn_right_arrow">
                  <FiChevronLeft color="#fff" size={20} />
                </div> */}
                      </button>

                      <button
                        style={{
                          background: gettab === 9 ? "#ff8b00" : "#fff",
                          fontWeight: gettab === 9 ? "700" : "500",
                          width: sidebaropen ? "100%" : "0px",
                          color: gettab === 9 ? "#fff" : "#000",
                          overflow: "hidden",
                          transition: "width 1s ease",
                          whiteSpace: "nowrap",
                        }}
                        onClick={() => setTab(9)}
                        className="profile_sidebar_sig_btn customer_sidebar_sing_btn">
                        &nbsp;&nbsp;&nbsp; Account Settings
                      </button>
                      {/* <button
                        style={{
                          background: gettab === 38 ? "#ff8b00" : "#fff",
                          fontWeight: gettab === 38 ? "700" : "500",
                          width: sidebaropen ? "100%" : "0px",
                          color: gettab === 38 ? "#fff" : "#000",
                          overflow: "hidden",
                          transition: "width 1s ease",
                          whiteSpace: "nowrap",
                        }}
                        onClick={() => setTab(38)}
                        className="profile_sidebar_sig_btn customer_sidebar_sing_btn">
                        &nbsp;&nbsp;&nbsp; Notifications
                      </button> */}

                      <div>
                        <div
                          className="profile_sidebar_sig_btn_right_arrow"
                          onClick={() => {
                            setSidebarOpen(!sidebaropen);
                            console.log("check", sidebaropen);
                          }}>
                          <FiChevronLeft color="#fff" size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* side-bar end  */}

              {/* side-bar second start  */}

              {/* side-bar second end  */}

              {/* main-cotainer start */}
              <div
                className={`${
                  sidebaropen
                    ? "profile_main_sec_wrapp cust-main-sec-wrapp"
                    : "cust-main-sec-wrapp2"
                }`}>
                {/* <div className="profile_main_sec_wrapp cust-main-sec-wrapp "> */}
                {/* <div className=""> */}
                {/* <MallHero get_mall_auth_data={get_mall_auth_data} /> */}
                {/* </div> */}
                {/* {gettab === 1 && (
                 
                  <MallNearMe
                    mallList={mallList}
                    page={page}
                    setPage={setPage}
                    setTab={setTab}
                    totalPages={totalPages}
                    loading={loading}
                    SetSingalMallData={SetSingalMallData}
                    getSearchMallList={getSearchMallList}
                    getMallList={getMallList}
                    setMallList={setMallList}
                  />
                )} */}
                {gettab === 2 && (
                  <CustomerPromotionBanner
                    getsingalmalldata={getsingalmalldata}
                    setTab={setTab}
                    SetProId={SetProId}
                    SetBrandId={SetBrandId}
                    navbardata={navbardata}
                    setStoreName={setStoreName}
                  />
                )}
                {gettab === 3 && (
                  <MallNearMeBrands
                    getsingalmalldata={getsingalmalldata}
                    setTab={setTab}
                    setBDetalis={setBDetalis}
                  />
                )}
                {gettab === 4 && (
                  <CustomerMallEateries
                    getsingalmalldata={getsingalmalldata}
                    setTab={setTab}
                    setEDetalis={setEDetalis}
                  />
                )}
                {gettab === 5 && (
                  <CutomerMallEvents getsingalmalldata={getsingalmalldata} />
                )}
                {gettab === 6 && (
                  <>
                    <CustomerFacility
                      getsingalmalldata={getsingalmalldata}
                      setTab={setTab}
                    />
                  </>
                )}
                {gettab === 7 && <CustomerProfile setTab={setTab} />}
                {gettab === 8 && (
                  <>
                    <CustomerWishlist setTab={setTab} />
                  </>
                )}

                {/* {gettab === 8 && <></>} */}
                {gettab === 9 && <ProfileAccountSetting />}
                {gettab === 10 && (
                  // <CustomerPromotionBanner />
                  <></>
                )}
                {gettab === 1 && (
                  <CustomerWelcomMall
                    setTab={setTab}
                    getsingalmalldata={getsingalmalldata}
                  />
                )}
                {gettab === 12 && (
                  <CustomerBrandItems
                    setTab={setTab}
                    getsingalmalldata={getsingalmalldata}
                    proid={proid}
                    brandid={brandid}
                    sidebaropen={sidebaropen}
                    getStoreName={getStoreName}
                  />
                )}
                {gettab === 25 && <MallNearMeSing setTab={setTab} />}
                {gettab === 26 && (
                  <CustomerBrandDetails
                    setTab={setTab}
                    getsingalmalldata={getsingalmalldata}
                    getbdetalis={getbdetalis}
                    setBrandData={setBrandData}
                  />
                )}

                {gettab === 27 && (
                  <CustomerEateriesDetails
                    setTab={setTab}
                    getsingalmalldata={getsingalmalldata}
                    getedetalis={getedetalis}
                  />
                )}
                {gettab === 28 && (
                  <Moviess
                    setTab={setTab}
                    getsingalmalldata={getsingalmalldata}
                  />
                )}
                {gettab === 29 && (
                  <CustomerMallMap
                    setTab={setTab}
                    getsingalmalldata={getsingalmalldata}
                  />
                )}
                {gettab === 30 && (
                  <CustomerContactDetail
                    setTab={setTab}
                    getsingalmalldata={getsingalmalldata}
                  />
                )}
                {gettab === 35 && (
                  <FilterResult
                    setTab={setTab}
                    getsingalmalldata={getsingalmalldata}
                    navbardata={navbardata}
                    navbardataName={navbardataName}
                    navbardata1={navbardata1}
                    brandid={brandid}
                  />
                )}
                {gettab === 36 && (
                  <CustomerSingleBrandProducts
                    getsingalmalldata={getsingalmalldata}
                    setTab={setTab}
                    setBDetalis={setBDetalis}
                    brandid={brandid}
                    getbdetalis={getbdetalis}
                  />
                )}

                {gettab === 37 && (
                  <FaqCinema
                    getsingalmalldata={getsingalmalldata}
                    setTab={setTab}
                    setBDetalis={setBDetalis}
                    brandid={brandid}
                    getbdetalis={getbdetalis}
                  />
                )}
                {gettab === 38 && (
                  <NotificationConsumer
                    getsingalmalldata={getsingalmalldata}
                    setTab={setTab}
                    setBDetalis={setBDetalis}
                    brandid={brandid}
                    getbdetalis={getbdetalis}
                  />
                )}
                {gettab === 39 && (
                  <CustomerSingleEateriesProducts
                    getsingalmalldata={getsingalmalldata}
                    setTab={setTab}
                    setEDetalis={setEDetalis}
                    brandid={brandid}
                    getedetalis={getedetalis}
                  />
                )}
              </div>
              {/* main-cotainer end */}
            </div>
          </div>
        )}
        {/* <Footer /> */}

        <ReactModal
          isOpen={modalIsOpen3}
          onRequestClose={closeModal3}
          style={customStyles}>
          <div className="home_login_model_1sec_inner">
            <button className="signup_modal_close" onClick={closeModal3}>
              <AiOutlineClose color="black" />
            </button>
            <div
              className="f-b900 fs-22 mb_16 signup_headign"
              style={{
                marginTop: "40px",
                textAlign: "center",
                fontWeight: "700 !important",
              }}>
              In-store would like to send you notifications
            </div>
            <p style={{ textAlign: "center", width: "100%" }}>
              Notifications on the latest promotions from this mall may include
              alerts, sounds and icon badges. These can be configured in
              Settings.
            </p>

            <div className="rating-star-box"></div>
            <div className="sign_input_wrapp"></div>
            <button
              onClick={() => {
                // closeModal3();
                Notificationapi(1);
              }}
              className="btn btn-orange mb_16"
              disabled={isAcceptTerm ? false : true}>
              Allow
            </button>
            <button
              className="btn mb_16"
              style={{ fontWeight: "400" }}
              onClick={() => Notificationapi(0)}
              disabled={isAcceptTerm ? false : true}>
              No, thanks
            </button>
          </div>
        </ReactModal>
      </div>
    </>
  );
};

export default CustomerDashboard;