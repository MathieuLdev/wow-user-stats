import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import apiKey from '../api/api';
import Media from '../components/Media';
import Menu from '../components/Menu';
import Navigation from '../components/Navigation';

const UserHall = () => {
   const [stats, setStats] = useState();
   const user = useSelector((state) => state.user.value);
   // const media = useSelector((state) => state.media);

   
   useEffect(() => {
      axios
         .get(`https://${user.region}.api.blizzard.com/profile/wow/character/${user.characterRealm}/${user.name}/achievements/statistics?namespace=profile-eu&locale=fr_FR&access_token=${apiKey}`)
         .then((res) => setStats(res.data.categories));
   }, [user])

      console.log(stats);

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