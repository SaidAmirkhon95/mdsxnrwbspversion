import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Tooltip from '@mui/material/Tooltip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function FilterSelect() {
  const [aufwand, setAufwand] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAufwand(event.target.value);
  };

  return (
    <Box sx={{ display: 'grid' }}>
      <FormControl
        sx={{ m: 0.5, minWidth: 250 }}
        style={{ display: 'inline-flex', alignItems: 'flex-start', flexDirection: 'row' }}
      >
        <FormLabel component='legend'>Beschäftigte IT-Experten</FormLabel>
        <Tooltip
          title='Bitte geben Sie an, wie viele IT-Experten bei Ihnen Beschäftigt sind.'
          placement='top-start'
          style={{ position: 'absolute', right: 0 }}
        >
          <InfoOutlinedIcon color='disabled' fontSize='small' />
        </Tooltip>
      </FormControl>
      <FormControl sx={{ m: 0.5, minWidth: 250 }}>
        <InputLabel id='element'>Wählen Sie ein Element aus</InputLabel>
        <Select
          labelId='element'
          id='someelement'
          value={aufwand}
          label='Wählen Sie ein Element aus'
          onChange={handleChange}
        >
          <MenuItem value={'keine'}>keine Angabe</MenuItem>
          <MenuItem value={'>10'}> bis 10 Beschäftigte</MenuItem>
          <MenuItem value={'11-49'}>11-49 Beschäftigte</MenuItem>
          <MenuItem value={'50-249'}>50-249 Beschäftigte</MenuItem>
          <MenuItem value={'>249'}>mehr als 249 Beschäftigte</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
