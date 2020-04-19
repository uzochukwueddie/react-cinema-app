import { APP_ROUTES, PATH_URL } from '../types';

export const appRoutes = (routes) => async (dispatch) => {
  dispatch({ type: APP_ROUTES, payload: routes });
};

export const pathURL = (path, url) => async (dispatch) => {
  dispatch({ type: PATH_URL, payload: { path, url } });
};
