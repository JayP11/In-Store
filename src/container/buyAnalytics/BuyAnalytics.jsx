import React, { useEffect, useState } from "react";
import { MallHero } from "../../components";
import { useMallContext } from "../../context/mall_context";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./BuyAnalytics.css";
import {
  ACCEPT_HEADER,
  add_mall_cart,
  create_analytic_bundle,
  get_mall_analytic,
  mall_create_analitic_bundle,
} from "../../utils/Constant";
import axios from "axios";
import Notification from "../../utils/Notification";
import { useStoreContext } from "../../context/store_context";
import { DateRangePicker } from "rsuite";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaArrowsAltV } from "react-icons/fa";

const BuyAnalytics = ({ setTab }) => {
  const [getToggle, setToggle] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const { get_mall_auth_data } = useMallContext();
  const { CreateAnalyticBundleApi } = useStoreContext();

  const [getCartData, setCartData] = useState([]);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [loading, setLoading] = useState(false);
  
  const [getToggle1, setToggle1] = useState(false);
  const [getToggle2, setToggle2] = useState(false);
  const [getToggle3, setToggle3] = useState(false);


  const MONTH = [
    { id: 1, label: "January", disabled: true },
    { id: 2, label: "February", disabled: true },
    { id: 3, label: "March", disabled: false },
    { id: 4, label: "April", disabled: false },
    { id: 5, label: "May", disabled: false },
    { id: 6, label: "June", disabled: false },
    { id: 7, label: "July", disabled: false },
    { id: 8, label: "August", disabled: false },
    { id: 9, label: "September", disabled: false },
    { id: 10, label: "October", disabled: false },
    { id: 11, label: "November", disabled: false },
    { id: 12, label: "December", disabled: false },
  ];

  const getCurrentMonthIndex = () => moment().month();




  const [selectedItems, setSelectedItems] = useState([]); // pass formdata this value in month

  const handleCheck = (id, index, lebal) => {
    let updatedSelectedItems = [...selectedItems];
    const selectedIndex = updatedSelectedItems.findIndex(
      (selected) => selected.id === id
    );
    if (selectedIndex !== -1) {
      updatedSelectedItems.splice(selectedIndex, 1);
    } else {
      updatedSelectedItems.push({ id, index, lebal });
    }
    setSelectedItems(updatedSelectedItems);
  };

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
  const handleEndDateChange = (date) => {
    if (isRangeValid(startDate, date)) {
      setEndDate(date);
    }
  };

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
    console.log("mondaysInMonth-->", mondaysInMonth);
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
      .get(get_mall_analytic, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        // console.log("ggg", JSON.stringify(res.data, null, 2));
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
    // await formdata.append("analytic_bundle_id", id);
    for (var i = 0; i < selectedItems.length; i++) {
             await formdata.append("month[" + i + "]",`${0}${selectedItems[i].index}`);
           }
    console.log("-=-=-=->", formdata);
    axios
      .post(mall_create_analitic_bundle, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        // console.log("ggg", JSON.stringify(res.data, null, 2));
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
    // console.log("test");

    const { startDate, endDate } = selectedDates;
    // console.log("==>11", selectedDates);

    if (startDate == "" || startDate == undefined) {
      Notification("error", "Error", "Please Enter Start Date");
      return;
    } else if (endDate == "" || endDate == undefined) {
      Notification("error", "Error", "Please Enter End Date");
      return;
    } else {
      const formdata = await new FormData();
      // await formdata.append("id", item.id)
      // await formdata.append("analytic_bundle_id",id);

      await formdata.append(
        "from_date",
        moment(startDate[0]).format("YYYY-MM-DD")
      );
      await formdata.append(
        "to_date",
        moment(startDate[1]).format("YYYY-MM-DD")
      );

      // console.log("-=-=-=->", JSON.stringify(formdata, null, 2));
      // const data = await CreateAnalyticBundleApi(formdata);

      const token = JSON.parse(localStorage.getItem("is_token"));

      axios
        .post(create_analytic_bundle, formdata, {
          headers: {
            Accept: ACCEPT_HEADER,
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          // console.log(JSON.stringify(res, null, 2));
          setTab(21);
        })
        .catch((err) => {
          console.log("err11", err);
        });
    }
  };

  const [checkboxValues, setCheckboxValues] = useState({
    January: false,
    February: false,
    March: false,
    April: false,
    May: false,
    June: false,
    July: false,
    August: false,
    September: false,
    October: false,
    November: false,
  });

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues({
      ...checkboxValues,
      [name]: checked,
    });
  };

    console.log("check month",selectedItems);


  //
  const currentYear = moment();
  const formattedYear = currentYear.format("YYYY");

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
            <div className="MallCart2_main" style={{ gap: "2rem" }}>
              <div className="">
                <h3 className="h3" style={{ fontWeight: "600" }}>
                  V&A Waterfront Mall: Buy Analytics
                </h3>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}>
                <h5 className="h5" style={{ fontWeight: "600" }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh.
                  {/* Select the analytic options you would like to purchase */}
                </h5>

                <p style={{ fontWeight: "300" }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore
                </p>
              </div>

              {getCartData.length > 0
                ? getCartData.map((item) => {
                    return (
                      <>
                        <div>
                          <div
                            className="leaderboard-card-inpbox-wrapp leaderboard-card-inpbox-wrapp-mall"
                            style={{ marginBottom: "0px" }}
                          >
                            <label
                              className="leaderboard-card-lbl"
                              htmlFor=""
                              style={{ width: "40%" }}
                            >
                              Filter by month:
                            </label>

                            <div
                              className="DatePicker_style setToggle"
                              onClick={() => {
                                setToggle1(!getToggle1);
                              }}
                            >
                              <span>Select month</span>
                              <FaArrowsAltV style={{ cursor: "pointer" }} />
                            </div>
                          </div>
                          <div className="leaderboard-card-inpbox-wrapp-mall">
                            <div style={{ display: "flex" }}>
                              <label
                                className="leaderboard-card-lbl"
                                htmlFor=""
                                style={{ width: "40%" }}
                              ></label>
                              {getToggle1 && getToggle1 === true ? (
                                <div
                                  className="month_checkbox"
                                  style={{
                                    padding: "0.5rem",
                                    paddingLeft: "1rem",
                                    paddingBottom: "1rem",
                                    maxHeight: "300px",
                                    overflow: "scroll",
                                  }}
                                >
                                  {MONTH && MONTH.length > 0
                                    ? MONTH.map((item, index) => {
                                        const disabled =
                                          index < getCurrentMonthIndex();
                                        const isChecked = selectedItems.some(
                                          (selected) => selected.id === item.id
                                        );
                                        return (
                                          <React.Fragment key={index}>
                                            <label className="month_checkbox_inner">
                                              <input
                                                type="checkbox"
                                                name={item.label}
                                                checked={isChecked}
                                                onChange={() =>
                                                  handleCheck(
                                                    item.id,
                                                    index,
                                                    item.label
                                                  )
                                                }
                                                disabled={disabled}
                                              />
                                              {item.label}{" "}
                                              {moment().format("YYYY")}
                                            </label>
                                            <br />
                                          </React.Fragment>
                                        );
                                      })
                                    : null}

                                  {/* {Object.keys(checkboxValues).map((month) => {
                                    const disabled = month === currentMonth;
                                    return (
                                      <React.Fragment key={month}>
                                        <label className="month_checkbox_inner">
                                          <input
                                            type="checkbox"
                                            name={month}
                                            checked={checkboxValues[month]}
                                            onChange={handleCheckboxChange}
                                            disabled={disabled}
                                          />
                                          {month} {moment().format("YYYY")}
                                        </label>
                                        <br />
                                      </React.Fragment>
                                    );
                                  })} */}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            width: "300px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.3rem",
                          }}
                        >
                          <p>
                            <span
                              style={{
                                color: "var(--color-orange)",
                                fontWeight: "800",
                              }}
                            >
                              Terms and Conditions
                            </span>
                            &nbsp; apply.
                          </p>
                          <button
                            className="btn btn-orange"
                            onClick={() => {
                              addtocart();
                            }}
                          >
                            {/* <img src={images.basket_white} alt="basket_white" /> */}
                            &nbsp; Add to cart
                          </button>
                        </div>
                      </>
                    );
                  })
                : null}

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

export default BuyAnalytics;