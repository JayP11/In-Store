import React from "react";
import images from "../../constants/images";
import "./MallCart.css";

const MallCart = () => {
  return (
    <div className="MallCart_main">
      <div>
        <h1 className="h1" style={{ fontWeight: "600" }}>
          V&A Waterfront: My Cart
        </h1>
      </div>
      <div>
        <h5 className="h5">Analytics</h5>
      </div>
      <div className="mallcart_items_main">
        <div>
          <h6 className="h6" style={{ fontWeight: "600" }}>
            V&A Warterfront Mall Analytics Bundle
          </h6>
        </div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <div>
            <h6 className="h6" style={{ fontWeight: "600" }}>
              R 4800
            </h6>
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <p>Remove</p>
            <div className="cartdelete_icon_main">
              <img
                src={images.delete_icon}
                alt="delete_icon"
                className="cartdelete-icon_inner"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mallcart_carttotal_checkoutbtn">
        <div>
          <h4 className="h4">Total R4800</h4>
        </div>

        <div style={{ alignSelf: "flex-end" }}>
          <button className="btn btn-black">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default MallCart;
