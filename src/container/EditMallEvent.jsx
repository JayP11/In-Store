import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useMeventContext } from "../context/mevent_context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMallContext } from "../context/mall_context";
import moment from "moment";
import { MallHero } from "../components";
import Notification from "../utils/Notification"

import { IoChevronBack } from "react-icons/io5";

const EditMallEvent = ({
  geteventId,
  setTab,
  eventList,
  get_mall_auth_data,
  EventApi,
  geteventdata1,
}) => {
  const { UpdateMallEvent, getMallEvent } = useMeventContext();
  const { UpdateEventMall } = useMallContext();

  console.log("event id is", geteventId);
  console.log("event data is", geteventdata1);

  const [files, setFiles] = useState([]);
  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  // update mall event states
  const [eventName, setEventName] = useState(
    geteventdata1.name ? geteventdata1.name : ""
  );
  const [eventLocation, setEventLocation] = useState(
    geteventdata1.location ? geteventdata1.location : ""
  );
  const [eventStartDate, setEventStartDate] = useState(new Date());
  const [eventEndDate, setEventEndDate] = useState(new Date());

  const [eventDescription, setEventDescription] = useState(
    geteventdata1.description ? geteventdata1.description : ""
  );
  const [terms_condition, setterms_condition] = useState(
    geteventdata1.terms_condition ? geteventdata1.terms_condition : ""
  );
  const [getcondation, setcondation] = useState(false);

  const onDateChage = (dates) => {
    const [start, end] = dates;
    setEventStartDate(start);
    setEventEndDate(end);
  };

  const UpdateMallEventData = async () => {
    {
      // var params = {
      //   event_id: geteventId,
      //   name: eventName,
      //   location: eventLocation,
      //   start_date: eventStartDate,

      //   description: eventDescription,
      //   image: files[0],
      //   terms_condition: terms_condition,

      // };

      if (eventName == "" || undefined) {
        Notification("error", "Error!", "Please Enter Event Name!");
        return;
      } else if (eventLocation == "" || undefined) {
        Notification("error", "Error!", "Please Enter Event Location!");
        return;
      } else if (eventStartDate == "" || undefined) {
        Notification("error", "Error!", "Please Enter Event Start Date!");
        return;
      } else if (eventEndDate == "" || undefined) {
        Notification("error", "Error!", "Please Enter Event End Date!");
        return;
      } else if (eventDescription == "" || undefined) {
        Notification("error", "Error!", "Please Enter Some Description!");
        return;
      } else {
        const formdata = await new FormData();
        await formdata.append("event_id", geteventId);
        await formdata.append("name", eventName);
        await formdata.append("location", eventLocation);
        await formdata.append(
          "start_date",
          moment(eventStartDate).format("YYYY-MM-DD")
        );
        await formdata.append(
          "end_date",
          moment(eventEndDate).format("YYYY-MM-DD")
        );
        await formdata.append("description", eventDescription);
        if (files[0] !== undefined) {
          await formdata.append("image", files[0]);
        } else {
        }
        await formdata.append("terms_condition", isAcceptTerm);
        await formdata.append("privacy_policy", isAcceptTerm2);
        console.log("-=-=-=->", formdata);
        const data = await UpdateEventMall(formdata);
        if (data) {
          if (data.success === 1) {
            console.log("mall-data", data);
            Notification("success", "Success!", "Event Updated Successfully!");
            setTab(5);
            EventApi();
          }
        }
      }


    }
  };


  const [isAcceptTerm, setIsAcceptTerm] = useState(0);
  const [isAcceptTerm2, setIsAcceptTerm2] = useState(0);

  const handleTermChange = (e) => {
    setIsAcceptTerm(1);
    console.log("e.targate.value");
  };
  const handleTermChange2 = (e) => {
    setIsAcceptTerm2(1);
    console.log("e.targate.value"); 
  };


  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log("acceptedFiles", acceptedFiles);
      {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }
      setcondation(true);
      if (acceptedFiles.length === 0) {
        window.location.reload(true);
      }
    },
  });

  const thumbs = files.map((file) => (
    <img
      src={file.preview}
      style={{ width: "100%", height: "100%", maxHeight: "175px" }}
      className="img-fluid"
      alt="file"
    />
  ));

  return (
    <>
      <MallHero get_mall_auth_data={get_mall_auth_data} />

      <div className="mm_main_wrapp ">
        <div className="edit-brand-back-iconbox" onClick={() => setTab(5)}>
          <IoChevronBack className="edit-brand-back-icon" />{" "}
          <p className="edit-brand-back-txt">Back</p>
        </div>
        {/* mall management name start */}
        <div className="mall_name_wrapp mm_form_wrapp_name_padding mall_mall_name_wrapp mall_mall_name_wrapp_2">
          <p className="mall_name_heading mall_mall_name_heading">
            {get_mall_auth_data.name && get_mall_auth_data.name}:
          </p>
          <span className="mall_mall_name_heading" style={{fontWeight:"600"}}>Edit Events</span>
        </div>
        {/* <div className="mm_horizontal_line"></div> */}
        <div className="" style={{marginBottom:"2rem"}}></div>
        {/* mall management name end */}

        {/* mall management form start */}
        <div className="mm_form_wrapp mm_form_wrapp_add_brand_mall  mm_form_wrapp_padding">
          {/* text-input wrapp start */}
          <div className="mm_form_input_wrapp">
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="ename"style={{minWidth:"157px"}}>Event Name<span className="star_require">*</span></label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                name="ename"
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="elocation"style={{minWidth:"157px"}}>Event Location<span className="star_require">*</span></label>
              <input
                type="text"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                name="elocation"
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            {/* <div className="mm_form_single_input">
            <label htmlFor="">Start Date</label>
            <input
              type="date"
              value={eventStartDate}
              onChange={(e) => setEventStartDate(e.target.value)}
              name=""
              id=""
              className="input_box"
            />
          </div> */}
            {/* single text-input */}
            {/* <div className="mm_form_single_input">
            <label htmlFor="">End Date</label>
            <input
              type="date"
              value={eventEndDate}
              onChange={(e) => setEventEndDate(e.target.value)}
              name=""
              id=""
              className="input_box"
            />
          </div> */}
            <div className="mm_form_single_input">
              <label htmlFor=""style={{minWidth:"157px"}}>Event Date<span className="star_require">*</span></label>
              {/* <input
              type="date"
              value={eventEndDate}
              onChange={(e) => setEventEndDate(e.target.value)}
              name=""
              id=""
              className="input_box"
            /> */}
              <DatePicker
                selected={eventStartDate}
                onChange={onDateChage}
                startDate={eventStartDate}
                endDate={eventEndDate}
                selectsRange
                // selectsDisabledDaysInRange
                // inline
                calendarStartDay={1}
                className="input_box"
              />
            </div>
            {/* single text-input */}
            {/* <div className="mm_form_single_input">
            <label htmlFor="">Contact Number</label>
            <input
              type="number"
              onChange={(e) => onHandleNumberChange(e)}
              name=""
              id=""
              className="input_box"
            />
          </div> */}
            {/* single text-input */}
            {/* <div className="mm_form_single_input">
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              onChange={(e) => onHandleEmailChange(e)}
              name=""
              id=""
              className="input_box"
            />
          </div> */}

            {/* text-area sec start */}
            <div
              className="mm_form_single_input"
              style={{ alignItems: "flex-start" }}
            >
              <label htmlFor="" style={{minWidth:"157px"}}>Event Description<span className="star_require">*</span></label>
              <textarea
                type="text"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                name=""
                id=""
                className="input_box"
                rows={8}
              />
            </div>

            <div
              className="mm_form_single_input"
              style={{ alignItems: "flex-start" }}
            >
              <label htmlFor="" style={{minWidth:"157px"}} className="edit_event_resp_star">
              {/* <span className="star_require">*</span> */}
              </label>
              <span style={{fontSize:"14px",color:"#bbb"}}>*Required Fields including all image uploads.</span>
            </div>
            {/* text-area sec end */}

            {/*  terms condition start */}
            <div className="mm_form_single_input mb_8">
              <label htmlFor=""></label>
              <div className="signup_terms_wrapp indep-side">
                <input
                  type="checkbox"
                  value={isAcceptTerm}
                  onChange={handleTermChange}
                  checked={isAcceptTerm}
                />

                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Privacy Policy</a>
                </p>
              </div>
            </div>
            <div className="mm_form_single_input mb_8">
              <label htmlFor=""></label>
              <div className="signup_terms_wrapp indep-side" style={{marginTop:"-12px"}}>
                <input
                  type="checkbox"
                  value={isAcceptTerm2}
                  onChange={handleTermChange2}
                  checked={isAcceptTerm2}
                />

                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Terms and Conditions</a>
                </p>
              </div>
            </div>
            {/*  terms condition end */}

            {/* upload btn start */}
            {/* single text-input */}
            <div className="mm_form_single_input brand-resp-btn">
              <label htmlFor=""></label>
              <button
                                disabled={isAcceptTerm == 1 && isAcceptTerm2 ==1 ? false : true}

                className="btn btn-black"
                style={{ alignSelf: "start", maxWidth: "150px" }}
                onClick={() => UpdateMallEventData()}
              >
                Update
              </button>
            </div>
            {/* upload btn end */}
          </div>
          {/* text-input wrapp end */}

          {/* upload images wrapp start */}
          <div className="mm_img_upload_wrapp">
            {/* single upload image */}
            <div className="img-upl-border">

              <div className="myprofile_inner_sec2" {...getRootProps()} style={{ border: "none", paddingBottom: "0px" }}>
                {/* <input
                {...getInputlogoProps()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              /> */}
              <h4 style={{ marginBottom: "10px", fontSize: "14px", fontWeight: "600" }} className="myprofile_upload_img_card_name">
                  Upload the Event logo <br /> (200 x 200 pixels) <br /> (max 40kb)<span className="star_require">*</span></h4>
                {getcondation === true ?

                  <>
                    {files && files.length > 0 ? <div className="myprofile_inner_sec2_img_upload">{thumbs}</div> :

                      <div style={{ width: "100%" }}  >
                        <div className="myprofile_inner_sec2_img_upload">
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
                          {/* <input
                            {...getRootProps()}
                            accept="image/jpeg, image/jpg, image/png, image/eps"
                          /> */}
                          <button type="button" className="click_upload_btn" style={{ marginBottom: "10px" }}>
                            click here
                          </button>
                          {/* <a href="">clicking here</a> */}
                        </div>
                        <div className="btnn-main">
                          <button
                            className="btn btn-black mb_8"
                            type="button"
                            onClick={() => {
                              // setFiles([]);
                            }}
                          >
                            Upload File
                          </button>
                        </div>
                      </div>
                    }

                  </>
                  :
                  <>
                    {geteventdata1.image_path === null ?
                      <>
                        <div style={{ width: "100%" }}  {...getRootProps()}>
                          <div className="myprofile_inner_sec2_img_upload">
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
                              {...getRootProps()}
                              accept="image/jpeg, image/jpg, image/png, image/eps"
                            />
                            <button type="button" className="click_upload_btn" style={{ marginBottom: "10px" }}>
                              click here
                            </button>
                            {/* <a href="">clicking here</a> */}
                          </div>
                          <div className="btnn-main">
                            <button
                              className="btn btn-black mb_8"
                              type="button"
                              onClick={() => {
                                // setFiles([]);
                              }}
                            >
                              Upload File
                            </button>
                          </div>
                        </div>
                        <button className="btn" onClick={() => setFiles([])}>
                          Cancel
                        </button>
                      </>

                      :
                      <>
                        <div className="myprofile_inner_sec2_img_upload">


                          <img
                            src={geteventdata1.image_path}
                            style={{ width: "100%", height: "100%" }}
                            className="img-fluidb"
                          />


                        </div>
                        <div className="btnn-main" style={{ width: "100%" }}>
                          <button
                            className="btn btn-black mb_8"
                            type="button"
                            onClick={() => {
                              // setFiles([]);
                            }}
                          >
                            Upload File
                          </button>
                        </div>

                      </>

                    }


                  </>

                }
              </div>
              <div style={{ display: "flex", alingitem: "center", paddingLeft: "5px", paddingRight: "5px" }}>
                <button className="btn" onClick={() => setFiles([])} style={{ marginBottom: "10px", marginLeft: "10px", marginRight: "10px" }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
          {/* upload images wrapp end */}
        </div>
        <div className="mm_form_single_input mb_8">
          <label htmlFor=""></label>
          <div className="signup_terms_wrapp indep-side-show indep-side-show-event">
            <input
             type="checkbox"
                  value={isAcceptTerm}
                  onChange={handleTermChange}
                  checked={isAcceptTerm}
            />

            <p className="fs-des">
              I have read and agree to the{" "}
              <a className="signup_terms_link">Privacy Policy</a>
            </p>
          </div>
        </div>

        <div className="mm_form_single_input mb_8">
          <label htmlFor=""></label>
          <div className="signup_terms_wrapp indep-side-show indep-side-show-event" style={{marginTop:"-12px"}}>
            <input
             type="checkbox"
                  value={isAcceptTerm2}
                  onChange={handleTermChange2}
                  checked={isAcceptTerm2}
            />

            <p className="fs-des">
              I have read and agree to the{" "}
              <a className="signup_terms_link">Terms and Conditions</a>
            </p>
          </div>
        </div>

        <div className="mm_form_single_input brand-resp-show-btn brand-resp-show-btn-event">
          <label htmlFor=""></label>
          <button
                            disabled={isAcceptTerm == 1 && isAcceptTerm2 ==1 ? false : true}

            className="btn btn-black"
            style={{ alignSelf: "start", maxWidth: "150px" }}
            onClick={() => UpdateMallEventData()}
          >
            Update
          </button>
        </div>


        {/* mall management form end */}
      </div>
    </>
  );
};

export default EditMallEvent;