import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../routers/AppRouter';
import { Redirect } from 'react-router-dom';

import { startLogin } from '../../actions/user';
import ThemeSwitch from '../header/ThemeSwitch';
import store from '../../store/configureStore';


const goToDashboardPage = () => {
   history.push('/dashboard')
}

const authStatuses = {
   pending: 0,
   isAuth: 1,
   notAuth: 2
}

export class LoginPage extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         containerAnimationClass: "",
         titleAnimationClass: "",
         animationStarted: false,
         authStatus: authStatuses.pending
      };
   }

   componentDidMount() {
      setTimeout(() => {
         const { uid } = store.getState().user;
         const authStatus = uid ? authStatuses.isAuth : authStatuses.notAuth;
         this.setState({ authStatus });
      }, 200)
   }

   shiftPageAnimation = () => {
      this.setState({
         containerAnimationClass: "containerAnimation",
         titleAnimationClass: "titleAnimation",
         animationStarted: true
      });
   };

   shiftPageAfterLogin = () => {
      this.props.startLogin(this.shiftPageAnimation);
   }

   render() {
      switch (this.state.authStatus) {
         case authStatuses.notAuth:
            return this.normalRender();

         case authStatuses.isAuth:
            return <Redirect to="/dashboard" />;

         case authStatuses.pending:
            return <div></div>;
      }
   }

   normalRender() {
      const title = (
         <h1 className={`login__title ${this.state.titleAnimationClass}`}>
            Rotten
            &#10;
            Potatoes
         </h1>
      )

      const subTitle = (
         <p className="login__subtitle">
            We rate movies - join us!
         </p>
      );

      const loginButton = (
         <div
            className="buttonWithImg"
            onClick={this.shiftPageAfterLogin}
         >
            <img src="/images/google-logo.webp" />
            <button className="button">
               Login with Google
            </button>
         </div>
      );

      const textBetweenButtons = (
         <p>
            ------- OR -------
         </p>
      )

      const continueAsGuestButton = (
         <div
            className="buttonWithImg"
            onClick={this.shiftPageAnimation}
         >
            <img src="/images/guest10.jpg" />
            <button className="button button--guest">
               Continue as guest
            </button>
         </div>
      );

      const buttons = (
         <div className="loginButtons">
            {loginButton}
            {textBetweenButtons}
            {continueAsGuestButton}
         </div>
      );

      const disappearedDuringAnimation = (
         !this.state.animationStarted
         &&
         <div>
            {subTitle}
            {buttons}
            <ThemeSwitch className="loginThemeSwitch" />
         </div>
      );

      return (
         <div className="login-ui__container">
            <div
               className={`login-ui ${this.state.containerAnimationClass}`}
               onAnimationEnd={goToDashboardPage}>
               {title}
               {disappearedDuringAnimation}
            </div>
         </div >
      );
   }
}

const mapDispatchToProps = (dispatch) => ({
   startLogin: (callback) => dispatch(startLogin(callback))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
