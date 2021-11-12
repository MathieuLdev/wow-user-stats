import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
   const history = useHistory();

   return (
      <div className="menu">
            <FontAwesomeIcon icon="fa-solid fa-user" onClick={() => history.push('/')}/>
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" onClick={history.goBack}/>
      </div>
   );
};

export default Menu;