import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function CustomCardMedia({ url }) {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        component="iframe"
        height="315"
        src={url}
        title="Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Card>
  );
}

// Define prop types
CustomCardMedia.propTypes = {
  url: PropTypes.string.isRequired,
};

export default CustomCardMedia;
