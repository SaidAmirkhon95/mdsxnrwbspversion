import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';
import { Connectors } from './Connectors';

interface OnboardButtonProps {
  subjectBase: string;
  email: string;
  children: ReactNode; // Add children prop for table structure and data
}

const OnboardButton: React.FC<OnboardButtonProps> = ({ subjectBase, email, children }) => {
  const bodyBase = 'Ich möchte folgende Connector onboarden';

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
      {children}
    </Button>
  );
};

export default OnboardButton;
