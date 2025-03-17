import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, MenuItem, Button, Typography, Container, Box } from '@mui/material';
import '../styles/Landlord.css';

function Landlord() {
  const [price, setPrice] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [address, setAddress] = useState('');
  const [bestMovingDate, setBestMovingDate] = useState('');
  const [tenantRequirements, setTenantRequirements] = useState('');
  const navigate = useNavigate();

  const handleLandlordPlanSubmit = (e) => {
    e.preventDefault();
    if (!price || !propertyType || !address || !bestMovingDate || !tenantRequirements) {
      alert('Please fill in all fields.');
      return;
    }
    const inquiry = {
      inquiryType: 'Landlord',
      price: price,
      propertyType: propertyType,
      address: address,
      listingDate: bestMovingDate,
      message: tenantRequirements,
    };
    navigate('/contact-form', { state: { inquiryData: inquiry } });
  };

  return (
    <Container maxWidth="md" className="landlord-container">
      <Box mt={4} className="form-box">
        <form onSubmit={handleLandlordPlanSubmit}>
          <Typography variant="h4" gutterBottom>
            Landlord Information
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            select
            label="What price are you hoping to list at?"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          >
            <MenuItem value="Less than $2,000">Less than $2,000</MenuItem>
            <MenuItem value="$2,000 - $2,500">$2,000 - $2,500</MenuItem>
            <MenuItem value="$2,500 - $3,000">$2,500 - $3,000</MenuItem>
            <MenuItem value="$3,000 - $3,500">$3,000 - $3,500</MenuItem>
            <MenuItem value="$3,500 - $4,000">$3,500 - $4,000</MenuItem>
            <MenuItem value="More than $4,000">More than $4,000</MenuItem>
          </TextField>

          <TextField
            fullWidth
            margin="normal"
            select
            label="What kind of property are you listing?"
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
            label="What is the best move-in date?"
            value={bestMovingDate}
            onChange={(e) => setBestMovingDate(e.target.value)}
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

          <TextField
            fullWidth
            margin="normal"
            label="Requirements for the Tenant"
            value={tenantRequirements}
            onChange={(e) => setTenantRequirements(e.target.value)}
            placeholder="Enter specific requirements (e.g., credit score, pets, etc. if no requirement put NA)"
            multiline
            rows={4}
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

export default Landlord;