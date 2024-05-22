import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import images from "../../constants/images";
import "./CustomerNavbar.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useMallContext } from "../../context/mall_context";
import { useAuthContext } from "../../context/auth_context";
import { useStoreContext } from "../../context/store_context";
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import ReactModal from "react-modal";
import { GrClose } from "react-icons/gr";
import { ACCEPT_HEADER, add_rating, get_category, product_banner_tiles_customer } from "../../utils/Constant";
import axios from "axios";
import { RiNotification4Fill } from "react-icons/ri";
import Rating from "react-rating";
import Notification from "../../utils/Notification";


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

const CustomerNavbar = ({ setTab, getsingalmalldata, SetNavBarData, SetNavBarData1, SetNavBarDataName, navbardataName, navbardata }) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);
  const [modalIsOpen5, setIsOpen5] = useState(false);
  const [modalIsOpenBrand, setModalIsOpenBrand] = useState(false);

  const [getcustomerDropdown, setCustomerDropdown] = useState(false);
  const [getregisterCustomerOpen, setRegisterCustomerOpen] = useState(false);

  const [getmallname, setMallname] = useState("");
  const [getfirstname, setFirstname] = useState("");
  const [getlastname, setLastname] = useState("");
  const [getRegion, setRegion] = useState("");
  const [getemail, setEmail] = useState("");
  const [getpassword, setPassword] = useState("");
  const [getsidebarOpen, setSidebarOpen] = useState(false);
  const [getaccountOpen, setAccountOpen] = useState(false);
  const [getcondation, SetCondation] = useState(false);
  const [profile, setProfile] = useState("");
  const [isAcceptTerm, setIsAcceptTerm] = useState(false);
  const [getrole, setrole] = useState();
  const [login, SetLogin] = useState("");
  const [getcusimg, setcusimg] = useState("");
  const [catarray, SetArray] = useState([]);
  const [getcatid, SetCatId] = useState();
  const [getdprodata, SetProdata] = useState();
  const [searchValue, setSearchValue] = useState();
  const [getrating, setRating] = useState("");


  const { setMallRegister, is_login, is_token, logoutUser, role } =
    useMallContext();

  const { setLogin } = useAuthContext();

  const { getCategoryApi, getWeekApi, category_data } = useStoreContext();

  let navigate = useNavigate();
  // const redirect = location.search ? location.search.split("=")[1] : "/";
  // const redirect = "http://localhost:3000/account/login";

  function logout() {
    localStorage.clear();
    navigate("/customer");
    window.location.reload(false);
  }

  useEffect(() => {
    token();
    console.log("profile", profile);
    let role = localStorage.getItem("role");
    setrole(role);
    var islogin = localStorage.getItem("is_login");
    var customerimg = localStorage.getItem("cusimg");
    console.log("customer image is", customerimg);
    setcusimg(customerimg);
    SetLogin(islogin);
  }, []);

  const responseFacebook = (response) => {
    console.log(response);
  };
  const onLoginStart = () => {
    // console.log("Start");
  };

  const componentClicked = (click) => {
    console.log(click);
  };

  const token = async () => {
    console.log("is_token", await localStorage.getItem("is_token"));

    const login = await localStorage.getItem("is_token");
    if (login) {
      SetCondation(true);
    } else {
      SetCondation(false);
    }
  };

  const onHandleEmailChange = (e) => {
    let email = e.target.value;

    if (email === "" || regEx.test(email)) {
      setEmail(email);
    } else {
      return;
    }
  };

  const SigninCustomerGoogle = async (gmail, type, data) => {
    if (gmail === "") {
      alert("Enter the Email......!");
      return;
    } else if (regEx.test(gmail) === false) {
      alert("Enter the valid Email....!");
      return;
    } else {
      var params = {
        role: 4,
        email: gmail,
        // password: "",
        type: type,
      };

      console.log("-=-=-=->", params);
      const data = await setLogin(params);
      if (data) {
        if (data.success === 1) {
          setIsOpen3(false);
          navigate("/");
          setEmail("");
          window.location.reload(false);
        }
      }
    }
  };

  const SigninCustomerFacebook = async (fdata, type) => {
    var params = {
      role: 4,
      fb_id: fdata.id,
      first_name: fdata.first_name,
      last_name: fdata.last_name,
      type: type,
      name: fdata.name,
    };

    console.log("-=-=-=->", params);
    const data = await setLogin(params);
    if (data) {
      if (data.success === 1) {
        setIsOpen3(false);
        navigate("/");
        setEmail("");
        window.location.reload(false);
      }
    }
  };

  const SigninCustomer = async (type) => {
    if (getmallname === "") {
      alert("Enter the Mall Name......!");
      return;
    } else if (getfirstname === "") {
      alert("Enter the First Name....!");
      return;
    } else if (getlastname === "") {
      alert("Enter the First Name....!");
      return;
    } else if (getemail === "") {
      alert("Enter the Email......!");
      return;
    } else if (regEx.test(getemail) === false) {
      alert("Enter the valid Email....!");
      return;
    } else if (getpassword === "") {
      alert("Enter the password....!");
      return;
    } else {
      var params = {
        role: 4,
        email: getemail,
        password: getpassword,
        name: getmallname,
        first_name: getfirstname,
        last_name: getlastname,
      };

      console.log("-=-=-=->", params);
      const data = await setMallRegister(params);
      if (data) {
        if (data.success === 1) {
          console.log("register-data", data);
          setIsOpen(false);
          setIsOpen3(true);
          setEmail("");
          setPassword("");
          // window.location.reload(false);
        }
      }
    }
  };

  const LoginCustomer = async (e) => {
    if (getemail === "") {
      alert("Enter the Email......!");
      return;
    } else if (regEx.test(getemail) === false) {
      alert("Enter the valid Email....!");
      return;
    } else if (getpassword === "") {
      alert("Enter the password....!");
    } else {
      var params = {
        role: 4,
        email: getemail,
        password: getpassword,
        type: "1",
      };

      console.log("-=-=-=->", params);
      const data = await setLogin(params);
      if (data) {
        if (data.success === 1) {
          console.log("customer-data", data);
          setIsOpen3(false);
          setEmail("");
          setPassword("");
          // window.location.reload(false);
          navigate("/customerdashboard");
        }
      }
    }
  };

  // terms checkbox funtion

  const handleTermChange = (event) => {
    setIsAcceptTerm((current) => !current);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  function closeModal3() {
    setIsOpen3(false);
  }
  function closeModal5() {
    setIsOpen5(false);
  }

  

  function closeModal4() {
    setIsOpen4(false);
  }

  function closeModalBrand() {
    setModalIsOpenBrand(false);
  }

  const location = useLocation();

  //  Get Category Api Call

  useEffect(() => {
    // console.log("get_brand_data", get_brand_data);
    getcat();
  }, []);

  const getcat = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_category, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        // console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          SetArray(res.data.data);
        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  // Add Rating Api

  const addRating = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));

    if (getrating == "" || undefined) {
      Notification("error","Error!", "Please give rating");
    }else{
    const formdata = await new FormData();
    formdata.append("mall_id",getsingalmalldata.id);
    formdata.append("rating", getrating);


    try {
      const response = await axios.post(add_rating, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });

      if (response.data.success == 1) {
        // setTab(4);
        setIsOpen5(false);
        logout();
        // getMallList();
        // window.location.reload(true);

       }
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  };
}


  // Filter Api

  const FilterApi = async (id) => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    const formdata = new FormData();
    // await formdata.append("search", "");
    await formdata.append("mall_id", getsingalmalldata.id);
    // await formdata.append("category_id", navbardata);

    fetch(product_banner_tiles_customer, {
      method: "POST",
      body: formdata,
      headers: {
        Accept: ACCEPT_HEADER,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("123445", res.data);
        // SetProdata(res.data);
        // SetNavBarData(res.data.data)
        setTab(35);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // Search Api

  const SearchApi = async (id) => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    const formdata = new FormData();
    // await formdata.append("search", "");
    await formdata.append("mall_id", getsingalmalldata.id);
    await formdata.append("search", id);

    fetch(product_banner_tiles_customer, {
      method: "POST",
      body: formdata,
      headers: {
        Accept: ACCEPT_HEADER,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("123445", res.data);
        // SetProdata(res.data);
        // SetNavBarData(res.data.data)
        setTab(35);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };



  return (
    <>
      <div className="cus-nav-main">
        <nav className="nav_main_wrapp">
          <div className="" style={{ width: "100%" }}>
            <div className="nav_base_wrapp cus-nav-logo-after">
              <Link to={"/"}>
                <img src={images.brandlogo} alt="logo" className="nav_logo" />
              </Link>
              <div className="cus-nav-links">
                <Link
                  to={"/about-instore"}
                  style={{
                    color:
                      location.pathname === "/about-instore"
                        ? "#ff8b00"
                        : "black",
                    fontWeight:
                      location.pathname === "/about-instore" ? "600" : "400",
                  }}>
                  About In-store
                </Link>
                <Link
                  to={"/mallnearme"}
                  style={{
                    color:
                      location.pathname === "/mallnearme" ? "#ff8b00" : "black",
                    fontWeight:
                      location.pathname === "/mallnearme" ? "600" : "400",
                  }}>
                  Malls near me
                </Link>
                {/* <NavLink to={"/about-instore"} style={{ color: location.pathname === "/about-instore" ? "#ff8b00" : "black", fontWeight: location.pathname === "/about-instore" ? "600" : "400" } */}
                <div className="cus-nav-filter-flex">
                  {/* single text-input */}
                  <div className="mm_form_single_input" style={{ gap: "7px" }}>
                    <label
                      className="leaderboard-card-lbl"
                      style={{ minWidth: "65px", fontWeight: "300" }}>
                      Filter by:
                    </label>
                    <div className="select-wrapper">
                      {/* <select
                        className="leaderboard-card-inp"
                        style={{ width: "180px" }}
                      // onChange={(e) => SetRegionId(e.target.value)}
                      >
                        <option selected disabled value="">
                          Select category
                        </option>
                        {category_data &&
                          category_data.map((item, index) => {
                            return (
                              <>
                                <option value={item.id} key={index}>
                                  {item.name}
                                </option>
                              </>
                            );
                          })}
                      </select> */}

                      <select
                        className="leaderboard-card-inp cons_select_nav"
                        style={{ width: "180px" }}

                        // onChange={(e) => FilterApi(e.target.value)}
                        onChange={(e) => {
                          // FilterApi(e.target.value);
                          SetNavBarData((e.target.value).slice(0, 2));
                          SetNavBarDataName((e.target.value).slice(2));

                          console.log("navbardataid", (e.target.value).slice(0, 3));
                          console.log("navbardataid", (e.target.value).slice(3));

                          setTab(35);

                        }}


                      >
                        <option selected disabled value="">
                          Select category
                        </option>
                        {catarray &&
                          catarray.map((item, index) => {
                            return (
                              <>
                                <option value={`${item.id} ${item.name}`} key={index}>
                                  {item.name}
                                </option>
                              </>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                </div>

                <input
                  type="text"
                  className="cus-nav-search leaderboard-card-inp"
                  placeholder="Search"
                  onChange={(e) => {
                    // SearchApi(e.target.value);
                    SetNavBarData1(e.target.value);
                    setTab(35);
                    // SetNavBarData(e.target.value);

                  }}
                />

                <div className="nav_myacc_wrapp" style={{ marginLeft: "0px" }}>
                  <Link>
                    <img
                      src={getcusimg ? getcusimg : images.profile_logo}
                      alt=""
                      className="nav_profile"
                      style={{ borderRadius: "100%" }}
                    />
                  </Link>
                  <Link
                    to={""}
                    onClick={() => setCustomerDropdown(!getcustomerDropdown)}
                    className="my-acc-nav-flex">
                    Account{" "}
                    {getcustomerDropdown ? <BsChevronUp /> : <BsChevronDown />}
                  </Link>
                  {/* {getcustomerDropdown ? (
                    <BsChevronUp style={{ marginTop: "1px" }} />
                  ) : (
                    <BsChevronDown style={{ marginTop: "1px" }} />
                  )} */}
                  {getcustomerDropdown ? (
                    <>
                      <div className="navbar-acc-menu-open-warapp">
                        {/* <Link
                          to="/profile-page"
                          className="navbar-acc-menu-link"
                        >
                          Mall
                        </Link> */}
                        {/* <Link to="/retailer" className="navbar-acc-menu-link">
                          Brand
                        </Link> */}
                        {/* <Link to="/customer" className="navbar-acc-menu-link">
                          Customer
                        </Link> */}

                        {login === false || login === null ? (
                          <Link
                            className="navbar-acc-menu-link"
                            onClick={() => setIsOpen3(true)}>
                            Login
                          </Link>
                        ) : null}
                        {login === false || login === null ? (
                          <Link
                            className="navbar-acc-menu-link"
                            onClick={() => setRegisterCustomerOpen(true)}>
                            Sign Up
                          </Link>
                        ) : null}
                        {/* <Link className="navbar-acc-menu-link">My profile</Link> */}
                        <Link className="navbar-acc-menu-link">Help</Link>
                        {login === "true" && getrole == 4 ? (
                          <Link
                            to=""
                            className="navbar-acc-menu-link"
                            onClick={() => setTab(9)}>
                            Account Settings
                          </Link>
                        ) : null}

                        {/* {is_login === true ? (<><Link onClick={logout}>Logout</Link></>) : (<></>)} */}
                        {login === "true" ? (
                          <button className="navbar-acc-menu-link"
                            style={{ textAlign: "start" }}
                            onClick={()=>{setIsOpen5(true)}}>
                            Logout
                          </button>
                        ) : null}
                      </div>
                    </>
                  ) : null}
                </div>

                <button
                  onClick={() => setTab(8)}
                  className="cus-nav-wishlist-icon-part">
                  <AiFillHeart className="cus-nav-wishlist-icon" />
                </button>
                {/* <button
                    onClick={() => setTab(38)}
                    className="cus-nav-wishlist-icon-part"
                    style={{ position: "relative" }}>
                    <RiNotification4Fill className="cus-nav-wishlist-icon" />
                    <div className="cart-digit-main">
                      0{store_cart_count ? store_cart_count : "0"}
                    </div>
                  </button> */}
              </div>

              <button
                className="sidebar_logoo"
                onClick={() => {
                  setSidebarOpen(!getsidebarOpen);
                  setAccountOpen(false);
                }}>
                {getsidebarOpen ? (
                  <IoClose size={30} color="#000" />
                ) : (
                  <img src={images.side_logo} alt="" />
                )}
              </button>
            </div>
            {getsidebarOpen && (
              <div className="nav_sidebar_wrapp">
                <Link to="/">Home</Link>
                {login === "true" && getrole == 2 ? (
                  <Link to="/profile-page" className="navbar-acc-menu-link">
                    Mall Dashboard
                  </Link>
                ) : null}

                {login === "true" && getrole == 3 ? (
                  <Link to="/branddashboard" className="navbar-acc-menu-link">
                    Brand Dashboard
                  </Link>
                ) : null}

                {login === "true" && getrole == 4 ? (
                  <Link to="/mallnearme" className="navbar-acc-menu-link">
                    Mall Near Me
                  </Link>
                ) : null}

                {login === "true" && getrole == 6 ? (
                  <Link to="/CinemaDashboard" className="navbar-acc-menu-link">
                    Cinema Dashboard
                  </Link>
                ) : null}

                <Link to="/about-instore">About In-store</Link>
                {/* <Link to="/mall">Mall </Link> */}
                <Link to="/mall">Mall Registration</Link>
                <Link to="/retailer">Brand Registration</Link>
                <Link to="/CinemaPage">Cinema Registration</Link>
                {/* {getcondation === false ? (
                <Link onClick={() => setIsOpen2(true)}>Sign Up</Link>
              ) : null} */}

                {/* {getcondation === true ? ( */}
                <>
                  <Link onClick={() => setAccountOpen(!getaccountOpen)}>
                    My Account{" "}
                    {getaccountOpen ? <BsChevronUp /> : <BsChevronDown />}
                  </Link>
                </>
                {/* ) : null} */}
                {/* <Link onClick={logout}>
                <IoIosLogOut size={20} />
              </Link> */}
                {getaccountOpen && (
                  <div className="accunt_sec_wrapp">
                    {login === "true" || getrole === 4 ? (
                      <></>
                    ) : (
                      <Link onClick={() => setIsOpen3(true)}>Login</Link>
                    )}
                    {/* <Link onClick={() => setRegisterCustomerOpen(true)}>Sign Up</Link> */}
                    {/* <Link onClick={() => modalIsOpen(true)}>Sign Up</Link> */}

                    <Link to="/mallnearme">Malls near me</Link>
                    <Link
                      to="/customerdashboard"
                      onClick={() => {
                        setTab(2);
                        setSidebarOpen(!getsidebarOpen);
                      }}>
                      Promotion
                    </Link>
                    <Link
                      to="/customerdashboard"
                      onClick={() => {
                        setTab(3);
                        setSidebarOpen(!getsidebarOpen);
                      }}>
                      Brands
                    </Link>
                    <Link
                      to="/customerdashboard"
                      onClick={() => {
                        setTab(4);
                        setSidebarOpen(!getsidebarOpen);
                      }}>
                      Eateries
                    </Link>
                    <Link
                      to="/customerdashboard"
                      onClick={() => {
                        setTab(28);
                        setSidebarOpen(!getsidebarOpen);
                      }}>
                      Cinema
                    </Link>
                    <Link
                      to="/customerdashboard"
                      onClick={() => {
                        setTab(5);
                        setSidebarOpen(!getsidebarOpen);
                      }}>
                      Events
                    </Link>
                    
                    <Link
                      to="/customerdashboard"
                      onClick={() => {
                        setTab(6);
                        setSidebarOpen(!getsidebarOpen);
                      }}>
                      Facilities
                    </Link>
                    <Link
                      to="/customerdashboard"
                      onClick={() => {
                        setTab(29);
                        setSidebarOpen(!getsidebarOpen);
                      }}>
                      Mall Map
                    </Link>
                    <Link
                      to="/customerdashboard"
                      onClick={() => {
                        setTab(8);
                        setSidebarOpen(!getsidebarOpen);
                      }}>
                      My wishlist
                    </Link>
                    <Link
                      to="/customerdashboard"
                      onClick={() => {
                        setTab(9);
                        setSidebarOpen(!getsidebarOpen);
                      }}>
                      Account Settings
                    </Link>
                    <Link
                      to="/customerdashboard"
                      onClick={() => {
                        setTab(30);
                        setSidebarOpen(!getsidebarOpen);
                      }}>
                     Contact the Mall
                    </Link>
                    <Link
                      to="/customerdashboard"
                      onClick={() => {
                        setTab(37);
                        setSidebarOpen(!getsidebarOpen);
                      }}>
                      FAQ
                    </Link>

                    <Link>Help</Link>
                    {login === "true" ? (
                      <Link onClick={()=>{setIsOpen5(true)}}>Logout</Link>
                    ) : (
                      <></>
                    )}

                    {/* <Link> - Events</Link>
                  <Link> - Facilities</Link>
                  <Link> Contact Details</Link> */}
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Register Customer modal */}
      <ReactModal
        isOpen={getregisterCustomerOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}>
        <div className="home_model_4wrapp">
          <button className="signup_modal_close" onClick={closeModal}>
            <GrClose />
          </button>
          <button className="f-b900 fs-22 mb_16 signup_headign">
            Hi, nice to meet you!
          </button>
          <div className="sign_input_wrapp">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              value={getfirstname}
              onChange={(e) => setFirstname(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div className="sign_input_wrapp">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              value={getlastname}
              onChange={(e) => setLastname(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div className="sign_input_wrapp">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              onChange={(e) => onHandleEmailChange(e)}
              name=""
              id=""
            />
          </div>

          {/* <div className="sign_input_wrapp">
                        <label htmlFor="email">Region</label>
                        <select
                            className="leaderboard-card-inp"
                            onChange={(e) => {
                                setRegion(e.target.value);
                                console.log(e.target.value);
                            }}
                        >
                            <option value="" selected disabled>
                                Select Region
                            </option>

                            {region_data &&
                                region_data.map((itm, ind) => {
                                    return (
                                        <option key={itm.id} value={itm.id}>
                                            {itm.name}
                                        </option>
                                    );
                                })}
                        </select>
                    </div> */}

          <div className="sign_input_wrapp">
            <label htmlFor="password">Set a password</label>
            <input
              type="password"
              value={getpassword}
              onChange={(e) => setPassword(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div className="signup_terms_wrapp mb_16">
            <input
              type="checkbox"
              value={isAcceptTerm}
              onChange={handleTermChange}
              checked={isAcceptTerm === 1}
            />
            <p className="fs-des">
              I have read and agree to the{" "}
              <a className="signup_terms_link">Terms and Conditions</a> &{" "}
              <a className="signup_terms_link">Privacy Policy</a>
            </p>
          </div>
          <button
            className="btn btn-orange mb_16"
            disabled={isAcceptTerm === 1 ? false : true}
            onClick={() => {
              console.log("bsdjhfgsjfhjksdfg");
              SetRegister();
            }}>
            Register
          </button>
        </div>
      </ReactModal>


      {/* Rating Modal */}

      <ReactModal
        isOpen={modalIsOpen5}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal5}
        style={customStyles}
      >
        <div className="home_login_model_1sec_inner home_login_model_1sec_inner_cus_rating mall_rating_pading_resp" style={{padding:"2rem"}}>
          <button className="signup_modal_close" onClick={closeModal5}>
            {/* <span
              style={{ fontSize: "16px" }}
              className="brand-lable-radio-btn-txt"
            >
              Cancel
            </span>{" "} */}
            <AiOutlineClose color="black" />
          </button>
          <div className="f-b900 fs-22 mb_16 signup_headign" style={{ marginTop: "40px",fontSize:"23px",textAlign:"center" }}>How was the {getsingalmalldata?.name}?</div>
          <p style={{ textAlign: "center", width: "100%",fontSize:"17px" }}>We would really appreciate your feedback!</p>


          <div className="rating-star-box">
            {/* <AiFillStar className="rating-star-icon" key={index}
              onClick={() => handleRatingClick(index + 1)}
              color={index + 1 <= rating ? '#ffc107' : '#e4e5e9'} /> */}
            {/* <AiFillStar className="rating-star-icon" />
            <AiFillStar className="rating-star-icon" />
            <AiFillStar className="rating-star-icon" />
            <AiFillStar className="rating-star-iconn" /> */}
            <Rating
              emptySymbol={<img src={images.graystar} className="icon" style={{marginRight:"20px"}} />}
              fullSymbol={<img src={images.orangestar} className="icon" style={{marginRight:"20px"}}/>}
              onClick={(e) => {
                console.log('hhh', e);
                setRating(e)
              }}
            />
          </div>
          <div className="sign_input_wrapp">

            {/* <div className="signup_terms_wrapp">
              <input
                type="checkbox"
                value={isAcceptTerm}
                onChange={handleTermChange}
                checked={isAcceptTerm}
              />
              <p className="fs-des">
                I have read and agree to the{" "}
                <a className="signup_terms_link">Terms and Conditions</a> &{" "}
                <a className="signup_terms_link">Privacy Policy</a>
              </p>
            </div> */}
            <div style={{ height: "1px", background: "#aaa", width: '100%', marginTop: "20px", marginBottom: "20px" }}></div>

            {/* <button className="signup_model_forgate">Forgot password?</button> */}
          </div>
          <button
            className="btn btn-orange mb_16"
            onClick={() => addRating()}
            // disabled={isAcceptTerm ? false : true}
          >
            Submit
          </button>

        </div>
      </ReactModal>
    </>
  );
};

export default CustomerNavbar;
