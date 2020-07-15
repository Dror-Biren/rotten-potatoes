import React from 'react';

import Poster from './Poster';

export default ({ onSelectPoster, onRemovePoster, posterUrl, isRemoveButtonExist }) => (
   <div className="selectPoster">
      <Poster url={posterUrl} />

      <div className="uploadPosterButtons">
         <label htmlFor="poster-upload" className="button">
            <p className="uploadPoster-text">
               Upload poster
            </p>
            <i className="fa fa-cloud-upload"></i> 
         </label>

         <input
            type="file"
            id="poster-upload"
            name="poster"
            accept="image/png, image/jpeg, image/jpg"
            onChange={onSelectPoster}
         ></input>

         {
            isRemoveButtonExist
            &&
            <button
               className="button button--cancel"
               onClick={onRemovePoster}>
               Remove poster
            </button>
         }
      </div>
   </div>
);