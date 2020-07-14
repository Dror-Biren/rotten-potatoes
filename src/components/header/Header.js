import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogin } from '../../actions/user';
import ThemeSwitch from './ThemeSwitch';
import AccountButton from './AccountButton';

export const Header = ({ isAuthenticated, startLogin }) => {
   const logInButton = (
      <button className="button header--button header--login" onClick={startLogin}>
         Login
      </button>
   );

   return (
      <header className="header">
         <Link className="header__title" to="/dashboard">
            <h1>
               Rotten Potatoes
            </h1>
         </Link>

         <div className="inOneLine">
            {isAuthenticated ? <AccountButton/> : logInButton}

            <div className="headerThemeSwitch">
               <ThemeSwitch />
            </div>
         </div>

      </header>
   );
}

const mapStateToProps = (state) => ({
   isAuthenticated: !!state.user.uid,
});

const mapDispatchToProps = (dispatch) => ({
   startLogin: () => dispatch(startLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
