import React, { useState } from "react";
import "./MallsNearMeCard.css";
import images from "../../constants/images";
import { IoLocationSharp } from "react-icons/io5";
import CustomerWelcomMall from "../../container/customerwelcomemall/CustomerWelcomMall";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { ACCEPT_HEADER, add_rating } from "../../utils/Constant";
import Rating from "react-rating";

const MallsNearMeCard = ({ setTab, item, SetSingalMallData, getMallList }) => {
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [isAcceptTerm, setIsAcceptTerm] = useState(true);
  const [getrating, setRating] = useState();



  function closeModal3() {
    setIsOpen3(false);
  }



  const handleTermChange = (event) => {
    setIsAcceptTerm((current) => !current);
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

  const addRating = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));


    const formdata = await new FormData();
    formdata.append("mall_id", item.id);
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
        setIsOpen3(false);
        // getMallList();
        window.location.reload(true);

       }
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  };


  const handleRatingClick = (value) => {
    setRating(value);
  }

  return (
    <>
      <div className="mallnearme-card-main">

        <div className="mallnearme-card-imgbox">
          <Link
            to={"/customerdashboard"}
            state={{
              item: item,
            }}
            onClick={() => {
              localStorage.setItem('malldata', JSON.stringify(item))
            }}
          >
            {/* <p className="mallnearme-card-txt">{item.name} </p> */}
            {/* <img
              src={
                item.banner_mall_path === null
                  ? images.mall_hero_banner
                  : item.banner_mall_path
              }
              className="mallnearme-card-img"
            /> */}

            <img
              src={
                item.shopping_center_thumbnail_mall_path === null
                  ? images.mall_hero_banner
                  : item.shopping_center_thumbnail_mall_path
              }
              className="mallnearme-card-img"
            />
            <img
              src={
                item.shopping_center_logo_mall_path === null
                  ? images.mall_hero_logo
                  : item.shopping_center_logo_mall_path
              }
              className="mallnearme-card-logo-img"
            />

          </Link>


          {/* <div className="mallnearme-card-rating-main" onClick={() => setIsOpen3(true)}>
            <p className="mallnearme-card-rating-digit">{item.avg_rating === null ? 1 : (item.avg_rating).toFixed(1)}</p>
            <p className="mallnearme-card-rating-txt">Rating</p>
          </div> */}
          <div className="mallnearme-card-inner-darkbox">
            <IoLocationSharp className="mallnearme-card-icon" />
            <p className="mallnearme-card-inner-darkbox-txt">3 km</p>
          </div>
        </div>

        <Link
          to={"/customerdashboard"}
          state={{
            item: item,
          }}
          onClick={() => {
            localStorage.setItem('malldata', JSON.stringify(item))
          }}
        >
          <p className="mallnearme-card-txt">{item.name} </p>
        </Link>
      </div>

      <ReactModal
        isOpen={modalIsOpen3}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal3}
        style={customStyles}
      >
        <div className="home_login_model_1sec_inner home_login_model_1sec_inner_cus_rating" style={{padding:"2rem"}}>
          <button className="signup_modal_close" onClick={closeModal3}>
            {/* <span
              style={{ fontSize: "16px" }}
              className="brand-lable-radio-btn-txt"
            >
              Cancel
            </span>{" "} */}
            <AiOutlineClose color="black" />
          </button>
          <div className="f-b900 fs-22 mb_16 signup_headign" style={{ marginTop: "40px",fontSize:"23px",textAlign:"center" }}>How was the {item.name}?</div>
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
            disabled={isAcceptTerm ? false : true}
          >
            Submit
          </button>

        </div>
      </ReactModal>
    </>
  );
};

export default MallsNearMeCard;