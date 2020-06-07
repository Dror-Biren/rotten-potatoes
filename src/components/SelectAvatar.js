import React from "react";
import { avatarsUrls } from './../appConsts';

//import avatar1 from "./avatar1.jpg";
//const avatar1 = require('./avatar1.jpg')



export class SelectAvatar extends React.Component {

   render() {

      const avatars = [];
      avatarsUrls.forEach((imgUrl, index) => {
         avatars.push(
            <input 
               id={'' + index} 
               type="radio" 
               checked={index === this.props.avatarIndex}
            />
         );

         avatars.push(
            <label
               className="avatarOption"
               htmlFor={'' + index}
               style={{ backgroundImage: `url(${imgUrl})` }}
               onClick={() => this.props.onAvatarChange(index)}
            ></label>
         )
      });

      return (
         <form>
            <p>
               Choose your avatar:
            </p>
            <div className="avatarSelector">
               {avatars}
            </div>
         </form>
      );
   }
}

/*
   <input id="mastercard" type="radio" />
               <label
                  className="avatarOption"
                  htmlFor="mastercard"
                  style={{ backgroundImage: `url(${avatarsUrls[1]})` }}
               ></label>

   <input id="visa" type="radio" onChange={() =>this.props.onAvatarChange(1)} />
               <label htmlFor="visa">
                  <img src="http://i.imgur.com/SJbRQF7.png" className="avatarOption"/>
               </label>

               <input id="visa2" type="radio" onChange={() =>this.props.onAvatarChange(1)} />
               <label htmlFor="visa2">
                  <img src="http://i.imgur.com/lXzJ1eB.png" className="avatarOption"/>
               </label>

*/