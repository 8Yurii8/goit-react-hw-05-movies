import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(movie =>
          movie.title ? (
            <li key={movie.id}>
              <Link to={`/Movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

export default MoviesList;
