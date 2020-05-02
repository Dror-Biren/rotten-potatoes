import ReactStars from 'react-stars'
import React from 'react'

const ratingChanged = (newRating) => {
   console.log(newRating)
}

export default class StarsRating2 extends React.Component {
   render() {
      return (
         <ReactStars
            count={5}
            onChange={ratingChanged}
            size={60}
            edit={false}
            value={3.5}
            color1={'#B3B3B3'}
            color2={'#ffd700'} 
            />
      );
   }
}