import { AppShell, Container, Text } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import './Auth.scss';

function Auth() {
  return (
    <AppShell
      layout="alt"
      padding={0}
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <Container fluid className="auth">
        <Text className="left-logo" tt="uppercase" fw={400} fz="4rem" c="#FFF">
          versus
        </Text>

        <Outlet />
      </Container>
    </AppShell>
  );
}

export default Auth;
