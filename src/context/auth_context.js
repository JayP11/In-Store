import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import auth_reducer from "../reducer/auth_reducer";
import Notification from "../utils/Notification";

import {
  GET_REGION_BEGIN,
  GET_REGION_SUCCESS,
  GET_REGION_FAIL,
  REGISTER_CUSTOMER_BEGIN,
  REGISTER_CUSTOMER_SUCCESS,
  REGISTER_CUSTOMER_FAIL,
  MALL_SIGNUP_BEGIN,
  MALL_SIGNUP_SUCCESS,
  MALL_SIGNUP_FAIL,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../Action";

import {
  ACCEPT_HEADER,
  customer_register,
  get_region,
  login,
  register_mall,
} from "../utils/Constant";
// import { useMallContext } from "./mall_context";

const initialState = {
  region_loading: false,
  register_customer_loading: false,
  region_data: [],
  register_customer_data: [],
  mall_signup_loading: false,
  mall_signup_data: [],
  login_loading: false,
  login_data: {},
  is_token: "",
};

const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(auth_reducer, initialState);
  //   const { is_login, is_token } = useMallContext();

  // get Region

  const GerRegion = async () => {
    dispatch({ type: GET_REGION_BEGIN });
    try {
      const response = await axios.get(get_region, {
        headers: {
          Accept: ACCEPT_HEADER,
          //   Authorization: "Bearer " + is_token,
        },
      });
      const regiondata = response.data;
      console.log("region-data", response.data);
      if (regiondata.success == 1) {
        dispatch({ type: GET_REGION_SUCCESS, payload: regiondata });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: GET_REGION_FAIL });
    }
  };

  //   Register customer

  const RegisterCustomer = async (params, url) => {
    dispatch({ type: REGISTER_CUSTOMER_BEGIN });
    try {
      const response = await axios.post(customer_register, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          //   Authorization: "Bearer " + is_token,
        },
      });
      console.log("responce", response.data.success);
      const registercustomerdata = response.data.data;
      if (response.data.success === 1) {
        dispatch({
          type: REGISTER_CUSTOMER_SUCCESS,
          payload: registercustomerdata,
        });
        Notification("success", "Success!", response.data.message);
      } else {
        Notification("error", "Error", response.data.message);
      }
      return response.data;
    } catch (error) {
      dispatch({ type: REGISTER_CUSTOMER_FAIL });
      console.log("error", error);
    }
  };

  // mall Registore api
  const setMallRegister = async (formdata, url) => {
    dispatch({ type: MALL_SIGNUP_BEGIN });
    try {
      const response = await axios.post(register_mall, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
      // console.log("====", response.data);
      if (logindata.success == 1) {
        dispatch({ type: MALL_SIGNUP_SUCCESS, payload: logindata });
        // localStorage.setItem("is_login", JSON.stringify(true));
      } else {
        alert(logindata.message);
      }
      return response.data;
    } catch (error) {
      dispatch({ type: MALL_SIGNUP_FAIL });
      console.log("mall-register error", error);
      // localStorage.setItem("is_login", JSON.stringify(false));
    }
  };

  // store/brand registration

  // const setBrandRegister = async (params, url) => {
  //   dispatch({ type: BRAND_SIGNUP_BEGIN });
  //   try {
  //     const response = await axios.post(register_mall, params, {
  //       headers: {
  //         Accept: ACCEPT_HEADER,
  //       },
  //     });
  //     const logindata = response.data;
  //     // console.log("====", response.data);
  //     if (logindata.success == 1) {
  //       dispatch({ type: MALL_SIGNUP_SUCCESS, payload: logindata });
  //       // localStorage.setItem("is_login", JSON.stringify(true));
  //     } else {
  //       alert(logindata.message);
  //     }
  //     return response.data;
  //   } catch (error) {
  //     dispatch({ type: MALL_SIGNUP_FAIL });
  //     console.log("mall-register error", error);
  //     // localStorage.setItem("is_login", JSON.stringify(false));
  //   }
  // };

  // login mall Registore api
  const setLogin = async (params, url) => {
    dispatch({ type: LOGIN_BEGIN });
    try {
      const response = await axios.post(login, params, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
     
      if (logindata.success == 1) {
        // localStorage.setItem("cusimg", response.data.user.store_logo_path);

        console.log("login data---login",logindata);
        dispatch({ type: LOGIN_SUCCESS, payload: logindata });
        localStorage.setItem("is_login", JSON.stringify(true));
        localStorage.setItem("is_token", JSON.stringify(logindata.token));
        if(logindata.user.role == 6 ||logindata.user.role ==='6' ){
          localStorage.setItem(
            "cusimg",
            JSON.stringify(logindata.user.store_logo_path)
          );
        }else if(logindata.user.role == 4 ||logindata.user.role ==='4' ){
          localStorage.setItem(
            "cusimg",
            JSON.stringify(logindata.user.cus_profile_path)
          );
        }else if(logindata.user.role == 3 ||logindata.user.role ==='3' ){
          localStorage.setItem(
            "cusimg",
            JSON.stringify(logindata.user.store_logo_path)
          );
        }else if(logindata.user.role == 2 ||logindata.user.role ==='2' ){
          localStorage.setItem(
            "cusimg",
            JSON.stringify(logindata.user.store_logo_path)
          );
        }else {
          null
        }
       
        localStorage.setItem("role", JSON.stringify(logindata.user.role));
              
      } else {
        alert(logindata.message);
      }
      return response.data;
    } catch (error) {
      dispatch({ type: LOGIN_FAIL });
      localStorage.setItem("is_login", JSON.stringify(false));
      console.log("login error", error);
    }
  };

  useEffect(() => {
    GerRegion();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        GerRegion,
        setLogin,
        RegisterCustomer,
        setMallRegister,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
