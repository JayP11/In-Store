import React, { useEffect, useState } from "react";
import "./StoreDirectory.css";
import { BsArrowRight, BsChevronDown } from "react-icons/bs";
import { MallHero, StoreDCard } from "../../components";
import images from "../../constants/images";
import ReactModal from "react-modal";
import { GrClose } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";
import { useMallContext } from "../../context/mall_context";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../context/store_context";
import { ACCEPT_HEADER, get_store_mall_wise } from "../../utils/Constant";
import axios from "axios";
import Notification from "../../utils/Notification";

const StoresData = [
  {
    id: 1,
    img: images.sl1,
  },
  {
    id: 2,
    img: images.sl2,
  },
  {
    id: 3,
    img: images.sl3,
  },
  {
    id: 4,
    img: images.sl4,
  },
  {
    id: 5,
    img: images.sl5,
  },
  {
    id: 6,
    img: images.sl6,
  },
  {
    id: 7,
    img: images.sl7,
  },
  {
    id: 8,
    img: images.sl8,
  },
  {
    id: 9,
    img: images.sl9,
  },
  {
    id: 10,
    img: images.sl10,
  },
  {
    id: 11,
    img: images.sl11,
  },
  {
    id: 12,
    img: images.sl12,
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

const StoreDirectory = ({
  setTab,
  setStore_id,
  get_mall_store_data,
  setSingleStoreData,
  getsingleStoreData,
  get_mall_auth_data,
  storepage,
  setStorePage,
  storetotalPages,
}) => {
  const { DeleteStoreApi } = useMallContext();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [storeData, setStoreData] = useState([]);

  // view store details states

  // const [getsingleStoreData, setStoreItem] = useState({});

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    getStoreList();
  }, []);

  const [storeList, setStoreList] = useState([]);
  const [storeloading, setStoreLoading] = useState(false);

  const getStoreList = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));

    setStoreLoading(true);

    axios
      .get(get_store_mall_wise, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })

      .then((res) => {
        console.log("get_store_mall_wise---->>>>", res);
        // setStoreTotalPages(res.data.last_page);
        setStoreList(res.data.data);
        setStoreLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const DeleteMallStoreData = async () => {
    {
      const formdata = await new FormData();
      await formdata.append("store_id", getsingleStoreData.id);

      console.log("-=-=-=->", formdata);
      const data = await DeleteStoreApi(formdata);
      if (data) {
        if (data.success === 1) {
          console.log("mall-data", data);
          setIsOpen(false);

          Notification("success", "Success!", "Brand Deleted Successfully!");
          setTab(3);
          // getStore();
        }
      }
    }
  };

  return (
    <>
      <div className="">
        <MallHero get_mall_auth_data={get_mall_auth_data} />
      </div>

      <div className="mm_main_wrapp">
        <div className="mall_name_wrapp">
          <p className="mall_name_heading">{get_mall_auth_data.name} :</p>
          <span>Brands</span>
        </div>
        <button className="upload_retail_btn" onClick={() => setTab(10)}>
          Upload Retailer Directory{" "}
          <BsArrowRight size={20} style={{ marginLeft: "10px" }} />
        </button>
        <div className="mm_horizontal_line"></div>
        {/*  Add New Button start */}
        <div
          style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <button
            onClick={() => setTab(16)}
            className="leaderboard-btn"
            style={{ justifyContent: "flex-end" }}
          >
            Add new{" "}
            <img src={images.add_new} className="leaderboard-btn-icon" />
          </button>
        </div>
        {/*  Add New Button end */}
        <div className="sd_cards_grid">
          {storeList && storeList.length > 0
            ? storeList.map((item, index) => {
              console.log("dfgdfgfdgdfgdf", item);
              return (
                <StoreDCard
                  key={item.id}
                  img={item.store_logo_path}
                  itm={item}
                  setTab={setTab}
                  setStore_id={setStore_id}
                  getStoreList={getStoreList}
                  // setStoreItem={setStoreItem}
                  setIsOpen={setIsOpen}
                  setSingleStoreData={setSingleStoreData}
                />
              );
            })
            : null}
        </div>
        {/* <button
        className="view_more_btn"
        onClick={() => setStorePage(storepage + 1)}
      >
        Load More Stores
        <BsChevronDown />
      </button> */}

        {/* {storetotalPages !== storepage && (
          <button
            className="view_more_btn"
            onClick={() => setStorePage(storepage + 1)}
          >
            {storeloading ? "Loading..." : "Load More Stores"}
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
            {/* edit and delete orange btns start */}
            <div className="sd_model_edit_wrap">
              {getsingleStoreData.type == 2 ? (
                <button
                  className="sd_modal_edit_btn_wrapp"
                  onClick={() => {
                    setTab(33);
                    setStore_id(getsingleStoreData.id);
                  }}
                >
                  <img src={images.edit_orange} alt="" />
                  <p>Upload</p>
                </button>
              ) : null}

              <button
                className="sd_modal_edit_btn_wrapp"
                onClick={() => {
                  setTab(9);
                  setStore_id(getsingleStoreData.id);

                }}
              >
                <img src={images.edit_orange} alt="" />
                <p>Edit</p>
              </button>
              <button
                className="sd_modal_edit_btn_wrapp"
                onClick={() => {
                  // setTab(9);
                  setStore_id(getsingleStoreData.id);
                  DeleteMallStoreData();
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

            {/* pert - 1 */}
            <div className="sd_model_sec1">
              <div className="sd_model_sec1_img_wrapp">
                <img src={getsingleStoreData.store_logo_path} alt="" />
              </div>
              <div className="sd_model_sec1_name_part">
                <h3
                  className="mb_8"
                  style={{ letterSpacing: "1px", fontWeight: "800", fontSize: "26px" }}
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
                {/* <p>
                  Trading Hours:
                  <span>
                    {getsingleStoreData.mon_fri_from_time === "" ||
                      getsingleStoreData.mon_fri_from_time == null ||
                      getsingleStoreData.mon_fri_from_time == "undefined"
                      ? ""
                      : getsingleStoreData.mon_fri_from_time}{" "} AM
                    -{" "}
                    {getsingleStoreData.mon_fri_to_time === "" ||
                      getsingleStoreData.mon_fri_to_time == null ||
                      getsingleStoreData.mon_fri_to_time == "undefined"
                      ? ""
                      : getsingleStoreData.mon_fri_to_time} PM
                  </span>
                </p> */}

                <div className="sd_model_sec2" style={{ marginTop: "12px", flexDirection: "column", gap: "8px" }}>
                  <div className="sd_model_sec2_sigle" style={{ gap: "8px" }}>
                    <FaPhone color="var(--color-orange)" size={16} />
                    <p style={{ fontSize: "14px" }}>+{getsingleStoreData.contact_no}</p>
                  </div>
                  <div className="sd_model_sec2_sigle">
                    <img src={images.send} alt="" />
                    <p style={{ fontSize: "14px" }}>{getsingleStoreData.email}</p>
                  </div>
                </div>
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
                <p>+{getsingleStoreData.contact_no}</p>
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
      </div>
    </>
  );
};

export default StoreDirectory;
