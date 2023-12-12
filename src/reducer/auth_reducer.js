import {
  GET_REGION_BEGIN,
  GET_REGION_SUCCESS,
  GET_REGION_FAIL,
  REGISTER_CUSTOMER_BEGIN,
  REGISTER_CUSTOMER_SUCCESS,
  REGISTER_CUSTOMER_FAIL,
  MALL_SIGNUP_BEGIN,
  MALL_SIGNUP_SUCCESS,
  MALL_SIGNUP_FAIL,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../Action";

const auth_reducer = (state, action) => {
  // get region

  if (action.type === GET_REGION_BEGIN) {
    return { ...state, region_loading: true };
  }

  if (action.type === GET_REGION_SUCCESS) {
    return {
      ...state,
      region_loading: false,
      region_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_REGION_FAIL) {
    return { ...state, region_loading: false };
  }

  // register customer

  if (action.type === REGISTER_CUSTOMER_BEGIN) {
    return { ...state, register_customer_loading: true };
  }

  if (action.type === REGISTER_CUSTOMER_SUCCESS) {
    return {
      ...state,
      register_customer_loading: false,
      register_customer_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === REGISTER_CUSTOMER_FAIL) {
    return { ...state, register_customer_loading: false };
  }

  // mall register
  if (action.type === MALL_SIGNUP_BEGIN) {
    return { ...state, mall_signup_loading: true };
  }

  if (action.type === MALL_SIGNUP_SUCCESS) {
    return {
      ...state,
      mall_signup_loading: false,
      mall_signup_data: action.payload.data,
    };
  }

  if (action.type === MALL_SIGNUP_FAIL) {
    return { ...state, mall_signup_loading: false, mall_signup_error: true };
  }

  // mall login api
  if (action.type === LOGIN_BEGIN) {
    return { ...state, login_loading: true };
  }

  if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      login_loading: false,
      login_data: action.payload.data,
      is_token: action.payload.token,
    };
  }

  if (action.type === LOGIN_FAIL) {
    return { ...state, login_loading: false, login_error: true };
  }
};

export default auth_reducer;
