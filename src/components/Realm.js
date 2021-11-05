import React from 'react';

const Realm = (props) => {
   const { realm } = props;
   
   return (
      <option>{realm.name}</option>
   );
};

export default Realm;