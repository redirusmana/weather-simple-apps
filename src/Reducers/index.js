import { combineReducers } from "redux";
import { authReducers } from "./authReducers";
import { currentReducers } from "./currentReducers";
import { severalReducers } from "./severalReducers";
import { forecastReducers } from "./forecastReducers";

export default combineReducers({
  auths: authReducers,
  currents: currentReducers,
  severals: severalReducers,
  forecasts: forecastReducers
});
