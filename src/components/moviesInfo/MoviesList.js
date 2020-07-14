import React from 'react';
import { connect } from 'react-redux';

import MovieListItem from './MovieListItem';
import selectMovies from '../../selectors/movies';

export const MoviesList = (props) => {
   const Movies = props.movies.map(movie =>
      <MovieListItem
         key={movie.id}
         {...movie}
      />
   );

   return (
      <div className="page-margin">
         <div className="list-body">
            {Movies}
         </div>
      </div>
   )
};

const mapStateToProps = (state) => ({
   movies: selectMovies(state.movies, state.filters)
})

export default connect(mapStateToProps)(MoviesList);
