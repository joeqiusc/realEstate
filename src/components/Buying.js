import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Ensure Link is imported here
import { TextField, MenuItem, Button, Typography, Container, Box } from '@mui/material';
import '../styles/Buying.css';

function Buying() {
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [mortgageStatus, setMortgageStatus] = useState('');
  const [dateToBuy, setDateToBuy] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const navigate = useNavigate();

  const handleBuyingPlanSubmit = (e) => {
    e.preventDefault();
    if (!location || !budget || !mortgageStatus || !dateToBuy || !propertyType || !bedrooms || !bathrooms) {
      alert('Please fill in all fields.');
      return;
    }
    const inquiry = {
      inquiryType: 'Buying',
      details: `Location: ${location}, Mortgage Status: ${mortgageStatus}, Plan to Buy: ${dateToBuy}, Property Type: ${propertyType}, Bedrooms: ${bedrooms}, Bathrooms: ${bathrooms}`,
      priceRange: budget,
      address: location,
      budget: budget,
      dateToBuy: dateToBuy,
      mortgageStatus: mortgageStatus,
      propertyType: propertyType,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
    };
    navigate('/contact-form', { state: { inquiryData: inquiry } });
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <form onSubmit={handleBuyingPlanSubmit}>
          <Typography variant="h4" gutterBottom>
            Buying Plan
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            required
          />

          <TextField
            fullWidth
            margin="normal"
            select
            label="What is your budget?"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          >
            <MenuItem value="Less than $400,000">Less than $400,000</MenuItem>
            <MenuItem value="$400,000 - $500,000">$400,000 - $500,000</MenuItem>
            <MenuItem value="$500,000 - $600,000">$500,000 - $600,000</MenuItem>
            <MenuItem value="$600,000 - $700,000">$600,000 - $700,000</MenuItem>
            <MenuItem value="$700,000 - $800,000">$700,000 - $800,000</MenuItem>
            <MenuItem value="$800,000 - $900,000">$800,000 - $900,000</MenuItem>
            <MenuItem value="$900,000 - $1,000,000">$900,000 - $1,000,000</MenuItem>
            <MenuItem value="More than $1,000,000">More than $1,000,000</MenuItem>
          </TextField>

          <TextField
            fullWidth
            margin="normal"
            select
            label="What type of property are you looking for?"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            required
          >
            <MenuItem value="Single Family House">Single Family House</MenuItem>
            <MenuItem value="Town House">Town House</MenuItem>
            <MenuItem value="Condo">Condo</MenuItem>
            <MenuItem value="Apartment">Apartment</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>

          <TextField
            fullWidth
            margin="normal"
            select
            label="Number of Bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            required
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5+">5+</MenuItem>
          </TextField>

          <TextField
            fullWidth
            margin="normal"
            select
            label="Number of Bathrooms"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            required
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5+">5+</MenuItem>
          </TextField>

          <TextField
            fullWidth
            margin="normal"
            select
            label="When do you plan to buy a home?"
            value={dateToBuy}
            onChange={(e) => setDateToBuy(e.target.value)}
            required
          >
            <MenuItem value="Immediately">Immediately</MenuItem>
            <MenuItem value="Within one month">Within one month</MenuItem>
            <MenuItem value="One to three months">One to three months</MenuItem>
            <MenuItem value="After three months">After three months</MenuItem>
          </TextField>

          <TextField
            fullWidth
            margin="normal"
            select
            label="What is your Mortgage Status?"
            value={mortgageStatus}
            onChange={(e) => setMortgageStatus(e.target.value)}
            required
          >
            <MenuItem value="All Cash">All Cash</MenuItem>
            <MenuItem value="Haven't Applied">Haven't Applied</MenuItem>
            <MenuItem value="Pre-qualified">Pre-qualified</MenuItem>
            <MenuItem value="Pre-approved">Pre-approved</MenuItem>
            <MenuItem value="Not Sure">Not Sure</MenuItem>
          </TextField>

          <Box mt={2} className="buttons">
            <Button variant="contained" component={Link} to="/" sx={{ mr: 1 }}>
              Home
            </Button>
            <Button variant="contained" onClick={() => navigate(-1)} sx={{ mr: 1 }}>
              Back
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Next
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default Buying;