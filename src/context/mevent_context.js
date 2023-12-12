import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import mevent_reducer from "../reducer/mevent_reducer";
import {
  CREATE_MALL_EVENT_BEGIN,
  CREATE_MALL_EVENT_FAIL,
  CREATE_MALL_EVENT_SUCCESS,
  GET_MALL_EVENT_BEGIN,
  GET_MALL_EVENT_FAIL,
  GET_MALL_EVENT_SUCCESS,
  UPDATE_MALL_EVENT_BEGIN,
  UPDATE_MALL_EVENT_FAIL,
  UPDATE_MALL_EVENT_SUCCESS,
} from "../Action";

import {
  ACCEPT_HEADER,
  get_mall_event,
  mall_create_event,
  mall_update_event,
} from "../utils/Constant";
import { useMallContext } from "./mall_context";

const initialState = {
  get_mevent_loading: false,
  create_mevent_loading: false,
  update_mevent_loading: false,
  get_mevent_data: [],
  create_mevent_data: [],
  update_mevent_data: [],
};

const MeventContext = React.createContext();
export const MeventProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mevent_reducer, initialState);
  const { is_token } = useMallContext();

  // Get Product

  // const getMallEvent = async () => {
  //   const token = JSON.parse(localStorage.getItem("is_token"));
  //   dispatch({ type: GET_MALL_EVENT_BEGIN });
  //   try {
  //     const response = await axios.get(get_mall_event, {
  //       headers: {
  //         Accept: ACCEPT_HEADER,
  //         Authorization: "Bearer " + token,
  //       },
  //     });
  //     const getmalleventdata = response.data;
  //     // console.log("mall event", response.data);
  //     if (getmalleventdata.success == 1) {
  //       dispatch({ type: GET_MALL_EVENT_SUCCESS, payload: getmalleventdata });
  //     }
  //     return response.data;
  //   } catch (error) {
  //     dispatch({ type: GET_MALL_EVENT_FAIL });
  //   }
  // };

  // Create Product

  const CreateMallEvent = async (params, url) => {
    dispatch({ type: CREATE_MALL_EVENT_BEGIN });
    try {
      const response = await axios.post(mall_create_event, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + is_token,
        },
      });
      const createevent = response.data;
      if (createevent.success == 1) {
        dispatch({ type: CREATE_MALL_EVENT_SUCCESS, payload: createevent });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: CREATE_MALL_EVENT_FAIL });
    }
  };

  // Update Product

  const UpdateMallEvent = async (params) => {
    const token = JSON.parse(localStorage.getItem("is_token"));
    dispatch({ type: UPDATE_MALL_EVENT_BEGIN });
    try {
      const response = await axios.post(mall_update_event, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const updateevent = response.data;
      if (updateevent.success == 1) {
        dispatch({ type: UPDATE_MALL_EVENT_SUCCESS, payload: updateevent });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: UPDATE_MALL_EVENT_FAIL });
    }
  };

  useEffect(() => {
    // getMallEvent();
  }, []);

  return (
    <MeventContext.Provider
      value={{
        ...state,
        // getMallEvent,
        CreateMallEvent,
        UpdateMallEvent,
      }}
    >
      {children}
    </MeventContext.Provider>
  );
};

export const useMeventContext = () => {
  return useContext(MeventContext);
};
