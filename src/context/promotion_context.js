import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import promotion_reducer from "../reducer/promotion_reducer";
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
  get_promotion,
  create_promotion,
  update_promotion,
} from "../utils/Constant";
import { useMallContext } from "./mall_context";

const initialState = {
  get_promotion_loading: false,
  create_promotion_loading: false,
  update_promotion_loading: false,
  get_promotion_data: [],
  create_promotion_data: [],
  update_promotion_data: [],
};

const PromotionContext = React.createContext();
export const PromotionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(promotion_reducer, initialState);
  const { is_token } = useMallContext();

  // Get Product

  const getPromotion = async () => {
    dispatch({ type: GET_PROMOTION_BEGIN });
    try {
      const response = await axios.get(get_promotion, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + is_token,
        },
      });
      const getpromotion = response.data;
      // console.log("====", response.data);
      if (getpromotion.success == 1) {
        dispatch({ type: GET_PROMOTION_SUCCESS, payload: getpromotion });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: GET_PROMOTION_FAIL });
    }
  };

  // Create Product

  const CreatePromotion = async (params, url) => {
    dispatch({ type: CREATE_PROMOTION_BEGIN });
    try {
      const response = await axios.post(create_promotion, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + is_token,
        },
      });
      const createpromotion = response.data;
      if (createpromotion.success == 1) {
        dispatch({
          type: CREATE_PROMOTION_SUCCESS,
          payload: createpromotion,
        });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: CREATE_PROMOTION_FAIL });
    }
  };

  // Update Product

  const UpdatePromotion = async (params) => {
    dispatch({ type: UPDATE_PROMOTION_BEGIN });
    try {
      const response = await axios.post(update_promotion, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + is_token,
        },
      });
      const updatepromotion = response.data;
      if (updatepromotion.success == 1) {
        dispatch({
          type: UPDATE_PROMOTION_SUCCESS,
          payload: updatepromotion,
        });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: UPDATE_PROMOTION_FAIL });
    }
  };

  return (
    <PromotionContext.Provider
      value={{
        ...state,
        getPromotion,
        CreatePromotion,
        UpdatePromotion,
      }}
    >
      {children}
    </PromotionContext.Provider>
  );
};

export const usePromotionContext = () => {
  return useContext(PromotionContext);
};
