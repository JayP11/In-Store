import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const MAX_FILE_SIZE = 100000; // 100 KB in bytes
const MAX_DIMENSION = 100;

const Newpage = () => {
  const [acceptedFiles, setAcceptedFiles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const onDrop = (acceptedFiles) => {
    setErrorMsg("");
    const validFiles = acceptedFiles.filter((file) => isValidFile(file));
    setAcceptedFiles(validFiles);

    if (validFiles.length < acceptedFiles.length) {
      const numInvalidFiles = acceptedFiles.length - validFiles.length;
      const sizeError = numInvalidFiles > 1 ? "files" : "file";
      const dimensionError = numInvalidFiles > 1 ? "are" : "is";
      setErrorMsg();
      // alert("Invalid")
      // `${numInvalidFiles} ${sizeError} ${dimensionError} too large or have invalid dimensions.`
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const isValidFile = (file) => {
    return new Promise((resolve, reject) => {
      if (file.size > MAX_FILE_SIZE) {
        setErrorMsg("File size exceeds 100KB");
        reject(false);
      } else {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = () => {
          const width = image.naturalWidth;
          const height = image.naturalHeight;
          if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
            setErrorMsg("Image dimensions must be at most 100px x 100px");
            reject(false);
          } else {
            resolve(true);
          }
        };
        image.onerror = () => {
          setErrorMsg("Invalid file type");
          reject(false);
        };
      }
    }).catch((error) => {
      console.error("Error validating file:", error);
      setErrorMsg("Unknown error occurred while validating file");
      return false;
    });
  };

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>
        Drag and drop your image here, or click to select (Max 100KB, 100px x
        100px)
      </p>
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      {acceptedFiles.length > 0 && (
        <ul>
          {acceptedFiles.map((file) => (
            <li key={file.path}>
              {file.path} - {file.size} bytes
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Newpage;
