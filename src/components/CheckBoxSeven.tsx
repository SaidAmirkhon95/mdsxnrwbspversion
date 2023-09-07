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
        <FormLabel component='legend'>
          {isDeutsch
            ? translationFunction().deutschTranslations.checkBoxSeven1
            : translationFunction().englishTranslations.checkBoxSeven1}
        </FormLabel>
        <Tooltip
          title={
            isDeutsch
              ? translationFunction().deutschTranslations.checkBoxSeven2
              : translationFunction().englishTranslations.checkBoxSeven2
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
            ? translationFunction().deutschTranslations.checkBoxSeven3
            : translationFunction().englishTranslations.checkBoxSeven3}
        </InputLabel>
        <Select
          labelId='element'
          id='someelement'
          value={aufwand}
          label={
            isDeutsch
              ? translationFunction().deutschTranslations.checkBoxSeven3
              : translationFunction().englishTranslations.checkBoxSeven3
          }
          onChange={handleChange}
        >
          <MenuItem value={'keine'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxSeven4
              : translationFunction().englishTranslations.checkBoxSeven4}
          </MenuItem>
          <MenuItem value={'standard'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxSeven5
              : translationFunction().englishTranslations.checkBoxSeven5}
          </MenuItem>
          <MenuItem value={'speziell'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxSeven6
              : translationFunction().englishTranslations.checkBoxSeven6}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
