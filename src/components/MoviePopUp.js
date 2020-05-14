import React from 'react'

import { Button, Popup } from 'semantic-ui-react'

const PopupExample = () => (
  <Popup content={<h1>yo</h1>} 
  trigger={<button>click</button>} />
)

export default PopupExample


/*
import Popup from "reactjs-popup";

console.log({Popup});
 
export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);
*/