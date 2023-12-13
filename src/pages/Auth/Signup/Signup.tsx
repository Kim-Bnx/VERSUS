import { useState } from 'react';
import { Box } from '@mantine/core';
import Default from './Default';
import Profile from './Profile';
import Preferences from './Preferences';

function Signup() {
  const [activeStep, setActiveStep] = useState('default');

  const handleViewChange = (newStep: string) => {
    setActiveStep(newStep);
  };

  let RegisterStep;

  switch (activeStep) {
    case 'profile':
      RegisterStep = Profile;
      break;
    case 'preferences':
      RegisterStep = Preferences;
      break;
    default:
      RegisterStep = Default;
  }

  return (
    <Box className="right-content">
      <RegisterStep onChangeView={handleViewChange} />
    </Box>
  );
}

export default Signup;
