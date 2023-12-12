import React, { useEffect, useState } from "react";
// import "./Navbar.css";
import images from "../../constants/images";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { ImGoogle } from "react-icons/im";
// import { AiOutlineClose, AiOutlineGoogle } from "react-icons/ai";
import FacebookLogin from "react-facebook-login";
import ReactModal from "react-modal";
import Notification from "../../utils/Notification"

import {
  GrClose,
  GrFacebook,
  GrFacebookOption,
  GrGoogle,
} from "react-icons/gr";
import {
  // AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  // AiOutlineGoogle,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
  IResolveParams,
} from "reactjs-social-login";
import Urls from "../../utils/Urls";
import { useAuthContext } from "../../context/auth_context";
import axios from "axios";
import { ACCEPT_HEADER, get_mall, get_mall_master } from "../../utils/Constant";
import { useMallContext } from "../../context/mall_context";
import { useStoreContext } from "../../context/store_context";

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
    // width: "500px",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

const HomeNavbar = (
  {
    // getcustomerDropdown,
    // setCustomerDropdown,
    // setRegisterCustomerOpen,
  }
) => {
  const location = useLocation();

  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalBrandLogIsOpen, setBrandLogIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);
  const [custLoginModalIsOpen3, setCustLoginModalIsOpen3] = useState(false);

  const [modalIsOpenBrand, setModalIsOpenBrand] = useState(false);
  const [registerModalIsOpenBrand, setRegisterModalIsOpenBrand] =
    useState(false);

  const [brandModalIsOpen3, setbrandModalIsOpen3] = useState(false);
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
  const [getmallmasterid, setmallmasterid] = useState("");
  const [retailertype, setRetailertype] = useState("");


  const [isAcceptTermRegisterCustomer, setIsAcceptTermRegisterCustomer] =
    useState(false);
  const [getrole, setrole] = useState();
  const [login, SetLogin] = useState("");
  const [getcustomerDropdown, setCustomerDropdown] = useState(false);

  const [getvat_no, setvat_no] = useState("");
  const [getearh_no, setearh_no] = useState("");

  const [getmallarray, SetMallArray] = useState([]);
  const [getmallarray2, SetMallArray2] = useState([]);
  const [getmall, SetMall] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [active, setActive] = useState(false);
  //
  //   const handleClick = () => {
  //     setActive(!active);
  //   };

  const [signButn, SetsignButn] = useState(1);
  const [regButn, SetregButn] = useState(1);

  const [boldButn, SetboldButn] = useState(1);
  const { setRegisterStore, retailer_data, getRetailerApi } = useStoreContext();
  // const { setRegisterStore, retailer_data, getRetailerApi } = useStoreContext();

  //   const handleClick2 = () => {
  //     setActive2(!active2);
  //   };
  //   const handleClick3 = () => {
  //     setActive3(!active3);
  //   };
  // const [getregisterCustomerOpen, setRegisterCustomerOpen] = useState(false);

  const { is_login, is_token, logoutUser, role } = useMallContext();
  const { RegisterCustomer, setMallRegister } = useAuthContext();

  const { setLogin } = useAuthContext();

  const [getgender, setGender] = useState("");
  const { get_brand_data, getBrand } = useMallContext();

  let navigate = useNavigate();
  // const redirect = location.search ? location.search.split("=")[1] : "/";
  // const redirect = "http://localhost:3000/account/login";

  function logout() {
    localStorage.clear();
    navigate("/");

    window.location.reload(false);
  }

  useEffect(() => {
    token();
    console.log("profile", profile);
    let role = localStorage.getItem("role");
    setrole(role);
    var islogin = localStorage.getItem("is_login");
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

  // Signup Brand

  const SigninBrand = async (type) => {
    if (retailertype === "") {
      alert("Enter the Retailer Name......!");
      return;
    } else if (getgender === "") {
      alert("Select Retailer type......!");
      return;
    } else if (getfirstname === "") {
      alert("Enter the FirstName No......!");
      return;
    } else if (getlastname === "") {
      alert("Enter the LastName No......!");
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
        mall_id: getmallmasterid,
        // mall_master_id: getmallmasterid,
        retailer_id: retailertype,
        store_type: getgender,
        brand: getmallname,
        first_name: getfirstname,
        last_name: getlastname,
        email: getemail,
        role: 3,
        password: getpassword,
        terms_condition: isAcceptTerm,
      };

      console.log("-=-=-=->", params);
      const data = await setRegisterStore(params);
      if (data) {
        if (data.success === 1) {
          console.log("register-data", data);
          setModalIsOpenBrand(false);
          setmallmasterid("");
          setRetailertype("");
          setGender("");
          setMallname("");
          setFirstname("");
          setLastname("");
          setEmail("");
          setPassword("");
          setIsAcceptTerm("");
          // window.location.reload(false);
        }
      }
    }
  };

  // Customer Signup

  const SigninCustomer = async (type) => {
    // if (getmallname === "") {
    //   alert("Enter the Mall Name......!");
    //   return;
    // }
    if (getfirstname === "") {
      alert("Enter the First Name....!");
      return;
    } else if (getlastname === "") {
      alert("Enter the Last Name....!");
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
        // region_id: getRegioncus,
        password: getpassword,
        name: getmallname,
        first_name: getfirstname,
        last_name: getlastname,
      };

      console.log("-=-=-=->", params);
      const data = await RegisterCustomer(params);
      if (data) {
        if (data.success === 1) {
          console.log("register-data", data);
          // setIsOpen(false);
          // setIsOpen3(true);
          setRegisterCustomerOpen(false);
          setEmail("");
          setPassword("");
          // window.location.reload(false);
        }
      }
    }
  };

  // const SigninCustomerGoogle = async (gmail, type, data) => {
  //     if (gmail === "") {
  //         alert("Enter the Email......!");
  //         return;
  //     } else if (regEx.test(gmail) === false) {
  //         alert("Enter the valid Email....!");
  //         return;
  //     } else {
  //         var params = {
  //             role: 4,
  //             email: gmail,
  //             // password: "",
  //             type: type,
  //         };

  //         console.log("-=-=-=->", params);
  //         const data = await setLogin(params);
  //         if (data) {
  //             if (data.success === 1) {
  //                 setIsOpen3(false);
  //                 navigate("/");
  //                 setEmail("");
  //                 window.location.reload(false);
  //             }
  //         }
  //     }
  // };

  // const SigninCustomerFacebook = async (fdata, type) => {
  //     var params = {
  //         role: 4,
  //         fb_id: fdata.id,
  //         first_name: fdata.first_name,
  //         last_name: fdata.last_name,
  //         type: type,
  //         name: fdata.name,
  //     };

  //     console.log("-=-=-=->", params);
  //     const data = await setLogin(params);
  //     if (data) {
  //         if (data.success === 1) {
  //             setIsOpen3(false);
  //             navigate("/");
  //             setEmail("");
  //             window.location.reload(false);
  //         }
  //     }
  // };

  // const SigninCustomer = async (type) => {
  //     // if (getmallname === "") {
  //     //   alert("Enter the Mall Name......!");
  //     //   return;
  //     // }
  //     if (getfirstname === "") {
  //         alert("Enter the First Name....!");
  //         return;
  //     } else if (getlastname === "") {
  //         alert("Enter the First Name....!");
  //         return;
  //     } else if (getemail === "") {
  //         alert("Enter the Email......!");
  //         return;
  //     } else if (regEx.test(getemail) === false) {
  //         alert("Enter the valid Email....!");
  //         return;
  //     } else if (getpassword === "") {
  //         alert("Enter the password....!");
  //         return;
  //     } else {
  //         var params = {
  //             role: 4,
  //             email: getemail,
  //             password: getpassword,
  //             name: getmallname,
  //             first_name: getfirstname,
  //             last_name: getlastname,
  //         };

  //         console.log("-=-=-=->", params);
  //         const data = await RegisterCustomer(params);
  //         if (data) {
  //             if (data.success === 1) {
  //                 console.log("register-data", data);
  //                 // setIsOpen(false);
  //                 // setIsOpen3(true);
  //                 setRegisterCustomerOpen(false);
  //                 setEmail("");
  //                 setPassword("");
  //                 // window.location.reload(false);
  //             }
  //         }
  //     }
  // };

  const getMallMaster = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_mall_master, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          SetMallArray(res.data.data);

        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  const getMallMaster2 = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_mall, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          SetMallArray2(res.data.data);
          // Notification("success", "Success!", "Brand Registerated Successfully!");

        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  useEffect(() => {
    getMallMaster();
    getMallMaster2();
  }, []);

  // Mall Signup Google/facebook

  const SigninMallGoogle = async (gmail, type, data) => {
    if (gmail === "") {
      alert("Enter the Email......!");
      return;
    } else if (regEx.test(gmail) === false) {
      alert("Enter the valid Email....!");
      return;
    } else {
      var params = {
        role: 2,
        email: gmail,
        // password: "",
        type: type,
      };

      // console.log("-=-=-=->", params);
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

  const SigninMallFacebook = async (fdata, type) => {
    var params = {
      role: 2,
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

  const SigninMall = async (type) => {
    if (getvat_no === "") {
      alert("Enter the VAT No......!");
      return;
    } else if (getearh_no === "") {
      alert("Enter the earh No......!");
      return;
    } else if (getfirstname === "") {
      alert("Enter the First Name....!");
      return;
    } else if (getlastname === "") {
      alert("Enter the Last Name....!");
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
        mall_master_id: getmall,
        vat_no: getvat_no,
        earh_no: getearh_no,
        role: 2,
        email: getemail,
        password: getpassword,
        first_name: getfirstname,
        last_name: getlastname,
        terms_condition: isAcceptTerm,
      };

      console.log("-=-=-=->", params);
      const data = await setMallRegister(params);
      if (data) {
        if (data.success === 1) {
          console.log("register-data", data);
          Notification("success", "Success!", "Mall Registerated Successfully!");

          setIsOpen(false);
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
          navigate("/mallnearme");
        }
      }
    }
  };
  // Mall Login

  const LoginMall = async (e) => {
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
        role: 2,
        email: getemail,
        password: getpassword,
        type: "1",
      };

      console.log("-=-=-=->", params);
      const data = await setLogin(params);
      if (data) {
        if (data.success === 1) {
          console.log("mall-data", data);
          setIsOpen3(false);
          setEmail("");
          setPassword("");
          // window.location.reload(false);
          navigate("/profile-page");
        }
      }
    }
  };

  // terms checkbox funtion

  const handleTermChange = (event) => {
    setIsAcceptTerm(1);
    console.log("e.targate.value");
  };
  const handleTermChangeRegisterCustomerNavbar = (event) => {
    setIsAcceptTermRegisterCustomer((current) => !current);
  };

  const mallLoginModalOpen = () => {
    setIsOpen(false);
    setIsOpen3(true);
  };

  const brandLoginModalOpen = () => {
    setModalIsOpenBrand(false);
    setIsOpen3(true);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const LoginBrand = async (e) => {
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
        role: 3,
        email: getemail,
        password: getpassword,
        type: "1",
      };

      console.log("-=-=-=->brand", params);
      const data = await setLogin(params);
      if (data) {
        if (data.success === 1) {
          console.log("brand-data", data);
          setIsOpen3(false);
          setEmail("");
          setPassword("");
          // window.location.reload(true);
          navigate("/branddashboard");
        }
      }
    }
  };

  function closeModal2() {
    setIsOpen2(false);
  }

  function closeModal3() {
    setIsOpen3(false);
    // setbrandModalIsOpen3(false);
  }

  function closeBrandModal() {
    setbrandModalIsOpen3(false);
  }
  function closeModal4() {
    setIsOpen4(false);
  }
  function closeModalRegisterNavbar() {
    setRegisterCustomerOpen(false);
  }

  function closeModalBrand() {
    // setModalIsOpenBrand(false);
    setRegisterModalIsOpenBrand(false);
  }

  return (
    <>
      <nav className="nav_main_wrapp">
        <div className="container">
          <div className="nav_base_wrapp">
            <Link to={"/"}>
              <img src={images.brandlogo} alt="logo" className="nav_logo" />
            </Link>
            <div className="nav_links">
              <Link
                to={"/"}
                style={{
                  color: location.pathname === "/" ? "#ff8b00" : "black",
                  fontWeight: location.pathname === "/" ? "600" : "400",
                }}>
                Home
              </Link>
              <NavLink
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
              </NavLink>
              <Link
                // onClick={() => setIsOpen(true)}
                to={"/mall"}
                style={{
                  color: location.pathname === "/mall" ? "#ff8b00" : "black",
                  fontWeight: location.pathname === "/mall" ? "600" : "400",
                }}>
                Mall Registration
              </Link>

              <Link
                // onClick={() => setModalIsOpenBrand(true)}
                to={"/retailer"}
                style={{
                  color:
                    location.pathname === "/retailer" ? "#ff8b00" : "black",
                  fontWeight: location.pathname === "/retailer" ? "600" : "400",
                }}>
                Brand Registration
              </Link>
              <div className="nav_myacc_wrapp">
                <Link>
                  <img
                    src={images.profile_logo}
                    alt=""
                    className="nav_profile"
                  />
                </Link>
                <Link
                  to={""}
                  onClick={() => setCustomerDropdown(!getcustomerDropdown)}
                  className="my-acc-nav-flex">
                  Account{" "}
                  {getcustomerDropdown ? <BsChevronUp /> : <BsChevronDown />}
                </Link>
                {/* {getcustomerDropdown ? <BsChevronUp style={{ marginTop: "1px" }} /> : <BsChevronDown style={{ marginTop: "1px" }} />} */}
                {getcustomerDropdown ? (
                  <>
                    <div className="navbar-acc-menu-open-warapp">
                      {/* <Link to="/mall" className="navbar-acc-menu-link">
                        Mall Registration
                      </Link>
                      <Link to="/retailer" className="navbar-acc-menu-link">
                        Brand Registration
                      </Link> */}
                      {/* {is_login === true || role === 4 ? <Link to="/customer"
                        className="navbar-acc-menu-link"
                      >
                        Customer
                      </Link> : <Link to="/"
                        className="navbar-acc-menu-link"
                      > */}
                      {/* Customer */}
                      {/* </Link>} */}

                      {login === "true" && getrole == 2 ? (
                        <Link
                          to="/profile-page"
                          className="navbar-acc-menu-link">
                          Mall Dashboard
                        </Link>
                      ) : null}

                      {login === "true" && getrole == 3 ? (
                        <Link
                          to="/branddashboard"
                          className="navbar-acc-menu-link">
                          Brand Dashboard
                        </Link>
                      ) : null}

                      {login === "true" && getrole == 4 ? (
                        <Link to="/mallnearme" className="navbar-acc-menu-link">
                          Mall Near Me
                        </Link>
                      ) : null}

                      {login === false || login === null ? (
                        <Link
                          className="navbar-acc-menu-link"
                          onClick={() => {
                            setIsOpen3(true), SetsignButn(1), SetboldButn(1);
                          }}>
                          Login / Sign Up
                        </Link>
                      ) : null}
                      {/* {login === false || login === null ? (
                                                <Link
                                                    className="navbar-acc-menu-link"
                                                    onClick={() => setIsOpen(true)}
                                                >
                                                    Sign Up
                                                </Link>
                                            ) : null} */}
                      {/* <Link className="navbar-acc-menu-link">My profile</Link> */}
                      {/* <Link to="/customer" className="navbar-acc-menu-link">
                                                Customer Registration
                                            </Link> */}
                      <Link className="navbar-acc-menu-link">Help</Link>
                      {/* {is_login === true ? (<><Link onClick={logout}>Logout</Link></>) : (<></>)} */}
                      {login === "true" ? (
                        <button style={{ textAlign: "start" }} onClick={logout}>
                          Logout
                        </button>
                      ) : null}
                    </div>
                  </>
                ) : null}
              </div>
              {/* {getcondation === false ? (
                <Link onClick={() => setIsOpen3(true)}>
                  Sign Up <BsChevronDown />
                </Link>
              ) : null}
              {getcondation && (
                <>
                  <div className="nav_myacc_wrapp">
                    <Link>
                      <img
                        src={images.profile_logo}
                        alt=""
                        className="nav_profile"
                      />
                    </Link>
                    <Link
                      to={"/profile-page"}
                      onClick={() => setAccountOpen(!getaccountOpen)}
                    >
                      My Account
                      {getaccountOpen ? <BsChevronUp /> : <BsChevronDown />}
                    </Link>
                    {getaccountOpen ? (
                      <>
                        <div className="navbar-acc-menu-open-warapp">
                          <Link className="navbar-acc-menu-link">Login</Link>
                          <Link className="navbar-acc-menu-link">Sign Up</Link>
                          <Link className="navbar-acc-menu-link">
                            My profile
                          </Link>
                          <Link className="navbar-acc-menu-link">
                            Account Setting
                          </Link>
                          <Link className="navbar-acc-menu-link">
                            -&nbsp;&nbsp;Leaderboard Banners
                          </Link>
                          <Link className="navbar-acc-menu-link">
                            -&nbsp;&nbsp;Promotional Banners
                          </Link>
                          <Link className="navbar-acc-menu-link">
                            -&nbsp;&nbsp;Product Banners
                          </Link>
                          <Link className="navbar-acc-menu-link">
                            -&nbsp;&nbsp;Product Tiles
                          </Link>
                          <Link className="navbar-acc-menu-link">
                            -&nbsp;&nbsp;Track Analytics
                          </Link>
                          <Link className="navbar-acc-menu-link">
                            My Brand in malls
                          </Link>
                          <Link className="navbar-acc-menu-link">Help</Link>
                          <Link className="navbar-acc-menu-link">Logout</Link>
                        </div>
                      </>
                    ) : null}
                  </div>
                  <Link onClick={logout}>
                    <IoIosLogOut size={20} />
                  </Link>
                </>
              )} */}
            </div>

            <button
              className="sidebar_logo"
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
              <Link to="/about-instore">About In-store</Link>
              {/* <Link to="/mall">Mall </Link> */}
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

              <Link to="/mall">Mall Registration</Link>
              <Link to="/retailer">Brand Registration</Link>
              <Link to="/customer">Customer Registration</Link>

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
                  {login === "true" ? (
                    <></>
                  ) : (
                    <Link onClick={() => setIsOpen3(true)}>Login</Link>
                  )}

                  {/* <Link onClick={() => setRegisterCustomerOpen(true)}>Sign Up</Link> */}
                  {/* <Link onClick={() => modalIsOpen(true)}>Sign Up</Link> */}
                  {login === "true" ? (
                    <></>
                  ) : (
                    <Link
                      className="navbar-acc-menu-link"
                      onClick={() => setIsOpen(true)}>
                      Sign Up
                    </Link>
                  )}
                  <Link>Help</Link>
                  {login === "true" ? (
                    <Link
                      style={{ textAlign: "end", alignSelf: "end" }}
                      onClick={logout}>
                      Logout
                    </Link>
                  ) : (
                    <></>
                  )}
                  {/* <Link onClick={logout}>Logout</Link> */}

                  {/* <Link> - Events</Link>
                  <Link> - Facilities</Link>
                  <Link> Contact Details</Link> */}
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
      {/* model 1 */}
      {/* <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="home_model_wrapp">
          <div className="home_model_1sec">
            <h4 className="h4">Hi, nice to meet you!</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut
              quidem voluptatibus.
            </p>
            <button
              className="btn btn1"
              onClick={() => {
                setIsOpen(false);
                setIsOpen2(true);
              }}
            >
              YES
            </button>
            <button className="btn btn1" style={{ opacity: "0.8" }}>
              No
            </button>
            <a href="">Learn More</a>
          </div>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-laughing-young-woman-royalty-free-image-1592844146.jpg?crop=0.668xw:1.00xh;0.167xw,0"
            alt=""
            className="home_model_2sec"
          />
        </div>
      </ReactModal> */}

      {/* Mall Login Modal start*/}
      <ReactModal
        isOpen={modalIsOpen3}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal3}
        style={customStyles}>
        <div className="model_sizing">
          <div style={{ backgroundColor: "#dad9d8" }}>
            <div style={{ height: "25px" }}>
              <button
                className="signup_modal_close"
                style={{ right: "7px", top: "9px" }}
                onClick={closeModal3}>
                <span style={{ fontSize: "16px" }}></span>
                {/* <AiOutlineClose /> */}
                <IoClose />
              </button>
            </div>
            <div className="tab_btn_main">
              <button
                onClick={() => {
                  SetsignButn(1);
                  SetboldButn(1);
                }}
                style={{
                  backgroundColor: signButn == 1 ? "white" : "#dad9d8",
                  fontWeight: boldButn == 1 ? "600" : "200",
                }}
                className="tab_btn_styling">
                Mall login / sign up
              </button>
              <button
                onClick={() => {
                  // setbrandModalIsOpen3(true);
                  SetsignButn(2);
                  SetboldButn(2);
                }}
                style={{
                  backgroundColor: signButn == 2 ? "white" : "#dad9d8",
                  fontWeight: boldButn == 2 ? "600" : "200",
                }}
                className="tab_btn_styling">
                Brand login / sign up
              </button>
              <button
                onClick={() => {
                  //  setCustLoginModalIsOpen3(true);
                  SetsignButn(3);
                  SetboldButn(3);
                }}
                style={{
                  backgroundColor: signButn == 3 ? "white" : "#dad9d8",
                  fontWeight: boldButn == 3 ? "600" : "200",
                }}
                className="tab_btn_styling">
                Consumer login / sign up
              </button>
            </div>
          </div>
          {signButn == 1 ? (
            <div
              className="home_login_model_1sec_inner"
              style={{ maxWidth: "none" }}>
              {/* <div>
            <button>Mall login / sign up</button>
            <button>Brand login / sign up</button>
            <button>Consumer login / sign up</button>
          </div> */}
              {/* <button className="signup_modal_close" onClick={closeModal3}>
            <span
              style={{ fontSize: "16px" }}
              className="brand-lable-radio-btn-txt">
              Cancel
            </span>{" "}
            <AiOutlineClose color="red" />
          </button> */}
              {/* <div style={{ backgroundColor: "gray", display: "flex" }}>
            <button style={{ border: "1px solid white" }}>
              Mall login / sign up
            </button>
            <button style={{ border: "1px solid white" }}>
              Brand login / sign up
            </button>
            <button style={{ border: "1px solid white" }}>
              Consumer login / sign up
            </button>
          </div> */}
              <div className="f-b900 fs-22 mb_16 signup_headign">
                Welcome Back!
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  onChange={(e) => onHandleEmailChange(e)}
                  name=""
                  id=""
                  className="signup_input"
                  autoFocus="true"
                // style={{ background: "#DAD9D8", border: 'none' }}
                />
                <label htmlFor="password">Password</label>
                <div
                  style={{
                    background: "#DAD9D8",
                    paddingTop: "0.4rem",
                    paddingBottom: "0.4rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="input_box-cus-pass">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    value={getpassword}
                    onChange={(e) => setPassword(e.target.value)}
                    name=""
                    id=""
                    className="signup_input"
                    style={{
                      background: "#DAD9D8",
                      border: "none",
                      width: "100%",
                    }}
                  />
                  {passwordVisible === true ? (
                    <AiOutlineEye size={22} onClick={togglePasswordVisibility}>
                      {passwordVisible ? "Hide" : "Show"}
                    </AiOutlineEye>
                  ) : (
                    <AiOutlineEyeInvisible
                      size={22}
                      onClick={togglePasswordVisibility}>
                      {passwordVisible ? "Hide" : "Show"}
                    </AiOutlineEyeInvisible>
                  )}
                </div>
                {/* <input
                  type="password"
                  value={getpassword}
                  onChange={(e) => setPassword(e.target.value)}
                  name=""
                  id=""
                  className="signup_input"
                  // style={{ background: "#DAD9D8", border: 'none' }}
                /> */}
                <div className="signup_terms_wrapp">
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
                </div>
                <button className="signup_model_forgate">
                  Forgot your password?
                </button>
              </div>
              <button
                className="btn btn-orange mb_16"
                onClick={() => LoginMall()}
                disabled={isAcceptTerm ? false : true}>
                Login
              </button>
              <p
                style={{
                  alignSelf: "center",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}>
                or
              </p>

              <div style={{ width: "100%" }}>
                {/* facebook button */}

                <LoginSocialFacebook
                  appId="1377758369684897"
                  fieldsProfile={
                    "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                  }
                  // version={3}
                  onLoginStart={(e) => console.log(e)}
                  onLogoutSuccess={(e) => console.log(e)}
                  redirect_uri={Urls.base_url}
                  onResolve={({ data }: IResolveParams) => {
                    // setProfile(data);
                    console.log(data);
                    SigninCustomerFacebook(data, "3");
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}>
                  <button
                    className="mb_8 modal-social-btn "
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      color: "var(--color-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}>
                    <FaFacebookF
                      color="var(--color-gray)"
                      style={{
                        marginRight: "8px",
                        fontSize: "16px",
                        marginBottom: "-2px",
                      }}
                    />
                    Continue with Facebook
                  </button>
                </LoginSocialFacebook>

                {/* google button */}

                <LoginSocialGoogle
                  // client_id="775372553139-o2l7tmtgohlmu3q31o0ufsfne62g47tk.apps.googleusercontent.com"
                  client_id="826718979042-bhij4jt5s6p85n55hbuhh0v40i4b3ng4.apps.googleusercontent.com"
                  // onLoginStart={onLoginStart}
                  redirect_uri={Urls.base_url}
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  onResolve={({ data }: IResolveParams) => {
                    setProfile(data);
                    console.log("gdata", data);
                    // registerWithGoogle(data);
                    // registerWithGoogle(data);
                    SigninCustomerGoogle(data.email, "2", data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}>
                  <button
                    className="mb_8 modal-social-btn "
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      color: "var(--color-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}>
                    <ImGoogle
                      color="var(--color-gray)"
                      style={{
                        marginRight: "8px",
                        fontSize: "16px",
                        marginBottom: "-2px",
                      }}
                    />
                    Continue with Google
                  </button>
                  {/* <button onClick={() => {}} className="twitter-btn w-100">
              <i className="fab fa-google"></i> Google
            </button> */}
                </LoginSocialGoogle>
              </div>
              <button
                className="h6 mb_10 mt_10"
                style={{ alignSelf: "center" }}>
                Not registered yet?
              </button>
              <button
                onClick={() => {
                  setIsOpen3(false);
                  setIsOpen(true);
                  SetregButn(1);
                  // set(1)
                  // SetregButn(1);
                }}
                className="btn btn-blue">
                Register Your Mall
              </button>
            </div>
          ) : signButn == 2 ? (
            <div
              className="home_login_model_1sec_inner"
              style={{ maxWidth: "none" }}>
              {/* <button className="signup_modal_close" onClick={closeBrandModal}>
                <span
                  style={{ fontSize: "16px" }}
                  className="brand-lable-radio-btn-txt">
                  Cancel
                </span>{" "}
                <GrClose />
              </button> */}
              <div className="f-b900 fs-22 mb_16 signup_headign">
                Welcome Back!
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name=""
                  id=""
                  value={getemail}
                  className="signup_input"
                  autoFocus="true"
                // style={{ background: "#DAD9D8", border: 'none' }}
                />
                <label htmlFor="password">Password</label>
                <div
                  style={{
                    background: "#DAD9D8",
                    paddingTop: "0.4rem",
                    paddingBottom: "0.4rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="input_box-cus-pass">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    value={getpassword}
                    onChange={(e) => setPassword(e.target.value)}
                    name=""
                    id=""
                    className="signup_input"
                    style={{
                      background: "#DAD9D8",
                      border: "none",
                      width: "100%",
                    }}
                  />
                  {passwordVisible === true ? (
                    <AiOutlineEye size={22} onClick={togglePasswordVisibility}>
                      {passwordVisible ? "Hide" : "Show"}
                    </AiOutlineEye>
                  ) : (
                    <AiOutlineEyeInvisible
                      size={22}
                      onClick={togglePasswordVisibility}>
                      {passwordVisible ? "Hide" : "Show"}
                    </AiOutlineEyeInvisible>
                  )}
                </div>
                {/* <input
                  type="password"
                  value={getpassword}
                  onChange={(e) => setPassword(e.target.value)}
                  name=""
                  id=""
                  className="signup_input"
                  // style={{ background: "#DAD9D8", border: 'none' }}
                /> */}
                <div className="signup_terms_wrapp">
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
                </div>
                <button className="signup_model_forgate">
                  Forgot your password?
                </button>
              </div>
              <button
                className="btn btn-orange mb_16"
                onClick={() => LoginBrand()}
                disabled={isAcceptTerm ? false : true}>
                Login
              </button>
              <p
                style={{
                  alignSelf: "center",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}>
                or
              </p>

              <div style={{ width: "100%" }}>
                {/* facebook button */}

                <LoginSocialFacebook
                  appId="1377758369684897"
                  fieldsProfile={
                    "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                  }
                  // version={3}
                  onLoginStart={(e) => console.log(e)}
                  onLogoutSuccess={(e) => console.log(e)}
                  redirect_uri={Urls.base_url}
                  onResolve={({ data }: IResolveParams) => {
                    // setProfile(data);
                    console.log(data);
                    SigninCustomerFacebook(data, "3");
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}>
                  <button
                    className="mb_8 modal-social-btn "
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      color: "var(--color-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}>
                    <FaFacebookF
                      color="var(--color-gray)"
                      style={{
                        marginRight: "8px",
                        fontSize: "16px",
                        marginBottom: "-2px",
                      }}
                    />
                    Continue with Facebook
                  </button>
                </LoginSocialFacebook>

                {/* google button */}

                <LoginSocialGoogle
                  // client_id="775372553139-o2l7tmtgohlmu3q31o0ufsfne62g47tk.apps.googleusercontent.com"
                  client_id="826718979042-bhij4jt5s6p85n55hbuhh0v40i4b3ng4.apps.googleusercontent.com"
                  // onLoginStart={onLoginStart}
                  redirect_uri={Urls.base_url}
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  onResolve={({ data }: IResolveParams) => {
                    setProfile(data);
                    console.log("gdata", data);
                    // registerWithGoogle(data);
                    // registerWithGoogle(data);
                    SigninCustomerGoogle(data.email, "2", data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}>
                  <button
                    className="mb_8 modal-social-btn "
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      color: "var(--color-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}>
                    <ImGoogle
                      color="var(--color-gray)"
                      style={{
                        marginRight: "8px",
                        fontSize: "16px",
                        marginBottom: "-2px",
                      }}
                    />
                    Continue with Google
                  </button>
                  {/* <button onClick={() => {}} className="twitter-btn w-100">
              <i className="fab fa-google"></i> Google
            </button> */}
                </LoginSocialGoogle>
              </div>
              <button
                className="h6 mb_10 mt_10"
                style={{ alignSelf: "center" }}>
                Not registered yet?
              </button>
              <button
                onClick={() => {
                  setIsOpen3(false);
                  setIsOpen(true);
                  SetregButn(2);
                  // setModalIsOpenBrand(true);
                  // setbrandModalIsOpen3(false);
                  // setRegisterModalIsOpenBrand(true);
                }}
                className="btn btn-blue">
                Register Your Brand
              </button>
            </div>
          ) : signButn == 3 ? (
            <div
              className="home_login_model_1sec_inner"
              style={{ maxWidth: "none" }}>
              {/* <button className="signup_modal_close" onClick={closeModal3}>
            <span
              style={{ fontSize: "16px" }}
              className="brand-lable-radio-btn-txt">
              Cancel
            </span>{" "}
            <AiOutlineClose color="red" />
          </button> */}
              <div className="f-b900 fs-22 mb_16 signup_headign">
                Welcome Back!
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  onChange={(e) => onHandleEmailChange(e)}
                  name=""
                  id=""
                  className="signup_input"
                  autoFocus="true"
                // style={{ background: "#DAD9D8", border: 'none' }}
                />
                <label htmlFor="password">Password</label>
                <div
                  style={{
                    background: "#DAD9D8",
                    paddingTop: "0.4rem",
                    paddingBottom: "0.4rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="input_box-cus-pass">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    value={getpassword}
                    onChange={(e) => setPassword(e.target.value)}
                    name=""
                    id=""
                    className="signup_input"
                    style={{
                      background: "#DAD9D8",
                      border: "none",
                      width: "100%",
                    }}
                  />
                  {passwordVisible === true ? (
                    <AiOutlineEye size={22} onClick={togglePasswordVisibility}>
                      {passwordVisible ? "Hide" : "Show"}
                    </AiOutlineEye>
                  ) : (
                    <AiOutlineEyeInvisible
                      size={22}
                      onClick={togglePasswordVisibility}>
                      {passwordVisible ? "Hide" : "Show"}
                    </AiOutlineEyeInvisible>
                  )}
                </div>
                <div className="signup_terms_wrapp">
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
                </div>
                <button className="signup_model_forgate">
                  Forgot your password?
                </button>
              </div>
              <button
                className="btn btn-orange mb_16"
                onClick={() => LoginCustomer()}
                disabled={isAcceptTerm ? false : true}>
                Login
              </button>
              <p
                style={{
                  alignSelf: "center",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}>
                or
              </p>

              <div style={{ width: "100%" }}>
                {/* facebook button */}

                <LoginSocialFacebook
                  appId="1377758369684897"
                  fieldsProfile={
                    "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                  }
                  // version={3}
                  onLoginStart={(e) => console.log(e)}
                  onLogoutSuccess={(e) => console.log(e)}
                  redirect_uri={Urls.base_url}
                  onResolve={({ data }: IResolveParams) => {
                    // setProfile(data);
                    console.log(data);
                    SigninCustomerFacebook(data, "3");
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}>
                  <button
                    className="mb_8 modal-social-btn "
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      color: "var(--color-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}>
                    <FaFacebookF
                      color="var(--color-gray)"
                      style={{
                        marginRight: "8px",
                        fontSize: "16px",
                        marginBottom: "-2px",
                      }}
                    />
                    Continue with Facebook
                  </button>
                </LoginSocialFacebook>

                {/* google button */}

                <LoginSocialGoogle
                  // client_id="775372553139-o2l7tmtgohlmu3q31o0ufsfne62g47tk.apps.googleusercontent.com"
                  client_id="826718979042-bhij4jt5s6p85n55hbuhh0v40i4b3ng4.apps.googleusercontent.com"
                  onLoginStart={onLoginStart}
                  redirect_uri={Urls.base_url}
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  onResolve={({ data }: IResolveParams) => {
                    setProfile(data);
                    console.log("gdata", data);
                    // registerWithGoogle(data);
                    // registerWithGoogle(data);
                    SigninCustomerGoogle(data.email, "2", data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}>
                  <button
                    className="mb_8 modal-social-btn "
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      color: "var(--color-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}>
                    <ImGoogle
                      color="var(--color-gray)"
                      style={{
                        marginRight: "8px",
                        fontSize: "16px",
                        marginBottom: "-2px",
                      }}
                    />
                    Continue with Google
                  </button>
                  {/* <button onClick={() => {}} className="twitter-btn w-100">
              <i className="fab fa-google"></i> Google
            </button> */}
                </LoginSocialGoogle>
              </div>
              <button
                className="h6 mb_10 mt_10"
                style={{ alignSelf: "center" }}>
                Not registered yet?
              </button>
              <button
                onClick={() => {
                  setIsOpen3(false);
                  // setIsOpen(true)
                  // setRegisterCustomerOpen(true);
                  setIsOpen(true);
                  SetregButn(3);
                }}
                className="btn btn-blue">
                Sign up
              </button>
            </div>
          ) : null}
        </div>
      </ReactModal>
      {/*Mall Login Modal end*/}

      {/* model 4 */}
      <ReactModal
        isOpen={modalIsOpen4}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal4}
        style={customStyles}>
        <div className="home_model_4wrapp">
          <button className="signup_modal_close" onClick={closeModal4}>
            <GrClose />
          </button>
          <button className="btn btn4 mb_16">Forgot your password?</button>
          <div className="sign_input_wrapp">
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="" />
          </div>
          <button className="btn btn3 mb_16">Submit</button>
          <h6 className="h6 mb_8">
            If you already have an account, click the button below to log in.
          </h6>
          <button className="btn btn4 mb_8">Login</button>
          <h6 className="h6 mb_8">or</h6>

          {/* <FacebookLogin
            appId="1377758369684897" //APP ID NOT CREATED YET
            fields="name,email,picture"
            // autoLoad={true}
            onClick={componentClicked}
            callback={responseFacebook}
          /> */}
          <LoginSocialFacebook
            appId="1377758369684897"
            fieldsProfile={
              "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
            }
            // version={3}
            onLoginStart={(e) => console.log(e)}
            onLogoutSuccess={(e) => console.log(e)}
            redirect_uri={Urls.base_url}
            onResolve={({ data }: IResolveParams) => {
              // setProfile(data);
              console.log(data);
              SigninCustomerFacebook(data, "3");
            }}
            onReject={(err) => {
              console.log(err);
            }}>
            <button
              className="btn btn5 mb_8 modal-social-btn"
              style={{
                justifyContent: "flex-start",
                gap: "25%",
                width: "100%",
              }}>
              <FaFacebookF />
              Continue with Facebook
            </button>
          </LoginSocialFacebook>
          {/* <button
            className="btn btn5 mb_8 modal-social-btn "
            style={{ justifyContent: "flex-start", gap: "25%" }}
          >
            <FaFacebookF />
            Continue with Facebook
          </button> */}
          <LoginSocialGoogle
            client_id={process.env.REACT_APP_GG_APP_ID}
            onLoginStart={onLoginStart}
            redirect_uri={Urls.base_url}
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={({ data }: IResolveParams) => {
              setProfile(data);
              console.log("gdata", data);
              // registerWithGoogle(data);
              // registerWithGoogle(data);
              SigninCustomerGoogle(data.email, "2", data);
            }}
            onReject={(err) => {
              console.log(err);
            }}>
            <button
              className="btn btn5 mb_8 modal-social-btn"
              style={{ justifyContent: "flex-start", gap: "25%" }}>
              <GrGoogle style={{}} />
              Continue with Google
            </button>
            {/* <button onClick={() => {}} className="twitter-btn w-100">
              <i className="fab fa-google"></i> Google
            </button> */}
          </LoginSocialGoogle>
        </div>
      </ReactModal>

      {/* Mall Register*/}
      <ReactModal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        style={customStyles}>
        <div className="model_sizing">
          <div style={{ backgroundColor: "#dad9d8" }}>
            {/* <div className="model_sizing"> */}
            <div style={{ height: "25px" }}>
              <button
                className="signup_modal_close"
                style={{ right: "7px", top: "9px" }}
                // onClick={closeModal3}>
                onClick={() => {
                  setIsOpen(false);
                }}>
                <span style={{ fontSize: "16px" }}></span>
                {/* <GrClose /> */}
                <IoClose />
                {/* <button
                className="signup_modal_close"
                // onClick={closeModalRegisterNavbar}>
                onClick={() => {
                  setIsOpen(false);
                }}>
                <GrClose /> */}
                {/* </button> */}
              </button>
            </div>
            <div className="tab_btn_main">
              <button
                onClick={() => {
                  SetregButn(1);
                  SetboldButn(1);
                }}
                style={{
                  backgroundColor: regButn == 1 ? "white" : "#dad9d8",
                  fontWeight: boldButn == 1 ? "600" : "200",
                }}
                className="tab_btn_styling">
                Mall login / sign up
              </button>
              <button
                onClick={() => {
                  // setbrandModalIsOpen3(true);
                  SetregButn(2);
                  SetboldButn(2);
                }}
                style={{
                  backgroundColor: regButn == 2 ? "white" : "#dad9d8",
                  fontWeight: boldButn == 2 ? "600" : "200",
                }}
                className="tab_btn_styling">
                Brand login / sign up
              </button>
              <button
                onClick={() => {
                  //  setCustLoginModalIsOpen3(true);
                  SetregButn(3);
                  SetboldButn(3);
                  // regButn(3);
                }}
                style={{
                  backgroundColor: regButn == 3 ? "white" : "#dad9d8",
                  fontWeight: boldButn == 3 ? "600" : "200",
                }}
                className="tab_btn_styling">
                Consumer login / sign up
              </button>
            </div>
          </div>
          {regButn == 1 ? (
            <div className="home_model_4wrapp">
              {/* <button
                className="signup_modal_close"
                // onClick={closeModalRegisterNavbar}>
                onClick={() => {
                  setIsOpen(false);
                }}>
                <GrClose />
              </button> */}
              <button className="f-b900 fs-22 mb_16 signup_headign">
                Register Your Mall
              </button>
              <div className="sign_input_wrapp">
                <label htmlFor="mall">Mall Name</label>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    SetMall(e.target.value);
                    console.log(e.target.value);
                  }}>
                  <option selected disabled value=""></option>
                  {getmallarray &&
                    getmallarray.map((item, index) => {
                      return (
                        <>
                          {/* <option selected disabled value=""></option> */}
                          <option value={item.id} key={index}>
                            {item.name} &nbsp;&nbsp;&nbsp; {item.from_date}{" "}
                            &nbsp;&nbsp;&nbsp; {item.to_date}
                          </option>
                        </>
                      );
                    })}
                </select>
                {/* <input
              type="text"
              value={getmallname}
              onChange={(e) => setMallname(e.target.value)}
              name=""
              id=""
            /> */}
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="mall">VAT Number</label>
                <input
                  type="text"
                  value={getvat_no}
                  onChange={(e) => setvat_no(e.target.value)}
                  name=""
                  id=""
                />
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="mall">Earh Number</label>
                <input
                  type="text"
                  value={getearh_no}
                  onChange={(e) => setearh_no(e.target.value)}
                  name=""
                  id=""
                />
              </div>
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
              <div className="sign_input_wrapp">
                <label htmlFor="password">Password</label>
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
                onClick={() => SigninMall()}>
                Register
              </button>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}>
                OR
              </p>
              <p className="fs-des" style={{ paddingBottom: "20px" }}>
                If you are already registered, then{" "}
                <span
                  onClick={() => {
                    mallLoginModalOpen();
                    SetsignButn(1);
                  }}
                  // onClick={() => setModalIsOpen4(true)}
                  className="signup_terms_link">
                  login here
                </span>
              </p>
            </div>
          ) : regButn == 2 ? (
            <div className="home_model_4wrapp">
              <button
                className="signup_modal_close"
                //  onClick={closeModalBrand}>
                onClick={() => {
                  setRegisterModalIsOpenBrand(false);
                }}>
                <span
                  style={{ fontSize: "16px" }}
                  className="brand-lable-radio-btn-txt"></span>{" "}
                {/* <GrClose /> */}
              </button>
              <button className="f-b900 fs-22 mb_16 signup_headign">
                Register to In-store
              </button>

              <div className="sign_input_wrapp sign_input_wrapp_padding_less">
                <label htmlFor="mall">Mall Name</label>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    setmallmasterid(e.target.value);
                    getRetailerApi(e.target.value);
                    console.log(e.target.value);
                  }}>
                  {getmallarray2 &&
                    getmallarray2.map((item, index) => {
                      return (
                        <>
                          {/* <option selected disabled value=""></option> */}
                          <option value={item.id} key={index}>
                            {item.name} {item.id} &nbsp;&nbsp;&nbsp;{" "}
                            {item.from_date} &nbsp;&nbsp;&nbsp; {item.to_date}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
              <div className="sign_input_wrapp sign_input_wrapp_padding_less">
                <label htmlFor="mall">Retailer Name</label>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    setRetailertype(e.target.value);
                    console.log("retailertype is", retailertype);
                    getBrand(e.target.value);
                    console.log(e.target.value);
                  }}>
                  <option defaultValue value=""></option>
                  {retailer_data &&
                    retailer_data.map((item, index) => {
                      return (
                        <>
                          <option value={item.id} key={index}>
                            {item.name}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>

              <div className="radio-btn-flex sign_input_wrapp_padding_less">
                {/* <label className="course-form-txt course-form-margin-right">
              Mode Of Delivery:
            </label> */}
                <div className="radio-btn-inner-flex">
                  <input
                    type="radio"
                    id="Online"
                    name="gender"
                    defaultValue={retailer_data.type}
                    onChange={(e) => {
                      setGender(1);
                    }}
                  />
                  <label className="brand-lable-radio-btn-txt" for="male">
                    Independent Retailer
                  </label>
                </div>

                <div className="radio-btn-inner-flex">
                  <input
                    type="radio"
                    id="In-Person"
                    name="gender"
                    // value={2}
                    // onChange={(e) => setMode(e.target.value)}
                    value={getgender}
                    onChange={(e) => setGender(2)}
                  />
                  <label
                    className="brand-lable-radio-btn-txt"
                    for="specifyColor">
                    Group Retailer
                  </label>
                </div>
              </div>

              <div className="sign_input_wrapp sign_input_wrapp_padding_less">
                <label htmlFor="first-name">Brands (if applicable)</label>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    setMallname(e.target.value);
                    console.log(e.target.value);
                  }}>
                  {get_brand_data &&
                    get_brand_data.map((item, index) => {
                      return (
                        <>
                          {/* <option selected disabled value="">
                      Auto-fill from database
                    </option> */}
                          <option value={item.id} key={index}>
                            {item.name}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
              <div className="sign_input_wrapp sign_input_wrapp_padding_less">
                <label htmlFor="last-name">Account Manager First Name</label>
                <input
                  type="text"
                  value={getfirstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  name=""
                  id=""
                />
              </div>
              <div className="sign_input_wrapp sign_input_wrapp_padding_less">
                <label>Account Manager Last Name</label>
                <input
                  type="text"
                  value={getlastname}
                  onChange={(e) => setLastname(e.target.value)}
                  name=""
                  id=""
                />
              </div>
              <div className="sign_input_wrapp sign_input_wrapp_padding_less">
                <label htmlFor="email">Account Manager Email Address</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name=""
                  id=""
                  value={getemail}
                />
              </div>
              <div className="sign_input_wrapp sign_input_wrapp_padding_less">
                <label htmlFor="password">Set a Password</label>
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
                  checked={isAcceptTerm}
                />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Terms and Conditions</a> &{" "}
                  <a className="signup_terms_link">Privacy Policy</a>
                </p>
              </div>
              <button
                className="btn btn-orange mb_16"
                disabled={isAcceptTerm ? false : true}
                onClick={() => SigninBrand()}>
                Register
              </button>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}>
                OR
              </p>
              <p className="fs-des" style={{ paddingBottom: "20px" }}>
                If you are already registered, then{" "}
                <span
                  // onClick={() => brandLoginModalOpen()}
                  onClick={() => {
                    setIsOpen3(true);
                    setIsOpen(false);
                    SetsignButn(2);
                    // brandLoginModalOpen(true);
                    // setRegisterModalIsOpenBrand(false);
                    // SetsignButn(2);

                    // setbrandModalIsOpen3(true);
                  }}
                  className="signup_terms_link">
                  login here
                </span>
              </p>
            </div>
          ) : regButn == 3 ? (
            <div className="home_model_4wrapp">
              <button
                className="signup_modal_close"
                onClick={closeModalRegisterNavbar}>
                {/* <GrClose /> */}
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
                  autoFocus="true"
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
                <label htmlFor="email">Email</label>
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
                  checked={isAcceptTerm}
                />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Terms and Conditions</a> &{" "}
                  <a className="signup_terms_link">Privacy Policy</a>
                </p>
              </div>
              <button
                className="btn btn-orange mb_16"
                disabled={isAcceptTerm ? false : true}
                onClick={() => SigninCustomer()}>
                Register
              </button>
              {/* <button
            className="btn btn-orange mb_16"
            disabled={isAcceptTerm === 1 ? false : true}
            onClick={() => {
              console.log("bsdjhfgsjfhjksdfg");
              SigninCustomer();
            }}
          >
            Register
          </button> */}

              <p
                style={{
                  alignSelf: "center",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}>
                or
              </p>

              <div style={{ width: "100%" }}>
                {/* facebook button */}

                <LoginSocialFacebook
                  appId="1377758369684897"
                  fieldsProfile={
                    "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                  }
                  // version={3}
                  onLoginStart={(e) => console.log(e)}
                  onLogoutSuccess={(e) => console.log(e)}
                  redirect_uri={Urls.base_url}
                  onResolve={({ data }: IResolveParams) => {
                    // setProfile(data);
                    console.log(data);
                    SigninCustomerFacebook(data, "4");
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}>
                  <button
                    className="mb_8 modal-social-btn "
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      color: "var(--color-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}>
                    <FaFacebookF
                      color="var(--color-gray)"
                      style={{
                        marginRight: "8px",
                        fontSize: "16px",
                        marginBottom: "-2px",
                      }}
                    />
                    Continue with Facebook
                  </button>
                </LoginSocialFacebook>

                {/* google button */}

                <LoginSocialGoogle
                  // client_id="775372553139-o2l7tmtgohlmu3q31o0ufsfne62g47tk.apps.googleusercontent.com"
                  client_id="826718979042-bhij4jt5s6p85n55hbuhh0v40i4b3ng4.apps.googleusercontent.com"
                  onLoginStart={onLoginStart}
                  redirect_uri={Urls.base_url}
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  onResolve={({ data }: IResolveParams) => {
                    setProfile(data);
                    console.log("gdata", data);
                    // registerWithGoogle(data);
                    // registerWithGoogle(data);
                    SigninCustomerGoogle(data.email, "4", data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}>
                  <button
                    className="mb_8 modal-social-btn "
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      color: "var(--color-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}>
                    <ImGoogle
                      color="var(--color-gray)"
                      style={{
                        marginRight: "8px",
                        fontSize: "16px",
                        marginBottom: "-2px",
                      }}
                    />
                    Continue with Google
                  </button>
                  {/* <button onClick={() => {}} className="twitter-btn w-100">
              <i className="fab fa-google"></i> Google
            </button> */}
                </LoginSocialGoogle>

                <p
                  style={{
                    marginTop: "10px",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}>
                  Already have an account?
                </p>

                <button
                  onClick={() => {
                    // setRegisterCustomerOpen(false);
                    setIsOpen3(true);
                    setIsOpen(false);
                    SetsignButn(3);
                  }}
                  className="btn btn-blue"
                  style={{ marginBottom: "20px" }}>
                  Sign in
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </ReactModal>
      {/* Mall Register end */}

      {/* Customer Register start */}
      <ReactModal
        isOpen={getregisterCustomerOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModalRegisterNavbar}
        style={customStyles}>
        <div className="home_model_4wrapp">
          <button
            className="signup_modal_close"
            onClick={closeModalRegisterNavbar}>
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
              autoFocus="true"
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
            <label htmlFor="email">Email</label>
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
              checked={isAcceptTerm}
            />
            <p className="fs-des">
              I have read and agree to the{" "}
              <a className="signup_terms_link">Terms and Conditions</a> &{" "}
              <a className="signup_terms_link">Privacy Policy</a>
            </p>
          </div>
          <button
            className="btn btn-orange mb_16"
            disabled={isAcceptTerm ? false : true}
            onClick={() => SigninCustomer()}>
            Register
          </button>
          {/* <button
            className="btn btn-orange mb_16"
            disabled={isAcceptTerm === 1 ? false : true}
            onClick={() => {
              console.log("bsdjhfgsjfhjksdfg");
              SigninCustomer();
            }}
          >
            Register
          </button> */}

          <p
            style={{
              alignSelf: "center",
              marginBottom: "8px",
              fontWeight: "bold",
            }}>
            or
          </p>

          <div style={{ width: "100%" }}>
            {/* facebook button */}

            <LoginSocialFacebook
              appId="1377758369684897"
              fieldsProfile={
                "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
              }
              // version={3}
              onLoginStart={(e) => console.log(e)}
              onLogoutSuccess={(e) => console.log(e)}
              redirect_uri={Urls.base_url}
              onResolve={({ data }: IResolveParams) => {
                // setProfile(data);
                console.log(data);
                SigninCustomerFacebook(data, "4");
              }}
              onReject={(err) => {
                console.log(err);
              }}>
              <button
                className="mb_8 modal-social-btn "
                style={{
                  justifyContent: "center",
                  width: "100%",
                  color: "var(--color-gray)",
                  fontWeight: "600",
                  fontSize: "16px",
                }}>
                <FaFacebookF
                  color="var(--color-gray)"
                  style={{
                    marginRight: "8px",
                    fontSize: "16px",
                    marginBottom: "-2px",
                  }}
                />
                Continue with Facebook
              </button>
            </LoginSocialFacebook>

            {/* google button */}

            <LoginSocialGoogle
              // client_id="775372553139-o2l7tmtgohlmu3q31o0ufsfne62g47tk.apps.googleusercontent.com"
              client_id="826718979042-bhij4jt5s6p85n55hbuhh0v40i4b3ng4.apps.googleusercontent.com"
              onLoginStart={onLoginStart}
              redirect_uri={Urls.base_url}
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ data }: IResolveParams) => {
                setProfile(data);
                console.log("gdata", data);
                // registerWithGoogle(data);
                // registerWithGoogle(data);
                SigninCustomerGoogle(data.email, "4", data);
              }}
              onReject={(err) => {
                console.log(err);
              }}>
              <button
                className="mb_8 modal-social-btn "
                style={{
                  justifyContent: "center",
                  width: "100%",
                  color: "var(--color-gray)",
                  fontWeight: "600",
                  fontSize: "16px",
                }}>
                <ImGoogle
                  color="var(--color-gray)"
                  style={{
                    marginRight: "8px",
                    fontSize: "16px",
                    marginBottom: "-2px",
                  }}
                />
                Continue with Google
              </button>
              {/* <button onClick={() => {}} className="twitter-btn w-100">
              <i className="fab fa-google"></i> Google
            </button> */}
            </LoginSocialGoogle>

            <p
              style={{
                marginTop: "10px",
                textAlign: "center",
                marginBottom: "20px",
              }}>
              Already have an account?
            </p>

            <button
              onClick={() => {
                setRegisterCustomerOpen(false);
                setIsOpen3(true);
              }}
              className="btn btn-blue"
              style={{ marginBottom: "20px" }}>
              Sign in
            </button>
          </div>
        </div>
      </ReactModal>
      {/* Customer Register End   */}

      {/* Brand Login Modal Start */}
      <ReactModal
        isOpen={brandModalIsOpen3}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal3}
        onRequestClose={closeBrandModal}
        style={customStyles}>
        <div className="home_login_model_1sec_inner">
          {/* <button className="signup_modal_close" onClick={closeBrandModal}>
            <span
              style={{ fontSize: "16px" }}
              className="brand-lable-radio-btn-txt">
              Cancel
            </span>{" "}
            <GrClose />
          </button> */}
          <div className="f-b900 fs-22 mb_16 signup_headign">Welcome Back!</div>
          <div className="sign_input_wrapp">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name=""
              id=""
              value={getemail}
              className="signup_input"
              autoFocus="true"
            // style={{ background: "#DAD9D8", border: 'none' }}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={getpassword}
              onChange={(e) => setPassword(e.target.value)}
              name=""
              id=""
              className="signup_input"
            // style={{ background: "#DAD9D8", border: 'none' }}
            />
            <div className="signup_terms_wrapp">
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
            </div>
            <button className="signup_model_forgate">
              Forgot your password?
            </button>
          </div>
          <button
            className="btn btn-orange mb_16"
            onClick={() => LoginBrand()}
            disabled={isAcceptTerm ? false : true}>
            Login
          </button>
          <p
            style={{
              alignSelf: "center",
              marginBottom: "8px",
              fontWeight: "bold",
            }}>
            or
          </p>

          <div style={{ width: "100%" }}>
            {/* facebook button */}

            <LoginSocialFacebook
              appId="1377758369684897"
              fieldsProfile={
                "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
              }
              // version={3}
              onLoginStart={(e) => console.log(e)}
              onLogoutSuccess={(e) => console.log(e)}
              redirect_uri={Urls.base_url}
              onResolve={({ data }: IResolveParams) => {
                // setProfile(data);
                console.log(data);
                SigninCustomerFacebook(data, "3");
              }}
              onReject={(err) => {
                console.log(err);
              }}>
              <button
                className="mb_8 modal-social-btn "
                style={{
                  justifyContent: "center",
                  width: "100%",
                  color: "var(--color-gray)",
                  fontWeight: "600",
                  fontSize: "16px",
                }}>
                <FaFacebookF
                  color="var(--color-gray)"
                  style={{
                    marginRight: "8px",
                    fontSize: "16px",
                    marginBottom: "-2px",
                  }}
                />
                Continue with Facebook
              </button>
            </LoginSocialFacebook>

            {/* google button */}

            <LoginSocialGoogle
              // client_id="775372553139-o2l7tmtgohlmu3q31o0ufsfne62g47tk.apps.googleusercontent.com"
              client_id="826718979042-bhij4jt5s6p85n55hbuhh0v40i4b3ng4.apps.googleusercontent.com"
              // onLoginStart={onLoginStart}
              redirect_uri={Urls.base_url}
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ data }: IResolveParams) => {
                setProfile(data);
                console.log("gdata", data);
                // registerWithGoogle(data);
                // registerWithGoogle(data);
                SigninCustomerGoogle(data.email, "2", data);
              }}
              onReject={(err) => {
                console.log(err);
              }}>
              <button
                className="mb_8 modal-social-btn "
                style={{
                  justifyContent: "center",
                  width: "100%",
                  color: "var(--color-gray)",
                  fontWeight: "600",
                  fontSize: "16px",
                }}>
                <ImGoogle
                  color="var(--color-gray)"
                  style={{
                    marginRight: "8px",
                    fontSize: "16px",
                    marginBottom: "-2px",
                  }}
                />
                Continue with Google
              </button>
              {/* <button onClick={() => {}} className="twitter-btn w-100">
              <i className="fab fa-google"></i> Google
            </button> */}
            </LoginSocialGoogle>
          </div>
          <button className="h6 mb_10 mt_10" style={{ alignSelf: "center" }}>
            Not registered yet?
          </button>
          <button
            onClick={() => {
              setIsOpen3(false);
              // setModalIsOpenBrand(true);
              setbrandModalIsOpen3(false);
              setRegisterModalIsOpenBrand(true);
            }}
            className="btn btn-blue">
            Register Your Brand
          </button>
        </div>
      </ReactModal>
      {/* Brand Login Modal End */}

      {/* Brand Register Modal Start */}
      <ReactModal
        isOpen={registerModalIsOpenBrand}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModalBrand}
        style={customStyles}>
        <div className="home_model_4wrapp">
          <button className="signup_modal_close" onClick={closeModalBrand}>
            <span
              style={{ fontSize: "16px" }}
              className="brand-lable-radio-btn-txt">
              {/* Cancel */}
            </span>{" "}
            <GrClose color="red" />
          </button>
          <button className="f-b900 fs-22 mb_16 signup_headign">
            Register to In-store
          </button>

          <div className="sign_input_wrapp sign_input_wrapp_padding_less">
            <label htmlFor="mall">Mall Name</label>
            <select
              className="leaderboard-card-inp"
              onChange={(e) => {
                setmallmasterid(e.target.value);
                getRetailerApi(e.target.value);
                console.log(e.target.value);
              }}>
              {getmallarray &&
                getmallarray.map((item, index) => {
                  return (
                    <>
                      {/* <option selected disabled value=""></option> */}
                      <option value={item.id} key={index}>
                        {item.name} {item.id} &nbsp;&nbsp;&nbsp;{" "}
                        {item.from_date} &nbsp;&nbsp;&nbsp; {item.to_date}
                      </option>
                    </>
                  );
                })}
            </select>
          </div>
          <div className="sign_input_wrapp sign_input_wrapp_padding_less">
            <label htmlFor="mall">Retailer Name</label>
            <select
              className="leaderboard-card-inp"
              onChange={(e) => {
                setRetailertype(e.target.value);
                console.log("retailertype is", retailertype);
                getBrand(e.target.value);
                console.log(e.target.value);
              }}>
              <option defaultValue value=""></option>
              {retailer_data &&
                retailer_data.map((item, index) => {
                  return (
                    <>
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    </>
                  );
                })}
            </select>
          </div>

          <div className="radio-btn-flex sign_input_wrapp_padding_less">
            {/* <label className="course-form-txt course-form-margin-right">
              Mode Of Delivery:
            </label> */}
            <div className="radio-btn-inner-flex">
              <input
                type="radio"
                id="Online"
                name="gender"
                defaultValue={retailer_data.type}
                onChange={(e) => {
                  setGender(1);
                }}
              />
              <label className="brand-lable-radio-btn-txt" for="male">
                Independent Retailer
              </label>
            </div>

            <div className="radio-btn-inner-flex">
              <input
                type="radio"
                id="In-Person"
                name="gender"
                // value={2}
                // onChange={(e) => setMode(e.target.value)}
                value={getgender}
                onChange={(e) => setGender(2)}
              />
              <label className="brand-lable-radio-btn-txt" for="specifyColor">
                Group Retailer
              </label>
            </div>
          </div>

          <div className="sign_input_wrapp sign_input_wrapp_padding_less">
            <label htmlFor="first-name">Brands (if applicable)</label>
            <select
              className="leaderboard-card-inp"
              onChange={(e) => {
                setMallname(e.target.value);
                console.log(e.target.value);
              }}>
              {get_brand_data &&
                get_brand_data.map((item, index) => {
                  return (
                    <>
                      {/* <option selected disabled value="">
                      Auto-fill from database
                    </option> */}
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    </>
                  );
                })}
            </select>
          </div>
          <div className="sign_input_wrapp sign_input_wrapp_padding_less">
            <label htmlFor="last-name">Account Manager First Name</label>
            <input
              type="text"
              value={getfirstname}
              onChange={(e) => setFirstname(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div className="sign_input_wrapp sign_input_wrapp_padding_less">
            <label>Account Manager Last Name</label>
            <input
              type="text"
              value={getlastname}
              onChange={(e) => setLastname(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div className="sign_input_wrapp sign_input_wrapp_padding_less">
            <label htmlFor="email">Account Manager Email Address</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name=""
              id=""
              value={getemail}
            />
          </div>
          <div className="sign_input_wrapp sign_input_wrapp_padding_less">
            <label htmlFor="password">Set a Password</label>
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
              checked={isAcceptTerm}
            />
            <p className="fs-des">
              I have read and agree to the{" "}
              <a className="signup_terms_link">Terms and Conditions</a> &{" "}
              <a className="signup_terms_link">Privacy Policy</a>
            </p>
          </div>
          <button
            className="btn btn-orange mb_16"
            disabled={isAcceptTerm ? false : true}
            onClick={() => SigninCustomer()}>
            Register
          </button>
          <p style={{ color: "black", fontWeight: "600", marginBottom: "5px" }}>
            OR
          </p>
          <p className="fs-des" style={{ paddingBottom: "20px" }}>
            If you are already registered, then{" "}
            <span
              // onClick={() => brandLoginModalOpen()}
              onClick={() => {
                brandLoginModalOpen(true);
                setRegisterModalIsOpenBrand(false);
                // setbrandModalIsOpen3(true);
              }}
              className="signup_terms_link">
              login here
            </span>
          </p>
        </div>
      </ReactModal>
      {/* Brand Register Modal End */}

      {/* Customer login Modal start */}
      <ReactModal
        isOpen={custLoginModalIsOpen3}
        // isOpen={modalIsOpen3}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal3}
        style={customStyles}>
        <div className="home_login_model_1sec_inner">
          {/* <button className="signup_modal_close" onClick={closeModal3}>
            <span
              style={{ fontSize: "16px" }}
              className="brand-lable-radio-btn-txt">
              Cancel
            </span>{" "}
            <AiOutlineClose color="red" />
          </button> */}
          <div className="f-b900 fs-22 mb_16 signup_headign">Welcome Back!</div>
          <div className="sign_input_wrapp">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              onChange={(e) => onHandleEmailChange(e)}
              name=""
              id=""
              className="signup_input"
              autoFocus="true"
            // style={{ background: "#DAD9D8", border: 'none' }}
            />
            <label htmlFor="password">Password</label>
            <div
              style={{
                background: "#DAD9D8",
                paddingTop: "0.4rem",
                paddingBottom: "0.4rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                display: "flex",
                alignItems: "center",
              }}
              className="input_box-cus-pass">
              <input
                type={passwordVisible ? "text" : "password"}
                value={getpassword}
                onChange={(e) => setPassword(e.target.value)}
                name=""
                id=""
                className="signup_input"
                style={{ background: "#DAD9D8", border: "none", width: "100%" }}
              />
              {passwordVisible === true ? (
                <AiOutlineEye size={22} onClick={togglePasswordVisibility}>
                  {passwordVisible ? "Hide" : "Show"}
                </AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible
                  size={22}
                  onClick={togglePasswordVisibility}>
                  {passwordVisible ? "Hide" : "Show"}
                </AiOutlineEyeInvisible>
              )}
            </div>
            <div className="signup_terms_wrapp">
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
            </div>
            <button className="signup_model_forgate">Forgot password?</button>
          </div>
          <button
            className="btn btn-orange mb_16"
            onClick={() => LoginCustomer()}
            disabled={isAcceptTerm ? false : true}>
            Login
          </button>
          <p
            style={{
              alignSelf: "center",
              marginBottom: "8px",
              fontWeight: "bold",
            }}>
            or
          </p>

          <div style={{ width: "100%" }}>
            {/* facebook button */}

            <LoginSocialFacebook
              appId="1377758369684897"
              fieldsProfile={
                "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
              }
              // version={3}
              onLoginStart={(e) => console.log(e)}
              onLogoutSuccess={(e) => console.log(e)}
              redirect_uri={Urls.base_url}
              onResolve={({ data }: IResolveParams) => {
                // setProfile(data);
                console.log(data);
                SigninCustomerFacebook(data, "3");
              }}
              onReject={(err) => {
                console.log(err);
              }}>
              <button
                className="mb_8 modal-social-btn "
                style={{
                  justifyContent: "center",
                  width: "100%",
                  color: "var(--color-gray)",
                  fontWeight: "600",
                  fontSize: "16px",
                }}>
                <FaFacebookF
                  color="var(--color-gray)"
                  style={{
                    marginRight: "8px",
                    fontSize: "16px",
                    marginBottom: "-2px",
                  }}
                />
                Continue with Facebook
              </button>
            </LoginSocialFacebook>

            {/* google button */}

            <LoginSocialGoogle
              // client_id="775372553139-o2l7tmtgohlmu3q31o0ufsfne62g47tk.apps.googleusercontent.com"
              client_id="826718979042-bhij4jt5s6p85n55hbuhh0v40i4b3ng4.apps.googleusercontent.com"
              onLoginStart={onLoginStart}
              redirect_uri={Urls.base_url}
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ data }: IResolveParams) => {
                setProfile(data);
                console.log("gdata", data);
                // registerWithGoogle(data);
                // registerWithGoogle(data);
                SigninCustomerGoogle(data.email, "2", data);
              }}
              onReject={(err) => {
                console.log(err);
              }}>
              <button
                className="mb_8 modal-social-btn "
                style={{
                  justifyContent: "center",
                  width: "100%",
                  color: "var(--color-gray)",
                  fontWeight: "600",
                  fontSize: "16px",
                }}>
                <ImGoogle
                  color="var(--color-gray)"
                  style={{
                    marginRight: "8px",
                    fontSize: "16px",
                    marginBottom: "-2px",
                  }}
                />
                Continue with Google
              </button>
              {/* <button onClick={() => {}} className="twitter-btn w-100">
              <i className="fab fa-google"></i> Google
            </button> */}
            </LoginSocialGoogle>
          </div>
          <button className="h6 mb_10 mt_10" style={{ alignSelf: "center" }}>
            Not registered yet?
          </button>
          <button
            onClick={() => {
              setIsOpen3(false);
              // setIsOpen(true)
              setRegisterCustomerOpen(true);
            }}
            className="btn btn-blue">
            Sign up
          </button>
        </div>
      </ReactModal>
      {/* Customer login Modal End */}

      {/* Brand Register Modal Start */}
      <ReactModal
        isOpen={registerModalIsOpenBrand}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModalBrand}
        style={customStyles}>
        <div style={{ backgroundColor: "#dad9d8" }}>
          <div style={{ height: "30px" }}>
            <button
              className="signup_modal_close"
              style={{ right: "7px", top: "9px" }}
              onClick={closeModal3}>
              <span style={{ fontSize: "16px" }}></span>
              {/* <AiOutlineClose /> */}
              <IoClose />
            </button>
          </div>
          <div className="tab_btn_main">
            <button
              onClick={() => {
                SetsignButn(1);
                SetboldButn(1);
              }}
              style={{
                backgroundColor: signButn == 1 ? "white" : "#dad9d8",
                fontWeight: boldButn == 1 ? "600" : "200",
              }}
              className="tab_btn_styling">
              Mall login / sign up
            </button>
            <button
              onClick={() => {
                // setbrandModalIsOpen3(true);
                SetsignButn(2);
                SetboldButn(2);
              }}
              style={{
                backgroundColor: signButn == 2 ? "white" : "#dad9d8",
                fontWeight: boldButn == 2 ? "600" : "200",
              }}
              className="tab_btn_styling">
              Brand login / sign up
            </button>
            <button
              onClick={() => {
                //  setCustLoginModalIsOpen3(true);
                SetsignButn(3);
                SetboldButn(3);
              }}
              style={{
                backgroundColor: signButn == 3 ? "white" : "#dad9d8",
                fontWeight: boldButn == 3 ? "600" : "200",
              }}
              className="tab_btn_styling">
              Consumer login / sign up
            </button>
          </div>
        </div>
        <div className="home_model_4wrapp">
          <button className="signup_modal_close" onClick={closeModalBrand}>
            <span
              style={{ fontSize: "16px" }}
              className="brand-lable-radio-btn-txt">
              {/* Cancel */}
            </span>{" "}
            <GrClose />
          </button>
          <button className="f-b900 fs-22 mb_16 signup_headign">
            Register to In-store
          </button>

          <div className="sign_input_wrapp sign_input_wrapp_padding_less">
            <label htmlFor="mall">Mall Name</label>
            <select
              className="leaderboard-card-inp"
              onChange={(e) => {
                setmallmasterid(e.target.value);
                getRetailerApi(e.target.value);
                console.log(e.target.value);
              }}>
              {getmallarray &&
                getmallarray.map((item, index) => {
                  return (
                    <>
                      {/* <option selected disabled value=""></option> */}
                      <option value={item.id} key={index}>
                        {item.name} {item.id} &nbsp;&nbsp;&nbsp;{" "}
                        {item.from_date} &nbsp;&nbsp;&nbsp; {item.to_date}
                      </option>
                    </>
                  );
                })}
            </select>
          </div>
          <div className="sign_input_wrapp sign_input_wrapp_padding_less">
            <label htmlFor="mall">Retailer Name</label>
            <select
              className="leaderboard-card-inp"
              onChange={(e) => {
                setRetailertype(e.target.value);
                console.log("retailertype is", retailertype);
                getBrand(e.target.value);
                console.log(e.target.value);
              }}>
              <option defaultValue value=""></option>
              {retailer_data &&
                retailer_data.map((item, index) => {
                  return (
                    <>
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    </>
                  );
                })}
            </select>
          </div>

          <div className="radio-btn-flex sign_input_wrapp_padding_less">
            {/* <label className="course-form-txt course-form-margin-right">
              Mode Of Delivery:
            </label> */}
            <div className="radio-btn-inner-flex">
              <input
                type="radio"
                id="Online"
                name="gender"
                defaultValue={retailer_data.type}
                onChange={(e) => {
                  setGender(1);
                }}
              />
              <label className="brand-lable-radio-btn-txt" for="male">
                Independent Retailer
              </label>
            </div>

            <div className="radio-btn-inner-flex">
              <input
                type="radio"
                id="In-Person"
                name="gender"
                // value={2}
                // onChange={(e) => setMode(e.target.value)}
                value={getgender}
                onChange={(e) => setGender(2)}
              />
              <label className="brand-lable-radio-btn-txt" for="specifyColor">
                Group Retailer
              </label>
            </div>
          </div>

          <div className="sign_input_wrapp sign_input_wrapp_padding_less">
            <label htmlFor="first-name">Brands (if applicable)</label>
            <select
              className="leaderboard-card-inp"
              onChange={(e) => {
                setMallname(e.target.value);
                console.log(e.target.value);
              }}>
              {get_brand_data &&
                get_brand_data.map((item, index) => {
                  return (
                    <>
                      {/* <option selected disabled value="">
                      Auto-fill from database
                    </option> */}
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    </>
                  );
                })}
            </select>
          </div>
          <div className="sign_input_wrapp sign_input_wrapp_padding_less">
            <label htmlFor="last-name">Account Manager First Name</label>
            <input
              type="text"
              value={getfirstname}
              onChange={(e) => setFirstname(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div className="sign_input_wrapp sign_input_wrapp_padding_less">
            <label>Account Manager Last Name</label>
            <input
              type="text"
              value={getlastname}
              onChange={(e) => setLastname(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div className="sign_input_wrapp sign_input_wrapp_padding_less">
            <label htmlFor="email">Account Manager Email Address</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name=""
              id=""
              value={getemail}
            />
          </div>
          <div className="sign_input_wrapp sign_input_wrapp_padding_less">
            <label htmlFor="password">Set a Password</label>
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
              checked={isAcceptTerm}
            />
            <p className="fs-des">
              I have read and agree to the{" "}
              <a className="signup_terms_link">Terms and Conditions</a> &{" "}
              <a className="signup_terms_link">Privacy Policy</a>
            </p>
          </div>
          <button
            className="btn btn-orange mb_16"
            disabled={isAcceptTerm ? false : true}
            onClick={() => SigninCustomer()}>
            Register
          </button>
          <p style={{ color: "black", fontWeight: "600", marginBottom: "5px" }}>
            OR
          </p>
          <p className="fs-des" style={{ paddingBottom: "20px" }}>
            If you are already registered, then{" "}
            <span
              // onClick={() => brandLoginModalOpen()}
              onClick={() => {
                brandLoginModalOpen(true);
                setRegisterModalIsOpenBrand(false);
                // setbrandModalIsOpen3(true);
              }}
              className="signup_terms_link">
              login here
            </span>
          </p>
        </div>
      </ReactModal>
      {/* Brand Register Modal End */}

      {/* Register Customer modal */}
      <ReactModal
        isOpen={getregisterCustomerOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModalRegisterNavbar}
        style={customStyles}>
        <div style={{ backgroundColor: "#dad9d8" }}>
          <div style={{ height: "30px" }}>
            <button
              className="signup_modal_close"
              style={{ right: "7px", top: "9px" }}
              onClick={closeModal3}>
              <span style={{ fontSize: "16px" }}></span>
              {/* <AiOutlineClose /> */}
              <IoClose />
            </button>
          </div>
          <div className="tab_btn_main">
            <button
              onClick={() => {
                SetsignButn(1);
                SetboldButn(1);
              }}
              style={{
                backgroundColor: signButn == 1 ? "white" : "#dad9d8",
                fontWeight: boldButn == 1 ? "600" : "200",
              }}
              className="tab_btn_styling">
              Mall login / sign up
            </button>
            <button
              onClick={() => {
                // setbrandModalIsOpen3(true);
                SetsignButn(2);
                SetboldButn(2);
              }}
              style={{
                backgroundColor: signButn == 2 ? "white" : "#dad9d8",
                fontWeight: boldButn == 2 ? "600" : "200",
              }}
              className="tab_btn_styling">
              Brand login / sign up
            </button>
            <button
              onClick={() => {
                //  setCustLoginModalIsOpen3(true);
                SetsignButn(3);
                SetboldButn(3);
              }}
              style={{
                backgroundColor: signButn == 3 ? "white" : "#dad9d8",
                fontWeight: boldButn == 3 ? "600" : "200",
              }}
              className="tab_btn_styling">
              Consumer login / sign up
            </button>
          </div>
        </div>
        <div className="home_model_4wrapp">
          <button
            className="signup_modal_close"
            onClick={closeModalRegisterNavbar}>
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
              autoFocus="true"
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
            <label htmlFor="email">Email</label>
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
              checked={isAcceptTerm}
            />
            <p className="fs-des">
              I have read and agree to the{" "}
              <a className="signup_terms_link">Terms and Conditions</a> &{" "}
              <a className="signup_terms_link">Privacy Policy</a>
            </p>
          </div>
          <button
            className="btn btn-orange mb_16"
            disabled={isAcceptTerm ? false : true}
            onClick={() => SigninCustomer()}>
            Register
          </button>
          {/* <button
            className="btn btn-orange mb_16"
            disabled={isAcceptTerm === 1 ? false : true}
            onClick={() => {
              console.log("bsdjhfgsjfhjksdfg");
              SigninCustomer();
            }}
          >
            Register
          </button> */}

          <p
            style={{
              alignSelf: "center",
              marginBottom: "8px",
              fontWeight: "bold",
            }}>
            or
          </p>

          <div style={{ width: "100%" }}>
            {/* facebook button */}

            <LoginSocialFacebook
              appId="1377758369684897"
              fieldsProfile={
                "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
              }
              // version={3}
              onLoginStart={(e) => console.log(e)}
              onLogoutSuccess={(e) => console.log(e)}
              redirect_uri={Urls.base_url}
              onResolve={({ data }: IResolveParams) => {
                // setProfile(data);
                console.log(data);
                SigninCustomerFacebook(data, "4");
              }}
              onReject={(err) => {
                console.log(err);
              }}>
              <button
                className="mb_8 modal-social-btn "
                style={{
                  justifyContent: "center",
                  width: "100%",
                  color: "var(--color-gray)",
                  fontWeight: "600",
                  fontSize: "16px",
                }}>
                <FaFacebookF
                  color="var(--color-gray)"
                  style={{
                    marginRight: "8px",
                    fontSize: "16px",
                    marginBottom: "-2px",
                  }}
                />
                Continue with Facebook
              </button>
            </LoginSocialFacebook>

            {/* google button */}

            <LoginSocialGoogle
              // client_id="775372553139-o2l7tmtgohlmu3q31o0ufsfne62g47tk.apps.googleusercontent.com"
              client_id="826718979042-bhij4jt5s6p85n55hbuhh0v40i4b3ng4.apps.googleusercontent.com"
              onLoginStart={onLoginStart}
              redirect_uri={Urls.base_url}
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ data }: IResolveParams) => {
                setProfile(data);
                console.log("gdata", data);
                // registerWithGoogle(data);
                // registerWithGoogle(data);
                SigninCustomerGoogle(data.email, "4", data);
              }}
              onReject={(err) => {
                console.log(err);
              }}>
              <button
                className="mb_8 modal-social-btn "
                style={{
                  justifyContent: "center",
                  width: "100%",
                  color: "var(--color-gray)",
                  fontWeight: "600",
                  fontSize: "16px",
                }}>
                <ImGoogle
                  color="var(--color-gray)"
                  style={{
                    marginRight: "8px",
                    fontSize: "16px",
                    marginBottom: "-2px",
                  }}
                />
                Continue with Google
              </button>
              {/* <button onClick={() => {}} className="twitter-btn w-100">
              <i className="fab fa-google"></i> Google
            </button> */}
            </LoginSocialGoogle>

            <p
              style={{
                marginTop: "10px",
                textAlign: "center",
                marginBottom: "20px",
              }}>
              Already have an account?
            </p>

            <button
              onClick={() => {
                setRegisterCustomerOpen(false);
                setIsOpen3(true);
              }}
              className="btn btn-blue"
              style={{ marginBottom: "20px" }}>
              Sign in
            </button>
          </div>
        </div>
      </ReactModal>
      {/* End Register Customer modal  */}
    </>
  );
};
export default HomeNavbar;
