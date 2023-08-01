import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Grid, styled } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styles from './Page.module.css';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Kontakt from 'pages/InputForm/Kontakt';
import PrivacyText from 'pages/InputForm/PrivacyText';
import Impressum from 'pages/InputForm/Impressum';
import Slide from '@mui/material/Slide';

const Section3 = () => {
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1535);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1535);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting && !animationPlayed) {
          setIsInView(true);
          setAnimationPlayed(true);
        } else {
          setIsInView(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [animationPlayed]);
  return (
    <ThemeProvider theme={theme}>
      <div style={{ overflow: 'hidden', maxWidth: '2000px', margin: '0 auto' }}>
        <Grid
          className='conatiner'
          container
          spacing={8}
          display='flex'
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent='center'
          alignContent='center'
          marginTop={isMobile ? '100px' : isTablet ? '100px' : '150px'}
        >
          <Grid ref={sectionRef} item xs={isMobile ? 12 : isTablet ? 5 : 12} xl={3}>
            <Slide direction='right' in={isMobile ? true : animationPlayed} timeout={1000}>
              <Card
                sx={{
                  width: isMobile ? 305 : 405,
                  height: isMobile ? 450 : 500,
                }}
              >
                <CardMedia
                  sx={{ height: 190, backgroundSize: '70%' }}
                  image='./FraunhoferISST.png'
                  style={{ backgroundColor: '#f5f7f7' }}
                />
                <CardContent>
                  <Typography variant='body1' color='text.secondary' textAlign='center'>
                    Innovationen aus Daten
                    <br />
                    Das Fraunhofer-Institut für Software-
                    <br />
                    und Systemtechnik ISST identifiziert
                    <br />
                    zusammen mit Unternehmen den
                    <br />
                    strategischen Wert ihrer Daten und
                    <br />
                    macht sie nutzbar.
                    <br />
                    <br />
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', mt: '0px', alignItems: 'stretch' }}>
                  <Button size='small' target='_blank' href='https://www.isst.fraunhofer.de/'>
                    Fraunhofer ISST
                  </Button>
                </CardActions>
              </Card>
            </Slide>
          </Grid>
          <Grid ref={sectionRef} item xs={isMobile ? 12 : isTablet ? 5 : 12} xl={3}>
            <Slide
              direction={isTablet ? 'left' : 'up'}
              in={isMobile ? true : animationPlayed}
              timeout={1000}
            >
              <Card
                sx={{
                  width: isMobile ? 305 : 405,
                  height: isMobile ? 450 : 500,
                }}
              >
                <CardMedia
                  sx={{ height: 190, backgroundSize: '50%' }}
                  image='./logo_MDS_black.svg'
                  style={{ backgroundColor: '#f5f7f7' }}
                />
                <CardContent>
                  <Typography variant='body1' color='text.secondary' textAlign='center'>
                    Datenraum für die Mobilität von Morgen
                    <br />
                    Der Mobility Data Space ist die Data <br /> Sharing Community für alle, die die
                    <br /> Mobilität umweltfreundlicher, sicherer, <br /> nutzerfreundlicher und
                    fair gestalten <br /> wollen.
                    <br /> <br />
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: 'center',
                    mt: '10px',
                    alignItems: 'stretch',
                    marginTop: isMobile ? '-30px' : '',
                  }}
                >
                  <Button size='small' target='_blank' href='https://mobility-dataspace.eu/'>
                    Mobility Data Space
                  </Button>
                </CardActions>
              </Card>
            </Slide>
          </Grid>
          <Grid ref={sectionRef} item xs={isMobile ? 12 : isTablet ? 5 : 12} xl={3}>
            <Slide
              direction={isTablet ? 'up' : 'left'}
              in={isMobile ? true : animationPlayed}
              timeout={1000}
            >
              <Card
                sx={{
                  width: isMobile ? 305 : 405,
                  height: isMobile ? 450 : 500,
                }}
              >
                <CardMedia
                  sx={{ height: 190, backgroundSize: '70%' }}
                  image='./DSSC_logo_4c.png'
                  style={{ backgroundColor: '#f5f7f7' }}
                />
                <CardContent>
                  <Typography variant='body1' color='text.secondary' textAlign='center'>
                    Das Data Spaces Support Centre <br /> (DSSC) errichtet und betreibt eine
                    <br /> Supportplattform für Datenräume, um <br /> die Ziele der «European
                    Strategy of
                    <br />
                    Data» umzusetzen.
                    <br /> <br />
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', mt: '24px', alignItems: 'stretch' }}>
                  <Button size='small' target='_blank' href='https://dssc.eu/'>
                    Data Spaces Support Centre
                  </Button>
                </CardActions>
              </Card>
            </Slide>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            '@media (max-width: 600px)': {
              marginTop: '480px !important',
            },
            '@media (max-width: 1100px)': {
              marginTop: '150px !important',
            },
            '@media (max-width: 1535px)': {
              marginTop: '200px',
            },
            '@media (min-width: 1536px)': {
              marginTop: '200px',
            },
          }}
          maxWidth='2000px'
          overflow='hidden'
          marginBottom='20px'
        >
          <Typography variant='body2' color='text.secondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' target='_blank' href='https://www.isst.fraunhofer.de/'>
              Fraunhofer ISST
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'} <br />
            <Typography
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: '20px',
                gap: '8rem',
                '@media (max-width: 600px)': {
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem',
                },
              }}
            >
              <Impressum />
              <PrivacyText />
              <Kontakt />
            </Typography>
          </Typography>
        </Grid>
      </div>
    </ThemeProvider>
  );
};
export default Section3;
