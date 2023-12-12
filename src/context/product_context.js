import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import product_reducer from "../reducer/product_reducer";
import {
  CREATE_PRODUCT_BEGIN,
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_SUCCESS,
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_BEGIN,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
} from "../Action";

import {
  ACCEPT_HEADER,
  create_product,
  get_product,
  update_product,
} from "../utils/Constant";
import { useMallContext } from "./mall_context";

const initialState = {
  get_product_loading: false,
  create_product_loading: false,
  update_product_loading: false,
  get_product_data: [],
  create_product_data: [],
  update_product_data: [],
};

const ProductContext = React.createContext();
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(product_reducer, initialState);
  const { is_token } = useMallContext();

  // Get Product

  const getProduct = async (params) => {
    dispatch({ type: GET_PRODUCT_BEGIN });
    try {
      const response = await axios.post(get_product, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + is_token,
        },
      });
      const productdata = response.data;
      // console.log("====", response.data);
      if (productdata.success == 1) {
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: productdata });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: GET_PRODUCT_FAIL });
    }
  };

  // Create Product

  const CreateProduct = async (params) => {
    dispatch({ type: CREATE_PRODUCT_BEGIN });
    try {
      const response = await axios.post(create_product,params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + is_token,
        },
      });
      const storedata = response.data;
      console.log("customer-data", response.data);
      if (storedata.success == 1) {
        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: storedata });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: CREATE_PRODUCT_FAIL });
    }
  };

  // Update Product

  const UpdateProduct = async (params) => {
    dispatch({ type: UPDATE_PRODUCT_BEGIN });
    try {
      const response = await axios.post(update_product,params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + is_token,
        },
      });
      const storedata = response.data;
      console.log("customer-data", response.data);
      if (storedata.success == 1) {
        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: storedata });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: UPDATE_PRODUCT_FAIL });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        getProduct,
        CreateProduct,
        UpdateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
