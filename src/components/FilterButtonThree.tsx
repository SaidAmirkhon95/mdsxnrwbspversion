import * as React from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FormHelperText from '@mui/material/FormHelperText';

export default function FilterButtonThree() {
  const [filter, setFilter] = React.useState(true);
  return (
    <div>
      <Box>
        <FormControlLabel
          sx={{
            display: 'block',
          }}
          control={<Switch checked={!filter} onChange={() => setFilter(!filter)} color='primary' />}
          label='IDS-Ready Certification?'
        />
        <hr />
        <FormHelperText>Muss der Connector IDS-Ready zertifiziert sein?</FormHelperText>
      </Box>
    </div>
  );
}
