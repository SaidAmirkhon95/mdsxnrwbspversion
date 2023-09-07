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
            ? translationFunction().deutschTranslations.checkBoxOne1
            : translationFunction().englishTranslations.checkBoxOne1}
        </FormLabel>
        <Tooltip
          title={
            isDeutsch
              ? translationFunction().deutschTranslations.checkBoxOne2
              : translationFunction().englishTranslations.checkBoxOne2
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
            ? translationFunction().deutschTranslations.checkBoxOne3
            : translationFunction().englishTranslations.checkBoxOne3}
        </InputLabel>
        <Select
          labelId='element'
          id='someelement'
          value={aufwand}
          label={
            isDeutsch
              ? translationFunction().deutschTranslations.checkBoxOne3
              : translationFunction().englishTranslations.checkBoxOne3
          }
          onChange={handleChange}
        >
          <MenuItem value={'startup'}>Start-Up</MenuItem>
          <MenuItem value={'kleinst'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxOne4
              : translationFunction().englishTranslations.checkBoxOne4}
          </MenuItem>
          <MenuItem value={'kleines'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxOne5
              : translationFunction().englishTranslations.checkBoxOne5}
          </MenuItem>
          <MenuItem value={'mittel'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxOne6
              : translationFunction().englishTranslations.checkBoxOne6}
          </MenuItem>
          <MenuItem value={'groß'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxOne7
              : translationFunction().englishTranslations.checkBoxOne7}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
