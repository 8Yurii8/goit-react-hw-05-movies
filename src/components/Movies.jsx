import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/Api';
import MoviesList from './MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    fetchMovies(query)
      .then(response => {
        const data = response.data;
        setMovies(data.results);
      })
      .catch(error => {
        console.error(error);
        setMovies([]);
      });
  }, [query]);

  const handleSearchChange = event => {
    setSearch(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      return;
    }
    setSearchParams({ query: search });
    setSearch('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={search}
          onChange={handleSearchChange}
        />
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
