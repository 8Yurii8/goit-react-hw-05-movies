import React, { useEffect, useState } from 'react';
import { fetchId } from './Api';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = () => {
      const pageParams = `movie/${params.movieId}/reviews?language=en-US`;
      fetchId(pageParams)
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
  }, [params.movieId]);

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
