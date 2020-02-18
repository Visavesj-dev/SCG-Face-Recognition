import { APP_INIT } from "./types";

export const setApp = app => {
  return dispatch => {
    dispatch({
      type: APP_INIT,
      payload: app
    });
  };
};
