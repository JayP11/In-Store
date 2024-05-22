import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import "./ArchivesCinema.css";
import {
  ACCEPT_HEADER,
  get_mall_cart,
  mall_cart_remove_item,
  new_analytic_archive,
} from "../../utils/Constant";
import axios from "axios";
import Notification from "../../utils/Notification";

const ArchivesCinema = ({ setTab,get_mall_auth_data }) => {
  const [getCartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mainName, setMainName] = useState(
    // get_mall_auth_data &&
    //   get_mall_auth_data.retailers &&
    //   get_mall_auth_data.retailers.name !== null
    //   ? get_mall_auth_data.retailers.name
    //   : ""
    get_mall_auth_data &&
      get_mall_auth_data.name &&
      get_mall_auth_data.name
  );

  useEffect(() => {
    getCartDataApi();
  }, []);

  const getCartDataApi = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    setLoading(true);
    axios
      .get(new_analytic_archive, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        setLoading(false);
        if (res.data.success == 1) {
          setCartData(res.data.data);
        } else {
          null();
        }
      })
      .catch((err) => {
        console.log("err11", err);
        setLoading(false);
      });
  };

  const checkout = (price) => {
    localStorage.setItem("checkoutproce", JSON.stringify(price));
    setTab(24);
  };

  const removeMallCartApi = async (id) => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    const formdata = new FormData();
    await formdata.append("id", id);

    console.log("-=-=-=->", formdata);
    axios
      .post(mall_cart_remove_item, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          Notification("success", "Success!", "Remove to Cart Successfully!");
          setTab(21);
          getCartDataApi();
        } else {
          null();
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  return (
    <>
      {loading === true ? (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="MallCart_main" style={{ gap: "2rem" }}>
            <div>
              <h1 className="h3" style={{ fontWeight: "600" }}>
                {mainName}: My Analytics Archives
              </h1>
            </div>
            <div>
              <h5 className="h5" style={{ fontWeight: "600" }}>
                Analytics Bundle
              </h5>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}>
              {getCartData && getCartData.length <= 0 ? <>
              <p style={{color:"#000",fontWeight:"600",fontSize:"18px"}}>No Data Found.</p>
              </> : <>
                {getCartData.map((item,index)=>{
                  return(
                    <>
                    <div
                className="mallcart_items_main"
                style={{ borderColor: "gray" }}>
                <h5 style={{ fontWeight: "600" }}>
                {}
                </h5>
              </div>

                    </>
                  )
                })}
              </>}
              {/* <div
                className="mallcart_items_main"
                style={{ borderColor: "gray" }}>
                <h5 style={{ fontWeight: "600" }}>
                  Ster Kinekor Cinema Analytics Bundle : June 2024
                </h5>
              </div> */}
              
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ArchivesCinema;
