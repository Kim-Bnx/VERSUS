import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import './App.scss';

function app() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default app;
