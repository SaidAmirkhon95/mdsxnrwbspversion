import * as React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import FilterOpenSource from 'components/FilterOpenSource';
import FilterServiceLevel from 'components/FilterServiceLevel';
import FilterDeployementTyp from 'components/FilterDeployementTyp';
import { Connectors } from 'components/Connectors';
import ReactPaginate from 'react-paginate';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import { styled, Drawer, Divider, Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useLanguage } from '../../LanguageContext';
import translationFunction from 'translationFunction';
import { useMyContext } from '../../MyContext';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const theme = createTheme({
  palette: {
    primary: {
      light: '#005B7F',
      main: '#11998E',
      dark: '#005946',
      contrastText: '#fff',
    },
  },
});

const myComponent = {
  height: '400px',
  overflow: 'scroll',
};

//from here MoreInfoTable
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
//bis hier

//Tabs function
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
//bis hier
export default function Stepper3() {
  const { isDeutsch } = useLanguage();
  const [pagination, setPagination] = useState({
    data: Connectors,
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: [],
  });

  useEffect(() => {
    setPagination((prevState: any) => ({
      ...prevState,
      pageCount: prevState.data.length / prevState.numberPerPage,
      currentData: prevState.data.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage,
      ),
    }));
  }, [pagination.numberPerPage, pagination.offset]);

  const handlePageClick = (event: any) => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage;
    setPagination({ ...pagination, offset });
  };

  const [filterOpen, setFilterOpen] = useState(false);
  const handleFilterOpen = () => {
    setFilterOpen(true);
  };
  const handleFilterClose = () => {
    setFilterOpen(false);
  };
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const drawerWidth = 250;
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

  //Popup and Table
  const [selectedConnectorIndex, setSelectedConnectorIndex] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(new Array(Connectors.length).fill(false));

  //Tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //Mobile and Tablet Views
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

  const [isTablet, setIsTablet] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { aufwandThree } = useMyContext();

  return (
    <React.Fragment>
      <div style={{ display: 'flex', overflow: 'hidden', maxWidth: '2000px', margin: '0 auto' }}>
        <div
          style={{
            flexGrow: '15',
            padding: '0px',
            marginRight: '0px',
          }}
        >
          <Typography variant='h6' gutterBottom>
            {isDeutsch
              ? translationFunction().deutschTranslations.stepper31
              : translationFunction().englishTranslations.stepper31}
          </Typography>
          <List disablePadding style={myComponent}>
            <div>
              {pagination.currentData &&
                pagination.currentData.map((item: any, index: any) => {
                  const handleDialogOpen = (ind: any) => {
                    setSelectedConnectorIndex(index);
                    const newDialogStates = [...openDialog];
                    newDialogStates[ind] = true;
                    setOpenDialog(newDialogStates);
                  };
                  const handleDialogClose = (ind: any) => {
                    const newDialogStates = [...openDialog];
                    newDialogStates[ind] = false;
                    setOpenDialog(newDialogStates);
                  };
                  const itemsTrueGreen = [];
                  const itemsYellow = [];
                  const itemsFalseRed = [];

                  if (item?.gui) {
                    itemsTrueGreen.push('GUI');
                  } else {
                    itemsFalseRed.push('GUI');
                  }

                  if (item?.hasDocumentation) {
                    itemsTrueGreen.push('Dokumentation');
                  } else {
                    itemsFalseRed.push('Dokumentation');
                  }
                  if (item?.itknowhow === aufwandThree || aufwandThree === 'High') {
                    itemsTrueGreen.push('IT-Know-How');
                  } else if (item?.itknowhow === 'Medium' && aufwandThree === 'Low') {
                    itemsYellow.push('IT-Know-How');
                  } else {
                    itemsFalseRed.push('IT-Know-How');
                  }

                  if (item?.hasSupport) {
                    itemsTrueGreen.push('Support');
                  } else {
                    itemsFalseRed.push('Support');
                  }
                  return (
                    <Paper
                      key={item.id}
                      elevation={0}
                      sx={{
                        p: 1,
                        marginBottom: '10px',
                      }}
                    >
                      <Paper
                        elevation={6}
                        key={item.id}
                        sx={{ py: 1, px: 0 }}
                        style={{
                          borderColor: '#B4B4B4',
                          padding: '10px',
                          boxShadow: '0 1px 3px 0 rgba(0,0,0,0.6)',
                        }}
                      >
                        <Grid container>
                          <Grid item xs={12} md={isMobile ? 12 : isTablet ? 3 : 5}>
                            <div style={{ color: 'grey' }}>{`${item.id}.`}</div>
                            {/* <div>
                              <text style={{ fontSize: '15px', color: '#11998E' }}>
                                Preis-Leistungs-Empfehlung
                              </text>
                              <Tooltip title='Info' placement='top-start'>
                                <InfoOutlinedIcon
                                  color='disabled'
                                  fontSize='small'
                                  style={{
                                    marginLeft: '5px',
                                    paddingTop: '5px',
                                  }}
                                />
                              </Tooltip>
                            </div> */}
                            <p style={{ marginTop: '-8px', marginLeft: '-5px' }}>
                              <img
                                src={item.connectorLogo}
                                alt={`Logo für ${item.connectorLogo}`}
                                style={{ width: '100px', height: '100px' }}
                              />
                            </p>
                            {isMobile ? (
                              <Typography
                                variant='h6'
                                sx={{ textAlign: 'start', fontWeight: 'bold' }}
                              >
                                {item?.connectorName}
                              </Typography>
                            ) : (
                              ''
                            )}
                            <p>{item?.connectorMaintainer}</p>
                            <p>{item?.serviceLevel}</p>
                            <Grid item xs={isMobile ? 12 : isTablet ? 7 : 12} md={11.1}>
                              <Typography
                                onClick={() => handleDialogOpen(index)}
                                style={{
                                  textDecoration: 'underline',
                                  cursor: 'pointer',
                                  color: '#11998E',
                                }}
                              >
                                {isDeutsch
                                  ? translationFunction().deutschTranslations.stepper35
                                  : translationFunction().englishTranslations.stepper35}{' '}
                              </Typography>
                              <BootstrapDialog
                                onClose={() => handleDialogClose(index)}
                                aria-labelledby='customized-dialog-title'
                                aria-describedby='alert-dialog-description'
                                open={openDialog[index]}
                                maxWidth='lg'
                              >
                                <BootstrapDialogTitle
                                  id='customized-dialog-title'
                                  onClose={() => handleDialogClose(index)}
                                >
                                  {isDeutsch
                                    ? translationFunction().deutschTranslations.stepper36
                                    : translationFunction().englishTranslations.stepper36}{' '}
                                  {selectedConnectorIndex !== null
                                    ? Connectors[selectedConnectorIndex].connectorName
                                    : ''}
                                </BootstrapDialogTitle>
                                <DialogContent dividers>
                                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs
                                      value={value}
                                      onChange={handleChange}
                                      aria-label='basic tabs example'
                                      orientation={isMobile ? 'vertical' : 'horizontal'}
                                    >
                                      <Tab
                                        label={
                                          isDeutsch
                                            ? translationFunction().deutschTranslations.stepper37
                                            : translationFunction().englishTranslations.stepper37
                                        }
                                        {...a11yProps(0)}
                                      />
                                      <Tab
                                        label={
                                          isDeutsch
                                            ? translationFunction().deutschTranslations.stepper38
                                            : translationFunction().englishTranslations.stepper38
                                        }
                                        {...a11yProps(1)}
                                      />
                                      <Tab
                                        label={
                                          isDeutsch
                                            ? translationFunction().deutschTranslations.stepper39
                                            : translationFunction().englishTranslations.stepper39
                                        }
                                        {...a11yProps(2)}
                                      />
                                    </Tabs>
                                  </Box>
                                  <CustomTabPanel value={value} index={0}>
                                    {selectedConnectorIndex !== null && (
                                      <TableContainer
                                        component={Paper}
                                        style={{ width: '100%', marginBottom: '20px' }}
                                      >
                                        <Table
                                          sx={{ minWidth: isMobile ? 400 : 700 }}
                                          size='small'
                                          aria-label='a dense table'
                                        >
                                          <TableBody>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                Name
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].connectorName}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper310
                                                  : translationFunction().englishTranslations
                                                      .stepper310}
                                              </TableCell>
                                              <TableCell>
                                                {
                                                  Connectors[selectedConnectorIndex]
                                                    .connectorDescription
                                                }
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch ? 'Zahlung' : 'Payment'}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].payment === true
                                                  ? isDeutsch
                                                    ? 'Ja'
                                                    : 'Yes'
                                                  : isDeutsch
                                                  ? 'Nein'
                                                  : 'No'}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch ? 'Preismodell' : 'Pricing Model'}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].pricingModel}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper311
                                                  : translationFunction().englishTranslations
                                                      .stepper311}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].price}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? 'Zahlungsintervall'
                                                  : 'Payment Interval'}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].paymentInterval}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? 'Abonnementbeschreibung'
                                                  : 'Abonnement Description'}
                                              </TableCell>
                                              <TableCell>
                                                {
                                                  Connectors[selectedConnectorIndex]
                                                    .abonnementDescription
                                                }
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? 'Kostenberechnungsbasis'
                                                  : 'Cost Calculation Basis'}
                                              </TableCell>
                                              <TableCell>
                                                {
                                                  Connectors[selectedConnectorIndex]
                                                    .costCalculationBasis
                                                }
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? 'Matching zu Benutzerangaben'
                                                  : 'Matching to user information'}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].score !==
                                                undefined
                                                  ? `${Math.floor(item.score * 100)}% ${
                                                      isDeutsch ? 'Score' : 'Score'
                                                    }`
                                                  : ''}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch ? 'Vorname' : 'First Name'}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].contactForename}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch ? 'Nachname' : 'Last Name'}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].contactName}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch ? 'Kontakt Email' : 'Contact Email'}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].connectorEmail}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper312
                                                  : translationFunction().englishTranslations
                                                      .stepper312}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].contactLocation}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                Website
                                              </TableCell>
                                              <TableCell>
                                                {
                                                  Connectors[selectedConnectorIndex]
                                                    .connectorWebsite
                                                }
                                              </TableCell>
                                            </TableRow>
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    )}
                                  </CustomTabPanel>
                                  <CustomTabPanel value={value} index={1}>
                                    {selectedConnectorIndex !== null && (
                                      <TableContainer
                                        component={Paper}
                                        style={{ width: '100%', marginBottom: '20px' }}
                                      >
                                        <Table
                                          sx={{ minWidth: isMobile ? 400 : 700 }}
                                          size='small'
                                          aria-label='a dense table'
                                        >
                                          <TableBody>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                Open Source
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].openSource}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper314
                                                  : translationFunction().englishTranslations
                                                      .stepper314}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].license}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                GUI
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].gui === true
                                                  ? isDeutsch
                                                    ? 'Ja'
                                                    : 'Yes'
                                                  : isDeutsch
                                                  ? 'Nein'
                                                  : 'No'}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper315
                                                  : translationFunction().englishTranslations
                                                      .stepper315}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex]
                                                  .dsSpecificGui === true
                                                  ? isDeutsch
                                                    ? 'Ja'
                                                    : 'Yes'
                                                  : isDeutsch
                                                  ? 'Nein'
                                                  : 'No'}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? 'Selbstimplementierung'
                                                  : 'Self-implementation'}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex]
                                                  .selfImplementation === true
                                                  ? isDeutsch
                                                    ? 'Ja'
                                                    : 'Yes'
                                                  : isDeutsch
                                                  ? 'Nein'
                                                  : 'No'}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper316
                                                  : translationFunction().englishTranslations
                                                      .stepper316}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].cloudNeeded ===
                                                true
                                                  ? isDeutsch
                                                    ? 'Ja'
                                                    : 'Yes'
                                                  : isDeutsch
                                                  ? 'Nein'
                                                  : 'No'}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                Cloud Provider
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].cloud}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper317
                                                  : translationFunction().englishTranslations
                                                      .stepper317}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].basedOnODRL ===
                                                true
                                                  ? isDeutsch
                                                    ? 'Ja'
                                                    : 'Yes'
                                                  : isDeutsch
                                                  ? 'Nein'
                                                  : 'No'}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper318
                                                  : translationFunction().englishTranslations
                                                      .stepper318}
                                              </TableCell>
                                              <TableCell>
                                                {
                                                  Connectors[selectedConnectorIndex]
                                                    .alternativePolicyExpressionModel
                                                }
                                              </TableCell>
                                            </TableRow>
                                            {/* <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper319
                                                  : translationFunction().englishTranslations
                                                      .stepper319}
                                              </TableCell>
                                              <TableCell>
                                                {
                                                  Connectors[selectedConnectorIndex]
                                                    .volumeRestricted
                                                }
                                              </TableCell>
                                            </TableRow> */}
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper320
                                                  : translationFunction().englishTranslations
                                                      .stepper320}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[
                                                  selectedConnectorIndex
                                                ].usedProtocols.map((protocol, index) => (
                                                  <div key={index}>{protocol}</div>
                                                ))}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper321
                                                  : translationFunction().englishTranslations
                                                      .stepper321}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].trl}
                                              </TableCell>
                                            </TableRow>
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    )}
                                  </CustomTabPanel>
                                  <CustomTabPanel value={value} index={2}>
                                    {selectedConnectorIndex !== null && (
                                      <TableContainer
                                        component={Paper}
                                        style={{ width: '100%', marginBottom: '20px' }}
                                      >
                                        <Table
                                          sx={{ minWidth: isMobile ? 400 : 700 }}
                                          size='small'
                                          aria-label='a dense table'
                                        >
                                          <TableBody>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper322
                                                  : translationFunction().englishTranslations
                                                      .stepper322}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].connectorType}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                Version
                                              </TableCell>
                                              <TableCell>
                                                {
                                                  Connectors[selectedConnectorIndex]
                                                    .connectorVersion
                                                }
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper323
                                                  : translationFunction().englishTranslations
                                                      .stepper323}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[
                                                  selectedConnectorIndex
                                                ].deploymentType.map((deployment, index) => (
                                                  <div key={index}>{deployment}</div>
                                                ))}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper324
                                                  : translationFunction().englishTranslations
                                                      .stepper324}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex]
                                                  .regionalRestrictions === true
                                                  ? isDeutsch
                                                    ? 'Ja'
                                                    : 'Yes'
                                                  : isDeutsch
                                                  ? 'Nein'
                                                  : 'No'}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper325
                                                  : translationFunction().englishTranslations
                                                      .stepper325}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[
                                                  selectedConnectorIndex
                                                ].targetIndustrySectors.map((sector, index) => (
                                                  <div key={index}>{sector}</div>
                                                ))}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                Target Data Space Roles
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[
                                                  selectedConnectorIndex
                                                ].targetDataspaceRoles.map((sector, index) => (
                                                  <div key={index}>{sector}</div>
                                                ))}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper327
                                                  : translationFunction().englishTranslations
                                                      .stepper327}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].references}
                                              </TableCell>
                                            </TableRow>
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    )}
                                  </CustomTabPanel>
                                </DialogContent>
                              </BootstrapDialog>
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            xs={isMobile ? 12 : isTablet ? 7 : 12}
                            md={isMobile ? 12 : isTablet ? 3 : 5}
                          >
                            {isMobile ? (
                              ''
                            ) : (
                              <Typography
                                variant='subtitle1'
                                sx={{ textAlign: 'start', fontWeight: 'bold' }}
                              >
                                {item?.connectorName}
                              </Typography>
                            )}
                            {isDeutsch
                              ? translationFunction().deutschTranslations.stepper32
                              : translationFunction().englishTranslations.stepper32}{' '}
                            {item?.duration} <br />
                            {isDeutsch
                              ? translationFunction().deutschTranslations.stepper32halb
                              : translationFunction().englishTranslations.stepper32halb}{' '}
                            {item?.fte}
                            <p></p>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                              }}
                            >
                              {itemsTrueGreen.map((itemName) => (
                                <div
                                  key={itemName}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: 'green',
                                  }}
                                >
                                  <CheckCircleOutlineRoundedIcon style={{ marginRight: '5px' }} />
                                  {itemName}
                                </div>
                              ))}

                              {itemsYellow.map((itemName) => (
                                <div
                                  key={itemName}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: 'darkorange',
                                  }}
                                >
                                  <CheckCircleOutlineRoundedIcon style={{ marginRight: '5px' }} />
                                  {itemName}
                                </div>
                              ))}

                              {itemsFalseRed.map((itemName) => (
                                <div
                                  key={itemName}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: 'red',
                                  }}
                                >
                                  <ErrorOutlineRoundedIcon style={{ marginRight: '5px' }} />
                                  {itemName}
                                </div>
                              ))}
                            </div>
                          </Grid>
                          <Grid
                            item
                            xs={isMobile ? 12 : isTablet ? 7 : 12}
                            md={isMobile ? 12 : isTablet ? 1 : 2}
                            style={{ marginLeft: '-20px' }}
                          >
                            <Typography variant='body1' align='right'>
                              <Grid>
                                <div style={{ fontSize: '15px' }}>
                                  {item?.score !== undefined
                                    ? `${Math.floor(item.score * 100)}% ${
                                        isDeutsch ? 'Score' : 'Score'
                                      }`
                                    : ''}
                                </div>
                                <div
                                  style={{
                                    color: 'grey',
                                    fontWeight: 'bold',
                                    fontSize: '25px',
                                    display: 'inline-flex',
                                    flexDirection: 'row',
                                  }}
                                >
                                  {`${item?.price} €`}
                                  <Tooltip title='Info' placement='top-start'>
                                    <InfoOutlinedIcon
                                      color='disabled'
                                      fontSize='small'
                                      style={{
                                        marginLeft: '5px',
                                        paddingTop: '5px',
                                      }}
                                    />
                                  </Tooltip>
                                </div>
                                <text style={{ fontSize: '10px' }}>Durchschnitt pro Monat</text>
                              </Grid>
                              {isMobile ? '' : isTablet ? '' : <br />}
                              {isMobile ? '' : isTablet ? '' : <br />}
                              {isMobile ? '' : isTablet ? '' : <br />}
                              <Grid
                                style={{
                                  display: 'flex',
                                  justifyContent: 'flex-end',
                                }}
                              >
                                <Button
                                  variant='contained'
                                  sx={{ mt: 3, ml: 1 }}
                                  href={item?.connectorWebsite}
                                  target='_blank'
                                >
                                  Weiter
                                </Button>
                              </Grid>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Paper>
                  );
                })}
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pagination.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'activePaginate'}
              />
            </div>
          </List>
        </div>
        <div id='drawer-container' style={{ position: 'relative' }}>
          <IconButton
            color='primary'
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <FilterListIcon />
          </IconButton>

          <Drawer
            sx={{
              flexGrow: 1,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                position: 'absolute',
                paddingLeft: '0px',
                transition: 'none !important',
              },
            }}
            variant='persistent'
            anchor='right'
            open={open}
            PaperProps={{ style: { position: 'absolute' } }}
            BackdropProps={{ style: { position: 'absolute', overflow: 'hidden' } }}
            ModalProps={{
              container: document.getElementById('drawer-container'),
              style: { position: 'absolute', overflow: 'hidden' },
              keepMounted: true,
            }}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <div style={{ padding: '20px' }}>
              <FilterOpenSource />
              <br />
              <FilterServiceLevel />
              <br />
              <FilterDeployementTyp />
              {/* <br />
              <FilterSelect /> */}
            </div>
          </Drawer>
        </div>
      </div>
    </React.Fragment>
  );
}
