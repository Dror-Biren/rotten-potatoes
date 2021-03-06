import React from 'react';
import moment from 'moment';

import Poster from '../moviesInfo/Poster';
import StartsRatingWithComment from '../moviesInfo/StartsRatingWithComment';
import YoutubeVideo from '../moviesInfo/YoutubeVideo';
import MovieReviews from '../moviesInfo/MovieReviews';

export default class UserViewMovie extends React.Component {

   render() {
      const { description, releaseDate, posterUrl, trailerUrl, raters } = this.props.movie;

      const descriptionDiv = (
         <div className="info info--mulLine">
            <h3>Description:</h3>
            <p>{description}</p>
         </div>
      );

      return (
         <div>
            <div className="posterAndTrailer">
               <div className="movie-page-posterAndRating">
                  <Poster url={posterUrl} className="user-view--poster" />
                  <StartsRatingWithComment
                     className={"movie-page-rating"} 
                     movie={this.props.movie}
                  />
               </div>
               <YoutubeVideo url={trailerUrl} />
            </div>

            {description ? descriptionDiv : null}

            <div className="info info--oneLine">
               <h3>Release date:</h3>
               <p>
                  {moment(releaseDate).format('MMMM Do, YYYY')}
               </p>
            </div>

            <MovieReviews reviews={raters}/>
         </div>
      );
   }
};
