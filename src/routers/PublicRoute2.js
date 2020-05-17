import React from 'react';
import store from '../store/configureStore';

import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
   
   /*
   function getIsAuthenticated() {
      setTimeout(() => {
         const state = store.getState();
         console.log({state});  
      }, 0)
   }
   */

   let authenticatedPromise = new Promise(function(resolve, reject) {
      window.setTimeout(function() {
         const state = store.getState();
         console.log({state});  
         resolve(!! state.auth.uid);
      });
    });

   return authenticatedPromise.then((isAuthenticated) => {
      return (
         <Route {...rest} component={(props) => (
            isAuthenticated ? (
               <Redirect to="/dashboard" />
            ) : (
                  <Component {...props} />
               )
         )} />
      );
   }) 
}


export default PublicRoute;
