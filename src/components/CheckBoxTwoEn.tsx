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

export default function CheckBoxTwoEn() {
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
        <FormLabel component='legend'>Hired IT professionals</FormLabel>
        <Tooltip
          title='Please indicate how many IT experts you employ.'
          placement='top-start'
          style={{ position: 'absolute', right: 0 }}
        >
          <InfoOutlinedIcon color='disabled' fontSize='small' />
        </Tooltip>
      </FormControl>
      <FormControl sx={{ m: 0.5, minWidth: 250 }}>
        <InputLabel id='element'>Choose an element</InputLabel>
        <Select
          labelId='element'
          id='someelement'
          value={selectedValue}
          label='Choose an element'
          onChange={handleChange}
        >
          <MenuItem value={'none'}>none</MenuItem>
          <MenuItem value={'up to 10 Employees'}>up to 10 Employees</MenuItem>
          <MenuItem value={'11-49 Employees'}>11-49 Employees</MenuItem>
          <MenuItem value={'50-249 Employees'}>50-249 Employees</MenuItem>
          <MenuItem value={'more than 249 Employees'}>more than 249 Employees</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
