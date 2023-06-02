import React, { useState, useEffect } from 'react';
import { fetchTopMovies } from './Api.jsx';
import MoviesList from './MoviesList';

export const TopMovies = () => {
  const [movies, setMovies] = useState([]);
  const pageParams = 'trending/all/day?language=en-US';

  useEffect(() => {
    fetchTopMovies(pageParams)
      .then(response => {
        const data = response.data;
        setMovies(data.results);
      })
      .catch(error => {
        console.error(error);
        setMovies([]);
      });
  }, []);

  return <MoviesList movies={movies} />;
};
