import { AppShell } from '@mantine/core';
import Header from '../Header/Header';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

import './App.scss';

function app() {
  return (
    <div className="app">
      <AppShell>
        <Header />
        <NavBar />
        <Home />
        <Footer />
      </AppShell>
    </div>
  );
}

export default app;
