import {
  CUSTOMER_UPDATE_BEGIN,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
  GET_CUSTOMER_BEGIN,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAIL,
} from "../Action";

const customer_reducer = (state, action) => {
  if (action.type === CUSTOMER_UPDATE_BEGIN) {
    return { ...state, cupdate_loading: true };
  }

  if (action.type === CUSTOMER_UPDATE_SUCCESS) {
    return {
      ...state,
      cupdate_loading: false,
      cupdate_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === CUSTOMER_UPDATE_FAIL) {
    return { ...state, cupdate_loading: false };
  }

  // GET MALL

  if (action.type === GET_CUSTOMER_BEGIN) {
    return { ...state, get_customer_loading: true };
  }

  if (action.type === GET_CUSTOMER_SUCCESS) {
    return {
      ...state,
      get_customer_loading: false,
      get_customer_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_CUSTOMER_FAIL) {
    return { ...state, get_customer_loading: false };
  }
};

export default customer_reducer;
