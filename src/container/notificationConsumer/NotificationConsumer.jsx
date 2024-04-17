import React, { useState } from "react";
import "./NotificationConsumer.css";
import { CustomerHeroSecond } from "../../components";

const NotificationConsumer = ({ getsingalmalldata, setTab, setBDetalis }) => {
  const [data, setData] = useState([
    { id: 1, status: 0 },
    { id: 2, status: 1 },
    { id: 3, status: 0 },
    { id: 4, status: 0 },
  ]);

  const handleOnClick = (index) => {
    const newData = [...data];
    newData[index].status = 1;
    setData(newData);
  };
  return (
    <div>
      <CustomerHeroSecond getsingalmalldata={getsingalmalldata} />
      <div>
        <div className="profile_head_center" style={{ padding: "2rem  0" }}>
          <h3
            style={{
              fontSize: "40px",
              textTransform: "capitalize",
              fontWeight: "600",
            }}>
            Notifications
          </h3>
        </div>
        {data && data.length > 0
          ? data.map((item, index) => {
              return (
                <div
                  style={{
                    margin: "2rem",
                    background: "whitesmoke",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    borderLeft:
                      item.status === 0
                        ? "5px solid var(--color-orange)"
                        : "5px solid gray",
                  }}>
                  <b>John doe</b>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}>
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eius, sunt.
                    </span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                      <p style={{ color: "gray" }}>10 min ago</p>
                      {item.status === 0 ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            color: "var(--color-orange)",
                            fontWeight: "600",
                          }}>
                          <button
                            onClick={() => {
                              handleOnClick(index);
                            }}>
                            Mark as Read
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default NotificationConsumer;
