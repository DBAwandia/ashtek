import styled from '@mui/material/styles/styled';

export const StyledFancyText = styled('span')(({ theme }) => ({
  background: 'linear-gradient(90deg, #FF6F00 21.75%, #FF9E4A 73.2%)', // Updated gradient to orange shades
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}));
