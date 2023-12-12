import React from "react";
import "./Faq.css";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "antd";
import { useState } from "react";
import CinemaWelcomeStoreCard from "../cinemawelcomestorecard/CinemaWelcomeStoreCard";

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
];

const Faq = () => {
  const [getfaq1, setFaq1] = useState();
  const [getcon, SetCon] = useState(false);

  return (
    <div className="faq-main">
      <div className="faq-heading-part">
        <h2 className="faq-head">FAQs</h2>
        <p className="faq-head-txt">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh.
        </p>
      </div>
      <div className="faq-con">
        <div className="faq-part-orange-main">
          <div className="faq-orange-sub-part">
            {Data &&
              Data.map((item, index) => {
                console.log("--->", item);
                return (
                  <>
                    {item.color == 1 ? (
                      <>
                        <div className="faq-orange-main faq-black-main">
                          <div className="faq-orange-que-flex">
                            <p className="faq-orange-que">{item.title}</p>
                            <Button
                              className="faq-btn"
                              onClick={() => {
                                setFaq1(item.id), SetCon(!getcon);
                              }}>
                              <IoIosArrowDown className="faq-icon-up" />
                            </Button>
                          </div>
                          {item.id == getfaq1 && getcon === true ? (
                            <p>
                              <p className="faq-desc">{item.desc}</p>
                            </p>
                          ) : null}
                        </div>
                      </>
                    ) : null}
                  </>
                );
              })}
          </div>
        </div>
        <div className="faq-part-black-main">
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
        </div>
      </div>

      {/* <CinemaWelcomeStoreCard WcBtn={true} /> */}
    </div>
  );
};

export default Faq;
