import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

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
