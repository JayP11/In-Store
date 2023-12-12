import React from 'react'
import { FaPhone } from 'react-icons/fa'
import images from '../../constants/images'
// import "./CustomerBrandDetailsComponent.css"
import { BsArrowRight } from 'react-icons/bs'

const CustomerBrandDetailsComponent = ({ getedetalis }) => {
    console.log("getedetalis", getedetalis);
    return (
        <div>
            <div className='cus-brand-details-flex'>
                <div className='cus-brand-details-flex-part1'>
                    <div className='cus-brand-details-inner-flex-part'>
                        <p className="cus-brand-details-main-txt">Shop no:</p> <span className=""> {getedetalis.store_no}</span>
                    </div>
                    <div className='cus-brand-details-inner-flex-part'>
                        <p className="cus-brand-details-main-txt">Level: </p> <span className="">{getedetalis.store_level}</span>
                    </div>
                    <div className='cus-brand-details-inner-flex-part'>
                        <p className="cus-brand-details-main-txt">Trading Hours:</p> <span className=""> {getedetalis.holiday_from_time}am - {getedetalis.holiday_to_time}pm</span>
                    </div>

                </div>

                <div className='cus-brand-details-flex-part3'>
                    <div className="sd_model_sec2 cus-brand-details-cont">
                        <div className="sd_model_sec2_sigle">
                            <FaPhone color="var(--color-orange)" size={16} />
                            {/* <p> {getbranddata.number} </p> */}
                            <p style={{ fontWeight: '400' }}>{getedetalis.number}</p>
                        </div>
                        <div className="sd_model_sec2_sigle">
                            <img src={images.send} alt="" />
                            {/* <p>{getbranddata.email} </p> */}
                            <p style={{ fontWeight: '400' }}>{getedetalis.email}</p>
                        </div>
                    </div>
                    <div className="find-my-way-btn-flex">
                        <button className="find-my-way-btn">Find my way</button>
                        <BsArrowRight className="find-my-way-btn-arrow" />
                    </div>
                </div>
                <div className='cus-brand-details-flex-part2'></div>
                <div className='cus-brand-details-flex-part4'>
                    <p>  GUESS was established in 1981 by the Marciano brothers, who left the south of France in pursuit of the American
                        dream. Inspired by a European influence, the Marcianos redefined denim. One of their initial designs was a
                        stonewashed, slim-fitting jean, the 3-zip Marilyn. Bloomingdale’s was the first department store to welcome the
                        brand by ordering two dozen pairs of jeans. They disappeared from the shelves in just hours. This was the
                        beginning of a long success story</p>

                    <p>Today GUESS is a truly global lifestyle brand with a full range of denim, apparel and accessories offered in over 80
                        countries around the world.</p>
                </div>

            </div>
            {/* <button className='btn btn4' style={{ width: "200px", marginTop: "20px" }}>View Promotion</button> */}
        </div>
    )
}

export default CustomerBrandDetailsComponent