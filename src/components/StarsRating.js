import ReactStars from 'react-stars';
import React from 'react';
import { connect } from 'react-redux';

import { updateMovieRating } from '../actions/movies';


export class StarsRating extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         rating: undefined
      }
   }

   onUpdateRating = (newRatingVote) => {
      const { movie, uid, updateMovieRating } = this.props;
      
      if (!uid) {
         alert("Sorry, to rate movies you must first login ...");
         return this.setState(() => ({ rating: movie.rating }));
      }

      if (movie.raters && movie.raters[uid]) {
         alert("Sorry, you already rated this movie ...");
         return this.setState(() => ({ rating: movie.rating }));
      }

      updateMovieRating(movie, newRatingVote);
      this.setState(() => ({ rating: undefined }))
   }

   render() {
      const { rating, ratingsAmount } = this.props.movie;
      const finalRating = this.state.rating || rating;
      const roundRating = Math.round(2 * finalRating) / 2;
      //const size = document.querySelector(".StarsRating").offsetWidth * 0.9;

      const notRatedYet = (
         <p id="notRatedYet">
            This movie doesn't have a rating yet.
            <br />
            Be the first to rate it!
         </p>
      );

      const votingCount = (
         <p id="votingCount">
            by {ratingsAmount} voting
         </p>
      );

      return (
         <div className="rating">
            <ReactStars
               count={5}
               onChange={this.onUpdateRating}
               size={40}
               edit={this.props.editble}
               value={roundRating}
               color1={'#B3B3B3'}
               color2={'#ffd700'}
            />
            {
               ratingsAmount === 0 ? 
               notRatedYet : 
               votingCount
            }
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   uid: state.auth.uid
})

const mapDispatchToProps = (dispatch, props) => ({
   updateMovieRating: (movie, newRatingVote) => dispatch(updateMovieRating(movie, newRatingVote))
});

export default connect(mapStateToProps, mapDispatchToProps)(StarsRating);