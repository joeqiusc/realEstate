import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, MenuItem, Button, Typography, Container, Box, Grid } from '@mui/material';
import '../styles/Tenant.css';

function Tenant() {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [moveInDate, setMoveInDate] = useState('');
  const [tenantPreferences, setTenantPreferences] = useState('');
  const [creditScore, setCreditScore] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const navigate = useNavigate();

  const handleTenantPlanSubmit = (e) => {
    e.preventDefault();
    if (!location || !priceRange || !propertyType || !moveInDate || !tenantPreferences || !creditScore || !bedrooms || !bathrooms) {
      alert('Please fill in all fields.');
      return;
    }
    const inquiry = {
      inquiryType: 'Tenant',
      location: location,
      budget: priceRange,
      propertyType: propertyType,
      moveInDate: moveInDate,
      message: tenantPreferences,
      creditScore: creditScore,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
    };
    navigate('/contact-form', { state: { inquiryData: inquiry } });
  };

  return (
    <Container maxWidth="md" className="tenant-container">
      <Box mt={4} className="form-box">
        <form onSubmit={handleTenantPlanSubmit}>
          <Typography variant="h4" gutterBottom>
            Tenant Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="Where are you looking for renting?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city or neighborhood"
                required
              />

              <TextField
                fullWidth
                margin="normal"
                select
                label="What is your budget range?"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
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
                label="When do you plan to move in?"
                value={moveInDate}
                onChange={(e) => setMoveInDate(e.target.value)}
                required
              >
                <MenuItem value="Immediately">Immediately</MenuItem>
                <MenuItem value="Within one month">Within one month</MenuItem>
                <MenuItem value="One to three months">One to three months</MenuItem>
                <MenuItem value="After three months">After three months</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                label="What is your current credit score?"
                value={creditScore}
                onChange={(e) => setCreditScore(e.target.value)}
                placeholder="Enter your credit score"
                required
              />

              <TextField
                fullWidth
                margin="normal"
                select
                label="Number of Bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                required
              >
                <MenuItem value="Studio">Studio</MenuItem>
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
            </Grid>
          </Grid>
          <TextField
            fullWidth
            margin="normal"
            label="Do you have any specific preferences?"
            value={tenantPreferences}
            onChange={(e) => setTenantPreferences(e.target.value)}
            placeholder="Enter preferences (e.g., amenities, pet-friendly, etc.)"
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

export default Tenant;