import React from 'react';
import './HomePage.css';
import SmallHeader from '../components/SmallHeader';
import TotalMessageCount from '../components/TotalMessageCount';
import ScrollingIcons from '../components/ScrollingIcons';

const HomePage = () => {
    return (
        <div>
            <SmallHeader centerContent={<h2>HOME</h2>} />
            <div className="home-container">
                <h1 className="home-title">
                    Discover Web3 growth<span><br />through proof of community</span>
                </h1>
                <div className="home-content">
                    <p>
                        The platform for those looking to find projects that value community.
                    </p>
                </div>
                <TotalMessageCount className="chart-container" />
                <footer className="home-footer">
                    <p>&copy; 2023 proof.community. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default HomePage;
