import {
  Avatar,
  Box,
  Flex,
  Title,
  Text,
  Grid,
  GridCol,
  Button,
  SimpleGrid,
} from '@mantine/core';
import { IconKey, IconHeartFilled, IconStarFilled } from '@tabler/icons-react';
import PlatformSquare from '../../../components/Element/PlatformSquare';

import '../Profile.scss';
import EventThumb from '../../../components/Element/EventThumb';

function MyProfile() {
  return (
    <Box className="wrapper myprofile">
      <Flex justify="space-between" align="center">
        <Flex justify="center" align="center">
          <Avatar size="xl" mr="1rem" />
          <Title size="2rem" order={2}>
            xXSwagBoy92Xx
          </Title>
        </Flex>

        <Box>
          <Button mr="1rem">
            <IconStarFilled color="yellow" />
          </Button>

          <Button>
            <IconHeartFilled color="red" />
          </Button>
        </Box>
      </Flex>

      <Box mt="2rem">
        <Title className="title" order={3}>
          Evénements
        </Title>

        <SimpleGrid cols={3} mt="1rem" className="categories-grid">
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
        </SimpleGrid>
      </Box>

      <Box mt="4rem">
        <Title className="title" order={3}>
          Equipes
        </Title>

        <Box className="section section-full">
          <Title className="section-title" order={4}>
            Mes plateformes
          </Title>

          <PlatformSquare span={2} />
        </Box>
      </Box>

      <Box mt="4rem">
        <Title className="title" order={3}>
          Gaming
        </Title>

        <Box className="section section-full">
          <Title className="section-title" order={4}>
            Platformes
          </Title>

          <PlatformSquare span={2} />
        </Box>

        <Box className="section section-full">
          <Title className="section-title" order={4}>
            Jeux
          </Title>

          <Grid gutter={15}>
            <GridCol span="content">
              <Box className="game">testtesttesttesttest</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">testtest</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">test</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">testtesttest</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">testtest</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">testtesttest</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">testtest</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">test</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">testtest</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">testtest</Box>
            </GridCol>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default MyProfile;
