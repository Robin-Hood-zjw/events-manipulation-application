import { combineReducers } from "redux";

import { LayoutReducer } from "./Typography/Reducer";

const comboReducer = combineReducers({
  LayoutReducer: LayoutReducer,
});

export default comboReducer;
