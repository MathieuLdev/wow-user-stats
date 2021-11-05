import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import apiKey from '../api/api';

const UserHall = () => {
   const [data, setData] = useState();
   
   useEffect(() => {

   axios
   .get(`https://eu.api.blizzard.com/profile/wow/character/ysondre/nemoo/character-media?namespace=profile-eu&locale=fr_FR&access_token=${apiKey}`)
   .then((res) => setData(res.data))

}, [])



   return (
      <div>
         <p>Coucou</p>
      </div>
   );
};

export default UserHall;