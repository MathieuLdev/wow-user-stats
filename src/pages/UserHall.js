import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiKey from '../api/api';
import Media from '../components/Media';
import Menu from '../components/Menu';
import Navigation from '../components/Navigation';
import { getMedia } from '../reducers/media';

const UserHall = () => {
   const [stats, setStats] = useState();
   const user = useSelector((state) => state.user.value);
   const [media, setMedia] = useState();
   const dispatch = useDispatch();

   useEffect(() => {
      axios
      .get(`https://${user.region}.api.blizzard.com/profile/wow/character/${user.characterRealm}/${user.name}/character-media?namespace=profile-${user.region}&locale=fr_FR&access_token=${apiKey}`)
      .then((res) => setMedia(res.data))

      dispatch(getMedia({
         media: media
      }));
   }, [user]);
   console.log(media?.assets[0].value);

   useEffect(() => {
      axios
         .get(`https://${user.region}.api.blizzard.com/profile/wow/character/${user.characterRealm}/${user.name}/achievements/statistics?namespace=profile-eu&locale=fr_FR&access_token=${apiKey}`)
         .then((res) => setStats(res.data.categories));
         console.log(stats);
   }, [user])


   return (
      <div id="userHall">
         <Menu />
         <p id="userHallTitle">{user.name}</p>
         <div id="userHallDisplay">
            <Media />
            <Navigation stats={stats}/>
         </div>
      </div>
   );
};

export default UserHall;