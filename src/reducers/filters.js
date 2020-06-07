
// Filters Reducer

import { movieGenres, yearsRangeFilter } from '../appConsts';

const filtersReducerDefaultState = {
   text: '',
   sortBy: 'rating',
   yearsRange: yearsRangeFilter,
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

      case 'SET_SORT_BY':
         return {
            ...state,
            sortBy: action.sorter
         };

      case 'SET_YEARS_RANGE_FILTER':
         return {
            ...state,
            yearsRange: action.yearsRange
         }

      case 'SET_GENRES_FILTER':
         return {
            ...state,
            genres: action.genres
         }
      default:
         return state;
   }
};

/*
import { minMovieReleaseYear } from '../appConsts'

startYear: minMovieReleaseYear,
   endYear: new Date().getFullYear(),

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
*/
