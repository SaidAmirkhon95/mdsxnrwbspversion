import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Button, Snackbar, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import PrivacyText from 'pages/InputForm/PrivacyText';
import Impressum from 'pages/InputForm/Impressum';

const theme = createTheme({
  palette: {
    primary: {
      light: '#005B7F',
      main: '#11998E',
      dark: '#05786e',
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

const myComponent = {
  marginTop: '12%',
  height: '400px',
  overflow: 'scroll',
};

const CookiesBanner = () => {
  const [cookies, setCookie] = useCookies(['cookiesAccepted']);
  const [open, setOpen] = useState(cookies.cookiesAccepted === undefined); // make ! invisible to see cookies
  const [customizeOpen, setCustomizeOpen] = useState(false);

  const handleAccept = () => {
    setCookie('cookiesAccepted', true, { maxAge: 365 * 24 * 60 * 60 }); //läuft in einem Jahr ab
    setOpen(false);
  };

  const handleDecline = () => {
    console.log('Cookies declined.');
    setCookie('cookiesAccepted', false, { maxAge: 365 * 24 * 60 * 60 });
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCustomize = () => {
    setCustomizeOpen(true);
    setOpen(false);
  };

  const handleCustomizeClose = () => {
    setCustomizeOpen(false);
  };

  const handleCustomizeSave = () => {
    console.log('Customize preferences saved.');
    setCookie('cookiesAccepted', true, { maxAge: 365 * 24 * 60 * 60 });
    setOpen(false);
    setCustomizeOpen(false);
  };

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
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: isMobile ? '100%' : '200%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999,
        }}
        ContentProps={{
          sx: {
            fontSize: isMobile ? '18px' : '25px',
            marginLeft: isMobile ? '1%' : '50%',
            marginRight: isMobile ? '1%' : '',
            opacity: 0.5,
            background: 'white',
            color: '#616161',
            marginTop: '0%',
            width: '600px',
            height: isMobile ? '750px' : '550px',
            borderRadius: isMobile ? '' : '5%',
            textAlign: 'justify',
            textJustify: 'inter-word',
          },
        }}
        message={
          <div>
            <Typography variant='h6' color='primary' align='center' marginBottom='20px'>
              Privatsphäre-Einstellungen!
            </Typography>
            <Typography variant={isMobile ? 'body2' : 'body1'}>
              Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für
              soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren.
              Außerdem geben wir Informationen zu Ihrer Verwendung unserer Website an unsere Partner
              für z.B. soziale Medien, Werbung und Analysen weiter. Unsere Partner führen diese
              Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt
              haben oder die sie im Rahmen Ihrer Nutzung der Dienste gesammelt haben. Die
              Datenverarbeitung kann mit Ihrer Einwilligung oder auf Basis eines berechtigten
              Interesses erfolgen, dem Sie in den individuellen Datenschutzeinstellungen
              widersprechen können. Sie haben das Recht, nur in essenzielle Services einzuwilligen
              und deine Einwilligung in der Datenschutzerklärung zu einem späteren Zeitpunkt zu
              ändern oder zu widerrufen.
            </Typography>
          </div>
        }
        action={
          <div style={{ marginLeft: '-4%' }}>
            <Button
              color='primary'
              size={isMobile ? 'medium' : 'large'}
              onClick={handleAccept}
              style={{ border: '1px solid #11998E', marginBottom: '10px', width: '100%' }}
              variant='contained'
            >
              Alle Akzeptieren
            </Button>
            <Button
              color='primary'
              size={isMobile ? 'medium' : 'large'}
              onClick={handleDecline}
              style={{ border: '1px solid #11998E', marginBottom: '10px', width: '100%' }}
              variant='outlined'
            >
              Weiter ohne Einwilligung
            </Button>
            <Button
              color='primary'
              size={isMobile ? 'medium' : 'large'}
              onClick={handleCustomize}
              style={{ border: '1px solid #11998E', width: '100%' }}
              variant='outlined'
            >
              Individuelle Privatsphäre-Einstellungen
            </Button>
            <Grid maxWidth='2000px' overflow='hidden'>
              <Typography variant='body2' color='text.secondary' align='center'>
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
                  <PrivacyText />
                  <Impressum />
                </Typography>
              </Typography>
            </Grid>
          </div>
        }
        onClose={handleClose}
      />
      <Dialog open={customizeOpen} onClose={handleCustomizeClose} style={myComponent}>
        <DialogTitle>Cookie-Einstellungen anpassen</DialogTitle>
        <DialogContent>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label='Notwendig' />
              </FormGroup>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Diese Cookies und andere Informationen sind für die Funktion unserer Services
                unbedingt erforderlich. Sie garantieren, dass unser Service sicher und so wie von
                Ihnen gewünscht funktioniert. Daher kann man sie nicht deaktivieren.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <FormControlLabel control={<Checkbox />} label='Analytisch' />
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Wir möchten für Sie unseren Service so gut wie möglich machen. Daher verbessern wir
                unsere Services und Ihr Nutzungserlebnis stetig. Um dies zu tun, möchten wir die
                Nutzung des Services analysieren und in statistischer Form auswerten.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <FormControlLabel control={<Checkbox />} label='Marketing' />
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Um Ihnen unser Angebot kostenfrei anbieten zu können, finanzieren wir uns u.a. durch
                Werbeeinblendungen und richten werbliche und nicht-werbliche Inhalte auf Ihre
                Interessen aus. Dafür arbeiten wir mit ausgewählten Partnern zusammen. Ihre
                Einstellungen können Sie jederzeit mit Klick auf Datenschutz im unteren Bereich
                unserer Webseite anpassen. Ausführlichere Informationen zu den folgenden
                ausgeführten Verarbeitungszwecken finden Sie ebenfalls in unserer
                Datenschutzerklärung.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCustomizeClose} color='primary'>
            Abbrechen
          </Button>
          <Button onClick={handleCustomizeSave} color='primary'>
            Speichern
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default CookiesBanner;
