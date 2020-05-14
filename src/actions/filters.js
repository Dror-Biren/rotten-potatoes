
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const setSortBy = (sorter) => ({
  type: 'SORT_BY',
  sorter
});

export const setStartYear = (startYear) => ({
  type: 'SET_START_DATE',
  startYear
});

export const setEndYear = (endYear) => ({
  type: 'SET_END_DATE',
  endYear
});

export const setGenresfilter = (genres) => ({
   type: 'SET_GENRES_FILTER',
   genres
})