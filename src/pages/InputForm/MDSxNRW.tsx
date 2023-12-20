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
import jsPDF from 'jspdf';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../LanguageContext';
import translationFunction from 'translationFunction';
import { useMyContext } from '../../MyContext';
import greenTrue from './../../components/Pictures/greenTrue.jpg';
import yellowTrue from './../../components/Pictures/yellowTrue.jpg';
import redFalse from './../../components/Pictures/redFalse.jpg';

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

const stepsObject = {
  stepsAufDeutsch: ['Unternehmensinformationen', 'Kategorisierung', 'Empfehlung'],
  stepsAufEnglisch: ['Company information', 'Category', 'Suggestion'],
};

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
  const {
    aufwandOne,
    aufwandTwo,
    aufwandThree,
    aufwandFour,
    aufwandFive,
    aufwandSix,
    aufwandSeven,
  } = useMyContext();
  const downloadPDF = () => {
    const pdfDoc = new jsPDF('p', 'mm', 'a4');
    const pageHeight = pdfDoc.internal.pageSize.height;
    let currentY = 10;
    const startX = 15;
    const verticalSpacing = 5;
    pdfDoc.setFontSize(10);
    const defaultFontSize = 12;
    const tableFontSize = 10;
    const x = startX;
    const imgWidth = 30;
    const imgHeight = 30;
    const iconWidth = 4;
    const iconHeight = 4;
    const tableWidth = 90;
    const cellWidth = tableWidth;
    const cellHeight = 5;
    pdfDoc.setFontSize(defaultFontSize);
    pdfDoc.text('Ihre Angaben', startX, currentY);
    currentY += 5;
    //daten von Stepper2
    const angabenTable = [
      ['Unternehmensgröße', aufwandOne],
      ['Beschäftigte IT-Experten', aufwandTwo],
      ['IT-Know-How', aufwandThree],
      ['Rolle im Dataspace', aufwandFour],
      ['Verfügbarkeit der Daten', aufwandFive],
      ['Datennutzungsbediengungen (Usage Policies)', aufwandSix],
      ['Service Level', aufwandSeven],
    ];
    pdfDoc.setFontSize(tableFontSize);
    angabenTable.forEach((row, rowIndex) => {
      const maxCellWidth = cellWidth - 2;
      let rowHeight = 0;
      const cellSpacing = 1;

      row.forEach((cell, colIndex) => {
        const cellText = cell.toString();
        const textLines = pdfDoc.splitTextToSize(cellText, maxCellWidth, { splitBy: 'auto' });
        const cellLinesHeight = textLines.length * (tableFontSize - cellSpacing);

        if (cellLinesHeight > rowHeight) {
          rowHeight = cellLinesHeight - 4;
        }
      });

      row.forEach((cell, colIndex) => {
        const cellX = x + colIndex * cellWidth;
        const cellText = cell.toString();
        const textLines = pdfDoc.splitTextToSize(cellText, maxCellWidth, { splitBy: 'auto' });
        const cellLinesHeight = textLines.length * tableFontSize;
        const cellY = currentY;
        const textY = cellY + (rowHeight - cellLinesHeight) / 2;
        textLines.forEach((line: any, lineIndex: any) => {
          const adjustedTextY = textY + (tableFontSize - cellSpacing - 4) * lineIndex + 6;
          pdfDoc.text(line, cellX + 1, adjustedTextY);
        });

        pdfDoc.rect(cellX, cellY, cellWidth, rowHeight);
      });

      currentY += rowHeight;
    });
    currentY += 10;
    pdfDoc.setFontSize(defaultFontSize);
    pdfDoc.text('Ihre Connector Empfehlungen', startX, currentY);
    currentY += 10;
    let count = 1;
    Connectors.slice(0, 5).forEach((connector, index) => {
      pdfDoc.setFontSize(defaultFontSize);
      const imgData = connector.connectorLogo;
      const greenImg = <img src={greenTrue} alt='Green' />;
      const yellowImg = <img src={yellowTrue} alt='Yellow' />;
      const redImg = <img src={redFalse} alt='Red' />;
      const table1Data = [
        ['Name', connector.connectorName],
        ['Beschreibung', connector.connectorDescription],
        ['Zahlung', connector.payment],
        ['Preis', connector.price],
        ['Matching', connector.score.toFixed(2)],
        ['Vorname', connector.contactForename],
        ['Nachname', connector.contactName],
        ['Kontakt Email', connector.connectorEmail],
        ['Kontakt Ort', connector.contactLocation],
        ['Website', connector.connectorWebsite],
      ];
      const table2Data = [
        ['Open Source', connector.openSource],
        ['Lizenz', connector.license],
        ['GUI', connector.gui],
        ['Spezifische GUI', connector.dsSpecificGui],
        ['Selbstimplementierung', connector.selfImplementation],
        ['Cloud', connector.cloud],
        ['Cloud Provider', connector.cloudNeeded],
        ['ODRL Sprachmodell', connector.basedOnODRL],
        ['Alternatives Policy Sprachmodell', connector.alternativePolicyExpressionModel],
        ['Verwendete Protokolle', connector.usedProtocols],
        ['Technologie Reifegrad (TRL)', connector.trl],
        ['Target Data Space Roles', connector.targetDataspaceRoles],
      ];
      const table3Data = [
        ['Preismodell', connector.pricingModel],
        ['Zahlungsintervall', connector.paymentInterval],
        ['Abonnementbeschreibung', connector.abonnementDescription],
        ['Kostenberechnungsbasis', connector.costCalculationBasis],
        ['Typ', connector.connectorType],
        ['Version', connector.connectorVersion],
        ['Deployment Typ', connector.deploymentType],
        ['Regional Beschränkt', connector.regionalRestrictions],
        ['Industrie Fokus', connector.targetIndustrySectors],
        ['Referenzen', connector.references],
      ];
      if (currentY + 4 * verticalSpacing + table2Data.length * cellHeight * 2 > pageHeight) {
        pdfDoc.addPage('a4');
        currentY = 10;
      }
      //Ampel Ordnung
      const guiSymbol = connector.gui ? greenImg : redImg;
      const supportSymbol = connector.hasSupport ? greenImg : redImg;
      const dokumentationSymbol = connector.hasDocumentation ? greenImg : redImg;
      let itKnowHowIcon;
      if (connector.itKnowhow === aufwandThree || aufwandThree === 'High') {
        itKnowHowIcon = greenImg;
      } else if (connector.itKnowhow === 'Medium' && aufwandThree === 'Low') {
        itKnowHowIcon = yellowImg;
      } else {
        itKnowHowIcon = redImg;
      }
      //link zum Homepage der Connector
      const homepageUrl = connector.connectorWebsite || '';
      //linke Spalte
      pdfDoc.text(`${count}`, x, currentY);
      count++;
      pdfDoc.addImage(imgData, 'JPEG', x, currentY, imgWidth, imgHeight);
      pdfDoc.text(`${connector.connectorMaintainer}`, x, currentY + 7 * verticalSpacing);
      pdfDoc.text(`${connector.serviceLevel}`, x, currentY + 8 * verticalSpacing);
      //mittlere Spalte
      pdfDoc.text(`${connector.connectorName}`, x + 75, currentY + verticalSpacing);
      pdfDoc.text(
        `Implementierungs-Dauer: ${connector.duration}`,
        x + 75,
        currentY + 2 * verticalSpacing,
      );
      pdfDoc.text(`Arbeitsaufwand: ${connector.fte} FTE`, x + 75, currentY + 3 * verticalSpacing);
      //Werte mit Symbole in Ampel Ordnung
      pdfDoc.addImage(
        `${guiSymbol}`,
        'JPEG',
        x + 75,
        currentY + 4.3 * verticalSpacing,
        iconWidth,
        iconHeight,
      );
      pdfDoc.text(`GUI`, x + 80, currentY + 5 * verticalSpacing);
      pdfDoc.addImage(
        `${supportSymbol}`,
        'JPEG',
        x + 75,
        currentY + 5.3 * verticalSpacing,
        iconWidth,
        iconHeight,
      );
      pdfDoc.text(`Support`, x + 80, currentY + 6 * verticalSpacing);
      pdfDoc.addImage(
        `${itKnowHowIcon}`,
        'JPEG',
        x + 75,
        currentY + 6.3 * verticalSpacing,
        iconWidth,
        iconHeight,
      );
      pdfDoc.text(`IT-Know-how`, x + 80, currentY + 7 * verticalSpacing);
      pdfDoc.addImage(
        `${dokumentationSymbol}`,
        'JPEG',
        x + 75,
        currentY + 7.3 * verticalSpacing,
        iconWidth,
        iconHeight,
      );
      pdfDoc.text(`Dokumentation`, x + 80, currentY + 8 * verticalSpacing);
      //rechte Spalte
      pdfDoc.text(
        `${(connector.score * 100).toFixed(0)}%`,
        x + 150,
        currentY + 5 * verticalSpacing,
      );
      pdfDoc.text(`${connector.price}`, x + 150, currentY + 6 * verticalSpacing);
      pdfDoc.textWithLink('Homepage', x + 150, currentY + 8 * verticalSpacing, {
        url: homepageUrl,
      });
      //die Tabellen
      pdfDoc.setFontSize(tableFontSize);
      if (index >= 0) {
        currentY += table1Data.length * cellHeight + verticalSpacing - 20;
      }
      const tableData = [table1Data, table3Data, table2Data];
      const totalTables = tableData.length;
      let currentYOffset = 10; //Abstand zwischen Daten und Tabelle
      const lineHeight = 5;
      const maxRowHeight = 20; //bestimmt Abstand zwischen größe Text Zeilen
      // Iterate through each table in tableData
      tableData.forEach((table, tableIndex) => {
        table.forEach((row, rowIndex) => {
          const nextRowHeight = maxRowHeight;
          const maxCellWidth = cellWidth - 2;
          let rowHeight = 0;
          const cellSpacing = 1;
          let isRowWithLargeText = false;
          // Calculate the maximum height needed for this row
          row.forEach((cell, colIndex) => {
            const cellText = cell !== null ? cell.toString() : 'Null';
            const textLines = pdfDoc.splitTextToSize(cellText, maxCellWidth, { splitBy: 'auto' });
            const cellLinesHeight = textLines.length * tableFontSize;
            // Adjust rowHeight based on the content of the cell
            if (cellLinesHeight > rowHeight) {
              rowHeight = cellLinesHeight - 4;
            }
            // Adjust rowHeight if it exceeds the maxRowHeight
            if (rowHeight > maxRowHeight) {
              rowHeight = maxRowHeight * (textLines.length / 6); //bestimmt Abstand zwischen größe Text Zeilen
              isRowWithLargeText = true;
            }
          });
          // Check if the row with large text exceeds the page height, then start a new page
          if (isRowWithLargeText && currentY + rowHeight > pageHeight / 1.6) {
            pdfDoc.addPage(); // Start a new page
            currentY = 0; // Reset the Y position
          }
          // Iterate through each cell in the row
          row.forEach((cell, colIndex) => {
            const cellX = x + colIndex * cellWidth;
            const cellText = cell !== null ? cell.toString() : 'Null';
            const textLines = pdfDoc.splitTextToSize(cellText, maxCellWidth, { splitBy: 'auto' });
            const cellLinesHeight = textLines.length * tableFontSize;
            const cellY = currentY + rowIndex * cellHeight + currentYOffset;
            const textY = cellY + (rowHeight - cellLinesHeight) / 2;
            const cellLines = textLines.length;
            // Calculate space between lines for proper vertical alignment
            const spaceBetweenLines = (rowHeight - 7 - cellLines * tableFontSize) / (cellLines + 1);
            // Check if textLines length is greater than 2, then handle multi-line text
            if (textLines.length > 2) {
              textLines.forEach((line: string, lineIndex: number) => {
                const adjustedTextY =
                  cellY + spaceBetweenLines * lineIndex + tableFontSize * lineIndex;
                pdfDoc.text(line, cellX + 1, adjustedTextY + 3);
              });
            } else {
              // Handle single or double-line text
              textLines.forEach((line: string, lineIndex: number) => {
                const adjustedTextY =
                  textY + (tableFontSize - cellSpacing - lineHeight) * lineIndex + 6;
                pdfDoc.text(line, cellX + 1, adjustedTextY);
              });
            }
            // Draw rectangle for each cell
            pdfDoc.rect(cellX, cellY, cellWidth, rowHeight);
          });
          // Update currentY position after processing the row
          currentY += rowHeight - 5;
          // Check if the next row exceeds the page height, then start a new page
          if (currentY + nextRowHeight > pageHeight / 2) {
            pdfDoc.addPage(); // Start a new page
            currentY = 0; // Reset the Y position
          }
        });

        // Add vertical offset between tables if not the last table
        if (tableIndex < totalTables - 1) {
          currentYOffset += 10 * cellHeight + verticalSpacing;
        }
      });
      pdfDoc.setFontSize(defaultFontSize);
      currentY += table2Data.length * verticalSpacing + 25;
      if (index < 4) {
        if (currentY + 4 * verticalSpacing + table2Data.length * cellHeight * 5 > pageHeight) {
          pdfDoc.addPage('a4');
          currentY = 10;
        }
      }
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
  const { isDeutsch } = useLanguage();

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
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>
                  {isDeutsch
                    ? stepsObject.stepsAufDeutsch[index]
                    : stepsObject.stepsAufEnglisch[index]}
                </StepLabel>
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
                      {isDeutsch
                        ? translationFunction().deutschTranslations.kategorisierungButton
                        : translationFunction().englishTranslations.kategorisierungButton}
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
                      {isDeutsch
                        ? translationFunction().deutschTranslations.empfehlungPDFButton
                        : translationFunction().englishTranslations.empfehlungPDFButton}
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
                      {isDeutsch
                        ? translationFunction().deutschTranslations.zumConnectorvergleichButton
                        : translationFunction().englishTranslations.zumConnectorvergleichButton}
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
                    {isDeutsch
                      ? translationFunction().deutschTranslations.weiterButton
                      : translationFunction().englishTranslations.weiterButton}
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
