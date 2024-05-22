import React, { useEffect, useState } from "react";
import "./ProductTilesCard.css";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import images from "../../constants/images";
import "react-datepicker/dist/react-datepicker.css";
import { useMallContext } from "../../context/mall_context";
import { useStoreContext } from "../../context/store_context";
import Notification from "../../utils/Notification";
import { HiPencilSquare } from "react-icons/hi2";
import axios from "axios";
import {
  ACCEPT_HEADER,
  add_store_cart,
  get_region_mall,
} from "../../utils/Constant";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ReactModal from "react-modal";
import moment from "moment";
import { DateRangePicker } from "rsuite";

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

const ProductTilesCard = ({ item, setTab, getweek }) => {

  const eateryvalue = JSON.parse(localStorage.getItem("iseatery"));

  
  const { DeleteProductTileApi, category_data, UpdateProductTilesApi,category_eatery_data } =
    useStoreContext();

  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image selection
  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setSelectedImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // Function to clear the selected image
  // const clearImage = () => {
  //   setSelectedImage(null);
  // };

  const [files, setFiles] = useState([]);
  const [filesqr, setFilesQr] = useState([]);
  const [title, setTitle] = useState("");
  const [BrandName, setBrandName] = useState("");
  const [MallName, setMallName] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDiscription] = useState("");
  const [CategoryId, setCategoryId] = useState("");
  const [BrandId, setBrandId] = useState("");
  const [mallid, SetMaillId] = useState("");
  const [weekname, SetWeekName] = useState("");
  const [weekname1, SetWeekName1] = useState("");
  const [weekname2, SetWeekName2] = useState("");
  const [getTag, setTag] = useState("");
  const [size, setSize] = useState("");
  const [qrDiscount, setQrDiscount] = useState("");

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  const { allowedMaxDays, beforeToday, combine } = DateRangePicker;

  const { get_brand_data, get_mall_data } = useMallContext();

  // const [deletemodalstate, setDleteModalstate] = useState(false);
  const [getcondition, setCondition] = useState(false);
  const [getcondition2, setCondition2] = useState(false);

  useEffect(() => {
    GetRegion();
    setTitle(item.title ? item.title : "");
    SetMaillId(item.malls ? item.malls.id : "");
    setMallName(
      item.malls == null ||
        item.malls == "" ||
        item.malls.name == null ||
        item.malls.name == ""
        ? ""
        : item.malls.name
    );
    setBrandName(
      item.brands == null ||
        item.brands == "" ||
        item.brands.name == null ||
        item.brands.name == ""
        ? ""
        : item.brands.name
    );
    setBrandId(
      item.brands == null ||
        item.brands == "" ||
        item.brands.id == null ||
        item.brands.id == ""
        ? ""
        : item.brands.id
    );
    setCategory(
      item.categorys == null ||
        item.categorys == "" ||
        item.categorys.name == null ||
        item.categorys.name == ""
        ? ""
        : item.categorys.name
    );

    setDiscription(item.description ? item.description : item.description);
    setTag(item.tag ? item.tag : "");
    setSize(item.size ? item.size : "");
    setPrice(item.price ? item.price : "");
    SetWeekName(item.weeks ? item.weeks.name : "");
    SetWeekName1(item.weeks ? item.weeks.from_date : "");
    SetWeekName2(item.weeks ? item.weeks.to_date : "");
    SetMallArray(item.multiple_malls ? item.multiple_malls : "");
    setQrDiscount(item.qr_discount ? item.qr_discount : "");
  }, []);

  // logo dropzon

  // const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
  //   useDropzone({
  //     onDrop: (acceptedFiles) => {
  //       {
  //         const filteredFiles = acceptedFiles.filter(file => file.size <= 50000); // Limit size to 50KB (in bytes)

  //         setFiles(
  //           filteredFiles.map((file) =>
  //             Object.assign(file, {
  //               preview: URL.createObjectURL(file),
  //             })
  //           )
  //         );
  //         if (filteredFiles.length !== acceptedFiles.length) {
  //           Notification("error","Error!", "Some files exceed the maximum size limit of 50KB and will not be uploaded.");
  //         }
  //       }
  //       setCondition(true);
  //       if (acceptedFiles.length === 0) {
  //         window.location.reload(true);
  //       }
  //     },
  //   });

  const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
  useDropzone({
    onDrop: async (acceptedFiles) => {  
      setCondition(true);

      const maxSizeKB = 50; // Maximum size limit in KB
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
          const isDimensionsValid = img.width == 354 && img.height == 350;

          return isDimensionsValid ? file : null; // Return file if dimensions are valid, otherwise skip it
        })
      );

      // Filter out null values (files that were skipped)
      const validFiles = filteredFiles.filter((file) => file !== null);

      setFiles(
        validFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      if (validFiles.length !== acceptedFiles.length) {
        Notification(
          "error",
          "Error!",
          "Some files exceed the maximum size limit of 50KB or do not meet the dimension requirements of 354x350 pixels and will not be uploaded."
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
      className="img-fluidb"
      alt="file"
    />
  ));

  // QR Code

  // const { getRootProps: getRootlogoPropsQr, getInputProps: getInputlogoPropsQr } =
  //   useDropzone({
  //     onDrop: (acceptedFiles) => {
  //       setCondition2(true);

  //       {
  //         setFilesQr(
  //           acceptedFiles.map((file) =>
  //             Object.assign(file, {
  //               preview: URL.createObjectURL(file),
  //             })
  //           )
  //         );
  //       }
  //       setCondition(true);
  //       if (acceptedFiles.length === 0) {
  //         window.location.reload(true);
  //       }
  //     },
  //   });

  const { getRootProps: getRootlogoPropsQr, getInputProps: getInputlogoPropsQr } =
  useDropzone({
    onDrop: async (acceptedFiles) => {  
      setCondition2(true);

      const maxSizeKB = 50; // Maximum size limit in KB
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
          const isDimensionsValid = img.width == 150 && img.height == 150;

          return isDimensionsValid ? file : null; // Return file if dimensions are valid, otherwise skip it
        })
      );

      // Filter out null values (files that were skipped)
      const validFiles = filteredFiles.filter((file) => file !== null);

      setFilesQr(
        validFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      if (validFiles.length !== acceptedFiles.length) {
        Notification(
          "error",
          "Error!",
          "Some files exceed the maximum size limit of 50KB or do not meet the dimension requirements of 150x150 pixels and will not be uploaded."
        );
      }

      if (acceptedFiles.length === 0) {
        window.location.reload(true);
      }
    },
  });

  const thumbsqr = filesqr.map((file) => (
    <img
      src={file.preview}
      style={{ width: "100%", height: "100%" }}
      className="img-fluidb"
      alt="file"
    />
  ));

  const handleDateChange = (startDate, endDate) => {
    if ((startDate && endDate !== "") || (startDate && endDate !== null)) {
      SetWeekCondation(true);
    } else {
      SetWeekCondation(false);
    }
    setSelectedDates({ startDate, endDate });
  };

  // Update Promotion Banner Api

  const [getweekcondation, SetWeekCondation] = useState(false);

  // const UpdatePromotionBanner = async () => {
  //   const { startDate, endDate } = selectedDates;
  //   // console.log("==>11", selectedDates);

  //   if (title == "" || undefined) {
  //     Notification("error", "Error!", "Please Enter Title!");
  //     return;
  //   } else if (weekname1 === "") {
  //     Notification("error", "Error", "Please Enter Start Date");
  //     return;
  //   } else if (weekname2 === "") {
  //     Notification("error", "Error", "Please Enter End Date");
  //     return;
  //   } else if (getmallarray.length < 0) {
  //     Notification("error", "Error!", "Please Select Mall!");
  //     return;
  //   } else if (BrandName == "" || undefined) {
  //     Notification("error", "Error!", "Please Select Brand!");
  //     return;
  //   } else if (getTag == "" || undefined) {
  //     Notification("error", "Error!", "Please Enter Tags!");
  //     return;
  //   } else if (size == "" || undefined) {
  //     Notification("error", "Error!", "Please Enter sizes!");
  //     return;
  //   } else if (Price == "" || undefined) {
  //     Notification("error", "Error!", "Please Enter Price!");
  //     return;
  //   } else if (Description == "" || undefined) {
  //     Notification("error", "Error!", "Please Enter Description!");
  //     return;
  //   } else {
  //     const formdata = await new FormData();
  //     await formdata.append("id", item.id);
  //     await formdata.append("title", title);
  //     if (gettrue === true) {
  //       for (var i = 0; i < regionidarray.length; i++) {
  //         await formdata.append("region_id[" + i + "]", regionidarray[i].id);
  //       }
  //       for (var i = 0; i < mallidarray.length; i++) {
  //         await formdata.append("mall_id[" + i + "]", mallidarray[i].id);
  //       }
  //     } else {
  //       for (var i = 0; i < getmallarray.length; i++) {
  //         await formdata.append(
  //           "region_id[" + i + "]",
  //           getmallarray[i].region_id
  //         );
  //       }
  //       for (var i = 0; i < getmallarray.length; i++) {
  //         await formdata.append("mall_id[" + i + "]", getmallarray[i].mall_id);
  //       }
  //     }
  //     await formdata.append("brand_id", BrandId);
  //     await formdata.append("category_id", CategoryId);
  //     await formdata.append("price", Price);
  //     await formdata.append("description", Description);
  //     await formdata.append("tag", getTag);
  //     await formdata.append("size", size);
  //     if (getweekcondation === true) {
  //       await formdata.append(
  //         "from_date",
  //         moment(startDate[0]).format("YYYY-MM-DD")
  //       );
  //       await formdata.append(
  //         "to_date",
  //         moment(startDate[1]).format("YYYY-MM-DD")
  //       );
  //     } else {
  //       await formdata.append("from_date", weekname1);
  //       await formdata.append("to_date", weekname2);
  //     }
  //     await formdata.append("region_child_id[0]", "");
  //     if (files[0] !== undefined) {
  //       await formdata.append("image", files[0]);
  //     }

  //     const data = await UpdateProductTilesApi(formdata);
  //     if (data) {
  //       if (data.success === 1) {
  //         // console.log("category-data", data);
  //         Notification(
  //           "success",
  //           "Success!",
  //           "Product Tiles Updated Successfully!"
  //         );

  //         setTab(1);
  //         // getLeaderboard();
  //         // window.location.reload();
  //       }
  //     }
  //   }
  // };


  const UpdatePromotionBanner = async () => {
    const { startDate, endDate } = selectedDates;
    // console.log("==>11", selectedDates);

    if (title == "" || undefined) {
      Notification("error", "Error!", "Please Enter Title!");
      return;
    } else if (weekname1 === "") {
      Notification("error", "Error", "Please Enter Start Date");
      return;
    } else if (weekname2 === "") {
      Notification("error", "Error", "Please Enter End Date");
      return;
    } else if (getmallarray.length < 0) {
      Notification("error", "Error!", "Please Select Mall!");
      return;
    } 
    // else if (BrandName == "" || undefined) {
    //   Notification("error", "Error!", "Please Select Brand!");
    //   return;
    // } 
    else if (getTag == "" || undefined) {
      Notification("error", "Error!", "Please Enter Tags!");
      return;
    }
    // else if (size == "" || undefined) {
    //   Notification("error", "Error!", "Please Enter sizes!");
    //   return;
    // } 
    else if (Price == "" || undefined) {
      Notification("error", "Error!", "Please Enter Price!");
      return;
    } else if (Description == "" || undefined) {
      Notification("error", "Error!", "Please Enter Description!");
      return;
    } else {
      const formdata = await new FormData();
      await formdata.append("id", item.id);
      await formdata.append("title", title);
      await formdata.append("qr_discount", qrDiscount);
      if (gettrue === true) {
        for (var i = 0; i < regionidarray.length; i++) {
          await formdata.append("region_id[" + i + "]", regionidarray[i].id);
        }
        for (var i = 0; i < mallidarray.length; i++) {
          await formdata.append("mall_id[" + i + "]", mallidarray[i].id);
        }
      } else {
        for (var i = 0; i < getmallarray.length; i++) {
          await formdata.append(
            "region_id[" + i + "]",
            getmallarray[i].region_id
          );
        }
        for (var i = 0; i < getmallarray.length; i++) {
          await formdata.append("mall_id[" + i + "]", getmallarray[i].mall_id);
        }
      }
      await formdata.append("brand_id", BrandId);
      await formdata.append("category_id", CategoryId);
      await formdata.append("price", Price);
      await formdata.append("description", Description);
      await formdata.append("tag", getTag);
      await formdata.append("size", size);
      if (getweekcondation === true) {
        await formdata.append(
          "from_date",
          moment(startDate[0]).format("YYYY-MM-DD")
        );
        await formdata.append(
          "to_date",
          moment(startDate[1]).format("YYYY-MM-DD")
        );
      } else {
        await formdata.append("from_date", weekname1);
        await formdata.append("to_date", weekname2);
      }
      await formdata.append("region_child_id[0]", "");
      if (files[0] !== undefined) {
        await formdata.append("image", files[0]);
      }
      if (filesqr[0] !== undefined) {
        await formdata.append("qr_code_image", filesqr[0]);
      }

      const data = await UpdateProductTilesApi(formdata);
      if (data) {
        if (data.success === 1) {
          // console.log("category-data", data);
          Notification(
            "success",
            "Success!",
            "Product Tiles Updated Successfully!"
          );

          setTab(1);
          // getLeaderboard();
          // window.location.reload();
        }
      }
    }
  };
  const DeleteProductTilesboard = async () => {
    const formdata = await new FormData();
    await formdata.append("id", item.id);

    const data = await DeleteProductTileApi(formdata);
    if (data) {
      if (data.success === 1) {
        // console.log("mall-data", data);
        Notification(
          "success",
          "Success!",
          "Product Tiles Deleted Successfully!"
        );

        setTab(1);
        // getLeaderboard();
      }
    }
  };

  const Addtocart = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    const formdata = await new FormData();
    await formdata.append("qty", 1);
    await formdata.append("product_banner_tile_id", item.id);

    axios
      .post(add_store_cart, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        // console.log(JSON.stringify(res, null, 2));
        // window.location.reload(true);
        if (res.data.success == 1){
          window.location.reload(true);
          Notification("success", "Success!", "Add to cart Successfully!");
        } else if(res.data.success == 0){
          Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  const [mallMolalOpen, setMallModalIsOpen] = useState(false);
  function closeMallModal() {
    setMallModalIsOpen(false);
  }
  function openMallModal() {
    setMallModalIsOpen(true);
  }

  const [getmallarray, SetMallArray] = useState([]);

  const [gettrue, SetTrue] = useState(false);

  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedMalls, setSelectedMalls] = useState([]);

  const [mallidarray, SetMallidarray] = useState([]);
  const [regionidarray, SetRegionidarray] = useState([]);

  const handleRegionChange = (regionName, id) => {
    const updatedSelectedRegions = [...selectedRegions];
    const index = updatedSelectedRegions.indexOf(regionName);

    if (index > -1) {
      updatedSelectedRegions.splice(index, 1);
    } else {
      updatedSelectedRegions.push(regionName);
      regionidarray.push({ id: id });
    }

    setSelectedRegions(updatedSelectedRegions);
  };

  const handleMallChange = (mallName, id) => {
    const updatedSelectedMalls = [...selectedMalls];
    const index = updatedSelectedMalls.indexOf(mallName);

    if (index > -1) {
      updatedSelectedMalls.splice(index, 1);
    } else {
      updatedSelectedMalls.push(mallName);
      mallidarray.push({ id: id });
    }

    setSelectedMalls(updatedSelectedMalls);
  };

  const [getregion_array, SetRigion_Array] = useState([]);

  const GetRegion = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_region_mall, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.data.success == 1) {
          SetRigion_Array(res.data.data);
        } else {
          // null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  const [toggle, setToggle] = useState(null);
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };

  const onDateChage = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <div className="leaderboard-card-main-wrapp product-tiles-card-main-wrapp product-tiles-card-main-wrapp_edit">
        {/* Leaderboard flex start */}
        <div className="leaderboard-card-flex-wrapp leaderboard-card-flex-wrapp_edit">
          {/* Leaderboard first part responsive side start */}
          <div className="leaderboard-card-first-resp-main-wrapp leaderboard-card-first-resp-main-wrapp_edit">
            <p className="leaderboard-last-part-txt">
              {/* Service fee will apply if canceled */}
            </p>
            <button
              className="leaderboard-delete-icon-btn"
              onClick={() => DeleteProductTilesboard()}>
              cancel{" "}
              <img
                alt=""
                src={images.delete_icon}
                className="leaderboard-delete-icon"
              />
            </button>
          </div>
          {/* Leaderboard first part responsive side end*/}

          {/* Leaderboard part first start */}
          <div className="leaderboard-card-part-first leaderboard_card_part_first_Pro_tile_edit">
            {/* Leaderboad form start */}
            {/* Leaderboard inputbox start */}
            <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl" style={{minWidth:"125px"}}>
                Title:<span className="star_require">*</span>
              </label>
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
              <label className="leaderboard-card-lbl" style={{minWidth:"125px"}}>
                Mall(s)<span className="star_require">*</span>:
              </label>
              <div
                onClick={() => openMallModal()}
                className="leaderboard-card-inp"
                style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {gettrue === true ? (
                  <>
                    {selectedMalls && selectedMalls.length > 0
                      ? selectedMalls.map((mall, mindx) => {
                          return <p className="mall-lib-font">{mall}</p>;
                        })
                      : null}
                  </>
                ) : (
                  <>
                    {getmallarray && getmallarray.length > 0
                      ? getmallarray.map((itm, mindx) => {
                          return (
                            <p className="mall-lib-font">
                              {itm.malls ? itm.malls.name : ""}
                            </p>
                          );
                        })
                      : null}
                  </>
                )}
              </div>
            </div>

            {/* <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl">
                Brand(s):<span className="star_require">*</span>
              </label>
              <div className="select-wrapper" style={{ width: "100%" }}>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    // console.log("rrr", e.target.value);
                    setBrandName(e.target.value);
                  }}>
                  <option selected disabled value="">
                    {BrandName}
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
            </div> */}
            <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl" style={{minWidth:"125px"}}>
                Categories:<span className="star_require">*</span>
              </label>
              <div className="select-wrapper" style={{ width: "100%" }}>
                <select
                  className="leaderboard-card-inp cons_select_nav"
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setCategoryId(e.target.value);
                  }}>
                  <option selected disabled value="">
                    {Category}
                  </option>
                  {eateryvalue == 1 ? <>
                    {category_eatery_data &&
                      category_eatery_data.map((item, index) => {
                      return (
                        <>
                          <option value={item.id} key={index}>
                            {item.name}
                          </option>
                        </>
                      );
                    })}
                  </> : <>
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
                  </>}
                 
                </select>
              </div>
            </div>

            {/* Price */}
            <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl" style={{minWidth:"125px"}}>
                Price:<span className="star_require">*</span>
              </label>
              <input
                type="text"
                className="leaderboard-card-inp"
                placeholder="Rxxx"
                value={Price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            {/* Price end */}

            {/* Desc */}
            <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl" style={{minWidth:"125px"}}>
                Description:<span className="star_require">*</span>
              </label>
              <textarea
                style={{ height: "30px" }}
                className="leaderboard-card-inp"
                placeholder="Add Description"
                value={Description}
                onChange={(e) => setDiscription(e.target.value)}
              />
            </div>
            {/* Desc end */}
            {/* Tags */}
            <div className="leaderboard-card-inpbox-wrapp" >
              <label className="leaderboard-card-lbl" style={{minWidth:"125px"}}>
                Tags:<span className="star_require">*</span>
                <br />
                <span style={{ fontSize: "9px" }}>[seperated by commas]</span>
              </label>
              <textarea
                style={{ height: "60px" }}
                className="leaderboard-card-inp"
                placeholder="Add Tags"
                value={getTag}
                onChange={(e) => setTag(e.target.value)}
              />
            </div>
            {/* Tags end */}
            {/* Size */}
            <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl" style={{minWidth:"125px"}}>Sizes:</label>
              <input
                style={{ height: "30px" }}
                className="leaderboard-card-inp"
                placeholder="XS, S, M, L, XL, XXL"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            {/* Size end */}

            {/* Duration */}
            <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl" htmlFor="" style={{minWidth:"125px"}}>
                Duration:<span className="star_require">*</span>
              </label>

              <DateRangePicker
                oneTap
                hoverRange="week"
                isoWeek
                placeholder={`${weekname1} - ${weekname2}`}
                className="leaderboard-card-inp DateRangePicker_LeaderboardCard"
                onChange={handleDateChange}
                disabledDate={combine(allowedMaxDays(7), beforeToday())}
              />
            </div>
            {/* Duration  end */}
            <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl" htmlFor="" style={{minWidth:"125px"}}>
                Discount QR Code:
              </label>
              <input
                type="text"
                className="leaderboard-card-inp"
                placeholder="10% Discount"
                value={qrDiscount}
                onChange={(e) => setQrDiscount(e.target.value)}
              />
            </div>
            <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl" htmlFor="" style={{minWidth:"125px"}}>
              </label>
              <div  {...getRootlogoPropsQr()}>
                <button
                  className="btn btn_qr"
                  style={{
                    background: "var(--color-orange)",
                    color: "var(--color-white)",
                    position: "relative",
                  }}>
                  <input
                {...getInputlogoPropsQr()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              />
                  Upload QR Code
                </button>

                <span
                  style={{
                    fontSize: "14px",
                    color: "#bbb",
                    alignSelf: "flex-start",
                    marginBottom: "0.7rem",
                  }}>
                  Supported Formats: jpeg, png.
                  <br /> (150 x 150 pixels (max 50kb))
                </span>
              </div>
            </div>

            {/* Leaderboard inputbox start */}
            {/* <div className="leaderboard-card-inpbox-wrapp">
              <label className="leaderboard-card-lbl">Brand(s):</label>
              <div className="select-wrapper" style={{ width: "100%" }}>
                <select
                  className="leaderboard-card-inp"
                  onChange={(e) => {
                    setBrandName(e.target.value);
                    setBrandId(e.target.value);
                  }}>
                  <option selected disabled value="">
                    {BrandName}
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
            </div> */}
            {/* Leaderboard inputbox end */}
            {/* Leaderboard inputbox start */}
            {/* Leaderboard inputbox end */}
            {/* Leaderboad form end */}
          </div>
          {/* Leaderboard part first end */}

          {/* Leaderboard part second start */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}>
            <div
              className="leaderboard-card-part-sec product-tiles-card-sec-part product_tile_card_img_sec"
              style={{ width: "200px", height: "200px" }}
              {...getRootlogoProps()}>
              <input
                {...getInputlogoProps()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              />
              {getcondition === true ? (
                <>
                  {files && files.length > 0 ? (
                    <div className="myprofile_inner_sec2_img_upload leaderboard-card-part-img-upl myprofile_inner_sec2_img_upload_border">
                      {thumbs}
                    </div>
                  ) : (
                    <div style={{ width: "100%" }}>
                      <div className="leaderboard-card-part-sec2 product_tile_card_part_sec2" style={{textAlign:"center",paddingLeft:"1.1rem",paddingRight:"1.1rem"}}>
                        <AiOutlineCloudUpload
                          style={{
                            width: "60px",
                            height: "60px",
                            color: "var(--color-orange)",
                            marginBottom: "10px",
                          }}
                        />
                        <h4 style={{ fontSize: "14px" }}>.JPG .PNG .GIF (350 x 354 pixels)</h4>
                        <p style={{ fontSize: "14px" }}>
                          (max 50kb)
                        </p>
                        <p style={{ fontSize: "14px" }}>
                          You can also upload file by
                        </p>

                        <button
                          type="button"
                          className="click_upload_btn"
                          style={{ marginBottom: "10px",color:"var(--color-orange)",fontWeight:"600"}}>
                          click here
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {item.image_path === null ? (
                    <div style={{ width: "100%" }}>
                      <div className="leaderboard-card-part-sec2" style={{ paddingLeft: "1.1rem", paddingRight: "1.1rem", textAlign: "center" }}>
                        <AiOutlineCloudUpload
                          style={{
                            width: "60px",
                            height: "60px",
                            color: "var(--color-orange)",
                            marginBottom: "10px",
                          }}
                        />
                        <h4 style={{ fontSize: "14px" }}>.JPG .PNG .GIF (354 x 350 pixels)</h4>
                        <p style={{ fontSize: "14px" }}>
                          (max 50kb)
                        </p>
                        <p style={{ fontSize: "14px" }}>
                          You can also upload file by
                        </p>

                        <button
                          type="button"
                          className="click_upload_btn"
                          style={{ marginBottom: "10px", color: "var(--color-orange)", fontWeight: "600" }}>
                          click here
                        </button>
                        {/* <a href="">clicking here</a> */}
                      </div>
                    </div>
                  ) : (
                    <div className="myprofile_inner_sec2_img_upload leaderboard-card-part-img-upl myprofile_inner_sec2_img_upload_border">
                      <img
                        alt=""
                        src={item.image_path}
                        style={{ width: "100%", height: "100%" }}
                        className="img-fluidb"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
            <div
              className="leaderboard-card-part-sec product-tiles-card-sec-part product_tile_card_img_sec"
              style={{
                width: "200px",
                height: "200px",
                // padding:"1rem",
              }}>
              {selectedImage && (
                <button
                  onClick={clearImage}
                  style={{ transform: "translate(55px, 32px)",zIndex:"1" }}>
                  <HiPencilSquare />
                </button>
              )}
            
                {/* <div style={{ position: "relative",width:"200px",height:"200px",border:"none", }}>
                 
                 {thumbsqr}
                </div> */}

                <div
              className="product-tiles-card-sec-part product_tile_card_img_sec"
              style={{ width: "200px", height: "200px"}}
              {...getRootlogoPropsQr()}>
              <input
                {...getInputlogoPropsQr()}
                accept="image/jpeg, image/jpg, image/png, image/eps"
              />
              {getcondition2 === true ? (
                <>
                  {filesqr && filesqr.length > 0 ? (
                    <div className="myprofile_inner_sec2_img_upload leaderboard-card-part-img-upl myprofile_inner_sec2_img_upload_border" style={{border:"none"}}>
                      {thumbsqr}
                    </div>
                  ) : (
                    <div style={{ width: "100%" }}>
                      {/* <div className="leaderboard-card-part-sec2 product_tile_card_part_sec2" style={{textAlign:"center",paddingLeft:"1.1rem",paddingRight:"1.1rem"}}>
                        <AiOutlineCloudUpload
                          style={{
                            width: "60px",
                            height: "60px",
                            color: "var(--color-orange)",
                            marginBottom: "10px",
                          }}
                        />
                        <h4 style={{ fontSize: "14px" }}>.JPG .PNG .GIF (350 x 354 pixels)</h4>
                        <p style={{ fontSize: "14px" }}>
                          (max 50kb)
                        </p>
                        <p style={{ fontSize: "14px" }}>
                          You can also upload file by
                        </p>

                        <button
                          type="button"
                          className="click_upload_btn"
                          style={{ marginBottom: "10px",color:"var(--color-orange)",fontWeight:"600"}}>
                          click here
                        </button>
                      </div> */}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {item.qr_image_path === null ? (
                    <div style={{ width: "100%" }}>
                      {/* <div className="leaderboard-card-part-sec2" style={{ paddingLeft: "1.1rem", paddingRight: "1.1rem", textAlign: "center" }}>
                        <AiOutlineCloudUpload
                          style={{
                            width: "60px",
                            height: "60px",
                            color: "var(--color-orange)",
                            marginBottom: "10px",
                          }}
                        />
                        <h4 style={{ fontSize: "14px" }}>.JPG .PNG .GIF (354 x 350 pixels)</h4>
                        <p style={{ fontSize: "14px" }}>
                          (max 50kb)
                        </p>
                        <p style={{ fontSize: "14px" }}>
                          You can also upload file by
                        </p>

                        <button
                          type="button"
                          className="click_upload_btn"
                          style={{ marginBottom: "10px", color: "var(--color-orange)", fontWeight: "600" }}>
                          click here
                        </button>
                      </div> */}
                    </div>
                  ) : (
                    <div className="myprofile_inner_sec2_img_upload leaderboard-card-part-img-upl myprofile_inner_sec2_img_upload_border">
                      <img
                        alt=""
                        src={item.qr_image_path}
                        style={{ width: "100%", height: "100%" }}
                        className="img-fluidb"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
              
            </div>
          </div>
          {/* Leaderboard part second end */}

          {/* Leaderboard part third start */}
          <div className="leaderboard-card-part-third leaderboard-card-part-third-half_tile" >
            <button
              className="leaderboard-delete-icon-btn"
              onClick={() => DeleteProductTilesboard()}>
              cancel
              <img
                alt=""
                src={images.delete_icon}
                className="leaderboard-delete-icon"
              />
            </button>
            <p className="leaderboard-last-part-txt">
              {/* Service fee will apply if canceled */}
            </p>
            <div className="leaderboard-btn-box">
              {item.cart_status === 0 ? (
                <>
                  <button style={{ padding: "0.4rem", fontSize: "16px" }}
                    className="btn btn-black"
                    // style={{ width: "165px" }}
                    onClick={() => {
                      Addtocart();
                    }}>
                    Add To Cart
                  </button>
                </>
              ) : (
                <button
                  //  style={{ width: "165px" }}
                  className="btn btn-black">
                  Added
                </button>
              )}
            </div>
            <div className="leaderboard-btn-box">
              <button
                // style={{ width: "165px" }}
                className="btn btn-orange"
                onClick={() => UpdatePromotionBanner()}>
                Update
              </button>
            </div>
          </div>
          {/* Leaderboard part third end */}

          {/* Leaderboard last part responsive side start */}
          <div className="leaderboard-card-sec-resp-main-wrapp  leaderboard-card-sec-resp-main-wrapp_pro_tilee_btn_main_edit">
            <div className="leaderboard-btn-box">
              {item.cart_status === 0 ? (
                <>
                  <button
                    style={{ width: "165px" }}
                    className="btn btn-black"
                    onClick={() => {
                      Addtocart();
                      // window.location.reload(true);
                    }}>
                    Add To Cart
                  </button>
                </>
              ) : (
                <button style={{ width: "165px" }} className="btn btn-black">
                  Added
                </button>
              )}
            </div>
            <div className="leaderboard-btn-box">
              <button
                style={{ width: "165px" }}
                className="btn btn-orange"
                onClick={() => UpdatePromotionBanner()}>
                Update
              </button>
            </div>
          </div>
          {/* Leaderboard last part responsive side end */}
        </div>
        {/* Leaderboard flex start */}
      </div>
      <ReactModal
        isOpen={mallMolalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeMallModal}
        style={customStyles}>
        <div className="select_mall_main_wrapp">
          <div className="select_mall_base_wrapp">
            {/* mall heading */}
            <p className="select_mall_heading">
              Select the malls that your brand features in:
            </p>

            <div className="select_mall_serch_wrapp">
              <input type="search" placeholder="Search" className="input_box" />
              <BiSearch
                className="select_mall_search_icon"
                size={25}
                color="var(--color-orange)"
              />
            </div>

            {/* <div
              className="leaderboard-card-inpbox-wrapp"
              style={{ alignItems: "center" }}
            >
              <label className="leaderboard-card-lbl">Slect Weeks:</label>
              <select
                className="leaderboard-card-inp"
                // value={MallName}
                onChange={(e) => {
                  setWeek(e.target.value);
                }}
              >
                <option selected disabled value="">
                  {weekname} {weekname1} {weekname2}
                </option>

                {week_data &&
                  week_data.map((item, index) => {
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

            {/* mall selected tag */}
            <div className="select_mall_tag_btns_wrapp">
              {selectedMalls && selectedMalls.length > 0
                ? selectedMalls.map((mall, mindx) => {
                  return (
                    <button
                      className="select_mall_tag_single_btn"
                      style={{ backgroundColor: "#4FBB10" }}
                      key={mindx}>
                      {mall}
                    </button>
                  );
                })
                : null}
            </div>

            <div className="mall_Select_wrapp">
              <p
                style={{
                  fontSize: "18px",
                  alignSelf: "start",
                  marginBottom: "1rem",
                }}>
                Region
              </p>

              {getregion_array && getregion_array.length > 0
                ? getregion_array.map((item, index) => {
                  return (
                    <div
                      className="bim_accordian_wrapp"
                      style={{ marginBottom: "6px" }}
                      key={item.region_id}>
                      <button
                        className="bim_accordian_btn"
                        onClick={() => {
                          setToggle(item.region_id);
                          handleRegionChange(
                            item.region_name,
                            item.region_id
                          );
                        }}>
                        <p
                          style={{
                            color:
                              item.region_id === toggle ? "#ff8b00" : "#000",
                            fontWeight:
                              item.region_id === toggle ? "500" : "300",
                          }}>
                          {item.region_name}
                        </p>

                        {item.region_id == toggle ? (
                          <IoIosArrowUp size={20} color="#ff8b00" />
                        ) : (
                          <IoIosArrowDown size={20} />
                        )}
                      </button>
                      {item.region_id == toggle ? (
                        <div className="bim_accordian_mall_wrapp">
                          {item.malls.map((itm, ind) => {
                            return (
                              <>
                                <div
                                  key={itm.id}
                                  style={{
                                    display: "flex",
                                    gap: "10px",
                                    marginLeft: "10px",
                                  }}>
                                  <input
                                    type="checkbox"
                                    checked={selectedMalls.includes(itm.name)}
                                    // value={peopleInfo}
                                    onChange={(e) => {
                                      // handleCheckboxChange(e, itm, ind);
                                      handleMallChange(itm.name, itm.id);
                                    }}

                                  // type="checkbox"
                                  // checked={
                                  //   getcheck[(itm, ind, "", item.region_id)]
                                  // }
                                  // onChange={(e) => {
                                  //   check(itm, ind, "", item.region_id);
                                  // }}
                                  // value={peopleInfo}
                                  />
                                  <label htmlFor={itm.id}>{itm.name}</label>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })
                : null}
            </div>

            <div className="leaderboard-btn-box">
              <button
                className="btn btn-orange"
                onClick={() => {
                  closeMallModal();
                  SetTrue(true);
                }}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default ProductTilesCard;