import React, { useEffect, useState } from "react";
import "./MallEvents.css";
import { MallEventCard, MallHero } from "../../components";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { useMallContext } from "../../context/mall_context";
import { ACCEPT_HEADER, get_mall_event } from "../../utils/Constant";
import { BsChevronDown } from "react-icons/bs";

const MallEvents = ({ setTab, setEventId, SetEventData }) => {
  const { get_mall_auth_data, get_mall_store_data, DeleteEventApi } =
    useMallContext();

  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(false);
  const perPage = 3;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const [view, setView] = useState(1);

  const EventApi = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    setLoading(true);
    fetch(get_mall_event + `?per_page=${perPage}&page=${page}`, {
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

  useEffect(() => {
    EventApi();
  }, [page]);

  return (
    <>
      <div className="">
        <MallHero get_mall_auth_data={get_mall_auth_data} />
      </div>

      <div className="mm_main_wrapp">
        {/* mall management name start */}
        <div className="mall_name_wrapp">
          <p className="mall_name_heading">{get_mall_auth_data.name}:</p>
          <span>Events</span>
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
            }}>
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
            }}>
            <h5 className="h5 h5size_event">Past Events</h5>
          </div>
        </div>
        <div
          className="mm_horizontal_line"
          style={{ marginTop: "0rem", marginBottom: "2rem" }}></div>
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
                      key={item.id}>
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
                      />
                      <div className="mm_horizontal_line"></div>
                    </div>
                  );
                })
              : null}
          </>
        ) : (
          <>1</>
        )}

        {totalPages !== page && (
          <button className="view_more_btn" onClick={() => setPage(page + 1)}>
            {loading ? "Loading..." : " Load More "}
            <BsChevronDown />
          </button>
        )}

        {/*  Add New Button start */}
        <Link
          to=""
          className="leaderboard-btn"
          style={{ justifyContent: "flex-end" }}
          onClick={() => setTab(13)}>
          Add new <img src={images.add_new} className="leaderboard-btn-icon" />
        </Link>
        {/*  Add New Button end */}
      </div>
    </>
  );
};

export default MallEvents;
