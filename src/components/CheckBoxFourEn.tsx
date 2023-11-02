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
  'Data supplier (Data source)',
  'Data client (Data consumer)',
  'Service Provider (provision of services in the MDS)',
  'Not sure yet',
];

export default function CheckBoxFourEn() {
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
        <FormLabel component='legend'>Role in dataspace</FormLabel>
        <Tooltip
          title='Please indicate which role you would like to play in the Data Space.'
          placement='top-start'
          style={{ position: 'absolute', right: 0 }}
        >
          <InfoOutlinedIcon color='disabled' fontSize='small' />
        </Tooltip>
      </FormControl>
      <FormControl sx={{ m: 0.5, minWidth: 250 }}>
        <InputLabel id='element'>Multiple Choice possible</InputLabel>
        <Select
          labelId='element'
          id='someelement'
          multiple
          value={aufwandFour}
          label='Multiple Choice possible'
          onChange={handleChange}
          input={<OutlinedInput label='Multiple Choice possible' />}
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
