import React from 'react';

import MoviesList from './MoviesList';
import MovieListFilters from './MovieListFilters';
import MoviesSummary from './MoviesSummary';

const DashboardPage = () => (
  <div>
    <MoviesSummary />
    <MovieListFilters />
    <MoviesList />
  </div>
);

export default DashboardPage;
