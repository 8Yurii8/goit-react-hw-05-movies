import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '&api_key=a12547abec0d5f114d2002493fcf19d3';

export const fetchMovies = search => {
  return axios.get(
    `${BASE_URL}search/movie?query=${search}&include_adult=false&language=en-US&&${KEY}`
  );
};

export const fetchTopMovies = () => {
  return axios.get(`${BASE_URL}trending/all/day?language=en-US${KEY}`);
};

export const fetchId = movieId => {
  return axios.get(`${BASE_URL}movie/${movieId}?language=en-US&${KEY}`);
};

export const fetchIdСredits = movieId => {
  return axios.get(`${BASE_URL}movie/${movieId}/credits?language=en-US&${KEY}`);
};

export const fetchIdReviews = movieId => {
  return axios.get(`${BASE_URL}movie/${movieId}/reviews?language=en-US&${KEY}`);
};
