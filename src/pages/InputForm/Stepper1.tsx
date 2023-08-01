import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CountrySelect from '../../components/CountrySelect';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Stepper1() {
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
          title='Tragen Sie hier bitte generelle Informationen zu Ihrem Unternehmen in den Freitextfeldern ein. Diese dienen 
          der eindeutigen Zuordnung ihres Unternehmens.'
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
            name='unternehmen'
            label='Name ihres Unternehmens'
            fullWidth
            autoComplete='unternehmen'
            variant='standard'
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
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id='plz'
            name='postleitzahl'
            label='Postleitzahl'
            fullWidth
            autoComplete='postleitzahl'
            variant='standard'
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
          />
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
          <FormControlLabel
            control={<Checkbox color='primary' name='saveInfo' value='yes' />}
            label='Möchten Sie zukünftig weitere Data Spaces adressieren?'
          />
          <Tooltip
            title='Sie benötigen nur einen Connector bei ihrem Unternehmen, um andere Data Spaces zu adressieren. Sollten andere Domänen, neben der Domäne Mobolität (bspw. Automotive, Gesundheitswesen, Energie etc.), für Sie relevant sein empfehlen wir hier einen Haken zu setzen.'
            placement='top-start'
            style={{ marginLeft: '-10px', marginTop: '10px' }}
          >
            <InfoOutlinedIcon color='disabled' fontSize='small' />
          </Tooltip>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
