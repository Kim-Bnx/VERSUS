import { Anchor, Image, Box, Flex, Title } from '@mantine/core';
import Slider from '../../components/Slider/Slider';
import EventThumb from '../../components/Element/Thumb/Event';

import './Home.scss';

function Home() {
  return (
    <>
      <Box className="hero full-height">
        <Title order={1}>Organisez, rassemblez, jouez !</Title>
      </Box>

      <Slider />

      <Box className="container">
        <Flex justify="space-between" align="center" className="title">
          <Title tt="capitalize">Catégories</Title>

          <Anchor className="categories__title-more">Voir plus</Anchor>
        </Flex>

        <div className="categories-grid">
          <EventThumb
            image="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            game="league of legend"
            name="Friendly party"
            type="PC"
            date="10/12/2023"
            countdown={5}
          />

          <EventThumb
            image="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            game="mario kart 8 : deluxe"
            name="blueME for fun"
            type="switch"
            date="10/12/2023"
            countdown={8}
          />

          <EventThumb
            image="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            game="goldeneye 007"
            name="old school edition"
            type="retro"
            date="8/12/2023"
            countdown={1}
          />
        </div>
      </Box>

      <Box className="container">
        <Box className="title">
          <Title tt="capitalize">vos jeux préférés</Title>
        </Box>

        <div className="games__grid">
          <Image
            src="https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-285x380.jpg"
            className="games__grid-image"
          >
            {/* <Text>Heartstone</Text> */}
          </Image>

          <Image
            src="https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-285x380.jpg"
            className="games__grid-image"
          >
            {/* <Text>Heartstone</Text> */}
          </Image>

          <Image
            src="https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-285x380.jpg"
            className="games__grid-image"
          >
            {/* <Text>Heartstone</Text> */}
          </Image>

          <Image
            src="https://static-cdn.jtvnw.net/ttv-boxart/138585_IGDB-285x380.jpg"
            className="games__grid-image"
          >
            {/* <Text>Heartstone</Text> */}
          </Image>
        </div>
      </Box>
    </>
  );
}

export default Home;
