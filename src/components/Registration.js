import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/Registration.css';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    // Reset error message
    setError('');

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Mock function to simulate sending data to a backend service
    const registerUser = (email, password) => {
      console.log('Registering user:', email);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate a successful registration
          resolve(true);
        }, 1000);
      });
    };

    // Call the mock function to register the user
    registerUser(email, password)
      .then((result) => {
        if (result) {
          console.log('Registration successful');
          // Navigate to the sign-in page after successful registration
          navigate('/signin');
        } else {
          setError('Registration failed. Please try again.');
        }
      })
      .catch((err) => {
        setError('An error occurred. Please try again.');
        console.error(err);
      });
  };

  return (
    <Container maxWidth="sm" className="registration-container">
      <Box mt={4} className="form-box">
        <form onSubmit={handleRegistration}>
          <Typography variant="h4" gutterBottom>
            Register
          </Typography>

          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <TextField
            fullWidth
            margin="normal"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <Box mt={2} className="buttons">
            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default Registration;