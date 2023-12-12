import React, { useEffect } from 'react'
import images from '../../constants/images'

const CustomerFacilityCard = ({ item }) => {
    useEffect(() => { console.log("customer facility is", item); }, [])

    return (
        <div className="facility_card_main_wrapp" style={{ background: item.bg_colour == 1 ? item.sky_blue : item.bg_colour == 2 ? item.orange : item.bg_colour == 3 ? item.pink : null }}>
            <div className="stored_card_edit_wrapp">
                {/* <button className="stored_card_edit_btn">
                    <img src={images.card_edit} alt="" />
                </button>
                <button className="stored_card_edit_btn">
                    <img src={images.card_cancle} alt="" />
                </button> */}
            </div>
            {
                item.bg_colour == 1 ? <>
                    <img src={images.wcard_1} alt="" className="wc_bottom_img" />

                </> :
                    item.bg_colour == 2 ? <>
                        <img src={images.wcard_2} alt="" className="wc_bottom_img" />

                    </> :
                        item.bg_colour == 3 ? <>
                            <img src={images.wcard_3} alt="" className="wc_bottom_img" />

                        </> : null

            }
            {/* <img src={item.image_path} alt="" className="wc_bottom_img" /> */}
            <img src={item.image_path} alt="" className="facility_logo" />
            <h5 className="facility_card_heading">{item.name}</h5>
            <p className="facility_card_des">{item.description}</p>
        </div>
    )
}

export default CustomerFacilityCard