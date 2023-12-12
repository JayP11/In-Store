import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import images from "../../constants/images";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";

const RetailerPageNavbar = ({ setTab }) => {
  let navigate = useNavigate();
  const location = useLocation();

  const [getsidebarOpen, setSidebarOpen] = useState(false);
  const [getaccountOpen, setAccountOpen] = useState(false);
  const [getcondation, SetCondation] = useState(false);
  const [profile, setProfile] = useState("");
  const [getcustomerDropdown, setCustomerDropdown] = useState(false);
  const [getregisterCustomerOpen, setRegisterCustomerOpen] = useState(false);

  const [getrole, setrole] = useState();
  const [login, SetLogin] = useState("");

  function logout() {
    localStorage.clear();
    // window.location.reload(false);
    navigate("/retailer");
  }

  useEffect(() => {
    token();
    console.log("profile", profile);
    let role = localStorage.getItem("role");
    setrole(role);
    var islogin = localStorage.getItem("is_login");
    SetLogin(islogin);
  }, []);

  const token = async () => {
    console.log("is_token", await localStorage.getItem("is_token"));

    const login = await localStorage.getItem("is_token");
    if (login) {
      SetCondation(true);
    } else {
      SetCondation(false);
    }
  };

  return (
    <nav className="nav_main_wrapp">
      <div className="container">
        <div className="nav_base_wrapp">
          <Link to={"/"}>
            <img src={images.brandlogo} alt="logo" className="nav_logo" />
          </Link>
          <div className="nav-links-mall">
            <Link
              to={"/"}
              style={{
                color: location.pathname === "/" ? "#ff8b00" : "black",
                fontWeight: location.pathname === "/" ? "600" : "400",
              }}
            >
              Home
            </Link>
            <NavLink
              to={"/about-instore"}
              style={{
                color:
                  location.pathname === "/about-instore" ? "#ff8b00" : "black",
                fontWeight:
                  location.pathname === "/about-instore" ? "600" : "400",
              }}
            >
              About In-store
            </NavLink>
            {/* <Link
                            // onClick={() => setIsOpen(true)}
                            to={"/mall"}
                            style={{ color: location.pathname === "/mall" ? "#ff8b00" : "black", fontWeight: location.pathname === "/mall" ? "600" : "400" }}
                        >
                            Mall Registration
                        </Link>

                        <Link
                            // onClick={() => setModalIsOpenBrand(true)}
                            to={"/retailer"}
                            style={{ color: location.pathname === "/retailer" ? "#ff8b00" : "black", fontWeight: location.pathname === "/retailer" ? "600" : "400" }}
                        >
                            Brand Registration
                        </Link> */}
            <div className="nav_myacc_wrapp">
              <Link>
                <img src={images.profile_logo} alt="" className="nav_profile" />
              </Link>
              <Link
                to={""}
                onClick={() => setCustomerDropdown(!getcustomerDropdown)}
              >
                Account{" "}
                {getcustomerDropdown ? <BsChevronUp /> : <BsChevronDown />}
              </Link>
              {getcustomerDropdown ? (
                <>
                  <div className="navbar-acc-menu-open-warapp">
                    <Link
                      to="/mall"
                      className="navbar-acc-menu-link"
                    // onClick={() => { setTab(1) }}
                    >
                      Mall
                    </Link>
                    <Link
                      to="/retailer"
                      className="navbar-acc-menu-link"
                    // onClick={() => { setTab(2) }}
                    >
                      Brand
                    </Link>
                    <Link
                      to="/customer"
                      className="navbar-acc-menu-link"
                    // onClick={() => { setTab(2) }}
                    >
                      Customer
                    </Link>
                    {/* {is_login === true || role === 4 ? <Link to="/customer"
                                            className="navbar-acc-menu-link"
                                        >
                                            Customer
                                        </Link> : <Link to="/"
                                            className="navbar-acc-menu-link"
                                        >
                                            Customer
                                        </Link>} */}
                    {/* <Link to=""
                                            className="navbar-acc-menu-link"
                                            onClick={() => { setTab(2) }}
                                        >
                                            &nbsp;&nbsp;-Leaderboard Banner
                                        </Link>
                                        <Link
                                            className="navbar-acc-menu-link"
                                            onClick={() => { setTab(4) }}
                                        >
                                            &nbsp;&nbsp;-Promotional Banner
                                        </Link>
                                        <Link
                                            className="navbar-acc-menu-link"
                                            onClick={() => { setTab(5) }}
                                        >
                                            &nbsp;&nbsp;-Product Banner
                                        </Link> */}
                    {/* <Link className="navbar-acc-menu-link" onClick={() => { setTab(6) }}>&nbsp;&nbsp;-Product Tiles</Link>
                                        <Link className="navbar-acc-menu-link" onClick={() => { setTab(7) }}>&nbsp;&nbsp;-Track analytics</Link>
                                        <Link className="navbar-acc-menu-link">My Brand in mall</Link> */}
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
              {/* <div style={{ position: 'relative' }}>
                                <Link to=""><img src={images.cart_icon} className="cart-icon-img" /></Link>
                                <div className="cart-digit-main">0</div>
                            </div> */}
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
            }}
          >
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
            {login === "true" || getrole === 2 ? (
              <></>
            ) : (
              <Link
                onClick={() => {
                  setIsOpen3(true);
                  setSidebarOpen(!getsidebarOpen);
                }}
              >
                Login
              </Link>
            )}
            {/* <Link to="/mall">Mall </Link> */}
            {/* <Link to="/retailer">Brand Registration</Link> */}
            {/* {getcondation === false ? (
                <Link onClick={() => setIsOpen2(true)}>Sign Up</Link>
              ) : null} */}

            {/* {getcondation === true ? ( */}
            {/* {is_login === true || role === 2 ? ( */}
            {login === "true" || getrole === 2 ? (
              <>
                <Link onClick={() => setAccountOpen(!getaccountOpen)}>
                  My Account{" "}
                  {getaccountOpen ? <BsChevronUp /> : <BsChevronDown />}
                </Link>
              </>
            ) : null}

            {/* ) : null} */}

            {/* ) : null} */}
            {/* <Link onClick={logout}>
                <IoIosLogOut size={20} />
              </Link> */}
            {getaccountOpen && (
              <div className="accunt_sec_wrapp">
                <Link
                  onClick={() => {
                    setTab(1);
                    setSidebarOpen(!getsidebarOpen);
                  }}
                >
                  My Profile
                </Link>
                <Link
                  onClick={() => {
                    setTab(2);
                    setSidebarOpen(!getsidebarOpen);
                  }}
                >
                  Acccount Setting
                </Link>
                <Link
                  onClick={() => {
                    setTab(3);
                    setSidebarOpen(!getsidebarOpen);
                  }}
                >
                  Leaderboard Banners
                </Link>
                <Link
                  onClick={() => {
                    setTab(4);
                    setSidebarOpen(!getsidebarOpen);
                  }}
                >
                  Promotional Banners
                </Link>
                <Link
                  onClick={() => {
                    setTab(5);
                    setSidebarOpen(!getsidebarOpen);
                  }}
                >
                  Product Banners
                </Link>
                <Link
                  onClick={() => {
                    setTab(6);
                    setSidebarOpen(!getsidebarOpen);
                  }}
                >
                  Product Tiles
                </Link>
                <Link
                  onClick={() => {
                    setTab(7);
                    setSidebarOpen(!getsidebarOpen);
                  }}
                >
                  Track analytics
                </Link>
                <Link
                  onClick={() => {
                    setSidebarOpen(!getsidebarOpen);
                  }}
                >
                  My Brand in mall
                </Link>
                <Link
                  onClick={() => {
                    setSidebarOpen(!getsidebarOpen);
                  }}
                >
                  Help
                </Link>
                {login === "true" ? (
                  <Link onClick={logout}>Logout</Link>
                ) : (
                  <></>
                )}
                {/* <Link onClick={() => setTab(8)}></Link> */}

                {/* <Link onClick={() => setRegisterCustomerOpen(true)}>Sign Up</Link> */}
                {/* <Link onClick={() => { setIsOpen(true); setSidebarOpen(!getsidebarOpen); }}>Sign Up</Link> */}

                {/* <Link>Help</Link> */}

                {/* <Link> - Events</Link>
                  <Link> - Facilities</Link>
                  <Link> Contact Details</Link> */}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default RetailerPageNavbar;
