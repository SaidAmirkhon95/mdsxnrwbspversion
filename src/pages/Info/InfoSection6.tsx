import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Slide from '@mui/material/Slide';

const InfoSection6 = () => {
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
      <div id='section-five' style={{ overflow: 'hidden', maxWidth: '2000px', margin: '0 auto' }}>
        <Grid
          container
          spacing={8}
          display='flex'
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent='center'
          alignContent='center'
          marginTop='100px'
        >
          <Grid
            item
            xs={isMobile ? 12 : isTablet ? 6 : 12}
            md={6}
            flexDirection='column'
            container
            justifyContent={isMobile ? 'center' : isTablet ? 'flex-start' : 'flex-start'}
            alignItems={isMobile ? 'center' : isTablet ? 'flex-start' : 'center'}
            ref={sectionRef}
          >
            {/* <Slide direction='right' in={isMobile ? true : animationPlayed} timeout={1000}> */}
            <Box
              sx={{
                backgroundImage: 'url(./revenue.svg)',
                backgroundPosition: isMobile ? 'center' : isTablet ? 'center' : 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: isMobile ? 300 : isTablet ? 350 : 530,
                height: isMobile ? '620px' : isTablet ? '580px' : '780px',
                width: isMobile ? '300px' : isTablet ? '350px' : '630px',
                marginTop: isMobile ? '-130px' : isTablet ? '-40px' : '-40px',
              }}
            ></Box>
            {/* </Slide> */}
          </Grid>
          <Grid
            ref={sectionRef}
            item
            xs={isMobile ? 12 : isTablet ? 6 : 12}
            md={6}
            direction='column'
            container
            justifyContent='center'
            alignItems={isMobile ? 'center' : isTablet ? 'center' : 'center'}
            marginLeft={isMobile ? '' : isTablet ? '-100px' : '-200px'}
          >
            {/* <Slide direction='left' in={isMobile ? true : animationPlayed} timeout={1000}> */}
            <Grid
              sx={{ width: isMobile ? 320 : isTablet ? 400 : 700, height: isMobile ? 750 : 800 }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant={isMobile ? 'h6' : 'h5'}
                  component='div'
                  textAlign='center'
                >
                  Business Cases
                  <br />
                  <br />
                </Typography>
                <Typography
                  variant={isMobile ? 'subtitle2' : isTablet ? 'body1' : 'h6'}
                  color='text.secondary'
                  textAlign='left'
                  /* style={{ textAlign: 'justify', textJustify: 'inter-word' }} */
                >
                  Im Mobility Data Space finden sich mittlerweile&nbsp;
                  <span style={{ fontWeight: 'bold' }}>über 95 verschiedene Teilnehmer</span>
                  &nbsp;aus den Bereichen Mobilität, öffentliche Verwaltung & Verkehr, Mobilfunk,
                  Energie und Forschung.
                  <br />
                  <br />
                  Mit der Umsetzung verschiedenster Business Cases wurde bereits begonnen, um die
                  Mobilität digitaler und nachhaltiger zu gestalten. Dabei werden verschiedenste
                  Anwendungsfälle bereits umgesetzt. Themen wie das intermodale Reisen, lokale
                  Unwetterprognosen, bis hin zu KI-basierten Optimierungen für Mobilitätsangebote
                  sind alles Themenfelder die durch den Mobility Data Space ermöglicht werden.
                  <br />
                  <br />
                  Weitere Business Cases des MDS finden sie&nbsp;
                  <a target='_blank' rel='mobilDataSpace' href='https://mobility-dataspace.eu/de'>
                    hier
                  </a>
                </Typography>
              </CardContent>
            </Grid>
            {/* </Slide> */}
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};
export default InfoSection6;
