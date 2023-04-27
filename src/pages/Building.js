import React from 'react';
import './AccessMore.css';
import SmallHeader from '../components/SmallHeader';

const AccessMore = () => {
    return (
        <>
            <SmallHeader centerContent={<h2></h2>} buttonText="" buttonHref="" />
            <div className="access-more-container">
                <div className="access-more-box">
                    <div className="loading">Building...</div>
                    <p className="access-more-text">
                        be back soon!
                    </p>
                </div>
            </div>
        </>
    );
};

export default AccessMore;
