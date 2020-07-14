//import uuid from 'uuid';
import database from '../firebase/firebase';
import { deafultUser } from './../appConsts';
import { reducersActions } from '../appConsts';
const { ADD, EDIT, SET_ALL } = reducersActions.ALL_USERS;



export const addUser = (uid, user = deafultUser) => ({
   type: ADD,
   uid,
   user
});


export const editUser = (uid, updates) => ({
   type: EDIT,
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
   type: SET_ALL,
   users
})






