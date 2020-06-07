import database from '../firebase/firebase';
import { setMovies } from './movies';
import { setUsers } from './allUsers';
import { deafultUser } from './../appConsts';
//console.log(",,,",defaultUser)

export default () => {
   return (dispatch, getState) => {
      return database.ref().once('value').then((snapshot) => {
         dispatchSetMovies(dispatch, snapshot.child('movies'));
         dispatchSetAllUsers(dispatch, snapshot.child('users'));
      });
   };
};

function dispatchSetMovies(dispatch, moviesRef) {
   const movies = [];

   moviesRef.forEach((movieSnapshot) => {
      movies.push({
         id: movieSnapshot.key,
         ...movieSnapshot.val()
      });
   });
   
   dispatch(setMovies(movies));
}

function dispatchSetAllUsers(dispatch, usersRef) {
   const users = {};

   usersRef.forEach((userSnapshot) => {
      const { 
         nickname = deafultUser.nickname, 
         avatarIndex = 0 
      } = userSnapshot.val();
      
      const uid = userSnapshot.key;
      users[uid] = {
         nickname,
         avatarIndex
      };
   });
   
   dispatch(setUsers(users));
}