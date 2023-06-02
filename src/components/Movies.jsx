import React, { useState } from 'react';
import { fetchImages } from './Api.jsx';
import MoviesList from './MoviesList';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const pageParams = '&include_adult=false&language=en-US';
  const handleSearchChange = event => {
    setSearch(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      return;
    }
    fetchImages(search, pageParams)
      .then(response => {
        const data = response.data;
        setMovies(data.results);
      })
      .catch(error => {
        console.error(error);
        setMovies([]);
      });
    setSearch('');
  };

  return (
    <div>
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
    </div>
  );
};

export default Movies;
