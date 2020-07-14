import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import selectMovies from '../../selectors/movies';
import selectExpensesTotal from '../../selectors/movies-total';


export const MoviesSummary = ({ moviesAmount, ratingsAmount, isAdmin }) => {
   const adminAddMovieButton = (
      isAdmin &&
      <div className="button--add-movie">
         <Link className="add-movie-symbol" to="/create">
            +
         </Link>
      </div>
   );
   //➕

   const spanBold = (text) => (
      <span className="span-bold">
         {text}
      </span>
   )

   const moviesSummaryText = (
      <h2 className="sub-header__title">
         Found {spanBold(moviesAmount)} movies,
         with a total of {spanBold(ratingsAmount)} ratings
      </h2>
   )

   const noMoviesText = (
      <h2 className="sub-header__title">
         No movie matches your search settings
      </h2>
   );

   return (
      <div className="sub-header">
         {moviesAmount > 0 ? moviesSummaryText : noMoviesText}     
         {adminAddMovieButton}
      </div>
   );
};

/*
 Viewing <span>{ratingsAmount}</span> ratings,
   for <span>{moviesAmount}</span> movies.

   <span id="span-moto">
                  help us to rate them all!
               </span>
*/

const mapStateToProps = (state) => {
   const visibleMovies = selectMovies(state.movies, state.filters);

   return {
      moviesAmount: visibleMovies.length,
      ratingsAmount: selectExpensesTotal(visibleMovies),
      isAdmin: state.user.isAdmin
   };
};

export default connect(mapStateToProps)(MoviesSummary);
