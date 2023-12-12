import React, { useState } from "react";
import moment from "moment";
import "rsuite/dist/rsuite-no-reset.min.css";
// import "./CalenderTesting.css";
import { DateRangePicker } from "rsuite";
import { startOfDay, endOfDay, addDays, subDays } from "date-fns";

const CalenderTesting = () => {
  //   const Ranges = [
  //     {
  //       label: "today",
  //       value: [startOfDay(new Date()), endOfDay(new Date())],
  //     },
  //     {
  //       label: "yesterday",
  //       value: [
  //         startOfDay(addDays(new Date(), -1)),
  //         endOfDay(addDays(new Date(), -1)),
  //       ],
  //     },
  //     {
  //       label: "last7Days",
  //       value: [startOfDay(subDays(new Date(), 6)), endOfDay(new Date())],
  //     },
  //   ];
  //   const [objWeek, setObjWeek] = useState({
  //     date: new Date(),
  //     dateFrom: null,
  //     dateTo: null,
  //     weekNumber: null,
  //   });

  const onChange = (date) => {
    const weekNumber = moment(date).isoWeek();
    const dateFrom = moment(date).startOf("isoWeek").toDate();
    const dateTo = moment(date).endOf("isoWeek").toDate();

    setObjWeek({
      date,
      dateFrom,
      dateTo,
      weekNumber,
    });
  };

  const renderValue = (date) => {
    const weekNumber = moment(date).isoWeek();
    const year = moment(date).year();

    return `W${weekNumber}, ${year}`;
  };

  return (
    <div className="CalenderTesting">
      <h1>Week Picker</h1>

      {/* <DatePicker
        placeholder="Week picker"
        isoWeek
        showWeekNumbers
        value={objWeek.date}
        onChange={onChange}
        renderValue={renderValue}
      /> */}
      <DateRangePicker
        oneTap
        hoverRange="week"
        isoWeek
        // ranges={Ranges}
        //   apperances={
        // textColor="#111"
      />
      <DateRangePicker oneTap showOneCalendar hoverRange="week" ranges={[]} />

      {/* <div className="weekInfos">
        <div>
          <span>Week Number : </span>
          <b>{objWeek.weekNumber}</b>
        </div>
        <div>
          <span>Start of Week : </span>
          <b>{objWeek.dateFrom?.toDateString()}</b>
        </div>
        <div>
          <span>End of Week : </span>
          <b>{objWeek.dateTo?.toDateString()}</b>
        </div>
      </div> */}
    </div>
  );
};

export default CalenderTesting;
