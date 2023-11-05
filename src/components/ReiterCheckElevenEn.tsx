import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTableData } from '../TableDataProvider';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function ReiterCheckElevenEn() {
  const [aufwand, setAufwand] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAufwand(event.target.value);
  };

  const { tableData, updateTableData } = useTableData();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    updateTableData({
      ...tableData,
      [name]: value,
    });
  };

  return (
    <Box sx={{ display: 'grid' }}>
      <FormControl
        sx={{ m: 0.5, minWidth: 250 }}
        style={{ display: 'inline-flex', alignItems: 'flex-start', flexDirection: 'row' }}
      >
        <FormLabel component='legend'>
          How is the connector intended to be used? (Service Level)
        </FormLabel>
        <Tooltip
          title='Please provide the offered service level of the connector. CaaS: Connector-as-a-Service, Of-the-Shelf, similar to software, the connector is offered as a complete software package (Software-as-a-Service). PaaS (Platform-as-a-Service): The connector is an additional service within a platform service, possibly involving data stored in the cloud. Self-Service: The connector is custom-developed by the user to fit their specific requirements.'
          placement='top-start'
          style={{ position: 'absolute', right: 0 }}
        >
          <InfoOutlinedIcon color='disabled' fontSize='small' />
        </Tooltip>
      </FormControl>
      <FormControl sx={{ m: 0.5, minWidth: 250 }}>
        <InputLabel id='element'>Service Level</InputLabel>
        <Select
          name='serviceLevel'
          labelId='element'
          id='someelement'
          label='Service Level'
          onChange={handleInputChange}
          value={tableData.serviceLevel}
        >
          <MenuItem value={'CaaS'}>CaaS</MenuItem>
          <MenuItem value={'PaaS'}>PaaS</MenuItem>
          <MenuItem value={'Self-Service'}>Self-Service</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
