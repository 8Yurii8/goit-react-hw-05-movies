import React, { useEffect, useState } from 'react';
import { fetchId } from './Api';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import css from 'style.module.css';
const MovieDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const pageParams = `movie/${params.movieId}?language=en-US`;

  useEffect(() => {
    const fetchMovieDetails = () => {
      fetchId(pageParams)
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
  }, [pageParams]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={goBack} className={css.listButton}>
        Go back
      </button>
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
