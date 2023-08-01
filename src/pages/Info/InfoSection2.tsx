import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Slide from '@mui/material/Slide';

const InfoSection2 = () => {
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
      <div id='section-one' style={{ overflow: 'hidden', maxWidth: '2000px', margin: '0 auto' }}>
        <Grid
          container
          spacing={8}
          display='flex'
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent='center'
          alignContent='center'
        >
          <Grid
            item
            xs={isMobile ? 12 : isTablet ? 8 : 12}
            md={7}
            flexDirection='column'
            container
            justifyContent={isMobile ? 'center' : isTablet ? 'flex-end' : 'center'}
            alignItems={isMobile ? 'center' : isTablet ? 'center' : 'center'}
            ref={sectionRef}
            marginRight={isMobile ? '' : isTablet ? '100px' : '100px'}
          >
            <Slide direction='right' in={isMobile ? true : animationPlayed} timeout={1000}>
              <Grid
                sx={{ width: isMobile ? 320 : isTablet ? 350 : 700, height: isMobile ? 600 : 650 }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant={isMobile ? 'h6' : 'h5'}
                    component='div'
                    textAlign='center'
                  >
                    Was sind Datenökosysteme?
                    <br />
                    <br />
                  </Typography>
                  <Typography
                    variant={isMobile ? 'subtitle2' : isTablet ? 'body1' : 'h6'}
                    color='text.secondary'
                    textAlign='left'
                  >
                    Daten sind eine der wichtigsten Ressourcen unserer Zeit. Diese bilden die
                    Grundlage für innovative Produkte, Dienstleistungen und Geschäftsmodelle.
                    Besonders künstliche Intelligenz und statistische Prognosen auf Grundlage von
                    Big Data benötigen große Mengen qualitativ hochwertiger Daten.
                    <br />
                    <br />
                    Dieser Bedarf nach Daten kann oft nicht durch ein Unternehmen selbst gedeckt
                    werden. Aus diesem Grund schließen sich verschiedene Akteure in diesem Umfeld
                    zusammen und bilden ein Datenökosystem. Hier werden Daten untereinander&nbsp;
                    <span style={{ fontStyle: 'italic' }}>
                      geteilt, verarbeitet und angereichert
                    </span>
                    &nbsp;– über Unternehmensgrenzen hinaus.
                  </Typography>
                </CardContent>
              </Grid>
            </Slide>
          </Grid>
          <Grid
            ref={sectionRef}
            item
            xs={isMobile ? 12 : isTablet ? 4 : 12}
            md={5}
            direction='column'
            container
            justifyContent={isMobile ? 'center' : isTablet ? 'center' : 'flex-start'}
            alignItems={isMobile ? 'center' : isTablet ? 'center' : 'flex-start'}
            marginLeft={isMobile ? '' : isTablet ? '-150px' : '-200px'}
          >
            <Slide direction='left' in={isMobile ? true : animationPlayed} timeout={1000}>
              <Box
                sx={{
                  backgroundImage: 'url(./connection_6778.svg)',
                  backgroundPosition: isMobile ? 'center' : isTablet ? 'center' : 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: isMobile ? 300 : isTablet ? 300 : 530,
                  height: isMobile ? '480px' : isTablet ? '580px' : '780px',
                  width: isMobile ? '300px' : isTablet ? '350px' : '530px',
                  marginTop: isMobile ? '-130px' : isTablet ? '-40px' : '-40px',
                  marginLeft: isMobile ? '' : isTablet ? '-100px' : '',
                }}
              ></Box>
            </Slide>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};
export default InfoSection2;
