
// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startYear: undefined,
  endYear: undefined
};

export default (state = filtersReducerDefaultState, action) => {
  //console.log({action})
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'rating'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_VIEWES':
      return {
        ...state,
        sortBy: 'viewes'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startYear: action.startYear
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endYear: action.endYear
      };
    default:
      return state;
  }
};
