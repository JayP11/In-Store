import {
  MALL_SIGNUP_BEGIN,
  MALL_SIGNUP_SUCCESS,
  MALL_SIGNUP_FAIL,
  SET_TOKEN,
  LOGOUT_USER,
  GET_MALL_BEGIN,
  GET_MALL_SUCCESS,
  GET_MALL_FAIL,
} from "../Action";
const mall_reducer = (state, action) => {
  if (action.type === MALL_SIGNUP_BEGIN) {
    return { ...state, mall_signup_loading: true };
  }

  if (action.type === MALL_SIGNUP_SUCCESS) {
    return {
      ...state,
      mall_signup_loading: false,
      mall_signup_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === MALL_SIGNUP_FAIL) {
    return { ...state, mall_signup_loading: false, mall_signup_error: true };
  }

  if (action.type === SET_TOKEN) {
    return { ...state, is_token: action.payload };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      is_login: false,
      is_token: "",
    };
  }

  // GET MALL

  if (action.type === GET_MALL_BEGIN) {
    return { ...state, get_mall_loading: true };
  }

  if (action.type === GET_MALL_SUCCESS) {
    return {
      ...state,
      get_mall_loading: false,
      get_mall_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_MALL_FAIL) {
    return { ...state, get_mall_loading: false };
  }
};

export default mall_reducer;
