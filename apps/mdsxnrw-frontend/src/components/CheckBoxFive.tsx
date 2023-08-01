import * as React from 'react';
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
export default function FilterSelect() {
  const [dataName, setDataName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof dataName>) => {
    const {
      target: { value },
    } = event;
    setDataName(typeof value === 'string' ? value.split(',') : value);
  };

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
          value={dataName}
          label='Wählen Sie ein Element aus'
          onChange={handleChange}
          input={<OutlinedInput label='Mehrfachantwort möglich' />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {datas.map((data) => (
            <MenuItem key={data} value={data} style={{ whiteSpace: 'normal' }}>
              <Checkbox checked={dataName.indexOf(data) > -1} style={{ marginLeft: '-10px' }} />
              <ListItemText primary={data} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
