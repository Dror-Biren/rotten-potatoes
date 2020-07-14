import React from 'react';
import { connect } from 'react-redux';

import StaticStarsRating from './StaticStarsRating';
import { avatarsUrls } from '../../appConsts';


export const movieReviews = ({ reviews, allUsers }) => {
   function createReviewElement({rating, time, comment}, writer, key) {
      const writerAvatarUrl = avatarsUrls[writer.avatarIndex];

      const commentJsx = (
         comment 
         &&
         <p className="reviewContent">
             {comment}
         </p>
      );

      return (
         <div className="review" key={key}>
            <div className="userSummery">
               <img 
                  className="avatarReview" 
                  src={writerAvatarUrl} 
               />
               <div className="review-usernameAndRating">
                  <h2 className="usernameReview">
                     {writer.nickname}
                  </h2> 
                  <StaticStarsRating rating={rating} time={time}/>
               </div>
            </div>

            {commentJsx}
         </div>
      );
   }

   const arrReviews = [];
   for (const key in reviews) {
      const newReview = createReviewElement(reviews[key], allUsers[key], key);
      arrReviews.push(newReview);
   }

   return (
      <div className="reviews">
         {arrReviews}
      </div>
   )
}

const mapStateToProps = state => ({
   allUsers: state.allUsers
});

export default connect(mapStateToProps)(movieReviews);