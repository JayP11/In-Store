import React, { useEffect, useState } from "react";
import "./CustomerFacility.css";
import images from "../../constants/images";
import { CustomerFacilityCard, CustomerHeroSecond } from "../../components";
import { ACCEPT_HEADER, get_mall_facelity_customer } from "../../utils/Constant";
const CustomerFacility = ({ getsingalmalldata }) => {

  const FacilitiesData = [
    {
      id: 1,
      img: images.wcard_1,
      logo: images.facilities_logo6,
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortist lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetuer. ",
      bgcolor: "#4397ff",
      heading: "Free WIFI",
    },
    {
      id: 2,
      img: images.wcard_2,
      logo: images.facilities_logo4,
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortist lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetuer. ",
      bgcolor: "#ff8b00",
      heading: "Tag & Go Parking",
    },
    {
      id: 3,
      img: images.wcard_3,
      logo: images.facilities_logo1,
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortist lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetuer. ",
      bgcolor: "#d813a5",
      heading: "Baby Change Rooms",
    },
    {
      id: 4,
      img: images.wcard_1,
      logo: images.facilities_logo3,
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortist lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetuer. ",
      bgcolor: "#4397ff",
      heading: "Family Rooms",
    },
    {
      id: 5,
      img: images.wcard_2,
      logo: images.facilities_logo2,
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortist lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetuer. ",
      bgcolor: "#ff8b00",
      heading: "Wheel Chairs Available",
    },
    {
      id: 6,
      img: images.wcard_3,
      logo: images.facilities_logo5,
      des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortist lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetuer. ",
      bgcolor: "#d813a5",
      heading: "Prayer Room",
    },
  ];

  const [getfacilitydata, Setfacilitydata] = useState("");

  const perPage = 3;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const [proList, setProList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    CustomerFacilityApi();
  }, [page]);


  const CustomerFacilityApi = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    const formdata = new FormData();
    // await formdata.append("search", "");
    await formdata.append("mall_id", getsingalmalldata.id);
    setLoading(true);
    fetch(get_mall_facelity_customer + `per_page=${perPage}&page=${page}`, {
      method: "POST",
      body: formdata,
      headers: {
        Accept: ACCEPT_HEADER,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Brand_list", res.data.last_page);
        setTotalPages(res.data.last_page);
        setProList([...proList, ...res.data.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
<>
    {loading === true ? <>
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

    </> : 

    <div>

    <CustomerHeroSecond getsingalmalldata={getsingalmalldata} />

    <div className="mm_main_wrapp">
      {/* <div className="mall_name_wrapp"> */}
      <div className="mall-near-me-sub-flex">
        <p className="mall_name_heading">{getsingalmalldata.name} facilities</p>
      </div>
      <span></span>
      {/* </div> */}
      {/* <div className="mm_horizontal_line"></div> */}
      <div className="facilities_cards_wrapp">
        {proList && proList.length > 0
          ? proList.map((brndItm) => {
            return (
              <CustomerFacilityCard item={brndItm} />
            );
          })
          : null}
      </div>
    </div>
  </div>
  }
  </>
  
  );
};

export default CustomerFacility;
