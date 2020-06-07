// Expenses Reducer

const moviesReducerDefaultState = [];

export default (state = moviesReducerDefaultState, action) => {
   switch (action.type) {
      case 'ADD_MOVIE':
         return [
            ...state,
            action.movie
         ];

      case 'REMOVE_MOVIE':
         const isDiffrentMovie = ({ id }) => id !== action.id;
         return state.filter(isDiffrentMovie);

      case 'EDIT_MOVIE':
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

      case 'SET_MOVIES':
         return action.movies;

      default:
         return state;
   }
};
