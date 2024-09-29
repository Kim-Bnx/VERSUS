import { useEffect } from 'react';
import { Image, Box, Flex, Title, Skeleton } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
import EventThumb from '../../components/Element/Thumb/Event';
import { Event as AppEvent } from '../../@types/event';

import './Home.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAllEvents } from '../../store/reducers/events';
import { LocalStorage } from '../../utils/LocalStorage';
import { fetchAllUserFavGames } from '../../store/reducers/userFavGames';
import { fetchUserEvents } from '../../store/reducers/userEvents';

function Home() {
  const dispatch = useAppDispatch();
  const events = useAppSelector((state) => state.events.events);
  const favGames = useAppSelector((state) => state.userFavGames.games);
  const userEvents = useAppSelector((state) => state.userEvents.events);
  const isLoading = useAppSelector((state) => state.events.isLoading);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  // function that calculates the number of days left until the event starts
  const calculateDaysLeft = (startDate: string): number => {
    // creates a new Date object representing the current date and time
    const now = new Date();

    // creates a new Date object from the 'startDate' string
    // 'startDate' should be in a format that the Date constructor can interpret such as 'YYYY-MM-DD'. This line converts the string into a Date object.
    const start = new Date(startDate);

    // calculates the difference in milliseconds between the event's start date and the current date
    const difference = start.getTime() - now.getTime();

    // converts the difference from milliseconds to days
    // math.ceil is used to round up to the nearest whole day as even a partial day counts as a full day for the countdown.
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    return daysLeft > 0 ? daysLeft : 0;
  };

  const sortEventsByParticipants = (eventsArray: AppEvent[]) => {
    return (
      eventsArray
        // Use .slice to generate a copy of the array because .sort changes the array it affects directly
        .slice()
        .sort((a, b) => b.participants.length - a.participants.length)
    );
  };

  const sortedEvents = sortEventsByParticipants(events);

  const isConnected = useAppSelector((state) => state.login.isConnected);
  const username = useAppSelector((state) => state.loggedUser.data.username);
  // const userGames = useAppSelector((state) => state.loggedUser.data.games);

  useEffect(() => {
    if (isConnected) {
      const userAuth = LocalStorage.getItem('auth');
      const { userId } = userAuth.auth;
      dispatch(fetchAllUserFavGames(userId));
      dispatch(fetchUserEvents(userId));
    }
  }, [dispatch, isConnected]);

  return (
    <>
      <Box className="hero full-height">
        <Title order={1}>Organisez, Rassemblez et Jouez</Title>
      </Box>

      <Slider />

      {isConnected && userEvents.length > 0 && (
        <Box className="container">
          <Flex justify="space-between" align="center" className="title">
            <Title order={2}>Mes participations</Title>

            <NavLink
              to={`/profile/${username}/participations`}
              className="categories__title-more link"
            >
              Voir plus
            </NavLink>
          </Flex>

          <div className="categories-grid">
            {userEvents.slice(0, 3).map((userEvent) => (
              <NavLink
                to={`/event/${userEvent.title_slug}`}
                key={userEvent.id}
                className="eventhumb-link"
              >
                <EventThumb
                  image={userEvent.banner || 'url_de_limage_par_defaut'}
                  game={
                    userEvent.game ? userEvent.game.name : 'Jeux non défini'
                  }
                  name={userEvent.title}
                  type={
                    userEvent.platform
                      ? userEvent.platform.name
                      : 'Plateforme non définie'
                  }
                  date={userEvent.start_date}
                  countdown={calculateDaysLeft(userEvent.start_date)}
                />
              </NavLink>
            ))}
          </div>
        </Box>
      )}

      <Box className="container">
        <Flex justify="space-between" align="center" className="title">
          <Title order={2}>Évènements à venir</Title>

          <NavLink
            to="/events/upcoming"
            className="categories__title-more link"
          >
            Voir plus
          </NavLink>
        </Flex>

        <div className="categories-grid">
          {isLoading
            ? Array.from({ length: 3 }, (_, index) => (
                <Skeleton key={index} height={'15rem'} radius="md" />
              ))
            : events.slice(0, 3).map((event) => (
                <NavLink
                  key={event.id}
                  to={`/event/${event.title_slug}`}
                  className="eventhumb-link"
                >
                  <EventThumb
                    image={event.banner || 'url_de_limage_par_defaut'}
                    game={event.game ? event.game.name : 'Jeu non défini'}
                    name={event.title}
                    type={
                      event.platform
                        ? event.platform.name
                        : 'Plateforme non définie'
                    }
                    date={event.start_date}
                    countdown={calculateDaysLeft(event.start_date)}
                  />
                </NavLink>
              ))}
        </div>
      </Box>

      <Box className="container">
        <Flex justify="space-between" align="center" className="title">
          <Title order={2}>Évènements populaires</Title>

          <NavLink
            to="/events/populars"
            className="categories__title-more link"
          >
            Voir plus
          </NavLink>
        </Flex>

        <div className="categories-grid">
          {isLoading
            ? Array.from({ length: 3 }, (_, index) => (
                <Skeleton key={index} height={'15rem'} radius="md" />
              ))
            : sortedEvents.slice(0, 3).map((event) => (
                <NavLink
                  to={`/event/${event.title_slug}`}
                  key={event.id}
                  className="eventhumb-link"
                >
                  <Skeleton visible={isLoading}>
                    <EventThumb
                      image={event.banner || 'url_de_limage_par_defaut'}
                      game={event.game ? event.game.name : 'Jeu non défini'}
                      name={event.title}
                      type={
                        event.platform
                          ? event.platform.name
                          : 'Plateforme non définie'
                      }
                      date={event.start_date}
                      countdown={calculateDaysLeft(event.start_date)}
                    />
                  </Skeleton>
                </NavLink>
              ))}
        </div>
      </Box>

      {isConnected && favGames.length > 0 && (
        <Box className="container">
          <Box className="title">
            <Title order={2}>Mes jeux préférés</Title>
          </Box>

          <div className="games__grid">
            {favGames.slice(0, 4).map((game) => (
              <NavLink to="/game/events" key={game.id}>
                <Image src={game.thumbnail} h={350} radius="md" sizes="cover" />
              </NavLink>
            ))}
          </div>
        </Box>
      )}
    </>
  );
}

export default Home;
