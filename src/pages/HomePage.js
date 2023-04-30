import React from 'react';
import './HomePage.css';
import SmallHeader from '../components/SmallHeader';
import TotalMessageCount from '../components/TotalMessageCount';
import ScrollingIcons from '../components/ScrollingIcons';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <SmallHeader centerContent={<h2></h2>} buttonText="dashboard" buttonHref="/dashboard" />
            <div className="home-container">
                <h1 className="home-title">
                    Discover Web3 ventures<span><br />through proof of community</span>
                </h1>
                <div className="home-content">
                    <p>The platform for projects and investors that value builders & contributors.</p>
                </div>
                <TotalMessageCount className="chart-container" />
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;
