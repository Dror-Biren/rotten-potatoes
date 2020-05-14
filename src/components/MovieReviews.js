import React from 'react';
import moment from 'moment';
import StaticStarsRating from './StaticStarsRating';

export default ({ reviews }) => {
   function createReviewElement({rating, time}, key) {
      //console.log(review);
      return (
         <div className="review" key={key}>
            <p>{moment(time).fromNow()}</p>

            <StaticStarsRating rating={rating}/>
         </div>
      );
   }

   let arrReviews = [];
   for (let key in reviews) {
      const newReview = createReviewElement(reviews[key], key);
      arrReviews.push(newReview);
   }

   return (
      <div className="reviews">
         {arrReviews}
      </div>
   )
}