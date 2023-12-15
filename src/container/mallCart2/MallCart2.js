import React from "react";
import { MallHero } from "../../components";
import { useMallContext } from "../../context/mall_context";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./MallCart2.css";
const MallCart2 = () => {
  const { get_mall_auth_data } = useMallContext();
  return (
    <div className="">
      <div className="">
        <MallHero get_mall_auth_data={get_mall_auth_data} />
      </div>
      <div className="MallCart2_main">
        <div className="">
          <h3 className="h3" style={{ fontWeight: "600" }}>
            V&A Waterfront Mall: Get Your Data!
          </h3>
        </div>
        <div className="">
          <h5 className="h5">
            Select the analytic options you would like to purchase
          </h5>
        </div>
        <div>
          <p>
            By selecting the multiple options below we will be able to
            establilsh your complete &nbsp;
            <Link
              to={""}
              style={{ color: "var(--color-orange)", fontWeight: "700" }}>
              Analytics Dashbboard
            </Link>
          </p>
        </div>
        <div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <div>
              <img src={images.tick} alt="tick" />
            </div>
            <div>
              <p>Track mall page visits on In-store</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <div>
              <img src={images.tick} alt="tick" />
            </div>
            <div>
              <p>Track users in active regions.</p>
            </div>
          </div>
          {/* <div> */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <div>
              <img src={images.tick} alt="tick" />
            </div>
            <div>
              <p>
                Track my mall attractions (brands, eateries, events and
                facilities)
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <div>
              <img src={images.tick} alt="tick" />
            </div>
            <div>
              <p>
                Basic stats (total brands registered, total eateries registered,
                average rating)
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>
            <Link
              to={""}
              style={{ color: "var(--color-orange)", fontWeight: "800" }}>
              Terms and Conditions
            </Link>
            &nbsp; apply.
          </p>
        </div>
        <div style={{ width: "200px" }}>
          <button className="btn btn-orange">
            <img src={images.basket_white} alt="basket_white" />
            &nbsp; Add to basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default MallCart2;
