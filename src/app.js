import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import store from './store/configureStore';
import { startSetMovies } from './actions/movies';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import database, { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

//console.log("---",store.getState());

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
store.dispatch(startSetMovies()).then(renderApp);


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

function dispatchLogin(user) {
   database.ref("adminsEmails").on('value', (snapshot) => {
      let isAdmin = false;
      snapshot.forEach((childSnapshot) => {
         isAdmin = isAdmin || (childSnapshot.val() === user.email);
      })
      console.log(`login as ${isAdmin ? "admin" : "user"}`);
      store.dispatch(login(user.uid, isAdmin));
   })
}

