import { combineReducers } from "redux";
import taskReducer from "./task";
const rootReducers = combineReducers({ taskReducer });
export default rootReducers;
