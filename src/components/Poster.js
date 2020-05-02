import React from 'react';

const Poster = ({url}) => (
   <div className="poster-container">
      {
         url ? 
            <img
               className="poster__custom"
               src={url}
            /> 
            : 
            <img 
               className="poster__default"
            />
      }
   </div>
);

export default Poster;