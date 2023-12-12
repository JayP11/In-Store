import {
  CREATE_LEADERBOARD_BEGIN,
  CREATE_LEADERBOARD_SUCCESS,
  CREATE_LEADERBOARD_FAIL,
  GET_LEADERBOARD_BEGIN,
  GET_LEADERBOARD_SUCCESS,
  GET_LEADERBOARD_FAIL,
  UPDATE_LEADERBOARD_BEGIN,
  UPDATE_LEADERBOARD_SUCCESS,
  UPDATE_LEADERBOARD_FAIL,
} from "../Action";

const leaderboard_reducer = (state, action) => {
  //GET LEADERBOARD

  if (action.type === GET_LEADERBOARD_BEGIN) {
    return { ...state, get_leaderboard_loading: true };
  }

  if (action.type === GET_LEADERBOARD_SUCCESS) {
    return {
      ...state,
      get_leaderboard_loading: false,
      get_leaderboard_data: action.payload.data,
    };
  }

  if (action.type === GET_LEADERBOARD_FAIL) {
    return {
      ...state,
      get_leaderboard_loading: false,
    };
  }

  //CREATE LEADERBOARD

  if (action.type === CREATE_LEADERBOARD_BEGIN) {
    return { ...state, create_leaderboard_loading: true };
  }

  if (action.type === CREATE_LEADERBOARD_SUCCESS) {
    return {
      ...state,
      create_leaderboard_loading: false,
      create_leaderboard_data: action.payload.data,
    };
  }

  if (action.type === CREATE_LEADERBOARD_FAIL) {
    return {
      ...state,
      create_leaderboard_loading: false,
    };
  }

  //UPDATE LEADERBOARD

  if (action.type === UPDATE_LEADERBOARD_BEGIN) {
    return { ...state, update_leaderboard_loading: true };
  }

  if (action.type === UPDATE_LEADERBOARD_SUCCESS) {
    return {
      ...state,
      update_leaderboard_loading: false,
      update_leaderboard_data: action.payload.data,
    };
  }

  if (action.type === UPDATE_LEADERBOARD_FAIL) {
    return {
      ...state,
      update_leaderboard_loading: false,
    };
  }
};

export default leaderboard_reducer;
