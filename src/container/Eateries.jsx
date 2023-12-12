import React, { useEffect, useState } from "react";
import { BsArrowRight, BsChevronDown } from "react-icons/bs";
import { MallHero, StoreDCard, StoreECard } from "../components";
import images from "../constants/images";
import ReactModal from "react-modal";
import { GrClose } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";
import { useMallContext } from "../context/mall_context";
import { Link } from "react-router-dom";
import { ACCEPT_HEADER, get_eatery_mall_wise } from "../utils/Constant";
import axios from "axios";
import Notification from "../utils/Notification"


const StoresData = [
  {
    id: 1,
    img: images.et_logo1,
  },
  {
    id: 2,
    img: images.et_logo2,
  },
  {
    id: 3,
    img: images.et_logo3,
  },
  {
    id: 4,
    img: images.et_logo4,
  },
  {
    id: 5,
    img: images.et_logo5,
  },
  {
    id: 6,
    img: images.et_logo6,
  },
  {
    id: 7,
    img: images.et_logo7,
  },
  {
    id: 8,
    img: images.et_logo8,
  },
  {
    id: 9,
    img: images.et_logo9,
  },
  {
    id: 10,
    img: images.et_logo3,
  },
  {
    id: 11,
    img: images.et_logo11,
  },
  {
    id: 12,
    img: images.et_logo12,
  },
];

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

