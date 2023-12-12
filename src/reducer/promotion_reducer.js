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

const promotion_reducer = (state, action) => {
  //GET PROMOTION

  if (action.type === GET_PROMOTION_BEGIN) {
    return { ...state, get_promotion_loading: true };
  }

  if (action.type === GET_PROMOTION_SUCCESS) {
    return {
      ...state,
      get_promotion_loading: false,
      get_promotion_data: action.payload.data,
    };
  }

  if (action.type === GET_PROMOTION_FAIL) {
    return {
      ...state,
      get_promotion_loading: false,
    };
  }

  //CREATE PROMOTION

  if (action.type === CREATE_PROMOTION_BEGIN) {
    return { ...state, create_promotion_loading: true };
  }

  if (action.type === CREATE_PROMOTION_SUCCESS) {
    return {
      ...state,
      create_promotion_loading: false,
      create_promotion_data: action.payload.data,
    };
  }

  if (action.type === CREATE_PROMOTION_FAIL) {
    return {
      ...state,
      create_promotion_loading: false,
    };
  }

  //UPDATE PROMOTION

  if (action.type === UPDATE_PROMOTION_BEGIN) {
    return { ...state, update_promotion_loading: true };
  }

  if (action.type === UPDATE_PROMOTION_SUCCESS) {
    return {
      ...state,
      update_promotion_loading: false,
      update_promotion_data: action.payload.data,
    };
  }

  if (action.type === UPDATE_PROMOTION_FAIL) {
    return {
      ...state,
      update_promotion_loading: false,
    };
  }
};

export default promotion_reducer;
