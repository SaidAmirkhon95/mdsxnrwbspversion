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
import { useLanguage } from '../LanguageContext';
import translationFunction from 'translationFunction';

const MenuProps = {
  PaperProps: {
    style: {
      width: 200,
    },
  },
};

const datas = [
  'API (z.B. HTTP, Rest)',
  'Datei (z.B. Exel, Word, PDF)',
  'FTP Server',
  'Real Time via Message Bus (z.B. Kafka, RabbitMQ)',
  'Sonstige',
  'Keine Angabe',
];

const datasObject = {
  datasAufDeutsch: [
    'API (z.B. HTTP, Rest)',
    'Datei (z.B. Exel, Word, PDF)',
    'FTP Server',
    'Real Time via Message Bus (z.B. Kafka, RabbitMQ)',
    'Sonstige',
    'Keine Angabe',
  ],
  datasAufEnglisch: [
    'API (e.g. HTTP, Rest)',
    'File (e.g. Excel, Word, PDF)',
    'FTP Server',
    'Real Time via Message Bus (e.g. Kafka, RabbitMQ)',
    'Other',
    'Not specified',
  ],
};
export default function FilterSelect() {
  const { isDeutsch } = useLanguage();
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
        <FormLabel component='legend'>
          {isDeutsch
            ? translationFunction().deutschTranslations.checkBoxSix1
            : translationFunction().englishTranslations.checkBoxSix1}
        </FormLabel>
        <Tooltip
          title={
            isDeutsch
              ? translationFunction().deutschTranslations.checkBoxSix2
              : translationFunction().englishTranslations.checkBoxSix2
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
            ? translationFunction().deutschTranslations.checkBoxSix3
            : translationFunction().englishTranslations.checkBoxSix3}
        </InputLabel>
        <Select
          labelId='element'
          id='someelement'
          multiple
          value={dataName}
          onChange={handleChange}
          input={
            <OutlinedInput
              label={
                isDeutsch
                  ? translationFunction().deutschTranslations.checkBoxSix3
                  : translationFunction().englishTranslations.checkBoxSix3
              }
            />
          }
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {datas.map((data, index) => (
            <MenuItem key={data} value={data} style={{ whiteSpace: 'normal' }}>
              <Checkbox checked={dataName.indexOf(data) > -1} style={{ marginLeft: '-10px' }} />
              <ListItemText
                primary={
                  isDeutsch
                    ? datasObject.datasAufDeutsch[index]
                    : datasObject.datasAufEnglisch[index]
                }
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
