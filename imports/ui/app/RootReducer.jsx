import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import appGlobalState from "./redux/reducer";

const reducerMap = {
  router: routerReducer,
  appGlobalState: appGlobalState
  // schools: schoolsReducer,
  // phoneOperators: phoneOperators,
  // clients: clientsReducer,
  // cities: citiesReducer,
  // courses: coursesReducer
};

export default combineReducers(reducerMap);
