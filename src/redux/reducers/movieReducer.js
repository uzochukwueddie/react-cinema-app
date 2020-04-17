import { MOVIE_LIST, RESPONSE_PAGE, LOAD_MORE_RESULTS, MOVIE_TYPE, SEARCH_QUERY, SEARCH_RESULT, MOVIE_DETAILS, CLEAR_MOVIE_DETAILS } from '../types';

const initialState = {
  list: [],
  page: 1,
  totalPages: 0,
  movieType: 'now_playing',
  searchQuery: '',
  searchResult: [],
  movie: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return {
        ...state,
        list: action.payload
      };
    case RESPONSE_PAGE:
      return {
        ...state,
        page: action.payload.page,
        totalPages: action.payload.totalPages
      };
    case LOAD_MORE_RESULTS:
      return {
        ...state,
        list: [...state.list, ...action.payload.list],
        page: action.payload.page,
        totalPages: action.payload.totalPages
      };
    case MOVIE_TYPE:
      return {
        ...state,
        movieType: action.payload
      };
    case SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload
      };
    case SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };
    case MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload
      };
    case CLEAR_MOVIE_DETAILS:
      return {
        ...state,
        movie: []
      };
    default:
      return state;
  }
};
