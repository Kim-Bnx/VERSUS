import { useState } from 'react';
import { BackgroundImage, Box, Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconHeart } from '@tabler/icons-react';

import '@mantine/carousel/styles.css';
import './Slider.scss';

function Slider() {
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <Box className="slider">
      <Carousel
        className="carousel"
        withIndicators
        height="100%"
        align="start"
        slideSize="100%"
        slideGap="xs"
        loop
        style={{ flex: 1 }}
      >
        <Carousel.Slide className="slide">
          <BackgroundImage
            className="slide-lefty"
            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb16f7bf3691493f5/5e32376ae147ae4537d93a32/LOL_PROMOART_5.jpg"
          />

          <div className="slide-righty">
            <div className="event">
              <div className="event-description">
                <div className="event-title">
                  <h2 className="event-title__name">Best Velkoz BO5</h2>
                  <p className="event-title__game">league of legend</p>
                </div>

                <p className="event__date">22 Janvier 2024</p>

                <p className="event__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero, eius tempore, quaerat vero doloribus ipsum vel maxime,
                  delectus perspiciatis corrupti aut incidunt. Sunt deserunt
                  cupiditate eos repudiandae molestiae nostrum. Consequatur.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero, eius tempore, quaerat vero doloribus ipsum vel maxime,
                  delectus perspiciatis corrupti aut incidunt. Sunt deserunt
                  cupiditate eos repudiandae molestiae nostrum. Consequatur.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero, eius tempore, quaerat vero doloribus ipsum vel maxime,
                  delectus perspiciatis corrupti aut incidunt. Sunt deserunt
                  cupiditate eos repudiandae molestiae nostrum. Consequatur.
                </p>
              </div>

              <div className="event-link">
                <Button className="button">Voir plus</Button>
              </div>

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
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide className="slide">
          <BackgroundImage
            className="slide-lefty"
            src="https://thegamehaus.com/wp-content/uploads/2023/11/naruto-x-boruto-ultimate-ninja-storm-connections-04-15-05-2023_0001019288.jpg"
          />

          <div className="slide-righty">
            <div className="event">
              <div className="event-description">
                <div className="event-title">
                  <h2 className="event-title__name">SwagBoi No Jutsu</h2>
                  <p className="event-title__game">
                    NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS
                  </p>
                </div>

                <p className="event__date">22 Janvier 2024</p>

                <p className="event__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero, eius tempore, quaerat vero doloribus ipsum vel maxime,
                  delectus perspiciatis corrupti aut incidunt. Sunt deserunt
                  cupiditate eos repudiandae molestiae nostrum. Consequatur.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero, eius tempore, quaerat vero doloribus ipsum vel maxime,
                  delectus perspiciatis corrupti aut incidunt. Sunt deserunt
                  cupiditate eos repudiandae molestiae nostrum. Consequatur.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero, eius tempore, quaerat vero doloribus ipsum vel maxime,
                  delectus perspiciatis corrupti aut incidunt. Sunt deserunt
                  cupiditate eos repudiandae molestiae nostrum. Consequatur.
                </p>
              </div>

              <div className="event-link">
                <Button className="button">Voir plus</Button>
              </div>

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
            </div>
          </div>
        </Carousel.Slide>


        <Carousel.Slide className="slide">
          <BackgroundImage
            className="slide-lefty"
            src="https://www.warlegend.net/wp-content/uploads/Super-Smash-Bros.-Ultimate-%E2%80%93-Lultime-rencontre-Nintendo-Switch-1-21-34-screenshot.jpg"
          />

          <div className="slide-righty">
            <div className="event">
              <div className="event-description">
                <div className="event-title">
                  <h2 className="event-title__name">ohMyStack</h2>
                  <p className="event-title__game">
                    super smash bros : ultimate
                  </p>
                </div>

                <p className="event__date">22 Janvier 2024</p>

                <p className="event__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero, eius tempore, quaerat vero doloribus ipsum vel maxime,
                  delectus perspiciatis corrupti aut incidunt. Sunt deserunt
                  cupiditate eos repudiandae molestiae nostrum. Consequatur.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero, eius tempore, quaerat vero doloribus ipsum vel maxime,
                  delectus perspiciatis corrupti aut incidunt. Sunt deserunt
                  cupiditate eos repudiandae molestiae nostrum. Consequatur.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero, eius tempore, quaerat vero doloribus ipsum vel maxime,
                  delectus perspiciatis corrupti aut incidunt. Sunt deserunt
                  cupiditate eos repudiandae molestiae nostrum. Consequatur.
                </p>
              </div>

              <div className="event-link">
                <Button className="button">Voir plus</Button>
              </div>

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
            </div>
          </div>
        </Carousel.Slide>
      </Carousel>
    </Box>
  );
}

export default Slider;
