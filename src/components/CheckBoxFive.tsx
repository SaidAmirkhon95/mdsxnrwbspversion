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
  'Datengeber (Datenquelle)',
  'Datennehmer (Datenkonsument)',
  'Service Provider (Bereitstellung von Services im MDS)',
  'Noch nicht sicher',
];

const datasObject = {
  datasAufDeutsch: [
    'Datengeber (Datenquelle)',
    'Datennehmer (Datenkonsument)',
    'Service Provider (Bereitstellung von Services im MDS)',
    'Noch nicht sicher',
  ],
  datasAufEnglisch: [
    'Data supplier (Data source)',
    'Data client (Data consumer)',
    'Service Provider (provision of services in the MDS)',
    'Not sure yet',
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
            ? translationFunction().deutschTranslations.checkBoxFive1
            : translationFunction().englishTranslations.checkBoxFive1}
        </FormLabel>
        <Tooltip
          title={
            isDeutsch
              ? translationFunction().deutschTranslations.checkBoxFive2
              : translationFunction().englishTranslations.checkBoxFive2
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
            ? translationFunction().deutschTranslations.checkBoxFive3
            : translationFunction().englishTranslations.checkBoxFive3}
        </InputLabel>
        <Select
          labelId='element'
          id='someelement'
          multiple
          value={dataName}
          label='Wählen Sie ein Element aus'
          onChange={handleChange}
          input={
            <OutlinedInput
              label={
                isDeutsch
                  ? translationFunction().deutschTranslations.checkBoxFive3
                  : translationFunction().englishTranslations.checkBoxFive3
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
