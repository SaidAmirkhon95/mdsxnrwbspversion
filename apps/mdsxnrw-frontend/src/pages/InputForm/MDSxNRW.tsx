import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stepper1 from './Stepper1';
import Stepper2 from './Stepper2';
import Stepper3 from './Stepper3';
import PrivacyText from '../InputForm/PrivacyText';
import Impressum from '../InputForm/Impressum';
import Kontakt from '../InputForm/Kontakt';
import { Connectors } from '../../components/Connectors';
import Grid from '@mui/material/Grid';
import jsPDF from 'jspdf';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

function Copyright() {
  return (
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
  );
}

const steps = ['Unternehmensinformationen', 'Kategorisierung', 'Empfehlung'];

function getStepContent(step: any) {
  switch (step) {
    case 0:
      return <Stepper1 />;
    case 1:
      return <Stepper2 />;
    case 2:
      return <Stepper3 />;
    default:
      throw new Error('Unknown step');
  }
}

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

export default function MDSxNRW() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const downloadPDF = () => {
    const pdfDoc = new jsPDF('landscape', 'px', 'a4', false);
    Connectors.map((connector) => {
      pdfDoc.text(JSON.stringify(connector.connector), 10, 50);
      pdfDoc.text(JSON.stringify(connector.name), 10, 70);
      pdfDoc.text(JSON.stringify(connector.firma), 10, 90);
      pdfDoc.text(JSON.stringify(connector.typ), 10, 110);
      pdfDoc.text(JSON.stringify(connector.price), 10, 130);
    });
    pdfDoc.save('connectors.pdf');
  };

  const [isVerticalLayout, setIsVerticalLayout] = useState(window.innerWidth <= 450);
  useEffect(() => {
    const handleResize = () => {
      setIsVerticalLayout(window.innerWidth <= 550);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component='main' maxWidth='md' sx={{ mb: 4 }}>
        <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Stepper
            activeStep={activeStep}
            sx={{ pt: 3, pb: 5 }}
            orientation={isVerticalLayout ? 'vertical' : 'horizontal'}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>{}</React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box
                component='span'
                m={1}
                display='flex'
                justifyContent='space-between'
                alignItems='center'
              >
                {activeStep !== 0 && (
                  <Box sx={{ ml: '-8px' }}>
                    <Button
                      variant='outlined'
                      onClick={handleBack}
                      sx={{
                        mt: 3,
                        ml: 1,
                        '@media (max-width: 550px)': {
                          fontSize: 'small',
                        },
                      }}
                      style={{ textTransform: 'none' }}
                      size='large'
                    >
                      Zurück zur Kategorisierung
                    </Button>
                  </Box>
                )}
                {activeStep === steps.length - 1 && (
                  <Box className='btnDiv'>
                    <Button
                      variant='outlined'
                      sx={{
                        mt: 3,
                        ml: 1,
                        '@media (max-width: 550px)': {
                          fontSize: 'small',
                        },
                      }}
                      onClick={downloadPDF}
                      id='downloadBtn'
                      value='download'
                      style={{ textTransform: 'none' }}
                      size='large'
                    >
                      Empfehlung als PDF
                    </Button>
                  </Box>
                )}
                {activeStep === steps.length - 2 && (
                  <Box>
                    <Button
                      variant='outlined'
                      onClick={handleNext}
                      sx={{
                        mt: 3,
                        ml: 1,
                        '@media (max-width: 550px)': {
                          fontSize: 'small',
                        },
                      }}
                      style={{ textTransform: 'none', whiteSpace: 'normal' }}
                      size='large'
                    >
                      zum Connectorvergleich
                    </Button>
                  </Box>
                )}
              </Box>
              {activeStep === steps.length - 3 && (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant='outlined'
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    style={{ textTransform: 'none' }}
                    size='large'
                  >
                    Weiter
                  </Button>
                </Box>
              )}
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
