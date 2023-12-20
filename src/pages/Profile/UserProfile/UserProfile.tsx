import { useParams } from 'react-router-dom';
import {
  Box,
  Flex,
  Title,
  Button,
  Grid,
  SimpleGrid,
  Text,
  GridCol,
} from '@mantine/core';
import { IconHeartFilled, IconStarFilled } from '@tabler/icons-react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { profile } from '../../../store/reducers/profile';
import TeamThumb from '../../../components/Element/Thumb/Team';
import EventThumb from '../../../components/Element/Thumb/Event';
import CreateAvatar from '../../../components/Element/CreateAvatar';

import '../Profile.scss';

const membersList = [
  'RubisIron',
  'EpicNever',
  'KillMonsieur',
  'AnotherMember',
  'MonsieurCloud',
  'MemberSix',
];

function UserProfile() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.profile.data);
  const { username } = useParams();

  const userNameValue = userData.username;
  const userAvatarValue = userData.avatar;
  const userGamesList = userData.games;
  const userPlatformsList = userData.platforms;

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

          <Grid justify="flex-start" align="center" gutter={15}>
            {userPlatformsList.map((platform) => (
              <Grid.Col span={1} key={platform.id}>
                <Flex justify="center" align="center" className="platform">
                  <Text size="0.9rem">{platform.name}</Text>
                </Flex>
              </Grid.Col>
            ))}
          </Grid>
        </Box>

        <Box className="section section-full">
          <Title className="section-title" order={4}>
            Jeux
          </Title>

          <Grid
            justify="flex-start"
            align="center"
            className="games-list"
            gutter={15}
          >
            {userGamesList.map((game) => (
              <GridCol key={game.id} span="content">
                <Box className="game">
                  <Text>{game.name}</Text>
                </Box>
              </GridCol>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default UserProfile;
