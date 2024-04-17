import React, { useEffect, useState } from "react";
import "./MallEvents.css";
import { MallEventCard, MallHero } from "../../components";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { useMallContext } from "../../context/mall_context";
import {
  ACCEPT_HEADER,
  get_mall_event,
  get_mall_past_event,
  get_mall_upcoming_event,
} from "../../utils/Constant";
import { BsChevronDown } from "react-icons/bs";

const MallEvents = ({ setTab, setEventId, SetEventData }) => {
  const { get_mall_auth_data, get_mall_store_data, DeleteEventApi } =
    useMallContext();

  const [view, setView] = useState(1);

  const [eventList1, setEventList1] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const perPage1 = 3;
  const [totalPages1, setTotalPages1] = useState(1);
  const [page1, setPage1] = useState(1);

  useEffect(() => {
    EventPassApi();
  }, [page1]);

  const EventPassApi = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    setLoading1(true);
    fetch(get_mall_past_event + `?per_page=${perPage1}&page=${page1}`, {
      method: "GET",
      headers: {
        Accept: ACCEPT_HEADER,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("resss", res);
        setTotalPages1(res.data.last_page);
        setEventList1([...eventList1, ...res.data.data]);
        setLoading1(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(false);
  const perPage = 3;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    EventApi();
  }, [page]);

  const EventApi = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    setLoading(true);
    fetch(get_mall_upcoming_event + `?per_page=${perPage}&page=${page}`, {
      method: "GET",
      headers: {
        Accept: ACCEPT_HEADER,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setTotalPages(res.data.last_page);
        setEventList([...eventList, ...res.data.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
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
          <div className="">
            <MallHero get_mall_auth_data={get_mall_auth_data} />
          </div>

          <div className="mm_main_wrapp mm_main_wrapp_padding_event">
            {/* mall management name start */}
            <div className="mall_name_wrapp mall_mall_name_wrapp mall_mall_name_wrapp_2" style={{ paddingLeft: "0rem" }}>
              <p className="mall_name_heading mall_mall_name_heading">{get_mall_auth_data.name}:</p>
              <span className="mall_mall_name_heading" style={{ fontWeight: "600" }}>Events</span>
            </div>
            <div className="mallevents_filter_main">
              <div
                className="mallevents_filter"
                onClick={() => {
                  setView(1);
                }}
                style={{
                  backgroundColor: view == 1 ? "black" : "white",
                  color: view == 1 ? "white" : "black",
                  cursor: "pointer",
                }}
              >
                <h5 className="h5 h5size_event">Upcoming Events</h5>
              </div>
              <div
                className="mallevents_filter"
                onClick={() => {
                  setView(2);
                }}
                style={{
                  backgroundColor: view == 2 ? "black" : "white",
                  color: view == 2 ? "white" : "black",
                  cursor: "pointer",
                }}
              >
                <h5 className="h5 h5size_event">Past Events</h5>
              </div>
            </div>
            <div
              className="mm_horizontal_line"
              style={{ marginTop: "0rem", marginBottom: "2rem" }}
            ></div>
            {/* mall management name end */}

            {view == 1 ? (
              <>
                {eventList && eventList.length > 0
                  ? eventList.map((item, index) => {
                    console.log("get event data 123", item);
                    return (
                      <div
                        onClick={() => {
                          // setTab(11);
                          setEventId(item.id);
                          // setEventList(item);
                          SetEventData(item);
                        }}
                        key={item.id}
                      >
                        <MallEventCard
                          id={item.id}
                          img={item.image_path}
                          name={item.name}
                          location={item.location}
                          start_date={item.start_date}
                          end_date={item.end_date}
                          description={item.description && item.description}
                          eventList={eventList}
                          edit_btns={true}
                          setTab={setTab}
                          EventApi={EventApi}
                          setEventId={setEventId}
                        />
                        <div className="mm_horizontal_line"></div>
                      </div>
                    );
                  })
                  : null}
              </>
            ) : (
              <>
                {eventList1 && eventList1.length > 0
                  ? eventList1.map((item, index) => {
                    return (
                      <div
                        onClick={() => {
                          // setTab(11);
                          setEventId(item.id);
                          // setEventList(item);
                          SetEventData(item);
                        }}
                        key={item.id}
                      >
                        <MallEventCard
                          id={item.id}
                          img={item.image_path}
                          name={item.name}
                          location={item.location}
                          start_date={item.start_date}
                          end_date={item.end_date}
                          description={item.description && item.description}
                          eventList={eventList1}
                          edit_btns={true}
                          setTab={setTab}
                          EventApi={EventPassApi}
                          setEventId={setEventId}

                        />
                        <div className="mm_horizontal_line"></div>
                      </div>
                    );
                  })
                  : null}
              </>
            )}

            {view == 1 ? (
              <>
                {totalPages !== page && (
                  <button
                    className="view_more_btn"
                    onClick={() => setPage(page + 1)}
                  >
                    {loading ? "Loading..." : " Load More "}
                    <BsChevronDown />
                  </button>
                )}
              </>
            ) : (
              <>
                {totalPages1 !== page1 && (
                  <button
                    className="view_more_btn"
                    onClick={() => setPage1(page1 + 1)}
                  >
                    {loading1 ? "Loading..." : " Load More "}
                    <BsChevronDown />
                  </button>
                )}
              </>
            )}

            {/*  Add New Button start */}
            <Link
              to=""
              className="leaderboard-btn"
              style={{ justifyContent: "flex-end", fontWeight: "700" }}
              onClick={() => setTab(13)}
            >
              Add new event{" "}
              <img src={images.add_new} className="leaderboard-btn-icon" />
            </Link>
            {/*  Add New Button end */}
          </div>
        </>)}
    </>
  );
};

export default MallEvents;