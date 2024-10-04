import { useEffect, useState } from 'react';
import {
  Anchor,
  Box,
  Flex,
  Pagination,
  Select,
  Title,
  Text,
  Divider,
} from '@mantine/core';
import { fetchAllEvents } from '../../store/reducers/events';
import { fetchGames } from '../../store/reducers/games';
import { fetchPlatforms } from '../../store/reducers/platforms';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Event as AppEvent } from '../../@types/event';
import { DateTimePicker, DatesProvider } from '@mantine/dates';
import EventThumb from '../../components/Element/Thumb/Event';
import './Style.scss';

function AllEvents() {
  const dispatch = useAppDispatch();
  const events = useAppSelector((state) => state.events.events);
  const games = useAppSelector((state) => state.games.games);
  const platforms = useAppSelector((state) => state.platforms.platforms);

  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 9;

  const sortEventsByParticipants = (eventsArray: AppEvent[]) => {
    return eventsArray
      .slice()
      .sort((a, b) => b.participants.length - a.participants.length);
  };

  const sortedEvents = sortEventsByParticipants(events);

  const filterEvents = (eventsArray: AppEvent[]) => {
    return eventsArray.filter((event) => {
      const matchesGame = selectedGame
        ? event.game?.name === selectedGame
        : true;
      const matchesPlatform = selectedPlatform
        ? event.platform?.name === selectedPlatform
        : true;
      const matchesDate = selectedDate
        ? event.start_date.startsWith(selectedDate.toISOString())
        : true;
      return matchesGame && matchesPlatform && matchesDate;
    });
  };

  const filteredEvents = filterEvents(sortedEvents);

  useEffect(() => {
    dispatch(fetchAllEvents());
    dispatch(fetchGames());
    dispatch(fetchPlatforms());
  }, [dispatch]);

  const calculateDaysLeft = (startDate: string) => {
    const now = new Date();
    const start = new Date(startDate);
    const difference = start.getTime() - now.getTime();
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? daysLeft : 0;
  };

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  return (
    <>
      <Title order={2} mb="1rem">
        Tous les évènements à venir
      </Title>

      <Box mb="1rem">
        <Divider size="sm" />

        <Flex gap="xl" align="center" mb="1rem" p="1rem">
          <Select
            label="Jeu"
            placeholder="Rechercher par jeu"
            data={games.map((game) => ({ value: game.name, label: game.name }))}
            searchable
            clearable
            nothingFoundMessage="Rien n'à été trouvé :("
            value={selectedGame}
            onChange={setSelectedGame}
          />

          <Select
            label="Plateforme"
            placeholder="Rechercher par plateforme"
            data={platforms.map((platform) => ({
              value: platform.name,
              label: platform.name,
            }))}
            searchable
            clearable
            nothingFoundMessage="Rien n'à été trouvé :("
            value={selectedPlatform}
            onChange={setSelectedPlatform}
          />

          <DatesProvider settings={{ locale: 'fr', timezone: 'CET' }}>
            <DateTimePicker
              clearable
              valueFormat="DD MMMM YYYY"
              label="Date"
              placeholder="Rechercher par date"
              minDate={new Date()}
              style={{ minWidth: '213px' }}
              value={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
              }}
            />
          </DatesProvider>
        </Flex>

        <Divider size="sm" />

        <Flex
          mt="1rem"
          lts="0.2rem"
          fz="xs"
          align="flex-end"
          justify="flex-end"
        >
          <Text c="blue" fw="bold" fz="xl">
            {filteredEvents.length === 0 ? 'aucun' : filteredEvents.length}
          </Text>

          <Text pl="0.3rem">
            {filteredEvents.length > 1
              ? 'évènements trouvés'
              : 'évènement trouvé'}
          </Text>
        </Flex>
      </Box>

      <Box className="categories-grid">
        {paginatedEvents.map((event) => (
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

      <Flex justify="center" mt="3rem">
        <Pagination
          total={totalPages}
          value={currentPage}
          onChange={setCurrentPage}
          color="blue"
          size="md"
          radius="xl"
          withControls={false}
        />
      </Flex>
    </>
  );
}

export default AllEvents;
