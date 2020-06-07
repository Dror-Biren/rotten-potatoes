import React from 'react';
import { connect } from 'react-redux';
import Switch from "react-switch";

import { setThemeIndex } from '../actions/user';
import { startEditUser } from '../actions/allUsers';

export class ThemeSwitch extends React.Component {
   
   constructor(props) {
      super(props);

      this.state = { 
         checked: props.themeIndex == 1 
      };
   }

   handleChange = (checked) => {
      this.setState({ checked });
      const newThemeIndex = checked? 1 : 0;
      const changeTheme = () => this.props.setThemeIndex(newThemeIndex);
      setTimeout(changeTheme, 300);   
   }

   render() {
      const getStyle = (isDark) => ({
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         height: "100%",
         fontSize: 21,
         paddingRight: isDark? 10 : 0,
         paddingLeft: isDark? 0 : 10
      });

      const brightIcon = (
         <div style={getStyle(false)}>
            🌞
         </div>
      );

      const darkIcon = (
         <div style={getStyle(true)}>
            🌜
         </div>
      );

      return (
         <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            height={35}
            handleDiameter={25}
            width={100}
            onColor="#635372"
            offColor='#EEF2BF'
            onHandleColor="#A0BFBE"
            offHandleColor="#5A7675"
            uncheckedIcon={brightIcon}
            checkedIcon={darkIcon}
            className={this.props.className}
            id="icon-switch"
         />
      );
   }
}

const mapStateToProps = (state) => ({
   themeIndex: state.user.themeIndex
});

const mapDispatchToProps = (dispatch) => ({
   setThemeIndex: (themeIndex) => {
      dispatch(setThemeIndex(themeIndex))
      dispatch(startEditUser({ themeIndex }))
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);