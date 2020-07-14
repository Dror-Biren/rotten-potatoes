
import React from "react";

import { maxCommentLength } from '../../appConsts';


export default class CommentPopUp extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         comment: '',
      }
   }

   submitEmpty = () => this.props.submitComment('');

   submitTextareaValue = () => {
      this.props.submitComment(this.state.comment);
   }

   setComment = (event) => {
      const comment = event.target.value;
      this.setState(() => ({ comment }));
   }

   render() {
      return (
         <div className="modal">

            <a className="close" onClick={this.submitEmpty}>
               &times;
            </a>

            <div className="popUpHeader">
               Thank you for rating!
            </div>

            <div className="content">
               Your rating has been received. <br />
               Would you also like to write a short review for this movie? <br />
               (The review will be associated with your account, and visible to everyone)
            </div>

            <textarea
               placeholder="write your review here"
               className="textarea"
               maxLength={maxCommentLength}
               onChange={this.setComment}
            ></textarea>

            <div className="actions">
               <button
                  className="button popUpButton"
                  onClick={this.submitTextareaValue}>
                  publish &nbsp; ✔
               </button>

               <button
                  className="button button--logOut popUpButton"
                  onClick={this.submitEmpty}>
                  delete &nbsp; ✖
               </button>
            </div>
         </div>
      )
   }
}


/*
import React from 'react'

import { Button, Popup } from 'semantic-ui-react'

const PopupExample = () => (
  <Popup content={<h1>yo</h1>}
  trigger={<button>click</button>} />
)

export default PopupExample


import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);
*/