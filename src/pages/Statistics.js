import React from 'react';
import { useLocation } from 'react-router';

const Statistics = () => {
   const location = useLocation();
   // const stats = location.state.stats;
   console.log(location.state.stats[2].statistics[2].name);

   return (
      <div>
         Statistics
         <p>{location.state.stats[2].statistics[2].name}: {location.state.stats[2].statistics[2].quantity}</p>
      </div>
   );
};

export default Statistics;