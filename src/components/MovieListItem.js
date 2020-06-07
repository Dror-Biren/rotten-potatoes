import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Poster from './Poster';
import StartsRatingWithComment from './StartsRatingWithComment';

const MovieListItem = (movie) => {
   //console.log(movie);
   const { id, title, releaseDate, posterUrl, genres } = movie;

   let genresPairs = [];
   for (let i = 0; i < genres.length; i += 2) {
      let genresPair = genres[i];
      if (i < genres.length - 1)
         genresPair += ", " + genres[i + 1];
      genresPairs.push(genresPair)
   }
   const genresJsx = (
      <div className="genresSummery">
         {genresPairs.map(
            (genrePair, index) => (
               <p className="genreSummery" key={index}>
                  {genrePair}
               </p>
            )
         )}
      </div>
   )

   return (
      <div className="list-item itemsBackground">
         <Link className="list-item" to={`/view/${id}`}>
            <Poster url={posterUrl} />

            <h3 className="list-item__title">
               {title}
            </h3>

            <span className="list-item__sub-title">
               {moment(releaseDate).year()}
            </span>

            {genresJsx}
         </Link>

         <StartsRatingWithComment movie={movie}/>
      </div>
   );
}

export default MovieListItem;
