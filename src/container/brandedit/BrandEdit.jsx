import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { useMallContext } from '../../context/mall_context';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { IoChevronBack } from 'react-icons/io5';
import "./BrandEdit.css"

const BrandEdit = ({ get_mall_auth_data }) => {

    const [files, setFiles] = useState([]);


    const onHandleEmailChange = (e) => {
        let email = e.target.value;
        if (email === "" || regEx.test(email)) {
            setEmail(email);
        } else {
            return;
        }
    };

    const onHandleMallEmailChange = (e) => {
        let mallEmail = e.target.value;
        if (mallEmail === "" || regEx.test(mallEmail)) {
            setMallEmail(mallEmail);
        } else {
            return;
        }
    };

    const thumbs = files.map((file) => (
        <img
            src={file.preview}
            style={{ width: "100%", height: "100%", maxHeight: "175px" }}
            className="img-fluid"
            alt="file"
        />
    ));

    const [getbrandData, setBrandData] = useState(
        get_mall_auth_data && get_mall_auth_data
    );
    const { UpdateMall } = useMallContext();
    const regEx =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    console.log("check getbrandData", getbrandData);

    // update mall states
    const [mallName, setMallName] = useState(
        getbrandData.name ? getbrandData.name : ""
    );
    const [physicalAddress, setPhysicalAddress] = useState(
        getbrandData.address ? getbrandData.address : ""
    );
    const [province, setProvince] = useState(
        getbrandData.province ? getbrandData.province : ""
    );
    const [mallWebsite, setMallWebsite] = useState(
        getbrandData.website ? getbrandData.website : ""
    );
    const [mallEmail, setMallEmail] = useState(
        getbrandData.email_mall ? getbrandData.email_mall : ""
    );
    const [mallInsta, setMallInsta] = useState(
        getbrandData.insta ? getbrandData.insta : ""
    );
    const [mallfb, setMallfb] = useState(getbrandData.fb ? getbrandData.fb : "");
    const [mallTwitter, setMallTwitter] = useState(
        getbrandData.tweet ? getbrandData.tweet : ""
    );
    const [contactPerson, setContactPerson] = useState(
        getbrandData.contact_person && getbrandData.contact_person
    );
    const [contactNumber, setContactNumber] = useState(
        getbrandData.number && getbrandData.number
    );
    const [email, setEmail] = useState(
        getbrandData.email ? getbrandData.email : ""
    );

    // tranding times
    const [monFromTime, setMonFromTime] = useState(
        getbrandData.mon_fri_from_time && getbrandData.mon_fri_from_time
    );
    const [monToTime, setMonToTime] = useState(
        getbrandData.mon_fri_to_time && getbrandData.mon_fri_to_time
    );
    const [satFromTime, setSatFromTime] = useState(
        getbrandData.sat_from_time && getbrandData.sat_from_time
    );
    const [satToTime, setSatToTime] = useState(
        getbrandData.sat_to_time && getbrandData.sat_to_time
    );
    const [sunFromTime, setSunFromTime] = useState(
        getbrandData.sun_from_time && getbrandData.sun_from_time
    );
    const [sunToTime, setSunToTime] = useState(
        getbrandData.sun_to_time && getbrandData.sun_to_time
    );
    const [holidayFromTime, setHolidayFromTime] = useState(
        getbrandData.holiday_from_time && getbrandData.holiday_from_time
    );
    const [holidayToTime, setHolidayToTime] = useState(
        getbrandData.holiday_to_time && getbrandData.holiday_to_time
    );

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


    return (
        <div className="mm_main_wrapp">
            {/* <div className='edit-brand-back-iconbox'><IoChevronBack className='edit-brand-back-icon' /> <p className='edit-brand-back-txt'>Back</p></div> */}
            {/* mall management name start */}
            <div className="mall_name_wrapp">

                <p className="mall_name_heading">DIESEL:</p>
                <span>Edit brand</span>
            </div>
            <div className="mm_horizontal_line"></div>
            {/* mall management name end */}

            {/* mall management form start */}
            <div className="mm_form_wrapp">
                {/* text-input wrapp start */}
                <div className="mm_form_input_wrapp">
                    {/* single text-input */}
                    <div className="mm_form_single_input">
                        <label htmlFor="">Brand name</label>
                        <input
                            type="text"
                            // value={mallName}
                            // onChange={(e) => setMallName(e.target.value)}
                            name=""
                            id=""
                            className="input_box"
                            placeholder="Auto-fill from database"
                        />
                    </div>
                    {/* single text-input */}
                    <div
                        className="mm_form_single_input"
                        style={{ alignItems: "flex-start" }}
                    >
                        <label htmlFor="">Category</label>
                        <input
                            type="text"
                            // value={mallTwitter}
                            // onChange={(e) => setMallTwitter(e.target.value)}
                            name=""
                            id=""
                            className="input_box"
                            placeholder='Fashion, homeware, audio visual'
                        />
                    </div>
                    {/* single text-input */}
                    <div className="mm_form_single_input">
                        <label htmlFor="">Store Number
                        </label>
                        <input
                            type="number"
                            // value={physicalAddress}
                            // onChange={(e) => setPhysicalAddress(e.target.value)}
                            name=""
                            id=""
                            className="input_box"
                        />
                    </div>

                    {/* single text-input */}
                    {/* <div className="mm_form_single_input">
            <label htmlFor="">Province</label>
            <input
              type="text"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              name=""
              id=""
              className="input_box"
            />
          </div> */}
                    {/* single text-input */}
                    <div className="mm_form_single_input">
                        <label htmlFor="">Store Level
                        </label>
                        <input
                            type="text"
                            // value={mallWebsite}
                            // onChange={(e) => setMallWebsite(e.target.value)}
                            name=""
                            id=""
                            className="input_box"
                        />
                    </div>
                    {/* single text-input */}
                    <div className="mm_form_single_input">
                        <label htmlFor="">Contact person
                        </label>
                        <input
                            type="text"
                            // onChange={(e) => onHandleMallEmailChange(e)}
                            name=""
                            id=""
                            className="input_box"
                        />
                    </div>



                    {/* single text-input */}
                    <div className="mm_form_single_input">
                        <label htmlFor="">Contact Number
                        </label>
                        <input
                            type="number"
                            // value={mallInsta}
                            // onChange={(e) => setMallInsta(e.target.value)}
                            name=""
                            id=""
                            className="input_box"
                        />
                    </div>
                    {/* single text-input */}
                    <div className="mm_form_single_input">
                        <label htmlFor="">Email Address</label>
                        <input
                            type="email"
                            // value={mallfb}
                            // onChange={(e) => setMallfb(e.target.value)}
                            name=""
                            id=""
                            className="input_box"
                        />
                    </div>

                    {/* tranding sec strat */}
                    <div className="mm_tranding_wrapp">
                        <label
                            style={{ fontSize: "16px", fontWeight: "400", minWidth: "135px" }}
                            htmlFor=""
                        >
                            Trading Hours
                        </label>
                        <div className="tranding_times_wrapp">
                            {/* single time */}
                            <div className="tranding_times_wrapp_sec">
                                <label
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        minWidth: "118px",
                                    }}
                                    htmlFor=""
                                >
                                    Monday - Friday
                                </label>
                                <div className="tranding_sigle_time_wrapp">
                                    {/* <select className="input_box">
                    <option value="1">09:00</option>
                  </select> */}
                                    <input
                                        type="time"
                                        name=""
                                        // value={monFromTime}
                                        // onChange={(e) => setMonFromTime(e.target.value)}
                                        id=""
                                        className="input_box"
                                    />
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                        }}
                                    >
                                        AM
                                    </p>
                                </div>
                                <div className="tranding_sigle_time_wrapp">
                                    {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                                    <input
                                        type="time"
                                        name=""
                                        // value={monToTime}
                                        // onChange={(e) => setMonToTime(e.target.value)}
                                        id=""
                                        className="input_box"
                                    />
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                        }}
                                    >
                                        PM
                                    </p>
                                </div>
                            </div>
                            {/* single time */}
                            <div className="tranding_times_wrapp_sec">
                                <label
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        minWidth: "118px",
                                    }}
                                    htmlFor=""
                                >
                                    Saturday
                                </label>
                                <div className="tranding_sigle_time_wrapp">
                                    {/* <select className="input_box">
                    <option value="1">09:00</option>
                  </select> */}
                                    <input
                                        type="time"
                                        name=""
                                        // value={satFromTime}
                                        // onChange={(e) => setSatFromTime(e.target.value)}
                                        id=""
                                        className="input_box"
                                    />
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                        }}
                                    >
                                        AM
                                    </p>
                                </div>
                                <div className="tranding_sigle_time_wrapp">
                                    <input
                                        type="time"
                                        name=""
                                        // value={satToTime}
                                        // onChange={(e) => setSatToTime(e.target.value)}
                                        id=""
                                        className="input_box"
                                    />
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                        }}
                                    >
                                        PM
                                    </p>
                                </div>
                            </div>
                            {/* single time */}
                            <div className="tranding_times_wrapp_sec">
                                <label
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        minWidth: "118px",
                                    }}
                                    htmlFor=""
                                >
                                    Sunday
                                </label>
                                <div className="tranding_sigle_time_wrapp">
                                    <input
                                        type="time"
                                        name=""
                                        // value={sunFromTime}
                                        // onChange={(e) => setSunFromTime(e.target.value)}
                                        id=""
                                        className="input_box"
                                    />
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                        }}
                                    >
                                        AM
                                    </p>
                                </div>
                                <div className="tranding_sigle_time_wrapp">
                                    <input
                                        type="time"
                                        name=""
                                        // value={sunToTime}
                                        // onChange={(e) => setSunToTime(e.target.value)}
                                        id=""
                                        className="input_box"
                                    />
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                        }}
                                    >
                                        PM
                                    </p>
                                </div>
                            </div>
                            {/* single time */}
                            <div className="tranding_times_wrapp_sec">
                                <label
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        minWidth: "118px",
                                    }}
                                    htmlFor=""
                                >
                                    Public Holidays
                                </label>
                                <div className="tranding_sigle_time_wrapp">
                                    <input
                                        type="time"
                                        name=""
                                        // value={holidayFromTime}
                                        // onChange={(e) => setHolidayFromTime(e.target.value)}
                                        id=""
                                        className="input_box"
                                    />
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                        }}
                                    >
                                        AM
                                    </p>
                                </div>
                                <div className="tranding_sigle_time_wrapp">
                                    <input
                                        type="time"
                                        name=""
                                        // value={holidayToTime}
                                        // onChange={(e) => setHolidayToTime(e.target.value)}
                                        id=""
                                        className="input_box"
                                    />
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                        }}
                                    >
                                        PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* tranding sec end */}

                    {/* single text-input */}
                    <div className="mm_form_single_input" style={{ alignItems: "flex-start" }}>
                        <label htmlFor="">Brand Description</label>
                        <textarea
                            type="text"
                            // value={physicalAddress}
                            // onChange={(e) => setPhysicalAddress(e.target.value)}
                            name=""
                            id=""
                            className="input_box"
                            rows={5}

                        />

                    </div>



                    {/* mm terms condition wrapp */}
                    <div className="mm_form_single_input">
                        <label htmlFor=""></label>
                        <div className="signup_terms_wrapp">
                            <input type="checkbox" />
                            <p className="fs-des">
                                I have read and agree to the{" "}
                                <a className="signup_terms_link">Terms and Conditions</a> &{" "}
                                <a className="signup_terms_link">Privacy Policy</a>
                            </p>
                        </div>
                    </div>

                    {/* upload button */}
                    <div className="mm_form_single_input">
                        <label htmlFor=""></label>
                        <div className="mall_upload_btn_wrapp">
                            <button
                                className="btn btn-orange"
                            // onClick={() => UpdateMallData()}
                            >
                                Update
                            </button>

                        </div>
                    </div>
                </div>
                {/* text-input wrapp end */}

                {/* upload images wrapp start */}
                <div className="mm_img_upload_wrapp">

                    {/* single upload image */}
                    <div className="myprofile_inner_sec2">
                        <h6 className="myprofile_upload_img_card_name">
                            Upload the Store logo
                            (200 x 200 pixels)
                        </h6>
                        {files && files.length > 0 ? (
                            <div className="myprofile_inner_sec2_img_upload">{thumbs}</div>
                        ) : (
                            <div style={{ width: "100%" }} {...getRootlogoProps()}>
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
                                        {...getInputlogoProps()}
                                        accept="image/jpeg, image/jpg, image/png, image/eps"
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
        </div>
    )
}

export default BrandEdit