import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alert from "./auth";
import authnonegooele from "./auth";

export default combineReducers({
  auth: authReducer,
  alert,
  authnonegooele
});
