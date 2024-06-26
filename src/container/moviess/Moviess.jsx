import React, { useEffect, useState } from "react";
import { CustomerHero, CustomerHeroSecond, MoviesCard } from "../../components";
import { HiOutlineSearch } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import "./Moviess.css";
import {
  ACCEPT_HEADER,
  get_mall_cinema_customer,
  get_movie_list,
} from "../../utils/Constant";
import axios from "axios";
import CustomerHeroCinema from "../../components/CustomerHeroCinema";

const Moviess = ({ setTab, getsingalmalldata }) => {
  useEffect(() => {
    getmovielist();
  }, []);

  const [getlist, SetList] = useState([]);
  const [getlist2, SetList2] = useState();
  const [loading, SetLoading] = useState(false);

  const getmovielist = async () => {
    SetLoading(true);
    const token = JSON.parse(localStorage.getItem("is_token"));

    const formdata = new FormData();
    // await formdata.append("search", "");
    await formdata.append("mall_id", getsingalmalldata.id);

    axios
      .post(get_mall_cinema_customer, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("parth-->>", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          SetList(res.data.data.data);
          SetList2(res.data.data.cinema);
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

  return (
    <div>
      <div>
        {/* <CustomerHero getsingalmalldata={getsingalmalldata} /> */}
        {/* <CustomerHeroSecond getsingalmalldata={getsingalmalldata} /> */}
        <CustomerHeroCinema getlist2={getlist2} />
        <div className="mm_main_wrapp" style={{ marginTop: "3.2rem" }}>
          <div className="profile_head_center movies-cus-head">
            <h4
              className="h3"
              style={{ textTransform: "capitalize", fontWeight: "600" }}
            >
              {getsingalmalldata.name}
            </h4>{" "}
            <span className="h3" style={{ fontWeight: "600" }}>
              Movies
            </span>
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
              <div className="movies_card_wrapp">
                {getlist && getlist.length > 0
                  ? getlist.map((item, index) => {
                      return <MoviesCard item={item} />;
                    })
                  : null}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Moviess;