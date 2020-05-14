
// Filters Reducer

import { movieGenres, minMovieReleaseYear } from '../appConsts'

const filtersReducerDefaultState = {
   text: '',
   sortBy: 'date',
   startYear: minMovieReleaseYear,
   endYear: new Date().getFullYear(),
   genres: movieGenres
};

export default (state = filtersReducerDefaultState, action) => {
   //console.log({action})
   switch (action.type) {
      case 'SET_TEXT_FILTER':
         return {
            ...state,
            text: action.text
         };
      case 'SORT_BY':
         return {
            ...state,
            sortBy: action.sorter
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
      case 'SET_GENRES_FILTER':
         return {
            ...state,
            genres: action.genres
         }
      default:
         return state;
   }
};
