import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import './SmallHeader.css';

const SmallHeader = ({ centerContent }) => {
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
      <div className="center-content">{centerContent}</div>
      <button className="access-more-btn"><a href="/dashboard">dashboard →</a></button>
    </header>
  );
};

export default SmallHeader;
