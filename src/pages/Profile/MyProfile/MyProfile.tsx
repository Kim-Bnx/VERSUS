import {
  Avatar,
  Box,
  Flex,
  Title,
  Grid,
  Button,
  SimpleGrid,
} from '@mantine/core';
import { IconHeartFilled, IconStarFilled } from '@tabler/icons-react';
import EventThumb from '../../../components/Element/Thumb/Event';
import TeamThumb from '../../../components/Element/Thumb/Team';
import PlatformSquare from '../../../components/Element/PlatformsSquares';
import GamesLabels from '../../../components/Element/GamesLabels';

import '../Profile.scss';

function MyProfile() {
  const GAMES = [
    {
      id: 0,
      name: 'test',
    },
    {
      id: 1,
      name: 'testtest',
    },
    {
      id: 2,
      name: 'testtesttest',
    },
    {
      id: 3,
      name: 'testtest',
    },
    {
      id: 4,
      name: 'testtesttesttest',
    },
    {
      id: 5,
      name: 'testtesttesttesttesttest',
    },
    {
      id: 6,
      name: 'testtesttest',
    },
    {
      id: 7,
      name: 'testtesttesttest',
    },
  ];

  const PLATFORMS = [
    {
      id: 0,
      name: 'PC',
    },
    {
      id: 1,
      name: 'Switch',
    },
    {
      id: 2,
      name: 'PS5',
    },
    {
      id: 3,
      name: 'XBOX',
    },
    {
      id: 4,
      name: 'Retro',
    },
  ];

  const membersList = [
    'RubisIron',
    'EpicNever',
    'KillMonsieur',
    'AnotherMember',
    'MonsieurCloud',
    'MemberSix',
  ];

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

      <Box mt="4rem">
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

        <SimpleGrid cols={4} mt="1rem">
          <TeamThumb
            name="Ekipe de la mort ki tue"
            image="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            members={membersList}
          />

          <TeamThumb
            name="Ekipe de la mort ki tue"
            image="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            members={membersList}
          />

          <TeamThumb
            name="Ekipe de la mort ki tue"
            image="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            members={membersList}
          />

          <TeamThumb
            name="Ekipe de la mort ki tue"
            image="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            members={membersList}
          />

          <TeamThumb
            name="Ekipe de la mort ki tue"
            image="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            members={membersList}
          />

          <TeamThumb
            name="Ekipe de la mort ki tue"
            image="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            members={membersList}
          />
        </SimpleGrid>
      </Box>

      <Box mt="4rem">
        <Title className="title" order={3}>
          Gaming
        </Title>

        <Box className="section section-full">
          <Title className="section-title" order={4}>
            Platformes
          </Title>

          <PlatformSquare span={2} data={PLATFORMS} />
        </Box>

        <Box className="section section-full">
          <Title className="section-title" order={4}>
            Jeux
          </Title>

          <Grid gutter={15}>
            <GamesLabels data={GAMES} />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default MyProfile;
