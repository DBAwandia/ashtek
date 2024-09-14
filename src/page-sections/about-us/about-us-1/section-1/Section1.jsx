import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Modal from '@/components/modal';

// CUSTOM COMPONENT
import FancyText from '@/components/fancy-text';
// STYLED COMPONENT
import { StyledRoot } from './styles';
import CustomCardMedia from '../video-card.jsx/CardMedia';
import DemoRequestForm from '../form/DemoRequestForm';

export default function Section1() {
  const [showVideo, setShowVideo] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleWatchVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  const handleRequestDemo = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form Submitted:', formData);
    // You can add logic here to submit the form data to an API or server.
  };

  return (
    <StyledRoot>
      <Box 
        sx={{ display: "flex",position:"relative", flexDirection: "column", gap: "2rem", textAlign: "center", 
          width: {
          xs: "95%",  // 95% width on small screens
          md: "70%"   // 70% width on medium and larger screens
        },  
        justifySelf: "center" 
      }}
      >
        {showVideo && (
          <Modal open={showVideo} handleClose={handleCloseVideo}>
            <CustomCardMedia 
              url="https://www.youtube.com/embed/VCPGMjCW0is"  
            /> 
          </Modal>
        )}

        {showForm && (
          <Modal open={showForm} handleClose={handleCloseForm}>
            <DemoRequestForm onSubmit={handleFormSubmit} onClose={handleCloseForm} />
          </Modal>
        )}

        <Grid item lg={6} md={7} xs={12}>
          <h1 className="title">
            We build bridges between <FancyText className="fancy-text">Business</FancyText> to{' '}
            <FancyText className="fancy-text">Business</FancyText>
          </h1>
        </Grid>

        <Grid item lg={6} md={5} xs={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
            <p className="description">
              We make it easy for shops and retailers to connect, collaborate, and grow. Our platform
              helps businesses build strong partnerships, source products, and expand their network for
              shared success.
            </p>
            <Box>
              <Button sx={{ width: "10rem", alignSelf: "center" }} variant="contained" color="primary" onClick={handleRequestDemo}>
                REQUEST A DEMO
              </Button>
            </Box>

            {/* Watch Video Section */}
            <Box sx={{ marginTop: {
              xs: "0.5rem",
              md: "1rem" 
              }}}>
              <Button
                variant="outlined"
                startIcon={<PlayArrowIcon />}
                onClick={handleWatchVideo}
              >
                WATCH VIDEO
              </Button>
            </Box>         
          </Box>
        </Grid>    
      </Box>
    </StyledRoot>
  );
}
