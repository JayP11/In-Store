import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import images from "../../constants/images";
import "./CustomerBrandDetailsComponent.css"
import { BsArrowRight } from "react-icons/bs";

const CustomerBrandDetailsComponent = ({ getbdetalis, setTab }) => {
    useEffect(() => {
        console.log("dsdasdsa", JSON.stringify(getbdetalis, null, 2));
        console.log("customer brand details", getbdetalis);
    }, []);


    return (
        <div>
            <div className="cus-brand-details-flex">
                <div className="cus-brand-details-flex-part1">
                    <div className="cus-brand-details-inner-flex-part">
                        <p className="cus-brand-details-main-txt">Shop no:</p>{" "}
                        <span className=""> {getbdetalis ? getbdetalis.store_no : ""}</span>
                    </div>
                    <div className="cus-brand-details-inner-flex-part">
                        <p className="cus-brand-details-main-txt">Level: </p>{" "}
                        <span className="">
                            {" "}
                            {getbdetalis ? getbdetalis.store_level : ""}
                        </span>
                    </div>
                    <div className="cus-brand-details-inner-flex-part">
                        <p className="cus-brand-details-main-txt">Trading Hours:</p>{" "}
                        <span className="">
                            {" "}
                            {getbdetalis ? getbdetalis.mon_fri_from_time : ""} am -
                            {getbdetalis ? getbdetalis.mon_fri_to_time : ""} pm
                        </span>
                    </div>
                </div>
                <div className="cus-brand-details-flex-part3">
                    <div className="sd_model_sec2 cus-brand-details-cont">
                        <div className="sd_model_sec2_sigle">
                            <FaPhone color="var(--color-orange)" size={16} />

                            <p style={{ fontWeight: "400" }}>
                                {getbdetalis ? getbdetalis.contact_no : ""}
                            </p>
                        </div>
                        <div className="sd_model_sec2_sigle">
                            <img src={images.send} alt="" />

                            <p style={{ fontWeight: "400" }}>
                                {getbdetalis ? getbdetalis.email : ""}
                            </p>
                        </div>
                    </div>
                    <div className="find-my-way-btn-flex">
                        <button className="find-my-way-btn" onClick={()=>{setTab(29)}}>Find my way</button>
                        <BsArrowRight className="find-my-way-btn-arrow" />
                    </div>
                </div>
                <div className="cus-brand-details-flex-part2"></div>

                <div className="cus-brand-details-flex-part4">
                    {/* <p>
                        {" "}
                        GUESS was established in 1981 by the Marciano brothers, who left the
                        south of France in pursuit of the American dream. Inspired by a
                        European influence, the Marcianos redefined denim. One of their
                        initial designs was a stonewashed, slim-fitting jean, the 3-zip
                        Marilyn. Bloomingdale’s was the first department store to welcome
                        the brand by ordering two dozen pairs of jeans. They disappeared
                        from the shelves in just hours. This was the beginning of a long
                        success story
                    </p>

                    <p>
                        Today GUESS is a truly global lifestyle brand with a full range of
                        denim, apparel and accessories offered in over 80 countries around
                        the world.
                    </p> */}

                    {getbdetalis ? getbdetalis.description
 : ""}

                </div>
                <div className="find-my-way-btn-flex find-my-way-btn-flex2">
                    <button className="find-my-way-btn"
                        onClick={() => {
                            setTab(36);
                            // setBrandData(getbdetalis);
                        }}> Show Products</button>

                    <BsArrowRight className="find-my-way-btn-arrow" />
                </div>
            </div>
            {/* <button
                className="btn btn4"
                style={{ width: "200px", marginTop: "20px" }}
            >
                View Promotion
            </button> */}
        </div >
    );
};

export default CustomerBrandDetailsComponent;