import { firebase, googleAuthProvider } from '../firebase/firebase';
import { reducersActions } from '../appConsts';
const { LOGIN, LOGOUT, SET_THEME_INDEX } = reducersActions.USER;

export const login = (user) => ({
   type: LOGIN,
   user
});

const emptyFunc = () => { };
export const startLogin = (callback = emptyFunc) => {
   return () => {
      return firebase.auth().signInWithPopup(googleAuthProvider)
         .then(callback);
   };
};

export const logout = () => ({
   type: LOGOUT
});

export const startLogout = () => {
   console.log("log out")
   return () => {
      return firebase.auth().signOut();
   };
};

export const setThemeIndex = (themeIndex) => ({
   type: SET_THEME_INDEX,
   themeIndex
});

/*
export const startSetThemeIndex = (themeIndex) => {
   return (dispatch, getState) => {
      const { uid } = getState().user;
      return database.ref(`users/${uid}/`).update(updates).then(() => {
         dispatch(editUser(uid, updates));
      });
   };
};
*/


