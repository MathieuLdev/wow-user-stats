import axios from 'axios';
import React, { useState } from 'react';
import {isEmpty} from './Utils';
import Realm from './Realm';
import apiKey from '../api/api' 

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

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name);
      console.log(characterRealm);
   }
   
   return (
      <form id='charachterForm' noValidate onSubmit={handleSubmit}>
         <select id="region" required onChange={(e) => toggleRegion(e)}>
            <option value="select" defaultValue>Select a region</option>
            <option value="EU">EU</option>
            <option value="US">US</option>
         </select>
         { !isEmpty(region) ? 
            <select id="realm" required onChange={(e) => setCharacterRealm(e.target.value)}>
               <option>Select a realm</option>
               {realm
                  .sort((a, b) => {return b.name - a.name})
                  .map((realm) => (
                     <Realm realm={realm} key={realm.id}/>))
                  }
            </select>
                  :
                  <select id="realm">
                     <option>Select a realm</option>
                  </select>
         }
         <input type="text" required placeholder="Character name" onChange={(e) => setName(e.target.value)}/>
         <input type="submit" value="Valider" />
      </form>
   );
};

export default UserSearch;