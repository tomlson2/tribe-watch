import React from 'react';
import './AccessMore.css';
import SmallHeader from '../components/SmallHeader';

const AccessMore = () => {
    return (
        <div>
            <SmallHeader />
            <div className="access-more-container">
                <div className="access-more-box">
                <div className="loading">Data Loading...</div>
                    <p className="access-more-text">
                        Are you a trader, builder, or founder
                        interested in more access to proof of community?
                    </p>
                    <button className="access-more-signup-btn"><a href='https://forms.gle/QPzZBhw7U66ZmNBr7'>sign up for more</a></button>
                </div>
            </div>
        </div>
    );
};

export default AccessMore;
