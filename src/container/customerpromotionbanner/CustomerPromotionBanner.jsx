import React, { useEffect, useState } from "react";
import "./CustomerPromotionBanner.css";
import {
  CustomerPromotionalSingCarg,
  MallHero,
  PromotionHero,
} from "../../components";
import images from "../../constants/images";
import {
  ACCEPT_HEADER,
  get_mall_customer_leaderboard,
  get_mall_customer_promotional,
} from "../../utils/Constant";
import { BsChevronDown } from "react-icons/bs";
import { CustomerNavbar } from "../../common";
import { useCustomerContext } from "../../context/customer_context";
const CustomerPromotionBanner = ({
  getsingalmalldata,
  setTab,
  SetProId,
  SetBrandId,
  navbardata
}) => {

  useEffect(() => {
    LederboadnApi();
  }, []);



  const perPage = 3;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const [proList, setProList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    PromationApi();
  }, [page]);

  const [getdprodata, SetProdata] = useState([]);

  const LederboadnApi = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    const formdata = new FormData();
    // await formdata.append("search", "");
    await formdata.append("mall_id", getsingalmalldata.id);

    fetch(get_mall_customer_leaderboard, {
      method: "POST",
      body: formdata,
      headers: {
        Accept: ACCEPT_HEADER,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("123445", res.data);
        SetProdata(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };


  const PromationApi = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    const formdata = new FormData();
    // await formdata.append("search", "");
    await formdata.append("mall_id", getsingalmalldata.id);
    setLoading(true);
    fetch(get_mall_customer_promotional + `per_page=${perPage}&page=${page}`, {
      method: "POST",
      body: formdata,
      headers: {
        Accept: ACCEPT_HEADER,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("ffff", res.data.last_page);
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
      <div>
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
            <div className="">
              <PromotionHero getdprodata={getdprodata} />
            </div>
            <div className="mm_main_wrapp">
              <div className="cust-promotional-main-wrapp">
                {proList.map((x, i) => {
                  console.log("prolist", x);
                  return (
                    <CustomerPromotionalSingCarg
                      x={x}
                      setTab={setTab}
                      SetProId={SetProId}
                      SetBrandId={SetBrandId}
                    />
                  );
                })}
              </div>
              {totalPages !== page && (
                <button
                  className="view_more_btn"
                  onClick={() => setPage(page + 1)}
                >
                  {loading ? "Loading..." : "Load More"}
                  <BsChevronDown />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CustomerPromotionBanner;