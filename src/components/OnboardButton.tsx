/* import React from 'react';
import Button from '@mui/material/Button';

interface OnboarButtonProps {
  subjectBase: string;
  bodyBase: string;
  email: string;
}

const OnboardButton: React.FC<OnboarButtonProps> = ({ subjectBase, bodyBase, email }) => {
  const handleSendEmail = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subjectBase,
    )}&body=${encodeURIComponent(bodyBase)}`;
    window.location.href = mailtoLink;
  };

  console.log('bodyBase:', bodyBase);

  return (
    <Button
      variant='outlined'
      sx={{
        mt: 3,
        ml: 1,
        '@media (max-width: 550px)': {
          fontSize: 'small',
        },
      }}
      style={{ textTransform: 'none', whiteSpace: 'normal' }}
      size='large'
      onClick={handleSendEmail}
    >
      Send Email
    </Button>
  );
};

export default OnboardButton;
 */
import React from 'react';
import Button from '@mui/material/Button';
import { Connectors } from './Connectors';

interface OnboardButtonProps {
  subjectBase: string;
  email: string;
  data: Array<{ name: string; age: number }>;
}

const OnboardButton: React.FC<OnboardButtonProps> = ({ subjectBase, data, email }) => {
  const tableRows = data.map(
    (item, index) => `<tr key=${index}>
      <td>${item.name}</td>
      <td>${item.age}</td>
    </tr>`,
  );

  const tableBody = tableRows.join('');

  const bodyBase = `<table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      ${tableBody}
    </tbody>
  </table>`;

  const handleSendEmail = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subjectBase,
    )}&body=${encodeURIComponent(bodyBase)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Button
      variant='outlined'
      sx={{
        mt: 3,
        ml: 1,
        '@media (max-width: 550px)': {
          fontSize: 'small',
        },
      }}
      style={{ textTransform: 'none', whiteSpace: 'normal' }}
      size='large'
      onClick={handleSendEmail}
    >
      Send Email
    </Button>
  );
};

export default OnboardButton;
