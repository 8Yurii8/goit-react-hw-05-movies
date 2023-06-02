import React, { useEffect, useState } from 'react';
import { fetchId } from './Api';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cast = ({ movieId }) => {
  const params = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = () => {
      const pageParams = `movie/${params.movieId}/credits?language=en-US`;
      fetchId(pageParams)
        .then(response => {
          const data = response.data;
          setCast(data.cast);
        })
        .catch(error => {
          console.error(error);
          setCast([]);
        });
    };

    fetchCast();
  }, [movieId, params.movieId]);

  return (
    <ul>
      {cast.map(person => (
        <li key={person.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
            width={'100px'}
            alt={person.name}
          />
          <div>
            <p>{person.name}</p>
            <p>{person.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

Cast.propTypes = {
  moviesId: PropTypes.number,
};

export default Cast;
