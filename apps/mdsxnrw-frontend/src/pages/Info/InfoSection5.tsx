/* import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Slide from '@mui/material/Slide';

const InfoSection5 = () => {
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
      <div id='section-four' style={{ overflow: 'hidden', maxWidth: '2000px', margin: '0 auto' }}>
        <Grid
          container
          spacing={8}
          display='flex'
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent='center'
          alignContent='center'
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
                  backgroundImage: 'url(./logo_MDS_black.svg)',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: isMobile ? 200 : isTablet ? 250 : 330,
                  height: isMobile ? '80px' : isTablet ? '120px' : '140px',
                  width: isMobile ? '300px' : isTablet ? '350px' : '530px',
                  marginTop: isMobile ? '-130px' : isTablet ? '-40px' : '0px',
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
                sx={{ width: isMobile ? 320 : isTablet ? 550 : 1200, height: isMobile ? 600 : 700 }}
              >
                <CardContent>
                  <Typography
                    variant={isMobile ? 'subtitle2' : isTablet ? 'body1' : 'h6'}
                    color='text.secondary'
                    textAlign='left'
                  >
                    <br />
                    Der Mobility Data Space ist die Data Sharing Community für alle, die die
                    Mobilität umweltfreundlicher, sicherer, nutzerfreundlicher und fair gestalten
                    wollen. Initiiert wurde der Mobility Data Space 2021 als eines der 18
                    Leuchtturmprojekte der Digitalstrategie der Bundesregierung.
                    <br />
                    <br />
                    Der Mobility Data Space (MDS) bringt Firmen, Organisationen und Institutionen
                    zusammen: diejenigen, die ihre Datenschätze monetarisieren oder Kosten einsparen
                    wollen und diejenigen, die Daten für innovative Mobilitätslösungen benötigen.
                    <br />
                    <br />
                    Ziel ist es, eine unternehmensübergreifende Datenökonomie zu schaffen, um
                    innovative, umwelt- und nutzerfreundliche Mobilitätskonzepte zu realisieren und
                    weiterzuentwickeln. Mehr dazu&nbsp;
                    <a target='_blank' rel='mobilDataSpace' href='https://mobility-dataspace.eu/de'>
                      hier
                    </a>
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
export default InfoSection5;
 */
import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Slide from '@mui/material/Slide';

const InfoSection5 = () => {
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
                sx={{ width: isMobile ? 320 : isTablet ? 400 : 700, height: isMobile ? 600 : 650 }}
              >
                <CardContent>
                  <Typography
                    variant={isMobile ? 'subtitle2' : isTablet ? 'body1' : 'h6'}
                    color='text.secondary'
                    textAlign='left'
                  >
                    Der Mobility Data Space ist die Data Sharing Community für alle, die die
                    Mobilität umweltfreundlicher, sicherer, nutzerfreundlicher und fair gestalten
                    wollen. Initiiert wurde der Mobility Data Space 2021 als eines der 18
                    Leuchtturmprojekte der Digitalstrategie der Bundesregierung.
                    <br />
                    <br />
                    Der Mobility Data Space (MDS) bringt Firmen, Organisationen und Institutionen
                    zusammen: diejenigen, die ihre Datenschätze monetarisieren oder Kosten einsparen
                    wollen und diejenigen, die Daten für innovative Mobilitätslösungen benötigen.
                    <br />
                    <br />
                    Ziel ist es, eine unternehmensübergreifende Datenökonomie zu schaffen, um
                    innovative, umwelt- und nutzerfreundliche Mobilitätskonzepte zu realisieren und
                    weiterzuentwickeln. Mehr dazu&nbsp;
                    <a target='_blank' rel='mobilDataSpace' href='https://mobility-dataspace.eu/de'>
                      hier
                    </a>
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
            justifyContent={isMobile ? 'center' : isTablet ? 'flex-start' : 'flex-start'}
            alignItems={isMobile ? 'center' : isTablet ? 'flex-start' : 'flex-start'}
            marginLeft={isMobile ? '' : isTablet ? '-150px' : '-250px'}
          >
            <Slide direction='left' in={isMobile ? true : animationPlayed} timeout={1000}>
              <Grid marginLeft={isMobile ? '' : '-50px'}>
                <Box
                  sx={{
                    backgroundImage: 'url(./logo_MDS_black.svg)',
                    backgroundPosition: isMobile ? 'center' : isTablet ? 'center' : 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: isMobile ? 200 : isTablet ? 250 : 330,
                    height: isMobile ? '80px' : isTablet ? '180px' : '230px',
                    width: isMobile ? '300px' : isTablet ? '350px' : '430px',
                    marginTop: isMobile ? '-130px' : isTablet ? '' : '-40px',
                    marginLeft: isMobile ? '' : isTablet ? '-60px' : '',
                  }}
                ></Box>
                <Typography variant={isMobile ? 'h5' : isTablet ? 'h4' : 'h2'} textAlign='center'>
                  Der Datenraum für
                  <br />
                  die Mobilität von
                  <br />
                  Morgen
                </Typography>
              </Grid>
            </Slide>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};
export default InfoSection5;