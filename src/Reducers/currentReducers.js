import { FETCH_INDEX, FETCH_FILTER } from "../Actions/Types";
import { CLIENT_API_KEY } from "../Tools/general";

const initialState = {
  filters: {
    q: null,
    id: null,
    zip: null,
    lat: null,
    lon: null,
    lang: "id",
    units: "standard",
    appid: CLIENT_API_KEY
  },
  dataSource: ""
};

export const currentReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_INDEX:
      return {
        ...state,
        dataSource: payload
      };
    case FETCH_FILTER:
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
