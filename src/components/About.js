import React from 'react';
import businessCard from '../pics/businessCard.png';

function About() {
  return (
    <div>
      <h1>About US</h1>
      {/* Add your about page content here */}
      <div className="business-card">
          <img src={businessCard} alt="Business Card" />
        </div>
    </div>
    
  );
}

export default About;