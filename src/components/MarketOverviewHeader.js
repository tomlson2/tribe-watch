import React from 'react';
import './MarketOverviewHeader.css';
import { Link } from 'react-router-dom';

const MarketOverviewHeader = () => {
  return (
    <div className="market-overview-header">
      <span className="market-overview-title">NFT Overview</span>
      <Link to="/dashboard" className="market-overview-link">...dashboard</Link>
    </div>
  );
};

export default MarketOverviewHeader;
