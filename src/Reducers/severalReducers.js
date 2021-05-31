import {
  FETCH_SEVERAL_CIRCLE,
  FETCH_SEVERAL_RECTANGLE,
  FETCH_SEVERAL_FILTER
} from "../Actions/Types";
import { CLIENT_API_KEY } from "../Tools/general";

const initialState = {
  filters: {
    bbox: null,
    lat: null,
    lon: null,
    cnt: 10,
    lang: "id",
    units: "standard",
    appid: CLIENT_API_KEY
  },
  dataRectangle: "",
  dataCircle: ""
};

export const severalReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SEVERAL_CIRCLE:
      return {
        ...state,
        dataCircle: payload
      };
    case FETCH_SEVERAL_RECTANGLE:
      return {
        ...state,
        dataRectangle: payload
      };
    case FETCH_SEVERAL_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...payload
        }
      };
    default:
      return state;
  }
};
