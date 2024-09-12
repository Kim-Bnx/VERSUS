import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

import './Main.scss';

function Main() {
  return (
    <AppShell.Main className="page-content content-grid">
      <Outlet />
      <Footer />
    </AppShell.Main>
  );
}

export default Main;
