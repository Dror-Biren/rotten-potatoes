import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import selectMovies from '../selectors/movies';

export const MoviesList = (props) => {

  const noMovies = (
    <div className="list-item list-item--message">
      <span>No movie matches your search settings</span>
    </div>
  );

  const Movies = props.movies.map((movie) => 
      <MovieListItem key={movie.id} {...movie} />
  );
  
  return (
  <div className="content-container">
    <div className="list-body">
      { props.movies.length === 0 ? noMovies : Movies}
    </div>
  </div>
)};

const mapStateToProps = (state) => ({
    movies: selectMovies(state.movies, state.filters)
})

export default connect(mapStateToProps)(MoviesList);
