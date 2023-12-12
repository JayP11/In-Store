import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import leaderboard_reducer from "../reducer/leaderboard_reducer";
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

import {
  ACCEPT_HEADER,
  get_leaderboard,
  create_leaderboard,
  update_leaderboard,
} from "../utils/Constant";
import { useMallContext } from "./mall_context";

const initialState = {
  get_leaderboard_loading: false,
  create_leaderboard_loading: false,
  update_leaderboard_loading: false,
  get_leaderboard_data: [],
  create_leaderboard_data: [],
  update_leaderboard_data: [],
};

const LeaderboardContext = React.createContext();
export const LeaderboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(leaderboard_reducer, initialState);
  const { is_token } = useMallContext();

  // Get Product

  const getLeaderboard = async () => {
    dispatch({ type: GET_LEADERBOARD_BEGIN });
    try {
      const response = await axios.get(get_leaderboard, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + is_token,
        },
      });
      const getleaderboard = response.data;
      // console.log("====", response.data);
      if (getleaderboard.success == 1) {
        dispatch({ type: GET_LEADERBOARD_SUCCESS, payload: getleaderboard });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: GET_LEADERBOARD_FAIL });
    }
  };

  // Create Product

  const CreateLeaderboard = async (params, url) => {
    dispatch({ type: CREATE_LEADERBOARD_BEGIN });
    try {
      const response = await axios.post(create_leaderboard, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + is_token,
        },
      });
      const createleaderboard = response.data;
      if (createleaderboard.success == 1) {
        dispatch({
          type: CREATE_LEADERBOARD_SUCCESS,
          payload: createleaderboard,
        });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: CREATE_LEADERBOARD_FAIL });
    }
  };

  // Update Product

  const UpdateLeaderboard = async (params) => {
    dispatch({ type: UPDATE_LEADERBOARD_BEGIN });
    try {
      const response = await axios.post(update_leaderboard, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + is_token,
        },
      });
      const updateleadrboard = response.data;
      if (updateleadrboard.success == 1) {
        dispatch({
          type: UPDATE_LEADERBOARD_SUCCESS,
          payload: updateleadrboard,
        });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: UPDATE_LEADERBOARD_FAIL });
    }
  };

  return (
    <LeaderboardContext.Provider
      value={{
        ...state,
        getLeaderboard,
        CreateLeaderboard,
        UpdateLeaderboard,
      }}
    >
      {children}
    </LeaderboardContext.Provider>
  );
};

export const useLeaderboardContext = () => {
  return useContext(LeaderboardContext);
};
