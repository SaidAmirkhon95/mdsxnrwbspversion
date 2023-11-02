import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CountrySelect from '../../components/CountrySelect';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useLanguage } from '../../LanguageContext';
import { useTableData } from '../../TableDataProvider';

export default function ReiterStepper1() {
  const { isDeutsch } = useLanguage();
  const { tableData, updateTableData } = useTableData();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    updateTableData({
      ...tableData,
      [name]: value,
    });
  };
  return (
    <React.Fragment>
      <Grid
        item
        xs={12}
        style={{
          display: 'inline-flex',
          flexDirection: 'row',
        }}
      >
        <Typography variant='h6' gutterBottom>
          Generelle Unternehmensinformationen
        </Typography>
        <Tooltip
          title='Tragen Sie hier bitte generelle Informationen zu Ihrem Unternehmen in den Freitextfeldern ein. Diese dienen der eindeutigen Zuordnung ihres Unternehmens.'
          placement='top-start'
        >
          <InfoOutlinedIcon
            color='disabled'
            fontSize='small'
            style={{
              marginLeft: '5px',
              marginTop: '5px',
            }}
          />
        </Tooltip>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id='unternehmen'
            name='company'
            label='Name ihres Unternehmens'
            fullWidth
            autoComplete='unternehmen'
            variant='standard'
            onChange={handleInputChange}
            value={tableData.company}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='form'
            name='form'
            label='Gesellschaftsform'
            fullWidth
            autoComplete='form'
            variant='standard'
            onChange={handleInputChange}
            value={tableData.form}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='branch'
            name='branch'
            label='Branche'
            fullWidth
            autoComplete='branch'
            variant='standard'
            onChange={handleInputChange}
            value={tableData.branch}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id='ort'
            name='ort'
            label='Hauptstandort'
            fullWidth
            autoComplete='ort'
            variant='standard'
            onChange={handleInputChange}
            value={tableData.ort}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id='plz'
            name='plz'
            label='Postleitzahl'
            fullWidth
            autoComplete='postleitzahl'
            variant='standard'
            onChange={handleInputChange}
            value={tableData.plz}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          {<CountrySelect />}
        </Grid>
        <Grid item xs={12} sm={6}>
          {}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: 'inline-flex',
          alignItems: 'flex-start',
          flexDirection: 'row',
        }}
      >
        <Typography variant='h6' gutterBottom>
          Kontaktinformationen
        </Typography>
        <Tooltip
          title='Tragen Sie hier bitte Informationen zur Kontaktperson in den Freitextfeldern ein.'
          placement='top-start'
          style={{ marginLeft: '5px', marginTop: '5px' }}
        >
          <InfoOutlinedIcon color='disabled' fontSize='small' />
        </Tooltip>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='vorname'
            name='vorname'
            label='Vorname'
            fullWidth
            autoComplete='vorname'
            variant='standard'
            onChange={handleInputChange}
            value={tableData.vorname}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='nachname'
            name='nachname'
            label='Nachname'
            fullWidth
            autoComplete='nachname'
            variant='standard'
            onChange={handleInputChange}
            value={tableData.nachname}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='email'
            name='email'
            label='E-Mail für Kontakt'
            fullWidth
            autoComplete='email'
            variant='standard'
            onChange={handleInputChange}
            value={tableData.email}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
