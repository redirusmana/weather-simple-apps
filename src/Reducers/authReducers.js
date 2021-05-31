import { FETCH_LOGIN, FETCH_LOGOUT } from "../Actions/Types";

const initialState = {
  token: ""
};

export const authReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_LOGIN:
      return {
        ...state,
        token: payload
      };
    case FETCH_LOGOUT:
      return {
        ...state,
        token: ""
      };
    default:
      return state;
  }
};
