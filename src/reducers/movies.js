import { reducersActions } from '../appConsts';
const { ADD, EDIT, SET_ALL, REMOVE } = reducersActions.MOVIES;

const moviesReducerDefaultState = [];
export default (state = moviesReducerDefaultState, action) => {
   switch (action.type) {
      case ADD:
         return [
            ...state,
            action.movie
         ];

      case REMOVE:
         const isDiffrentMovie = ({ id }) => id !== action.id;
         return state.filter(isDiffrentMovie);

      case EDIT:
         const getEditedMovie = (movie) => {
            if (action.newRater) {
               const { key, data } = action.newRater;
               if (!movie.raters)
                  movie.raters = {};
               movie.raters[key] = data;
            }
            return {
               ...movie,
               ...action.updates
            };
         }

         return state.map((movie) => {
            if (movie.id === action.id)
               return getEditedMovie(movie);
            return movie;
         });

      case SET_ALL:
         return action.movies;

      default:
         return state;
   }
};
