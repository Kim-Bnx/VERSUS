import { useParams } from 'react-router-dom';
import {
  Box,
  Flex,
  Title,
  Button,
  Grid,
  Text,
  GridCol,
  Anchor,
  Space,
} from '@mantine/core';
import { useEffect } from 'react';
import slugify from 'slugify';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { profile } from '../../../store/reducers/profile';
import EventThumb from '../../../components/Element/Thumb/Event';
import CreateAvatar from '../../../components/Element/CreateAvatar';
import DateFormat from '../../../components/Date/Date';

import '../Profile.scss';

function UserProfile() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.profile.data);
  const { username } = useParams();

  const userNameValue = userData.username;
  const userAvatarValue = userData.avatar;
  const userGamesList = userData.games;
  const userPlatformsList = userData.platforms;
  const userCreatedAt = userData.createdAt;
  const userEventsParticipations = userData.events;
  const userEventsCreated = userData.organize;

  const calculateDaysLeft = (startDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const difference = start - now;
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return daysLeft > 0 ? daysLeft : 0;
  };

  useEffect(() => {
    if (username !== undefined) {
      dispatch(profile(username));
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
                  <span className="bold">
                    {userEventsParticipations.length}
                  </span>{' '}
                  partipations
                </Text>
                <Text mr="1rem">
                  <span className="bold">{userEventsCreated.length}</span>{' '}
                  événements crées
                </Text>
                <Text>
                  Membre depuis le{' '}
                  <span className="bold">
                    <DateFormat startDate={userCreatedAt} />
                  </span>
                </Text>
              </Flex>

              <Flex mt="1rem">
                <Button mr="1rem">Discord</Button>
                <Button mr="1rem">Twitch</Button>
                <Button>Twitter</Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Box mt="2rem">
        <Flex justify="space-between" align="center" className="title">
          <Title order={3}>Participations</Title>

          <Anchor
            href={`/profile/${slugify(`${userNameValue}`, {
              lower: true,
            })}/participations`}
            className="categories__title-more"
          >
            Voir plus
          </Anchor>
        </Flex>
        <Space h="md" />

        <div className="categories-grid">
          {userEventsParticipations.slice(0, 3).map((userEvent) => (
            <Anchor
              href={`/event/${userEvent.title_slug}`}
              unstyled
              key={userEvent.id}
              className="eventhumb-link"
            >
              <EventThumb
                image={userEvent.banner || 'url_de_limage_par_defaut'}
                name={userEvent.title}
                type={
                  userEvent.platform
                    ? userEvent.platform.name
                    : 'Plateforme non définie'
                }
                date={userEvent.start_date}
                countdown={calculateDaysLeft(userEvent.start_date)}
              />
            </Anchor>
          ))}
        </div>
      </Box>

      <Box mt="2rem">
        <Flex justify="space-between" align="center" className="title">
          <Title order={3}>Évènements créés</Title>

          <Anchor
            href={`/profile/${slugify(`${userNameValue}`, {
              lower: true,
            })}/events`}
            className="categories__title-more"
          >
            Voir plus
          </Anchor>
        </Flex>
        <Space h="md" />

        <div className="categories-grid">
          {userEventsCreated.slice(0, 3).map((userEvent) => (
            <Anchor
              href={`/event/${userEvent.title_slug}`}
              unstyled
              key={userEvent.id}
              className="eventhumb-link"
            >
              <EventThumb
                image={userEvent.thumbnail || 'url_de_limage_par_defaut'}
                name={userEvent.title}
                type={
                  userEvent.platform
                    ? userEvent.platform.name
                    : 'Plateforme non définie'
                }
                date={userEvent.start_date}
                countdown={calculateDaysLeft(userEvent.start_date)}
              />
            </Anchor>
          ))}
        </div>
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
