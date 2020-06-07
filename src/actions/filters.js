
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const setSortBy = (sorter) => ({
  type: 'SET_SORT_BY',
  sorter
});

export const setYearsRangeFilter = (yearsRange) => ({
   type: 'SET_YEARS_RANGE_FILTER',
   yearsRange
 });

export const setGenresfilter = (genres) => ({
   type: 'SET_GENRES_FILTER',
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