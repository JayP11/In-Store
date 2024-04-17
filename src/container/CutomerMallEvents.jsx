import React, { useEffect, useState } from "react";
import { CustomerHero, CustomerHeroSecond, MallEventCard, MallHero } from "../components";
import { useMallContext } from "../context/mall_context";
import images from "../constants/images";
import { Link } from "react-router-dom";
import { ACCEPT_HEADER, get_mall_customer_event } from "../utils/Constant";
import { BsChevronDown } from "react-icons/bs";

const CutomerMallEvents = ({ getsingalmalldata }) => {
  const { get_mall_auth_data, get_mall_store_data } = useMallContext();


  const perPage = 3;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [getbranddata, SetBrandData] = useState("");
  useEffect(() => {
    EventApi();
  }, [page]);

  const EventApi = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    const formdata = new FormData();
    // await formdata.append("search", "");
    await formdata.append("mall_id", getsingalmalldata.id);
    setLoading(true);
    fetch(get_mall_customer_event + `per_page=${perPage}&page=${page}`, {
      method: "POST",
      body: formdata,
      headers: {
        Accept: ACCEPT_HEADER,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("event_list", res.data.last_page);
        setTotalPages(res.data.last_page);
        setEventList([...eventList, ...res.data.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    console.log("customer side event list", eventList);
  })

  return (
    <div>
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
    </>:<>
    <CustomerHeroSecond getsingalmalldata={getsingalmalldata} />
      <div className="mm_main_wrapp">
        {/* heading */}
        <div className="profile_head_center" style={{ marginBottom: "2rem" }}>
          <h4 className="h3" style={{ textTransform: "capitalize",fontWeight:"600" }}>{getsingalmalldata.name} events</h4>
        </div>

        <div style={{ margin: "1rem auto" }}>
          {/* Signle mall event */}
          <div onClick={() => { }}>
            {eventList && eventList.length > 0
              ? eventList.map((brndItm) => {
                return (
                  <>
                    <MallEventCard
                      img={
                        brndItm.image_path === null
                          ? images.about_hero
                          : brndItm.image_path
                      }
                      name={brndItm.name !== null ? brndItm.name : ""}
                      location={
                        brndItm.location !== null ? brndItm.location : ""
                      }
                      start_date={
                        brndItm.start_date !== null ? brndItm.start_date : ""
                      }
                      end_date={
                        brndItm.end_date !== null ? brndItm.end_date : ""
                      }
                      description={
                        brndItm.description !== null
                          ? brndItm.description
                          : ""
                      }
                    // get_mevent_data={get_mevent_data}
                    />

                    <div className="mm_horizontal_line"></div>
                  </>
                );
              })
              : null}
          </div>
          {/* Signle mall event */}
        </div>
        {totalPages !== page && (
          <button className="view_more_btn" onClick={() => setPage(page + 1)}>
            {loading ? "Loading..." : " Load More "}
            <BsChevronDown />
          </button>
        )}
      </div>
    </>}
      {/* <CustomerHero getsingalmalldata={getsingalmalldata} /> */}
     
    </div>
  );
};

export default CutomerMallEvents;