const Eateries = ({
  setTab,
  getsingleStoreData,
  setSingleStoreData,
  get_mall_auth_data,
  eaterypage,
  setEateryPage,
  eaterytotalPages,

  setStore_id,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [get_main_name, Set_Main_Name] = useState('')


  // const [getsingleStoreData, setSingleStoreData] = useState({});
  const { DeleteEateriesApi } = useMallContext();

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    console.log("123", getsingleStoreData);
    getEateryList();
    const name = localStorage.getItem("mallmainname")

    Set_Main_Name(name)
  }, []);

  const [eateryList, setEateryList] = useState([]);
  const [eateryloading, setEateryLoading] = useState(false);

  const getEateryList = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));

    setEateryLoading(true);

    axios
      .get(get_eatery_mall_wise, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(
          "get_eatery_mall_wise--->>",
          JSON.stringify(res.data, null, 2)
        );

        setEateryList(res.data.data);
        setEateryLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setEateryLoading(false);
      });
  };
  const DeleteMallEateriesData = async () => {
    {
      const formdata = await new FormData();
      await formdata.append("eatery_id", getsingleStoreData.id);

      console.log("-=-=-=->", formdata);
      const data = await DeleteEateriesApi(formdata);
      if (data) {
        if (data.success == 1) {
          console.log("mall-data", data);
          Notification("success", "Success!", "Eateries Deleted Successfully!");
          setIsOpen(false);

          getEateryList();
          setTab(4);
          // getStore();
        } else {
          null;
        }
      }
    }
  };

  return (
    <>
      {eateryloading === true ? (
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
          <div className="">
            <MallHero get_mall_auth_data={get_mall_auth_data} />
          </div>

          <div className="mm_main_wrapp">
            <div className="mall_name_wrapp">
              {/* <p className="mall_name_heading">{get_mall_auth_data.name}:</p> */}
              <p className="mall_name_heading">{get_main_name}:</p>
              <span>Eateries</span>
            </div>
            <button onClick={() => setTab(34)} className="upload_retail_btn">
              Upload Eatery Directory{" "}
              <BsArrowRight size={20} style={{ marginLeft: "10px" }} />
            </button>
            <div className="mm_horizontal_line"></div>
            {/*  Add New Button start */}
            <Link
              to=""
              className="leaderboard-btn"
              style={{ justifyContent: "flex-end" }}
              onClick={() => setTab(15)}
            >
              Add new{" "}
              <img src={images.add_new} className="leaderboard-btn-icon" />
            </Link>
            {/*  Add New Button end */}
            <div className="sd_cards_grid">
              {eateryList && eateryList.length > 0
                ? eateryList.map((item, index) => {
                  return (
                    <StoreECard
                      key={item.id}
                      img={item.store_logo_path}
                      itm={item}
                      setSingleStoreData={setSingleStoreData}
                      setIsOpen={setIsOpen}
                      setTab={setTab}
                      setStore_id={setStore_id}
                      getEateryList={getEateryList}
                    />
                  );
                })
                : null}
            </div>
            {/*  Add New Button start */}
            {eateryList && eateryList.length > 9 ? (
              <Link
                to=""
                className="leaderboard-btn"
                style={{ justifyContent: "flex-end" }}
              >
                Add new{" "}
                <img src={images.add_new} className="leaderboard-btn-icon" />
              </Link>
            ) : null}
            {/* {eaterytotalPages !== eaterypage && (
          <button
            className="view_more_btn"
            onClick={() => setEateryPage(eaterypage + 1)}
          >
            {eateryloading ? "Loading..." : "Load More Eateries"}
            <BsChevronDown />
          </button>
        )} */}

            {/* store detail model */}

            <ReactModal
              isOpen={modalIsOpen}
              // onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="sd_model_wrapp">
                {/* edit btn */}
                {/* <div className="sd_model_edit_wrap">
              <button onClick={closeModal}>
                <img src={images.close} alt="" />
              </button>
            </div> */}

                {/* pert - 1 */}
                <div className="sd_model_sec1">
                  {/* edit and delete orange btns start */}
                  <div className="sd_model_edit_wrap">
                    <button
                      className="sd_modal_edit_btn_wrapp"
                      onClick={() => {
                        setTab(8);
                        setStore_id(getsingleStoreData.id);
                      }}
                    >
                      <img src={images.edit_orange} alt="" />
                      <p>Edit</p>
                    </button>
                    <button
                      className="sd_modal_edit_btn_wrapp"
                      onClick={() => {
                        DeleteMallEateriesData();
                      }}
                    >
                      <img src={images.cancle_orange} alt="" />
                      <p>Delete</p>
                    </button>

                    <button onClick={closeModal}>
                      <img src={images.close} alt="" />
                    </button>
                  </div>
                  {/* edit and delete orange btns end */}
                  <div className="sd_model_sec1_img_wrapp">
                    <img src={getsingleStoreData.store_logo_path} alt="" />
                  </div>

                  <div className="sd_model_sec1_name_part">
                    <h3
                      className="mb_8"
                      style={{
                        letterSpacing: "1px", fontWeight: "800", fontSize: "26px"
                      }}
                    >
                      {getsingleStoreData.name}
                    </h3>
                    <p>
                      Shop no: <span style={{ fontSize: "14px" }}>{getsingleStoreData.store_no}</span>
                    </p>
                    <p>
                      Level:
                      <span style={{ fontSize: "14px" }}>{getsingleStoreData.store_level}</span>
                    </p>
                    <div className="sd_model_sec2" style={{ marginTop: "12px", flexDirection: "column", gap: "8px" }}>
                      <div className="sd_model_sec2_sigle">
                        <FaPhone color="var(--color-orange)" size={16} />
                        <p style={{ fontSize: "14px" }}>+{getsingleStoreData.number}</p>
                      </div>
                      <div className="sd_model_sec2_sigle">
                        <img src={images.send} alt="" />
                        <p style={{ fontSize: "14px" }}>{getsingleStoreData.email}</p>
                      </div>
                    </div>
                    {/* <p>
                      Trading Hours:
                      <span>
                        {getsingleStoreData.mon_fri_from_time} -{" "}
                        {getsingleStoreData.mon_fri_to_time}
                      </span>
                    </p> */}
                  </div>
                  <div className="sd_modal_time">
                    <p className="sd_modal_time_head">Trading Hours:</p>
                    <div className="sd_modal_time_inner">
                      <p>
                        <span style={{ fontSize: "14px", fontWeight: "300" }}>Mo - Fri: {getsingleStoreData.mon_fri_from_time === "" ||
                          getsingleStoreData.mon_fri_from_time == null ||
                          getsingleStoreData.mon_fri_from_time == "undefined"
                          ? ""
                          : getsingleStoreData.mon_fri_from_time}am - {getsingleStoreData.mon_fri_to_time === "" ||
                            getsingleStoreData.mon_fri_to_time == null ||
                            getsingleStoreData.mon_fri_to_time == "undefined"
                            ? ""
                            : getsingleStoreData.mon_fri_to_time}pm</span></p>

                      <p><span style={{ fontSize: "14px", fontWeight: "300" }}>Sat: {getsingleStoreData.mon_fri_from_time === "" ||
                        getsingleStoreData.sat_from_time == null ||
                        getsingleStoreData.sat_from_time == "undefined"
                        ? ""
                        : getsingleStoreData.sat_from_time}am - {getsingleStoreData.sat_to_time === "" ||
                          getsingleStoreData.sat_to_time == null ||
                          getsingleStoreData.sat_to_time == "undefined"
                          ? ""
                          : getsingleStoreData.sat_to_time}pm</span></p>

                      <p><span style={{ fontSize: "14px", fontWeight: "300" }}>Sun: {getsingleStoreData.mon_fri_from_time === "" ||
                        getsingleStoreData.sat_from_time == null ||
                        getsingleStoreData.sat_from_time == "undefined"
                        ? ""
                        : getsingleStoreData.sat_from_time}am - {getsingleStoreData.sat_to_time === "" ||
                          getsingleStoreData.sat_to_time == null ||
                          getsingleStoreData.sat_to_time == "undefined"
                          ? ""
                          : getsingleStoreData.sat_to_time}pm</span></p>


                      <p><span style={{ fontSize: "14px", fontWeight: "300" }}>Public Holiday: {getsingleStoreData.mon_fri_from_time === "" ||
                        getsingleStoreData.sat_from_time == null ||
                        getsingleStoreData.sat_from_time == "undefined"
                        ? ""
                        : getsingleStoreData.sat_from_time}am - {getsingleStoreData.sat_to_time === "" ||
                          getsingleStoreData.sat_to_time == null ||
                          getsingleStoreData.sat_to_time == "undefined"
                          ? ""
                          : getsingleStoreData.sat_to_time}pm</span></p>


                    </div>
                  </div>
                </div>
                {/* pert - 2 */}
                {/* <div className="sd_model_sec2">
                  <div className="sd_model_sec2_sigle">
                    <FaPhone color="var(--color-orange)" size={16} />
                    <p>+{getsingleStoreData.number}</p>
                  </div>
                  <div className="sd_model_sec2_sigle">
                    <img src={images.send} alt="" />
                    <p>{getsingleStoreData.email}</p>
                  </div>
                </div> */}
                {/* pert - 3 */}
                <div className="sd_model_sec3">
                  <p style={{ fontSize: "14px" }}>{getsingleStoreData.description}</p>
                </div>
              </div>
              {/* </div> */}
            </ReactModal>
          </div >
        </>
      )}
    </>
  );
};

export default Eateries;