import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../styles/Home.css';
import businessCard from '../pics/businessCard.png';

function Home() {
  return (
    <div>
      <div className="home">
        <div className="overlay"></div>
        <div className="business-card">
          <img src={businessCard} alt="Business Card" />
        </div>
        <div className='welcome'>
          <h1>Your Trusted Real Estate Partner In Mid Jersey Area.</h1>
        </div>
        <div className="buttons">
          <Button variant="contained" color="primary" component={Link} to="/buying">
            I am buying
          </Button>
          <Button variant="contained" color="primary" component={Link} to="/selling">
            I am selling
          </Button>
          <Button variant="contained" color="primary" component={Link} to="/renting">
            I am renting
          </Button>
        </div>
        <div className='office'>
          <h4>Mobile: <a href="tel:+16095809749">(609) 580-9749</a></h4>
          <h4>Email: <a href="mailto:joeqiu19@gmail.com">joeqiu19@gmail.com</a></h4>
          <h4>Address: 856 US-206 Building B Suite 13-B, Hillsborough Township, NJ 08844</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;