import React, { useEffect, useState } from "react";
import "./AddFacilities.css";
import { useMallContext } from "../../context/mall_context";
import Notification from "../../utils/Notification";
import { IoChevronBack } from "react-icons/io5";
import { MallHero } from "../../components";
import Select from "react-select";
import { Link } from "react-router-dom";
import images from "../../constants/images";

const AddFacilities = ({
  get_mall_auth_data,
  getfacility_id,
  getsinglefacilitydata,
  setTab,
  mallheadname,
}) => {
  const { UpdataFacilityApi, getFacilityApi } = useMallContext();
  const [getfacilityTitle, setFacilityTitle] = useState(
    getsinglefacilitydata.name ? getsinglefacilitydata.name : ""
  );
  const [getfacilityDes, setFacilityDes] = useState(
    getsinglefacilitydata.description
  );
  const [gettermscondition, settermscondition] = useState();
  const [facmallname, setFacmallname] = useState();

  console.log("getfacility_id is", getfacility_id);
  console.log("getsinglefacilitydata is", getsinglefacilitydata);

  useEffect(() => {
    const mallmainnname = localStorage.getItem("mallmainname");
    console.log("==>", mallmainnname);
    setFacmallname(mallmainnname);
  }, []);

  const updateFacilityData = async () => {
    const formdata = await new FormData();
    await formdata.append("id", getfacility_id);
    await formdata.append("name", getfacilityTitle);
    await formdata.append("description", getfacilityDes);

    await formdata.append("terms_condition", gettermscondition);

    console.log("-=-=-=->", formdata);
    const data = await UpdataFacilityApi(formdata);
    if (data) {
      if (data.success === 1) {
        console.log("facility-data", data);
        Notification("success", "Success!", "Facility Updated Successfully!");
        setTab(6);
        // getFacilityApi();
      }
    }
    // }
  };

  return (
    <>
      <MallHero get_mall_auth_data={get_mall_auth_data} />
      <div className="mm_main_wrapp mm_main_wrapp_editfac">
        {/* mall management name start */}
        <div className="edit-brand-back-iconbox" onClick={() => setTab(6)}>
          <IoChevronBack className="edit-brand-back-icon" />{" "}
          <p className="edit-brand-back-txt">Back</p>
        </div>
        <div
          className="mall_name_wrapp"
          style={{ paddingLeft: "0px", paddingBottom: "3rem" }}>
          <p className="mall_name_heading">{facmallname}:</p>
          <span>Edit Facility</span>
        </div>
        {/* <div className="mm_horizontal_line"></div> */}
        {/* mall management name end */}

        {/* facilities form start */}
        <div className="mm_form_wrapp">
          {/* text-input wrapp start */}
          <div className="mm_form_input_wrapp" style={{ width: "100%" }}>
            <div className="Editfacility_drop_faci_main">
              <div className="mm_form_single_input editfaac_single_input">
                <label htmlFor="ename">Select facility</label>
                {/* <input
                type="text"
                value={getfacilityTitle}
                onChange={(e) => setFacilityTitle(e.target.value)}
                name="ename"
                id=""
                className="input_box"
              /> */}
                <select
                  className="leaderboard-card-inp editfacility_inputfields_main"
                  onChange={(e) => {
                    // setRetailertype(e.target.value);
                    // setRetailertypename(e.target.value);
                    // getBrand(e.target.value);
                  }}>
                  <option defaultValue value="">
                    {/* {retailertypename} */}
                  </option>
                  {/* {retailer_data &&
                  retailer_data.map((item, index) => {
                    return (
                      <>
                        <option value={item.id} key={index}>
                          {item.name}
                        </option>
                      </>
                    );
                  })} */}
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  minWidth: "200px",
                }}>
                <Link to={""}>
                  <p>
                    Preview Facilities &nbsp;<b>＞</b>
                  </p>
                </Link>
              </div>
            </div>

            {/* text-area sec start */}
            <div
              className="mm_form_single_input editfaac_single_input"
              style={{ alignItems: "flex-start" }}>
              <label htmlFor="">Description</label>
              <textarea
                type="text"
                value={getfacilityDes}
                onChange={(e) => setFacilityDes(e.target.value)}
                name=""
                id=""
                className="input_box editfacility_inputfields_main"
                rows={8}
              />
            </div>
            {/* text-area sec end */}

            <div
              className="mm_form_single_input  editfaac_single_input"
              style={{ alignItems: "flex-start" }}>
              <label htmlFor="">Select facility</label>
              <div className="editfacility_inputfields_main">
                <Select
                  // value={mallsOption}
                  styles={{ width: "100%", padding: "0px" }}
                  className="leaderboard-card-inp"
                  closeMenuOnSelect={false}
                  arrow={false}
                  isMulti
                  // components={animatedComponents}
                  // defaultValue={[colourOptions[4], colourOptions[5]]}
                  // options={multiple_week_data}
                  // onChange={setMallsOption}
                />
              </div>
            </div>

            {/* text-area sec start */}
            <div
              className="mm_form_single_input   editfaac_single_input"
              style={{ alignItems: "flex-start" }}>
              <label htmlFor="">Description</label>
              <textarea
                type="text"
                value={getfacilityDes}
                onChange={(e) => setFacilityDes(e.target.value)}
                name=""
                id=""
                className="input_box editfacility_inputfields_main"
                rows={8}
              />
            </div>
            {/* text-area sec end */}

            <div className="Editfacility_terms_addfac_main">
              <div className="Editfacility_terms_addfac_inner_side1">
                {/*  terms condition start */}
                <div
                  className="mm_form_single_input mb_8"
                  style={{ flexDirection: "column", gap: "0px" }}>
                  <div className="signup_terms_wrapp">
                    <label htmlFor="" className="editfac_label"></label>
                    <input
                      type="checkbox"
                      value={gettermscondition}
                      onChange={(e) => settermscondition(1)}
                    />
                    <p className="fs-des">
                      I have read and agree to the &nbsp;
                      <a className="signup_terms_link">Privacy Policy</a>
                    </p>
                  </div>
                  <div className="signup_terms_wrapp">
                    <label htmlFor="" className="editfac_label"></label>
                    <input
                      type="checkbox"
                      value={gettermscondition}
                      onChange={(e) => settermscondition(1)}
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
                <div className="mm_form_single_input">
                  <label htmlFor="" className="editfac_label"></label>
                  <button
                    className="btn btn-black"
                    style={{ alignSelf: "start", maxWidth: "150px" }}
                    onClick={() => updateFacilityData()}>
                    Update
                  </button>
                </div>
              </div>
              {/* upload btn end */}
              <div className="Editfacility_terms_addfac_side2">
                <b>Add another facility</b>
                {/* <img
                  src={images.add_new}
                  alt="add_new"
                  className="Editfacility_terms_addfac_side2_img"
                /> */}
              </div>
            </div>
          </div>
          {/* text-input wrapp end */}
        </div>
        {/* facilitie form end */}
      </div>
    </>
  );
};

export default AddFacilities;

// ⏷
