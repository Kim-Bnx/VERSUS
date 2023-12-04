import { useState } from 'react';
import { AppShell, BackgroundImage, Box, Container } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import Slider from '../Slider/Slider';

import './Home.scss';

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <AppShell.Main className="page page-home">
      <Container fluid>
        <div className="title-container">
          <h1 className="title-container__title">
            Organisez, rassemblez, jouez !
          </h1>
        </div>

        <Slider />

        <Box className="category container">
          <div className="category__title container__title">
            <h2 className="category__title-name container__title-name">
              Catégories
            </h2>

            <span className="category__title-more">Voir plus</span>
          </div>

          <div className="category__grid grid">
            <BackgroundImage
              className="thumb"
              src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            >
              <div
                className="button-favorite"
                onMouseEnter={handleFavoriteHover}
                onMouseLeave={handleFavoriteHover}
              >
                <IconHeart
                  stroke={1.5}
                  fill={isHovered ? 'rgb(216, 60, 60)' : 'black'}
                  color={isHovered ? 'rgb(216, 60, 60)' : '#929292'}
                />
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
            </BackgroundImage>

            <BackgroundImage
              className="thumb"
              src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            >
              <div className="button-favorite">
                <IconHeart stroke={1.5} fill="black" color="#929292" />
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
            </BackgroundImage>

            <BackgroundImage
              className="thumb"
              src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            >
              <div className="button-favorite">
                <IconHeart stroke={1.5} fill="black" color="#929292" />
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
            </BackgroundImage>
          </div>
        </Box>

        <Box className="favorites-games container">
          <div className="games__title container__title">
            <h2 className="games__title-name container__title-name">
              vos jeux préférés
            </h2>
          </div>

          <div className="games__grid grid">
            <BackgroundImage
              src="https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-285x380.jpg"
              className="thumb"
            >
              {/* <p>Heartstone</p> */}
            </BackgroundImage>

            <BackgroundImage
              src="https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-285x380.jpg"
              className="thumb"
            >
              {/* <p>Heartstone</p> */}
            </BackgroundImage>

            <BackgroundImage
              src="https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-285x380.jpg"
              className="thumb"
            >
              {/* <p>Heartstone</p> */}
            </BackgroundImage>

            <BackgroundImage
              src="https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-285x380.jpg"
              className="thumb"
            >
              {/* <p>Heartstone</p> */}
            </BackgroundImage>
          </div>
        </Box>
      </Container>
    </AppShell.Main>
  );
}

export default Home;
