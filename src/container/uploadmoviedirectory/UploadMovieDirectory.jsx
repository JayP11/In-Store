import axios from 'axios';
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { ACCEPT_HEADER, dowmtemp, eatery_sample_export, mall_eatery_import, movie_import, movie_sample_export, uploadfile } from '../../utils/Constant';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MallHero } from '../../components';
import { IoChevronBack } from 'react-icons/io5';
import Notification from "../../utils/Notification"


const UploadMovieDirectory = ({ get_mall_auth_data, setTab, getTab }) => {

    const [geturl, SetUrl] = useState("");
    const [files, setFiles] = useState([]);
    const [filename, SetFileName] = useState("");
    const [load, SetLoad] = useState(false);

    const DownTemp = async () => {
        const token = JSON.parse(localStorage.getItem("is_token"));

        const formdata = await new FormData();
        await formdata.append("ali", "ali");

        axios
            .post(movie_sample_export, formdata, {
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
                .post(movie_import, formdata, {
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
                <div className='edit-brand-back-iconbox' onClick={() => setTab(17)}><IoChevronBack className='edit-brand-back-icon' /> <p className='edit-brand-back-txt'>Back</p></div>
                <div className="mall_name_wrapp">
                    <p className="mall_name_heading">
                        {get_mall_auth_data.name && get_mall_auth_data.name} :
                    </p>
                    <span>Upload Eatery Directory</span>
                </div>
                <div className="mm_horizontal_line"></div>
                <div className="store-directory-card">
                    <div className="store-directory-part1">
                        <div className="store-directory-first-inner-part1">
                            <p className="store-dire-head">
                                How to upload an Excel file and display it via the spreadsheet
                                control
                            </p>
                            <ul>
                                <li>
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
                                </li>
                                <li>Add your data to the In-store Excel file</li>
                                <li>Save your Excel file with the shopping centre/Mall name</li>
                                <li>Upload it for processing</li>
                            </ul>
                        </div>
                        <div className="store-directory-first-inner-part2">
                            <button style={{display:"flex",gap:"0.5rem",alignItems:"center"}}
                                className="btn btn-orange"
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

                                <h4 className="">.ELSX .CVS</h4>
                                <p className="">You can also upload files by</p>
                                {filename === "" ? null : <p> {filename} </p>}
                                <input
                                    {...getInputlogoProps()}
                                    type="file"
                                    name="xlsFile"
                                    id="xlsFile"
                                    accept=".xls, .xlsx"
                                />
                                <button type="button" className="click_upload_btn" style={{ marginBottom: "10px" }}>
                                    click here
                                </button>
                            </div>
                        </div>
                    )}
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
                                className="btn btn-orange mb-10"
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
                            className="btn btn-blue"
                            onClick={() => {
                                SetFileName("");
                                setFiles([]);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadMovieDirectory