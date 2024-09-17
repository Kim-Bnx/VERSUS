import { useEffect } from 'react';
import { Anchor, Space, Title } from '@mantine/core';
import { fetchAllEvents } from '../../store/reducers/events';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Event as AppEvent } from '../../@types/event';
import EventThumb from '../../components/Element/Thumb/Event';

function Upcoming() {
  const dispatch = useAppDispatch();
  const events = useAppSelector((state) => state.events.events);

  const sortEventsByParticipants = (eventsArray: AppEvent[]) => {
    return eventsArray
      .slice()
      .sort((a, b) => b.participants.length - a.participants.length);
  };
  const sortedEvents = sortEventsByParticipants(events);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

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
      <Title order={2}>Les évènements à venir</Title>
      <Space h="xl" />
      <div className="categories-grid">
        {sortedEvents.map((event) => (
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
              className="img"
            />
          </Anchor>
        ))}
      </div>
    </>
  );
}

export default Upcoming;
