import React from "react";
import { MallHero } from "../../components";
import { useMallContext } from "../../context/mall_context";
import "./MallCart3.css";
import { Link } from "react-router-dom";

const MallCart3 = () => {
  const { get_mall_auth_data } = useMallContext();

  return (
    <div>
      <div className="">
        <MallHero get_mall_auth_data={get_mall_auth_data} />
      </div>
      <div className="MallCart2_main">
        <h3 className="h3" style={{ fontWeight: "600" }}>
          Thank you for purchasing V&A Waterfront Mall!{" "}
        </h3>
        <p>
          By selecting the multiple options below we will be able to establilsh
          your complete &nbsp;
          <Link
            to={""}
            style={{ color: "var(--color-orange)", fontWeight: "700" }}>
            Analytics Dashbboard
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MallCart3;
