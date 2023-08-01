import React, { useState } from 'react';
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

const theme = createTheme({
  palette: {
    primary: {
      light: '#005B7F',
      main: '#11998E',
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

const myComponent = {
  marginTop: '12%',
  height: '400px',
  overflow: 'scroll',
};

const CookiesBanner = () => {
  const [cookies, setCookie] = useCookies(['cookiesAccepted']);
  const [open, setOpen] = useState(/*!*/ cookies.cookiesAccepted);
  const [customizeOpen, setCustomizeOpen] = useState(false);

  const handleAccept = () => {
    setCookie('cookiesAccepted', true, { maxAge: 365 * 24 * 60 * 60 }); //läuft in einem Jahr ab
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
    // Add your logic here for handling the user's customized cookie preferences.
    console.log('Customize preferences saved.');
    setCookie('cookiesAccepted', true, { maxAge: 365 * 24 * 60 * 60 });
    setOpen(false);
    setCustomizeOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        message='Mit dem Klick auf „Akzeptieren” ermöglichen Sie uns Ihnen über Cookies
                ein verbessertes Nutzungserlebnis zu servieren und dieses kontinuierlich
                zu verbessern. Damit können wir Ihnen personalisierte Empfehlungen auch
                auf Drittseiten ausspielen. Über „Anpassen” können Sie Ihre persönlichen
                Präferenzen festlegen. Dies ist auch nachträglich jederzeit möglich.'
        action={
          <div style={{ justifyContent: 'space-between' }}>
            <Button
              color='primary'
              size='large'
              onClick={handleAccept}
              style={{ border: '1px solid #11998E' }}
            >
              Akzeptieren
            </Button>
            <Button
              color='primary'
              size='large'
              onClick={handleCustomize}
              style={{ border: '1px solid #11998E' }}
            >
              Anpassen
            </Button>
          </div>
        }
        onClose={handleClose}
        ContentProps={{
          sx: {
            opacity: 0.5,
            background: 'white',
            color: '#616161',
            marginTop: '30%',
            width: '500px',
            height: '400px',
            fontSize: '20px',
            borderRadius: '5%',
            textAlign: 'justify',
            textJustify: 'inter-word',
          },
        }}
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
                <FormControlLabel control={<Checkbox />} label='Notwending' />
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
