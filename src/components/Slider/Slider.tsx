import { Carousel } from '@mantine/carousel';
import { IconHeart } from '@tabler/icons-react';

import '@mantine/carousel/styles.css';
import './Slider.scss';
import { Box, Button } from '@mantine/core';
import { useState } from 'react';

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
        slideGap="md"
        style={{ flex: 1 }}
      >
        <Carousel.Slide className="slide">
          <div className="slide-lefty">IMAGE</div>

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
          <div className="slide-lefty">IMAGE</div>

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
          <div className="slide-lefty">IMAGE</div>

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
      </Carousel>
    </Box>
  );
}

export default Slider;
