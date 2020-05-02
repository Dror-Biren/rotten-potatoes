// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
export const sortByRating = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SORT_BY_VIEWES
export const sortByViewes = () => ({
  type: 'SORT_BY_VIEWES'
});

// SET_START_DATE
export const setStartYear = (startYear) => ({
  type: 'SET_START_DATE',
  startYear
});

// SET_END_DATE
export const setEndYear = (endYear) => ({
  type: 'SET_END_DATE',
  endYear
});
