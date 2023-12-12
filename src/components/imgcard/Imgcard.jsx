import React from 'react'
import "./Imgcard.css";

const Imgcard = ({ item }) => {
  return (
    <div className="imgcard_main_wrapp">
      <div className="imgcard_first_sec">
        <p>{item.name && item.name}</p>
        <p>{item.km} km</p>
      </div>
      <img
        src={item.banner_mall_path && item.banner_mall_path}
        alt=""
        className="imgcard_img"
      />
    </div>
  );
};

export default Imgcard