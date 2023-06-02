import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '&api_key=a12547abec0d5f114d2002493fcf19d3';
const pageQuery = 'search/movie?query=';

export const fetchImages = (search, pageParams) => {
  return axios.get(`${BASE_URL}${pageQuery}${search}${pageParams}&${KEY}`);
};

export const fetchTopMovies = pageParams => {
  return axios.get(`${BASE_URL}${pageParams}&${KEY}`);
};

export const fetchId = pageParams => {
  return axios.get(`${BASE_URL}${pageParams}&${KEY}`);
};
