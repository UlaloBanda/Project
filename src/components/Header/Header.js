import React from 'react';
import logo from '../../assests/sslogo.png';

import './Header.css';

function Header() {
  return (
    <div className='header'>
        <img src={logo} class='img-circle'/>
        <h1 className='title'>Unima Lecture Theatre.</h1>
    </div>
  );
}

export default Header;
