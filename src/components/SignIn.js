import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);

    // Navigate to the home page after sign-in
    navigate('/');
  };

  return (
    <Container maxWidth="sm" className="signin-container">
      <Box mt={4} className="form-box">
        <form onSubmit={handleSignIn}>
          <Typography variant="h4" gutterBottom>
            Sign In
          </Typography>

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

          <Box mt={2} className="buttons">
            <Button variant="contained" color="primary" type="submit">
              Sign In
            </Button>
          </Box>

          <Box mt={2} className="register-link">
            <Typography variant="body2">
              Don't have an account? <Link href="/registration">Register</Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default SignIn;