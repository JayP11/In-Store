import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';
import images from '../../constants/images';

const Footer = () => {
  return (
    <div className="footer_main_wrapp">
      <div className="footer_base_wrapp">
        <div className="footer_sec1">
          <img src={images.instore_app_header_logo} alt=""  className='footer_logo_img'/>
        </div>
        <div className="footer_sec2">
          <Link to= 'mall'>Mall Registration</Link>
          <div className="foo_vl"></div>
          <Link to='/retailer'>Brand Registration</Link>
          <div className="foo_vl"></div>
          <Link to= '/CinemaPage'>Cinema Registration</Link>
         
          {/* <div className="foo_vl"></div> */}
          <Link>Contact In-store</Link>
          {/* <div className="foo_vl"></div>
          <Link>FAQ’s</Link> */}
          {/* <div className="foo_vl"></div>
          <Link>Return Policy</Link> */}
          {/* <div className="foo_vl"></div>
          <Link>T&C’s</Link> */}
          {/* <div className="foo_vl"></div>
          <Link>Responsible Disclosure</Link> */}
          <div className="foo_vl"></div>
          <Link>Corporate T&C’s</Link>
          <div className="foo_vl"></div>
          <Link to="/privacypolicy">Privacy Policy</Link>
        </div>
        <div className="footer_sec3">
          <p>© 2024 In-store App. All Rights Reserved.</p>
          <p>
            App & Website Design by <span>KNOWN</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer