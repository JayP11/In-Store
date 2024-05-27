import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useMallContext } from "../context/mall_context";
import {
  ACCEPT_HEADER,
  get_brand_multiple,
  get_category,
} from "../utils/Constant";
import Notification from "../utils/Notification";
import { IoChevronBack } from "react-icons/io5";
import { MallHero } from "../components";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const EditStoreDetail = ({
  getstore_is,
  getsingleStoreData,
  setTab,
  getStoreList,
  get_mall_auth_data,
}) => {
  console.log("bbb", getstore_is);
  const { UpdateMallStore } = useMallContext();
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([]);
  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  useEffect(() => {
    console.log("mall-store-details is", getsingleStoreData);
  });

  // update store states
  const [storeName, setStoreName] = useState(
    getsingleStoreData
      ? getsingleStoreData.name !== null
        ? getsingleStoreData.name
        : ""
      : ""
  );
  const [storeNumber, setStoreNumber] = useState(
    getsingleStoreData.store_no && getsingleStoreData.store_no
  );
  const [storeLevel, setStoreLevel] = useState(
    getsingleStoreData.store_level ? getsingleStoreData.store_level : ""
  );
  const [getnumber, setNumber] = useState(
    getsingleStoreData.contact_no && getsingleStoreData.contact_no
  );

  const [getContactPerson, setContactPerson] = useState(
    getsingleStoreData.contact_person && getsingleStoreData.contact_person
  );
  const [getemail, setEmail] = useState(
    getsingleStoreData.email ? getsingleStoreData.email : ""
  );
  const [getBrandList, setBrandList] = useState(
    getsingleStoreData.brands ? getsingleStoreData.brands : ""
  );
  const [storeDes, setStoreDes] = useState(
    getsingleStoreData.description ? getsingleStoreData.description : ""
  );
  const [storeLogo, setStoreLogo] = useState(
    getsingleStoreData.store_logo && getsingleStoreData.store_logo
  );

  const [storeBnner, setStoreBanner] = useState(
    getsingleStoreData.banner_store && getsingleStoreData.banner_store
  );

  console.log("123", getnumber);
  console.log("123", getemail);
  console.log("123", storeLevel);
  // trnding hours
  // trnding hours states
  const [monFromTime, setMonFromTime] = useState(
    getsingleStoreData.mon_fri_from_time && getsingleStoreData.mon_fri_from_time
  );
  const [monToTime, setMonToTime] = useState(
    getsingleStoreData.mon_fri_to_time && getsingleStoreData.mon_fri_to_time
  );
  const [satFromTime, setSatFromTime] = useState(
    getsingleStoreData.sat_from_time && getsingleStoreData.sat_from_time
  );
  const [satToTime, setSatToTime] = useState(
    getsingleStoreData.sat_to_time && getsingleStoreData.sat_to_time
  );
  const [sunFromTime, setSunFromTime] = useState(
    getsingleStoreData.sun_from_time && getsingleStoreData.sun_from_time
  );
  const [sunToTime, setSunToTime] = useState(
    getsingleStoreData.sun_to_time && getsingleStoreData.sun_to_time
  );
  const [holidayFromTime, setHolidayFromTime] = useState(
    getsingleStoreData.holiday_from_time && getsingleStoreData.holiday_from_time
  );
  const [holidayToTime, setHolidayToTime] = useState(
    getsingleStoreData.holiday_to_time && getsingleStoreData.holiday_to_time
  );
  const [retailerType, setRetailerType] = useState(
    getsingleStoreData.type && getsingleStoreData.type
  );
  const [getcondition, setcondition] = useState(false);
  const [getcondition2, setcondition2] = useState(false);
  const [mallsOption, setMallsOption] = useState(
    getsingleStoreData.brands ? getsingleStoreData.brands : ""
  );
  // const [selected, setSelected] = useState(1)

  useEffect(() => {
    files.length > 0 &&
      files.map((item) => {
        setStoreLogo(item);
        console.log("files", item);
      });
  }, [files]);

  useEffect(() => {
    files2.length > 0 &&
      files2.map((item) => {
        setStoreBanner(item);
        console.log("files", item);
      });
  }, [files2]);

  const onHandleEmailChange = (e) => {
    let email = e.target.value;
    if (email === "" || regEx.test(email)) {
      setEmail(email);
    } else {
      return;
    }
  };

  const [isAcceptTerm, setIsAcceptTerm] = useState(0);
  const [isAcceptTerm2, setIsAcceptTerm2] = useState(0);
  const [imagecheck, setImageCheck] = useState(false);

  const handleTermChange = (e) => {
    setIsAcceptTerm(1);
    console.log("e.targate.value");
  };
  const handleTermChange2 = (e) => {
    setIsAcceptTerm2(1);
    console.log("e.targate.value");
  };

  // const onHandleNumberChange = (e) => {
  //   let number = e.target.value;
  //   if (number === "" || re.test(number)) {
  //     setNumber(number);
  //   } else {
  //     return;
  //   }
  // };

  // const handleTermChange = (event) => {
  //   if (retailerType == 1) {
  //     setRetailerType(2);
  //   } else {
  //     setRetailerType(1);
  //   }

  //   console.log("retailer type is", retailerType);
  // };

  // update mall store api

  const UpdateMallStoreData = async () => {
    // {
    //   var params = {
    //     store_id: getstore_is,
    //     name: storeName,
    //     store_no: storeNumber,
    //     store_level: storeLevel,
    //     number: number,
    //     email: email,
    //     description: storeDes,
    //     store_logo: storeLogo,

    //     mon_fri_from_time: monFromTime,
    //     mon_fri_to_time: monToTime,
    //     sat_from_time: satFromTime,
    //     sat_to_time: satToTime,
    //     sun_from_time: sunFromTime,
    //     sun_to_time: sunToTime,
    //     holiday_from_time: holidayFromTime,
    //     holiday_to_time: holidayToTime,
    //   };
    // {

    if (storeName == "" || undefined) {
      Notification("error", "Error!", "Please Enter Name!");
      return;
    } else if (retailerType == "" || undefined) {
      Notification("error", "Error!", "Please Select any one retailer type!");
      return;
    } else if (mallsOption.length <= 0 && retailerType == 2) {
      Notification(
        "error",
        "Error!",
        "Please Select any Brand otherwise select Independent Retailer!"
      );
      return;
    } else if (storeNumber == "" || undefined) {
      Notification("error", "Error!", "Please Enter Store Number!");
      return;
    } else if (storeCategory == "" || undefined) {
      Notification("error", "Error!", "Please Select Store Category!");
      return;
    }
    // else if (storeLevel == "" || undefined) {
    //   Notification("error", "Error!", "Please Select Store Level!");
    //   return;
    // }
    else if (getnumber == "" || undefined) {
      Notification("error", "Error!", "Please Enter Number!");
      return;
    }
    // else if (getContactPerson == "" || undefined) {
    //   Notification("error", "Error!", "Please Enter Contact Person Name!");
    //   return;
    // }
    else if (getemail == "" || undefined) {
      Notification("error", "Error!", "Please Enter Email!");
      return;
    } else if (storeDes == "" || undefined) {
      Notification("error", "Error!", "Please Enter some Description!");
      return;
    } else {
      const formdata = await new FormData();
      await formdata.append("id", getstore_is);
      await formdata.append("name", storeName);
      await formdata.append("store_no", storeNumber);
      await formdata.append("store_level", storeLevel);
      await formdata.append("contact_no", getnumber);
      await formdata.append("contact_person", getContactPerson);
      await formdata.append("email", getemail);
      await formdata.append("description", storeDes);
      await formdata.append("category_id", storeCategory);
      await formdata.append("terms_condition", isAcceptTerm);
      await formdata.append("privacy_policy", isAcceptTerm2);

      if (retailerType == 2) {
        for (var i = 0; i < mallsOption.length; i++) {
          await formdata.append("brand_id[" + i + "]", mallsOption[i].value);
        }
      }
      if (files[0] !== undefined) {
        await formdata.append("store_logo", files[0]);
      } else {
      }

      if (files2[0] !== undefined) {
        await formdata.append("banner_store", files2[0]);
      } else {
      }

      await formdata.append("mon_fri_from_time", monFromTime);
      await formdata.append("mon_fri_to_time", monToTime);
      await formdata.append("sat_from_time", satFromTime);
      await formdata.append("sat_to_time", satToTime);
      await formdata.append("sun_from_time", sunFromTime);
      await formdata.append("sun_to_time", sunToTime);
      await formdata.append("holiday_from_time", holidayFromTime);
      await formdata.append("holiday_to_time", holidayToTime);
      await formdata.append("type", retailerType);
      // }

      console.log("-=-=-=->", formdata);
      const data = await UpdateMallStore(formdata);
      if (data) {
        if (data.success === 1) {
          console.log("mall-data", data);
          Notification("success", "Success!", "Brand Updated Successfully!");
          setTab(3);
          // getStoreList();
        } else if (data.success === 0) {
          console.log("mall-data", data);
          Notification("error", "Error!", data.message);
          setTab(3);
          // getStoreList();
        }
      }
    }

    // }
  };

  const { getRootProps: getRootLogoProps, getInputProps: getInputLogoProps } =
    useDropzone({
      onDrop: async (acceptedFiles) => {
        console.log("acceptedFiles", acceptedFiles);
        {
          const maxSizeKB = 40; // Maximum size limit in KB
          const maxSizeBytes = maxSizeKB * 1024; // Convert KB to bytes

          const filteredFiles = await Promise.all(
            acceptedFiles.map(async (file) => {
              const isSizeValid = file.size <= maxSizeBytes; // Limit size to 50KB (in bytes)
              const isImage = file.type.startsWith("image/"); // Check if it's an image file

              if (!isImage || !isSizeValid) {
                return null; // Skip files that are not images or exceed size limit
              }

              // Load image and wait for it to load
              const img = new Image();
              img.src = URL.createObjectURL(file);
              await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
              });

              // Check image dimensions
              const isDimensionsValid = img.width == 200 && img.height == 200;
              if (isDimensionsValid) {
                setImageCheck(true);
              } else {
                setImageCheck(false);
              }
              return isDimensionsValid ? file : null; // Return file if dimensions are valid, otherwise skip it
            })
          );
          const validFiles = filteredFiles.filter((file) => file !== null);
          {
            setFiles(
              validFiles.map((file) =>
                Object.assign(file, {
                  preview: URL.createObjectURL(file),
                })
              )
            );
            if (validFiles.length !== acceptedFiles.length) {
              if (validFiles.length !== acceptedFiles.length) {
                setImageCheck(false);
              } else {
                setImageCheck(true);
              }
              Notification(
                "error",
                "Error!",
                "Some files exceed the maximum size limit of 40KB or do not meet the dimension requirements of 200x200 pixels and will not be uploaded."
              );
            }
          }
        }
        setcondition(true);
        if (acceptedFiles.length === 0) {
          window.location.reload(true);
        }
      },
    });

  const {
    getRootProps: getRootBannerProps,
    getInputProps: getInputBannerProps,
  } = useDropzone({
    onDrop: async (acceptedFiles) => {
      console.log("acceptedFiles", acceptedFiles);
      {
        const maxSizeKB = 200; // Maximum size limit in KB
        const maxSizeBytes = maxSizeKB * 1024; // Convert KB to bytes
        const filteredFiles = await Promise.all(
          acceptedFiles.map(async (file) => {
            const isSizeValid = file.size <= maxSizeBytes; // Limit size to 50KB (in bytes)
            const isImage = file.type.startsWith("image/"); // Check if it's an image file

            if (!isImage || !isSizeValid) {
              return null; // Skip files that are not images or exceed size limit
            }

            // Load image and wait for it to load
            const img = new Image();
            img.src = URL.createObjectURL(file);
            await new Promise((resolve, reject) => {
              img.onload = resolve;
              img.onerror = reject;
            });

            // Check image dimensions
            const isDimensionsValid = img.width == 1050 && img.height == 284;
            if (isDimensionsValid) {
              setImageCheck(true);
            } else {
              setImageCheck(false);
            }
            return isDimensionsValid ? file : null; // Return file if dimensions are valid, otherwise skip it
          })
        );

        const validFiles = filteredFiles.filter((file) => file !== null);
        {
          setFiles2(
            validFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
          if (validFiles.length !== acceptedFiles.length) {
            if (validFiles.length !== acceptedFiles.length) {
              setImageCheck(false);
            } else {
              setImageCheck(true);
            }
            Notification(
              "error",
              "Error!",
              "Some files exceed the maximum size limit of 200KB or do not meet the dimension requirements of 1050x284 pixels and will not be uploaded."
            );
          }
        }
      }
      setcondition2(true);
      if (acceptedFiles.length === 0) {
        window.location.reload(true);
      }
    },
  });

  const thumbs = files.map((file) => (
    <img
      src={file.preview}
      style={{
        width: "100%",
        height: "100%",
        maxHeight: "175px",
        filter: "grayscale(100%)",
      }}
      className="img-fluid"
      alt="file"
    />
  ));

  const thumbs2 = files2.map((file) => (
    <img
      src={file.preview}
      style={{ width: "100%", height: "100%", maxHeight: "175px" }}
      className="img-fluid"
      alt="file"
    />
  ));

  useEffect(() => {
    // console.log("get_brand_data", get_brand_data);
    getcat();
    getMutipleBrand();
  }, []);

  const [catarray, SetArray] = useState([]);
  const [getMultipleBrand, setMultipleBrand] = useState([]);

  const [storeCategory, setStoreCategory] = useState(
    getsingleStoreData.categorys == null ||
      getsingleStoreData.categorys == "" ||
      getsingleStoreData.categorys.id == null ||
      getsingleStoreData.categorys.id == ""
      ? ""
      : getsingleStoreData.categorys.id
  );
  const [categoryName, setCategoryName] = useState(
    getsingleStoreData.categorys == null ||
      getsingleStoreData.categorys == "" ||
      getsingleStoreData.categorys.name == null ||
      getsingleStoreData.categorys.name == ""
      ? ""
      : getsingleStoreData.categorys.name
  );

  const getcat = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_category, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        // console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          SetArray(res.data.data);
        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  const getMutipleBrand = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_brand_multiple, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(
          "get multiple brand data",
          JSON.stringify(res.data, null, 2)
        );
        if (res.data.success == 1) {
          setMultipleBrand(res.data.data);
        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  return (
    <>
      <MallHero get_mall_auth_data={get_mall_auth_data} />

      <div className="mm_main_wrapp">
        <div className="edit-brand-back-iconbox" onClick={() => setTab(3)}>
          <IoChevronBack className="edit-brand-back-icon" />{" "}
          <p className="edit-brand-back-txt">Back</p>
        </div>
        {/* mall management name start */}
        <div className="mall_name_wrapp mm_form_wrapp_name_padding">
          {/* <p className="mall_name_heading">{getsingleStoreData.name ? getsingleStoreData.name : ""}:</p> */}
          <p className="mall_name_heading">{get_mall_auth_data.name}:</p>
          <span style={{ fontWeight: "600" }}>Edit Brand</span>
        </div>
        {/* <div className="mm_horizontal_line"></div> */}
        <div className="" style={{ marginTop: "2rem" }}></div>
        {/* mall management name end */}

        {/* mall management form start */}
        <div className="mm_form_wrapp mm_form_wrapp_add_brand_mall mm_form_wrapp_padding">
          {/* text-input wrapp start */}
          <div className="mm_form_input_wrapp">
            {/* <div className="signup_terms_wrapp indep-side">
              <div className="mm_form_single_input">
                <label htmlFor="" style={{ minWidth: "153px" }}>Retailer type</label>

                <div className="radio-btn-flex-brand">
                  <div className="radio-btn-inner-flex">
                    <input
                      type="radio"
                      id="Online"
                      name="gender"
                      value="1"
                      checked={retailerType == 1}
                      onChange={(e) => { setRetailerType(e.target.value); console.log("-->", retailerType); }}
                    // onChange={(e) => { setRetailerType(1); console.log("-->", retailerType); }}

                    />
                    <label className="course-form-txt" for="male">
                      Independent Retailer
                    </label>
                  </div>

                  <div className="radio-btn-inner-flex">
                    <input
                      type="radio"
                      id="In-Person"
                      name="gender"
                      value="2"
                      checked={retailerType == 2}
                      onChange={(e) => { setRetailerType(e.target.value); console.log("-->", retailerType); }}
                    />
                    <label className="course-form-txt" for="specifyColor">
                      Group Retailer
                    </label>
                  </div>
                </div>
              </div>

            </div> */}

            <div className="signup_terms_wrapp indep-side">
              <div className="mm_form_single_input">
                <label htmlFor="" style={{ minWidth: "153px" }}>
                  Retailer type
                </label>

                <div className="radio-btn-flex-brand">
                  <div className="radio-btn-inner-flex">
                    <input
                      type="radio"
                      id="Online"
                      name="gender"
                      value="1"
                      checked={retailerType == 1}
                      onChange={(e) => {
                        setRetailerType(e.target.value);
                        console.log("-->", retailerType);
                      }}
                      // onChange={(e) => { setRetailerType(1); console.log("-->", retailerType); }}
                    />
                    <label className="course-form-txt" for="male">
                      Independent Retailer
                    </label>
                  </div>

                  <div className="radio-btn-inner-flex">
                    <input
                      type="radio"
                      id="In-Person"
                      name="gender"
                      value="2"
                      checked={retailerType == 2}
                      onChange={(e) => {
                        setRetailerType(e.target.value);
                        console.log("-->", retailerType);
                      }}
                    />
                    <label className="course-form-txt" for="specifyColor">
                      Group Retailer
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "153px" }}>
                Brand Name <span className="star_require">*</span>
              </label>
              <input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}

            {retailerType == 2 ? (
              <>
                <div className="mm_form_single_input">
                  <label htmlFor="" className="" style={{ minWidth: "148px" }}>
                    Select Brands
                  </label>

                  <Select
                    value={mallsOption}
                    styles={{ width: "100%", padding: "0px" }}
                    className="leaderboard-card-inp"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    // defaultValue={[getBrandList]}
                    // defaultValue={getBrandList}
                    isMulti
                    options={getMultipleBrand}
                    onChange={setMallsOption}
                  />
                </div>
              </>
            ) : (
              <></>
            )}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "153px" }}>
                Category<span className="star_require">*</span>
              </label>
              <div className="select-wrapper" style={{ width: "100%" }}>
                <select
                  className="leaderboard-card-inp cons_select_nav"
                  onChange={(e) => {
                    setStoreCategory(e.target.value);
                    setCategoryName(e.target.value);
                    console.log(e.target.value);
                  }}>
                  <option defaultValue value="">
                    {categoryName}
                  </option>
                  {catarray &&
                    catarray.map((item, index) => {
                      return (
                        <>
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
              {/* <input
              type="text"
              value={getcategory}
              onChange={(e) => setStoreName(e.target.value)}
              name=""
              id=""
              className="input_box"
            /> */}
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "153px" }}>
                Store Number (ID)<span className="star_require">*</span>
              </label>
              <input
                type="text"
                value={storeNumber}
                onChange={(e) => setStoreNumber(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "153px" }}>
                Store Level
              </label>
              <input
                type="text"
                value={storeLevel}
                onChange={(e) => setStoreLevel(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "153px" }}>
                Contact Person
              </label>
              <input
                type="text"
                value={getContactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "153px" }}>
                Contact Number<span className="star_require">*</span>
              </label>
              <input
                type="number"
                value={getnumber}
                onChange={(e) => setNumber(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label htmlFor="" style={{ minWidth: "153px" }}>
                Email Address<span className="star_require">*</span>
              </label>
              <input
                type="email"
                value={getemail}
                onChange={(e) => setEmail(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>

            {/* tranding sec strat */}
            <div className="mm_tranding_wrapp">
              <label
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  minWidth: "153px",
                }}
                htmlFor="">
                Trading Hours<span className="star_require">*</span>
              </label>
              <div className="tranding_times_wrapp">
                {/* single time */}
                <div className="tranding_times_wrapp_sec">
                  <label
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      minWidth: "153px",
                    }}
                    htmlFor="">
                    Monday - Friday
                  </label>
                  <div
                    className="tranding_sigle_time_wrapp"
                    style={{ gap: "0px", width: "138px" }}>
                    {/* <select className="input_box">
                    <option value="1">09:00</option>
                  </select> */}
                    <input
                      type="time"
                      name=""
                      value={monFromTime}
                      onChange={(e) => setMonFromTime(e.target.value)}
                      id=""
                      className="input_box"
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                  <div
                    className="tranding_sigle_time_wrapp"
                    style={{ gap: "0px", width: "138px" }}>
                    {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                    <input
                      type="time"
                      name=""
                      value={monToTime}
                      onChange={(e) => setMonToTime(e.target.value)}
                      id=""
                      className="input_box"
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                </div>
                {/* single time */}
                <div className="tranding_times_wrapp_sec">
                  <label
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      minWidth: "153px",
                    }}
                    htmlFor="">
                    Saturday
                  </label>
                  <div
                    className="tranding_sigle_time_wrapp"
                    style={{ gap: "0px", width: "138px" }}>
                    {/* <select className="input_box">
                    <option value="1">09:00</option>
                  </select> */}
                    <input
                      type="time"
                      name=""
                      value={satFromTime}
                      onChange={(e) => setSatFromTime(e.target.value)}
                      id=""
                      className="input_box"
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                  <div
                    className="tranding_sigle_time_wrapp"
                    style={{ gap: "0px", width: "138px" }}>
                    {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                    <input
                      type="time"
                      name=""
                      value={satToTime}
                      onChange={(e) => setSatToTime(e.target.value)}
                      id=""
                      className="input_box"
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                </div>
                {/* single time */}
                <div className="tranding_times_wrapp_sec">
                  <label
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      minWidth: "153px",
                    }}
                    htmlFor="">
                    Sunday
                  </label>
                  <div
                    className="tranding_sigle_time_wrapp"
                    style={{ gap: "0px", width: "138px" }}>
                    {/* <select className="input_box">
                    <option value="1">09:00</option>
                  </select> */}
                    <input
                      type="time"
                      name=""
                      value={sunFromTime}
                      onChange={(e) => setSunFromTime(e.target.value)}
                      id=""
                      className="input_box"
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                  <div
                    className="tranding_sigle_time_wrapp"
                    style={{ gap: "0px", width: "138px" }}>
                    {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                    <input
                      type="time"
                      name=""
                      value={sunToTime}
                      onChange={(e) => setSunToTime(e.target.value)}
                      id=""
                      className="input_box"
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                </div>
                {/* single time */}
                <div className="tranding_times_wrapp_sec">
                  <label
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      minWidth: "153px",
                    }}
                    htmlFor="">
                    Public Holidays
                  </label>
                  <div
                    className="tranding_sigle_time_wrapp"
                    style={{ gap: "0px", width: "138px" }}>
                    {/* <select className="input_box">
                    <option value="1">09:00</option>
                  </select> */}
                    <input
                      type="time"
                      name=""
                      value={holidayFromTime}
                      onChange={(e) => setHolidayFromTime(e.target.value)}
                      id=""
                      className="input_box"
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                  <div
                    className="tranding_sigle_time_wrapp"
                    style={{ gap: "0px", width: "138px" }}>
                    {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                    <input
                      type="time"
                      name=""
                      value={holidayToTime}
                      onChange={(e) => setHolidayToTime(e.target.value)}
                      id=""
                      className="input_box"
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                      }}></p>
                  </div>
                </div>
              </div>
            </div>
            {/* tranding sec end */}

            {/* text-area sec start */}
            <div
              className="mm_form_single_input"
              style={{ alignItems: "flex-start" }}>
              <label htmlFor="" style={{ minWidth: "153px" }}>
                Brand Description<span className="star_require">*</span>
              </label>
              <textarea
                type="text"
                value={storeDes}
                onChange={(e) => setStoreDes(e.target.value)}
                name=""
                id=""
                className="input_box"
                rows={8}
              />
            </div>
            <div
              className="mm_form_single_input"
              style={{ alignItems: "flex-start" }}>
              <label htmlFor="" style={{ minWidth: "153px" }}></label>
              <span style={{ fontSize: "14px", color: "#bbb" }}>
                *Required Fields including all image uploads.
              </span>
            </div>

            {/* <div className="signup_terms_wrapp indep-side">
              <div className="mm_form_single_input">
                <label htmlFor="" style={{ minWidth: "153px" }}>Retailer type</label>

                <div className="radio-btn-flex-brand">
                  <div className="radio-btn-inner-flex">
                    <input
                      type="radio"
                      id="Online"
                      name="gender"
                      value="1"
                      checked={retailerType == 1}
                      onChange={(e) => { setRetailerType(e.target.value); console.log("-->", retailerType); }}
                    // onChange={(e) => { setRetailerType(1); console.log("-->", retailerType); }}

                    />
                    <label className="course-form-txt" for="male">
                      Independent Retailer
                    </label>
                  </div>

                  <div className="radio-btn-inner-flex">
                    <input
                      type="radio"
                      id="In-Person"
                      name="gender"
                      value="2"
                      checked={retailerType == 2}
                      onChange={(e) => { setRetailerType(e.target.value); console.log("-->", retailerType); }}
                    />
                    <label className="course-form-txt" for="specifyColor">
                      Group Retailer
                    </label>
                  </div>
                </div>
              </div>

            </div> */}

            {/* text-area sec end */}

            <div className="mm_form_single_input mb_8">
              <label htmlFor="" style={{ minWidth: "153px" }}></label>
              <div>
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

                <div className="signup_terms_wrapp indep-side">
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
            </div>
            <div className="mm_form_single_input brand-resp-btn">
              <div className="mm_form_single_input brand-resp-btn">
                <label htmlFor="" style={{ minWidth: "135px" }}></label>
                <button
                  className="btn btn-black"
                  onClick={() => UpdateMallStoreData()}
                  disabled={
                    isAcceptTerm == 1 && isAcceptTerm2 == 1 ? false : true
                  }
                  style={{
                    marginTop: "20px",
                    width: "200px",
                    marginLeft: "10px",
                  }}>
                  Update
                </button>
              </div>
            </div>
          </div>
          {/* text-input wrapp end */}
          <div className="brand-add-img-flex">
            {/* upload images wrapp start */}
            <div className="mm_img_upload_wrapp" style={{ width: "100%" }}>
              {/* single upload image */}
              <div className="img-upl-border">
                <div
                  className="myprofile_inner_sec2"
                  {...getRootLogoProps()}
                  style={{
                    border: "none",
                    paddingBottom: "0px",
                    maxWidth: "250px",
                  }}>
                  {/* <input
                {...getInputlogoProps()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              /> */}
                  <h4
                    style={{
                      marginBottom: "10px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                    className="myprofile_upload_img_card_name">
                    Upload black and white <br />
                    Brand logo <br />
                    (200 x 200 pixels)
                    <br />
                    (max 40kb)<span className="star_require">*</span>
                    <br />{" "}
                  </h4>
                  {getcondition === true ? (
                    <>
                      {files && files.length > 0 ? (
                        <div className="myprofile_inner_sec2_img_upload">
                          {thumbs}
                        </div>
                      ) : (
                        <div style={{ width: "100%" }}>
                          <div className="myprofile_inner_sec2_img_upload">
                            <AiOutlineCloudUpload
                              style={{
                                width: "60px",
                                height: "60px",
                                color: "var(--color-orange)",
                                marginBottom: "10px",
                              }}
                            />
                            <h4>.JPG .PNG</h4>
                            <p>You can also upload file by</p>
                            {/* <input
                              {...getRootLogoProps()}
                              accept="image/jpeg, image/jpg, image/png, image/eps"
                            /> */}
                            <button
                              type="button"
                              className="click_upload_btn"
                              style={{ marginBottom: "10px" }}>
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
                              }}>
                              Upload File
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      {getsingleStoreData.store_logo_path === null ? (
                        <>
                          <div style={{ width: "100%" }}>
                            <div className="myprofile_inner_sec2_img_upload">
                              <AiOutlineCloudUpload
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  color: "var(--color-orange)",
                                  marginBottom: "10px",
                                }}
                              />
                              <h4>.JPG .PNG</h4>
                              <p>You can also upload file by</p>
                              {/* <input
                                {...getRootLogoProps()}
                                accept="image/jpeg, image/jpg, image/png, image/eps"
                              /> */}
                              <button
                                type="button"
                                className="click_upload_btn"
                                style={{ marginBottom: "10px" }}>
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
                                }}>
                                Upload File
                              </button>
                            </div>
                          </div>
                          {/* <button className="btn btn-blue" onClick={() => setFiles([])}>
                            Cancel
                          </button> */}
                        </>
                      ) : (
                        <>
                          <div className="myprofile_inner_sec2_img_upload">
                            <img
                              src={getsingleStoreData.store_logo_path}
                              style={{
                                width: "100%",
                                height: "100%",
                                filter: "grayscale(100%)",
                              }}
                              className="img-fluidb"
                            />
                          </div>
                          <div className="btnn-main" style={{ width: "100%" }}>
                            <button
                              className="btn btn-black mb_8"
                              type="button"
                              onClick={() => {
                                // setFiles([]);
                              }}>
                              Upload File
                            </button>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    alingitem: "center",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}>
                  <button
                    className="btn"
                    onClick={() => setFiles([])}
                    style={{
                      marginBottom: "10px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            {/* upload images wrapp end */}
            <p className="upload_img_instr">
              All Brand logo’s to be uploaded <br />
              in black and white format <br />
              (no colour logo’s)
            </p>
            {/* upload images wrapp start */}
            <div className="mm_img_upload_wrapp" style={{ width: "100%" }}>
              {/* single upload image */}
              <div className="img-upl-border">
                <div
                  className="myprofile_inner_sec2"
                  {...getRootBannerProps()}
                  style={{
                    border: "none",
                    paddingBottom: "0px",
                    maxWidth: "250px",
                  }}>
                  {/* <input
                {...getInputlogoProps()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              /> */}
                  <h5
                    style={{
                      marginBottom: "10px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}>
                    Upload black and white <br />
                    Brand banner <br /> (1050 x 284 pixels) <br /> (max 200kb)
                    <span className="star_require">*</span>
                  </h5>
                  {getcondition2 === true ? (
                    <>
                      {files2 && files2.length > 0 ? (
                        <div className="myprofile_inner_sec2_img_upload">
                          {thumbs2}
                        </div>
                      ) : (
                        <div style={{ width: "100%" }}>
                          <div className="myprofile_inner_sec2_img_upload">
                            <AiOutlineCloudUpload
                              style={{
                                width: "60px",
                                height: "60px",
                                color: "var(--color-orange)",
                                marginBottom: "10px",
                              }}
                            />
                            <h4>.JPG .PNG</h4>
                            <p>You can also upload file by</p>
                            {/* <input
                              {...getRootLogoProps()}
                              accept="image/jpeg, image/jpg, image/png, image/eps"
                            /> */}
                            <button
                              type="button"
                              className="click_upload_btn"
                              style={{ marginBottom: "10px" }}>
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
                              }}>
                              Upload File
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      {getsingleStoreData.banner_store_path === null ? (
                        <>
                          <div style={{ width: "100%" }}>
                            <div className="myprofile_inner_sec2_img_upload">
                              <AiOutlineCloudUpload
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  color: "var(--color-orange)",
                                  marginBottom: "10px",
                                }}
                              />
                              <h4>.JPG .PNG</h4>
                              <p>You can also upload file by</p>
                              {/* <input
                                {...getRootBannerProps()}
                                accept="image/jpeg, image/jpg, image/png, image/eps"
                              /> */}
                              <button
                                type="button"
                                className="click_upload_btn"
                                style={{ marginBottom: "10px" }}>
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
                                }}>
                                Upload File
                              </button>
                            </div>
                          </div>
                          {/* <button className="btn btn-blue" onClick={() => setFiles([])}>
                            Cancel
                          </button> */}
                        </>
                      ) : (
                        <>
                          <div className="myprofile_inner_sec2_img_upload">
                            <img
                              src={getsingleStoreData.banner_store_path}
                              style={{ width: "100%", height: "100%" }}
                              alt=""
                              className="img-fluidb"
                            />
                          </div>
                          <div className="btnn-main" style={{ width: "100%" }}>
                            <button
                              className="btn btn-black mb_8"
                              type="button"
                              onClick={() => {
                                // setFiles([]);
                              }}>
                              Upload File
                            </button>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    alingitem: "center",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}>
                  <button
                    className="btn"
                    onClick={() => setFiles2([])}
                    style={{
                      marginBottom: "10px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            {/* upload images wrapp end */}
          </div>
        </div>

        <div className="signup_terms_wrapp indep-side-show">
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
        <div className="signup_terms_wrapp indep-side-show">
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
        <div className="mm_form_single_input brand-resp-show-btn">
          <button
            className="btn btn-black"
            onClick={() => UpdateMallStoreData()}
            disabled={isAcceptTerm == 1 && isAcceptTerm2 == 1 ? false : true}
            style={{ width: "200px" }}>
            Update
          </button>
        </div>
        {/* mall management form end */}
      </div>
    </>
  );
};

export default EditStoreDetail;
