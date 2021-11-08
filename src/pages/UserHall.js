import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import apiKey from '../api/api';
import Media from '../components/Media';
import Navigation from '../components/Navigation';

const UserHall = () => {
   const [media, setMedia] = useState();

   const user = useSelector((state) => state.user.value)


   useEffect(() => {
   axios
      .get(`https://${user.region}.api.blizzard.com/profile/wow/character/${user.characterRealm}/${user.name}/character-media?namespace=profile-eu&locale=fr_FR&access_token=${apiKey}`)
      .then((res) => setMedia(res.data))
}, [])



   return (
      <div id="userHall">
         <p id="userHallTitle">{user.name}</p>
         <div id="userHallDisplay">
            <Media media={media}/>
            <Navigation />
         </div>
      </div>
   );
};

export default UserHall;