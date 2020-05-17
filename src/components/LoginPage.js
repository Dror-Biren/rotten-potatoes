import React from 'react';
import { connect } from 'react-redux';
import { history } from '../routers/AppRouter';
import { Redirect } from 'react-router-dom';

import { startLogin } from '../actions/auth';
import store from '../store/configureStore';


const goToDashboardPage = () => {
   history.push('/dashboard')
}

export class LoginPage extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         classNames: "",
         animationStarted: false,
         authenticated: false
      };
   }

   componentDidMount() {
      setTimeout(() => {
         const state = store.getState();
         console.log({ state });
         if (state.auth.uid)
            this.setState({authenticated: true});
      }, 200) 
   }

   shiftPageAnimation = () => {
      this.setState({
         classNames: "animation",
         animationStarted: true
      });
   };

   shiftPageAfterLogin = () => {
      this.props.startLogin(this.shiftPageAnimation);
   }

   render() {
      if (this.state.authenticated)
         return <Redirect to="/dashboard" />

      const title = (
         <h1 className="login-ui__title">
            Rotten
            &#10;
            Potatoes
         </h1>
      )

      const subTitle = (
         <p>
            We rate movies. Join us!
         </p>
      );

      const loginButton = (
         <button className="button" onClick={this.shiftPageAfterLogin}>
            Login with Google
         </button>
      );

      const textBetweenButtons = (
         <p>
            ------- OR -------
         </p>
      )

      const continueAsGuestButton = (
         <button className="button continueAsGuest" onClick={this.shiftPageAnimation}>
            Continue as guest
         </button>
      );


      return (
         <div className="login-ui__container">
            <div
               className={`login-ui ${this.state.classNames}`}
               onAnimationEnd={goToDashboardPage}>
               {title}

               {
                  !this.state.animationStarted &&
                  <div>
                     {subTitle}
                     <div className="loginButtons">
                        {loginButton}
                        {textBetweenButtons}
                        {continueAsGuestButton}
                     </div>
                     <button className="startAnimation" onClick={this.shiftPageAnimation}>
                        start animation
                     </button>
                  </div>
               }
            </div>
         </div >
      );
   }
}

const mapDispatchToProps = (dispatch) => ({
   startLogin: (callback) => dispatch(startLogin(callback))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
