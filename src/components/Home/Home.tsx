import { rem, Container } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import Slider from '../Slider/Slider';

import './Home.scss';

function Home() {
  return (
    <Container fluid className="page">
      <div className="title-container">
        <h1 className="title-container__title">
          Organisez, rassemblez, jouez !
        </h1>
      </div>

      <Slider />

      <div className="category container">
        <div className="category__title container__title">
          <h2 className="category__title-name container__title-name">
            Catégories
          </h2>

          <span className="category__title-more">Voir plus</span>
        </div>

        <div className="category__grid grid">
          <div className="thumb">
            <div className="favorite">
              <IconHeart stroke={1.5} color="#929292" />
            </div>

            <div className="thumb__infos">
              <span className="thumb__name-game">league of legend</span>
              <span className="thumb__name-event">Friendly party</span>
            </div>

            <div className="thumb__type">
              <span className="thumb__type-text">tournoi</span>
            </div>

            <div className="thumb__dates">
              <p className="thumb__dates-start">10/12/2023</p>
              <p className="thumb__dates-duration">5 jours</p>
            </div>
          </div>

          <div className="thumb">
            <div className="favorite">
              <IconHeart stroke={1.5} color="#929292" />
            </div>

            <div className="thumb__infos">
              <span className="thumb__name-game">mario kart 8 : deluxe</span>
              <span className="thumb__name-event">blueME for fun</span>
            </div>

            <div className="thumb__type">
              <span className="thumb__type-text">speedrun</span>
            </div>

            <div className="thumb__dates">
              <p className="thumb__dates-start">10/12/2023</p>
              <p className="thumb__dates-duration">8 jours</p>
            </div>
          </div>

          <div className="thumb">
            <div className="favorite">
              <IconHeart stroke={1.5} color="#929292" />
            </div>

            <div className="thumb__infos">
              <span className="thumb__name-game">goldeneye 007</span>
              <span className="thumb__name-event">old school edition</span>
            </div>

            <div className="thumb__type">
              <span className="thumb__type-text">retro</span>
            </div>

            <div className="thumb__dates">
              <p className="thumb__dates-start">10/12/2023</p>
              <p className="thumb__dates-duration">10 jours</p>
            </div>
          </div>
        </div>
      </div>

      <div className="favorites-games container">
        <div className="games__title container__title">
          <h2 className="games__title-name container__title-name">
            vos jeux préférés
          </h2>
        </div>

        <div className="games__grid grid">
          <div className="thumb">
            <p>Heartstone</p>
          </div>

          <div className="thumb">
            <p>Heartstone</p>
          </div>

          <div className="thumb">
            <p>Heartstone</p>
          </div>

          <div className="thumb">
            <p>Heartstone</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
