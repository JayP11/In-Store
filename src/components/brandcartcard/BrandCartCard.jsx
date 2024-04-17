import React, { useEffect } from "react";
import "./BrandCartCard.css";
import images from "../../constants/images";
import { IoIosClose } from "react-icons/io";
import { ACCEPT_HEADER, remove_store_cart } from "../../utils/Constant";
import axios from "axios";
import { useStoreContext } from "../../context/store_context";

const BrandCartCard = ({ item, toggle, Get_cart, setToggle }) => {

  const { getStoreCartApi,  } = useStoreContext();

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
        getStoreCartApi();
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
          <img
            src={item.landingpagetiles ? item.landingpagetiles?.image_path : ""}
          />
        ) : toggle == 2 ? (
          <>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "10px",
                marginLeft: "5px",
                marginRight: "5px",
                marginBottom: "10px",
              }}
            >
              {item.landingpagesquaretiles &&
                item.landingpagesquaretiles.multiple_images.map((item) => {
                  return (
                    <img
                      src={item.image_path}
                      style={{ width: "40px", height: "40px" }}
                    />
                  );
                })}
            </div>
          </>
        ) : toggle == 3 ? (
          <img
            src={
              item.landingpageleaderborads
                ? item.landingpageleaderborads.image_path
                : ""
            }
          />
        ) : toggle == 4 ? (
          <img src={item.leaderboards ? item.leaderboards.image_path : ""} />
        ) : toggle == 5 ? (
          <img
            src={item.promotionbanners ? item.promotionbanners.image_path : ""}
          />
        ) : toggle == 6 ? (
          
          <img
            src={
              item.productbanners ? item.productbanners.image_path : ""
            }
          />
        ) : toggle == 7 ? (
          <img
            src={item.productbannertiles ? item.productbannertiles.image_path : ""}
          />
        ) : null}
      </div>
      <div className="brandcc_sec2 brandcc_sec2-cinema">
        {toggle == 1 ? (
          <p className="brandcc_name">
            {item.landingpagetiles ? item.landingpagetiles.title : ""}{" "}
          </p>
        ) : toggle == 2 ? (
          // <p className="brandcc_name">{item.promotionbanners.description === null || item.promotionbanners.description === "" ? "" : item.promotionbanners.description} </p>
          <p className="brandcc_name">
            {item.landingpagesquaretiles
              ? item.landingpagesquaretiles.title
              : ""}{" "}
          </p>
        ) : toggle == 3 ? (
          <p className="brandcc_name">
            {item.landingpageleaderborads?.title
              ? item.landingpageleaderborads?.title
              : null}{" "}
          </p>
        ) : toggle == 4 ? (
          <p className="brandcc_name">
            {item.leaderboards ? item.leaderboards.title : ""}{" "}
          </p>
        ) : toggle == 5 ? (
          <p className="brandcc_name">
            {item.promotionbanners ? item.promotionbanners.description : ""}{" "}
          </p>
        ) : toggle == 6 ? (
          <p className="brandcc_name">
            {item.productbanners ? item.productbanners.description : ""}{" "}
          </p>
        ) : toggle == 7 ? (
          <>
            <p className="brandcc_name brandcc_name-cinema-bundle">
            {item.productbannertiles ? item.productbannertiles.title : ""}{" "}
            </p>
            {/* <p className="brandcc_name brandcc_name-cinema-bundle">
              {item.analyticbundles ? item.analyticbundles.option2 : ""}{" "}
            </p>
            <p className="brandcc_name brandcc_name-cinema-bundle">
              {item.analyticbundles ? item.analyticbundles.option3 : ""}{" "}
            </p>
            <p className="brandcc_name brandcc_name-cinema-bundle">
              {item.analyticbundles ? item.analyticbundles.option4 : ""}{" "}
            </p> */}
          </>
        ) : null}

        {toggle == 1 ? (
          <p className="brandcc_dates">
            {item.landingpagetiles
              ? item.landingpagetiles?
                 item.landingpagetiles?.from_date
                : ""
              : ""}{" "}
            -{" "}
            {item.landingpagetiles
              ? item.landingpagetiles?
                 item.landingpagetiles?.to_date
                : ""
              : ""}
          </p>
        ) : toggle == 2 ? (
          <p className="brandcc_dates">
            {item.landingpagesquaretiles
              ? item.landingpagesquaretiles?
                 item.landingpagesquaretiles?.from_date
                : ""
              : ""}{" "}
            -{" "}
            {item.landingpagesquaretiles
              ? item.landingpagesquaretiles?
                 item.landingpagesquaretiles?.to_date
                : ""
              : ""}{" "}
            -{" "}
          </p>
        ) : toggle == 3 ? (
          <p className="brandcc_dates">
            {item.landingpageleaderborads?
               item.landingpageleaderborads?.from_date
              : ""}{" "}
            -{" "}
            {item.landingpageleaderborads?
               item.landingpageleaderborads?.to_date
              : ""}
          </p>
        ) : toggle == 4 ? (
          <p className="brandcc_dates">
            {item.leaderboards
              ? item.leaderboards
                ? item.leaderboards.from_date
                : ""
              : ""}{" "}
            - {""}
            {item.leaderboards
              ? item.leaderboards
                ? item.leaderboards.to_date
                : ""
              : ""}{" "}
            - {""}
          </p>
        ) : toggle == 5 ? (
          <p className="brandcc_dates">
            {item.promotionbanners
              ? item.promotionbanners
                ? item.promotionbanners.from_date
                : ""
              : ""}{" "}
            - {""}
            {item.promotionbanners
              ? item.promotionbanners
                ? item.promotionbanners?.to_date
                : ""
              : ""}{" "}
            - {""}
          </p>
        ) : toggle == 6 ? (
          <p className="brandcc_dates">
            {item.productbanners
              ? item.productbanners
                ? item.productbanners.from_date
                : ""
              : ""}{" "}
            - {""}
            {item.productbanners
              ? item.productbanners
                ? item.productbanners.to_date
                : ""
              : ""}{" "}
            - {""}
          </p>
        ) : toggle == 7 ? (
          <p className="brandcc_dates">
           {item.productbannertiles
              ? item.productbannertiles
                ? item.productbannertiles.from_date
                : ""
              : ""}{" "}
            - {""}
            {item.productbannertiles
              ? item.productbannertiles
                ? item.productbannertiles.to_date
                : ""
              : ""}{" "}
            - {""}
          </p>
        ) : null}

        {toggle == 1 ? (
          <>
            <div className="cart-mall-name">
              {item.landingpagetiles?.multiple_malls &&
              item.landingpagetiles?.multiple_malls.length > 0
                ? item.landingpagetiles?.multiple_malls.map((mall, mindx) => {
                    return (
                      <div className="cart-mall-name">
                        <div
                          className="select_mall_tag_btns_wrapp select_mall_tag_btns_wrapp-cart"
                          // style={{ width: "100%" }}
                        >
                          <button className="select_mall_tag_single_btn">
                            {mall.malls ? mall.malls.name : ""}
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
              {item.landingpagesquaretiles &&
              item.landingpagesquaretiles?.multiple_malls.length > 0
                ? item.landingpagesquaretiles?.multiple_malls.map(
                    (mall, mindx) => {
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
                    }
                  )
                : null}
            </div>
          </>
        ) : toggle == 3 ? (
          <>
            <div className="cart-mall-name">
              {item.landingpageleaderborads?.multiple_malls &&
              item.landingpageleaderborads?.multiple_malls.length > 0
                ? item.landingpageleaderborads?.multiple_malls.map(
                    (mall, mindx) => {
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
                    }
                  )
                : null}
            </div>
          </>
        ) : toggle == 4 ? (
          <>
            <div className="cart-mall-name">
              {item.leaderboards && item.leaderboards.multiple_malls?.length > 0
                ? item.leaderboards.multiple_malls?.map((mall, mindx) => {
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
        ) : toggle == 5 ? (
          <>
            <div className="cart-mall-name">
              {item.promotionbanners &&
              item.promotionbanners.multiple_malls?.length > 0
                ? item.promotionbanners.multiple_malls?.map((mall, mindx) => {
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
        ) : toggle == 6 ? (
          <>
            <div className="cart-mall-name">
              {item.productbanners &&
              item.productbanners.multiple_malls.length > 0
                ? item.productbanners.multiple_malls.map((mall, mindx) => {
                    return (
                      <div
                        className="select_mall_tag_btns_wrapp select_mall_tag_btns_wrapp-cart"
                        // style={{ width: "100%" }}
                      >
                        <button className="select_mall_tag_single_btn">
                          {mall.malls.name}
                         
                        </button>{" "}
                      </div>
                    );
                  })
                : null}
            </div>
          </>
        ) : toggle == 7 ? 
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
        : null}
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
          <img
            src={images.delete_icon}
            alt="delet icon"
            className="cart-card-delete-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default BrandCartCard;