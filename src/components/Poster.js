import React from 'react';

const Poster = ({ url, className }) => (
   <img 
      className={`poster ${className}`}
      src={url || "/images/defaultPoster.jpg"}
   />
);

export default Poster;