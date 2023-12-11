import { useState } from 'react';
import { Container } from '@mantine/core';
import Default from './Default';
import Profile from './Profile';
import Preferences from './Preferences';

function Register() {
  const [activeStep, setActiveStep] = useState('default');

  const handleViewChange = (newStep: string) => {
    setActiveStep(newStep);
  };

  let registerStep;

  switch (activeStep) {
    case 'profile':
      registerStep = <Profile onChangeView={handleViewChange} />;
      break;
    case 'preferences':
      registerStep = <Preferences onChangeView={handleViewChange} />;
      break;
    default:
      registerStep = <Default onChangeView={handleViewChange} />;
  }
  return <Container fluid>{registerStep}</Container>;
}

export default Register;
