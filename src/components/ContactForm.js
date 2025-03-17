import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { useLocation, useNavigate, Link } from 'react-router-dom';

function ContactForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { inquiryData } = location.state || {};

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const contactInfo = {
      firstName,
      lastName,
      email,
      phone,
    };

    // Determine the type of inquiry and set the appropriate field
    const contactRequestDTO = {
      contactInfo,
      buyingInquiry: inquiryData.inquiryType === 'Buying' ? inquiryData : null,
      sellingInquiry: inquiryData.inquiryType === 'Selling' ? inquiryData : null,
      landlordInquiry: inquiryData.inquiryType === 'Landlord' ? inquiryData : null,
      tenantInquiry: inquiryData.inquiryType === 'Tenant' ? inquiryData : null,
    };

    // Log the request data for debugging
    console.log('Submitting inquiry:', contactRequestDTO);

    try {
      const response = await axios.post('http://localhost:8080/api/contact-form', contactRequestDTO);
      console.log('Inquiry submitted successfully:', response.data);
      alert('Your inquiry is submitted. Our agent will contact you soon.');
      navigate('/');
    } catch (error) {
      console.error('There was an error submitting the inquiry!', error);
      setError(error.response?.data?.message || 'An error occurred.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Contact Information
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {error && (
            <Typography variant="body2" color="error" gutterBottom>
              {error}
            </Typography>
          )}
          <Box mt={2} className="buttons">
            <Button variant="contained" component={Link} to="/" sx={{ mr: 1 }}>
              Home
            </Button>
            <Button variant="contained" onClick={() => navigate(-1)} sx={{ mr: 1 }}>
              Back
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default ContactForm;