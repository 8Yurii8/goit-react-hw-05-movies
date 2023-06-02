import React, { useEffect, useState } from 'react';
import { fetchIdСredits } from '../services/Api';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetchIdСredits(movieId);
        const data = response.data;
        setCast(data.cast);
      } catch (error) {
        console.error(error);
        setCast([]);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(person => (
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
  movieId: PropTypes.string,
};

export default Cast;
