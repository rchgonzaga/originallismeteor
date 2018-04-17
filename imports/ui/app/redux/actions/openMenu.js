import { APP_OPEN_CLOSE_MENU } from "../constants";

export function openMenu(opened = false) {
  return {
    type: APP_OPEN_CLOSE_MENU,
    payload: opened
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case APP_OPEN_CLOSE_MENU:
      return { ...state, appMenuOpened: action.payload };

    default:
      return state;
  }
}
