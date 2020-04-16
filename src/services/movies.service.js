import axios from 'axios';

const REQUEST_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
const API_KEY = process.env.REACT_APP_API_SECRET;

export const MOVIE_API_URL = async (type, page) => {
  const response = await axios.get(`${REQUEST_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`);
  return response;
};
