import React from 'react'
import "./FacilityCard.css";
import images from '../../constants/images';
import { useMallContext } from '../../context/mall_context';

const FacalityCard = ({ item, setTab, setfacility_id, getsinglefacilitydata, setsinglefacilitydata }) => {

  const { DeleteFacilityApi, getFacilityApi } = useMallContext();


  const deleteFacilityData = async () => {

    const formdata = await new FormData();
    await formdata.append("id", item.id);






    console.log("-=-=-=->", formdata);
    const data = await DeleteFacilityApi(formdata);
    if (data) {
      if (data.success == 1) {
        console.log("facility-data", data);

        getFacilityApi();



        setTab(6);
      }
    }
    // }
  };
  return (
    <div className="facility_card_main_wrapp" style={{ background: item.bg_colour == 1 ? item.sky_blue : item.bg_colour == 2 ? item.orange : item.bg_colour == 3 ? item.pink : null }}>
      <div className="stored_card_edit_wrapp">
        <button onClick={() => {
          setTab(12); setfacility_id(item.id); setsinglefacilitydata(item)
        }} className="stored_card_edit_btn">
          <img src={images.card_edit} alt="" />
        </button>
        <button className="stored_card_edit_btn" onClick={() => deleteFacilityData()}>
          <img src={images.card_cancle} alt="" />
        </button>
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
      <img src={item.image_path} alt="" className="facility_logo" />
      <h5 className="facility_card_heading">{item.name}</h5>
      <p className="facility_card_des">{item.description}</p>
    </div>
  );
};

export default FacalityCard