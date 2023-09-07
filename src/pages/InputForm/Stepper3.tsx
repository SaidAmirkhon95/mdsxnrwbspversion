import * as React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FilterOpenSource from 'components/FilterOpenSource';
import FilterServiceLevel from 'components/FilterServiceLevel';
import FilterDeployementTyp from 'components/FilterDeployementTyp';
import FilterSelect from 'components/FilterSelect';
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
import { useLanguage } from '../../LanguageContext';
import translationFunction from 'translationFunction';

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

                  if (item?.dokumentation) {
                    itemsTrueGreen.push('Dokumentation');
                  } else {
                    itemsFalseRed.push('Dokumentation');
                  }

                  if (item?.itknowhow === 0) {
                    itemsTrueGreen.push('IT-Know-How');
                  } else if (item?.itknowhow === 1) {
                    itemsYellow.push('IT-Know-How');
                  } else {
                    itemsFalseRed.push('IT-Know-How');
                  }

                  if (item?.support) {
                    itemsTrueGreen.push('Support');
                  } else {
                    itemsFalseRed.push('Support');
                  }
                  return (
                    <Paper
                      key={item.connector}
                      elevation={0}
                      sx={{
                        p: 1,
                        marginBottom: '10px',
                      }}
                    >
                      <Paper
                        elevation={6}
                        key={item.connector}
                        sx={{ py: 1, px: 0 }}
                        style={{
                          borderColor: '#B4B4B4',
                          padding: '10px',
                          boxShadow: '0 1px 3px 0 rgba(0,0,0,0.6)',
                        }}
                      >
                        <Grid container>
                          <Grid item xs={12} md={isTablet ? 3 : 5}>
                            <p style={{ marginTop: '-8px', marginLeft: '-5px' }}>
                              <img
                                src={item.logo}
                                alt={`Logo für ${item.logo}`}
                                style={{ width: '100px', height: '100px' }}
                              />
                            </p>
                            {isMobile ? (
                              <Typography
                                variant='h6'
                                sx={{ textAlign: 'start', fontWeight: 'bold' }}
                              >
                                {item?.name}
                              </Typography>
                            ) : (
                              ''
                            )}
                            <p>{item?.maintainer}</p>
                            <p>{item?.dienst}</p>
                            <Grid item xs={isTablet ? 7 : 12} md={11.1}>
                              <Typography
                                onClick={() => handleDialogOpen(index)}
                                style={{ textDecoration: 'underline', cursor: 'pointer' }}
                              >
                                {isDeutsch
                                  ? translationFunction().deutschTranslations.stepper35
                                  : translationFunction().englishTranslations.stepper35}{' '}
                                {item.connector}
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
                                    ? Connectors[selectedConnectorIndex].connector
                                    : ''}
                                </BootstrapDialogTitle>
                                <DialogContent dividers>
                                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs
                                      value={value}
                                      onChange={handleChange}
                                      aria-label='basic tabs example'
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
                                          sx={{ minWidth: 700 }}
                                          size='small'
                                          aria-label='a dense table'
                                        >
                                          <TableBody>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                Name
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].name}
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
                                                {Connectors[selectedConnectorIndex].description}
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
                                                Matching
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].score}
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
                                                {Connectors[selectedConnectorIndex].location}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                Website
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].website}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper313
                                                  : translationFunction().englishTranslations
                                                      .stepper313}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].zielgruppe}
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
                                          sx={{ minWidth: 700 }}
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
                                                {Connectors[selectedConnectorIndex].lizenz}
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
                                                {Connectors[selectedConnectorIndex].spezifischeGUI}
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
                                                {Connectors[selectedConnectorIndex].cloudGebraucht}
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
                                                {Connectors[selectedConnectorIndex].basedonODRL}
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
                                                    .alternativPolicy
                                                }
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
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
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper320
                                                  : translationFunction().englishTranslations
                                                      .stepper320}
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].usedProtocols}
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
                                          sx={{ minWidth: 700 }}
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
                                                {Connectors[selectedConnectorIndex].typ}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                Version
                                              </TableCell>
                                              <TableCell>
                                                {Connectors[selectedConnectorIndex].version}
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
                                                {Connectors[selectedConnectorIndex].deployment}
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
                                                {
                                                  Connectors[selectedConnectorIndex]
                                                    .regionalBeschränkt
                                                }
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
                                                {Connectors[selectedConnectorIndex].industrie}
                                              </TableCell>
                                            </TableRow>
                                            <TableRow>
                                              <TableCell style={{ borderLeft: '1px solid #ccc' }}>
                                                {isDeutsch
                                                  ? translationFunction().deutschTranslations
                                                      .stepper326
                                                  : translationFunction().englishTranslations
                                                      .stepper326}
                                              </TableCell>
                                              <TableCell>
                                                {
                                                  Connectors[selectedConnectorIndex]
                                                    .specialUsagePolicies
                                                }
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
                          <Grid item xs={isTablet ? 7 : 12} md={isTablet ? 3 : 5}>
                            {isMobile ? (
                              ''
                            ) : (
                              <Typography
                                variant='h6'
                                sx={{ textAlign: 'start', fontWeight: 'bold' }}
                              >
                                {item?.name}
                              </Typography>
                            )}
                            {isDeutsch
                              ? translationFunction().deutschTranslations.stepper32
                              : translationFunction().englishTranslations.stepper32}{' '}
                            {item?.duration} <br />
                            {isDeutsch
                              ? translationFunction().deutschTranslations.stepper32halb
                              : translationFunction().englishTranslations.stepper32halb}{' '}
                            {item?.fte} FTE
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
                            xs={isTablet ? 7 : 12}
                            md={isTablet ? 1 : 2}
                            style={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              alignItems: 'center',
                              marginLeft: '-20px',
                            }}
                          >
                            <Typography variant='body1' align='right'>
                              {item?.score} <br />
                              {item?.price}
                              <div
                                style={{
                                  marginBottom: isMobile ? '' : isTablet ? '' : '-100px',
                                }}
                              >
                                {item?.link}
                              </div>
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
