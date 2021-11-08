import axios from 'axios';
import React, { useState } from 'react';
import apiKey from '../api/api';

const UserSearch = () => {
   const [realm, setRealm] = useState([]);
   const [region, setRegion] = useState();
   const [name, setName] = useState();
   const [characterRealm, setCharacterRealm] = useState();

   const toggleRegion = (e) => {
      const tmpRegion = e.target.value;

      setRegion(tmpRegion);
      axios
			.get(`https://${tmpRegion}.api.blizzard.com/data/wow/realm/index?namespace=dynamic-${tmpRegion}&locale=fr_FR&access_token=${apiKey}`)
			.then((res) => setRealm(res.data.realms));

      };

      // useEffect(() => {

      // }, [region])


   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(characterRealm);
      console.log(region);
      console.log(name);

      if ((region && region !== "select") && (realm && realm !== "select") && name) {
         window.location.href = "/user-hall";
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
            <option value="EU">EU</option>
            <option value="US">US</option>
         </select>
         { region ? 
            <select id="realm" required onChange={(e) => setCharacterRealm(e.target.value)}>
               <option value="select">Select a realm</option>
               {realm
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((realm) => (
                     <option key={realm.id}>{realm.name}</option>))
                  }
            </select>
                  :
                  <select id="realm">
                     <option>Select a realm</option>
                  </select>
         }
         <input type="text" required placeholder="Character name" onChange={(e) => setName(e.target.value)}/>
         <input type="submit" value="Valider" />
         <p className="emptyInput">Please fill out all the fields</p>
      </form>
   );
};

export default UserSearch;