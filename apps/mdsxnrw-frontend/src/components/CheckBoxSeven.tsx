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
        <FormLabel component='legend'>Datennutzungsbediengungen (Usage Policies)</FormLabel>
        <Tooltip
          title='Welche Datennutzungsbedingungen benötigen Sie?
          Standardnutzungsbedingungen: zum Beispiel „Datennutzung auf bestimmte Orte beschränken“,
          „Datennutzung auf bestimmte Connectoren beschränken“, „Datennutzer darf nur verschlüsselte Daten weiterleiten“.
          Komplette Nutzungsbedingungen siehe: Appendix A.1in Usage Control in the International Data Spaces
          (https://doi.org/10.5281/zenodo.5675884)
          Spezielle Nutzungsbedingungen: Selbsterstellte Nutzungsbedingungen, die über die gegebenen Standardbedingungen hinausgehen.'
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
          <MenuItem value={'standard'}>Standardnutzungsbedingungen</MenuItem>
          <MenuItem value={'speziell'}>Spezielle Nutzungsbedingungen</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
