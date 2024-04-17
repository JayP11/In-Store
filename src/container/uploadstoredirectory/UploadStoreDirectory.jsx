import React, { useEffect, useState } from "react";
import "./UploadStoreDirectory.css";
import { useDropzone } from "react-dropzone";
import images from "../../constants/images";
import axios from "axios";
import { ACCEPT_HEADER, dowmtemp, uploadfile } from "../../utils/Constant";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Notification from "../../utils/Notification";
import { IoChevronBack } from "react-icons/io5";
import { MallHero } from "../../components";
import { LuDot } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";



const UploadStoreDirectory = ({ getsingleStoreData, get_mall_auth_data, setTab }) => {
  const [geturl, SetUrl] = useState("");
  const [files, setFiles] = useState([]);
  const [filename, SetFileName] = useState("");
  const [load, SetLoad] = useState(false);
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

  const DownTemp = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    const formdata = await new FormData();
    await formdata.append("ali", "ali");

    axios
      .post(dowmtemp, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          window.open(res.data.data, "_blank");
       
          
        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  const Uploadfile = async () => {
    if (files[0] === undefined) {
      Notification("warning", "Warning!", "Please Selcte Excel File!");
    } else {
      SetLoad(true);
      const token = JSON.parse(localStorage.getItem("is_token"));

      const formdata = await new FormData();
      await formdata.append("file", files[0]);

      axios
        .post(uploadfile, formdata, {
          headers: {
            Accept: ACCEPT_HEADER,
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(JSON.stringify(res.data, null, 2));
          if (res.data.status == 1) {
            Notification("success", "Success!", res.data.message);
            SetLoad(false);
            SetFileName("");
            setFiles([]);
            setTab(3);
               setIsAcceptTerm('');
          setIsAcceptTerm2('');
            return;
          } else {
            Notification("error", "Error!", res.data.message);
            SetFileName("");
            setFiles([]);
            SetLoad(false);
         
            return;
          }
        })
        .catch((err) => {
          console.log("err11", err);
          SetLoad(false);
        });
    }
  };

  const { getRootProps: getRootlogoProps, getInputProps: getInputlogoProps } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        console.log("file type", files[0]);
        console.log("acceptedFiles", JSON.stringify(acceptedFiles, null, 2));
        SetFileName(acceptedFiles[0].path);
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
    <>
      <MallHero get_mall_auth_data={get_mall_auth_data} />
      <div className="mm_main_wrapp">
        <div className='edit-brand-back-iconbox' onClick={() => setTab(3)}><IoChevronBack className='edit-brand-back-icon' /> <p className='edit-brand-back-txt'>Back</p></div>
        <div className="mall_name_wrapp mall_name_wrapp_eatery_upload mall_mall_name_wrapp">
          <p className="mall_name_heading mall_mall_name_heading">
            {get_mall_auth_data.name && get_mall_auth_data.name} :
          </p>
          <span className="mall_mall_name_heading" style={{fontWeight:"600"}}>Upload Mall Brands</span>
        </div>
        {/* <div className="mm_horizontal_line"></div> */}
        <div className="" style={{marginBottom:"2rem"}}></div>
        <div className="store-directory-card">
          <div className="store-directory-part1">
            <div className="store-directory-first-inner-part1">
              <p className="store-dire-head" style={{fontWeight:"600"}}>
                How to upload an Excel file and display it via the spreadsheet
                control
              </p>
              <div>
              <div className="cinema_profile_bullet">
              <div>●</div>
                <p>
                  Download the In-store{" "}
                  <span
                    style={{
                      color: "var(--color-orange)",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Excel template
                  </span>{" "}
                  file below
                </p>
                </div>
                <div className="cinema_profile_bullet">
                <div>●</div>
                <p>Add your brand name, shop number, contact number, contact email, shop trading hours, and shop description to the
                  In-store shop directory template Excel file.</p>
                </div>
                <div className="cinema_profile_bullet">
                <div>●</div>
                <p>Save your Excel file with the shopping centre/Mall name</p>
                </div>
                <div className="cinema_profile_bullet">
                <div>●</div>
                <p>Upload it for processing</p>
                </div>
              </div>
            </div>
            <div className="store-directory-first-inner-part2" >
              <button style={{display:"flex",gap:"0.5rem",alignItems:"center"}}
                className="btn btn-black"
                onClick={() => {
                  DownTemp();
                }}
              >
                Download Template
                <img src={images.download_upload_directory} style={{width:"20px",height:"20px"}}/>

              </button>
            </div>
            {/* <p className="update-details-txt">Drag and drop the Event <br /> image here (250 x 250)</p>
           */}
          </div>
          {load === true ? (
            <div
              style={{
                width: "100%",
                height: "10vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="loader"></div>
            </div>
          ) : (
            <div style={{ width: "100%" }} {...getRootlogoProps()}>
              <div className="store-directory-part2">
                <AiOutlineCloudUpload
                  style={{
                    width: "60px",
                    height: "60px",
                    color: "var(--color-orange)",
                    marginBottom: "10px",
                  }}
                />

                <h4 className="" style={{fontWeight:"500"}}>.ELSX .CVS</h4>
                <p className="" style={{fontWeight:"600",color:"#000"}}>You can also upload files by</p>
                {filename === "" ? null : <p> {filename} </p>}
                <input
                  {...getInputlogoProps()}
                  type="file"
                  name="xlsFile"
                  id="xlsFile"
                  accept=".xls, .xlsx"
                />
                <button type="button" className="click_upload_btn" style={{ marginBottom: "10px",color:"#ff8b00",fontSize:"14px",fontWeight:"500" }}>
                  clicking here
                </button>
              </div>
            </div>
          )}

          <div className='upl_dir_la_flex_main'>
                    <div className='upl_dir_la_flex'>
          <div className="store-directory-part3">
            <div className="store-directory-third-inner-part1">
              <button
                style={{
                  color: "var(--color-orange",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              //   onClick={() => setIsOpen(true)}
              ></button>
            </div>
            {load === true ? null : (
              <button
                className="btn btn-black mb-10"
                disabled={isAcceptTerm == 1 ? false : true}

                onClick={() => {
                  Uploadfile();
                }}
              >
                Upload File
              </button>
            )}
          </div>
          <div className="store-directory-part4">
            <button
              className="btn"
              onClick={() => {
                SetFileName("");
                setFiles([]);
              }}
            >
              Cancel
            </button>
                  </div>
              </div>
              <div>
                  <div className="signup_terms_wrapp">
            <input
              type="checkbox"
              value={isAcceptTerm}
              onChange={handleTermChange}
              checked={isAcceptTerm == 1}
            />
            <p className="fs-des" style={{ fontWeight: "400", fontSize: "14px" }}>
              I have read and agree to the{" "}
              <a className="signup_terms_link">Privacy Policy</a>
            </p>
          </div> 
                  <div className="signup_terms_wrapp" style={{marginTop:"0.5rem"}}>
            <input
              type="checkbox"
              value={isAcceptTerm2}
              onChange={handleTermChange2}
              checked={isAcceptTerm2 == 1}
            />
            <p className="fs-des" style={{ fontWeight: "400", fontSize: "14px" }}>
              I have read and agree to the{" "}
              <a className="signup_terms_link">Terms and Conditions</a>
            </p>
          </div> 
          </div>
          </div>
               </div>

              
      </div>
    </>
  );
};

export default UploadStoreDirectory;