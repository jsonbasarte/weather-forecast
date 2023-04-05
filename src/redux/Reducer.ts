import { combineReducers } from "redux";
import * as weatherSlicer from "./weather/slicer";

const rootReducer = combineReducers({
  ...weatherSlicer,
});

export default rootReducer;
