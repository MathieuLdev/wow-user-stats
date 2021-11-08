import React from 'react';
import UserSearch from '../components/UserSearch';

const Home = () => {



   return (
      <div id="home">
         <img className="wow-logo" src="./assets/World_of_Warcraft_Logo.png" alt="wow-logo" />
         <h1 className="welcome">Welcome to WoW User Stats</h1>
         <UserSearch />
      </div>
   );
};

export default Home;