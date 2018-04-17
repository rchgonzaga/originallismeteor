import initialState from "./initialState";
import { reducer as startApplication } from "./actions/startApplication";
import { reducer as openMenu } from "./actions/openMenu";

const reducers = [startApplication, openMenu];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
