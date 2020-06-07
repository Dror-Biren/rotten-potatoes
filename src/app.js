import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';

import './styles/styles.scss';
import 'normalize.css/normalize.css';

import AppRouter from './routers/AppRouter';
import store from './store/configureStore';
import fetchAppData from './actions/fetchAppData';
import { login, logout } from './actions/user';
import { deafultUser } from './appConsts';
import database, { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { addUser } from './actions/allUsers';


ReactDOM.render(<LoadingPage />, document.getElementById('app'));
store.dispatch(fetchAppData()).then(renderApp);

let hasRendered = false;
function renderApp() {
   const jsx = (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   );

   if (!hasRendered) {
      ReactDOM.render(jsx, document.getElementById('app'));
      hasRendered = true;
   }
}



firebase.auth().onAuthStateChanged((user) => {
   if (user)
      dispatchLogin(user);
   else {
      store.dispatch(logout());
      console.log("connected as guest");
   }
});

function dispatchLogin({ uid, email }) {
   database.ref().once('value', (snapshot) => {
      const userPath = `users/${uid}`;
      const userRef = snapshot.child(userPath);
      if(!userRef.val())
         handleNewUser(uid, userPath);

      const emailsRef = snapshot.child("adminsEmails");
      const isAdmin = isAppearsInRef(email, emailsRef);
      console.log(`login as ${isAdmin ? "admin" : "user"}`);

      const themeIndex = userRef.child('themeIndex').val() || 0;
      const user = {uid, isAdmin, themeIndex};

      store.dispatch(login(user));
   })
}

function handleNewUser(uid, userPath) {
   database.ref(userPath).set(deafultUser);
   store.dispatch(addUser(uid))   
}


function isAppearsInRef(value, ref) {
   let result = false;
   ref.forEach((childSnapshot) => {
      result = result || (childSnapshot.val() === value);
   })
   return result;
}



