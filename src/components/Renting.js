import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';
import '../styles/Renting.css';

const Renting = () => {
    const navigate = useNavigate();

    const handleLandlordClick = () => {
        navigate('/landlord');
    };

    const handleTenantClick = () => {
        navigate('/tenant');
    };

    return (
        <Container className="renting-container">
            <Typography variant="h4" className="renting-title" gutterBottom>
                Renting
            </Typography>
            <Box className="renting-box">
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleLandlordClick}
                    className="renting-button"
                >
                    I am a Landlord
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleTenantClick}
                    className="renting-button"
                >
                    I am a Tenant
                </Button>
            </Box>
        </Container>
    );
};

export default Renting;