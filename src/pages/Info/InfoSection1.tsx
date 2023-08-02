import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Slide from '@mui/material/Slide';
import { Link as ScrollLink } from 'react-scroll';

const InfoSection1 = () => {
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
      <div style={{ overflow: 'hidden', maxWidth: '2000px', margin: '0 auto' }}>
        <Grid
          container
          spacing={8}
          display='flex'
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent='center'
          alignContent='center'
          marginTop={isMobile ? '70px' : isTablet ? '50px' : ''}
        >
          <Grid
            ref={sectionRef}
            item
            direction='column'
            container
            justifyContent='flex-start'
            alignItems={isMobile ? 'center' : isTablet ? 'center' : 'center'}
          >
            <Slide direction='left' in={isMobile ? true : animationPlayed} timeout={1000}>
              <Box
                sx={{
                  backgroundImage: 'url(./MDSxNRWLogo1.svg)',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: isMobile ? 300 : isTablet ? 350 : 530,
                  height: isMobile ? '80px' : isTablet ? '120px' : '140px',
                  width: isMobile ? '300px' : isTablet ? '350px' : '530px',
                  marginTop: isMobile ? '-130px' : isTablet ? '-40px' : '100px',
                }}
              ></Box>
            </Slide>
          </Grid>
          <Grid
            item
            flexDirection='column'
            container
            justifyContent={isMobile ? 'center' : isTablet ? 'flex-end' : 'center'}
            alignItems='center'
            ref={sectionRef}
            marginTop={isMobile ? '-100px' : ''}
          >
            <Slide direction='right' in={isMobile ? true : animationPlayed} timeout={1000}>
              <Grid
                sx={{ width: isMobile ? 320 : isTablet ? 650 : 1200, height: isMobile ? 770 : 700 }}
              >
                <CardContent>
                  <Typography
                    variant={isMobile ? 'subtitle2' : isTablet ? 'body1' : 'h6'}
                    color='text.secondary'
                    textAlign={isMobile ? 'left' : 'left'}
                    /* style={{ textAlign: 'justify', textJustify: 'inter-word' }} */
                  >
                    <br />
                    Durch die zielgerichtete Verwendung von Daten können innovative und nachhaltige
                    Produkte und Dienstleistungen entstehen. Einzelne Akteure besitzen jedoch selten
                    genug Daten für innovative Business Cases, um Daten zu monetarisieren oder
                    Kosten einzusparen. In den jeweiligen&nbsp;
                    <ScrollLink
                      to='section-one'
                      smooth={true}
                      duration={500}
                      offset={-100}
                      style={{
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        /* paddingLeft: '5px',
                        paddingRight: '5px', */
                      }}
                      activeStyle={{
                        fontWeight: 'bold',
                      }}
                    >
                      Datenökosysteme
                    </ScrollLink>
                    &nbsp;tauschen sich daher Partner aus und teilen ihre Daten, um die benötigte
                    Datengrundlage zu schaffen.
                    <br />
                    <br />
                    Damit Teilnehmer innerhalb dieser Ökosysteme einen sicheren und&nbsp;
                    <ScrollLink
                      to='section-two'
                      smooth={true}
                      duration={500}
                      offset={-100}
                      style={{
                        textDecoration: 'underline',
                        cursor: 'pointer',
                      }}
                      activeStyle={{
                        fontWeight: 'bold',
                      }}
                    >
                      souveränen Datenaustausch
                    </ScrollLink>
                    &nbsp;durchführen können bilden sich immer mehr Datenrauminitiativen. Der für
                    die Domäne Mobilität zuständige&nbsp;
                    <ScrollLink
                      to='section-five'
                      smooth={true}
                      duration={500}
                      offset={-100}
                      style={{
                        textDecoration: 'underline',
                        cursor: 'pointer',
                      }}
                      activeStyle={{
                        fontWeight: 'bold',
                      }}
                    >
                      Mobility Data Space
                    </ScrollLink>
                    &nbsp;ermöglicht dafür innovative und nachhaltige Anwendungsfälle im
                    Mobilitätssektor. Die&nbsp;
                    <ScrollLink
                      to='section-six'
                      smooth={true}
                      duration={500}
                      offset={-100}
                      style={{
                        textDecoration: 'underline',
                        cursor: 'pointer',
                      }}
                      activeStyle={{
                        fontWeight: 'bold',
                      }}
                    >
                      Herausforderung
                    </ScrollLink>
                    &nbsp;dabei ist die Anbindung von neuen Teilnehmern an den Mobility Data Space,
                    um die Mobilität umweltfreundlicher, sicherer, nutzerfreundlicher und fair zu
                    gestalten.
                    <br />
                    <br />
                    Hierfür wurde MDSxNRW ins Leben gerufen. Durch MDSxNRW wird potentiellen
                    Teilnehmenden eine passgenaue Connector-Empfehlung gegeben, um am Mobility Data
                    Space teilzunehmen und die Mobilität von Morgen mitzugestalten.
                    <br />
                  </Typography>
                </CardContent>
              </Grid>
            </Slide>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};
export default InfoSection1;
