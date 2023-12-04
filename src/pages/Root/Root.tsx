import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import './Root.scss';

function Root() {
  return (
    <div className="app">
      <AppShell>
        <Header />
        <NavBar />
        <Outlet />
        <Footer />
      </AppShell>
    </div>
  );
}

export default Root;
