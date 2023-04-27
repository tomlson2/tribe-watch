import React from 'react';
import './HeaderContainer.css';

const HeaderContainer = ({ onHeaderFilterClick, onTimeFilterClick, activeHeaderFilter, activeTimeFilter }) => {
    return (
        <div className="header-container">
            <div className="left-group">
                <h2 onClick={() => onHeaderFilterClick("top")} className={activeHeaderFilter === "top" ? "active-filter" : ""}>top</h2>
            </div>
            <div className="right-group">
                <h3 id="1" onClick={() => onTimeFilterClick(1)} className={activeTimeFilter === 1 ? "active-filter" : ""}>1h</h3>
                <h3 id="6" onClick={() => onTimeFilterClick(6)} className={activeTimeFilter === 6 ? "active-filter" : ""}>6h</h3>
                <h3 id="12" onClick={() => onTimeFilterClick(12)} className={activeTimeFilter === 12 ? "active-filter" : ""}>12h</h3>
                <h3 id="24" onClick={() => onTimeFilterClick(24)} className={activeTimeFilter === 24 ? "active-filter" : ""}>24h</h3>
            </div>
        </div>
    );
};


export default HeaderContainer;
