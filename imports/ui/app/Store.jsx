import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import setAuthorizationHeader from "./utils/setAuthorizationHeader";
import RootReducer from "./RootReducer";

const logger = createLogger({ collapsed: true });

// TODO: Custom middleware - I'm going to use it for check somethings later.
const customMiddleWare = store => next => action => {
  console.log("Middleware triggered:", action);
  next(action);
};

const Store = createStore(
  RootReducer,
  applyMiddleware(thunk, logger) // customMiddleWare
);

//
if (localStorage.orginallisJWT) {
  const payload = decode(localStorage.orginallisJWT);
  const user = {
    token: localStorage.orginallisJWT,
    email: payload.email,
    confirmed: payload.confirmed
  };
  setAuthorizationHeader(localStorage.orginallisJWT);
  store.dispatch(userLoggedIn(user));
}

export default Store;
