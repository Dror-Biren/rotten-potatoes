import React from 'react';
import { history } from '../routers/AppRouter';

const NotFoundPage = () => (
   <div className="login-ui__container">
      <div className="login-ui">
         <h1 className="login-ui__title">
            404
         </h1>

         <h2 className="login-ui__title">
            Page not found
         </h2>

         <p>
            The link you clicked may
            <br />
            be broken, or the page
            <br />
            may have been removed.
         </p>

         <br />
         <button
            className="button"
            onClick={() => history.push('/dashboard')}>
            Go Home
         </button>

      </div>
   </div>
);

export default NotFoundPage;
