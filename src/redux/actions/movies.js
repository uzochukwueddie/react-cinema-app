import { MOVIE_LIST, SET_ERROR, RESPONSE_PAGE, LOAD_MORE_RESULTS, MOVIE_TYPE } from '../types';
import { MOVIE_API_URL } from '../../services/movies.service';

export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await getMoviesRequest(type, pageNumber);
    const { results, payload } = response;
    dispatchMethod(MOVIE_LIST, results, dispatch);
    dispatchMethod(RESPONSE_PAGE, payload, dispatch);
  } catch (error) {
    if (error.response) {
      dispatchMethod(SET_ERROR, error.response.data.message, dispatch);
    }
  }
};

export const loadMoreMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await getMoviesRequest(type, pageNumber);
    const { results, payload } = response;
    dispatchMethod(LOAD_MORE_RESULTS, { list: results, page: payload.page, totalPages: payload.totalPages }, dispatch);
  } catch (error) {
    if (error.response) {
      dispatchMethod(SET_ERROR, error.response.data.message, dispatch);
    }
  }
};

export const setResponsePageNumber = (page, totalPages) => async (dispatch) => {
  const payload = { page, totalPages };
  dispatchMethod(RESPONSE_PAGE, payload, dispatch);
};

export const setMovieType = (type) => async (dispatch) => {
  dispatchMethod(MOVIE_TYPE, type, dispatch);
};

const dispatchMethod = (type, payload, dispatch) => {
  dispatch({ type, payload });
};

const getMoviesRequest = async (type, pageNumber) => {
  const movies = await MOVIE_API_URL(type, pageNumber);
  const { results, page, total_pages } = movies.data;
  const payload = {
    page,
    totalPages: total_pages
  };
  return { results, payload };
};
