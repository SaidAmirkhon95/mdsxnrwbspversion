import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  styled,
  ListItemButton,
  ListItemText,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';

import TranslationButton from '../../components/TranslationButton';

// personalizacao
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

//rotas
const itemList = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'MDSxNRW',
    to: '/info',
  },
  {
    text: 'About',
    to: '/about',
  },
  {
    text: 'Contact',
    to: '/contact',
  },
];

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 800);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1600);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AppBar
      component='nav'
      position='sticky'
      sx={{
        background: '#fff',
        opacity: '0.9',
        maxWidth: '2000px',
        overflow: 'hidden',
        margin: '0 auto',
      }}
      elevation={0}
      style={{ boxShadow: '0 0 10px 0' }}
    >
      <StyledToolbar>
        {isMobileView ? (
          <img
            src='logos/MDSxNRW_Bildlogo.svg'
            alt='MDSxNRW_Mobile_Logo'
            style={{
              width: '10%',
            }}
          />
        ) : (
          <img
            src='logos/MDSxNRW_Logo.svg'
            alt='MDSxNRW_PC_Logo'
            style={{
              width: '12%',
            }}
          />
        )}
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <DrawerItem />
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  sx={{
                    color: '#000',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#1e2a5a',
                    },
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListMenu>
        {isMobile ? '' : <TranslationButton />}
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
