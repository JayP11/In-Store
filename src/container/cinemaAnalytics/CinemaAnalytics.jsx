import React, { useEffect, useState } from "react";
import { MallHero } from "../../components";
import { useMallContext } from "../../context/mall_context";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./CinemaAnalytics.css";
import {
  ACCEPT_HEADER,
  add_mall_cart,
  create_analytic_bundle,
  get_mall_analytic,
  get_ratecard_child,
} from "../../utils/Constant";
import axios from "axios";
import Notification from "../../utils/Notification";
import { useStoreContext } from "../../context/store_context";
import { DateRangePicker } from "rsuite";
import moment from "moment";

const CinemaAnalytics = ({ setTab,get_mall_auth_data }) => {
  // const { get_mall_auth_data } = useMallContext();
  const { CreateAnalyticBundleApi } = useStoreContext();

  const [getCartData, setCartData] = useState([]);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [loading, setLoading] = useState(false);

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  const onDateChage = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    const mmm = moment(start).format("MMM");
    console.log("s", mmm);

    if (montharray.includes(start)) {
      console.log("yesss");
    } else {
      console.log("nooooo");
    }
  };

  // const handleDateChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // };

  const handleDateChange = (startDate, endDate) => {
    console.log("==>", startDate, endDate);
    setSelectedDates({ startDate, endDate });
  };

  const { allowedMaxDays, beforeToday, combine } = DateRangePicker;

  const maxDate = startDate ? new Date(startDate) : null;
  if (maxDate) {
    maxDate.setDate(maxDate.getDate() + 7);
  }

  // Calculate the minimum and maximum dates for a one-week range
  const today = new Date();
  const oneWeekLater = new Date(today);
  oneWeekLater.setDate(oneWeekLater.getDate() + 7);
  const { getBrand } = useMallContext();
  // Helper function to check if a date is a Monday
  const isMonday = (date) => {
    return moment(date).isoWeekday() === 1;
  };

  // Helper function to check if a date is a Sunday
  const isSunday = (date) => {
    return moment(date).isoWeekday() === 7;
  };

  // Helper function to check if the selected range is valid
  const isRangeValid = (start, end) => {
    if (!start || !end) {
      return false; // No selection made
    }

    // Check if the range is exactly 7 days
    return moment(end).diff(moment(start), "days") === 6;
  };

  // Event handler for selecting the start date
  const handleStartDateChange = (date) => {
    setStartDate(date);

    // Calculate the end date based on the selected start date
    const nextSunday = moment(date).endOf("isoWeek").toDate();
    if (isRangeValid(date, nextSunday)) {
      setEndDate(nextSunday);
    } else {
      setEndDate(null);
    }
  };

  // Event handler for selecting the end date
  // const handleEndDateChange = (date) => {
  //   if (isRangeValid(startDate, date)) {
  //     setEndDate(date);
  //   }
  // };

  const [montharray, SetMonthArray] = useState([]);

  function getMondaysInMonth(month) {
    console.log("month-->", month);
    const firstDayOfMonth = moment().month(month).startOf("month");
    const lastDayOfMonth = moment().month(month).endOf("month");

    const mondaysInMonth = [];

    // Iterate over the days in the month and add the Mondays to the array.
    for (
      let day = firstDayOfMonth;
      day.isSameOrBefore(lastDayOfMonth);
      day.add(1, "day")
    ) {
      if (day.day() === 1) {
        // console.log(JSON.stringify(day.clone(), null, 2));
        mondaysInMonth.push(day.clone());
      }
    }
    // console.log("mondaysInMonth-->", mondaysInMonth);
    SetMonthArray(mondaysInMonth);
    // Return the array of Mondays in the month.
    return mondaysInMonth;
  }

  useEffect(() => {
    getCartDataApi();
  }, []);

  const getCartDataApi = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    setLoading(true);
    axios
      .get(get_ratecard_child, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        setLoading(false);
        if (res.data.success == 1) {
          setCartData(res.data.data);
        } else {
          null();
        }
      })
      .catch((err) => {
        console.log("err11", err);
        setLoading(false);
      });
  };

  const addtocart = async (id) => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    const formdata = new FormData();
    await formdata.append("analytic_bundle_id", id);

    console.log("-=-=-=->", formdata);
    axios
      .post(add_mall_cart, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          Notification("success", "Success!", "Add to Cart Successfully!");
          setTab(21);
        } else {
          null();
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  const CreateLeaderBoardBanner = async (id) => {
    setTab(26);

    const { startDate, endDate } = selectedDates;
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
            <div className="">
              {/* <MallHero get_mall_auth_data={get_mall_auth_data} /> */}
            </div>
            <div className="MallCart2_main MallCart2_main_styling">
              <div className="">
                <h3 className="h3" style={{ fontWeight: "600" }}>
                {get_mall_auth_data.name}: Get Your Data!{" "}
                </h3>
              </div>
              <div className="">
                <h5 className="h5" style={{ fontWeight: "600" }}>
                  Analytics bundles include a variety of essential digital
                  marketing data
                  {/* Select the analytic options you would like to purchase */}
                </h5>
              </div>
              <div>
                <p style={{ fontWeight: "300" }}>
                  {/* By selecting the multiple options below we will be able to
                    establilsh your complete */}
                  Your complete
                  <Link
                    to={""}
                    style={{ color: "var(--color-orange)", fontWeight: "600" }}>
                    &nbsp; Analytics Dashboard&nbsp;
                  </Link>
                  will allow you to track your monthly promotions and consumer
                  data...
                </p>
              </div>

              {getCartData.length > 0
                ? getCartData.map((item) => {
                    return (
                      <>
                        <div>
                          <div style={{ display: "flex", gap: "0.5rem" }}>
                            <div>
                              <img src={images.tick} alt="tick" />
                            </div>
                            <div>
                              <p>{item.name}</p>
                            </div>
                          </div>
                          {/* <div style={{ display: "flex", gap: "0.5rem" }}>
                            <div>
                              <img src={images.tick} alt="tick" />
                            </div>
                            <div>
                              <p>{item.option2}</p>
                            </div>
                          </div>
                          <div style={{ display: "flex", gap: "0.5rem" }}>
                            <div>
                              <img src={images.tick} alt="tick" />
                            </div>
                            <div>
                              <p>{item.option3}</p>
                            </div>
                          </div>
                          <div style={{ display: "flex", gap: "0.5rem" }}>
                            <div>
                              <img src={images.tick} alt="tick" />
                            </div>
                            <div>
                              <p>{item.option4}</p>
                            </div>
                          </div> */}
                        </div>

                        

                        {/* <div className="leaderboard-card-inpbox-wrapp leaderboard-card-inpbox-wrapp-mall">
                          <label className="leaderboard-card-lbl" htmlFor="">
                            Month
                          </label>

                          <DateRangePicker
                            style={{ color: "#111" }}
                            oneTap
                            hoverRange="month"
                            isoWeek
                            placeholder="Select your Month"
                            className="leaderboard-card-inp DateRangePicker_LeaderboardCard"
                            onChange={handleDateChange}
                            disabledDate={combine(
                              allowedMaxDays(30),
                              beforeToday()
                            )}
                          />
                        </div> */}

                        
                      </>
                    );
                  })
                : null}

                <div style={{ paddingTop: "1.5rem" }}>
                          <p>
                            <span
                              style={{
                                color: "var(--color-orange)",
                                fontWeight: "800",
                              }}>
                              Terms and Conditions
                            </span>
                            &nbsp; apply.
                          </p>
                        </div>

                <div style={{ width: "300px" }}>
                          <button
                            className="btn btn-orange"
                            onClick={() => {
                              CreateLeaderBoardBanner(item.id);
                            }}>
                            <img src={images.basket_white} alt="basket_white" />
                            &nbsp; Buy Analytics Bundles
                          </button>
                        </div>

             

                  

              {/* 
        {getCartData.map((item)=>{
          
         <p>{item}</p>
        })}
         */}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CinemaAnalytics;
