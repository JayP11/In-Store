import React, { useState } from 'react'
import { FaPhone } from 'react-icons/fa';
import ReactModal from 'react-modal';
import images from '../../constants/images';

const BrandInMallCard = ({ img, setTab }) => {

    const [brandModalOpen, setBrandModalClose] = useState(false)

    function closeModal() {
        setBrandModalClose(false);
    }

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
        <div>
            <button
                onClick={() => {
                    // setSingleStoreData(itm);
                    // setIsOpen(true);
                    setBrandModalClose(true);
                }}
                className="stored_card_wrapp"
            >
                <div className="stored_card_edit_wrapp">
                    <button className="stored_card_edit_btn">
                        <img src={images.card_edit} alt="" />
                    </button>
                    <button className="stored_card_edit_btn">
                        <img src={images.card_cancle} alt="" />
                    </button>
                </div>
                <img src={img} alt="" className="stored_card_img" />
            </button>

            {/* store detail model */}

            <ReactModal
                isOpen={brandModalOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="sd_model_wrapp">
                    {/* edit btn */}
                    {/* edit and delete orange btns start */}
                    <div className="sd_model_edit_wrap">


                        <button
                            className="sd_modal_edit_btn_wrapp"
                            onClick={() => {
                                setTab(10);
                                // setStore_id(getsingleStoreData.id);
                            }}
                        >
                            <img src={images.edit_orange} alt="" />
                            <p>Edit</p>
                        </button>
                        <button
                            className="sd_modal_edit_btn_wrapp"
                            onClick={() => {
                                // setTab(9);
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
                            <img src={images.et_logo2} alt="" />
                        </div>
                        <div className="sd_model_sec1_name_part">
                            <h3
                                className="h3 mb_8"
                                style={{ letterSpacing: "1px", fontWeight: "800" }}
                            >
                                PIER
                            </h3>
                            <p>
                                Shop no: <span>G10</span>
                            </p>
                            <p>
                                Level:
                                <span>Ground Level</span>
                            </p>
                            <p>
                                Trading Hours:
                                <span>
                                    9am - 9pm
                                </span>
                            </p>
                        </div>
                    </div>
                    {/* pert - 2 */}
                    <div className="sd_model_sec2">
                        <div className="sd_model_sec2_sigle">
                            <FaPhone color="var(--color-orange)" size={16} />
                            <p>+27 21 408 7600</p>
                        </div>
                        <div className="sd_model_sec2_sigle">
                            <img src={images.send} alt="" />
                            <p>clocktower@caffe.co.za</p>
                        </div>
                    </div>
                    {/* pert - 3 */}
                    <div className="sd_model_sec3">
                        <p>Situated in the Clock Tower on the Fish Quay is Vida e Caffè. Inspired by the street cafés of
                            Portugal, and infused with the vivacious energy of the people of Africa, Vida e Caffè is passionate
                            about their coffee. Based on the fare typical of a street in Lisbon, Vida e Caffè allows you to enjoy a
                            cup of Europe in Africa. A passion for perfection means this cafè always strives to serve the best
                            espresso and espresso-based caffè beverages possible. The signature coffee bean has been
                            meticulously selected and sourced from afar, taking up to three months to reach the stores. Here
                            they’ve mastered the art of blending, discovered the ideal roasting time, and found the exact
                            temperature to ensure your cup of Vida is the best quality it can possibly be. Also try some of the
                            delectable desserts and light meals.</p>
                    </div>
                </div>
                {/* </div> */}
            </ReactModal>
        </div>
    );
}

export default BrandInMallCard