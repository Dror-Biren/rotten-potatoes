//import uuid from 'uuid';
import database from '../firebase/firebase';
import { deafultUser } from './../appConsts';


// ADD_MOVIE
export const addUser = (uid, user = deafultUser) => ({
   type: 'ADD_USER',
   uid,
   user
});


// EDIT_MOVIE
export const editUser = (uid, updates) => ({
   type: 'EDIT_USER',
   uid,
   updates
});

export const startEditUser = (updates) => {
   return (dispatch, getState) => {
      const { uid } = getState().user;
      return database.ref(`users/${uid}`).update(updates).then(() => {
         dispatch(editUser(uid, updates));
      });
   };
};

export const setUsers = (users) => ({
   type: 'SET_USERS',
   users
})



/*
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
*/




// SET_MOVIES
export const setMovies = (movies) => ({
   type: 'SET_MOVIES',
   movies
});


