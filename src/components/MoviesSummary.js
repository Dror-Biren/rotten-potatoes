import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectMovies from '../selectors/movies';
import selectExpensesTotal from '../selectors/movies-total';

export const MoviesSummary = ({ moviesAmount, ratingsAmount }) => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{ratingsAmount}</span> ratings, for <span>{moviesAmount}</span> movies.
        </h1>
        <h3>help us to rate them all!</h3>
        {
        <div className="page-header__actions">
          <Link className="button" to="/create">Add movie</Link>
        </div>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleMovies = selectMovies(state.movies, state.filters);

  return {
    moviesAmount: visibleMovies.length,
    ratingsAmount: selectExpensesTotal(visibleMovies)
  };
};

export default connect(mapStateToProps)(MoviesSummary);
