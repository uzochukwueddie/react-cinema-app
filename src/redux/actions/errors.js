import { SET_ERROR } from '../types';

export const setError = (errorMsg) => async (dispatch) => {
  if (errorMsg) {
    const payload = {
      message: errorMsg.message,
      statusCode: errorMsg.statusCode
    };
    dispatch({ type: SET_ERROR, payload });
  } else {
    dispatch({ type: SET_ERROR, payload: { message: '', statusCode: null } });
  }
};
