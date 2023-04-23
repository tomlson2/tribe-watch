import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import './SmallHeader.css';

const SmallHeader = () => {
  return (
    <header className="small-header">
      <div className="small-icon-text-container">
        <Logo className="logo" />
        <h1 className="title">
          <a href="/" className="link">
            proof.community
          </a>
        </h1>
      </div>
      <button className="access-more-btn"><a href="/more">access more →</a></button>
    </header>
  );
};

export default SmallHeader;
