import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <ul id="nav">
         <NavLink to="/user-hall/mythic">
            <li id="nav-item">Mythic+</li>
         </NavLink>
         <NavLink to="/user-hall/raid">
            <li id="nav-item">Raid</li>
         </NavLink>
         <NavLink to="/user-hall/pvp">
            <li id="nav-item">PVP</li>
         </NavLink>
         <NavLink to="/user-hall/statistics">
            <li id="nav-item">Statistics</li>
         </NavLink>
      </ul>
   );
};

export default Navigation;