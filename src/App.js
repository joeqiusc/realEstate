import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Buying from './components/Buying';
import Selling from './components/Selling';
import Renting from './components/Renting';
import ContactForm from './components/ContactForm';
import SignIn from './components/SignIn';
import Landlord from './components/Landlord'; 
import Navbar from './components/Navbar';
import About from './components/About'; 
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/buying" element={<Buying />} />
        <Route path="/selling" element={<Selling />} />
        <Route path="/renting" element={<Renting />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/landlord" element={<Landlord />} /> {/* Add the Landlord route */}
      </Routes>
    </Router>
  );
}

export default App;