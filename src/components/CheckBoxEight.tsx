import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Tooltip from '@mui/material/Tooltip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useLanguage } from '../LanguageContext';
import translationFunction from 'translationFunction';

export default function FilterSelect() {
  const { isDeutsch } = useLanguage();
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
          title={
            isDeutsch
              ? translationFunction().deutschTranslations.checkBoxEight2
              : translationFunction().englishTranslations.checkBoxEight2
          }
          placement='top-start'
          style={{ position: 'absolute', right: 0 }}
        >
          <InfoOutlinedIcon color='disabled' fontSize='small' />
        </Tooltip>
      </FormControl>
      <FormControl sx={{ m: 0.5, minWidth: 250 }}>
        <InputLabel id='element'>
          {isDeutsch
            ? translationFunction().deutschTranslations.checkBoxEight3
            : translationFunction().englishTranslations.checkBoxEight3}
        </InputLabel>
        <Select
          labelId='element'
          id='someelement'
          value={aufwand}
          label={
            isDeutsch
              ? translationFunction().deutschTranslations.checkBoxEight3
              : translationFunction().englishTranslations.checkBoxEight3
          }
          onChange={handleChange}
        >
          <MenuItem value={'keine'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxEight4
              : translationFunction().englishTranslations.checkBoxEight4}
          </MenuItem>
          <MenuItem value={'caas'}>CaaS</MenuItem>
          <MenuItem value={'paas'}>PaaS</MenuItem>
          <MenuItem value={'selfservice'}>Self-Service</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
