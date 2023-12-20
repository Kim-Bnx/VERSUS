import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Anchor, Space, Title } from '@mantine/core';
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
  const calculateDaysLeft = (startDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const difference = start - now;
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? daysLeft : 0;
  };

  return (
    <>
      <Title order={1}>Les évènements populaires</Title>
      <Space h="xl" />
      <div className="categories-grid">
        {userEvents.map((event) => (
          <Anchor
            unstyled
            href={`/event/${event.title_slug}`}
            key={event.id}
            className="eventhumb-link"
          >
            <EventThumb
              image={event.thumbnail || 'url_de_limage_par_defaut'}
              game={event.game ? event.game.name : 'nom pas trouvé'}
              name={event.title}
              type={
                event.platform ? event.platform.name : 'Plateforme non définie'
              }
              date={event.start_date}
              countdown={calculateDaysLeft(event.start_date)}
            />
          </Anchor>
        ))}
      </div>
    </>
  );
}

export default UserEventsCreated;
