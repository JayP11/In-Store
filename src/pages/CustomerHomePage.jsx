import React, { useEffect, useState } from "react";
import { useMallContext } from "../context/mall_context";
import images from "../constants/images";
import { HomeHero, WelcomeStore, WhayJoin } from "../container";
import { Helmet } from "react-helmet";
import { Navbar } from "../common";
import ReactModal from "react-modal";
import { GrClose } from "react-icons/gr";
import { useAuthContext } from "../context/auth_context";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import { ImGoogle } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import Urls from "../utils/Urls";
import axios from "axios";
import { ACCEPT_HEADER, get_customer_landing } from "../utils/Constant";
import { CustomerHomeWelcomeStore, WhyjoinCustomerHome } from "../components";

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

const CustomerHomePage = () => {
  const [getCustData, setCustData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCustDataApi();
  }, []);
  useEffect(() => {
    // console.log("locato -=>", location.state.item);
    window.scrollTo(0, 0);
  }, []);

  const getCustDataApi = async () => {
    setLoading(true);
    axios
      .get(get_customer_landing, { headers: { Accept: ACCEPT_HEADER } })
      .then((res) => {
        console.log("Customer log");
        console.log("cust data", JSON.stringify(res.data, null, 2));
        if (res.data.success === 1) {
          setCustData(res.data.data[0]);
          setLoading(false);
        } else {
          null;
        }
      });
  };

  const { getMall, get_mall_data, setMallRegister } = useMallContext();
  const { region_data, RegisterCustomer } = useAuthContext();
  const [getcustomerDropdown, setCustomerDropdown] = useState(false);
  const [getregisterCustomerOpen, setRegisterCustomerOpen] = useState(false);

  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [getfirstname, setFirstname] = useState("");
  const [getlastname, setLastname] = useState("");
  const [getemail, setEmail] = useState("");
  const [getpassword, setPassword] = useState("");
  const [getregion, setRegion] = useState();
  const [isAcceptTerm, setIsAcceptTerm] = useState(0);

  useEffect(() => {
    // getMall()
    console.log("get_mall_data", get_mall_data);
  }, [get_mall_data]);

  useEffect(() => {
    console.log("region_data", region_data);
  }, []);

  function closeModal() {
    setRegisterCustomerOpen(false);
  }

  const onHandleEmailChange = (e) => {
    let email = e.target.value;

    if (email === "" || regEx.test(email)) {
      setEmail(email);
    } else {
      return;
    }
  };

  const SetRegister = async () => {
    if (getfirstname === "") {
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
    } else if (getregion === null || getregion === undefined) {
      alert("Please Select Region....!");
      return;
    } else if (getpassword === "") {
      alert("Enter the password....!");
      return;
    } else {
      var params = {
        email: getemail,
        password: getpassword,
        first_name: getfirstname,
        last_name: getlastname,
        terms_condition: isAcceptTerm,
        region_id: getregion,
      };

      console.log("-=-=-=->", params);
      const data = await RegisterCustomer(params);
      if (data) {
        if (data.success === 1) {
          console.log("register-data", data);
          setIsOpen(false);
          setEmail("");
          setPassword("");
          // window.location.reload(false);
        }
      }
    }
  };

  // terms checkbox funtion

  const handleTermChange = (e) => {
    setIsAcceptTerm(1);
    console.log("e.targate.value");
  };

  const onLoginStart = () => {
    // console.log("Start");
  };

  <Helmet>
    <title>In-store</title>
    <meta property="og:image" content="%PUBLIC_URL%/logo512.png" />
  </Helmet>;

  return (
    <>
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

          {get_mall_data === "" ||
            get_mall_data === undefined ||
            get_mall_data === null ? (
            <>
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
            </>
          ) : (
            <>
              <div>
                <Navbar
                  setCustomerDropdown={setCustomerDropdown}
                  setRegisterCustomerOpen={setRegisterCustomerOpen}
                  getcustomerDropdown={getcustomerDropdown}
                  getregisterCustomerOpen={getregisterCustomerOpen}
                />

                {/* <div className="homecards_grid">
        {get_mall_data && get_mall_data.length > 0 &&
          get_mall_data.map((item, index) => {
            return <Imgcard key={item.id} item={item} />;
          })}
      </div> */}
                {/* <HomeHero img={images.hero_banner} /> */}
                {/* hero start */}
                <div
                  className="about_hero_wrapp bg-home-grad"
                  style={{
                    // backgroundImage: `url(${images.in_store_landing_header})`,
                    backgroundImage: `url(${getCustData ? getCustData.image_path : ""
                      })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}>
                  {/* <img src={images.hero_banner} alt="" /> */}
                  <div className="banner-overlay"></div>

                  <div className="homehero_text_main">
                    <div className="homehero_text_base">
                      {/* <img src={images.hero_logo} alt="" /> */}
                      <img
                        src={getCustData ? getCustData.logo_img_path : ""}
                        alt=""
                      />
                      {/* <p
              style={{
                fontSize: "32px",
                fontWeight: "500",
                color: "var(--color-orange)",
              }}
            >
              for malls
            </p> */}
                      {/* <button className="btn btn-black" style={{ width: "auto" }}>
              Register your mall
            </button> */}
                      <div className="apps_logos_wrapp">
                        <img
                          src={getCustData ? getCustData.play_store_img_path : ""}
                          // src={images.in_store_google_download}
                          style={{ width: "155px", height: "46px" }}
                          alt="play store logo"
                        />
                        <img
                          // src={images.in_store_apple_download}
                          src={getCustData ? getCustData.app_store_img_path : ""}
                          style={{ width: "155px", height: "46px" }}
                          alt="app store logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* hero end */}
                <CustomerHomeWelcomeStore
                  WcBtn={false}
                  titie={getCustData}
                  // titie={getCustData ? getCustData.welcome_title : ""}
                  des={
                    getCustData
                  }
                />
                <WhyjoinCustomerHome getCustData={getCustData} />
                {/* about in store register part-2 end*/}
                <div className="main_wrapp registermall_main_wrapp bg-blue">
                  <div className="container registermall_base_wrapp">
                    <div className="registermall_sec1">
                      <h2 className="h2">
                        {/* Lorem ipsum dolor sit
                    <br /> consectetuer */}
                        {getCustData ? getCustData.details_title_1 : ""}
                      </h2>
                      <p>
                        {getCustData ? getCustData.details_description_1 : ""}
                        {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo. */}
                      </p>
                      <div className="apps_logos_wrapp">
                        <img
                          // src={images.in_store_google_download}
                          src={getCustData ? getCustData.play_store_img_path : ""}
                          style={{ width: "155px", height: "46px" }}
                          alt="play store logo"
                        />
                        <img
                          // src={images.in_store_apple_download}
                          src={getCustData ? getCustData.app_store_img_path : ""}
                          style={{ width: "155px", height: "46px" }}
                          alt="app store logo"
                        />
                      </div>
                      {/* <button>Sign up to In-store</button> */}
                    </div>
                    {/* <div className="registermall_sec2">
                  <img
                    src={getCustData ? getCustData.details_image_1_path : ""}
                    alt=""
                  />
                </div> */}
                    <div className="registermall_sec2">
                      {/* <img src={images.registermall} alt="" /> */}
                      <img
                        src={getCustData ? getCustData.details_image_1_path : ""}
                        alt=""
                      />
                      <img
                        src={images.registermall_vector}
                        alt=""
                        className="registermall_sec2_vector"
                      />

                      {/* <img
            src={getStoreData ? getStoreData.details_image_3_path : ""}
            alt=""
            className="registermall_sec2_vector"
          /> */}
                    </div>
                  </div>
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
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        onChange={(e) => onHandleEmailChange(e)}
                        name=""
                        id=""
                      />
                    </div>

                    <div className="sign_input_wrapp">
                      <label htmlFor="email">Region</label>
                      <select
                        className="leaderboard-card-inp"
                        onChange={(e) => {
                          setRegion(e.target.value);
                          console.log(e.target.value);
                        }}>
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
                    </div>

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
                      onClick={() => {
                        // setIsOpen3(false);
                        setRegisterCustomerOpen(true);
                      }}
                      className="btn btn-blue">
                      Sign in
                    </button>
                  </div>
                </ReactModal>
              </div>
            </>
          )}
        </>)}
    </>
  );
};

export default CustomerHomePage;