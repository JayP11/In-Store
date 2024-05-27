import React, { useEffect, useState } from "react";
import "./AddProductTilesBannerCard.css";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMallContext } from "../../context/mall_context";
import { useStoreContext } from "../../context/store_context";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Notification from "../../utils/Notification";
import moment from "moment";
import { DateRangePicker } from "rsuite";

const animatedComponents = makeAnimated();

const AddProductTilesBannerCard = ({
  item,
  mindx,
  openMallModal,
  setTab,
  gatweek,
  setweek,
  peopleInfo,
  mallidarray,
  regionidarray,
  selectedMalls,
}) => {

  const eateryvalue = JSON.parse(localStorage.getItem("iseatery"));

  const {
    DeleteProductTileApi,
    category_data,
    CreateProductTileApi,
    multiple_week_data,
    category_eatery_data,
  } = useStoreContext();
  const { get_brand_data, get_mall_data } = useMallContext();

  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [BrandName, setBrandName] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDiscription] = useState("");
  const [Week, setWeek] = useState("");
  const [Region, setRegion] = useState([]);
  const [mallsOption, setMallsOption] = useState([]);
  const [getTag, setTag] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [size, setSize] = useState("");
  const [filesqr, setFilesQr] = useState([]);
  const [qrDiscount, setQrDiscount] = useState("");



  // const [Category, setCategory] = useState("");

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  const { allowedMaxDays, beforeToday, combine } = DateRangePicker;

  // const [deletemodalstate, setDleteModalstate] = useState(false);
  const [getcondition, setCondition] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    console.log("get brand is", get_brand_data);
  }, []);

  const handleDateChange = (startDate, endDate) => {
    console.log("==>", startDate, endDate);
    setSelectedDates({ startDate, endDate });
  };

  

  // logo dropzon

  // const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
  //   useDropzone({
  //     onDrop: (acceptedFiles) => {
  //       console.log("file type", files[0]);
  //       console.log("acceptedFiles", acceptedFiles[0].File);
  //       const filteredFiles = acceptedFiles.filter(file => file.size <= 50000); // Limit size to 200KB (in bytes)

  //       {
  //         setFiles(
  //           filteredFiles.map((file) =>
  //             Object.assign(file, {
  //               preview: URL.createObjectURL(file),
  //             })
  //           )
  //         );

  //         if (filteredFiles.length !== acceptedFiles.length) {
  //           // Notification('');
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

      const maxSizeKB = 100; // Maximum size limit in KB
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
  // useDropzone({
  //   onDrop: (acceptedFiles) => {
  //     {
  //       setFilesQr(
  //         acceptedFiles.map((file) =>
  //           Object.assign(file, {
  //             preview: URL.createObjectURL(file),
  //           })
  //         )
  //       );
  //     }
  //     // setCondition(true);
  //     // if (acceptedFiles.length === 0) {
  //     //   window.location.reload(true);
  //     // }
  //   },
  // });

  const { getRootProps: getRootlogoPropsQr, getInputProps: getInputlogoPropsQr } =
  useDropzone({
    onDrop: async (acceptedFiles) => {  
      // setCondition2(true);

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

  // Update Promotion Banner Api

  const AddProductTilesBanner = async () => {
    console.log("test");
    const { startDate, endDate } = selectedDates;
    console.log("==>11", selectedDates);

    if (title == "" || undefined) {
      Notification("error", "Error!", "Please Enter Title!");
      return;
    } else if (mallidarray == "" || undefined) {
      Notification("error", "Error!", "Please Select Mall!");
      return;
    } else if (Category == "" || undefined) {
      Notification("error", "Error!", "Please Select Category!");
    } else if (Price == "" || undefined) {
      Notification("error", "Error!", "Please Enter Price!");
      return;
    }else if (Description == "" || undefined) {
      Notification("error", "Error!", "Please Enter Description!");
      return;
    }  else if (getTag == "" || undefined) {
      Notification("error", "Error!", "Please  Enter Tag!");
    }else if (startDate == "" || startDate == undefined) {
      Notification("error", "Error", "Please Enter Start Date");
      return;
    } else if (endDate == "" || endDate == undefined) {
      Notification("error", "Error", "Please Enter End Date");
      return;
    } else if (regionidarray == "" || undefined) {
      Notification("error", "Error!", "Please Select Region!");
    } 
    // else if (BrandName == "" || undefined) {
    //   Notification("error", "Error!", "Please Select Brand!");
    // } 
     else {
      const formdata = await new FormData();
      // await formdata.append("id", item.id)
      await formdata.append("title", title);
      await formdata.append("qr_discount", qrDiscount);

      for (var i = 0; i < regionidarray.length; i++) {
        await formdata.append("region_id[" + i + "]", regionidarray[i].id);
      }
      for (var i = 0; i < mallidarray.length; i++) {
        await formdata.append("mall_id[" + i + "]", mallidarray[i].id);
      }
      // await formdata.append("brand_id", BrandName);
      await formdata.append("category_id", Category);
      await formdata.append("price", Price);
      await formdata.append("description", Description);
      await formdata.append("tag", getTag);
      await formdata.append("size", size);
      await formdata.append(
        "from_date",
        moment(startDate[0]).format("YYYY-MM-DD")
      );
      await formdata.append(
        "to_date",
        moment(startDate[1]).format("YYYY-MM-DD")
      );
      await formdata.append("region_child_id[0]", "");
      if (files[0] !== undefined) {
        await formdata.append("image", files[0]);
      }
      if (filesqr[0] !== undefined) {
        await formdata.append("qr_code_image", filesqr[0]);
      }

      console.log("-=-=-=->", formdata);
      const data = await CreateProductTileApi(formdata);
      if (data) {
        if (data.success === 1) {
          console.log("category-data", data);
          Notification(
            "success",
            "Success!",
            "Product Tiles Added Successfully!"
          );

          setTab(1);
          // getLeaderboard();
          // window.location.reload();
        }
      }
    }
  };

  const DeleteProductTilesboard = async () => {
    console.log("test");

    const formdata = await new FormData();
    await formdata.append("id", item.id);

    console.log("-=-=-=->", formdata);
    const data = await DeleteProductTileApi(formdata);
    if (data) {
      if (data.success === 1) {
        console.log("mall-data", data);
        setTab(1);
        // getLeaderboard();
      }
    }
  };

  // const testfunction = () => {
  //   console.log("test");
  // }

  const onDateChage = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    console.log("cdategory data", category_data);
  });
  return (
    <div className="leaderboard-card-main-wrapp product-tiles-card-main-wrapp product-tiles-card-main-wrapp_edit">
      {/* Leaderboard flex start */}
      <div className="leaderboard-card-flex-wrapp leaderboard-card-flex-wrapp_edit">
        {/* Leaderboard first part responsive side start */}
        {/* <div className="leaderboard-card-first-resp-main-wrapp">
          <p className="leaderboard-last-part-txt">
            Service fee will apply if canceled
          </p>
          <button
            className="leaderboard-delete-icon-btn"
            onClick={() => DeleteProductTilesboard()}>
            cancel{" "}
            <img src={images.delete_icon} className="leaderboard-delete-icon" />
          </button>
        </div> */}
        {/* Leaderboard first part responsive side end*/}

        {/* Leaderboard part first start */}
        <div className="leaderboard-card-part-first leaderboard-card-part-first_edit">
          {/* Leaderboad form start */}

          {/* Leaderboard inputbox start */}
          <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl" style={{minWidth:"125px"}}>Title:<span className="star_require">*</span>
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
            <label className="leaderboard-card-lbl" style={{minWidth:"125px"}}>Mall(s):<span className="star_require">*</span>
</label>
            <div
              onClick={() => openMallModal()}
              className="leaderboard-card-inp"
              style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}
            >
              {selectedMalls && selectedMalls.length > 0
                ? selectedMalls.map((mall, mindx) => {
                    return <p className="mall-lib-font">{mall}</p>;
                  })
                : null}
      
            </div>
           
          </div>

          {/* Categories */}
          <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl" style={{minWidth:"125px"}}>Categories:<span className="star_require">*</span>
</label>
            <div className="select-wrapper" style={{ width: "100%" }}>
              <select
                className="leaderboard-card-inp cons_select_nav"
                onChange={(e) => {
                  // console.log("rrr", e.target.value);
                  setCategory(e.target.value);
                }}
              >
                <option selected disabled value="">
                  Select Category

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
          {/* Categories end*/}

          {/* <div className="leaderboard-card-inpbox-wrapp">
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
          </div> */}

          {/* Price */}
          <div className="leaderboard-card-inpbox-wrapp">
            <label className="leaderboard-card-lbl" style={{minWidth:"125px"}}>Price:<span className="star_require">*</span>
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
            <label className="leaderboard-card-lbl" style={{minWidth:"125px"}}>Description:<span className="star_require">*</span>
</label>
            <textarea
              style={{ height: "30px" }}
              className="leaderboard-card-inp"
              placeholder="Add Disctiption"
              value={Description}
              onChange={(e) => setDiscription(e.target.value)}
            />
          </div>
          {/* Desc end */}
          {/* Tags */}
          <div className="leaderboard-card-inpbox-wrapp">
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
              Duration<span className="star_require">*</span>

            </label>

            <DateRangePicker
              oneTap
              hoverRange="week"
              isoWeek
              placeholder="Add Duration"
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
                {/* Discount QR Code::<span className="star_require">*</span> */}
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
                {/* Supported Formats: jpeg, png. (150 x 150 pixels (max 50kb)) */}
              </div>
            </div>
          {/* Leaderboard inputbox start */}
        </div>
        <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}>
        <div
          className="leaderboard-card-part-sec product-tiles-card-sec-part"
          style={{ width: "200px", height: "200px" }}
          {...getRootlogoProps()}
        >
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
                  <div className="leaderboard-card-part-sec2" style={{paddingLeft:"1.1rem",paddingRight:"1.1rem",textAlign:"center"}}>
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
                      style={{ marginBottom: "10px",color:"var(--color-orange)",fontWeight:"600" }}
                    >
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
                  <div className="leaderboard-card-part-sec2">
                    <AiOutlineCloudUpload
                      style={{
                        width: "60px",
                        height: "60px",
                        color: "var(--color-orange)",
                        marginBottom: "10px",
                      }}
                    />
                    <h4 style={{ fontSize: "14px" }}>.PDF .JPG .PNG</h4>
                    <p style={{ fontSize: "14px" }}>
                      You can also upload file by
                    </p>

                    <button
                      type="button"
                      className="click_upload_btn"
                      style={{ marginBottom: "10px" }}
                    >
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

        {/* <div
              className="leaderboard-card-part-sec2"
              style={{
                width: "200px",
                height: "200px",
                padding:"1rem",
              }}>
              {selectedImage && (
                <button
                  onClick={clearImage}
                  style={{ transform: "translate(55px, 32px)",zIndex:"1" }}>
                  <HiPencilSquare />
                </button>
              )}
            
                <div style={{ position: "relative",width:"200px",height:"200px",border:"none", }}>
                 
                 {thumbsqr}
                </div>
              
            </div> */}

            <>
              {filesqr && filesqr.length > 0 ? (
                <div className="myprofile_inner_sec2_img_upload leaderboard-card-part-img-upl myprofile_inner_sec2_img_upload_border" style={{height:"200px"}}>
                  {thumbsqr}
                </div>
              ) : (
                <div style={{ width: "100%" }}>
                  <div className="leaderboard-card-part-sec2" style={{paddingLeft:"0.3rem",paddingRight:"0.3rem",textAlign:"center"}}>
                    <AiOutlineCloudUpload
                      style={{
                        width: "60px",
                        height: "60px",
                        color: "var(--color-orange)",
                        marginBottom: "10px",
                      }}
                    />
                    <h4 style={{ fontSize: "14px" }}>.JPG .PNG(150 x 150 pixels)</h4>
                    <p style={{ fontSize: "14px" }}>
                    (max 50kb)
                    </p>
                    {/* <p style={{ fontSize: "14px" }}>
                      You can also upload file by
                    </p> */}

                    {/* <button
                      type="button"
                      className="click_upload_btn"
                      style={{ marginBottom: "10px",color:"var(--color-orange)",fontWeight:"600" }}
                    >
                      click here
                    </button> */}
                  </div>
                </div>
              )}
            </>
        </div>
        {/* Leaderboard part second end */}

        {/* Leaderboard part third start */}
        <div
          className="leaderboard-card-part-third"
          style={{ alignSelf: "end" }}
        >
          {/* <button className='leaderboard-delete-icon-btn' onClick={() => DeleteProductTilesboard()}>cancel <img src={images.delete_icon} className='leaderboard-delete-icon' /></button>
                    <p className='leaderboard-last-part-txt'>Service fee will
                        apply if canceled</p>
                    <Link className='leaderboard-delete-icon-btn'><span className='leaderboard-extend-txt'>Extend</span> <img src={images.extend_icon} className='leaderboard-delete-icon' /></Link> */}
          <div className="leaderboard-btn-box leaderboard-btn-box_edit">
            <button style={{padding:"0.4rem",fontSize:"16px"}}
              className="btn btn-orange btn-orange_respoedit"
              onClick={() => AddProductTilesBanner()}
            >
              Publish
            </button>
          </div>
        </div>
        {/* Leaderboard part third end */}

        {/* Leaderboard last part responsive side start */}
        <div className="leaderboard-card-sec-resp-main-wrapp">
          {/* <Link className='leaderboard-delete-icon-btn'><span className='leaderboard-extend-txt'>Extend</span> <img src={images.extend_icon} className='leaderboard-delete-icon' /></Link> */}
          <div className="leaderboard-btn-box">
            <button
              className="btn btn-orange btn-orange_respoedit"
              onClick={() => AddProductTilesBanner()}
            >
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

export default AddProductTilesBannerCard;