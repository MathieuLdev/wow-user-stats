import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import apiKey from '../api/api';

const UserHall = () => {
   const [data, setData] = useState();
   const user = useSelector((state) => state.user.value)


   useEffect(() => {
   axios
      .get(`https://${user.region}.api.blizzard.com/profile/wow/character/${user.characterRealm}/${user.name}/character-media?namespace=profile-eu&locale=fr_FR&access_token=${apiKey}`)
      .then((res) => setData(res.data))
}, [])



   return (
      <div>
         <p>Coucou {user.name}</p>
         {/* <img src={data.assets[1].value} alt="" height='200px'/> */}
      </div>
   );
};

export default UserHall;