import {
  APP_LOAD_BEGIN,
  APP_LOAD_SUCCESS,
  APP_LOAD_FAILURE,
  APP_LOAD_DISMISS_ERROR
} from "../constants";

export function appLoading(args = {}, update = false) {
  return dispatch => {
    dispatch({ type: APP_LOAD_BEGIN });

    document.ready
      .then(() => {
        dispatch({ type: APP_LOAD_SUCCESS, data: true });
      })
      .catch(err => {
        dispatch({ type: APP_LOAD_FAILURE, data: { error: err } });
      });
  };
}

export function dismissAppLoadingError() {
  return {
    type: APP_LOAD_DISMISS_ERROR
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case APP_LOAD_BEGIN:
      return {
        ...state,
        appIsLoading: true,
        appReady: false,
        appLoadingError: null
      };

    case APP_LOAD_SUCCESS:
      return {
        ...state,
        appIsLoading: false,
        appReady: true,
        appLoadingError: null
      };

    case APP_LOAD_FAILURE:
      return {
        ...state,
        appIsLoading: false,
        appReady: false,
        appLoadingError: action.data.error
      };

    case APP_LOAD_DISMISS_ERROR:
      return {
        ...state,
        appIsLoading: true,
        appReady: false,
        appLoadingError: null
      };

    default:
      return state;
  }
}
