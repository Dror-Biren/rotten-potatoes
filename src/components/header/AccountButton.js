import React from "react";
import Popup from "reactjs-popup";
import { connect } from 'react-redux';

import AccountPopUp from '../popUps/AccountPopUp';
import { avatarsUrls } from '../../appConsts';

export class AccountButton extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         isPopUpOpen: false
      };
   }

   closeAccountPopUp = () => {
      this.setState({ isPopUpOpen: false });
   }

   openAccountPopUp = () => {
      this.setState({ isPopUpOpen: true });
   }

   render() {
      const { avatarIndex, nickname } = this.props.userPublicData;
      return (
         <div>

            <button
               className="header--button header--myAccount"
               onClick={this.openAccountPopUp}>
               <img className="avatarHeader" src={avatarsUrls[avatarIndex]} />
               <p>{nickname}</p>
            </button>

            <Popup
               open={this.state.isPopUpOpen}
               onClose={this.closeAccountPopUp}>
               <AccountPopUp close={this.closeAccountPopUp} />
            </Popup>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   userPublicData: state.allUsers[state.user.uid]
});

export default connect(mapStateToProps)(AccountButton);