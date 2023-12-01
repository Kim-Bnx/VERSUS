import Header from '../Header/Header';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';

import './App.scss';

function app() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Home />
    </div>
  );
}

export default app;
