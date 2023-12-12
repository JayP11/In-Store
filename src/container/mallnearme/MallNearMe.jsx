import React, { useEffect, useState } from "react";
import "./MallNearMe.css";
import { MallsNearMeCard } from "../../components";
import { BsChevronDown } from "react-icons/bs";
import { ACCEPT_HEADER, get_mall_customer } from "../../utils/Constant";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import ReactModal from "react-modal";
const MallNearMe = ({
  mallList,
  page,
  setPage,
  setTab,
  totalPages,
  loading,
  SetSingalMallData,
  getSearchMallList,
  getMallList,
  setMallList
}) => {




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
  //     fetch(get_mall_customer + `per_page=${perPage}&page=${page}`, {
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


  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [isAcceptTerm, setIsAcceptTerm] = useState(false);

  function closeModal3() {
    setIsOpen3(false);
  }

  const handleTermChange = (event) => {
    setIsAcceptTerm((current) => !current);
  };

  useEffect(() => {

  }, [])

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





  return (
    <>
      <div className="mall-near-me-main-wraapp">
        <div className="mall-near-me-sub-flex">
          <h3 className="h4">Explore malls near you</h3>
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
            />
            <HiOutlineSearch color="var(--color-orange)" size={18} />



          </div>
          <Link to="/mallnearme" className="view_more_btn" style={{ marginTop: "0px", marginBottom: "0px" }}>
            New Design
          </Link>
          <buttton onClick={() => setIsOpen3(true)} className="view_more_btn" style={{ marginTop: "0px", marginBottom: "0px" }}>
            Rating Modal Open
          </buttton>
          {/* <button onClick={} className="view_more_btn" style={{ marginTop: "0px", marginBottom: "0px" }}>
            New Design
          </button> */}
        </div>
        <>
          <div className="mallnearme-card-main-wrapp">
            {/* <p>{mallList.length}</p> */}
            {mallList.map((x, i) => {
              console.log("mall iist", mallList);
              return (
                <MallsNearMeCard
                  // setIsOpen3={setIsOpen3}
                  setTab={setTab}
                  SetSingalMallData={SetSingalMallData}
                  item={x}
                  key={i}
                />
              );
            })}
            {/* <MallsNearMeCard />
                    <MallsNearMeCard />
                    <MallsNearMeCard />
                    <MallsNearMeCard /> */}
          </div>
          {totalPages !== page && (
            <button className="view_more_btn" onClick={() => setPage(page + 1)}>
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
            <span
              style={{ fontSize: "16px" }}
              className="brand-lable-radio-btn-txt"
            >
              Cancel
            </span>{" "}
            <AiOutlineClose color="red" />
          </button>
          <div className="f-b900 fs-22 mb_16 signup_headign" style={{ marginTop: "40px" }}>How was the V&A Waterfront?</div>
          <p style={{ textAlign: "center", width: "100%" }}>We would really appreciate your feedback!</p>

          <div style={{ height: "1px", background: "#ddd", width: '100%', marginTop: "20px", marginBottom: "20px" }}></div>

          <div className="rating-star-box">
            <AiFillStar className="rating-star-icon" />
            <AiFillStar className="rating-star-icon" />
            <AiFillStar className="rating-star-icon" />
            <AiFillStar className="rating-star-icon" />
            <AiFillStar className="rating-star-iconn" />
          </div>
          <div className="sign_input_wrapp">

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
            disabled={isAcceptTerm ? false : true}
          >
            Submit
          </button>

        </div>
      </ReactModal>
    </>
  );
};

export default MallNearMe;
