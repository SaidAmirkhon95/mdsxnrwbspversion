import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Tooltip from '@mui/material/Tooltip';
/* import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone'; */
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.primary.main,
  },
}));
function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

export default function CheckBoxFour() {
  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component='fieldset' variant='standard'>
        <FormLabel component='legend'>Budget für Connector</FormLabel>
        <RadioGroup name='use-radio-group' defaultValue='first'>
          <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row' }}>
            <Grid container>
              <Grid>
                <MyFormControlLabel
                  value='keineAngabe'
                  label='keine Angabe'
                  control={<Radio />}
                  style={{ marginRight: '150px' }}
                />
              </Grid>
              <Grid>
                <Tooltip
                  title='Bitte geben Sie eine Schätzung darüber ab,
                  wie viel Budget Sie für den Connector und die Implementierung einsetzen können.
                  Budget:
                  Geben Sie alternativ eine konkrete Summe an:'
                  placement='top-start'
                >
                  <InfoOutlinedIcon color='disabled' fontSize='small' />
                </Tooltip>
              </Grid>
            </Grid>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row' }}>
            <MyFormControlLabel value='gering' label='Gering' control={<Radio />} />
            <TextField variant='standard' />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row' }}>
            <MyFormControlLabel value='mittel' label='Mittel' control={<Radio />} />
            <TextField variant='standard' />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row' }}>
            <MyFormControlLabel value='hoch' label='Hoch' control={<Radio />} />
            <TextField variant='standard' />
          </div>
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
