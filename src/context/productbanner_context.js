import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import productbanner_reducer from "../reducer/productbanner_reducer";
import {
  CREATE_PROMOTION_BEGIN,
  CREATE_PROMOTION_SUCCESS,
  CREATE_PROMOTION_FAIL,
  GET_PROMOTION_BEGIN,
  GET_PROMOTION_SUCCESS,
  GET_PROMOTION_FAIL,
  UPDATE_PROMOTION_BEGIN,
  UPDATE_PROMOTION_SUCCESS,
  UPDATE_PROMOTION_FAIL,
} from "../Action";

import {
  ACCEPT_HEADER,
  get_productbanner,
  create_productbanner,
  update_productbanner,
} from "../utils/Constant";
import { useMallContext } from "./mall_context";

const initialState = {
  get_productbanner_loading: false,
  create_productbanner_loading: false,
  update_productbanner_loading: false,
  get_productbanner_data: [],
  create_productbanner_data: [],
  update_productbanner_data: [],
};

const ProductbannerContext = React.createContext();
export const ProductbannerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productbanner_reducer, initialState);
  const { is_token } = useMallContext();

  // Get Product

  const getProductbanner = async () => {
    dispatch({ type: GET_PROMOTION_BEGIN });
    try {
      const response = await axios.get(get_productbanner, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + is_token,
        },
      });
      const getproductbanner = response.data;
      // console.log("====", response.data);
      if (getproductbanner.success == 1) {
        dispatch({ type: GET_PROMOTION_SUCCESS, payload: getproductbanner });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: GET_PROMOTION_FAIL });
    }
  };

  // Create Product

  const CreateProductbanner = async (params, url) => {
    dispatch({ type: CREATE_PROMOTION_BEGIN });
    try {
      const response = await axios.post(create_productbanner, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + is_token,
        },
      });
      const createproductbanner = response.data;
      if (createproductbanner.success == 1) {
        dispatch({
          type: CREATE_PROMOTION_SUCCESS,
          payload: createproductbanner,
        });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: CREATE_PROMOTION_FAIL });
    }
  };

  // Update Product

  const UpdateProductbanner = async (params) => {
    dispatch({ type: UPDATE_PROMOTION_BEGIN });
    try {
      const response = await axios.post(update_productbanner, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + is_token,
        },
      });
      const updateproductbanner = response.data;
      if (updateproductbanner.success == 1) {
        dispatch({
          type: UPDATE_PROMOTION_SUCCESS,
          payload: updateproductbanner,
        });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: UPDATE_PROMOTION_FAIL });
    }
  };

  return (
    <ProductbannerContext.Provider
      value={{
        ...state,
        getProductbanner,
        CreateProductbanner,
        UpdateProductbanner,
      }}
    >
      {children}
    </ProductbannerContext.Provider>
  );
};

export const useProductbannerContext = () => {
  return useContext(ProductbannerContext);
};
