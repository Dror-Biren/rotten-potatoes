import React from 'react';
import ReactStars from 'react-stars';
import moment from 'moment';

export default function StaticStarsRating({ rating, time }) {
   return (
      <div className="staticRating">
         <ReactStars
            count={5}
            size={30}
            edit={false}
            value={rating}
            color1={'#B3B3B3'}
            color2={'#ffd700'}
         />
         <p>{moment(time).fromNow()}</p>
      </div>
   );
}