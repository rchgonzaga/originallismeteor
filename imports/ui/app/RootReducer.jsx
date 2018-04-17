import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import studentReducer from "./views/Student/redux/reducer";
// import schoolsReducer from "./views/Schools/redux/reducer";
// import phoneOperators from "./views/PhoneOperators/redux/reducer";
// import clientsReducer from "./views/Clients/redux/reducer";
// import citiesReducer from "./views/Cities/redux/reducer";
// import coursesReducer from "./views/Courses/redux/reducer";

const reducerMap = {
  router: routerReducer
  // student: studentReducer,
  // schools: schoolsReducer,
  // phoneOperators: phoneOperators,
  // clients: clientsReducer,
  // cities: citiesReducer,
  // courses: coursesReducer
};

export default combineReducers(reducerMap);
