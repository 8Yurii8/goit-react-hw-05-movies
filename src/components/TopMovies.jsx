import React, { useState, useEffect } from 'react';
import { fetchTopMovies } from '../services/Api';
import MoviesList from './MoviesList';

export const TopMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTopMovies()
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
