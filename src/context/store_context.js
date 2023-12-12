import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import store_reducer from "../reducer/store_reducer";
import Notification from "../utils/Notification";
import {
  REGISTER_STORE_BEGIN,
  REGISTER_STORE_SUCCESS,
  REGISTER_STORE_FAIL,
  GET_STORE_BEGIN,
  GET_STORE_SUCCESS,
  GET_STORE_FAIL,
  GET_RETAILER_BEGIN,
  GET_RETAILER_SUCCESS,
  GET_RETAILER_FAIL,
  UPDATE_BRAND_BEGIN,
  UPDATE_BRAND_SUCCESS,
  UPDATE_BRAND_FAIL,
  DELETE_LEADERBOARD_BEGIN,
  DELETE_LEADERBOARD_SUCCESS,
  DELETE_LEADERBOARD_FAIL,
  DELETE_PROMOTION_BANNER_FAIL,
  DELETE_PROMOTION_BANNER_SUCCESS,
  DELETE_PROMOTION_BANNER_BEGIN,
  DELETE_PRODUCT_BANNER_FAIL,
  DELETE_PRODUCT_BANNER_SUCCESS,
  DELETE_PRODUCT_BANNER_BEGIN,
  UPDATE_LEADERBOARD_BANNER_BEGIN,
  UPDATE_LEADERBOARD_BANNER_SUCCESS,
  UPDATE_LEADERBOARD_BANNER_FAIL,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_BEGIN,
  UPDATE_PROMOTION_BANNER_BEGIN,
  UPDATE_PRAMOTION_BANNER_FAIL,
  UPDATE_PRAMOTION_BANNER_SUCCESS,
  UPDATE_PRODUCT_BANNER_BEGIN,
  UPDATE_PRODUCT_BANNER_SUCCESS,
  UPDATE_PRODUCT_BANNER_FAIL,
  CREATE_LEADERBOARD_BANNER_BEGIN,
  CREATE_LEADERBANNER_BANNER_SUCCESS,
  CREATE_LEADERBOARD_BANNER_FAIL,
  CREATE_PROMOTION_BANNER_BEGIN,
  CREATE_PROMOTION_BANNER_SUCCESS,
  CREATE_PROMOTION_BANNER_FAIL,
  CREATE_PRODUCT_BANNER_BEGIN,
  CREATE_PRODUCT_BANNER_SUCCESS,
  CREATE_PRODUCT_BANNER_FAIL,
  CREATE_PRODUCTTILES_BANNER_BEGIN,
  CREATE_PRODUCTTILES_BANNER_SUCCESS,
  CREATE_PRODUCTTILES_BANNER_FAIL,
  DELETE_PRODUCTTILES_BANNER_FAIL,
  DELETE_PRODUCTTILES_BANNER_SUCCESS,
  DELETE_PRODUCTTILES_BANNER_BEGIN,
  UPDATE_PRODUCTTILES_BANNER_BEGIN,
  UPDATE_PRODUCTRILES_BANNER_SUCCESS,
  UPDATE_PRODUCTTILES_BANNER_FAIL,
  GET_WEEK_BEGIN,
  GET_WEEK_SUCCESS,
  GET_WEEK_ERROR,
  GET_MULTIPLE_Mall_BEGIN,
  GET_MULTIPLE_MALL_SUCCESS,
  GET_MULTIPLE_Mall_ERROR,
} from "../Action";

import {
  ACCEPT_HEADER,
  create_leaderboard,
  create_product,
  create_productbanner,
  create_productbannertiles,
  create_promotion,
  delete_leaderboard,
  delete_productbanner,
  delete_productbannertiles,
  delete_promotion,
  get_category,
  get_customer,
  get_retailer,
  get_store,
  get_store_mall,
  get_week,
  register_store,
  store_register,
  update_customer,
  update_leaderboard,
  update_product,
  update_productbanner,
  update_productbannertiles,
  update_promotion,
  update_store,
} from "../utils/Constant";
import { useMallContext } from "./mall_context";

