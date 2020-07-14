import React from "react";
import Popup from "reactjs-popup";
import { connect } from 'react-redux';

import { updateMovieRating } from '../../actions/movies';
import StarsRating from './StarsRating';
import CommentPopUp from '../popUps/CommentPopUp';

class StartsRatingWithComment extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isPopUpOpen: false,
         ratingVote: undefined
      };
   }

   closeCommentPopUp = () => {
      this.setState({ isPopUpOpen: false });
   }

   handleRatingVote = (ratingVote) => {
      this.setState({
         ratingVote,
         isPopUpOpen: true
      });
   }

   submitComment = (comment) => {
      this.closeCommentPopUp();
      this.props.updateMovieRating(this.props.movie, this.state.ratingVote, comment)
   }

   render() {
      return (
         <div className={this.props.className}>
            <StarsRating
               handleRatingVote={this.handleRatingVote}
               movie={this.props.movie}
            />

            <Popup 
               open={this.state.isPopUpOpen}
               onClose={this.closeCommentPopUp}
               closeOnDocumentClick={false}
               closeOnEscape={false}>
               <CommentPopUp submitComment={this.submitComment} />
            </Popup>
         </div>
      );
   }
}

const mapDispatchToProps = (dispatch, props) => ({
   updateMovieRating:
      (movie, newRatingVote, comment) =>
         dispatch(updateMovieRating(movie, newRatingVote, comment))
});

export default connect(undefined, mapDispatchToProps)(StartsRatingWithComment);