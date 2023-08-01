import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Page.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Slide from '@mui/material/Slide';

const Header = () => {
  /*  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'left',
      textAlign: 'center',
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: '1',
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      flex: '2',
      textAlign: isMobile ? 'center' : 'start',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  })); */

  const theme = createTheme({
    palette: {
      primary: {
        light: '#005B7F',
        main: '#009374',
        dark: '#005946',
        contrastText: '#fff',
      },
      secondary: {
        light: '#0080b2',
        main: '#005B7F',
        dark: '#0080b2',
        contrastText: '#fff',
      },
    },
  });

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

  const [isTablet, setIsTablet] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ overflow: 'hidden', maxWidth: '2000px', margin: '0 auto' }}>
        <Grid
          container
          spacing={1}
          display='flex'
          flexDirection={isMobile ? 'column' : isTablet ? 'row' : 'row'}
          justifyContent='center'
          alignItems='center'
          maxWidth='2000px'
        >
          <Grid
            item
            xs={isMobile ? 12 : isTablet ? 7 : 12}
            md={6}
            container
            direction='column'
            justifyContent={isMobile ? 'center' : 'flex-start'}
            alignItems={isMobile ? 'center' : isTablet ? 'center' : 'center'}
            paddingRight={isMobile ? 0 : isTablet ? 0 : '30px'}
          >
            <Slide direction='right' in={true} timeout={1000}>
              <Grid>
                <Typography
                  variant={isMobile ? 'h5' : isTablet ? 'h4' : 'h4'}
                  component='h1'
                  sx={{
                    fontWeight: 700,
                    color: 'black',
                    lineHeight: '1.1',
                    mt: '100px',
                    mb: '20px',
                    maxWidth: '1000px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  MDSxNRW in wenigen <br /> Schritten zum passenden <br />
                  Connector
                </Typography>
                <Typography
                  variant={isMobile ? 'subtitle2' : isTablet ? 'body2' : 'body1'}
                  color='text.secondary'
                >
                  Wir unterstützen Sie bei der Anbindung {isMobile ? <br /> : ''} in dem Mobility
                  Data
                  {isMobile ? '' : <br />}
                  Space durch eine {isMobile ? <br /> : ''}passgenaue Empfehlung für einen
                  Connector!
                </Typography>
                <Typography sx={{ display: 'flex', marginTop: isMobile ? '' : '30px' }}>
                  <Button
                    component={Link}
                    to={'/app'}
                    variant='contained'
                    sx={{
                      mt: '18px',
                      width: isMobile ? '130px' : isTablet ? '190px' : '230px',
                      height: '60px',
                      textTransform: 'none',
                      color: 'primary',

                      '&&:focus': {
                        backgroundColor: '#343a55',
                      },
                    }}
                  >
                    <Typography
                      component='body'
                      variant={isMobile ? 'body2' : isTablet ? 'h6' : 'h5'}
                      sx={{ whiteSpace: 'nowrap' }}
                    >
                      Empfehlung starten
                    </Typography>
                  </Button>
                  <Button
                    component={Link}
                    to={'/about'}
                    variant='outlined'
                    sx={{
                      ml: '30px',
                      mt: '18px',
                      width: isMobile ? '130px' : isTablet ? '190px' : '230px',
                      height: '60px',

                      textTransform: 'none',
                      color: '#primary',

                      '&&:focus': {
                        backgroundColor: '#343a55',
                      },
                    }}
                  >
                    <Typography
                      component='body'
                      variant={isMobile ? 'body2' : isTablet ? 'h6' : 'h5'}
                      sx={{ whiteSpace: 'nowrap' }}
                    >
                      Weitere Infos
                    </Typography>
                  </Button>
                </Typography>
              </Grid>
            </Slide>
          </Grid>
          <Grid
            item
            xs={isMobile ? 12 : isTablet ? 5 : 12}
            md={5}
            container
            display='flex'
            direction='row'
            justifyContent={isMobile ? 'center' : 'flex-start'}
            alignItems='flex-end'
          >
            <Slide direction='left' in={true} timeout={1000}>
              <Box
                sx={{
                  backgroundImage: 'url(./searchApp.svg)',
                  backgroundPosition: isMobile ? 'center' : isTablet ? 'bottom' : 'bottom',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: isMobile ? 250 : isTablet ? 300 : 550,
                  height: isTablet ? '500px' : '700px',
                  width: isMobile ? '90%' : isTablet ? '600px' : '600px',
                  '@media (max-width: 600px)': {
                    marginTop: '-200px',
                  },
                  '@media (max-width: 1100px)': {
                    marginTop: isMobile ? '-50px' : '',
                  },
                }}
              ></Box>
            </Slide>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Header;
