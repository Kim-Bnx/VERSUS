import { Anchor, BackgroundImage, Box, Flex, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import TypeTag from '../Element/TypeTag';
import FavoriteBtn from '../Element/FavoriteBtn';

import '@mantine/carousel/styles.css';
import './Slider.scss';

function Slider() {
  return (
    <Box className="slider">
      <Carousel
        className="carousel"
        height="100%"
        align="start"
        withControls={false}
        withIndicators
        slideSize="100%"
        loop
        style={{ flex: 1 }}
      >
        <Carousel.Slide className="slide">
          <BackgroundImage
            className="slide-image"
            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb16f7bf3691493f5/5e32376ae147ae4537d93a32/LOL_PROMOART_5.jpg"
          >
            <TypeTag name="microsoft activision blizzard" />
          </BackgroundImage>

          <Box className="slide-content">
            <Box className="event">
              <Box className="event-description">
                <Box className="event-title">
                  <Title size="2rem" className="event-title__name">
                    Best Velkoz BO5
                  </Title>
                  <Text tt="uppercase" className="event-title__game">
                    league of legend
                  </Text>
                </Box>

                <Text tt="uppercase" size="0.9rem" className="event__date">
                  22 Janvier 2024
                </Text>

                <Text className="event__description">
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
                </Text>
              </Box>

              <Flex className="event-link">
                <Anchor className="button">Voir plus</Anchor>
              </Flex>

              <FavoriteBtn />
            </Box>
          </Box>
        </Carousel.Slide>

        <Carousel.Slide className="slide">
          <BackgroundImage
            className="slide-image"
            src="https://thegamehaus.com/wp-content/uploads/2023/11/naruto-x-boruto-ultimate-ninja-storm-connections-04-15-05-2023_0001019288.jpg"
          >
            <TypeTag name="playstation 5" />
          </BackgroundImage>

          <Box className="slide-content">
            <Box className="event">
              <Box className="event-description">
                <Box className="event-title">
                  <Title size="2rem" className="event-title__name">
                    Best Velkoz BO5
                  </Title>
                  <Text tt="uppercase" className="event-title__game">
                    league of legend
                  </Text>
                </Box>

                <Text tt="uppercase" size="0.9rem" className="event__date">
                  22 Janvier 2024
                </Text>

                <Text className="event__description">
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
                </Text>
              </Box>

              <Flex className="event-link">
                <Anchor className="button">Voir plus</Anchor>
              </Flex>

              <FavoriteBtn />
            </Box>
          </Box>
        </Carousel.Slide>

        <Carousel.Slide className="slide">
          <BackgroundImage
            className="slide-image"
            src="https://www.warlegend.net/wp-content/uploads/Super-Smash-Bros.-Ultimate-%E2%80%93-Lultime-rencontre-Nintendo-Switch-1-21-34-screenshot.jpg"
          >
            <TypeTag name="switch" />
          </BackgroundImage>

          <Box className="slide-content">
            <Box className="event">
              <Box className="event-description">
                <Box className="event-title">
                  <Title size="2rem" className="event-title__name">
                    Best Velkoz BO5
                  </Title>
                  <Text tt="uppercase" className="event-title__game">
                    league of legend
                  </Text>
                </Box>

                <Text tt="uppercase" size="0.9rem" className="event__date">
                  22 Janvier 2024
                </Text>

                <Text className="event__description">
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
                </Text>
              </Box>

              <Flex className="event-link">
                <Anchor className="button">Voir plus</Anchor>
              </Flex>

              <FavoriteBtn />
            </Box>
          </Box>
        </Carousel.Slide>
      </Carousel>
    </Box>
  );
}

export default Slider;
