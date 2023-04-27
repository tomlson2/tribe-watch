import React, { useState, useEffect } from 'react';
import './ScrollingIcons.css';

const ScrollingIcons = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const response = await fetch('https://tribewatch.azurewebsites.net/api/channels');
        const data = await response.json();
        setIcons(data);
      } catch (error) {
        console.error('Error fetching icons:', error);
      }
    };

    fetchIcons();
  }, []);

  return (
    <div className="scrolling-icons-container">
      <div className="scrolling-icons-wrapper">
        <div className="scrolling-icons">
          {icons.map((item, index) => (
            <img
              key={`icon1-${index}`}
              className="scrolling-icon"
              src={`https://cdn.discordapp.com/icons/${item.guild_id}/${item.icon}.png`}
              alt={`Channel ${index}`}
            />
          ))}
          {icons.map((item, index) => (
            <img
              key={`icon2-${index}`}
              className="scrolling-icon"
              src={`https://cdn.discordapp.com/icons/${item.guild_id}/${item.icon}.png`}
              alt={`Channel ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingIcons;
