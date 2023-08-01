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
        <FormLabel component='legend'>Unternehmensgröße</FormLabel>
        <Tooltip
          title='Bitte geben Sie hier Ihre Unternehmensgröße nach Mitarbeitendenanzahl und Umsatz an:
          Start-Up: (junges)Kleinesunternehmen mit dynamische Wachstum.
          Kleinstunternehmen: <10 Beschäftigte, <2 Mio.€ Umsatz. 
          Kleines Unternehmen: <11-49 Beschäftigte, <10 Mio.€ Umsatz.
          Mittleres Unternehmen: <50-249 Beschäftigte, <50 Mio.€ Umsatz.
          Großes Unternehmen: >249 Beschäftigte, >50 Mio.€ Umsatz.'
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
          <MenuItem value={'startup'}>Start-Up</MenuItem>
          <MenuItem value={'kleinst'}>Kleinstunternehmen</MenuItem>
          <MenuItem value={'kleines'}>Kleines Unternehmen</MenuItem>
          <MenuItem value={'mittel'}>Mittleres Unternehmen</MenuItem>
          <MenuItem value={'groß'}>Großunternehmen</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
