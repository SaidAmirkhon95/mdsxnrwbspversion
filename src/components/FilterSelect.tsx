import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography } from '@mui/material';

export default function FilterSelect() {
  const [aufwand, setAufwand] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAufwand(event.target.value);
  };

  return (
    <div>
      {/* <Typography>Lizenz</Typography> */}
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id='demo-simple-select-helper-label'>Lizenz</InputLabel>
        <Select
          labelId='demo-simple-select-helper-label'
          id='programmieraufwand'
          value={aufwand}
          label='Lizenz'
          onChange={handleChange}
        >
          <MenuItem value={'hoch'}>keine Auswahl</MenuItem>
          <MenuItem value={'mittel'}>Apache</MenuItem>
          <MenuItem value={'niedrig'}>niedrig-CaaS</MenuItem>
          <MenuItem value={'alle'}>alle</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
