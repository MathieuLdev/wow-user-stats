import React from 'react';

const Realm = (props) => {
   const { realm } = props;
   
   return (
      <option>{realm.slug}</option>
   );
};

export default Realm;