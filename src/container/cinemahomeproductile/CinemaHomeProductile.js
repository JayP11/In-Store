import React, { useRef, useState } from "react";
import "./CinemaHomeProductile.css";
import images from "../../constants/images";
import ReactPlayer from "react-player";

const CinemaHomeProductile = () => {
  // const [playing, setPlaying] = useState(false);

  return (
    <div className="CinemaHomeProductile_main">
      {/* <div>
        <ReactPlayer
          url={images.demovideo}
          muted={true}
          autoplay={true}
          controls={false}
          playing={true}
          width="640"
          height="640"
          // autoplay={playing}
          // onReady={handlePlayerReady}
        />
      </div> */}
      <img
        src={images.cinemahoodie}
        alt="cinemahoodie"
        className="CinemaHomeProductile_img_inner"
      />
      <img
        src={images.cinematrackpant}
        alt="cinematrackpant"
        className="CinemaHomeProductile_img_inner"
      />
      <img
        src={images.cinemashoes}
        alt="cinemashoes"
        className="CinemaHomeProductile_img_inner"
      />
      <img
        src={images.cinemaheadphone}
        alt="cinemaheadphone"
        className="CinemaHomeProductile_img_inner"
      />
    </div>
  );
};

export default CinemaHomeProductile;
