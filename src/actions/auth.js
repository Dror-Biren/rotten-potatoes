import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid, isAdmin) => ({
  type: 'LOGIN',
  uid,
  isAdmin
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  console.log("log out")
  return () => {
    return firebase.auth().signOut();
  };
};
