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

export default function CheckBoxSevenEn() {
  const { aufwandSeven, setAufwandSeven } = useMyContext();

  const [selectedValue, setSelectedValue] = useState(aufwandSeven);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
    setAufwandSeven(event.target.value);
  };

  return (
    <Box sx={{ display: 'grid' }}>
      <FormControl
        sx={{ m: 0.5, minWidth: 250 }}
        style={{ display: 'inline-flex', alignItems: 'flex-start', flexDirection: 'row' }}
      >
        <FormLabel component='legend'>Service Level</FormLabel>
        <Tooltip
          title='How should the connector be used? CaaS: Connector-as-a-Service, Of-the-Shelf-Solution. Similar to software, the connector is offered to you as a complete software package (Software-as-a-Service). PaaS: Platform as a Service. The connector is an additional service as part of a platform service on which you may already be storing data in the cloud. Self-service: You develop a connector yourself and tailor it to your requirements.'
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
          <MenuItem value={'Not specified'}>Not specified</MenuItem>
          <MenuItem value={'Caas'}>CaaS</MenuItem>
          <MenuItem value={'Paas'}>PaaS</MenuItem>
          <MenuItem value={'Self-Service'}>Self-Service</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
