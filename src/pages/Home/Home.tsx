import {
  Anchor,
  BackgroundImage,
  Image,
  Box,
  Flex,
  Title,
  Text,
  SimpleGrid,
} from '@mantine/core';

import Slider from '../../components/Slider/Slider';
import FavoriteBtn from '../../components/Element/FavoriteBtn';

import './Home.scss';
import TypeTag from '../../components/Element/TypeTag';

function Home() {
  return (
    <>
      <Flex justify="center" align="center" className="title-container">
        <Title order={1}>Organisez, rassemblez, jouez !</Title>
      </Flex>

      <Slider />

      <Box className="container">
        <Flex justify="space-between" align="center" className="title">
          <Title tt="capitalize">Catégories</Title>

          <Anchor className="categories__title-more">Voir plus</Anchor>
        </Flex>

        <SimpleGrid cols={3} className="categories-grid">
          <BackgroundImage src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80">
            <Flex className="thumb" direction="column">
              <FavoriteBtn />

              <Box c="white" className="thumb__infos">
                <Text tt="uppercase">league of legend</Text>
                <Text tt="capitalize" size="2rem">
                  Friendly party
                </Text>
              </Box>

              <TypeTag name="PC" />

              <Flex
                justify="space-between"
                align="center"
                bg="#1d1d1d"
                miw="100%"
                className="thumb__dates"
              >
                <Text className="thumb__dates-start">10/12/2023</Text>
                <Text className="thumb__dates-duration">5 jours</Text>
              </Flex>
            </Flex>
          </BackgroundImage>

          <BackgroundImage
            className="thumb"
            src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          >
            <FavoriteBtn />

            <Box c="white" className="thumb__infos">
              <Text tt="uppercase">mario kart 8 : deluxe</Text>
              <Text tt="capitalize" size="2rem">
                blueME for fun
              </Text>
            </Box>

            <TypeTag name="switch" />

            <Flex
              justify="space-between"
              align="center"
              bg="#1d1d1d"
              miw="100%"
              className="thumb__dates"
            >
              <Text className="thumb__dates-start">10/12/2023</Text>
              <Text className="thumb__dates-duration">8 jours</Text>
            </Flex>
          </BackgroundImage>

          <BackgroundImage
            className="thumb"
            src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          >
            <FavoriteBtn />

            <Box c="white" className="thumb__infos">
              <Text tt="uppercase">goldeneye 007</Text>
              <Text tt="capitalize" size="2rem">
                old school edition
              </Text>
            </Box>

            <TypeTag name="retro" />

            <Flex
              justify="space-between"
              align="center"
              bg="#1d1d1d"
              miw="100%"
              className="thumb__dates"
            >
              <Text className="thumb__dates-start">10/12/2023</Text>
              <Text className="thumb__dates-duration">10 jours</Text>
            </Flex>
          </BackgroundImage>
        </SimpleGrid>
      </Box>

      <Box className="container">
        <Box className="title">
          <Title tt="capitalize">vos jeux préférés</Title>
        </Box>

        <SimpleGrid cols={4} className="games__grid">
          <Image
            src="https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-285x380.jpg"
            className="thumb"
          >
            {/* <Text>Heartstone</Text> */}
          </Image>

          <Image
            src="https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-285x380.jpg"
            className="thumb"
          >
            {/* <Text>Heartstone</Text> */}
          </Image>

          <Image
            src="https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-285x380.jpg"
            className="thumb"
          >
            {/* <Text>Heartstone</Text> */}
          </Image>

          <Image
            src="https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-285x380.jpg"
            className="thumb"
          >
            {/* <Text>Heartstone</Text> */}
          </Image>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Home;
