import React, { useEffect, useState } from "react";
import { MallHero, MallMovieCard, MoviesCard } from "../../components";
import { BsArrowRight } from "react-icons/bs";
import images from "../../constants/images";
import ReactModal from "react-modal";
import { FaPhone } from "react-icons/fa";
import axios from "axios";
import { ACCEPT_HEADER, get_movie_list } from "../../utils/Constant";

const MallMovieCards = ({
    get_mall_auth_data,
    setTab,
    gettab,
    SetMovieData,
}) => {
    const [getlist, SetList] = useState([]);
    const [loading, SetLoading] = useState(false);

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

    const [modalIsOpen, setIsOpen] = useState(false);
    const [storeData, setStoreData] = useState([]);

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        getmovielist();
    }, []);

    const getmovielist = async () => {
        SetLoading(true);
        const token = JSON.parse(localStorage.getItem("is_token"));

        axios
            .get(get_movie_list, {
                headers: {
                    Accept: ACCEPT_HEADER,
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                console.log("ggg", JSON.stringify(res.data, null, 2));
                if (res.data.success == 1) {
                    SetList(res.data.data);
                    SetLoading(false);
                } else {
                    null;
                    SetLoading(false);
                }
            })
            .catch((err) => {
                console.log("err11", err);
                SetLoading(false);
            });
    };

    return (
        <>
            <div className="">
                <MallHero get_mall_auth_data={get_mall_auth_data} />
            </div>

            <div className="mm_main_wrapp">
                <div className="mall_name_wrapp">
                    <p className="mall_name_heading">{get_mall_auth_data.name} :</p>
                    <span>Movies</span>
                </div>
                <button
                    className="upload_retail_btn"
                    onClick={() => {
                        setTab(18);
                    }}
                >
                    Upload Movie Directory{" "}
                    <BsArrowRight size={20} style={{ marginLeft: "10px" }} />
                </button>
                <div className="mm_horizontal_line"></div>
                {/*  Add New Button start */}
                <div
                    style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
                >
                    <button
                        onClick={() => setTab(20)}
                        className="leaderboard-btn"
                        style={{ justifyContent: "flex-end" }}
                    >
                        Add new{" "}
                        <img src={images.add_new} className="leaderboard-btn-icon" />
                    </button>
                </div>

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
                        <div className="movies_card_wrapp">
                            {getlist && getlist.length > 0
                                ? getlist.map((item, index) => {
                                    return (
                                        <MallMovieCard
                                            setTab={setTab}
                                            gettab={gettab}
                                            item={item}
                                            getmovielist={getmovielist}
                                            SetMovieData={SetMovieData}
                                        />
                                    );
                                })
                                : null}
                        </div>
                    </>
                )}

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
                            <button
                                className="sd_modal_edit_btn_wrapp"
                                onClick={() => {
                                    setTab(9);
                                    // setStore_id(getsingleStoreData.id);
                                }}
                            >
                                <img src={images.edit_orange} alt="" />
                                <p>Edit</p>
                            </button>
                            <button
                                className="sd_modal_edit_btn_wrapp"
                                onClick={() => {
                                    setTab(9);
                                    // setStore_id(getsingleStoreData.id);
                                    // DeleteMallStoreData();
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
                                {/* <img src={getsingleStoreData.store_logo_path} alt="" /> */}
                                {/* <img src={getsingleStoreData.store_logo_path} alt="" /> */}
                            </div>
                            <div className="sd_model_sec1_name_part">
                                <h3
                                    className="h3 mb_8"
                                    style={{ letterSpacing: "1px", fontWeight: "800" }}
                                >
                                    {/* {getsingleStoreData.name} */}
                                </h3>
                                <p>
                                    {/* Shop no: <span>{getsingleStoreData.store_no}</span> */}
                                </p>
                                <p>
                                    Level:
                                    {/* <span>{getsingleStoreData.store_level}</span> */}
                                </p>
                                <p>
                                    Trading Hours:
                                    <span>
                                        {/* {getsingleStoreData.mon_fri_from_time === "" || getsingleStoreData.mon_fri_from_time == null || getsingleStoreData.mon_fri_from_time == "undefined" ? "" : getsingleStoreData.mon_fri_from_time} -{" "}
                                        {getsingleStoreData.mon_fri_to_time === "" || getsingleStoreData.mon_fri_to_time == null || getsingleStoreData.mon_fri_to_time == "undefined" ? "" : getsingleStoreData.mon_fri_to_time} */}
                                    </span>
                                </p>
                            </div>
                        </div>
                        {/* pert - 2 */}
                        <div className="sd_model_sec2">
                            <div className="sd_model_sec2_sigle">
                                <FaPhone color="var(--color-orange)" size={16} />
                                {/* <p>+{getsingleStoreData.number}</p> */}
                            </div>
                            <div className="sd_model_sec2_sigle">
                                <img src={images.send} alt="" />
                                {/* <p>+{getsingleStoreData.fax}</p> */}
                            </div>
                        </div>
                        {/* pert - 3 */}
                        <div className="sd_model_sec3">
                            {/* <p>{getsingleStoreData.description}</p> */}
                        </div>
                    </div>
                    {/* </div> */}
                </ReactModal>
            </div>
        </>
    );
};

export default MallMovieCards;