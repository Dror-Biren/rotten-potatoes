//import uuid from 'uuid';
import database from '../firebase/firebase';
import { uploadPoster } from "../firebase/posters";


// ADD_MOVIE
export const addMovie = (movie) => ({
   type: 'ADD_MOVIE',
   movie
});

function addMovieToDatabase(movie, dispatch) {
   return database.ref(`movies`).push(movie)
      .then((ref) =>
         dispatch(addMovie({
            id: ref.key,
            ...movie
         }))
      );
}

export const startAddMovie = (movieData = {}) => {
   return (dispatch, getState) => {
      const {
         title = '',
         description = '',
         rating = 0,
         ratingsAmount = 0,
         releaseDate = 0,
         genres = [],
         poster,
         trailerUrl = ''
      } = movieData;

      const creator = {
         uid: getState().auth.uid,
         time: new Date().valueOf()
      }

      const movie = { title, description, rating, ratingsAmount, releaseDate, genres, trailerUrl, creator, raters: {} }

      function afterUploadPoster(newUrl) {
         movie.posterUrl = newUrl;
         return addMovieToDatabase(movie, dispatch);
      }

      if (poster)
         return uploadPoster(poster)
            .then(afterUploadPoster)

      return addMovieToDatabase(movie, dispatch);
   }
}




function editMovieInDatabase(updates, id, dispatch, newRater) {
   let firebaseUpdates = updates;
   if (newRater) {
      const newRaterPath = `raters/${newRater.key}`;
      firebaseUpdates[newRaterPath] = newRater.data;
   }

   return database.ref(`movies/${id}`).update(firebaseUpdates).then(() => {
      dispatch(editMovie(id, updates, newRater));
   });
}

// EDIT_MOVIE
export const editMovie = (id, updates, newRater) => ({
   type: 'EDIT_MOVIE',
   id,
   updates,
   newRater
});

export const startEditMovie = (id, updates) => {
   return (dispatch, getState) => {
      const { poster, newRatingVote } = updates;
      delete updates.poster;
      delete updates.newRatingVote;

      const newRater = newRatingVote && {
         key: getState().auth.uid,
         data: {
            rating: newRatingVote,
            time: new Date().valueOf()
         }
      }

      if (poster)
         return uploadPoster(poster)
            .then(afterUploadPoster)

      return editMovieInDatabase(updates, id, dispatch, newRater);

      function afterUploadPoster(newUrl) {
         updates.posterUrl = newUrl;
         return editMovieInDatabase(updates, id, dispatch, newRater);
      }
   };
};



// UPDATE_MOVIE_RATING
export const updateMovieRating = (movie, newRatingVote) => {
   let { id, rating, ratingsAmount } = movie;
   const newRatingSum = ratingsAmount * rating + newRatingVote;
   ratingsAmount++;
   rating = newRatingSum / ratingsAmount;
   return startEditMovie(id, { rating, ratingsAmount, newRatingVote })
}



// REMOVE_MOVIE
export const removeMovie = ({ id } = {}) => ({
   type: 'REMOVE_MOVIE',
   id
});

export const startRemoveMovie = ({ id } = {}) => {
   return (dispatch, getState) => {
      return database.ref(`movies/${id}`).remove().then(() => {
         dispatch(removeMovie({ id }));
      });
   };
};





// SET_MOVIES
export const setMovies = (movies) => ({
   type: 'SET_MOVIES',
   movies
});

export const startSetMovies = () => {
   return (dispatch, getState) => {
      return database.ref(`movies`).once('value').then((snapshot) => {
         const movies = [];

         snapshot.forEach((childSnapshot) => {
            movies.push({
               id: childSnapshot.key,
               ...childSnapshot.val()
            });
         });

         if (!movies.genres)
            movies.genres = [];

         dispatch(setMovies(movies));
      });
   };
};
