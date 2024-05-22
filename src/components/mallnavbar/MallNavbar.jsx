import React, { useEffect, useState } from "react";
import "./MallNavbar.css";
import images from "../../constants/images";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useMallContext } from "../../context/mall_context";
import { useAuthContext } from "../../context/auth_context";
import { IoClose } from "react-icons/io5";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import { AiOutlineClose } from "react-icons/ai";
import ReactModal from "react-modal";
import { ImGoogle } from "react-icons/im";
import { FaApple, FaFacebookF } from "react-icons/fa";
import Urls from "../../utils/Urls";
import { GrClose } from "react-icons/gr";
import Notification from "../../utils/Notification"

import {
  // AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  // AiOutlineGoogle,
} from "react-icons/ai";
import { useStoreContext } from "../../context/store_context";
import { ACCEPT_HEADER, get_mall, get_mall_master } from "../../utils/Constant";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { RxCross2 } from "react-icons/rx";

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

const customStyles1 = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "1rem",
    backgroundColor: "none",
    border: "none",
    borderRadius: "0px",
    maxHeight: "670px",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

const MallNavbar = ({ setTab, get_mall_auth_data }) => {
  const location = useLocation();

  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);
  const [modalIsOpenBrand, setModalIsOpenBrand] = useState(false);

  const [getmallname, setMallname] = useState("");
  const [getfirstname, setFirstname] = useState("");
  const [getlastname, setLastname] = useState("");
  // const [getRegion, setRegion] = useState("");
  const [getemail, setEmail] = useState("");
  const [getpassword, setPassword] = useState("");
  const [getsidebarOpen, setSidebarOpen] = useState(false);
  const [getaccountOpen, setAccountOpen] = useState(false);
  const [getcondation, SetCondation] = useState(false);
  const [profile, setProfile] = useState("");
  const [isAcceptTerm, setIsAcceptTerm] = useState(false);
  const [isAcceptTerm2, setIsAcceptTerm2] = useState(false);
  const [getrole, setrole] = useState();
  const [login, SetLogin] = useState("");
  const [getModal, setModal] = useState(false);

  const [getMallCartCount, setMallCartCount] = useState("");
  const [getgender, setGender] = useState("");
  const { get_brand_data, getBrand } = useMallContext();

  const [getcustomerDropdown, setCustomerDropdown] = useState(false);
  const [getregisterCustomerOpen, setRegisterCustomerOpen] = useState(false);

  const [getvat_no, setvat_no] = useState("");
  const [getearh_no, setearh_no] = useState("");

  const [signButn, SetsignButn] = useState(1);
  const [regButn, SetregButn] = useState(1);
  const [boldButn, SetboldButn] = useState(1);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [brandModalIsOpen3, setbrandModalIsOpen3] = useState(false);
  const [registerModalIsOpenBrand, setRegisterModalIsOpenBrand] =
    useState(false);
  const [getmallarray, SetMallArray] = useState([]);
  const [getmallarray2, SetMallArray2] = useState([]);
  const [getmall, SetMall] = useState("");
  // const { retailer_data } = useStoreContext();
  const { cinema_mall_data, setRegisterCinema, getCinemaNameApi } = useStoreContext();
  const [getmallmasterid, setmallmasterid] = useState("");
  const [retailertype, setRetailertype] = useState("");
  const [getregion, setRegion] = useState("");
  const [getaddmallname, setAddMallName] = useState("");
  const [getcompanyregnumber, setCompanyRegNumber] = useState("");


    // Upload Document
    const [files, setFiles] = useState([]);
    const [files2, setFiles2] = useState([]);
    const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
      useDropzone({
        onDrop: (acceptedFiles) => {
          console.log("acceptedFiles", acceptedFiles);
          {
            setFiles(
              acceptedFiles.map((file) =>
                Object.assign(file, {
                  preview: URL.createObjectURL(file),
                })
              )
            );
          }
  
        },
      });
  
    const { getRootProps: getRootMapProps, getInputProps: getInputMapProps } =
      useDropzone({
        onDrop: (acceptedFiles) => {
          console.log("acceptedFiles", acceptedFiles);
          {
            setFiles2(
              acceptedFiles.map((file) =>
                Object.assign(file, {
                  preview: URL.createObjectURL(file),
                })
              )
            );
          }
          // SetCondation1(true);
          // if (acceptedFiles.length === 0) {
          //   window.location.reload(true);
          // }
        },
      });


  const { setMallRegister, is_login, is_token, logoutUser, role,get_mall_cart_data_count } =
    useMallContext();

  const { setRegisterStore, retailer_data, getRetailerApi } = useStoreContext();


  const { setLogin, RegisterCustomer,region_data } = useAuthContext();

  let navigate = useNavigate();
  // const redirect = location.search ? location.search.split("=")[1] : "/";
  // const redirect = "http://localhost:3000/account/login";

  function logout() {
    localStorage.clear();
    navigate("/mall");
    window.location.reload(false);
  }

  useEffect(() => {
    token();
    console.log("profile", profile);
    let role = localStorage.getItem("role");
    setrole(role);
    var islogin = localStorage.getItem("is_login");
    var getmallcartcount = localStorage.getItem("mallcartcount");
    SetLogin(islogin);
    setMallCartCount(getmallcartcount);
    console.log("cart count mall 123",getMallCartCount);
    console.log("is login-----", login);
    console.log("is role-----", getrole);
  }, []);

  const responseFacebook = (response) => {
    console.log(response);
  };
  const brandLoginModalOpen = () => {
    setModalIsOpenBrand(false);
    setIsOpen3(true);
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
        role: 2,
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

  function closeModalRegisterNavbar() {
    setRegisterCustomerOpen(false);
  }

  const SigninCustomerFacebook = async (fdata, type) => {
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

  // function logout() {
  //     localStorage.clear();
  //     window.location.reload(false);
  //     navigate("/");
  // }

  // let navigate = useNavigate();

  const mallLoginModalOpen = () => {
    setIsOpen(false);
    setIsOpen3(true);
  };

  function closeModal() {
    setIsOpen(false);
    setModal(false);

  }

  function closeModal3() {
    setIsOpen3(false);
  }

  // const onHandleEmailChange = (e) => {
  //     let email = e.target.value;

  //     if (email === "" || regEx.test(email)) {
  //         setEmail(email);
  //     } else {
  //         return;
  //     }
  // };

  // terms checkbox funtion

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleTermChange = (e) => {
    setIsAcceptTerm(1);
    console.log("e.targate.value");
  };
  const handleTermChange2 = (e) => {
    setIsAcceptTerm2(1);
    console.log("e.targate.value");
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
          // Notification("success", "Success!", "Brand Registerated Successfully!");
          setIsOpen3(false);
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

  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);
  const SigninMall = async (type) => {
    // if (getmallname === "") {
    //   alert("Enter the Mall Name......!");
    //   return;
    // } 
    if (getmall === "" && getregion === "") {
      alert("Please Select Mall......!");
      return;
    } 
    // if (getregion === "") {
    //   alert("Please Select Region......!");
    //   return;
    // }
      if (getcompanyregnumber === "") {
      alert("Enter the Company Registration Number......!");
      return;
    }if (getvat_no === "") {
      alert("Enter the VAT No......!");
      return;
    }else if (getearh_no === "") {
      alert("Enter the earh No......!");
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
    } else if (files === "") {
      alert("Please Upload Company Registration Document....!");
      return;
    } else if (files === "") {
      alert("Please Upload VAT Registration Document....!");
      return;
    } else {
      // var params = {
      //   mall_master_id: getmall,
      //   vat_no: getvat_no,
      //   earh_no: getearh_no,
      //   role: 2,
      //   email: getemail,
      //   password: getpassword,
      //   first_name: getfirstname,
      //   last_name: getlastname,
      //   terms_condition: isAcceptTerm,
      //   lat: position.latitude,
      //   log: position.longitude
      // };

      const formdata = await new FormData();
      if(getregion === ""){
        await formdata.append("mall_master_id", getmall);

      }else{}
      await formdata.append("company_reg_no", getcompanyregnumber);
      await formdata.append("vat_no", getvat_no);
      await formdata.append("earh_no", getearh_no);
      if(getmall === ""){
        await formdata.append("add_mall",getaddmallname);

      }else{}
      await formdata.append("role", 2);
      await formdata.append("email", getemail);
      await formdata.append("password", getpassword);
      await formdata.append("first_name", getfirstname);
      await formdata.append("last_name", getlastname);
      await formdata.append("region_id", getregion);
      await formdata.append("terms_condition", isAcceptTerm);
      await formdata.append("lat",position.latitude);
      await formdata.append("log",position.longitude);
      await formdata.append("company_reg_document",files[0]);
      await formdata.append("vat_document",files2[0]);


      console.log("-=-=-=->", formdata);
      const data = await setMallRegister(formdata);
      if (data) {
        if (data.success === 1) {
          console.log("register-data", data);
          Notification("success", "Success!", "Mall Registerated Successfully!");
          setIsOpen3(false);
          setIsOpen(false);
          setearh_no("");
          setvat_no("");
          setFirstname("");
          setLastname("");
          setEmail("");
          setPassword("");
          setCompanyRegNumber("");
          setRegion("");
          setModal(true);

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
          // Notification("success", "Success!", "Customer Registerated Successfully!");

          // setIsOpen(false);
          setIsOpen3(false);
          setRegisterCustomerOpen(false);
          setEmail("");
          setPassword("");
          // window.location.reload(false);
        }
      }
    }
  };

  // Customer Signup

  const SigninCinema = async (type) => {
    if (getgender === "") {
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
        // role: 3,
        password: getpassword,
        privacy_policy: isAcceptTerm,
        // terms_condition: isAcceptTerm2,
      };

      // console.log("-=-=-=->", params);
      const data = await setRegisterCinema(params);
      if (data) {
        if (data.success === 1) {
          // console.log("register-data", data);
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
          setIsAcceptTerm2("");
          setIsOpen3(false);
          // window.location.reload(false);
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

  // // terms checkbox funtion

  // const handleTermChange = (event) => {
  //     setIsAcceptTerm((current) => !current);
  // };

  function closeModal() {
    setIsOpen(false);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  function closeModal3() {
    setIsOpen3(false);
  }

  function closeModal4() {
    setIsOpen4(false);
  }

  function closeModalBrand() {
    setModalIsOpenBrand(false);
  }
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

  const LoginCinema = async (e) => {
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
        role: 6,
        email: getemail,
        password: getpassword,
        type: "1",
      };

      console.log("-=-=-=->", params);
      const data = await setLogin(params);
      if (data) {
        if (data.success === 1) {
          console.log("cinema-data", data);
          setIsOpen3(false);
          setEmail("");
          setPassword("");
          // window.location.reload(false);
          navigate("/CinemaDashboard");
        }
      }
    }
  };
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
          // Notification("success", "Success!", "Mall Registerated Successfully!");

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
  return (
    <>
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
              {/* <Link
                            // onClick={() => setIsOpen(true)}
                            to={"/mall"}
                            style={{ color: location.pathname === "/mall" ? "#ff8b00" : "black", fontWeight: location.pathname === "/mall" ? "600" : "400" }}
                        >
                            Mall Registration
                        </Link> */}

              {/* <Link
                            // onClick={() => setModalIsOpenBrand(true)}
                            to={"/retailer"}
                            style={{ color: location.pathname === "/retailer" ? "#ff8b00" : "black", fontWeight: location.pathname === "/retailer" ? "600" : "400" }}
                        >
                            Brand Registration
                        </Link> */}
              <div className="nav_myacc_wrapp">
                <NavLink
                  to={""}
                  style={{
                    color:
                      location.pathname === "/profile-page"
                        ? "#ff8b00"
                        : "black",
                    fontWeight:
                      location.pathname === "/profile-page" ? "600" : "400",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      marginTop: "5px",
                    }}>
                    <Link>
                      <img
                        src={
                          get_mall_auth_data
                            ? get_mall_auth_data.shopping_center_logo_mall_path
                              ? get_mall_auth_data.shopping_center_logo_mall_path
                              : images.profile_logo
                            : images.profile_logo
                        }
                        alt=""
                        className="nav_profile"
                      />
                    </Link>
                    {login === "true" && getrole == 2 ? (
                      <>
                        <Link
                          to={""}
                          onClick={() =>
                            setCustomerDropdown(!getcustomerDropdown)
                          }
                          className="my-acc-nav-flex">
                          My Account{" "}
                          {getcustomerDropdown ? (
                            <BsChevronUp style={{ marginTop: "1px" }} />
                          ) : (
                            <BsChevronDown style={{ marginTop: "1px" }} />
                          )}
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to={""}
                          onClick={() =>
                            setCustomerDropdown(!getcustomerDropdown)
                          }
                          className="my-acc-nav-flex">
                          Account{" "}
                          {getcustomerDropdown ? (
                            <BsChevronUp style={{ marginTop: "1px" }} />
                          ) : (
                            <BsChevronDown style={{ marginTop: "1px" }} />
                          )}
                        </Link>
                      </>
                    )}
                  </div>
                </NavLink>
                {/* <Link>
                  <img
                    src={
                      get_mall_auth_data
                        ? get_mall_auth_data.shopping_center_logo_mall_path
                          ? get_mall_auth_data.shopping_center_logo_mall_path
                          : images.profile_logo
                        : images.profile_logo
                    }
                    alt=""
                    className="nav_profile"
                  />
                </Link>
                <Link
                  to={""}
                  onClick={() => setCustomerDropdown(!getcustomerDropdown)}
                >
                  Account{" "}
                  {getcustomerDropdown ? <BsChevronUp /> : <BsChevronDown />}
                </Link> */}
                {getcustomerDropdown ? (
                  <>
                    <div className="navbar-acc-menu-open-warapp">
                      {/* <Link to="/mall" className="navbar-acc-menu-link">
                        Mall
                      </Link> */}
                      {/* <Link to="/retailer" className="navbar-acc-menu-link">
                        Brand
                      </Link> */}
                      {/* {is_login === true || role === 4 ? <Link to="/customer"
                                                className="navbar-acc-menu-link"
                                            >
                                                Customer
                                            </Link> : <Link to="/"
                                                className="navbar-acc-menu-link"
                                            >
                                                Customer
                                        </Link>} */}
                      {/* <Link to="/customer" className="navbar-acc-menu-link">
                        Customer
                      </Link> */}
                      {/* {login === "true" || getrole == 2 ? (
                        <Link
                          to="/profile-page"
                          className="navbar-acc-menu-link"
                        >
                          Mall Dashboard
                        </Link>
                      ) : null} */}

                      {login === false || login === null ? (
                        <>
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
                          <Link
                            to="/CinemaPage"
                            className="navbar-acc-menu-link"
                          // onClick={() => { setTab(2) }}
                          >
                            Cinema
                          </Link>
                          <Link
                            className="navbar-acc-menu-link"
                            onClick={() => {
                              setIsOpen3(true), SetsignButn(1), SetboldButn(1);
                            }}>
                            {/* onClick={() =>{setIsOpen3(true),SetsignButn(1),SetboldButn(1)}}> */}
                            Login
                          </Link>
                          {login === "true" ? (
                            <button
                              style={{ textAlign: "start" }}
                              onClick={logout}>
                              Logout
                            </button>
                          ) : null}
                        </>
                      ) : (
                        <>
                          {/* <Link
                            className="navbar-acc-menu-link"
                            onClick={() => setTab(2)}>
                            Account Setting
                          </Link> */}
                          {/* <Link className="navbar-acc-menu-link" onClick={() => setTab()}>Track Consumer Data</Link> */}
                          {/* <Link className="navbar-acc-menu-link" style={{ fontSize: "16px" }}>
                            Track Consumer Data
                          </Link> */}
                          <Link className="navbar-acc-menu-link" style={{ fontSize: "16px" }}>Help</Link>
                          {/* {is_login === true ? (<><Link onClick={logout}>Logout</Link></>) : (<></>)} */}
                          {login === "true" ? (
                            <button
                              style={{ textAlign: "start" }}
                              onClick={logout}>
                              Logout
                            </button>
                          ) : null}
                        </>
                      )}
                      {/* <Link
                                                className="navbar-acc-menu-link"
                                                onClick={() => setRegisterCustomerOpen(true)}
                                            >
                                                Sign Up
                                            </Link> */}
                    </div>
                  </>
                ) : null}
                {login === "true" && role == 2 ? (
                  <div style={{ position: "relative" }}>
                    <Link to="">
                      <img src={images.cart_icon} className="cart-icon-img" />
                    </Link>
                    <div className="cart-digit-main">0</div>
                  </div>
                ) : null}
              </div>

              {login == "true" && getrole == 2 ? (
                <div className="mall_nav_cart_digit_main_wrapp" onClick={() => setTab(22)} style={{ cursor: "pointer" }}>
                  <img src={images.cart_black} alt="cart_black" />
                  <div className="mall_nav_cart_digit_wrapp">
                    <span style={{
                      borderRadios: "18px", fontWeight: "600",
                      fontSize: "10px",
                      position: "absolute",
                      top: "3px",
                      right: "6px",
                    }}>{get_mall_cart_data_count ? get_mall_cart_data_count : "0"}</span>
                  </div>
                </div>
              ) : <></>}


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
            {login == "true" && getrole == 2 ? (
                <div className="mall_nav_cart_digit_main_wrapp" onClick={() => {setTab(22);setSidebarOpen(!getsidebarOpen);}} style={{ cursor: "pointer",alignSelf:"flex-end",marginRight:"15px" }}>
                  <img src={images.cart_black} alt="cart_black" />
                  <div className="mall_nav_cart_digit_wrapp">
                    <span style={{
                      borderRadios: "18px", fontWeight: "600",
                      fontSize: "10px",
                      position: "absolute",
                      top: "3px",
                      right: "6px",
                    }}>{get_mall_cart_data_count ? get_mall_cart_data_count : "0"}</span>
                  </div>
                </div>
              ) : <></>}
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
              <Link to="/retailer">Brand Registration</Link>
              <Link to="/customer">Customer Registraion</Link>
              <Link to="/CinemaPage">Cinema Registraion</Link>

              {login === "true" || getrole === 2 ? (
                <></>
              ) : (
                <Link
                  onClick={() => {
                    setIsOpen3(true);
                    setSidebarOpen(!getsidebarOpen);
                  }}>
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
                <>
                  {login === "true" && getrole == 2 ? (
                    <div className="accunt_sec_wrapp">
                      <Link
                        onClick={() => {
                          setTab(1);
                          setSidebarOpen(!getsidebarOpen);
                        }}>
                        My Profile
                      </Link>
                      <Link
                        onClick={() => {
                          setTab(2);
                          setSidebarOpen(!getsidebarOpen);
                        }}>
                        Acccount Setting
                      </Link>
                      <Link
                        onClick={() => {
                          setTab(3);
                          setSidebarOpen(!getsidebarOpen);
                        }}>
                        Brands
                      </Link>
                      <Link
                        onClick={() => {
                          setTab(4);
                          setSidebarOpen(!getsidebarOpen);
                        }}>
                        Eateries
                      </Link>
                      {/* <Link
                        onClick={() => {
                          setTab(17);
                          setSidebarOpen(!getsidebarOpen);
                        }}>
                        Movies
                      </Link> */}
                      <Link
                        onClick={() => {
                          setTab(5);
                          setSidebarOpen(!getsidebarOpen);
                        }}>
                        Events
                      </Link>
                      <Link
                        onClick={() => {
                          setTab(6);
                          setSidebarOpen(!getsidebarOpen);
                        }}>
                        Facilities
                      </Link>
                      <Link
                        onClick={() => {
                          setTab(7);
                          setSidebarOpen(!getsidebarOpen);
                        }}>
                        Contact Details
                      </Link>
                      <Link
                        onClick={() => {
                          setTab(22);
                          setSidebarOpen(!getsidebarOpen);
                        }}>
                        Cart
                      </Link>
                      <Link
                        onClick={() => {
                          setTab(24);
                          setSidebarOpen(!getsidebarOpen);
                        }}>
                        Checkout
                      </Link>
                      <Link
                        onClick={() => {
                          setTab(27);
                          setSidebarOpen(!getsidebarOpen);
                        }}>
                        FAQ
                      </Link>

                      {/* <Link onClick={() => setTab(8)}></Link> */}

                      {/* <Link onClick={() => setRegisterCustomerOpen(true)}>Sign Up</Link> */}
                      {login === false || login === null ? (
                        <Link
                          onClick={() => {
                            setIsOpen(true);
                            setSidebarOpen(!getsidebarOpen);
                          }}>
                          Sign Up
                        </Link>
                      ) : null}
                      {login === "true" ? (
                        <Link onClick={logout}>Logout</Link>
                      ) : (
                        <></>
                      )}
                      <Link>Help</Link>

                      {/* <Link> - Events</Link>
                  <Link> - Facilities</Link>
                  <Link> Contact Details</Link> */}
                    </div>
                  ) : (
                    <>
                      {login === "true" ? (
                        <Link onClick={logout}>Logout</Link>
                      ) : (
                        <></>
                      )}
                      <Link>Help</Link>
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </nav>



      {/* Brand Register Start */}
      <ReactModal
        isOpen={registerModalIsOpenBrand}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModalBrand}
        style={customStyles}>
        <div className="home_model_4wrapp">
          <button
            className="signup_modal_close"
            onClick={() => {
              setRegisterModalIsOpenBrand(false);
            }}>
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
              login
            </span>
          </p>
        </div>
      </ReactModal>
      {/* Brand Register Modal End */}

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


      {/* Login /Register modal start active */}

      {/* Register modal start */}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        style={customStyles}>
        <div className="model_sizing">
          <div style={{ backgroundColor: "var(--color-bg)" }}>
            <div style={{ height: "25px" }}>
              <button
                className="signup_modal_close"
                style={{ right: "7px", top: "9px" }}
                onClick={() => {
                  setIsOpen(false);
                }}>
                <span style={{ fontSize: "16px" }}></span>
                <IoClose />
              </button>
            </div>
            <div className="tab_btn_main" style={{height:"0px"}}>
            {/* {signButn == 1 ? <button
                onClick={() => {
                  SetregButn(1);
                  SetboldButn(1);
                }}
                style={{
                  backgroundColor: regButn == 1 ? "white" : "#dad9d8",
                  fontWeight: boldButn == 1 ? "600" : "200",
                }}
                className="tab_btn_styling">
                Mall Login / Sign Up
              </button> : null} */}
              
              {signButn == 1 ? null : 
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
                Brand Login / Sign Up
              </button>}
              
              {signButn == 1 ? null :  
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
                Consumer Login / Sign Up
              </button>}
             
             {signButn == 1 ? null :<button
                onClick={() => {
                  //  setCustLoginModalIsOpen3(true);
                  SetregButn(4);
                  SetboldButn(4);
                  // regButn(3);
                }}
                style={{
                  backgroundColor: regButn == 4 ? "white" : "#dad9d8",
                  fontWeight: boldButn == 4 ? "600" : "200",
                }}
                className="tab_btn_styling">
                Cinema Login / Sign Up
              </button> }
              
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
              <h3 className="f-b900 fs-22 mb_16 signup_headign">
                Mall Registration to In-store 
              </h3>
              <div className="sign_input_wrapp">
                <label htmlFor="mall">Mall Name<span className="star_require">*</span></label>
                                <div className="select-wrapper" style={{width:"100%"}}>

                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    SetMall(e.target.value);
                    setAddMallName("");
                    setRegion("");
                    console.log(e.target.value);
                  }}>
                  <option selected  value="">
                  select Mall{" "}
                  </option>
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
              </div>

              <div className="sign_input_wrapp">
                <label htmlFor="mall">Add New Mall</label>
                <input
                  type="text"
                  disabled={getmall ? true : false}
                  value={getaddmallname}
                  onChange={(e) => setAddMallName(e.target.value)}
                  name=""
                  id=""
                />
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="email">Select Your Region<span className="star_require">*</span></label>
                <div className="select-wrapper" style={{width:"100%"}}>

                <select
                                disabled={getmall ? true : false}

                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    setRegion(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="" selected disabled>
                    {/* Select Region */}
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
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="mall">Company Registration Number<span className="star_require">*</span></label>
                <input
                  type="text"
                  value={getcompanyregnumber}
                  onChange={(e) => setCompanyRegNumber(e.target.value)}
                  name=""
                  id=""
                />
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="mall">VAT Number<span className="star_require">*</span></label>
                <input
                  type="text"
                  value={getvat_no}
                  onChange={(e) => setvat_no(e.target.value)}
                  name=""
                  id=""
                />
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="mall">ERF Number<span className="star_require">*</span></label>
                <input
                  type="text"
                  value={getearh_no}
                  onChange={(e) => setearh_no(e.target.value)}
                  name=""
                  id=""
                />
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="first-name">First Name<span className="star_require">*</span></label>
                <input
                  type="text"
                  value={getfirstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  name=""
                  id=""
                />
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="last-name">Last Name<span className="star_require">*</span></label>
                <input
                  type="text"
                  value={getlastname}
                  onChange={(e) => setLastname(e.target.value)}
                  name=""
                  id=""
                />
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="email">Email Address<span className="star_require">*</span></label>
                <input
                  type="email"
                  onChange={(e) => onHandleEmailChange(e)}
                  name=""
                  id=""
                />
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="password">Password<span className="star_require">*</span></label>
                <input
                  type="password"
                  value={getpassword}
                  onChange={(e) => setPassword(e.target.value)}
                  name=""
                  id=""
                />
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="password">Latitude<span className="star_require">*</span></label>
                <input disabled
                  type=""
                  value={position.latitude}
                  // onChange={(e) => setPassword(e.target.value)}
                  name=""
                  id=""
                />
              </div>
              <div className="sign_input_wrapp">
                <label htmlFor="password">Longitude<span className="star_require">*</span></label>
                <input disabled
                  type=""
                  value={position.longitude}
                  // onChange={(e) => setPassword(e.target.value)}
                  name=""
                  id=""
                />
              </div>

              <div className="sign_input_wrapp">
                <label htmlFor="password">Company Registration Document<span className="star_require">*</span></label>
                <button className="btn btn-gray" {...getRootlogoProps()}>Upload
                  <input
                    {...getInputlogoProps()}
                    accept="image/jpeg, image/jpg, image/png, image/eps"
                  />
                </button>
              </div>

              <div className="sign_input_wrapp">
                <label htmlFor="password">VAT Registration Document<span className="star_require">*</span></label>
                <button className="btn btn-gray" {...getRootMapProps()}>Upload
                  <input
                    {...getInputMapProps()}
                    accept="image/jpeg, image/jpg, image/png, image/eps"
                  />
                </button>
              </div>

              <span style={{fontSize:"14px",color:"#bbb",alignSelf:"flex-start",marginBottom:"0.7rem"}}>*Required Fields including all document uploads.</span>


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
                className="btn btn-black mb_16"
                disabled={isAcceptTerm === 1 ? false : true}
                onClick={() => SigninMall()}>
                Register Your Mall
              </button>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  alignSelf:"flex-end",
                }}>
                 <div className="signup_model_forgate">
                 Already have an account?
                </div>
              </p>
              {/* <p className="fs-des" style={{ paddingBottom: "20px" }}>
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
              </p> */}
              <div style={{paddingBottom:"1rem", width: "100%",}}>
              <button
                className="btn btn-orange mb_16"  
                style={{marginBottom:"1rem"}}
                onClick={() => {
                    mallLoginModalOpen();
                    SetsignButn(1);
                  }}>
                Sign In
              </button>
              </div>
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
              <h3 className="f-b900 fs-22 mb_16 signup_headign">
                Register to In-store
              </h3>

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
                Register Your Brand
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
              <div className="signup_terms_wrapp mb_16" >
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
              <div className="signup_terms_wrapp mb_16" style={{ marginTop: "0rem" }}>
                <input
                  type="checkbox"
                  value={isAcceptTerm2}
                  onChange={handleTermChange2}
                  checked={isAcceptTerm2}
                />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Terms and Conditions</a> &{" "}
                  <a className="signup_terms_link">Privacy Policy</a>
                </p>
              </div>
              <button
                className="btn btn-black mb_16"
                disabled={isAcceptTerm ? false : true}
                onClick={() => SigninCustomer()}>
                Sign Up
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
                    // SigninCustomerFacebook(data, "4");
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
                    // SigninCustomerGoogle(data.email, "4", data);
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
                  className="btn btn-orange"
                  style={{ marginBottom: "20px" }}>
                  Sign in
                </button>
              </div>
            </div>
          ) : regButn == 4 ? (
            <div className="home_model_4wrapp">
              <button className="f-b900 fs-22 mb_16 signup_headign">
                Cinema Registration to In-store{" "}
              </button>
              <div className="radio-btn-flex radiobtnflex_homenav sign_input_wrapp_padding_less">


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
                    for="specifyColor"
                  >
                    Group Retailer
                  </label>
                </div>
              </div>
              <div className="sign_input_wrapp sign_input_wrapp_padding_less">
                <label htmlFor="mall">Mall Name</label>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    setmallmasterid(e.target.value);
                    getCinemaNameApi(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  {getmallarray2 &&
                    getmallarray2.map((item, index) => {
                      return (
                        <>
                          <option value={item.id} key={index}>
                            {item.name} {item.id} &nbsp;&nbsp;&nbsp;{" "}
                            {item.from_date} &nbsp;&nbsp;&nbsp; {item.to_date}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>


              {/* <div className="sign_input_wrapp sign_input_wrapp_padding_less">
                <label htmlFor="mall">Cinema Name</label>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    setmallmasterid(e.target.value);
                    getCinemaNameApi(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  {getmallarray &&
                    getmallarray.map((item, index) => {
                      return (
                        <>
                          <option selected disabled value=""></option>
                          <option value={item.id} key={index}>
                            {item.name} {item.id} &nbsp;&nbsp;&nbsp;{" "}
                            {item.from_date} &nbsp;&nbsp;&nbsp; {item.to_date}
                          </option>
                        </>
                      );
                    })}
                </select>


              </div> */}
              <div className="sign_input_wrapp sign_input_wrapp_padding_less">
                <label htmlFor="mall">Cinema Name</label>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    setRetailertype(e.target.value);
                    getBrand(e.target.value);
                    console.log(e.target.value);
                  }}>
                  <option defaultValue value=""></option>
                  {cinema_mall_data &&
                    cinema_mall_data.map((item, index) => {
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

              <div className="sign_input_wrapp sign_input_wrapp_padding_less">
                <label htmlFor="first-name">Brands (if applicable)</label>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    setMallname(e.target.value);
                    console.log(e.target.value);
                  }}
                >
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
              <div className="signup_terms_wrapp">
                <input
                  type="checkbox"
                  value={isAcceptTerm}
                  onChange={handleTermChange}
                  checked={isAcceptTerm}
                />
                <p className="fs-des">
                  I have read and agree to the
                  <a className="signup_terms_link">Privacy Policy</a>
                </p>
              </div>
              <div className="signup_terms_wrapp mb_16">
                <input
                  type="checkbox"
                  value={isAcceptTerm}
                  onChange={handleTermChange}
                  checked={isAcceptTerm}
                />

                <p className="fs-des">
                  I have read and agree to the
                  <a className="signup_terms_link">Terms and Conditions</a>
                </p>
              </div>
              <button
                className="btn btn-orange mb_16"
                disabled={isAcceptTerm ? false : true}
                onClick={() => SigninCinema()}
              >
                Register Your Cinema
              </button>
              <p
                style={{
                  color: "black",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                OR
              </p>
              <p className="fs-des" style={{ paddingBottom: "20px" }}>
                If you are already registered, then{" "}
                <span
                  onClick={() => {
                    // brandLoginModalOpen();
                    setIsOpen3(true);
                    setIsOpen(false);
                    SetsignButn(4);
                  }}
                  className="signup_terms_link"
                >
                  login here
                </span>
              </p>
            </div>
          ) : null}
        </div>
      </ReactModal>
      {/* Register modal end */}

      {/* Login modal start*/}
      <ReactModal
        isOpen={modalIsOpen3}
        onRequestClose={closeModal3}
        style={customStyles}>
        <div className="model_sizing">
          <div style={{ backgroundColor: "var(--color-bg)" }}>
            <div style={{ height: "25px" }}>
              <button
                className="signup_modal_close"
                style={{ right: "7px", top: "9px" }}
                onClick={closeModal3}>
                <span style={{ fontSize: "16px" }}></span>
                <IoClose />
              </button>
            </div>
            <div className="tab_btn_main" style={{height:"0px"}}>
            {signButn == 1 ?  <button
                onClick={() => {
                  SetsignButn(1);
                  SetboldButn(1);
                }}
                style={{
                  backgroundColor: signButn == 1 ? "white" : "#dad9d8",
                  fontWeight: boldButn == 1 ? "600" : "200",
                }}
                className="tab_btn_styling">
                Mall Login / Sign Up
              </button> : null
           }
              
              {signButn == 1 ? null : 
              <button
                onClick={() => {
                  SetsignButn(2);
                  SetboldButn(2);
                }}
                style={{
                  backgroundColor: signButn == 2 ? "white" : "#dad9d8",
                  fontWeight: boldButn == 2 ? "600" : "200",
                }}
                className="tab_btn_styling">
                Brand Login / Sign Up
              </button>}
              
              {signButn == 1 ? null :  <button
                onClick={() => {
                  SetsignButn(3);
                  SetboldButn(3);
                }}
                style={{
                  backgroundColor: signButn == 3 ? "white" : "#dad9d8",
                  fontWeight: boldButn == 3 ? "600" : "200",
                }}
                className="tab_btn_styling">
                Consumer Login / Sign Up
              </button>}
             
             {signButn == 1 ? null :   <button
                onClick={() => {
                  SetsignButn(4);
                  SetboldButn(4);
                }}
                style={{
                  backgroundColor: signButn == 4 ? "white" : "#dad9d8",
                  fontWeight: boldButn == 4 ? "600" : "200",
                }}
                className="tab_btn_styling">
                Cinema Login / Sign Up
              </button>}
            
            </div>
          </div>
          {signButn == 1 ? (
            <div
              className="home_login_model_1sec_inner"
              style={{ maxWidth: "none" }}>
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
                className="btn btn-black mb_16"
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
                <LoginSocialFacebook
                  appId="1377758369684897"
                  fieldsProfile={
                    "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                  }
                  onLoginStart={(e) => console.log(e)}
                  onLogoutSuccess={(e) => console.log(e)}
                  redirect_uri={Urls.base_url}
                  onResolve={({ data }: IResolveParams) => {
                    console.log(data);
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

                <LoginSocialGoogle
                  client_id="826718979042-bhij4jt5s6p85n55hbuhh0v40i4b3ng4.apps.googleusercontent.com"
                  redirect_uri={Urls.base_url}
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  onResolve={({ data }: IResolveParams) => {
                    setProfile(data);
                    console.log("gdata", data);
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
                </LoginSocialGoogle>

                <button
                    className="mb_8 modal-social-btn "
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      color: "var(--color-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}>
                    <FaApple
                      color="var(--color-gray)"
                      style={{
                        marginRight: "8px",
                        fontSize: "18px",
                        marginBottom: "-2px",
                      }}
                    />
                    Continue with Apple
                  </button>

              </div>
              {/* <button
                className="h6 mb_10 mt_10"
                style={{ alignSelf: "center" }}>
                Not Registered Yet?
              </button> */}
              <h3 style={{marginTop:"1rem"}}
                onClick={() => {
                  setIsOpen3(false);
                  setIsOpen(true);
                  SetregButn(1);
                }}
                className="btn btn-orange">
                Register Your Mall
              </h3>
            </div>
          ) : signButn == 2 ? (
            <div
              className="home_login_model_1sec_inner"
              style={{ maxWidth: "none" }}>
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
                className="btn btn-black mb_16"
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
                <LoginSocialFacebook
                  appId="1377758369684897"
                  fieldsProfile={
                    "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                  }
                  onLoginStart={(e) => console.log(e)}
                  onLogoutSuccess={(e) => console.log(e)}
                  redirect_uri={Urls.base_url}
                  onResolve={({ data }: IResolveParams) => {
                    console.log(data);
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

                <LoginSocialGoogle
                  client_id="826718979042-bhij4jt5s6p85n55hbuhh0v40i4b3ng4.apps.googleusercontent.com"
                  redirect_uri={Urls.base_url}
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  onResolve={({ data }: IResolveParams) => {
                    setProfile(data);
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
                </LoginSocialGoogle>

                <button
                    className="mb_8 modal-social-btn "
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      color: "var(--color-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}>
                    <FaApple
                      color="var(--color-gray)"
                      style={{
                        marginRight: "8px",
                        fontSize: "18px",
                        marginBottom: "-2px",
                      }}
                    />
                    Continue with Apple
                  </button>

              </div>
              <button
                className="h6 mb_10 mt_10"
                style={{ alignSelf: "center" }}>
                Not Registered Yet?
              </button>
              <button
                onClick={() => {
                  setIsOpen3(false);
                  setIsOpen(true);
                  SetregButn(2);
                }}
                className="btn btn-orange">
                Register Your Brand
              </button>
            </div>
          ) : signButn == 3 ? (
            <div
              className="home_login_model_1sec_inner"
              style={{ maxWidth: "none" }}>
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
                className="btn btn-black mb_16"
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
                <LoginSocialFacebook
                  appId="1377758369684897"
                  fieldsProfile={
                    "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                  }
                  onLoginStart={(e) => console.log(e)}
                  onLogoutSuccess={(e) => console.log(e)}
                  redirect_uri={Urls.base_url}
                  onResolve={({ data }: IResolveParams) => {
                    console.log(data);
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

                <LoginSocialGoogle
                  client_id="826718979042-bhij4jt5s6p85n55hbuhh0v40i4b3ng4.apps.googleusercontent.com"
                  onLoginStart={onLoginStart}
                  redirect_uri={Urls.base_url}
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  onResolve={({ data }: IResolveParams) => {
                    setProfile(data);
                    console.log("gdata", data);
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
                </LoginSocialGoogle>

                <button
                    className="mb_8 modal-social-btn "
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      color: "var(--color-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}>
                    <FaApple
                      color="var(--color-gray)"
                      style={{
                        marginRight: "8px",
                        fontSize: "18px",
                        marginBottom: "-2px",
                      }}
                    />
                    Continue with Apple
                  </button>

              </div>
              <button
                className="h6 mb_10 mt_10"
                style={{ alignSelf: "center" }}>
                Not Registered Yet?
              </button>
              <button
                onClick={() => {
                  setIsOpen3(false);
                  setIsOpen(true);
                  SetregButn(3);
                }}
                className="btn btn-orange">
                Sign up
              </button>
            </div>
          ) : signButn == 4 ? (
            <div
              className="home_login_model_1sec_inner"
              style={{ maxWidth: "none" }}
            >
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
                  className="input_box-cus-pass"
                >
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
                      onClick={togglePasswordVisibility}
                    >
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
                className="btn btn-black mb_16"
                onClick={() => LoginCinema()}
                disabled={isAcceptTerm ? false : true}
              >
                Login
              </button>
              <p
                style={{
                  alignSelf: "center",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                or
              </p>

              <div style={{ width: "100%" }}>
                <LoginSocialFacebook
                  appId="1377758369684897"
                  fieldsProfile={
                    "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                  }
                  onLoginStart={(e) => console.log(e)}
                  onLogoutSuccess={(e) => console.log(e)}
                  redirect_uri={Urls.base_url}
                  onResolve={({ data }: IResolveParams) => {
                    console.log(data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <button
                    className="mb_8 modal-social-btn "
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      color: "var(--color-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
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

                <LoginSocialGoogle
                  client_id="826718979042-bhij4jt5s6p85n55hbuhh0v40i4b3ng4.apps.googleusercontent.com"
                  onLoginStart={onLoginStart}
                  redirect_uri={Urls.base_url}
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  onResolve={({ data }: IResolveParams) => {
                    setProfile(data);
                    console.log("gdata", data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <button
                    className="mb_8 modal-social-btn "
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      color: "var(--color-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
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
                </LoginSocialGoogle>

                <button
                    className="mb_8 modal-social-btn "
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      color: "var(--color-gray)",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}>
                    <FaApple
                      color="var(--color-gray)"
                      style={{
                        marginRight: "8px",
                        fontSize: "18px",
                        marginBottom: "-2px",
                      }}
                    />
                    Continue with Apple
                  </button>

              </div>
              <button
                className="h6 mb_10 mt_10"
                style={{ alignSelf: "center" }}
              >
                Not Registered Yet?
              </button>
              <button
                onClick={() => {
                  setIsOpen3(false);
                  setIsOpen(true);
                  SetregButn(4);
                }}
                className="btn btn-orange"
              >
                Register your Cinema{" "}
              </button>
            </div>
          ) : null}
        </div>
      </ReactModal>
      {/* Login modal end */}

      {/* Login /Register modal end active */}

        {/* Afeter Sign up Modal start */}
        <ReactModal
        isOpen={getModal}
        onRequestClose={closeModal}
        style={customStyles1}
      >
        <div className="modal_thankyou">
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "1rem",
            }}
          >
            <RxCross2
              onClick={() => {
                closeModal();
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              padding: "1rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                maxWidth: "400px",
                textAlign: "center",
              }}
            >
              <h2>Thank you for registering your Mall with In-store.</h2>
            </div>
            <div style={{ maxWidth: "250px", textAlign: "center" }}>
              <h2>Please allow up to 48 hours for registration approval...</h2>
            </div>
            <div style={{ width: "100%" }}>
              <button
                className="btn btn-orange"
                onClick={() => {
                  closeModal();
                }}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
      {/* Afeter Sign up Modal end */}
    </>
  );
};

export default MallNavbar;
