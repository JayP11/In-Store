import React, { useEffect, useState } from "react";
import "./MallNearMeSing.css";
import { MallNearMeSingNavbar, MallsNearMeCard } from "../../components";
import { BsChevronDown } from "react-icons/bs";
import {
  ACCEPT_HEADER,
  get_location_popup,
  get_mall_customer,
  get_notification_url,
  location_customer,
} from "../../utils/Constant";
import { HiOutlineSearch } from "react-icons/hi";
import { CustomerNavbar } from "../../common";
import { useCustomerContext } from "../../context/customer_context";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import Notification from "../../utils/Notification";

import ReactModal from "react-modal";
import axios from "axios";
const MallNearMeSing = ({ setTab }) => {
  const [mallList, setMallList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getsingalmalldata, SetSingalMallData] = useState({});
  // const [gettab, setTab] = useState();
  const { getCustomer } = useCustomerContext();
  const perPage = 3;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [isAcceptTerm, setIsAcceptTerm] = useState(true);
  const [getrating, setRating] = useState();
  const [getPopupData, setPopupData] = useState();
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  const handleTermChange = (event) => {
    setIsAcceptTerm((current) => !current);
  };

  // useEffect(() => {
  //   // window.location.reload(true)
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       setPosition({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
  //     });
  //   } else {
  //     console.log("Geolocation is not available in your browser.");
  //   }
  // }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        function (error) {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.log("User denied the request for geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.log("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.log("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              console.log("An unknown error occurred.");
              break;
            default:
              console.log("An unspecified error occurred.");
          }
        }
      );
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);


  

    // Location Popup Api

    const getLocationPopupApi = async () => {
      console.log("dtttttr");
  
      const token = await JSON.parse(localStorage.getItem("is_token"));
      axios
        .get(get_location_popup, {
          headers: {
            Accept: ACCEPT_HEADER,
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          if (res.data.success == 1) {
            setPopupData(res.data.data)
          }
        })
        .catch((err) => {
          console.log("errr", err);
        });
    };
  useEffect(() => {
    // getLocationcheck();
    getLocationPopupApi();
    setIsOpen3(true);

  }, []);

  const getLocationcheck = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    axios
      .get(get_notification_url, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.data.success == 1) {
          if (res.data.data.location == 0) {
            setIsOpen3(true);
          } else {
            setIsOpen3(false);
          }
        }
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };



  const Locationapi = async (id) => {
   
    const token = await JSON.parse(localStorage.getItem("is_token"));
    console.log("lat,long",position.latitude, position.longitude);

    const formdata = new FormData();
    await formdata.append("lat", position.latitude);
    await formdata.append("log", position.longitude);
    await formdata.append("location", 1);
    axios
      .post(location_customer, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ressss", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          Notification("success", "Success!", "Update Successfully!");

          getMallList1();
          closeModal3();
        }
      }).catch(err => {
        console.log('err', err);
      })
  };

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
  //   const perPage = 3;
  //   const [totalPages, setTotalPages] = useState(1);
  //   const [page, setPage] = useState(1);

  //   const [mallList, setMallList] = useState([]);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     getMallList();
  //   }, [page]);

  //   const getMallList = async () => {
  //     const token = await JSON.parse(localStorage.getItem("is_token"));

  //     const formdata = new FormData();
  //     await formdata.append("search", "");

  //     setLoading(true);
  //     fetch(get_mall_customer + per_page=${perPage}&page=${page}, {
  //       method: "POST",
  //       body: formdata,
  //       headers: {
  //         Accept: ACCEPT_HEADER,
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log("ffff", res.data.last_page);
  //         setTotalPages(res.data.last_page);
  //         setMallList([...mallList, ...res.data.data]);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log("err", err);
  //       });
  //   };

  function closeModal3() {
    setIsOpen3(false);
  }

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

  const getMallList1 = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));

    const formdata = new FormData();
    await formdata.append("location", 1);

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
        console.log("parth mall",res.data);
        setTotalPages(res.data.last_page);
        setMallList([...mallList, ...res.data.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // search mall list api

  const getSearchMallList = async (value) => {
    console.log("value", value);

    const token = await JSON.parse(localStorage.getItem("is_token"));

    const formdata = new FormData();
    await formdata.append("search", value);

    // setLoading(true);
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

  useEffect(() => {
    getMallList();
    getCustomer();
  }, [page]);

  useEffect(() => {
    console.log("all mall are", mallList);
  }, [mallList]);

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
        }}
      >
        <div className="loader"></div>
      </div>
    ) : (
    <>
      <MallNearMeSingNavbar setTab={setTab} />
      
        <div className="mall-near-me-main-wraapp">
          <div className="mall-near-me-sub-flex">
            <h3
              className="h4 mallnearmesing-main-heading"
              style={{ fontSize: "40px", fontWeight: "700" }}
            >
              Explore malls near you
            </h3>
            <div className="mall_near_brand_searchbar">
              <input
                type="text"
                className="mall-near-me-searchbox"
                placeholder="Search"
                onChange={(e) => {
                  e.target.value.length > 0
                    ? (getSearchMallList(e.target.value),
                      setMallList([]),
                      setPage(1))
                    : (setMallList([]), setPage(1), getMallList());
                }}
                // onChange={(e) => {
                //     console.log("==>", e.target.value);
                // }}
              />
              <HiOutlineSearch color="var(--color-orange)" size={18} />
            </div>
          </div>
          <>
            <div className="mallnearme-card-main-wrapp mallnearme-card-main-wrapp-mx-width mallnearme-card-main-wrapp-resp-gap">
              {/* <p>{mallList.length}</p> */}
              {mallList.map((x, i) => {
                return (
                  <MallsNearMeCard
                    setTab={setTab}
                    SetSingalMallData={SetSingalMallData}
                    item={x}
                    key={i}
                    getMallList={getMallList}
                  />
                );
              })}
              {/* <MallsNearMeCard />
                    <MallsNearMeCard />
                    <MallsNearMeCard />
                    <MallsNearMeCard /> */}
            </div>
            {totalPages !== page && (
              <button
                className="view_more_btn"
                onClick={() => setPage(page + 1)}
              >
                {loading ? "Loading..." : "Load More"}
                <BsChevronDown />
              </button>
            )}
          </>
        </div>
    
              
      <ReactModal
        isOpen={modalIsOpen3}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal3}
        style={customStyles}
      >
        <div className="home_login_model_1sec_inner">
          <button className="signup_modal_close" onClick={closeModal3}>
            {/* <span
              style={{ fontSize: "16px" }}
              className="brand-lable-radio-btn-txt"
            >
              Cancel
            </span>{" "} */}
            <AiOutlineClose color="black" />
          </button>
          <div
            className="f-b900 fs-22 mb_16 signup_headign"
            style={{ marginTop: "40px" }}
          >
           {getPopupData ? getPopupData.title : ""}
          </div>
          <p style={{ textAlign: "center", width: "100%" }}>
            {getPopupData ? getPopupData.details : ""}
          </p>

          {/* <div style={{ height: "1px", background: "#ddd", width: '100%', marginTop: "20px", marginBottom: "20px" }}></div> */}

          {/* <div className="rating-star-box">
            <AiFillStar className="rating-star-icon" key={index}
              onClick={() => handleRatingClick(index + 1)}
              color={index + 1 <= rating ? '#ffc107' : '#e4e5e9'} />
            <AiFillStar className="rating-star-icon" />
            <AiFillStar className="rating-star-icon" />
            <AiFillStar className="rating-star-icon" />
            <AiFillStar className="rating-star-iconn" />
          </div> */}

          <button
            className="btn btn-orange mb_16"
            style={{ marginTop: "2rem" }}
            onClick={() => {
              setMallList([]),
            setPage(1),
              Locationapi()}}
            disabled={isAcceptTerm ? false : true}
          >
            {getPopupData ? getPopupData.confirm_button : ""}
          </button>
          <button
            className="btn  mb_16"
            style={{ marginTop: "0rem", fontWeight: "400" }}
            onClick={() => closeModal3()}
            disabled={isAcceptTerm ? false : true}
          >
            {getPopupData ? getPopupData.cancel_button : ""}
          </button>
        </div>
      </ReactModal>

      
    </>)}
    </>
  );
};

export default MallNearMeSing;