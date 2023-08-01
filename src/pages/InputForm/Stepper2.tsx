import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckBoxOne from '../../components/CheckBoxOne';
import CheckBoxTwo from '../../components/CheckBoxTwo';
import CheckBoxThree from '../../components/CheckBoxThree';
/* import CheckBoxFour from 'components/CheckBoxFour'; */
import CheckBoxFive from '../../components/CheckBoxFive';
import CheckBoxSix from '../../components/CheckBoxSix';
import CheckBoxSeven from '../../components/CheckBoxSeven';
import CheckBoxEight from '../../components/CheckBoxEight';

export default function Stepper2() {
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom align='center' style={{ marginBottom: '20px' }}>
        Bitte tragen Sie im Folgenden Informationen ein, die zur Kategorisieung Ihres Unternehmens
        dienen.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CheckBoxOne />
        </Grid>
        <Grid item xs={12} md={6}>
          <CheckBoxTwo />
        </Grid>
        <Grid item xs={12} md={6}>
          <CheckBoxThree />
        </Grid>
        <Grid item xs={12} md={6}>
          <CheckBoxFive />
        </Grid>
        <Grid item xs={12} md={6}>
          <CheckBoxSix />
        </Grid>
        <Grid item xs={12} md={6}>
          <CheckBoxSeven />
        </Grid>
        <Grid item xs={12} md={6}>
          <CheckBoxEight />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
