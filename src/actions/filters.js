import { reducersActions } from '../appConsts';
const { SET_GENRES,SET_SEARCH,SET_SORT_BY,SET_YEARS_RANGE} = reducersActions.FILTERS;

export const setTextFilter = (text = '') => ({
  type: SET_SEARCH,
  text
});

export const setSortBy = (sorter) => ({
  type: SET_SORT_BY,
  sorter
});

export const setYearsRangeFilter = (yearsRange) => ({
   type: SET_YEARS_RANGE,
   yearsRange
 });

export const setGenresfilter = (genres) => ({
   type: SET_GENRES,
   genres
})

/*
export const setStartYear = (startYear) => ({
  type: 'SET_START_DATE',
  startYear
});

export const setEndYear = (endYear) => ({
  type: 'SET_END_DATE',
  endYear
});
*/