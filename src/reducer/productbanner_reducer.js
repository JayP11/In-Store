import {
  CREATE_PRODUCTBANNER_BEGIN,
  CREATE_PRODUCTBANNER_SUCCESS,
  CREATE_PRODUCTBANNER_FAIL,
  GET_PRODUCTBANNER_BEGIN,
  GET_PRODUCTBANNER_SUCCESS,
  GET_PRODUCTBANNER_FAIL,
  UPDATE_PRODUCTBANNER_BEGIN,
  UPDATE_PRODUCTBANNER_SUCCESS,
  UPDATE_PRODUCTBANNER_FAIL,
} from "../Action";

const productbanner_reducer = (state, action) => {
  //GET PRODUCTBANNER

  if (action.type === GET_PRODUCTBANNER_BEGIN) {
    return { ...state, get_productbanner_loading: true };
  }

  if (action.type === GET_PRODUCTBANNER_SUCCESS) {
    return {
      ...state,
      get_productbanner_loading: false,
      get_productbanner_data: action.payload.data,
    };
  }

  if (action.type === GET_PRODUCTBANNER_FAIL) {
    return {
      ...state,
      get_productbanner_loading: false,
    };
  }

  //CREATE PRODUCTBANNER

  if (action.type === CREATE_PRODUCTBANNER_BEGIN) {
    return { ...state, create_productbanner_loading: true };
  }

  if (action.type === CREATE_PRODUCTBANNER_SUCCESS) {
    return {
      ...state,
      create_productbanner_loading: false,
      create_productbanner_data: action.payload.data,
    };
  }

  if (action.type === CREATE_PRODUCTBANNER_FAIL) {
    return {
      ...state,
      create_productbanner_loading: false,
    };
  }

  //UPDATE PRODUCTBANNER

  if (action.type === UPDATE_PRODUCTBANNER_BEGIN) {
    return { ...state, update_productbanner_loading: true };
  }

  if (action.type === UPDATE_PRODUCTBANNER_SUCCESS) {
    return {
      ...state,
      update_productbanner_loading: false,
      update_productbanner_data: action.payload.data,
    };
  }

  if (action.type === UPDATE_PRODUCTBANNER_FAIL) {
    return {
      ...state,
      update_productbanner_loading: false,
    };
  }
};

export default productbanner_reducer;
