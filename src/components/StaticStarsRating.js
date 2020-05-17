import React from 'react';
import ReactStars from 'react-stars';

export default function StaticStarsRating({ rating }) {
   return (
      <ReactStars
         count={5}
         size={30}
         edit={false}
         value={rating}
         color1={'#B3B3B3'}
         color2={'#ffd700'}
      />
   );
}