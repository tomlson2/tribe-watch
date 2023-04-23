import React from 'react';
import {ReactComponent as Logo} from '../assets/logo.svg'

const SmallHeader = () => {
  return (
    <header className="small-icon-text-container">
      <Logo className="logo" />
      <h1 className="title"><a href= '/' className='link'>TW</a></h1>
    </header>
  );
};

export default SmallHeader;
