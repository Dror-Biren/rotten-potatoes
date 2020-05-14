import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Poster from './Poster';
import StarsRating from './StarsRating';

const MovieListItem = (movie) => {
   //console.log(movie);
   const { id, title, releaseDate, posterUrl, genres } = movie;

   const genresJsx = (
      <p>
         { genres.join(", ") }
      </p>
   )
   
   return (
      <div className="list-item list-item--soft-border">
         <Link className="list-item" to={`/view/${id}`}>
            <Poster url={posterUrl} />
            <h3 className="list-item__title">{title}</h3>
            <span className="list-item__sub-title">{moment(releaseDate).year()}</span>
            {genresJsx}
         </Link>
         <StarsRating movie={movie} editble={true} />
      </div>
   );
}

export default MovieListItem;
