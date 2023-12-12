import React, { useState } from "react";
import "./BrandInMall.css";
import { GrFormDown, GrFormSearch, GrFormUp } from "react-icons/gr";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BrandInMallCard, BrandItmCard } from "../../components";
import images from "../../constants/images";
import { BsArrowRight } from "react-icons/bs";

const AccordionData = [
  {
    id: 1,
    city: "Western Cape",
    mall: [
      {
        id: 1,
        name: "Bayside Mall",
      },
      {
        id: 2,
        name: "Blue Route Mall",
      },
      {
        id: 3,
        name: "Boulevard Square",
      },
    ],
  },
  {
    id: 2,
    city: "KZN",
    mall: [
      {
        id: 1,
        name: "Brackenfell Centre",
      },
      {
        id: 2,
        name: "Brackenfell Corner",
      },
      {
        id: 3,
        name: "Brackenfell Shopping Centre",
      },
    ],
  },
  {
    id: 3,
    city: "Eastern Cape",
    mall: [
      {
        id: 1,
        name: "Canal Walk",
      },
      {
        id: 2,
        name: "Cape Quarter",
      },
      {
        id: 3,
        name: "Cape Gate",
      },
    ],
  },
  {
    id: 4,
    city: "Free State",
    mall: [
      {
        id: 1,
        name: "Delft Mall",
      },
      {
        id: 2,
        name: "De Ville Centre",
      },
      {
        id: 3,
        name: "Durbanville Town Centre",
      },
    ],
  },
];

const BrandData = [
  {
    id: 1,
    img: images.sl1,
  },
  {
    id: 2,
    img: images.sl2,
  },
  {
    id: 3,
    img: images.sl3,
  },
  {
    id: 4,
    img: images.sl4,
  },
  ,
  {
    id: 5,
    img: images.sl5,
  },
  {
    id: 6,
    img: images.sl6,
  },
];

const BrandInMall = ({ setTab }) => {
  const [toggle, setToggle] = useState(null);

  const handleChange = (e) => {
    console.log("eeee", e.traget.value);
  };
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };
  return (
    <div className="mm_main_wrapp">
      <div className="mall_name_wrapp">
        <p className="mall_name_heading">TRUWORTHS: </p>
        <span>My Brands in Malls</span>
      </div>
      <button className="upload_retail_btn" onClick={() => setTab(24)}>
        Upload Retailer Directory{" "}
        <BsArrowRight size={20} style={{ marginLeft: "10px" }} />
      </button>
      <div className="mm_horizontal_line"></div>
      <div className="brandinmall_sec_wrapp">
        <div className="brandinmall_part_1">
          <div className="search_box_wrapp">
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              placeholder="Search"
              className="input_box"
            />
            <GrFormSearch className="search_box_icon" size={20} style={{ top: "12px" }} />
          </div>
          <p className="barnd_mall_title_name">My Brands in Malls:</p>
          {AccordionData && AccordionData.length > 0
            ? AccordionData.map((item, index) => {
              return (
                <div className="bim_accordian_wrapp" key={item.id}>
                  <button
                    className="bim_accordian_btn"
                    onClick={() => handleToggle(item.id)}
                  >
                    <p
                      style={{
                        color: item.id === toggle ? "#ff8b00" : "#000",
                        fontWeight: item.id === toggle ? "500" : "300",
                      }}
                    >
                      {item.city}
                    </p>
                    {item.id === toggle ? (
                      <IoIosArrowUp size={20} color="#ff8b00" />
                    ) : (
                      <IoIosArrowDown size={20} />
                    )}
                  </button>
                  {item.id === toggle ? (
                    <div className="bim_accordian_mall_wrapp">
                      {item.mall.map((itm, ind) => {
                        return <button key={itm.id}>{itm.name}</button>;
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })
            : null}
        </div>
        <div className="brandinmall_part_2">
          {BrandData && BrandData.length > 0
            ? BrandData.map((brndItm) => {
              return <BrandInMallCard img={brndItm.img} key={brndItm.id} setTab={setTab} />;
            })
            : null}
        </div>
      </div>
    </div>
  );
};

export default BrandInMall;
