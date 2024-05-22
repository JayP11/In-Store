import React, { useState } from 'react'
import "./FacilityCard.css";
import images from '../../constants/images';
import { useMallContext } from '../../context/mall_context';
import ReactModal from 'react-modal';
import Notification from "../../utils/Notification";


const FacalityCard = ({ item, setTab, setfacility_id, getsinglefacilitydata, setsinglefacilitydata }) => {



  const { DeleteFacilityApi, getFacilityApi } = useMallContext();

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

  const [deletemodal, setDeleteModal] = useState(false);

  // }

  function closeModal() {
    setDeleteModal(false);
  }

  const deleteFacilityData = async () => {

    const formdata = await new FormData();
    await formdata.append("id", item.id);






    console.log("-=-=-=->", formdata);
    const data = await DeleteFacilityApi(formdata);
    if (data) {
      if (data.success == 1) {
         Notification("success", "Success!", "Facility Deleted Successfully!");

        getFacilityApi();



        setTab(6);
      }
    }

 
  };
  return (
    <>
    <div className="facility_card_main_wrapp">
    {/* style={{ background: item.bg_colour == 1 ? item.sky_blue : item.bg_colour == 2 ? item.orange : item.bg_colour == 3 ? item.pink : null }}> */}
      <div className="stored_card_edit_wrapp">
        <button onClick={() => {
          setTab(12); setfacility_id(item.id); setsinglefacilitydata(item)
        }} className="stored_card_edit_btn">
          <img src={images.card_edit} alt="" />
        </button>
        <button className="stored_card_edit_btn"onClick={() => setDeleteModal(true)}>
          <img src={images.card_cancle} alt="" />
        </button>
      </div>
      {/* {
        item.bg_colour == 1 ? <>
          <img src={images.wcard_1} alt="" className="wc_bottom_img" />

        </> :
          item.bg_colour == 2 ? <>
            <img src={images.wcard_2} alt="" className="wc_bottom_img" />

          </> :
            item.bg_colour == 3 ? <>
              <img src={images.wcard_3} alt="" className="wc_bottom_img" />

            </> : null

      } */}
      <img src={item.facilities && item.facilities.image_path} alt="" className="facility_logo" />
      <h5 className="facility_card_heading">{item.facilities && item.facilities.name}</h5>
      <p className="facility_card_des">{item.description}</p>
    </div>

       {/* store delete model */}

       <ReactModal
        isOpen={deletemodal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <div className="sd_model_wrapp sd_model_wrapp-delete">
          {/* edit and delete orange btns start */}
          <div className="sd_model_edit_wrap">
            <button onClick={closeModal}>
              <img src={images.close} alt="" />
            </button>
          </div>
          {/* edit and delete orange btns end */}

          <p>Are you sure you want to delete ?</p>
          <div className="delete-modal-btn-box">
            <button
              onClick={() => {
                // setStore_id(itm.id);
                deleteFacilityData();
                setDeleteModal(false);
              }}
              className="delete-modal-btn">
              Yes
            </button>
            {/* onClick={() => {
              // setStore_id(itm.id);
              // DeleteMallStoreData(itm.id);
              setDeleteModal(true);
            }} */}

            <button onClick={closeModal} className="delete-modal-btn">
              No
            </button>
          </div>
        </div>
        {/* </div> */}
      </ReactModal>
    </>
  );
};

export default FacalityCard