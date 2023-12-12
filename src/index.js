import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MallProvider } from "./context/mall_context";
import { CustomerProvider } from "./context/customer_context";
import { MeventProvider } from "./context/mevent_context";
import { AuthProvider } from "./context/auth_context";
import { StoreProvider } from "./context/store_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <MallProvider>
        <MeventProvider>
          <CustomerProvider>
            <StoreProvider>
              <App />
            </StoreProvider>
          </CustomerProvider>
        </MeventProvider>
      </MallProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
