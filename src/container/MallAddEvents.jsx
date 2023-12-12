import React, { useEffect, useState } from 'react'

import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useMeventContext } from "../context/mevent_context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMallContext } from '../context/mall_context';
import { type } from '@testing-library/user-event/dist/type';
import Notification from "../utils/Notification"

import moment from "moment";
import { MallHero } from '../components';
import { IoChevronBack } from 'react-icons/io5';


const MallAddEvents = ({

    geteventId,
    setTab,
    geteventData,
    get_mall_auth_data,
    EventApi,
}) => {
    const { UpdateMallEvent } = useMeventContext();
    const { AddEventMall } = useMallContext();

    const [files, setFiles] = useState([]);
    const regEx =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    // update mall event states
    const [eventName, setEventName] = useState();
    const [eventLocation, setEventLocation] = useState();
    const [eventStartDate, setEventStartDate] = useState();
    const [eventEndDate, setEventEndDate] = useState();
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [terms_condition, setterms_condition] = useState("");

    const [get_main_name, Set_Main_Name] = useState('')




    const onDateChage = (dates) => {
        const [start, end] = dates;
        setEventStartDate(start);
        setEventEndDate(end);
    };

    const onHandleEmailChange = (e) => {
        let email = e.target.value;
        if (email === "" || regEx.test(email)) {
            setEmail(email);
        } else {
            return;
        }
    };

    const onHandleNumberChange = (e) => {
        let number = e.target.value;
        if (number === "" || re.test(number)) {
            setNumber(number);
        } else {
            return;
        }
    };


    useEffect(() => {
        const name = localStorage.getItem("mallmainname");
        Set_Main_Name(name)
    })

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',

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

    // console.log("geteventData", geteventData);.


    const malladdevent = async () => {

        console.log("dsfjsdfn");
        // var params = {
        //     name: eventName,
        //     location: eventLocation,
        //     start_date: eventStartDate,
        //     description: eventDescription,
        //     image: files[0],
        //     terms_condition: terms_condition,

        // };

        if (eventName == "" || eventName == undefined) {
            Notification("error", "Error", "Please Enter Event Name");
            return;
        } else if (eventLocation == "" || eventLocation == undefined) {
            Notification("error", "Error", "Please Enter Event Location");
            return;
        } else if (eventStartDate == "" || eventStartDate == undefined) {
            Notification("error", "Error", "Please Enter Event Start Date");
            return;
        } else if (eventEndDate == "" || eventEndDate == undefined) {
            Notification("error", "Error", "Please Enter Event End Date");
            return;
        } else if (eventDescription == "" || eventName == undefined) {
            Notification("error", "Error", "Please Enter Description");
            return;
        }

        else {
            const formdata = await new FormData();
            await formdata.append("name", eventName);
            await formdata.append("location", eventLocation);
            await formdata.append("start_date", moment(eventStartDate).format("YYYY-MM-DD"));
            await formdata.append("end_date", moment(eventEndDate).format("YYYY-MM-DD"));
            await formdata.append("description", eventDescription);
            if (files && files.length > 0) {
                await formdata.append("image", files[0]);
            }
            await formdata.append("terms_condition", terms_condition);



            console.log("-=-=-=->", formdata);
            const data = await AddEventMall(formdata);
            if (data) {
                if (data.success === 1) {
                    console.log("mall-data", data);
                    Notification("success", "Success!", "Event Added Successfully!");
                    setTab(5);
                    EventApi();
                }
            }
        }


    };


    return (
        <>
            <MallHero get_mall_auth_data={get_mall_auth_data} />

            <div className="mm_main_wrapp mm_form_wrapp_add_brand_mall">
                <div className='edit-brand-back-iconbox' onClick={() => setTab(5)}><IoChevronBack className='edit-brand-back-icon' /> <p className='edit-brand-back-txt'>Back</p></div>
                {/* mall management name start */}
                <div className="mall_name_wrapp">
                    {/* <p className="mall_name_heading">{get_mall_auth_data.name && get_mall_auth_data.name}:</p> */}
                    <p className="mall_name_heading">{get_main_name}:</p>

                    <span>Add Events</span>
                </div>
                <div className="mm_horizontal_line"></div>
                {/* mall management name end */}

                {/* mall management form start */}
                <div className="mm_form_wrapp mm_form_wrapp_add_brand_mall">
                    {/* text-input wrapp start */}
                    <div className="mm_form_input_wrapp">
                        {/* single text-input */}
                        <div className="mm_form_single_input">
                            <label htmlFor="ename" style={{ minWidth: "140px" }}>Event Name</label>
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
                            <label htmlFor="elocation" style={{ minWidth: "140px", }}>Event Location</label>
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
                            <label htmlFor="" style={{ minWidth: "140px", }}>Event Date</label>
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

                        {/* text-area sec start */}
                        <div
                            className="mm_form_single_input"
                            style={{ alignItems: "flex-start" }}
                        >
                            <label htmlFor="" style={{ minWidth: "140px" }}>Event Description</label>
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
                        {/* text-area sec end */}

                        {/*  terms condition start */}
                        <div className="mm_form_single_input mb_8">
                            <label htmlFor=""></label>
                            <div className="signup_terms_wrapp indep-side">
                                <input type="checkbox" onChange={(e) => setterms_condition(1)}
                                />
                                <p className="fs-des">
                                    I have read and agree to the{" "}
                                    <a className="signup_terms_link">Terms and Conditions</a> &{" "}
                                    <a className="signup_terms_link">Privacy Policy</a>
                                </p>
                            </div>
                        </div>
                        {/*  terms condition end */}

                        {/* upload btn start */}
                        {/* single text-input */}
                        <div className="mm_form_single_input brand-resp-btn">
                            <label htmlFor="" style={{ minWidth: "140px", }}></label>
                            <button
                                className="btn btn-orange"
                                style={{ alignSelf: "start", maxWidth: "180px" }}
                                onClick={() => malladdevent()}
                            >
                                Upload
                            </button>
                        </div>
                        {/* upload btn end */}
                    </div>
                    {/* text-input wrapp end */}

                    {/* upload images wrapp start */}
                    <div className="mm_img_upload_wrapp">
                        {/* single upload image */}
                        <div className="myprofile_inner_sec2">
                            <h4 style={{ marginBottom: "10px" }} className='myprofile_upload_img_card_name'>
                                Upload the Event image <br />
                                (200 x 150 pixels)
                            </h4>
                            {files && files.length > 0 ? (
                                <div className="myprofile_inner_sec2_img_upload">{thumbs}</div>
                            ) : (
                                <div style={{ width: "100%" }} {...getRootProps({ className: "dropzone" })}>
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
                                            {...getInputProps()}
                                            accept="image/jpeg, image/jpg, image/png, image/eps"
                                            type='file'
                                            name='photos'
                                        />
                                        <button type="button" className="click_upload_btn" style={{ marginBottom: "10px" }}>
                                            click here
                                        </button>
                                        {/* <a href="">clicking here</a> */}
                                    </div>
                                    <div className="btnn-main">
                                        <button
                                            className="btn btn-orange mb_8"
                                            type="button"
                                            onClick={() => {
                                                // setFiles([]);
                                            }}
                                        >
                                            Upload File
                                        </button>
                                    </div>
                                </div>
                            )}
                            {/* <div className="myprofile_upload_img_btn_wrapp"> */}
                            <button className="btn btn-blue" onClick={() => setFiles([])}>
                                Cancel
                            </button>
                            {/* </div> */}
                        </div>
                    </div>
                    {/* upload images wrapp end */}
                </div>
                {/* mall management form end */}
                <div className="mm_form_single_input mb_8">
                    <label htmlFor=""></label>
                    <div className="signup_terms_wrapp indep-side-show">
                        <input type="checkbox" onChange={(e) => setterms_condition(1)}
                        />
                        <p className="fs-des">
                            I have read and agree to the{" "}
                            <a className="signup_terms_link">Terms and Conditions</a> &{" "}
                            <a className="signup_terms_link">Privacy Policy</a>
                        </p>
                    </div>
                </div>

                <div className="mm_form_single_input brand-resp-show-btn">
                    <label htmlFor=""></label>
                    <button
                        className="btn btn-orange"
                        style={{ alignSelf: "start", maxWidth: "150px" }}
                        onClick={() => malladdevent()}
                    >
                        Upload
                    </button>
                </div>
            </div>
        </>
    )
}

export default MallAddEvents