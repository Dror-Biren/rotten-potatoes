import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid, isAdmin) => ({
  type: 'LOGIN',
  uid,
  isAdmin
});

const emptyFunc = () => {};
export const startLogin = (callback = emptyFunc) => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
    .then(callback);
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
