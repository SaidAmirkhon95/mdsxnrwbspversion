import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useLanguage } from '../../LanguageContext';
import translationFunction from 'translationFunction';
import ReiterCheckOne from 'components/ReiterCheckOne';
import ReiterCheckTwo from 'components/ReiterCheckTwo';
import ReiterCheckThree from 'components/ReiterCheckThree';
import ReiterCheckFour from 'components/ReiterCheckFour';
import ReiterCheckFive from 'components/ReiterCheckFive';
import ReiterCheckSix from 'components/ReiterCheckSix';
import ReiterCheckSeven from 'components/ReiterCheckSeven';
import ReiterCheckEight from 'components/ReiterCheckEight';
import ReiterCheckNine from 'components/ReiterCheckNine';
import ReiterCheckTen from 'components/ReiterCheckTen';
import ReiterCheckEleven from 'components/ReiterCheckEleven';

export default function ReiterStepper2() {
  const { isDeutsch } = useLanguage();
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom align='center' style={{ marginBottom: '20px' }}>
        {isDeutsch
          ? translationFunction().deutschTranslations.stepper2
          : translationFunction().englishTranslations.stepper2}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ReiterCheckOne />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReiterCheckTwo />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReiterCheckThree />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReiterCheckFour />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReiterCheckFive />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReiterCheckSix />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReiterCheckSeven />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReiterCheckEight />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReiterCheckNine />
          <ReiterCheckTen />
        </Grid>
        <Grid item xs={12} md={6}>
          <ReiterCheckEleven />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
