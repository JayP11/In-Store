import React from "react";

// import "antd/dist/antd.css";
import { notification } from "antd";

const createNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};
export default createNotification;
