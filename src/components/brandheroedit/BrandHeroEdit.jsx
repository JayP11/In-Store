import React, { useState } from "react";
import "./BrandHeroEdit.css";
import { TbEditCircle } from "react-icons/tb";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import images from "../../constants/images";

const BrandHeroEdit = ({ get_mall_auth_data, sidebaropen,setTab }) => {
  const [files, setFiles] = useState([]);
  const [files2, setFiles2] = useState([]);
  const [getcondation, SetCondation] = useState(false);
  const [getcondation1, SetCondation1] = useState(false);
  const {
    getRootProps: getRootbannerProps,
    getInputProps: getInputbannerProps,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      SetCondation1(true);
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
        }
        SetCondation(true);
        if (acceptedFiles.length === 0) {
          window.location.reload(true);
        }
      },
    });

  const thumbs = files.map((file) => (
    <img
      src={file.preview}
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
      // className="img-fluid"
      alt="file"
    />
  ));

  const thumbs2 = files2.map((file) => (
    <img
      src={file.preview}
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
      // className="img-fluid"
      alt="file"
    />
  ));

  return (
    <div>
      <div className="brand-hero-edit-main-wrapp" onClick={()=>{setTab(2)}}
      //  {...getRootbannerProps()}
       >
        {/* <input
          {...getInputbannerProps()}
          accept="image/jpeg, image/jpg, image/png, image/eps"
        /> */}

        {getcondation1 === true ? (
          <>
            {files && files.length > 0 ? (
              thumbs
            ) : (
              <button type="button">
                <img src={images.card_edit} className="brand-hero-edit-icon" />
              </button>
            )}
          </>
        ) : (
          <>
            <img
              src={get_mall_auth_data?.store_banner_path}
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
        className="band-inn-logo-wrapp band-inn-logo-wrapp-space-left" onClick={()=>{setTab(2)}}
        style={{ left: sidebaropen === false ? "5%" : "" }}
        // {...getRootlogoProps()}
      >
        {/* <div style={{ width: '100%' }} {...getRootlogoProps()}> */}
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
              src={get_mall_auth_data?.store_logo_path}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "175px",
                objectFit: "contain",
              }}
              // className="img-fluidb"
            />

            <img
              src={images.card_edit}
              alt=""
              style={{ position: "absolute", top: "25px", right: "20px" }}
              className=""
            />
          </>
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default BrandHeroEdit;