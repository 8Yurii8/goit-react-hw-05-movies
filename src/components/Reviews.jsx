import React, { useEffect, useState } from 'react';
import { fetchIdReviews } from '../services/Api';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = () => {
      fetchIdReviews(movieId)
        .then(response => {
          const data = response.data;
          setReviews(data.results);
        })
        .catch(error => {
          console.error(error);
          setReviews([]);
        });
    };

    fetchReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <div>
            <p>{review.author_details.username}</p>
            <p>{review.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

Reviews.propTypes = {
  moviesId: PropTypes.number,
};

export default Reviews;
