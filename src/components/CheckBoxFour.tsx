import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Tooltip from '@mui/material/Tooltip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import { useMyContext } from '../MyContext';

const MenuProps = {
  PaperProps: {
    style: {
      width: 200,
    },
  },
};

const datas = [
  'Datengeber (Datenquelle)',
  'Datennehmer (Datenkonsument)',
  'Service Provider (Bereitstellung von Services im MDS)',
  'Noch nicht sicher',
];

export default function CheckBoxFour() {
  const { aufwandFour, setAufwandFour } = useMyContext();

  const handleChange = (event: SelectChangeEvent<typeof aufwandFour>) => {
    const {
      target: { value },
    } = event;
    // Ensure value is always an array, even if it's a single string
    setAufwandFour(Array.isArray(value) ? value : [value]);
  };

  useEffect(() => {
    setAufwandFour(aufwandFour);
  }, [aufwandFour]);

  return (
    <Box sx={{ display: 'grid' }}>
      <FormControl
        sx={{ m: 0.5, minWidth: 250 }}
        style={{ display: 'inline-flex', alignItems: 'flex-start', flexDirection: 'row' }}
      >
        <FormLabel component='legend'>Rolle im Dataspace</FormLabel>
        <Tooltip
          title='Bitte geben Sie an, welche Rolle Sie im Data Space einnehmen möchten.'
          placement='top-start'
          style={{ position: 'absolute', right: 0 }}
        >
          <InfoOutlinedIcon color='disabled' fontSize='small' />
        </Tooltip>
      </FormControl>
      <FormControl sx={{ m: 0.5, minWidth: 250 }}>
        <InputLabel id='element'>Mehrfachantwort möglich</InputLabel>
        <Select
          labelId='element'
          id='someelement'
          multiple
          value={aufwandFour}
          label='Wählen Sie ein Element aus'
          onChange={handleChange}
          input={<OutlinedInput label='Mehrfachantwort möglich' />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {datas.map((data, index) => (
            <MenuItem key={data} value={data} style={{ whiteSpace: 'normal' }}>
              <Checkbox checked={aufwandFour.includes(data)} style={{ marginLeft: '-10px' }} />
              <ListItemText primary={data} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
