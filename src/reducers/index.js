import { combineReducers } from "redux";
import show from "./show";
import episodes from "./episodes";
import episode from "./episode";

export default combineReducers({ show, episodes, episode });
