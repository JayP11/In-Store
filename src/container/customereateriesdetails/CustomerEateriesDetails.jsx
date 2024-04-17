import React from "react";
// import "./CustomerBrandDetails.css"
import {
    CustomerEateriesDetailsComponent,
    CustomerEateryHero,
    CustomerHero,
} from "../../components";
import { FaPhone } from "react-icons/fa";
import images from "../../constants/images";
import { IoChevronBack } from "react-icons/io5";

const CustomerEateriesDetails = ({ getsingalmalldata, getedetalis, setTab }) => {
    return (
        <div>
            <CustomerEateryHero getsingalmalldata={getsingalmalldata} getedetalis={getedetalis} />
            <div className="mall_nearme_brand_main_wrapp">
                <div>
                    <div className="mm_main_wrapp " style={{ marginBottom: "40px" }}>
                        <div className='edit-brand-back-iconbox' onClick={() => setTab(4)}><IoChevronBack className='edit-brand-back-icon' /> <p className='edit-brand-back-txt'>Back</p></div>
                        {/* heading */}
                        <div
                            className="profile_head_center customer-brand-details-head"
                            style={{
                            marginTop: "20px",
                                alignItems: "start",
                                justifyContent: "start",
                            }}
                        >
                            {/* <h4 className="h3" style={{ textTransform: "capitalize" }}>{getsingalmalldata.name}</h4> &nbsp;&nbsp; <span className="h3">Eateries</span> */}
                            <h4
                                className="h3"
                                style={{ textTransform: "capitalize", textAlign: "initial",fontWeight:"700" }}
                            >
                                {getedetalis.name} - {getsingalmalldata.name}
                            </h4>
                            {/* &nbsp;&nbsp; <span className="h3">Eateries</span> */}
                        </div>
                        <CustomerEateriesDetailsComponent getedetalis={getedetalis} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerEateriesDetails;