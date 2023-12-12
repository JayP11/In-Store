import {
  MALL_SIGNUP_BEGIN,
  MALL_SIGNUP_SUCCESS,
  MALL_SIGNUP_FAIL,
  SET_TOKEN,
  LOGOUT_USER,
  GET_MALL_BEGIN,
  GET_MALL_SUCCESS,
  GET_MALL_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_BEGIN,
  GET_MALL_WISE_STORE_BEGIN,
  GET_MALL_WISE_STORE_SUCCESS,
  GET_MALL_WISE_STORE_FAIL,
  UPDATE_MALL_BEGIN,
  UPDATE_MALL_SUCCESS,
  UPDATE_MALL_FAIL,
  GET_MALL_AUTH_BEGIN,
  GET_MALL_AUTH_SUCCESS,
  GET_MALL_AUTH_FAIL,
  UPDATE_EVENT_MALL_FAIL,
  UPDATE_EVENT_MALL_SUCCESS,
  UPDATE_EVENT_MALL_BEGIN,
  ADD_EVENT_MALL_BEGIN,
  ADD_EVENT_MALL_SUCCESS,
  GET_BRAND_BEGIN,
  GET_BRAND_SUCCESS,
  GET_BRAND_FAIL,
  ADD_MALL_STORE_BEGIN,
  ADD_MALL_STORE_SUCCESS,
  ADD_MALL_STORE_FAIL,
  UPDATE_EATERIES_MALL_BEGIN,
  UPDATE_EATERIES_MALL_SUCCESS,
  UPDATE_EATERIES_MALL_FAIL,
  DELETE_MALL_STORE_BEGIN,
  DELETE_MALL_STORE_SUCCESS,
  DELETE_MALL_EVENT_BEGIN,
  DELETE_MALL_EVENT_FAIL,
  DELETE_MALL_EVENT_SUCCESS,
  GET_MALL_FACILITY_BEGIN,
  GET_MALL_FACILITY_SUCCESS,
  GET_MALL_FACILITY_ERROR,
  UPDATE_FACILITY_BEGIN,
  UPDATE_FACILITY_SUCCESS,
  UPDATE_FACILITY_FAIL,
  DELETE_FACILITY_BEGIN,
  DELETE_FACILITY_SUCCESS,
  DELETE_FACILITY_FAIL,
  GET_MULTIPLE_Mall_BEGIN,
  GET_MULTIPLE_MALL_SUCCESS,
  GET_MULTIPLE_Mall_ERROR,
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
    };
  }

  if (action.type === MALL_SIGNUP_FAIL) {
    return { ...state, mall_signup_loading: false, mall_signup_error: true };
  }

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

  // if (action.type === SET_TOKEN) {
  //   return { ...state, is_token: action.payload};
  // }

  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      is_login: false,
      // is_token: "",
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

  // Get Brand

  if (action.type === GET_BRAND_BEGIN) {
    return { ...state, get_brand_loading: true };
  }

  if (action.type === GET_BRAND_SUCCESS) {
    return {
      ...state,
      get_brand_loading: false,
      get_brand_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_BRAND_FAIL) {
    return { ...state, get_brand_loading: false };
  }

  // // Get Multiple Mall

  // if (action.type === GET_MULTIPLE_Mall_BEGIN) {
  //   return { ...state, get_brand_loading: true };
  // }

  // if (action.type === GET_MULTIPLE_MALL_SUCCESS) {
  //   return {
  //     ...state,
  //     get_brand_loading: false,
  //     get_brand_data: action.payload.data,
  //     // contact_number: action.payload.data.contact_number,
  //   };
  // }

  // if (action.type === GET_MULTIPLE_Mall_ERROR) {
  //   return { ...state, get_brand_loading: false };
  // }

  // GET MALL AUTH WISE

  if (action.type === GET_MALL_AUTH_BEGIN) {
    return { ...state, get_mall_auth_loading: true };
  }

  if (action.type === GET_MALL_AUTH_SUCCESS) {
    return {
      ...state,
      get_mall_auth_loading: false,
      get_mall_auth_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_MALL_AUTH_FAIL) {
    return { ...state, get_mall_auth_loading: false };
  }

  // Get Mall Wise Store

  if (action.type === GET_MALL_WISE_STORE_BEGIN) {
    return { ...state, get_mall_store_loading: true };
  }

  if (action.type === GET_MALL_WISE_STORE_SUCCESS) {
    return {
      ...state,
      get_mall_store_loading: false,
      get_mall_store_data: action.payload.data.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_MALL_WISE_STORE_FAIL) {
    return { ...state, get_mall_store_loading: false };
  }

  // Update Mall

  if (action.type === UPDATE_MALL_BEGIN) {
    return { ...state, update_mall_loading: true };
  }

  if (action.type === UPDATE_MALL_SUCCESS) {
    return {
      ...state,
      update_mall_loading: false,
      update_mall_data: action.payload.data,
    };
  }

  if (action.type === UPDATE_MALL_FAIL) {
    return { ...state, update_mall_loading: false };
  }

  // Add Event Mall

  if (action.type === ADD_EVENT_MALL_BEGIN) {
    return { ...state, add_event_loading: true };
  }

  if (action.type === ADD_EVENT_MALL_SUCCESS) {
    return {
      ...state,
      add_event_loading: false,
      // add_event_data: action.payload.data,
    };
  }

  if (action.type === ADD_EVENT_MALL_BEGIN) {
    return { ...state, add_event_loading: false };
  }

  // Update Event Mall

  if (action.type === UPDATE_EVENT_MALL_BEGIN) {
    return { ...state, update_event_mall_loading: true };
  }

  if (action.type === UPDATE_EVENT_MALL_SUCCESS) {
    return {
      ...state,
      update_event_mall_loading: false,
      // add_event_data: action.payload.data,
    };
  }

  if (action.type === UPDATE_EVENT_MALL_FAIL) {
    return { ...state, update_event_mall_loading: false };
  }

  // Add Store Mall

  if (action.type === ADD_MALL_STORE_BEGIN) {
    return { ...state, add_mall_loading: true };
  }

  if (action.type === ADD_MALL_STORE_SUCCESS) {
    return {
      ...state,
      add_mall_loading: false,
      // add_event_data: action.payload.data,
    };
  }

  if (action.type === ADD_MALL_STORE_FAIL) {
    return { ...state, add_mall_loading: false };
  }

  // Update mall eateries

  if (action.type === UPDATE_EATERIES_MALL_BEGIN) {
    return { ...state, update_eateries_loading: true };
  }

  if (action.type === UPDATE_EATERIES_MALL_SUCCESS) {
    return {
      ...state,
      update_eateries_loading: false,
      // add_event_data: action.payload.data,
    };
  }

  if (action.type === UPDATE_EATERIES_MALL_FAIL) {
    return { ...state, update_eateries_loading: false };
  }

  // delete mall store

  if (action.type === DELETE_MALL_STORE_BEGIN) {
    return { ...state, delete_mall_store_loading: false };
  }

  if (action.type === DELETE_MALL_STORE_SUCCESS) {
    return {
      ...state,
      delete_mall_store_loading: false,
      // add_event_data: action.payload.data,
    };
  }

  if (action.type === UPDATE_EATERIES_MALL_FAIL) {
    return { ...state, delete_mall_store_loading: false };
  }

  // delete mall store

  if (action.type === DELETE_MALL_EVENT_BEGIN) {
    return { ...state, delete_event_mall_loading: false };
  }

  if (action.type === DELETE_MALL_EVENT_SUCCESS) {
    return {
      ...state,
      delete_event_mall_loading: false,
      // add_event_data: action.payload.data,
    };
  }

  if (action.type === DELETE_MALL_EVENT_FAIL) {
    return { ...state, delete_event_mall_loading: false };
  }

  // Mall Facility

  if (action.type === GET_MALL_FACILITY_BEGIN) {
    return { ...state, facility_data_loading: true };
  }

  if (action.type === GET_MALL_FACILITY_SUCCESS) {
    return {
      ...state,
      facility_data_loading: false,
      get_facility_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_MALL_FACILITY_ERROR) {
    return { ...state, facility_data_loading: false };
  }

  // Delete mall facility

  if (action.type === DELETE_FACILITY_BEGIN) {
    return { ...state, delete_facility_loading: true };
  }

  if (action.type === DELETE_FACILITY_SUCCESS) {
    return {
      ...state,
      delete_facility_loading: false,
      // add_event_data: action.payload.data,
    };
  }

  if (action.type === DELETE_FACILITY_FAIL) {
    return { ...state, delete_facility_loading: false };
  }
};

export default mall_reducer;
