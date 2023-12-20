import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Tooltip from '@mui/material/Tooltip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useMyContext } from '../MyContext';

export default function CheckBoxOne() {
  const { aufwandOne, setAufwandOne } = useMyContext();

  const [selectedValue, setSelectedValue] = useState(aufwandOne);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
    setAufwandOne(event.target.value);

    // Send the selected data to the backend
    /* sendSelectedData(event.target.value); */
  };

  useEffect(() => {
    setSelectedValue(aufwandOne);
  }, [aufwandOne]);

  /* const sendSelectedData = async (selectedData: any) => {
    try {
      const response = await fetch('http://localhost:3001/api/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedData }),
      });

      if (!response.ok) {
        throw new Error('Failed to send data to the backend');
      }

      // Handle the response if needed
      const responseData = await response.json();
      console.log('Response from backend:', responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  }; */

  return (
    <Box sx={{ display: 'grid' }}>
      <FormControl
        sx={{ m: 0.5, minWidth: 250 }}
        style={{ display: 'inline-flex', alignItems: 'flex-start', flexDirection: 'row' }}
      >
        <FormLabel component='legend'>Unternehmensgröße</FormLabel>
        <Tooltip
          title='Bitte geben Sie hier Ihre Unternehmensgröße nach Mitarbeitendenanzahl und Umsatz an: Start-Up: (junges)Kleinesunternehmen mit dynamische Wachstum. Kleinstunternehmen: <10 Beschäftigte, <2 Mio.€ Umsatz. Kleines Unternehmen: <11-49 Beschäftigte, <10 Mio.€ Umsatz. Mittleres Unternehmen: <50-249 Beschäftigte, <50 Mio.€ Umsatz. Großes Unternehmen: >249 Beschäftigte, >50 Mio.€ Umsatz.'
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
          <MenuItem value={'Start-Up'}>Start-Up</MenuItem>
          <MenuItem value={'Kleinstunternehmen'}>Kleinstunternehmen</MenuItem>
          <MenuItem value={'Kleines Unternehmen'}>Kleines Unternehmen</MenuItem>
          <MenuItem value={'Mittleres Unternehmen'}>Mittleres Unternehmen</MenuItem>
          <MenuItem value={'Großunternehmen'}>Großunternehmen</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
