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
        <FormLabel component='legend'>Service Level</FormLabel>
        <Tooltip
          title='Wie soll der Connector eingesetezt werden?
          CaaS: Connector-as-a-Service, Of-the-Shelf-Solution.
          Ähnlich wie bei Software wird Ihnen der Connector als komplettes Software-Paket (Software-as-a-Service) angeboten.
          PaaS: Platform-as-a-Service. Der Connector ist ein zusätzlicher Dienst im Rahmen eines Platfform-Dienstes, auf dem Sie ggf. 
          schon Daten in der Cloud speichern.
          Self-Service: Sie entwickeln einen Connector slebst und entwickeln diesen passgenau auf Ihre Anforderungen.'
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
          <MenuItem value={'caas'}>CaaS</MenuItem>
          <MenuItem value={'paas'}>PaaS</MenuItem>
          <MenuItem value={'selfservice'}>Self-Service</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
