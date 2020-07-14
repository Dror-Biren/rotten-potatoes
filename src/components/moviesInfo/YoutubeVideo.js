import React from 'react';

const YoutubeVideo = ({ url }) => {

   function getEmbededUrl() {
      if (!url)
         return null;

      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);

      if (match && match[2].length === 11)
         return 'https://www.youtube.com/embed/' + match[2];
   }

   const embededUrl = getEmbededUrl()

   const video = (
      <div className="iframe-container">
         <iframe
            src={embededUrl}
            frameBorder="0"
            //allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
         >
         </iframe>
      </div>
   );

   return (
      embededUrl ? video : null
   );
}

export default YoutubeVideo;

