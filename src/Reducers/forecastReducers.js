import { FETCH_FORECAST_INDEX, FETCH_FORECAST_FILTER } from "../Actions/Types";
import { CLIENT_API_KEY } from "../Tools/general";

const initialState = {
  filters: {
    q: null,
    id: null,
    cnt: 10,
    zip: null,
    lat: null,
    lon: null,
    lang: "id",
    units: "standard",
    appid: CLIENT_API_KEY
  },
  dataSource: ""
};

export const forecastReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_FORECAST_INDEX:
      return {
        ...state,
        dataSource: payload
      };
    case FETCH_FORECAST_FILTER:
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
