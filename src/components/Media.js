import React from 'react';
import { useSelector } from 'react-redux';

const Media = () => {
   const media = useSelector((state) => state.media.value);
   console.log(media);

   return (
      <div>
         Media
         {/* <img src={media?.assets[0]?.value} alt="" /> */}
      </div>
   );
};

export default Media;