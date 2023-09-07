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
            ? translationFunction().deutschTranslations.checkBoxTwo1
            : translationFunction().englishTranslations.checkBoxTwo1}
        </FormLabel>
        <Tooltip
          title={
            isDeutsch
              ? translationFunction().deutschTranslations.checkBoxTwo2
              : translationFunction().englishTranslations.checkBoxTwo2
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
            ? translationFunction().deutschTranslations.checkBoxTwo3
            : translationFunction().englishTranslations.checkBoxTwo3}
        </InputLabel>
        <Select
          labelId='element'
          id='someelement'
          value={aufwand}
          label={
            isDeutsch
              ? translationFunction().deutschTranslations.checkBoxTwo3
              : translationFunction().englishTranslations.checkBoxTwo3
          }
          onChange={handleChange}
        >
          <MenuItem value={'keine'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxTwo4
              : translationFunction().englishTranslations.checkBoxTwo4}
          </MenuItem>
          <MenuItem value={'>10'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxTwo5
              : translationFunction().englishTranslations.checkBoxTwo5}
          </MenuItem>
          <MenuItem value={'11-49'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxTwo6
              : translationFunction().englishTranslations.checkBoxTwo6}
          </MenuItem>
          <MenuItem value={'50-249'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxTwo7
              : translationFunction().englishTranslations.checkBoxTwo7}
          </MenuItem>
          <MenuItem value={'>249'}>
            {isDeutsch
              ? translationFunction().deutschTranslations.checkBoxTwo8
              : translationFunction().englishTranslations.checkBoxTwo8}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
