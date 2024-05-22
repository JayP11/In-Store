import React, { useEffect, useState } from "react";
import "./EditFacilities.css";
import { useMallContext } from "../../context/mall_context";
import Notification from "../../utils/Notification";
import { IoChevronBack } from "react-icons/io5";
import { MallHero } from "../../components";
import Select from "react-select";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { ACCEPT_HEADER, get_facility_master } from "../../utils/Constant";
import axios from "axios";

const EditFacilities = ({
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
  // const [storeCategory, setStoreCategory] = useState(getsingleStoreData.categorys == null ||
  //   getsingleStoreData.categorys == "" ||
  //   getsingleStoreData.categorys.id == null ||
  //   getsingleStoreData.categorys.id == ""
  //   ? ""
  //   : getsingleStoreData.categorys.id);
  const [storeCategory, setStoreCategory] = useState(getsinglefacilitydata.facilities == null || getsinglefacilitydata.facilities == "" || getsinglefacilitydata.facilities.id == null || getsinglefacilitydata.facilities.id == "" ? "" : getsinglefacilitydata.facilities.id);
  const [categoryName, setCategoryName] = useState(getsinglefacilitydata.facilities == null || getsinglefacilitydata.facilities == "" || getsinglefacilitydata.facilities.name == null || getsinglefacilitydata.facilities.name == "" ? "" : getsinglefacilitydata.facilities.name)
  const [gettermscondition, settermscondition] = useState();
  const [facmallname, setFacmallname] = useState();



  console.log("getfacility_id is", getfacility_id);
  console.log("getsinglefacilitydata is", getsinglefacilitydata);

  const [facilityData,setFacilityData] = useState([]);

  useEffect(() => {
    const mallmainnname = localStorage.getItem("mallmainname");
    console.log("==>", mallmainnname);
    setFacmallname(mallmainnname);
    getfacility();
  }, []);

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

  const getfacility = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_facility_master, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          setFacilityData(res.data.data);
        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };


  const updateFacilityData = async () => {
    const formdata = await new FormData();
    await formdata.append("id", getfacility_id);
    await formdata.append("facility_id", storeCategory);
    // await formdata.append("name", getfacilityTitle);
    await formdata.append("description", getfacilityDes);

    await formdata.append("terms_condition", isAcceptTerm);
    await formdata.append("privacy_policy", isAcceptTerm2);
    console.log("-=-=-=->", formdata);
    const data = await UpdataFacilityApi(formdata);
    if (data) {
      if (data.success === 1) {
         Notification("success", "Success!", "Facility Updated Successfully!");
        setTab(6);
        // getFacilityApi();
      }
    }
    // }
  };

 
   
  //   if (storeName == "" || undefined) {
  //     Notification("error", "Error!", "Please Enter Name!");
  //     return;
  //   } else if (storeNumber == "" || undefined) {
  //     Notification("error", "Error!", "Please Enter Store Number!");
  //     return;
  //   } else if (storeCategory == "" || undefined) {
  //     Notification("error", "Error!", "Please Select Store Category!");
  //     return;
  //   } else if (storeLevel == "" || undefined) {
  //     Notification("error", "Error!", "Please Select Store Level!");
  //     return;
  //   } else if (getnumber == "" || undefined) {
  //     Notification("error", "Error!", "Please Enter Number!");
  //     return;
  //   } else if (getContactPerson == "" || undefined) {
  //     Notification("error", "Error!", "Please Enter Contact Person Name!");
  //     return;
  //   } else if (getemail == "" || undefined) {
  //     Notification("error", "Error!", "Please Enter Email!");
  //     return;
  //   } else if (storeDes == "" || undefined) {
  //     Notification("error", "Error!", "Please Enter some Description!");
  //     return;
  //   } else {
  //     const formdata = await new FormData();
  //     await formdata.append("id", getstore_is);
  //     await formdata.append("name", storeName);
  //     await formdata.append("store_no", storeNumber);
  //     await formdata.append("store_level", storeLevel);
  //     await formdata.append("contact_no", getnumber);
  //     await formdata.append("contact_person", getContactPerson);
  //     await formdata.append("email", getemail);
  //     await formdata.append("description", storeDes);
  //     await formdata.append("category_id", storeCategory);
  //       await formdata.append("terms_condition", isAcceptTerm);
  //       await formdata.append("privacy_policy", isAcceptTerm2);
  //     if (files[0] !== undefined) {
  //       await formdata.append("store_logo", files[0]);
  //     } else {
  //     }

  //     if (files2[0] !== undefined) {
  //       await formdata.append("banner_store", files2[0]);
  //     } else {
  //     }

  //     await formdata.append("mon_fri_from_time", monFromTime);
  //     await formdata.append("mon_fri_to_time", monToTime);
  //     await formdata.append("sat_from_time", satFromTime);
  //     await formdata.append("sat_to_time", satToTime);
  //     await formdata.append("sun_from_time", sunFromTime);
  //     await formdata.append("sun_to_time", sunToTime);
  //     await formdata.append("holiday_from_time", holidayFromTime);
  //     await formdata.append("holiday_to_time", holidayToTime);
  //     await formdata.append("type", retailerType);
  //     // }

  //     console.log("-=-=-=->", formdata);
  //     const data = await UpdateMallStore(formdata);
  //     if (data) {
  //       if (data.success === 1) {
  //         console.log("mall-data", data);
  //         Notification("success", "Success!", "Brand Updated Successfully!");
  //         setTab(3);
  //         // getStoreList();
  //       }
  //     }
  //   }



  //   // }
  // };

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
          className="mall_name_wrapp mm_mm_main_wrapp"
          style={{ paddingLeft: "0px", paddingBottom: "3rem" }}>
          <p className="mall_name_heading mall_mall_name_heading">{facmallname}:</p>
          <span className="mall_mall_name_heading" style={{fontWeight:"600"}}>Edit Facility</span>
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
                    setStoreCategory(e.target.value);
                    setCategoryName(e.target.value);
                    console.log(e.target.value);
                  }}>
                  <option defaultValue value="">
                    {categoryName}
                  </option>
                  {facilityData &&
                  facilityData.map((item, index) => {
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  minWidth: "200px",
                }}>
                <Link to={""} onClick={()=>{setTab(6)}}>
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

            {/* <div
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
            </div> */}

            {/* text-area sec start */}
            {/* <div
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
            </div> */}
            {/* text-area sec end */}

            <div className="Editfacility_terms_addfac_main">
              <div className="Editfacility_terms_addfac_inner_side1">
                {/*  terms condition start */}
                <div
                  className="mm_form_single_input mb_8"
                  style={{ flexDirection: "column", gap: "0px" }}>
                  <div className="signup_terms_wrapp">
                    <label htmlFor="" className="editfac_label" style={{minWidth:"162px"}}></label>
                    <input
                                      type="checkbox"

                     value={isAcceptTerm}
                  onChange={handleTermChange}
                  checked={isAcceptTerm}
                    />
                    <p className="fs-des">
                      I have read and agree to the &nbsp;
                      <a className="signup_terms_link">Privacy Policy</a>
                    </p>
                  </div>
                  <div className="signup_terms_wrapp">
                    <label htmlFor="" className="editfac_label" style={{minWidth:"162px"}}></label>
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
                <div className="mm_form_single_input">
                  <label htmlFor="" className="editfac_label"></label>
                  <button
                                    disabled={isAcceptTerm == 1 && isAcceptTerm2 ==1 ? false : true}

                    className="btn btn-black"
                    style={{ alignSelf: "start", maxWidth: "150px" }}
                    onClick={() => updateFacilityData()}>
                    Update
                  </button>
                </div>
              </div>
              {/* upload btn end */}
              {/* <div
                className="Editfacility_terms_addfac_side2"
                onClick={() => {
                  setTab(26);
                }}>
                <b>Add another facility</b>
                <img
                  src={images.add_new}
                  alt="add_new"
                  className="Editfacility_terms_addfac_side2_img"
                />
              </div> */}
            </div>
          </div>
          {/* text-input wrapp end */}
        </div>
        {/* facilitie form end */}
      </div>
    </>
  );
};

export default EditFacilities;

// ⏷