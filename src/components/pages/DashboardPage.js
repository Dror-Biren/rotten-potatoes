import React from 'react';

import MoviesList from '../moviesInfo/MoviesList';
import MovieListFilters from '../filters/MovieListFilters';
import MoviesSummary from '../header/MoviesSummary';

const DashboardPage = () => (
  <div>
    <MoviesSummary />
    <MovieListFilters />
    <MoviesList />
  </div>
);

export default DashboardPage;
