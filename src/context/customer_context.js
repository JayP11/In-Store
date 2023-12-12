import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import customer_reducer from "../reducer/customer_reducer";
import {
  CUSTOMER_UPDATE_BEGIN,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
  GET_CUSTOMER_BEGIN,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAIL,
  CUSSTOMER_UPDATE_BEGIN,
  CUSSTOMER_UPDATE_ERROR,
} from "../Action";
import {
  ACCEPT_HEADER,
  get_customer,
  update_customer,
} from "../utils/Constant";
import { useMallContext } from "./mall_context";

const initialState = {
  get_customer_loading: false,
  cupdate_loading: false,
  get_customer_data: "",
  cupdate_data: [],
};

const CustomerContext = React.createContext();
export const CustomerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customer_reducer, initialState);
  const { is_login, is_token } = useMallContext();
  // register

  const setCustomerUpdate = async (params, url) => {
    const token = await JSON.parse(localStorage.getItem("is_token"));

    dispatch({ type: CUSTOMER_UPDATE_BEGIN });
    try {
      const response = await axios.post(update_customer, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const updatedata = response.data;
      // console.log("====", response.data);
      if (updatedata.success == 1) {
        dispatch({ type: CUSTOMER_UPDATE_SUCCESS, payload: updatedata });
        localStorage.setItem("is_login", JSON.stringify(true));
      }
      return response.data;
    } catch (error) {
      dispatch({ type: CUSTOMER_UPDATE_FAIL });
      console.log("errrr", error);
      localStorage.setItem("is_login", JSON.stringify(false));
    }
  };

  // get mall

  const getCustomer = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: GET_CUSTOMER_BEGIN });
    try {
      const response = await axios.get(get_customer, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const customerdata = response.data;
      console.log("customer-data123", response.data.data.cus_profile_path);
      if (customerdata.success == 1) {
        localStorage.setItem("cusimg", response.data.data.cus_profile_path);
        dispatch({ type: GET_CUSTOMER_SUCCESS, payload: customerdata });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: GET_CUSTOMER_FAIL });
    }
  };

  useEffect(() => {
    getCustomer();
  }, [is_token]);

  return (
    <CustomerContext.Provider
      value={{
        ...state,
        setCustomerUpdate,
        getCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
  return useContext(CustomerContext);
};
