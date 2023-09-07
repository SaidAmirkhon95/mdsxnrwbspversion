import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CountrySelect from '../../components/CountrySelect';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useLanguage } from '../../LanguageContext';
import translationFunction from 'translationFunction';

export default function Stepper1() {
  const { isDeutsch } = useLanguage();
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
          {isDeutsch
            ? translationFunction().deutschTranslations.stepper11
            : translationFunction().englishTranslations.stepper11}
        </Typography>
        <Tooltip
          title={
            isDeutsch
              ? translationFunction().deutschTranslations.stepper12
              : translationFunction().englishTranslations.stepper12
          }
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
            label={
              isDeutsch
                ? translationFunction().deutschTranslations.stepper13
                : translationFunction().englishTranslations.stepper13
            }
            fullWidth
            autoComplete='unternehmen'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='form'
            name='form'
            label={
              isDeutsch
                ? translationFunction().deutschTranslations.stepper14
                : translationFunction().englishTranslations.stepper14
            }
            fullWidth
            autoComplete='form'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='branch'
            name='branch'
            label={
              isDeutsch
                ? translationFunction().deutschTranslations.stepper15
                : translationFunction().englishTranslations.stepper15
            }
            fullWidth
            autoComplete='branch'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id='ort'
            name='ort'
            label={
              isDeutsch
                ? translationFunction().deutschTranslations.stepper16
                : translationFunction().englishTranslations.stepper16
            }
            fullWidth
            autoComplete='ort'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id='plz'
            name='postleitzahl'
            label={
              isDeutsch
                ? translationFunction().deutschTranslations.stepper17
                : translationFunction().englishTranslations.stepper17
            }
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
          {isDeutsch
            ? translationFunction().deutschTranslations.stepper18
            : translationFunction().englishTranslations.stepper18}
        </Typography>
        <Tooltip
          title={
            isDeutsch
              ? translationFunction().deutschTranslations.stepper19
              : translationFunction().englishTranslations.stepper19
          }
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
            label={
              isDeutsch
                ? translationFunction().deutschTranslations.stepper110
                : translationFunction().englishTranslations.stepper110
            }
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
            label={
              isDeutsch
                ? translationFunction().deutschTranslations.stepper111
                : translationFunction().englishTranslations.stepper111
            }
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
            label={
              isDeutsch
                ? translationFunction().deutschTranslations.stepper112
                : translationFunction().englishTranslations.stepper112
            }
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
            label={
              isDeutsch
                ? translationFunction().deutschTranslations.stepper113
                : translationFunction().englishTranslations.stepper113
            }
          />
          <Tooltip
            title={
              isDeutsch
                ? translationFunction().deutschTranslations.stepper114
                : translationFunction().englishTranslations.stepper114
            }
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
