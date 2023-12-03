import Header from '../Header/Header';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

import './App.scss';

function app() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default app;
