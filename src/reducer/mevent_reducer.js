import {
  CREATE_MALL_EVENT_BEGIN,
  CREATE_MALL_EVENT_SUCCESS,
  CREATE_MALL_EVENT_FAIL,
  GET_MALL_EVENT_BEGIN,
  GET_MALL_EVENT_SUCCESS,
  GET_MALL_EVENT_FAIL,
  UPDATE_MALL_EVENT_BEGIN,
  UPDATE_MALL_EVENT_SUCCESS,
  UPDATE_MALL_EVENT_FAIL,
} from "../Action";

const mevent_reducer = (state, action) => {
  //GET MALL_EVENT

  if (action.type === GET_MALL_EVENT_BEGIN) {
    return { ...state, get_mevent_loading: true };
  }

  if (action.type === GET_MALL_EVENT_SUCCESS) {
    return {
      ...state,
      get_mevent_loading: false,
      get_mevent_data: action.payload.data,
    };
  }

  if (action.type === GET_MALL_EVENT_FAIL) {
    return {
      ...state,
      get_mevent_loading: false,
    };
  }

  //CREATE MALL_EVENT

  if (action.type === CREATE_MALL_EVENT_BEGIN) {
    return { ...state, create_mevent_loading: true };
  }

  if (action.type === CREATE_MALL_EVENT_SUCCESS) {
    return {
      ...state,
      create_mevent_loading: false,
      create_mevent_data: action.payload.data,
    };
  }

  if (action.type === CREATE_MALL_EVENT_FAIL) {
    return {
      ...state,
      create_mevent_loading: false,
    };
  }

  //UPDATE MALL_EVENT

  if (action.type === UPDATE_MALL_EVENT_BEGIN) {
    return { ...state, update_mevent_loading: true };
  }

  if (action.type === UPDATE_MALL_EVENT_SUCCESS) {
    return {
      ...state,
      update_mevent_loading: false,
      update_mevent_data: action.payload.data,
    };
  }

  if (action.type === UPDATE_MALL_EVENT_FAIL) {
    return {
      ...state,
      update_mevent_loading: false,
    };
  }
};

export default mevent_reducer;
