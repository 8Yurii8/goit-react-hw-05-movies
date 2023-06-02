import React, { useEffect, useState, useRef } from 'react';
import { fetchId } from '../services/Api';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import css from 'style.module.css';
const MovieDetails = () => {
  const params = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const goBackLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = () => {
      fetchId(params.movieId)
        .then(response => {
          const data = response.data;
          setMovie(data);
        })
        .catch(error => {
          console.error(error);
          setMovie(null);
        });
    };

    fetchMovieDetails();
  }, [params.movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={goBackLink.current}>Go back</Link>
      <div className={css.movieTitle}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          width={'300px'}
          alt={movie.title}
        />
        <div className={css.movieText}>
          <div className={css.movieTextTitle}>
            <h2>{movie.title}</h2>
            <h2>({movie.release_date})</h2>
          </div>
          <h3>Overview</h3>
          <p>{movie.overview}</p>

          <h3>Genres</h3>
          <ul className={css.movieTitleList}>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.movieAdditional}>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={`/Movies/${movie.id}/cast`}>{movie.catch}Cast</Link>
          </li>
          <li>
            <Link to={`/Movies/${movie.id}/reviews`}>
              {movie.reviews}Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
