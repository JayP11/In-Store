import React, { useEffect, useState } from "react";
import "./CustomerBrandCard.css";
import images from "../../constants/images";
import { FiHeart } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import {
  ACCEPT_HEADER,
  add_wishlist,
  remove_wishlist,
} from "../../utils/Constant";
import axios from "axios";

const CustomerBrandCard = ({ data, getmovieapi, replce, mainitem, getWishlist, getid }) => {
  useEffect(() => { console.log("=>", data); }, []);

  const [getlist, SetList] = useState([]);
  const [loading, SetLoading] = useState(false);

  const getmovielist = async () => {
    SetLoading(true);
    const token = JSON.parse(localStorage.getItem("is_token"));

    const formdata = new FormData();
    formdata.append("product_id", data.id);

    axios
      .post(add_wishlist, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          getmovieapi(getid);
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

  const removelist = async () => {

    console.log('mainid', mainitem.id);
    SetLoading(true);
    const token = JSON.parse(localStorage.getItem("is_token"));

    const formdata = new FormData();
    formdata.append("product_banner_tiles_id", data.id);


    axios
      .post(remove_wishlist, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          getmovieapi(getid);
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
      <div className="cbc_main_wrapp">
        <div className="cbc_img_wrapp">
          <img
            src={data.image_path ? data.image_path : ""}
            // src={images.brand_page_hero}
            className="cbc_img"
            alt="brand image"
          />
          {replce == 1 ? (
            <>
              {data.is_wishlist == 1 ? (
                <button
                  onClick={() => {
                    removelist(getid);
                  }}
                  className="cbc_card_hart_icon">
                  {/* <FiHeart size={20} /> */}
                  <img src={images.heart_orange} />
                </button>
              ) : (
                <button
                  className="cbc_card_hart_icon"
                  onClick={() => {
                    getmovielist(getid);
                  }}
                >
                  <FiHeart size={20} />
                </button>
              )}
            </>
          ) : replce == 2 ? (
            <>
              <button
                className="cbc_card_hart_icon"
                onClick={() => {
                  removelist();
                }}
              >
                <img src={images.heart_orange} />
              </button>
            </>
          ) : null}
        </div>
        <p className="cbc_name">{data.title ? data.title : ""} </p>
        {/* <p className="cbc_name">fdgdfg </p> */}
        <p className="cbc_price">${data.price ? data.price : ""} </p>
        {/* <p className="cbc_price">$23213 </p> */}
        <p className="cbc_des">
          {data.stores ? (data.stores.name ? data.stores.name : "") : ""}
        </p>
        <p className="cbc_des">Only availble in stores</p>
      </div>
    </>
  );
};

export default CustomerBrandCard;