const initialState = {
  get_store_loading: false,
  register_store_loading: false,
  ratailer_data_loading: false,
  get_store_data: {},
  register_store_data: {},
  retailer_data: [],
  category_data: [],
  category_data_loading: false,

  brand_update_loading: false,
  delete_leaderboard_loading: false,
  delete_promotion_loading: false,
  delete_product_loading: false,
  update_leaderboard_loading: false,
  update_promotion_loading: false,
  update_product_loading: false,
  brand_update_data: {},
  leaderboard_update_data: {},
  promotion_update_data: {},
  product_update_data: {},
  create_leaderboard_data: {},
  create_leaderboard_loading: false,
  create_promotion_data: {},
  create_promotion_loading: false,
  create_product_data: {},
  create_product_loading: false,
  create_producttiles_data: {},
  create_producttiles_loading: false,
  delete_producttiles_loading: false,
  update_producttiles_data: {},
  update_producttiles_loading: false,
  week_data_loading: true,
  week_data: [],
  multiple_week_data: [],
  multiple_week_data_loading: false,
};

const StoreContext = React.createContext();
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(store_reducer, initialState);
  // const { is_login, is_token } = useStoreContext();

  // register store

  const setRegisterStore = async (params) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: REGISTER_STORE_BEGIN });
    try {
      const response = await axios.post(store_register, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const storeupdatedata = response.data;
      console.log("====", response.data);
      if (storeupdatedata.success == 1) {
        dispatch({
          type: REGISTER_STORE_SUCCESS,
          payload: storeupdatedata,
        });
        localStorage.setItem("is_login", JSON.stringify(true));
        Notification("success", "Success!", response.data.message);
      } else {
        Notification("error", "Error", response.data.message);
      }
      return response.data;
    } catch (error) {
      dispatch({ type: REGISTER_STORE_FAIL });
      localStorage.setItem("is_login", JSON.stringify(false));
    }
  };

  // get store

  const getStore = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: GET_STORE_BEGIN });
    try {
      const response = await axios.get(get_store, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const storedata = response.data;
      // console.log("br̥and-data-context", response.data);
      if (storedata.success == 1) {
        dispatch({ type: GET_STORE_SUCCESS, payload: response.data });
      }
      return response.data;
    } catch (error) {
      console.log("errr".err);
      dispatch({ type: GET_STORE_FAIL });
    }
  };

  // get retailer

  const getRetailerApi = async (id) => {
    // const token = JSON.parse(localStorage.getItem("is_token"));

    var formdata = new FormData();
    formdata.append("mall_id", id);

    dispatch({ type: GET_RETAILER_BEGIN });
    try {
      const response = await axios.post(get_retailer, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          // Authorization: "Bearer " + token,
        },
      });
      const retailerdata = response.data;
      console.log("retailer-data is", response.data);
      if (retailerdata.success == 1) {
        dispatch({ type: GET_RETAILER_SUCCESS, payload: retailerdata });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: GET_RETAILER_FAIL });
    }
  };

  // get category

  const getCategoryApi = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: GET_CATEGORY_BEGIN });
    try {
      const response = await axios.get(get_category, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const categorydata = response.data;
      console.log("category-data is", response.data);
      if (categorydata.success == 1) {
        dispatch({ type: GET_CATEGORY_SUCCESS, payload: categorydata });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: GET_CATEGORY_FAIL });
    }
  };

  // get weeek

  const getWeekApi = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: GET_WEEK_BEGIN });
    try {
      const response = await axios.get(get_week, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const weekdata = response.data;
      console.log("week-data is", response.data);
      if (weekdata.success == 1) {
        dispatch({ type: GET_WEEK_SUCCESS, payload: weekdata });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: GET_WEEK_ERROR });
    }
  };

  // get Multiple Mall

  const getMultipleMall = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: GET_MULTIPLE_Mall_BEGIN });
    try {
      const response = await axios.get(get_store_mall, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const getmultiplemalldata = response.data;
      // console.log("br̥and-data-context", response.data);
      if (getmultiplemalldata.success == 1) {
        dispatch({ type: GET_MULTIPLE_MALL_SUCCESS, payload: response.data });
        console.log("brand multiple mall", response.data);
      }
      return response.data;
    } catch (error) {
      console.log("errr".err);
      dispatch({ type: GET_MULTIPLE_Mall_ERROR });
    }
  };

  const UpdateStore = async (params) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: UPDATE_BRAND_BEGIN });
    try {
      const response = await axios.post(update_store, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const storedata = response.data;
      console.log("updtae-barnd-data", response.data);
      if (storedata.success == 1) {
        dispatch({ type: UPDATE_BRAND_SUCCESS, payload: response.data });
      }
      return response.data;
    } catch (error) {
      console.log("errr", error);
      dispatch({ type: UPDATE_BRAND_FAIL });
    }
  };

  // Delete LeaderBoard Api

  const deleteLeaderBoardApi = async (formdata) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: DELETE_LEADERBOARD_BEGIN });
    try {
      const response = await axios.post(delete_leaderboard, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const storedata = response.data;
      console.log("updtae-barnd-data", response.data);
      if (storedata.success == 1) {
        dispatch({ type: DELETE_LEADERBOARD_SUCCESS, payload: response.data });
      }
      return response.data;
    } catch (error) {
      console.log("errr", error);
      dispatch({ type: DELETE_LEADERBOARD_FAIL });
    }
  };

  // delete promotion banner api

  const deletePromotionBannerApi = async (formdata) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: DELETE_PROMOTION_BANNER_BEGIN });
    try {
      const response = await axios.post(delete_promotion, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const deletepromotionbanner = response.data;
      console.log("delete-promotion-banner-data", response.data);
      if (deletepromotionbanner.success == 1) {
        dispatch({
          type: DELETE_PROMOTION_BANNER_SUCCESS,
          payload: response.data,
        });
      }
      return response.data;
    } catch (error) {
      console.log("errr", error);
      dispatch({ type: DELETE_PROMOTION_BANNER_FAIL });
    }
  };

  // delete product banner api

  const deleteProductBannerApi = async (formdata) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: DELETE_PRODUCT_BANNER_BEGIN });
    try {
      const response = await axios.post(delete_productbanner, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const deleteproductbanner = response.data;
      console.log("delete-product-data", response.data);
      if (deleteproductbanner.success == 1) {
        dispatch({
          type: DELETE_PRODUCT_BANNER_SUCCESS,
          payload: response.data,
        });
      }
      return response.data;
    } catch (error) {
      console.log("errr", error);
      dispatch({ type: DELETE_PRODUCT_BANNER_FAIL });
    }
  };

  // Update Leaderboard

  const UpdateLeaderBoardApi = async (formdata) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: UPDATE_LEADERBOARD_BANNER_BEGIN });
    try {
      const response = await axios.post(update_leaderboard, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const updtaeleaderboarddata = response.data;
      console.log("updtae-leaderboard-data", response.data);
      if (updtaeleaderboarddata.success == 1) {
        dispatch({
          type: UPDATE_LEADERBOARD_BANNER_SUCCESS,
          payload: response.data,
        });
      }
      return response.data;
    } catch (error) {
      console.log("errr", error);
      dispatch({ type: UPDATE_LEADERBOARD_BANNER_FAIL });
    }
  };

  // Update Leaderboard

  const UpdatePromotionBoardApi = async (formdata) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: UPDATE_PROMOTION_BANNER_BEGIN });
    try {
      const response = await axios.post(update_promotion, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      console.log("updtae-leaderboard-data", response.data);
      const updtaepromotiondata = response.data;

      if (updtaepromotiondata.success == 1) {
        dispatch({
          type: UPDATE_PRAMOTION_BANNER_SUCCESS,
          payload: response.data,
        });
      }
      return response.data;
    } catch (error) {
      console.log("errr", error);
      dispatch({ type: UPDATE_PRAMOTION_BANNER_FAIL });
    }
  };

  // Update Product Banner

  const UpdateProductBoardApi = async (formdata) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: UPDATE_PRODUCT_BANNER_BEGIN });
    try {
      const response = await axios.post(update_productbanner, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const updtaeproductdata = response.data;
      console.log("updtae-productbanner-data", response.data);
      if (updtaeproductdata.success == 1) {
        dispatch({
          type: UPDATE_PRODUCT_BANNER_SUCCESS,
          payload: response.data,
        });
      }
      return response.data;
    } catch (error) {
      console.log("errr", error);
      dispatch({ type: UPDATE_PRODUCT_BANNER_FAIL });
    }
  };

  // Create Leaderboard Banner

  const CreateLeaderBoardApi = async (formdata) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: CREATE_LEADERBOARD_BANNER_BEGIN });
    try {
      const response = await axios.post(create_leaderboard, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const createleaderdata = response.data;
      console.log("create-leaderbanner-data", response.data);
      if (createleaderdata.success == 1) {
        dispatch({
          type: CREATE_LEADERBANNER_BANNER_SUCCESS,
          payload: response.data,
        });
      }
      return response.data;
    } catch (error) {
      console.log("errr", error);
      dispatch({ type: CREATE_LEADERBOARD_BANNER_FAIL });
    }
  };

  // Create Promotion Banner

  const CreatePromotionBoardApi = async (formdata) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: CREATE_PROMOTION_BANNER_BEGIN });
    try {
      const response = await axios.post(create_promotion, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const createpromotionbannerdata = response.data;
      console.log("create-promotion-data", response.data);
      if (createpromotionbannerdata.success == 1) {
        dispatch({
          type: CREATE_PROMOTION_BANNER_SUCCESS,
          payload: response.data,
        });
      }
      return response.data;
    } catch (error) {
      console.log("errr", error);
      dispatch({ type: CREATE_PROMOTION_BANNER_FAIL });
    }
  };

  // Create Product Banner

  const CreateProductBoardApi = async (formdata) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: CREATE_PRODUCT_BANNER_BEGIN });
    try {
      const response = await axios.post(create_productbanner, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const createproductdata = response.data;
      console.log("create-promotion-data", response.data);
      if (createproductdata.success == 1) {
        dispatch({
          type: CREATE_PRODUCT_BANNER_SUCCESS,
          payload: response.data,
        });
      }
      return response.data;
    } catch (error) {
      console.log("errr", error);
      dispatch({ type: CREATE_PRODUCT_BANNER_FAIL });
    }
  };

  // Create ProductTiles Banner

  const CreateProductTileApi = async (formdata) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: CREATE_PRODUCTTILES_BANNER_BEGIN });
    try {
      const response = await axios.post(create_productbannertiles, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const createproducttilesdata = response.data;
      console.log("create-promotion-data", response.data);
      if (createproducttilesdata.success == 1) {
        dispatch({
          type: CREATE_PRODUCTTILES_BANNER_SUCCESS,
          payload: response.data,
        });
      }
      return response.data;
    } catch (error) {
      console.log("errr", error);
      dispatch({ type: CREATE_PRODUCTTILES_BANNER_FAIL });
    }
  };

  // Delete ProductTiles Banner

  const DeleteProductTileApi = async (formdata) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: DELETE_PRODUCTTILES_BANNER_BEGIN });
    try {
      const response = await axios.post(delete_productbannertiles, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const deleteproducttilesdata = response.data;
      console.log("create-promotion-data", response.data);
      if (deleteproducttilesdata.success == 1) {
        dispatch({
          type: DELETE_PRODUCTTILES_BANNER_SUCCESS,
          payload: response.data,
        });
      }
      return response.data;
    } catch (error) {
      console.log("errr", error);
      dispatch({ type: DELETE_PRODUCTTILES_BANNER_FAIL });
    }
  };

  // Update ProductTiles Banner

  const UpdateProductTilesApi = async (formdata) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: UPDATE_PRODUCTTILES_BANNER_BEGIN });
    try {
      const response = await axios.post(update_productbannertiles, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const updtaeproducttilesdata = response.data;
      console.log("updtae-producttilesbanner-data", response.data);
      if (updtaeproducttilesdata.success == 1) {
        dispatch({
          type: UPDATE_PRODUCTRILES_BANNER_SUCCESS,
          payload: response.data,
        });
      }
      return response.data;
    } catch (error) {
      console.log("errr", error);
      dispatch({ type: UPDATE_PRODUCTTILES_BANNER_FAIL });
    }
  };

  useEffect(() => {
    getStore();
    getRetailerApi();
    getCategoryApi();
    getWeekApi();
    getMultipleMall();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        ...state,
        setRegisterStore,
        getStore,
        getRetailerApi,
        UpdateStore,
        deleteLeaderBoardApi,
        deletePromotionBannerApi,
        deleteProductBannerApi,
        UpdateLeaderBoardApi,
        UpdatePromotionBoardApi,
        UpdateProductBoardApi,
        CreateLeaderBoardApi,
        CreatePromotionBoardApi,
        CreateProductBoardApi,
        CreateProductTileApi,
        DeleteProductTileApi,
        UpdateProductTilesApi,
        getMultipleMall,
        getCategoryApi,
        getWeekApi,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  return useContext(StoreContext);
};
