import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import '../Main.scss';

function Auth() {
  return (
    <AppShell.Main className="page-content content-grid">
      <Outlet />
    </AppShell.Main>
  );
}

export default Auth;
