import React, { useEffect, useState } from "react";
import "./CustomerBrandItems.css";
import {
  CustomerBrandCard,
  CustomerHeroSecond,
  CustomerProductTilesHero,
  MallHero,
} from "../../components";
import { useMallContext } from "../../context/mall_context";
import { HiOutlineSearch } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import {
  ACCEPT_HEADER,
  get_product_customer,
  product_banner_tiles_customer,
  product_cus_tile,
} from "../../utils/Constant";
import axios from "axios";
import { IoChevronBack } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerBrandItems = ({ setTab, proid, brandid, sidebaropen,getStoreName }) => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { get_mall_auth_data, get_mall_store_data } = useMallContext();

  const [getid, setid] = useState("");

  // useEffect(() => {
  //   getmovielist();
  //   getproductbanner()
  // }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("malldata"));
    console.log("======>123", data);

    getmovielist(data.id);
    getproductbanner(data.id);
  }, []);

  const [getlist, SetList] = useState([]);
  const [loading, SetLoading] = useState(false);

  const [getlist1, SetList1] = useState([]);
  const [loading1, SetLoading1] = useState(false);

  const getproductbanner = async (id) => {
    SetLoading1(true);
    const token = JSON.parse(localStorage.getItem("is_token"));

    const formdata = new FormData();
    formdata.append("mall_id", id);
    formdata.append("store_id", brandid);

    console.log("formdata", id, brandid);

    axios
      .post(get_product_customer, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(
          "getproductbanner---->>L>",
          JSON.stringify(res.data.data, null, 2)
        );
        if (res.data.success == 1) {
          SetList1(res.data.data);
         
          SetLoading1(false);
        } else {
          null;
          SetLoading1(false);
        }
      })
      .catch((err) => {
        console.log("err11", err);
        SetLoading(false);
      });
  };

  // const getmovielist = async (id) => {
  //   setid(id);
  //   SetLoading(true);
  //   const token = JSON.parse(localStorage.getItem("is_token"));

  //   const formdata = new FormData();
  //   formdata.append("mall_id", id);
  //   formdata.append("brand_id", brandid);

  //   console.log("formdata", id, brandid);

  //   axios
  //     .post(product_cus_tile, formdata, {
  //       headers: {
  //         Accept: ACCEPT_HEADER,
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //     .then((res) => {
  //       console.log("ggg", JSON.stringify(res.data, null, 2));
  //       if (res.data.success == 1) {
  //         SetList(res.data.data);
  //         setBranchArray(res.data.data);
  //         SetLoading(false);
  //       } else {
  //         null;
  //         SetLoading(false);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("err11", err);
  //       SetLoading(false);
  //     });
  // };
  const getmovielist = async (id) => {
    setid(id);
    SetLoading(true);
    const token = JSON.parse(localStorage.getItem("is_token"));

    const formdata = new FormData();
    formdata.append("mall_id", id);
    formdata.append("store_id", brandid);

    console.log("formdata", id, brandid);

    axios
      .post(product_banner_tiles_customer, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          SetList(res.data.data);
          setBranchArray(res.data.data);
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

  const [task_arrayholder, setBranchArray] = useState([]);
  const searchFilter_branch = (text) => {
    const newData = task_arrayholder.filter(function (item) {
      const employee = item.title ? item.title.toUpperCase() : "".toUpperCase();

      const employee2 = item.stores?.name
        ? item.stores?.name.toUpperCase()
        : "".toUpperCase();
      const textData = text.toUpperCase();
      return (
        employee.indexOf(textData) > -1 || employee2.indexOf(textData) > -1
      );
    });
    SetList(newData);
  };

  return (
    <div>
      <Slider {...settings}>
        {getlist1 && getlist1.length > 0
          ? getlist1.map((item, index) => {
            
              return (
       
             
                <CustomerProductTilesHero
                  item={item}
                  sidebaropen={sidebaropen}
                />

              );
            })
          : null}
      </Slider>
      <div className="mm_main_wrapp">
        <div className="edit-brand-back-iconbox" onClick={() => setTab(2)} style={{paddingLeft:"0.5rem"}}>
          <IoChevronBack className="edit-brand-back-icon" />{" "}
          <p className="edit-brand-back-txt">Back</p>
        </div>
        <div className="single-brand-product-head" style={{paddingLeft:"0.5rem"}}>
          <div className="single-brand-product-head-search-flex" style={{gap:"0.5rem"}}>
            <p className="single-brand-product-head-search-txt">
              {/* Search GUESS: */}
              Search {getStoreName}:
            </p>
            <div className="mall_near_brand_searchbar single-brand-product-searchbar">
              <input
                type="text"
                className="mall-near-me-searchbox"
                placeholder="Search"
                onChange={(e) => {
                  searchFilter_branch(e.target.value);
                  // e.target.value.length > 0
                  //   ? (getmovielistserch(e.target.value), SetList([]))
                  //   : (SetList([]), getmovielist());
                }}
              />
              <HiOutlineSearch color="var(--color-orange)" size={18} />
            </div>
          </div>
          <div className="find-my-way-btn-flex">
            <button className="find-my-way-btn" onClick={()=>{setTab(29)}}>Find my way</button>
            <BsArrowRight className="find-my-way-btn-arrow" />
          </div>
        </div>

        {loading === true ? (
          <div
            style={{
              width: "100%",
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="loader"></div>
          </div>
        ) : (
          <>
            <div className="customer_brands_wrapp">
              {getlist && getlist.length > 0
                ? getlist.map((item, index) => {
                    return (
                      <CustomerBrandCard
                        data={item}
                        getmovieapi={getmovielist}
                        replce={1}
                        mainitem={""}
                        getid={getid}
                      />
                    );
                  })
                : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerBrandItems;