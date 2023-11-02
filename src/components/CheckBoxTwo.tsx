import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Tooltip from '@mui/material/Tooltip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useMyContext } from '../MyContext';
import { useState, useEffect } from 'react';

export default function CheckBoxTwo() {
  const { aufwandTwo, setAufwandTwo } = useMyContext();

  const [selectedValue, setSelectedValue] = useState(aufwandTwo);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
    setAufwandTwo(event.target.value);
  };

  useEffect(() => {
    setSelectedValue(aufwandTwo);
  }, [aufwandTwo]);

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
          value={selectedValue}
          label='Wählen Sie ein Element aus'
          onChange={handleChange}
        >
          <MenuItem value={'keine Angabe'}>keine Angabe</MenuItem>
          <MenuItem value={'bis 10 Beschäftigte'}>bis 10 Beschäftigte</MenuItem>
          <MenuItem value={'11-49 Beschäftigte'}>11-49 Beschäftigte</MenuItem>
          <MenuItem value={'50-249 Beschäftigte'}>50-249 Beschäftigte</MenuItem>
          <MenuItem value={'mehr als 249 Beschäftigte'}>mehr als 249 Beschäftigte</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
