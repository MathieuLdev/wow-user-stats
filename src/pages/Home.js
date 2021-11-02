import React from 'react';
import UserSearch from '../components/UserSearch';

const Home = () => {
   return (
      <div id="home">
         <img className="wow-logo" src="./assets/World_of_Warcraft_Logo.png" alt="wow-logo" />
         <h1 className="welcome">Welcome to WoW User Stats</h1>
         <p className="fill">Fill in the form to see your stats</p>
         <UserSearch />
      </div>
   );
};

export default Home;