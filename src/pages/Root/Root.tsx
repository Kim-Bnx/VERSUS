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
      navbar={{
        width: 190,
        breakpoint: 'sm',
      }}
      padding="md"
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <Header />
      <AppShell.Navbar p="md">
        Navbar
        <Button color="#f0f">Bouton</Button>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />

        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}

export default Root;
