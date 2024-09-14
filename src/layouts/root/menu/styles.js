import styled from '@mui/material/styles/styled';

// STYLED COMPONENT
export const MenuList = styled('div')(({
  theme
}) => ({
  gap: '1rem',
  display: 'flex',
  marginTop: '1rem',
  alignItems: 'start',
  flexDirection: 'column',
  '& > a': {
    fontSize: 14,
    fontWeight: 400,
    transition: 'all 300ms',
    color: theme.palette.grey[500],
    '&:hover': {
      color: theme.palette.grey[300]
    },
    '&.active': {
      color: theme.palette.primary.main
    }
  }
}));
export const MenusContainer = styled('div')({
  zIndex: 5,
  opacity: 0,
  top: '120%',
  left:"-2.5rem",
  minWidth: 500,
  position: 'absolute',
  visibility: 'hidden',
  transition: 'top 300ms',
  transform: `translate(-50%, 0%)`
});
export const MainListItem = styled('li')(({
  theme
}) => ({
  position: 'relative',
  '&:hover': {
    '.menu-item': {
      color: theme.palette.primary.main
    },
    '.inner-menu': {
      opacity: 1,
      visibility: 'visible',
      top: '100%'
    }
  }
}));