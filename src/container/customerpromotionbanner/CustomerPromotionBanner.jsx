import React, { useEffect, useState } from "react";
import "./CustomerPromotionBanner.css";
import {
  CustomerPromotionalSingCarg,
  MallHero,
  PromotionHero,
} from "../../components";
import images from "../../constants/images";
import {
  ACCEPT_HEADER,
  get_mall_customer_leaderboard,
  get_mall_customer_promotional,
  get_notification_url,
  update_notification,
} from "../../utils/Constant";
import { BsChevronDown } from "react-icons/bs";
import { CustomerNavbar } from "../../common";
import { useCustomerContext } from "../../context/customer_context";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";

import ReactModal from "react-modal";
import Rating from "react-rating";
import axios from "axios";
import Notification from "../../utils/Notification";
import { useAuthContext } from "../../context/auth_context";

const CustomerPromotionBanner = ({
  getsingalmalldata,
  setTab,
  SetProId,
  SetBrandId,
  navbardata,
}) => {
  useEffect(() => {
    LederboadnApi();
  }, []);

  function closeModal3() {
    setIsOpen3(false);
  }

  const perPage = 3;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const [proList, setProList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAcceptTerm, setIsAcceptTerm] = useState(true);
  const [getrating, setRating] = useState();
  const { logindata } = useAuthContext();

  useEffect(() => {
    PromationApi();
    console.log("getsingalmalldata",getsingalmalldata);
  }, [page]);

  const [getdprodata, SetProdata] = useState([]);
  const [modalIsOpen3, setIsOpen3] = useState(false);

  const LederboadnApi = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    const formdata = new FormData();
    // await formdata.append("search", "");
    await formdata.append("mall_id", getsingalmalldata.id);

    fetch(get_mall_customer_leaderboard, {
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
        SetProdata(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
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

  const handleTermChange = (event) => {
    setIsAcceptTerm((current) => !current);
  };

  const PromationApi = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    const formdata = new FormData();
    // await formdata.append("search", "");
    await formdata.append("mall_id", getsingalmalldata.id);
    setLoading(true);
    fetch(get_mall_customer_promotional + `per_page=${perPage}&page=${page}`, {
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
        setProList([...proList, ...res.data.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getNotificationcheck();
  }, []);

  const getNotificationcheck = async () => {
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
          if (res.data.data.notification == 0) {
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

  const Notificationapi = async (id) => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    const formdata = new FormData();
    await formdata.append("customer_notification", 1);
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
      }).catch(err => {
        console.log('err', err);
      })
  };

  return (
    <>
      <div>
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
            <div className="" style={{width:"100%"}}>
              <PromotionHero getdprodata={getdprodata} />
            </div>
            <div className="mm_main_wrapp">
            {proList.length <=0 ? 
            <><p style={{color:"var(--color-black)",fontWeight:"600",fontSize:"22px"}}>There are currently no promotions available.
</p></> : <>
              <div className="cust-promotional-main-wrapp">
             
              {proList.map((x, i) => {
                  return (
                    <CustomerPromotionalSingCarg
                      x={x}
                      setTab={setTab}
                      SetProId={SetProId}
                      SetBrandId={SetBrandId}
                    />
                  );
                })}
            
            
              </div>
              </>}
              {totalPages !== page && (
                <button
                  className="view_more_btn"
                  onClick={() => setPage(page + 1)}
                >
                  {loading ? "Loading..." : "Load More"}
                  <BsChevronDown />
                </button>
              )}
            </div>
          </>
        )}
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
          {/* <div className="f-b900 fs-22 mb_16 signup_headign" style={{ marginTop: "40px" }}>How was the {item.name}?</div> */}
          <div
            className="f-b900 fs-22 mb_16 signup_headign"
            style={{
              marginTop: "40px",
              textAlign: "center",
              fontWeight: "700 !important",
            }}
          >
            In-store would like to send you notifications
          </div>
          <p style={{ textAlign: "center", width: "100%" }}>
            Notifications on the latest promotions from this mall may include
            alerts, sounds and icon badges. These can be configured in Settings.
          </p>

          {/* <div style={{ height: "1px", background: "#ddd", width: '100%', marginTop: "20px", marginBottom: "20px" }}></div> */}

          <div className="rating-star-box">
            {/* <AiFillStar className="rating-star-icon" key={index}
              onClick={() => handleRatingClick(index + 1)}
              color={index + 1 <= rating ? '#ffc107' : '#e4e5e9'} /> */}
            {/* <AiFillStar className="rating-star-icon" />
            <AiFillStar className="rating-star-icon" />
            <AiFillStar className="rating-star-icon" />
            <AiFillStar className="rating-star-iconn" /> */}
            {/* <Rating
              emptySymbol={<img src={images.graystar} className="icon" />}
              fullSymbol={<img src={images.orangestar} className="icon" />}
              onClick={(e) => {
                console.log('hhh', e);
                setRating(e)
              }}
            /> */}
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
            {/* <button className="signup_model_forgate">Forgot password?</button> */}
          </div>
          <button
            onClick={() => {
              // closeModal3();
              Notificationapi(1);
            }}
            className="btn btn-orange mb_16"
            // onClick={
            //   () =>
            //  addRating()
            //  }
            disabled={isAcceptTerm ? false : true}
          >
            Allow
          </button>
          <button
            className="btn mb_16"
            style={{ fontWeight: "400" }}
            onClick={() => Notificationapi(0)}
            disabled={isAcceptTerm ? false : true}
          >
            No, thanks
          </button>
        </div>
      </ReactModal>
    </>
  );
};

export default CustomerPromotionBanner;