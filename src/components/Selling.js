import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, MenuItem, Button, Typography, Container, Box } from '@mui/material';
import '../styles/Selling.css';

function Selling() {
  const [budget, setBudget] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [address, setAddress] = useState('');
  const [dateToSell, setDateToSell] = useState('');
  const navigate = useNavigate();

  const handleSellingPlanSubmit = (e) => {
    e.preventDefault();
    if (!budget || !propertyType || !address || !dateToSell) {
      alert('Please fill in all fields.');
      return;
    }
    const inquiry = {
      inquiryType: 'Selling',
      budget: budget,
      propertyType: propertyType,
      address: address,
      dateToSell: dateToSell,
    };
    navigate('/contact-form', { state: { inquiryData: inquiry } });
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <form onSubmit={handleSellingPlanSubmit}>
          <Typography variant="h4" gutterBottom>
            Selling Plan
          </Typography>
          
          <TextField
            fullWidth
            margin="normal"
            select
            label="What price are you hoping to list at?"
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
            label="What type of property are you selling?"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            required
          >
            <MenuItem value="Single Family House">Single Family House</MenuItem>
            <MenuItem value="Town House">Town House</MenuItem>
            <MenuItem value="Condo">Condo</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>

          <TextField
            fullWidth
            margin="normal"
            select
            label="When do you plan to sell your home?"
            value={dateToSell}
            onChange={(e) => setDateToSell(e.target.value)}
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
            label="What is the address of your property?"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address"
            required
          />

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

export default Selling;