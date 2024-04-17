import React from 'react'
import "./CinemaWelcomeCard.css";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CinemaWelcomeCard = ({ img1,img2, h3, h4, color, wc_btn, wc_btnlink,color1,colortxt }) => {
  return (
    <div
      className="wc_card_main_wrapp wc_card_main_wrapp_retailer wc_card_main_wrapp2"
      style={{ background: color, margin: "0px" }}>
      {/* <img src={img1} alt="" className="wc_bottom_img" /> */}
      {/* <img src={img2} alt=""  style={{width:"125px",height:"125px"}} /> */}
      {/* <div className="wc_top_dot"></div> */}
      <div className="wc_text_wrapp">
        <h3
          className="h3 h3res"
          style={{ fontWeight: "600", paddingTop: "2rem", color: color1 }}>
          {h3}
        </h3>
        {/* <h4 className="h4">{h4}</h4> */}
        <h4
          style={{ color: colortxt }}
          className="h4 h4res"
          dangerouslySetInnerHTML={{
            __html: h4,
          }}></h4>
          <div style={{display:"flex",gap:"10px"}}>
{img1 && (
  <img src={img1} alt="" style={{width:"115px",height:"35px"}} className="" />

)}

{img2 && (
  <img src={img2} alt="" style={{width:"115px",height:"35px"}} className="" />

)}
</div>

        {wc_btn && (
          <Link to={wc_btnlink} className="wc_btn_wrapp" style={{marginTop:"-0.8rem"}}> 
            <p>{wc_btn}</p>
            <BsArrowRight size={26} color="#fff" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default CinemaWelcomeCard