import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Anchor, Box, Space, Title } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { profile } from '../../../store/reducers/profile';
import EventThumb from '../../../components/Element/Thumb/Event';

function UserEventsCreated() {
  const dispatch = useAppDispatch();
  const userEvents = useAppSelector((state) => state.profile.data.organize);
  const { username } = useParams();

  useEffect(() => {
    if (username !== undefined) {
      dispatch(profile(username));
    }
  }, [dispatch, username]);

  // function that calculates the number of days left until the event starts
  const calculateDaysLeft = (startDate: string) => {
    const now = new Date();
    const start = new Date(startDate); // Convert the string to a Date object
    const difference = start.getTime() - now.getTime();
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? daysLeft : 0;
  };

  return (
    <>
      <Title order={2}>Mes évènements créés</Title>
      <Space h="xs" />
      <Box className="categories-grid">
        {userEvents.map((event) => (
          <Anchor
            unstyled
            href={`/event/${event.title_slug}`}
            key={event.id}
            className="eventhumb-link"
          >
            <EventThumb
              image={event.banner || 'url_de_limage_par_defaut'}
              game={event.game ? event.game.name : 'Jeu non défini'}
              name={event.title}
              type={
                event.platform ? event.platform.name : 'Plateforme non définie'
              }
              date={event.start_date}
              countdown={calculateDaysLeft(event.start_date)}
            />
          </Anchor>
        ))}
      </Box>
    </>
  );
}

export default UserEventsCreated;
