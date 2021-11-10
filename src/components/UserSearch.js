import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import apiKey from '../api/api';
import { getMedia } from '../reducers/media';
import { getUserInfo } from '../reducers/user';

const UserSearch = () => {
   const [realms, setRealms] = useState([]);
   const [region, setRegion] = useState();
   const [name, setName] = useState();
   const [characterRealm, setCharacterRealm] = useState();
   const dispatch = useDispatch();
   const history = useHistory();
   const [media, setMedia] = useState();
 

   const toggleRegion = (e) => {
      const tmpRegion = e.target.value;
      setRegion(tmpRegion);
      axios
			.get(`https://${tmpRegion}.api.blizzard.com/data/wow/realm/index?namespace=dynamic-${tmpRegion}&locale=fr_FR&access_token=${apiKey}`)
			.then((res) => setRealms(res.data.realms));
      };

   const transformRealm = () => {
      const selectBox = document.getElementById("realmsList");
      const selectedValue = selectBox.options[selectBox.selectedIndex].id;
      setCharacterRealm(selectedValue);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      
      if ((region && region !== "select") && (characterRealm && characterRealm !== "select") && name) {
         
         dispatch(getUserInfo({
            region,
            characterRealm,
            name,
         }));

         axios
            .get(`https://${region}.api.blizzard.com/profile/wow/character/${characterRealm}/${name}/character-media?namespace=profile-${region}&locale=fr_FR&access_token=${apiKey}`)
            .then((res) => setMedia(res.data))
            .then(() => {
               dispatch(getMedia({
                  media: media
               }));
            })
            .then(() => console.log(media))
            .then(() => history.push("/user-hall"))
         ;
  


      } else {
         document.querySelector('.emptyInput').style.display = 'block';
         document.querySelector('.emptyInput').style.animation = 'dongle 1s'
         setTimeout(() => {
            document.querySelector('.emptyInput').style.display = 'none';
         }, 4000);
      }
   }
   
   return (
         <form id='charachterForm' noValidate onSubmit={handleSubmit}>
         <select id="region" required onChange={(e) => toggleRegion(e)}>
            <option value="select" defaultValue>Select a region</option>
            <option value="eu">EU</option>
            <option value="us">US</option>
         </select>
         { region ? 
            <select id="realmsList" required onChange={transformRealm}>
               <option value="select">Select a realm</option>
               {realms
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((realms) => (
                     <option key={realms.id} id={realms.slug}>{realms.name}</option>))
                  }
            </select>
                  :
                  <select id="realm">
                     <option>Select a realm</option>
                  </select>
         }
         <input type="text" required placeholder="Character name" onChange={(e) => setName(e.target.value.toLowerCase())}/>
         <input type="submit" value="Valider" />
         <p className="emptyInput">Please fill out all the fields</p>
      </form>
   );
};

export default UserSearch;