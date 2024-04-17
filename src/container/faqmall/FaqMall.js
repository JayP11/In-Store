import React, { useEffect } from "react";
import "./FaqMall.css";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "antd";
import { useState } from "react";
import { ACCEPT_HEADER, get_faq } from "../../utils/Constant";
import axios from "axios";
import { MallHero } from "../../components";
import images from "../../constants/images";

const Data = [
  {
    id: 1,
    title: "Who can beneﬁt from In-store?",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate.",
    color: "1",
  },

  {
    id: 2,
    title: "How do I promote my brand on In-store?",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate.",
    color: "1",
  },
  {
    id: 3,
    title: "How do I load products onto In-store?",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate.",
    color: "1",
  },
  {
    id: 4,
    title: "How do I load products onto In-store?",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate.",
    color: "1",
  },
  {
    id: 5,
    title: "How do I join In-Store?",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate.",
    color: "2",
  },
  {
    id: 6,
    title: "Who has accesss to my analytics?",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate.",
    color: "2",
  },
  {
    id: 7,
    title: "Can customers purchase products on In-Store?",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate.",
    color: "2",
  },
  {
    id: 8,
    title: "How do I book my campaigns ahead of time?",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate.",
    color: "2",
  },
  {
    id: 9,
    title: "How do I book my campaigns ahead of time?",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate.",
    color: "1",
  },
];

const FaqMall = ({get_mall_auth_data}) => {
  const [getfaq1, setFaq1] = useState();
  const [getcon, SetCon] = useState(false);
  const [loading, setLoading] = useState(false);
  const [getFaqArray, SetFaqArray] = useState([]);

  useEffect(()=>{
    getFaqData();
  },[])

  const getFaqData = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    setLoading(true);
    axios
      .get(get_faq, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        setLoading(false);
        if (res.data.success == 1) {
          SetFaqArray(res.data.data);
          // Notification("success", "Success!", "Mall Registerated Successfully!");
        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
        setLoading(false);
      });
  };

  return (
    <>
    {loading === true ? (

      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div className="loader"></div>
      </div>
    ) : (
    <>
    {/* <MallHero get_mall_auth_data={get_mall_auth_data} /> */}
    <div
              className="faq_mall_main_wrapper about_hero_wrapp2"
              style={{
                // backgroundImage: url(${images.about_hero}),
                backgroundImage: `url(${
                  images.faq_banner
                })`,
                backgroundPosition: "top",
                backgroundSize: "cover",
              }}>
              {/* <img src={images.hero_banner} alt="" /> */}
              <div className="homehero_text_main">
                <div className="homehero_text_base homehero_text_base_retailer">
                  <img src={images.instore_app_header_logo} alt="" />
                  {/* <img
                    src={getStoreData ? getStoreData.logo_img_path : ""}
                    alt=""
                  /> */}
                  {/* social media account button start */}
                  <div className="apps_logos_wrapp">
                    {/* <img src={images.play_store_logo} alt="play store logo" /> */}
                    <img
                      style={{ width: "155px", height: "46px" }}
                      src={images.app_store_logo}
                      alt="play store logo"
                    />
                    <img
                      style={{ width: "155px", height: "46px" }}
                      src={images.app_store_logo}
                      alt="app store logo"
                    />
                  </div>
                </div>
              </div>
            </div>
    <div className="faq-main">
      <div className="faq-heading-part">
        <h2 className="faq-head">FAQs</h2>
        <p className="faq-head-txt">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh.
        </p>
      </div>
      <div className="faq-con">
        {/* <div className="faq-part-orange-main">
          <div className="faq-orange-sub-part"> */}
            {getFaqArray &&
              getFaqArray.map((item, index) => {
                console.log("--->", item);
                return (
                  <>
                  
                      <>
                        <div className="faq-orange-main faq-black-main">
                          <div className="faq-orange-que-flex"   onClick={() => {
                                setFaq1(item.id), SetCon(!getcon);
                              }}>
                            <p className="faq-orange-que">{item.name}</p>
                            <Button
                              className="faq-btn"
                            >
                              <IoIosArrowDown className="faq-icon-up" />
                            </Button>
                          </div>
                          {item.id == getfaq1 && getcon === true ? (
                            <p>
                              <p className="faq-desc">{item.description}</p>
                            </p>
                          ) : null}
                        </div>
                      </>
                   
                  </>
                );
              })}
          {/* </div>
        </div> */}
        {/* <div className="faq-part-black-main">
          <div className="faq-orange-sub-part">
            {Data &&
              Data.map((item, index) => {
                console.log("--->", item);
                return (
                  <>
                    {item.color == 2 ? (
                      <>
                        <div className="faq-black-main">
                          <div className="faq-orange-que-flex">
                            <p className="faq-orange-que">{item.title}</p>
                            <Button
                              className="faq-btn"
                              onClick={() => {
                                setFaq1(item.id);
                                SetCon(!getcon);
                                console.log("index is", item.id);
                              }}>
                              <IoIosArrowDown className="faq-icon-up" />
                            </Button>
                          </div>

                          {item.id == getfaq1 && getcon === true ? (
                            <div>
                              <p className="faq-desc">{item.desc}</p>
                            </div>
                          ) : null}
                        </div>
                      </>
                    ) : null}
                  </>
                );
              })}
          </div>
        </div> */}
      </div>

    </div>
    </>)}
    </>
  );
};

export default FaqMall;