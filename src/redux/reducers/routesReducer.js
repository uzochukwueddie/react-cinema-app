import { APP_ROUTES, PATH_URL } from '../types';

const initialState = {
  routesArray: [],
  path: '',
  url: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_ROUTES:
      return {
        ...state,
        routesArray: action.payload
      };
    case PATH_URL:
      return {
        ...state,
        path: action.payload.path,
        url: action.payload.url
      };
    default:
      return state;
  }
};
