import React, { useEffect } from "react";
import "./BrandCartCard.css";
import images from "../../constants/images";
import { IoIosClose } from "react-icons/io";
import { ACCEPT_HEADER, remove_store_cart } from "../../utils/Constant";
import axios from "axios";

const BrandCartCard = ({ item, toggle, Get_cart, setToggle }) => {
  // useEffect(() => {
  //   console.log("FFFF",);
  // }, []);

  const remove_cart = async (id) => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    const formdata = await new FormData();
    await formdata.append("id", id);

    axios
      .post(remove_store_cart, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(JSON.stringify(res, null, 2));
        Get_cart();
        setToggle(null);
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  return (
    <div className="brandcc_main_wrapp">
      <div className="brandcc_sec1">
        {toggle == 1 ? (
          <img src={item.leaderboards ? item.leaderboards.image_path : ""} />
        ) : toggle == 2 ? (
          <img
            src={item.promotionbanners ? item.promotionbanners.image_path : ""}
          />
        ) : toggle == 3 ? (
          <img
            src={item.productbanners ? item.productbanners.image_path : ""}
          />
        ) : toggle == 4 ? (
          <img
            src={
              item.productbannertiles ? item.productbannertiles.image_path : ""
            }
          />
        ) : null}
      </div>
      <div className="brandcc_sec2">
        {toggle == 1 ? (
          <p className="brandcc_name">{item.leaderboards ? item.leaderboards.title : ""} </p>
        ) : toggle == 2 ? (
          // <p className="brandcc_name">{item.promotionbanners.description === null || item.promotionbanners.description === "" ? "" : item.promotionbanners.description} </p>
          <p className="brandcc_name">{item.promotionbanners ? item.promotionbanners.description : ""} </p>
        ) : toggle == 3 ? (
          <p className="brandcc_name">{item.productbanners.description ? item.productbanners.description : null} </p>
        ) : toggle == 4 ? (
          <p className="brandcc_name">{item.productbannertiles ? item.productbannertiles.title : ""} </p>
        ) : null}

        {toggle == 1 ? (
          <p className="brandcc_dates">
            {item.leaderboards ? item.leaderboards.weeks ? item.leaderboards.weeks.from_date : "" : ''} -{" "}
            {item.leaderboards ? item.leaderboards.weeks ? item.leaderboards.weeks.to_date : "" : ''}
          </p>
        ) : toggle == 2 ? (
          <p className="brandcc_dates">
            {item.promotionbanners ? item.promotionbanners.weeks ? item.promotionbanners.weeks.from_date : "" : ''} -{" "}
            {item.promotionbanners ? item.promotionbanners.weeks ? item.promotionbanners.weeks.to_date : "" : ""} -{" "}
          </p>
        ) : toggle == 3 ? (
          <p className="brandcc_dates">
            {item.productbanners.weeks
              ? item.productbanners.weeks.from_date
              : ""}{" "}
            -{" "}
            {item.productbanners.weeks ? item.productbanners.weeks.to_date : ""}
          </p>
        ) : toggle == 4 ? (
          <p className="brandcc_dates">
            {item.productbannertiles ? item.productbannertiles.weeks ? item.productbannertiles.weeks.from_date : "" : ""} - {""}
            {item.productbannertiles ? item.productbannertiles.weeks ? item.productbannertiles.weeks.to_date : "" : ""} - {""}
          </p>
        ) : null}

        {toggle == 1 ? (
          <>
            <div className="cart-mall-name">
              {item.leaderboards.multiple_malls &&
                item.leaderboards.multiple_malls.length > 0
                ? item.leaderboards.multiple_malls.map((mall, mindx) => {
                  return (
                    <div className="cart-mall-name">
                      <div
                        className="select_mall_tag_btns_wrapp select_mall_tag_btns_wrapp-cart"
                      // style={{ width: "100%" }}
                      >
                        <button className="select_mall_tag_single_btn">
                          {mall.malls ? mall.malls.name : ''}
                          {/* <IoIosClose className="select_mall_tag_single_btn_close" /> */}
                        </button>{" "}
                      </div>
                    </div>
                  );
                })
                : null}
            </div>
          </>
        ) : toggle == 2 ? (
          <>
            <div className="cart-mall-name">
              {item.promotionbanners &&
                item.promotionbanners.multiple_malls.length > 0
                ? item.promotionbanners.multiple_malls.map((mall, mindx) => {
                  return (

                    <div
                      className="select_mall_tag_btns_wrapp select_mall_tag_btns_wrapp-cart"
                    // style={{ width: "100%" }}
                    >
                      <button className="select_mall_tag_single_btn">
                        {mall.malls.name}
                        {/* <IoIosClose className="select_mall_tag_single_btn_close" /> */}
                      </button>{" "}
                    </div>


                  );
                })
                : null}
            </div>
          </>
        ) : toggle == 3 ? (
          <>
            <div className="cart-mall-name">
              {item.productbanners.multiple_malls &&
                item.productbanners.multiple_malls.length > 0
                ? item.productbanners.multiple_malls.map((mall, mindx) => {
                  return (
                    <div
                      className="select_mall_tag_btns_wrapp-cart"
                    // style={{ width: "100%" }}
                    >
                      <button className="select_mall_tag_single_btn">
                        {mall.malls.name}
                        {/* <IoIosClose className="select_mall_tag_single_btn_close" /> */}
                      </button>{" "}
                    </div>
                  );
                })
                : null}
            </div>
          </>
        ) : toggle == 4 ? (
          <>
            <div className="cart-mall-name">
              {item.productbannertiles &&
                item.productbannertiles.multiple_malls.length > 0
                ? item.productbannertiles.multiple_malls.map((mall, mindx) => {
                  return (
                    <div
                      className="select_mall_tag_btns_wrapp select_mall_tag_btns_wrapp-cart"
                    // style={{ width: "100%" }}
                    >
                      <button className="select_mall_tag_single_btn">
                        {mall.malls.name}
                        {/* <IoIosClose className="select_mall_tag_single_btn_close" /> */}
                      </button>{" "}
                    </div>
                  );
                })
                : null}
            </div>
          </>
        ) : null}
      </div>
      <div className="brandcc_sec3">
        <p>R {item.price}</p>
      </div>

      <div className="brandcc_remove_btn_wrapp">
        <p>Remove</p>
        <button
          onClick={() => {
            console.log("udddd", item.id);
            remove_cart(item.id);
          }}
        >
          <img src={images.delete_icon} alt="delet icon" className="cart-card-delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default BrandCartCard;