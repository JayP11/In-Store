import React, { useState } from "react";
import "./MallHeroEdit.css";
import { TbEditCircle } from "react-icons/tb";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import images from "../../constants/images";
import { useMallContext } from "../../context/mall_context";
import { useEffect } from "react";

const MallHeroEdit = ({ get_mall_auth_data, sidebaropen,setTab }) => {
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([]);
  const [getcondation, SetCondation] = useState(false);
  const [getcondation1, SetCondation1] = useState(false);

  const { UpdateMall } = useMallContext();

  const {
    getRootProps: getRootbannerProps,
    getInputProps: getInputbannerProps,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }

      SetCondation1(true);
      UpdateMallData2(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const UpdateMallData2 = async (mmm) => {
    {
      const formdata = await new FormData();
      await formdata.append(
        "mall_master_id",
        get_mall_auth_data.mall_master_id
      );

      if (mmm[0] !== undefined) {
        await formdata.append("banner_mall", mmm[0]);
      } else {
      }

      console.log("-=-=-=->", formdata);
      const data = await UpdateMall(formdata);
      if (data) {
        if (data.success === 1) {
          console.log("mall-data", data);
        }
      }
    }
  };

  const UpdateMallData1 = async (mmm) => {
    const formdata = await new FormData();
    await formdata.append("mall_master_id", get_mall_auth_data.mall_master_id);
    if (mmm[0] !== undefined) {
      await formdata.append("shopping_center_logo_mall", mmm[0]);
    } else {
    }
    console.log("-=-=-=->", formdata);
    const data = await UpdateMall(formdata);
    if (data) {
      if (data.success === 1) {
        console.log("mall-data", data);
      }
    }
  };

  const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        {
          setFiles2(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
          // UpdateMallData2();
        }
        SetCondation(true);

        UpdateMallData1(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
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

  const thumbs2 = files2.map((file) => (
    <img
      src={file.preview}
      style={{ width: "100%", height: "100%",objectFit:"cover" }}
      className="img-fluid"
      alt="file"
    />
  ));

  return (
    <div>
      <div className={`${
      get_mall_auth_data.banner_mall_path 
         ? "banner_all_wrap" : "banner_all_wrap_height"
         
     }`}>
        <div className="brand-hero-edit-main-wrapp" onClick={()=>{setTab(2)}}
        //  {...getRootbannerProps()}
         >
          {/* <input
            {...getInputbannerProps()}
            accept="image/jpeg, image/jpg, image/png, image/eps"
          /> */}

          {/* banner img */}
          {getcondation1 === true ? (
            <>
              {files && files.length > 0 ? (
                thumbs
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
                src={get_mall_auth_data.banner_mall_path}
                style={{ width: "100%", height: "100%", }}
                className="img-fluid img_fluid_position"
              />

              <img src={images.card_edit} alt="" style={{ position: "absolute", top: "105px", right: "100px" }} className="mall-hero-edit-icon edit-icon-positon-resp" />
            </>
          )}
        </div>

        {/* logo wrapp */}
        <div
          className="band-inn-logo-wrapp" onClick={()=>{setTab(2)}}
          style={{ left: sidebaropen === false ? "5%" : "" }}
          // {...getRootlogoProps()}
        >
          {/* <div style={{ width: '100%' }} {...getRootlogoProps()}> */}
          {/* <div style={{ position: 'relative' }}> */}
          {/* <input
            {...getInputlogoProps()}
            accept="image/jpeg, image/jpg, image/png, image/eps"
          /> */}
          {getcondation === true ? (
            <>
              {files2 && files2.length > 0 ? (
                thumbs2
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
                src={get_mall_auth_data.shopping_center_logo_mall_path}
                style={{ width: "100%", height: "100%", maxHeight: "175px" }}
              // className="img-fluid"
              />
              <img src={images.card_edit} alt="" style={{ position: "absolute", top: "25px", right: "20px" }} />
            </>
          )}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default MallHeroEdit;