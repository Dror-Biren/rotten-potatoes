
import React from "react";
import { connect } from 'react-redux';

import { startLogout } from '../../actions/user';
import { startEditUser } from '../../actions/allUsers';

import { history } from '../../routers/AppRouter';
import { maxNicknameLength } from '../../appConsts';
import { SelectAvatar } from './SelectAvatar'

export class AccountPopUp extends React.Component {
   constructor(props) {
      super(props)
      this.state = this.props.userPublicData //{nickname, avatarIndex}     
   }

   saveChanges = () => {
      const { nickname, avatarIndex } = this.state;
      if (!nickname)
         return alert("Your nickname cannot be empty");
      this.props.startEditUser({ nickname, avatarIndex });
      this.props.close();
   }

   setNickname = (event) => {
      const nickname = event.target.value;
      this.setState({ nickname });
   }

   onAvatarChange = (avatarIndex) => {
      this.setState({ avatarIndex });
   }

   render() {
      return (
         <div className="modal">

            <a className="close" onClick={this.props.close}>
               &times;
            </a>

            <div className="popUpHeader">
               My accont
            </div>

            <div className="choseNickname">
               <label>
                  Choose your nickname:
               </label>

               <input
                  className="text-input"
                  type="text"
                  placeholder=" write here"
                  value={"" + this.state.nickname}
                  maxLength={maxNicknameLength}
                  onChange={this.setNickname}
               ></input>
            </div>

            <SelectAvatar
               avatarIndex={this.state.avatarIndex}
               onAvatarChange={this.onAvatarChange}
            />

            <div className="actions bottom-border">
               <button
                  className="button popUpButton"
                  onClick={this.saveChanges}>
                  save &nbsp; ✔
               </button>

               <button
                  className="button button--cancel popUpButton"
                  onClick={this.props.close}>
                  cancel &nbsp; ✖
               </button>
            </div>

            <br />
            <button
               className="button button--logOut popUpButton"
               onClick={this.props.startLogout}>
               Log-out &nbsp; <span> ↪ </span>
            </button>
         </div>
      )
   }
}

const mapStateToProps = state => ({
   userPublicData: state.allUsers[state.user.uid]
});

const mapDispatchToProps = dispatch => ({
   startEditUser: (updates) => dispatch(startEditUser(updates)),
   startLogout: () => {
      if (confirm("Are you sure you want to log-out?")) {
         dispatch(startLogout());
         const returnToLoginPage = () => history.push('/');
         setTimeout(returnToLoginPage, 700);
      }
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPopUp);


/*
      import ThemeSwitch from './ThemeSwitch';
      <div className="choseNickname">
         <label>Choose your preferred theme:</label>

         <ThemeSwitch />
      </div>
*/