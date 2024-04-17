import React, { useEffect, useState } from "react";
import "./CinemaAccountSetting.css";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useMallContext } from "../../context/mall_context";
import { useStoreContext } from "../../context/store_context";
import images from "../../constants/images";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { ACCEPT_HEADER, get_mall, get_retailer, get_store_mall } from "../../utils/Constant";
import Notification from "../../utils/Notification";
import ReactModal from "react-modal";


const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const animatedComponents = makeAnimated();


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    backgroundColor: "none",
    border: "none",
    borderRadius: "0px",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};
const CinemaAccountSetting = ({ get_mall_auth_data, sidebaropen, setTab }) => {
  const [getmallmasterid, setmallmasterid] = useState(
    get_mall_auth_data == null ||
      get_mall_auth_data == "" ||
      get_mall_auth_data.mall_id == null ||
      get_mall_auth_data.mall_id == ""
      ? ""
      : get_mall_auth_data.mall_id
  );
  const [getmalmastername, setmallmastername] = useState(
    get_mall_auth_data.malls == null ||
      get_mall_auth_data.malls == "" ||
      get_mall_auth_data.malls.name == null ||
      get_mall_auth_data.malls.name == ""
      ? ""
      : get_mall_auth_data.malls.name
  );

  const [getbrandData, setBrandData] = useState(
    get_mall_auth_data && get_mall_auth_data
  );
  const { UpdateMall, get_brand_data, get_mall_data, getBrand,getBrandMultiple,get_brand_data_multiple } =
    useMallContext();

  const { UpdateCinema } =
    useStoreContext();



  const {
    retailer_data,
    UpdateStore,
    multiple_week_data,
    getRetailerApi,
    getMultipleMall,
    getCinema,
    cinema_mall_data
  } = useStoreContext();

  useEffect(() => {
    getMultipleMall();
  }, []);
  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([]);
  const [files3, setFiles3] = useState([]);

  useEffect(() => {
    console.log("get-store-data", get_mall_auth_data);
    getRetailerApi(getmallmasterid);
  }, []);

  const [mallsOption, setMallsOption] = useState([]);
  const [mallsOption2, setMallsOption2] = useState(get_mall_auth_data?.brands);


  const [mallWebsite, setMallWebsite] = useState(
    getbrandData.website ? getbrandData.website : ""
  );
  const [getbrand, SetBrand] = useState(
    getbrandData.brand_email ? getbrandData.brand_email : ""
  );
  const [mallInsta, setMallInsta] = useState(
    getbrandData.insta ? getbrandData.insta : ""
  );

  const [retailertype, setRetailertype] = useState(
    getbrandData.retailer_id && getbrandData.retailer_id
  );

  const [retailertypename, setRetailertypename] = useState(
    get_mall_auth_data.retailers == null ||
      get_mall_auth_data.retailers == "" ||
      get_mall_auth_data.retailers.name == null ||
      get_mall_auth_data.retailers.name == ""
      ? ""
      : get_mall_auth_data.retailers.name
  );

  const [mallfb, setMallfb] = useState(getbrandData.fb ? getbrandData.fb : "");

  const [mallTwitter, setMallTwitter] = useState(
    getbrandData.tweet ? getbrandData.tweet : ""
  );

  const [contactPerson, setContactPerson] = useState(
    getbrandData.number && getbrandData.number
  );

  const [contactNumber, setContactNumber] = useState(
    getbrandData.email && getbrandData.email
  );

  const [secondryemail, SetSecondryEmail] = useState(
    getbrandData.secondary_email ? getbrandData.secondary_email : ""
  );

  const [scondrycontect, SetScondryContect] = useState(
    getbrandData.secondary_contact && getbrandData.secondary_contact
  );

  const [getmode,setMode] = useState(getbrandData.type && getbrandData.type);

  const [getmallname, setMallname] = useState(
    getbrandData.brand_id && getbrandData.brand_id
  );

  // const [getbrandname, setbrandname] = useState(
  //   getbrandData.brand_id && getbrandData.brand_id
  // );

  const [getbrandname, setbrandname] = useState(
    get_mall_auth_data.brands == null ||
      get_mall_auth_data.brands == "" ||
      get_mall_auth_data.brands.name == null ||
      get_mall_auth_data.brands.name == ""
      ? ""
      : get_mall_auth_data.brands.name
  );

  const [isAcceptTerm, setIsAcceptTerm] = useState(0);
  const [isAcceptTerm2, setIsAcceptTerm2] = useState(0);

  const [brandadd, SetBrandAdd] = useState(
    getbrandData.address ? getbrandData.address : ""
  );

  const [brandadd2, SetBrandAdd2] = useState(
    getbrandData.address_2 ? getbrandData.address_2 : ""
  );

  const [brandadd3, SetBrandAdd3] = useState(
    getbrandData.address_3 ? getbrandData.address_3 : ""
  );
  const [malldrop, SetMallDrop] = useState(
    getbrandData.mall_id ? getbrandData.mall_id : ""
  );

  const [mainName, setMainName] = useState(
    get_mall_auth_data &&
      get_mall_auth_data.retailers &&
      get_mall_auth_data.retailers.name !== null
      ? get_mall_auth_data.retailers.name
      : ""
  );

  const [getcondation, SetCondation] = useState(false);
  const [getcondation1, SetCondation1] = useState(false);
  const [getmallarray, SetMallArray] = useState([]);
  const [resetmodal, setResetModal] = useState(false);

  function closeModal() {
    setResetModal(false);
  }

  useEffect(() => {
    console.log("files", files);
    console.log("check getbrandData", getbrandData);
  }, [files]);

  const onHandleEmailChange = (e) => {
    let email = e.target.value;
    if (email === "" || regEx.test(email)) {
      // setEmail(email);
    } else {
      return;
    }
  };

  const onHandleMallEmailChange = (e) => {
    let mallEmail = e.target.value;
    if (mallEmail === "" || regEx.test(mallEmail)) {
      // setMallEmail(mallEmail);
    } else {
      return;
    }
  };



  // logo dropzon

  const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        console.log("file type", files[0]);
        console.log("acceptedFiles", acceptedFiles[0].File);
        SetCondation(true);
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

  // map dropzon

  const { getRootProps: getRootMapProps, getInputProps: getInputMapProps } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        console.log("acceptedFiles", acceptedFiles);
        SetCondation1(true);
        {
          setFiles2(
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

  // banner dropzon

  const {
    getRootProps: getRootBannerProps,
    getInputProps: getInputBannerProps,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log("acceptedFiles", acceptedFiles);
      {
        setFiles3(
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
      style={{ width: "100%", height: "100%", 
      maxHeight: "175px"
       }}
      className="img-fluid"
      alt="file"
    />
  ));

  const thumbs2 = files2.map((file) => (
    <img
      src={file.preview}
      style={{ width: "100%", height: "100%", 
      // maxHeight: "175px"
       }}
      className="img-fluid"
      alt="file"
    />
  ));

  const thumbs3 = files3.map((file) => (
    <img
      src={file.preview}
      style={{ width: "100%", height: "100%", maxHeight: "175px" }}
      className="img-fluid"
      alt="file"
    />
  ));

  const handleTermChange = (e) => {
    setIsAcceptTerm(1);
    console.log("e.targate.value");
  };

  const handleTermChange2 = (e) => {
    setIsAcceptTerm2(1);
    console.log("e.targate.value");
  };

  const getStoreMall = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_store_mall, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg123", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          setMallsOption(res.data.data);
        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };


  // update mall api

  const UpdateMallData = async () => {
    if (getmode == "" || undefined) {
      Notification("error", "Error", "Please Select Retailer Type");
      return;
    } else if (retailertype == "" || undefined) {
      Notification("error", "Error", "Please Select Retailer");
      return;
    }  else if (brandadd == "" || undefined) {
      Notification("error", "Error", "Please Enter Brand Address");
      return;
    } else if (mallsOption == "" || undefined) {
      Notification("error", "Error", "Please Select Mall");
      return;
    }else if (mallWebsite == "" || undefined) {
      Notification("error", "Error", "Please Enter Website URL");
      return;
    }
    // else if (getbrand == "" || undefined) {
    //   Notification("error", "Error", "Please Enter Brand Email");
    //   return;
    // }
    else if (contactPerson == "" || undefined) {
      Notification("error", "Error", "Please Enter Main Contact");
      return;
    }else if (contactNumber == "" || undefined) {
      Notification("error", "Error", "Please Enter Main Email");
      return;
    }
    else {
      if (getmode == "" || undefined) {
        Notification("error", "Error", "Please Select Retailer Type");
        return;
      } else if (retailertype == "" || undefined) {
        Notification("error", "Error", "Please Select Retailer");
        return;
      }  else if (brandadd == "" || undefined) {
        Notification("error", "Error", "Please Enter Brand Address");
        return;
      } else if (mallWebsite == "" || undefined) {
        Notification("error", "Error", "Please Enter Website URL");
        return;
      }else if (mallsOption == "" || undefined) {
        Notification("error", "Error", "Please Select Mall");
        return;
      }else if (getbrand == "" || undefined) {
        Notification("error", "Error", "Please Enter Brand Email");
        return;
      }else if (contactPerson == "" || undefined) {
        Notification("error", "Error", "Please Enter Main Contact");
        return;
      }else if (contactNumber == "" || undefined) {
        Notification("error", "Error", "Please Enter Main Email");
        return;
      }
        else {
        const data = await new FormData();
        await data.append("retailer_id", Number(retailertype));
        await data.append("store_type", getmode);
        // await data.append("brand", getmallname);
        await data.append("address", brandadd);
        await data.append("address_2", brandadd2);
        await data.append("address_3", brandadd3);
        // await data.append("mall_id", malldrop);
        await data.append("website", mallWebsite);
        await data.append("brand_email", getbrand);
        await data.append("insta", mallInsta);
        await data.append("fb", mallfb);
        await data.append("tweet", mallTwitter);
        await data.append("number", contactPerson);
        await data.append("email", contactNumber);
        await data.append("secondary_contact", scondrycontect);
        await data.append("secondary_email", secondryemail);

        for (var i = 0; i < mallsOption.length; i++) {
          await data.append("mall_id[" + i + "]", mallsOption[i].value);
        }
        if(getmode == 2) {
          for (var i = 0; i < mallsOption2.length; i++) {
            await data.append("brand[" + i + "]", mallsOption2[i].value);
          }
        }else{}
      
        await data.append("terms_condition", isAcceptTerm === true ? 1 : 0);
        if (files[0] !== undefined) {
          await data.append("store_logo", files[0]);
        } else {
        }
        if (files2[0] !== undefined) {
          await data.append("banner_store", files2[0]);
        } else {
        }
        if (files3[0] !== undefined) {
          await data.append("store_brand", files3[0]);
        } else {
        }
        console.log("-=-=-=->brand-update", data);
        const data1 = await UpdateCinema(data);
        if (data1) {
          if (data1.success === 1) {
            console.log("mall-data", data1);
            Notification(
              "success",
              "Success!",
              "Account Setting Updated Successfully!"
            );
            getCinema();
            setTab(1);
          }
        }
      }
    }
  };

  useEffect(() => {
    getBrand(get_mall_auth_data.retailer_id);
    getBrandMultiple(get_mall_auth_data.retailer_id);
    getStoreMall();
  }, []);
  // get mall master

  useEffect(() => {
    getMallMaster();
  }, [getmalmastername]);

  const [getmall, SetMall] = useState("");

  const getMallMaster = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_mall, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          SetMallArray(res.data.data);
        } else {
          // null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  // Rest Function

  const resetAccountData=()=>{
    setMallname('')
    setbrandname('');
    SetBrandAdd('');
    SetBrandAdd2('');
    SetBrandAdd3('');
    SetBrand('');
    setMallWebsite('');
   
    setMallInsta('');
    setMallfb('');
    setContactPerson('');
    // setContactNumber('');
    SetSecondryEmail('');
    SetScondryContect('');
    setMallTwitter('');
    setRetailertypename('');

    SetCondation(true);
    SetCondation1(true);
   
    // setFiles([]);
    // setFiles2([]);
    // setFiles3([]);
    // setFiles4([]);
  }

  return (
    <div>
      <div>
        <div className="brand-hero-edit-main-wrapp" {...getRootMapProps()}>
          <input
            {...getInputMapProps()}
            accept="image/jpeg, image/jpg, image/png, image/eps"
          />

          {getcondation1 === true ? (
            <>
              {files2 && files2.length > 0 ? (
                thumbs2
              ) : (
                <button type="button">
                  <img
                    src={images.card_edit}
                    className="brand-hero-edit-icon"
                  />
                </button>
              )}
            </>
          ) : (
            <>
              <img
                src={get_mall_auth_data.store_banner_path}
                style={{ width: "100%", height: "100%" }}
                className="img-fluid"
              />
              <img
                src={images.card_edit}
                alt=""
                style={{ position: "absolute", top: "105px", right: "100px" }}
                className="mall-hero-edit-icon edit-icon-positon-resp"
              />
            </>
          )}
        </div>

        {/* logo wrapp */}
        <div
          className="band-inn-logo-wrapp"
          style={{ left: sidebaropen === false ? "5%" : "" }}
          {...getRootlogoProps()}>
          {/* <div style={{ width: '100%' }} {...getRootlogoProps()}> */}
          <input
            {...getInputlogoProps()}
            accept="image/jpeg, image/jpg, image/png, image/eps"
          />
          {getcondation === true ? (
            <>
              {files && files.length > 0 ? (
                thumbs
              ) : (
                <button type="button">
                  <img
                    src={images.card_edit}
                    className="brand-hero-logo-edit-icon"
                  />
                </button>
              )}
            </>
          ) : (
            <>
              <img
                src={get_mall_auth_data.store_logo_path}
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "175px",
                  objectFit: "cover",
                }}
                // className="img-fluidb"
              />
              <img
                src={images.card_edit}
                alt=""
                style={{ position: "absolute", top: "25px", right: "20px" }}
              />
            </>
          )}
          {/* </div> */}
        </div>
      </div>
      <div className="mm_main_wrapp cinemaaccsetting_main_wrapp">
        {/* mall management name start */}
        <div className="mall_name_wrapp mall_mall_name_wrapp mall_name_wrapp_cinema" style={{paddingLeft:"0rem"}}>
          <p className="mall_name_heading">{mainName}:</p>
          {/* <p className="mall_name_heading"> Ster Kinekor:</p> */}
          <span style={{fontWeight:600}}>Account Settings</span>
        </div>
        <div className="mm_horizontal_line"></div>
        <div className="" style={{marginBottom:"2rem"}}></div>
        {/* mall management name end */}

        {/* mall management form start */}
        <div className="mm_form_wrapp mm_form_wrapp_retailer mm_form_wrapp_cinema {
">
          {/* text-input wrapp start */}
          <div
            className="mm_form_input_wrapp mm_form_input_wrapp_retailer"
            style={{ marginLeft: "0.6rem" }}>
            {/* <div className="mm_form_single_input">
              <label htmlFor="mall">Mall Name</label>
              <select
                className="leaderboard-card-inp"
                onChange={(e) => {
                  getRetailerApi(e.target.value);
                  setmallmasterid(e.target.value);
                  setmallmastername(e.target.value);

                  console.log(e.target.value);
                }}
              >
                <option selected disabled value="">
                  {getmalmastername}
                </option>
                {getmallarray &&
                  getmallarray.map((item, index) => {
                    return (
                      <>
                        <option value={item.id} key={index}>
                          {item.name} &nbsp;&nbsp;&nbsp; {item.from_date}{" "}
                          &nbsp;&nbsp;&nbsp; {item.to_date}
                        </option>
                      </>
                    );
                  })}
              </select>
            </div> */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor="">Cinema type <span className="star_require">*</span></label>

              <div className="radio-btn-flex-brand">
                <div className="radio-btn-inner-flex">
                  <input
                    type="radio"
                    id="Online"
                    name="gender"
                    value="1"
                    checked={getmode == 1}
                    onChange={(e) => {
                      setMode(e.target.value);
                      console.log("-->", getmode);
                    }}
                    // onChange={(e) => e.target.value}
                  />
                  <label  className="course-form-txt" for="male">
                    Independent Cinema
                  </label>
                </div>

                <div className="radio-btn-inner-flex">
                  <input
                    type="radio"
                    id="In-Person"
                    name="gender"
                    value="2"
                    checked={getmode == 2}
                    // onChange={(e) => setMode(2)}
                    onChange={(e) => {
                      setMode(e.target.value);
                      console.log("-->", getmode);
                    }}
                  />
                  <label className="course-form-txt" for="specifyColor">
                    Group Cinema
                  </label>
                </div>
              </div>
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor="">Cinema <span className="star_require">*</span></label>
              <div className="select-wrapper" style={{ width: "100%" }}>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    setRetailertype(e.target.value);
                    setRetailertypename(e.target.value);
                    // getBrand(e.target.value);
                    getBrandMultiple(e.target.value);
                  }}>
                  <option defaultValue value="">
                    {retailertypename}
                  </option>
                  {cinema_mall_data &&
                    cinema_mall_data.map((item, index) => {
                      return (
                        <>
                          {/* <option selected disabled value="">
                      Auto-fill from database
                    </option> */}
                          <option value={item.id} key={index}>
                            {item.name}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
            </div>
                    {getmode == 2 ? <>
                      <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor="">
                Your Cinema  <span className="star_require">*</span><br />{" "}
                <span style={{ fontWeight: "300", fontSize: "13px" }}>
                  If applicable
                </span>
              </label>
              {/* <div className="select-wrapper" style={{ width: "100%" }}>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    console.log("rrr", e.target.value);
                    setMallname(e.target.value);
                  }}>
                  <option value="">{getbrandname}</option>
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
              </div> */}

              <Select
                value={mallsOption2}
                styles={{ width: "100%", padding: "0px" }}
                className="leaderboard-card-inp"
                closeMenuOnSelect={false}
                components={animatedComponents}
                // defaultValue={[colourOptions[4], colourOptions[5]]}

                isMulti
                options={get_brand_data_multiple}
                onChange={setMallsOption2}
              />
            </div>
                    </> : <></>}
          
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor="">Cinema Address <span className="star_require">*</span></label>
              <input
                type="text"
                value={brandadd}
                onChange={(e) => SetBrandAdd(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}

            {/* single text-input */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor=""></label>
              <input
                type="text"
                value={brandadd2}
                onChange={(e) => SetBrandAdd2(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}

            {/* single text-input */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor=""></label>
              <input
                type="text"
                value={brandadd3}
                onChange={(e) => SetBrandAdd3(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor="">Select My Malls <span className="star_require">*</span></label>
              {/* <select
                className="leaderboard-card-inp"
                onChange={(e) => {
                  SetMallDrop(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {get_mall_data &&
                  get_mall_data.map((item, index) => {
                    return (
                      <>
                        <option selected disabled value="">
                      Auto-fill from database
                    </option>
                        <option value={item.id} key={index}>
                          {item.name}
                        </option>
                      </>
                    );
                  })}
              </select> */}

              <Select
                value={mallsOption}
                styles={{ width: "100%", padding: "0px" }}
                className="leaderboard-card-inp"
                closeMenuOnSelect={false}
                components={animatedComponents}
                // defaultValue={[colourOptions[4], colourOptions[5]]}

                isMulti
                options={multiple_week_data}
                onChange={setMallsOption}
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor="">Website URL <span className="star_require">*</span></label>
              <input
                type="text"
                value={mallWebsite}
                onChange={(e) => setMallWebsite(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor="">Brand Email <span className="star_require">*</span></label>
              <input
                type="text"
                value={getbrand}
                onChange={(e) => SetBrand(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>

            {/* single text-input */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor="">Instagram</label>
              <input
                type="text"
                value={mallInsta}
                onChange={(e) => setMallInsta(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor="">Facebook</label>
              <input
                type="text"
                value={mallfb}
                onChange={(e) => setMallfb(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor="">Twitter</label>
              <input
                type="text"
                value={mallTwitter}
                onChange={(e) => setMallTwitter(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor="">Main Contact <span className="star_require">*</span></label>
              <input
                type="text"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor="">Main Email <span className="star_require">*</span></label>
              <input
                type="email"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor="">Secondary Contact</label>
              <input
                type="number"
                value={scondrycontect}
                onChange={(e) => SetScondryContect(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>
            {/* single text-input */}
            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor="">Secondary Email</label>
              <input
                type="email"
                value={secondryemail}
                onChange={(e) => SetSecondryEmail(e.target.value)}
                name=""
                id=""
                className="input_box"
              />
            </div>

            <div className="mm_form_single_input">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor=""></label>
              <span style={{fontSize:"14px",color:"#bbb"}}>*Required Fields including all image uploads.</span>
            </div>

            <div className="mm_form_single_input fs-des-resp">
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor=""></label>
              <div className="signup_terms_wrapp">
                <input
                  type="checkbox"
                  value={isAcceptTerm}
                  onChange={handleTermChange}
                  checked={isAcceptTerm == 1}
                />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Privacy Policy</a>
                </p>
              </div>
            </div>

            <div className="mm_form_single_input fs-des-resp" style={{marginTop:"-10px"}}>
              <label className="mm_form_single_input_cinema_Acc_setting" htmlFor=""></label>
              <div className="signup_terms_wrapp">
                <input
                  type="checkbox"
                  value={isAcceptTerm2}
                  onChange={handleTermChange2}
                  checked={isAcceptTerm2 == 1}
                />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Terms and Conditions</a>
                  {/* <a className="signup_terms_link">Privacy Policy</a> */}
                </p>
              </div>
            </div>

            {/* upload button */}
            <div className="mm_form_single_input">
              <label htmlFor=""></label>
              <div className="mall_upload_btn_wrapp">
                <button
                  className="btn btn-orange"
                  disabled={isAcceptTerm == 1 ? false : true}
                  onClick={() => UpdateMallData()}
                >
                  Update
                </button>
                <button className="btn btn-black" style={{ fontWeight: "600", color: "#777" }} onClick={()=>{setResetModal(true)}}>Reset</button>
              </div>
            </div>

          
          </div>
          {/* text-input wrapp end */}

          {/* upload images wrapp start */}
          <div className="mm_img_upload_wrapp mm_img_upload_wrapp_retailer cinemaccsetting_wrappp">
            {/* single upload image */}
            <div className="img-upl-border">
              <div
                className="myprofile_inner_sec2"
                {...getRootlogoProps()}
                style={{
                  border: "none",
                  paddingBottom: "0px",
                  maxWidth: "250px",
                }}>
                {/* <input
                {...getInputlogoProps()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              /> */}
                <h6 className="myprofile_upload_img_card_name">
                  Upload the Cinema logo (200px x 200px)
                </h6>
                {getcondation === true ? (
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
                        <div className="btnn-main">
                          <button
                            className="btn btn-orange mb_8"
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
                    {get_mall_auth_data.store_logo_path === null ? (
                      <>
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
                              className="btn btn-orange mb_8"
                              type="button"
                              onClick={() => {
                                // setFiles([]);
                              }}>
                              Upload File
                            </button>
                          </div>
                        </div>
                        {/* <button
                          className="btn btn-blue"
                          onClick={() => setFiles([])}>
                          Cancel
                        </button> */}
                      </>
                    ) : (
                      <>
                        <div className="myprofile_inner_sec2_img_upload">
                          <img
                            src={get_mall_auth_data.store_logo_path}
                            style={{ width: "100%", height: "100%" }}
                            className="img-fluidb"
                          />
                        </div>
                        <div className="btnn-main" style={{ width: "100%" }}>
                          <button
                            className="btn btn-orange mb_8"
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
                  className="btn btn-black"
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
            {/* single upload image */}
            <div className="img-upl-border">
              <div
                className="myprofile_inner_sec2"
                {...getRootMapProps()}
                style={{
                  border: "none",
                  paddingBottom: "0px",
                  maxWidth: "250px",
                }}>
                {/* <input
                {...getInputlogoProps()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              /> */}
                <h6 className="myprofile_upload_img_card_name">
                  Upload the Cinema Banner (max 400kb)
                </h6>
                {getcondation1 === true ? (
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
                          <h4>.PDF .JPG .PNG</h4>
                          <p>You can also upload file by</p>
                          <input
                            {...getInputMapProps()}
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
                        <div className="btnn-main">
                          <button
                            className="btn btn-orange mb_8"
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
                    {get_mall_auth_data.store_banner_path === null ? (
                      <>
                        <div style={{ width: "100%" }} {...getRootMapProps()}>
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
                              className="btn btn-orange mb_8"
                              type="button"
                              onClick={() => {
                                // setFiles([]);
                              }}>
                              Upload File
                            </button>
                          </div>
                        </div>
                        {/* <button
                          className="btn btn-blue"
                          onClick={() => setFiles2([])}>
                          Cancel
                        </button> */}
                      </>
                    ) : (
                      <>
                        <div className="myprofile_inner_sec2_img_upload">
                          <img
                            src={get_mall_auth_data.store_banner_path}
                            style={{ width: "100%", height: "100%" }}
                            className="img-fluidb"
                          />
                        </div>
                        <div className="btnn-main" style={{ width: "100%" }}>
                          <button
                            className="btn btn-orange mb_8"
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
                  className="btn btn-black"
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
            {/* single upload image */}
            {/* <div
              className="myprofile_inner_sec2"
              style={{
                maxWidth: "250px",
              }}>
              <h4 style={{ marginBottom: "10px" }}>
                Upload the Brand in Mall (max 400kb)
              </h4>
              {files3 && files3.length > 0 ? (
                <div className="myprofile_inner_sec2_img_upload">{thumbs3}</div>
              ) : (
                <div style={{ width: "100%" }} {...getRootBannerProps()}>
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
                      {...getInputBannerProps()}
                      accept="image/jpeg, image/jpg, image/png, image/eps"
                    />
                    <button
                      type="button"
                      className="click_upload_btn"
                      style={{ marginBottom: "10px" }}>
                      click here
                    </button>
                  </div>
                  <div className="btnn-main">
                    <button
                      className="btn btn-orange"
                      type="button"
                      onClick={() => {
                      }}
                      style={{ marginBottom: "10px" }}>
                      Upload File
                    </button>
                  </div>
                </div>
              )}
              <button className="btn btn-blue" onClick={() => setFiles3([])}>
                Cancel
              </button>
            </div> */}
          </div>
          {/* upload images wrapp end */}
        </div>
        {/* mall management form end */}

        {/* upload images wrapp end */}
        <div style={{ marginTop: "2rem" }}>
          {/* <div>
            <div className="signup_terms_wrapp">
              <label htmlFor="" className="editfac_label"></label>
              <input type="checkbox" />
              <p className="fs-des">
                I have read and agree to the &nbsp;
                <a className="signup_terms_link">Privacy Policy</a>
              </p>
            </div>
            <div className="signup_terms_wrapp">
              <label htmlFor="" className="editfac_label"></label>
              <input type="checkbox" />
              <p className="fs-des">
                I have read and agree to the{" "}
                <a className="signup_terms_link">Terms and Conditions</a>
              </p>
            </div>
          </div> */}
          <div className="mall_upload_btn_wrapp-resp cinema_upload_btn_wrapp_resp">
            <div className="cinema_upload_btn_inner_resp">
              <button
                className="btn btn-orange"
                disabled={isAcceptTerm == 1 ? false : true}
                onClick={() => UpdateMallData()}>
                Update
              </button>
              <button
                className="btn btn-black"
                style={{ fontWeight: "600", color: "#777" }} onClick={()=>{setResetModal(true)}}>
                Reset
              </button>
            </div>
            <div>
              <div className="signup_terms_wrapp" style={{gap:"0px"}}>
                <label htmlFor="" className=""></label>
                {/* <label htmlFor="" className="editfac_label"></label> */}
                <input type="checkbox" />
                <p className="fs-des">
                  I have read and agree to the &nbsp;
                  <a className="signup_terms_link">Privacy Policy</a>
                </p>
              </div>
              <div className="signup_terms_wrapp">
                {/* <label htmlFor="" className="editfac_label"></label> */}
                <input type="checkbox" />
                <p className="fs-des">
                  I have read and agree to the{" "}
                  <a className="signup_terms_link">Terms and Conditions</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReactModal
        isOpen={resetmodal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="sd_model_wrapp sd_model_wrapp-delete" >
          {/* edit and delete orange btns start */}
          <div className="sd_model_edit_wrap">




            <button onClick={closeModal}>
              <img src={images.close} alt="" />
            </button>

          </div>
          {/* edit and delete orange btns end */}

          {/* <p>Are you sure you want to Reset all Data</p> */}
          <p>Are you sure you want to reset the form? <br/>Note that all your data will be cleared from the form by selecting this option</p>
          <div className="delete-modal-btn-box">
            <button onClick={() => {
              // setStore_id(itm.id);
              resetAccountData();
              setResetModal(false);
            }} className="delete-modal-btn">
              Yes
            </button>
            {/* onClick={() => {
              // setStore_id(itm.id);
              // DeleteMallStoreData(itm.id);
              setDeleteModal(true);
            }} */}

            <button onClick={closeModal} className="delete-modal-btn">
            No
            </button>
          </div>
        </div>
        {/* </div> */}
      </ReactModal>
    </div>
  );
};

export default CinemaAccountSetting;