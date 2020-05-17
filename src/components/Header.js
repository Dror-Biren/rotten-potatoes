import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';
import { startLogout } from '../actions/auth';
import { history } from '../routers/AppRouter';

export const Header = ({ isAuthenticated, startLogin, startLogout }) => {
   const logOutButton = (
      <button className="button" onClick={startLogout}>
         Log-out
      </button>
   );

   const logInButton = (
      <button className="button" onClick={startLogin}>
         Login with Google
      </button>
   );

   return (
      <header className="header">
         <img
            className="header__background"
            src="/images/potatoes.webp"
         />
         <div className="content-container">
            <div className="header__content">

               <Link className="header__title" to="/dashboard">
                  <h1>
                     Rotten Potatoes
                  </h1>
               </Link>

               { isAuthenticated ? logOutButton : logInButton }
            </div>
         </div>
      </header>
   );
}

const mapStateToProps = (state) => ({
   isAuthenticated: !!state.auth.uid
 });

const mapDispatchToProps = (dispatch) => ({
   startLogin: () => dispatch(startLogin()),
   startLogout: () => {
      dispatch(startLogout()).then();
      const returnToLoginPage = () => history.push('/');
      setTimeout(returnToLoginPage, 700);
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
