import React, { useEffect, useState } from "react";
// import "./LeaderBoardCard.css"
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useStoreContext } from "../../context/store_context";
import { useMallContext } from "../../context/mall_context";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Notification from "../../utils/Notification";
import { DateRangePicker } from "rsuite";
const animatedComponents = makeAnimated();

const AddProductCard = ({
  openMallModal,
  setTab,
  getweek,
  seteweek,
  peopleInfo,
  mallidarray,
  regionidarray,
  selectedMalls,
}) => {
  const { CreateProductBoardApi, category_data, multiple_week_data } =
    useStoreContext();
  const { get_brand_data, get_mall_data } = useMallContext();
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [BrandName, setBrandName] = useState("");
  const [MallName, setMallName] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDiscription] = useState("");
  const [mallsOption, setMallsOption] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [Week, setWeek] = useState("");
  const [Region, setRegion] = useState([]);
  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  const { allowedMaxDays, beforeToday, combine } = DateRangePicker;

  // select date funtion is start

  useEffect(() => {
    console.log("startDate", startDate);
    console.log("endDate", endDate);
  }, [startDate, endDate]);

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
  const onDateChage = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // select date funtion is end

  const handleDateChange = (startDate, endDate) => {
    console.log("==>", startDate, endDate);
    setSelectedDates({ startDate, endDate });


  };

  // logo dropzon

  const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        console.log("file type", files[0]);
        console.log("acceptedFiles", acceptedFiles[0].File);

        {
          setFiles(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
        }
        if (acceptedFiles.length === 0) {
          window.location.reload(true);
        }
      },
    });

  const thumbs = files.map((file) => (
    <img
      src={file.preview}
      style={{ width: "100%", height: "100%" }}
      className="img-fluid"
      alt="file"
    />
  ));

  const CreateProductBanner = async () => {
    console.log("test");
    const { startDate, endDate } = selectedDates;


    if (title == "" || undefined) {
      Notification("error", "Error!", "Please Enter Title!");
      return;
    } else if (mallidarray == "" || undefined) {
      Notification("error", "Error!", "Please Select Mall!");
    } else if (regionidarray == "" || undefined) {
      Notification("error", "Error!", "Please Select Region!");
    } else if (startDate == "" || startDate == undefined) {
      Notification("error", "Error", "Please Enter Start Date");
      return;
    } else if (endDate == "" || endDate == undefined) {
      Notification("error", "Error", "Please Enter End Date");
      return;
    } else if (BrandName == "" || undefined) {
      Notification("error", "Error!", "Please Select Brand!");
    } else if (Category == "" || undefined) {
      Notification("error", "Error!", "Please Select Category!");
    } else {
      const formdata = await new FormData();
      // await formdata.append("id", item.id)
      await formdata.append("title", title);
      for (var i = 0; i < regionidarray.length; i++) {
        await formdata.append("region_id[" + i + "]", regionidarray[i].id);
      }
      for (var i = 0; i < mallidarray.length; i++) {
        await formdata.append("mall_id[" + i + "]", mallidarray[i].id);
      }
      await formdata.append("brand_id", BrandName);
      await formdata.append("category_id", Category);
      // await formdata.append("week_id", getweek)
      await formdata.append(
        "from_date",
        moment(startDate[0]).format("YYYY-MM-DD")
      );
      await formdata.append("to_date", moment(startDate[1]).format("YYYY-MM-DD"));
      await formdata.append("region_child_id[0]", "");
      await formdata.append("region_child_id[1]", "");
      if (files[0] !== undefined) {
        await formdata.append("image", files[0]);
      }

      console.log("-=-=-=->", formdata);
      const data = await CreateProductBoardApi(formdata);
      if (data) {
        if (data.success === 1) {
          console.log("category-data", data);
          Notification(
            "success",
            "Success!",
            "Product Banner Added Successfully!"
          );
          setTab(1);
          // getLeaderboard();
          // window.location.reload();
        }
      }
    }
  };
  return (
    <div className="leaderboard-card-main-wrapp">
      {/* Leaderboard flex start */}
      <div className="leaderboard-card-flex-wrapp">
        {/* Leaderboard first part responsive side start */}
        <div className="leaderboard-card-first-resp-main-wrapp">
          <p className="leaderboard-last-part-txt">
            Service fee will apply if canceled
          </p>
          <Link className="leaderboard-delete-icon-btn">
            cancel{" "}
            <img src={images.delete_icon} className="leaderboard-delete-icon" />
          </Link>
        </div>
        {/* Leaderboard first part responsive side end*/}

        {/* Leaderboard part first start */}
        <div className="leaderboard-card-part-first">
          {/* Leaderboad form start */}

          {/* Leaderboard inputbox start */}
          <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl">Title:</label>
            <input
              type="text"
              className="leaderboard-card-inp"
              placeholder="Summer Campaign 2024"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* Leaderboard inputbox end */}

          {/* Leaderboard inputbox start */}
          <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl">Mall(s):</label>
            <div
              onClick={() => openMallModal()}
              className="leaderboard-card-inp"
              style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {selectedMalls && selectedMalls.length > 0
                ? selectedMalls.map((mall, mindx) => {
                  return <p className="mall-lib-font">{mall}</p>;
                })
                : null}
              {/* <p className="">abc</p>
              <p className="">abc</p>
              <p className="">abc</p> */}
            </div>
            {/* <Select
                            value={mallsOption}
                            styles={{ width: "100%", padding: "0px" }}
                            className="leaderboard-card-inp"
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            // defaultValue={[colourOptions[4], colourOptions[5]]}

                            isMulti
                            options={multiple_week_data}
                            onChange={setMallsOption}
                        /> */}
            {/* <button
              className="leaderboard-card-inp"
              style={{ color: "rgb(129 128 128)", textAlign: "start" }}
              onClick={() => openMallModal()}
            >
              Select Mall
            </button> */}
          </div>
          {/* Leaderboard inputbox end */}
          <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl" htmlFor="">
              Week
            </label>
            {/* <input
              type="date"
              value={eventEndDate}
              onChange={(e) => setEventEndDate(e.target.value)}
              name=""
              id=""
              className="input_box"
            /> */}
            {/* <DatePicker
                            selected={startDate}
                            onChange={onDateChage}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            // selectsDisabledDaysInRange
                            // inline
                            monthsShown={2}


                            calendarStartDay={1}
                            className="leaderboard-card-inp"
                            placeholderText="Select your week"
                        /> */}
            <DateRangePicker
              style={{ color: "#111" }}
              oneTap
              hoverRange="week"
              isoWeek
              placeholder="Select your Week"
              className="leaderboard-card-inp DateRangePicker_LeaderboardCard"
              onChange={handleDateChange}
              disabledDate={combine(allowedMaxDays(7), beforeToday())}

            />
          </div>
          {/* Leaderboard inputbox start */}
          <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl">Brand(s):</label>
            <div className="select-wrapper" style={{ width: "100%" }}>
              <select
                className="leaderboard-card-inp"
                onChange={(e) => {
                  console.log("rrr", e.target.value);
                  setBrandName(e.target.value);
                }}>
                <option selected disabled value="">
                  Select Brand
                </option>
                {get_brand_data &&
                  get_brand_data.map((item, index) => {
                    return (
                      <>
                        <option value={item.id} key={index}>
                          {item.name}
                        </option>
                      </>
                    );
                  })}
              </select>
            </div>
          </div>
          {/* Leaderboard inputbox end */}

          {/* Leaderboard inputbox start */}
          <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl">Categories:</label>
            <div className="select-wrapper" style={{ width: "100%" }}>
              <select
                className="leaderboard-card-inp"
                onChange={(e) => {
                  console.log("rrr", e.target.value);
                  setCategory(e.target.value);
                }}>
                <option selected disabled value="">
                  Select Category
                </option>
                {category_data &&
                  category_data.map((item, index) => {
                    return (
                      <>
                        <option value={item.id} key={index}>
                          {item.name}
                        </option>
                      </>
                    );
                  })}
              </select>
            </div>
          </div>
          {/* Leaderboard inputbox end */}

          {/* <button onClick={() => openMallModal()} className="leaderboard-delete-icon-btn">
                        <span className="leaderboard-extend-txt">Chose Date</span>{" "}
                        <img src={images.banner_cal_img} className="leaderboard-delete-icon" style={{ width: "42px", height: "42px" }} />
                    </button> */}
          {/* start date and end date demo start */}
          {/* <div>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Select start date (Monday)"
              filterDate={isMonday}
              calendarStartDay={1}
            />
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Select end date (Sunday)"
              filterDate={isSunday}
              disabled={!startDate}
              calendarStartDay={1}
            />
          </div> */}
          {/* start date and end date demo end */}

          {/* Leaderboard inputbox start */}
          {/* <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl">Start:</label>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Select start date (Monday)"
              filterDate={isMonday}
              calendarStartDay={1}
              className="leaderboard-card-inp"
              dateFormat="dd/MM/yyyy"
            />
          </div> */}
          {/* Leaderboard inputbox end */}

          {/* Leaderboard inputbox start */}
          {/* <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl">Until:</label>
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Select end date (Sunday)"
              filterDate={isSunday}
              disabled={true}
              calendarStartDay={1}
              className="leaderboard-card-inp"
              dateFormat="dd/MM/yyyy"
            />
          </div> */}
          {/* Leaderboard inputbox end */}

          {/* Leaderboad form end */}
        </div>
        {/* Leaderboard part first end */}

        {/* Leaderboard part second start */}
        <div className="leaderboard-card-part-sec">
          {/* <div className="myprofile_inner_sec2"> */}

          {files && files.length > 0 ? (
            <div className="myprofile_inner_sec2_img_upload leaderboard-card-part-img-upl">
              {thumbs}
            </div>
          ) : (
            <div style={{ width: "100%" }} {...getRootlogoProps()}>
              <div className="leaderboard-card-part-sec2">
                <AiOutlineCloudUpload
                  style={{
                    width: "60px",
                    height: "60px",
                    color: "var(--color-orange)",
                    marginBottom: "10px",
                  }}
                />
                <h4>.PDF .JPG .PNG</h4>
                <p>You can also upload file by</p>
                <input
                  {...getInputlogoProps()}
                  accept="image/jpeg, image/jpg, image/png, image/eps"
                />
                <button
                  type="button"
                  className="click_upload_btn"
                  style={{ marginBottom: "10px" }}>
                  click here
                </button>
                {/* <a href="">clicking here</a> */}
              </div>
            </div>
          )}

          {/* </div> */}
        </div>
        {/* Leaderboard part second end */}

        {/* Leaderboard part third start */}
        <div className="leaderboard-card-part-third">
          <Link className="leaderboard-delete-icon-btn">
            cancel{" "}
            <img src={images.delete_icon} className="leaderboard-delete-icon" />
          </Link>
          <p className="leaderboard-last-part-txt">
            Service fee will apply if canceled
          </p>
          {/* <Link className="leaderboard-delete-icon-btn">
                        <span className="leaderboard-extend-txt">Extend</span>{" "}
                        <img src={images.extend_icon} className="leaderboard-delete-icon" />
                    </Link> */}
          <div className="leaderboard-btn-box">
            <button
              className="btn btn-orange"
              onClick={() => CreateProductBanner()}>
              Publish
            </button>
          </div>
        </div>
        {/* Leaderboard part third end */}

        {/* Leaderboard last part responsive side start */}
        <div className="leaderboard-card-sec-resp-main-wrapp">
          {/* <Link className="leaderboard-delete-icon-btn">
                        <span className="leaderboard-extend-txt">Extend</span>{" "}
                        <img src={images.extend_icon} className="leaderboard-delete-icon" />
                    </Link> */}
          <div className="leaderboard-btn-box">
            <button
              className="btn btn-orange"
              onClick={() => CreateProductBanner()}>
              Publish
            </button>
          </div>
        </div>
        {/* Leaderboard last part responsive side end */}
      </div>
      {/* Leaderboard flex start */}
    </div>
  );
};

export default AddProductCard;
