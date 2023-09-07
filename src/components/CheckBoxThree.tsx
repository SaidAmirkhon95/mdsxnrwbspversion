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
            ? translationFunction().deutschTranslations.checkBoxThree1
            : translationFunction().englishTranslations.checkBoxThree1}
        </FormLabel>
        <Tooltip
          title={
            isDeutsch
              ? translationFunction().deutschTranslations.checkBoxThree2
              : translationFunction().englishTranslations.checkBoxThree2
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
            ? translationFunction().deutschTranslations.checkBoxThree3
            : translationFunction().englishTranslations.checkBoxThree3}
        </InputLabel>
        <Select
          labelId='element'
          id='someelement'
          value={aufwand}
          label={
            isDeutsch
              ? translationFunction().deutschTranslations.checkBoxThree3
              : translationFunction().englishTranslations.checkBoxThree3
          }
          onChange={handleChange}
        >
          <MenuItem value={'keine'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxThree4
              : translationFunction().englishTranslations.checkBoxThree4}
          </MenuItem>
          <MenuItem value={'gering'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxThree5
              : translationFunction().englishTranslations.checkBoxThree5}
          </MenuItem>
          <MenuItem value={'mittel'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxThree6
              : translationFunction().englishTranslations.checkBoxThree6}
          </MenuItem>
          <MenuItem value={'hoch'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxThree7
              : translationFunction().englishTranslations.checkBoxThree7}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
