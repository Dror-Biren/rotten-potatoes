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
      //const uid = getState().auth.uid;
      const {
         title = '',
         description = '',
         rating = 0,
         ratingsAmount = 0,
         releaseDate = 0,
         genre = "unknown",
         poster
      } = movieData;
      const movie = { title, description, rating, ratingsAmount, releaseDate, genre }

      if (poster) 
         return uploadPoster(poster)
         .then((newUrl) => {
            //console.log({newUrl});
            movie.posterUrl = newUrl;
            return addMovieToDatabase(movie, dispatch);
         })
      else 
         return addMovieToDatabase(movie, dispatch);
   }
}




function editMovieInDatabase(updates, id, dispatch) {
   return database.ref(`movies/${id}`).update(updates).then(() => {
      dispatch(editMovie(id, updates));
   });  
}

// EDIT_MOVIE
export const editMovie = (id, updates) => ({
   type: 'EDIT_MOVIE',
   id,
   updates
 });
 
 export const startEditMovie = (id, updates, hadPosterBefore) => {
   return (dispatch, getState) => {
      const { poster } = updates;
      delete updates.poster;

      if (poster) {
         return uploadPoster(poster)
         .then((newUrl) => {
            //console.log({newUrl});
            updates.posterUrl = newUrl;
            return editMovieInDatabase(updates, id, dispatch);
         })
      } 
      else {
         if (!hadPosterBefore)
            updates.posterUrl = null;
         return editMovieInDatabase(updates, id, dispatch);
      }
   };
 };
 





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

      //console.log({snapshot});
      snapshot.forEach((childSnapshot) => {
        //console.log({childSnapshot});
        movies.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setMovies(movies));
    });
  };
};
