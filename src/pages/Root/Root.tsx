import { Outlet } from 'react-router-dom';
import { AppShell, Button } from '@mantine/core';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import './Root.scss';

function Root() {
  return (
    <AppShell
      layout="alt"
      header={{ height: 90 }}
      footer={{ height: 60 }}
      navbar={{
        width: 190,
        breakpoint: 'sm',
      }}
      padding="md"
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
      <AppShell.Main>
        <Outlet />

        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}

export default Root;
