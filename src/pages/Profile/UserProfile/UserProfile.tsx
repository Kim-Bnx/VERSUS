import { useParams } from 'react-router-dom';
import {
  Box,
  Flex,
  Title,
  Button,
  Grid,
  SimpleGrid,
  Text,
} from '@mantine/core';
import { IconHeartFilled, IconStarFilled } from '@tabler/icons-react';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { profile } from '../../../store/reducers/profile';
import TeamThumb from '../../../components/Element/Thumb/Team';
import EventThumb from '../../../components/Element/Thumb/Event';
import CreateAvatar from '../../../components/Element/CreateAvatar';
import { userGames } from '../../../store/reducers/userGames';
import { userPlatforms } from '../../../store/reducers/userPlatforms';
import PlatformSquare from '../../../components/Element/PlatformsSquares';
import GamesLabels from '../../../components/Element/GamesLabels';

import '../Profile.scss';

const GAMES = [
  {
    id: 0,
    name: 'League Of Legend',
  },
  {
    id: 1,
    name: 'Super Smash Bros.',
  },
  {
    id: 2,
    name: 'Valorant',
  },
  {
    id: 3,
    name: 'Minecraft',
  },
  {
    id: 4,
    name: 'Overwatch',
  },
  {
    id: 5,
    name: 'GTA V',
  },
  {
    id: 6,
    name: 'Fall Guys',
  },
  {
    id: 7,
    name: 'Call Of Duty',
  },
  {
    id: 8,
    name: 'Demineur',
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

type SelectedItems = { [key: number]: boolean };

function UserProfile() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.profile.data);
  const { username } = useParams();
  const [selectedGames, setSelectedGames] = useState<{
    [key: number]: boolean;
  }>({});

  const [selectedPlatforms, setSelectedPlatforms] = useState<{
    [key: number]: boolean;
  }>({});

  const userNameValue = userData.username;
  const userAvatarValue = userData.avatar;

  const handleSelection = useCallback(
    (
      setId: React.Dispatch<React.SetStateAction<SelectedItems>>,
      id: number
    ) => {
      setId((prevSelected) => ({
        ...prevSelected,
        [id]: !prevSelected[id],
      }));
    },
    []
  );

  const handlePlatformSelection = useCallback(
    (id: number) => {
      handleSelection(setSelectedPlatforms, id);
    },
    [handleSelection]
  );

  const handleGameSelection = useCallback(
    (id: number) => {
      handleSelection(setSelectedGames, id);
    },
    [handleSelection]
  );

  const handleEditPreferences = () => {
    // const selectedGameIds = Object.keys(selectedGames)
    //   .filter((key) => selectedGames[parseInt(key, 10)])
    //   .map((key) => parseInt(key, 10));
    // const selectedPlatformIds = Object.keys(selectedPlatforms)
    //   .filter((key) => selectedPlatforms[parseInt(key, 10)])
    //   .map((key) => parseInt(key, 10));
    // dispatch(profileGames({ games: selectedGameIds, userId: loggedUserId }));
    // dispatch(
    //   profilePlatforms({ platforms: selectedPlatformIds, userId: loggedUserId })
    // );
  };

  useEffect(() => {
    if (username !== undefined) {
      const userId = parseInt(username, 10);
      dispatch(profile(userId));
    }
  }, [dispatch, username]);

  return (
    <Box className="wrapper profile-user full-width content-grid">
      <Box className="header full-width content-grid">
        <Flex justify="space-between" align="center">
          <Flex justify="center" align="center">
            <Box mr="1rem">
              <CreateAvatar hw="7rem" seed={userAvatarValue} />
            </Box>

            <Flex ml="1rem" direction="column">
              <Title tt="capitalize" size="2rem" c="white" order={2}>
                {userNameValue}
              </Title>

              <Flex>
                <Text mr="1rem">
                  <span className="bold">56</span> partipations
                </Text>
                <Text mr="1rem">
                  <span className="bold">56</span> événements crées
                </Text>
                <Text>
                  Membre depuis le <span className="bold">12/11/2023</span>
                </Text>
              </Flex>

              <Flex mt="1rem">
                <Button mr="1rem">Discord</Button>
                <Button mr="1rem">Twitch</Button>
                <Button>Twitter</Button>
              </Flex>
            </Flex>
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
      </Box>

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

      <Box mt="2rem">
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

      <Box mt="2rem">
        <Title className="title" order={3}>
          Gaming
        </Title>

        <Box className="section section-full">
          <Title className="section-title" order={4}>
            Platformes
          </Title>

          {/* <PlatformSquare span={2} data={PLATFORMS} /> */}
        </Box>

        <Box className="section section-full">
          <Title className="section-title" order={4}>
            Jeux
          </Title>

          <Grid gutter={15}>{/* <GamesLabels data={GAMES} /> */}</Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default UserProfile;
