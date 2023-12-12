import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import user_reducer from "../reducer/user_reducer";
import {
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_TOKEN,
  LOGOUT_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_BEGIN,
} from "../Action";
import { ACCEPT_HEADER, get_user, login, register } from "../utils/Constant";

const getisLogin = () => {
  let is_login = localStorage.getItem("is_login");
  console.log("is_login", is_login);
  if (is_login) {
    return JSON.parse(localStorage.getItem("is_login"));
  } else {
    return {};
  }
};

const initialState = {
  is_login: getisLogin(),
  user_signup_loading: false,
  user_signup_data: [],
  is_token: "",
  get_user_loading: false,
  get_user_data: [],
};

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(user_reducer, initialState);

  // register

  const setRegister = async (params, url) => {
    dispatch({ type: SIGNUP_BEGIN });
    try {
      const response = await axios.post(register, params, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const registerdata = response.data;
      // console.log("====", response.data);
      if (registerdata.success == 1) {
        dispatch({ type: SIGNUP_SUCCESS, payload: registerdata });
        // localStorage.setItem("is_login", JSON.stringify(true));
      }
      return response.data;
    } catch (error) {
      dispatch({ type: SIGNUP_FAIL });
      localStorage.setItem("is_login", JSON.stringify(false));
    }
  };

  // login

  const setLogin = async (params, url) => {
    dispatch({ type: MALL_SIGNUP_BEGIN });
    try {
      const response = await axios.post(login, params, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
      // console.log("====", response.data);
      if (logindata.success == 1) {
        dispatch({ type: MALL_SIGNUP_SUCCESS, payload: logindata });
        localStorage.setItem("is_login", JSON.stringify(true));
        localStorage.setItem("is_token", JSON.stringify(logindata.token));
      }
      return response.data;
    } catch (error) {
      dispatch({ type: MALL_SIGNUP_FAIL });
      localStorage.setItem("is_login", JSON.stringify(false));
    }
  };

  // get user

  const getUser = async () => {
    dispatch({ type: GET_USER_BEGIN });
    try {
      const response = await axios.get(get_user, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const userdata = response.data;
      console.log("response.data", response.data);
      if (userdata.success == 1) {
        dispatch({ type: GET_USER_SUCCESS, payload: userdata });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: GET_USER_FAIL });
    }
  };

  const logoutUser = (history) => {
    dispatch({ type: LOGOUT_USER });
    localStorage.setItem("is_login", false);
    localStorage.setItem("is_token", "");
    //  localStorage.clear();
    history("/");
    return "logout";
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    if (token) {
      dispatch({ type: SET_TOKEN, payload: token });
    }

    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        setRegister,
        setLogin,
        logoutUser,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
