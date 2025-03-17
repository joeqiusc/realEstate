import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="overlay"></div>
      <div className='welcome'>
        <h1>Your Trusted Real Estate Partner</h1>
        <h2>Serving Mid Jersey Area</h2>
        <p>Save Time. Avoid Hassle.</p>
        <p>Let Us Understand Your Needs!</p>
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
        <h4>Mobile: (609) 580-9749</h4>
        <h4>Email: <a href="mailto:joeqiu19@gmail.com" className="email-link">joeqiu19@gmail.com</a></h4>
        <h4>Address: 856 US-206 Building B Suite 13-B, Hillsborough Township, NJ 08844</h4>
      </div>
    </div>
  );
}

export default Home;