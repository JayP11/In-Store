import {
  CREATE_PRODUCT_BEGIN,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  UPDATE_PRODUCT_BEGIN,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
} from "../Action";
const store_reducer = (state, action) => {
    //GET PRODUCT

    if (action.type === GET_PRODUCT_BEGIN) {
      return { ...state, get_product_loading: true };
    }

    if (action.type === GET_PRODUCT_SUCCESS) {
      return {
        ...state,
        get_product_loading: false,
        get_product_data: action.payload.data,
      };
    }

    if (action.type === GET_PRODUCT_FAIL) {
      return {
        ...state,
        get_product_loading: false,
      };
    }
  
    //CREATE PRODUCT

    if (action.type === CREATE_PRODUCT_BEGIN) {
        return { ...state, create_product_loading: true };
    }

    if (action.type === CREATE_PRODUCT_SUCCESS) {
      return {
        ...state,
        create_product_loading: false,
        create_product_data: action.payload.data,
      };
    }

    if (action.type === CREATE_PRODUCT_FAIL) {
      return {
        ...state,
        create_product_loading: false,
      };
    }
  
    //UPDATE PRODUCT

    if (action.type === UPDATE_PRODUCT_BEGIN) {
      return { ...state, update_product_loading: true };
    }

    if (action.type === UPDATE_PRODUCT_SUCCESS) {
      return {
        ...state,
        update_product_loading: false,
        update_product_data: action.payload.data,
      };
    }

    if (action.type === UPDATE_PRODUCT_FAIL) {
      return {
        ...state,
        update_product_loading: false,
      };
    }
}

export default store_reducer;
