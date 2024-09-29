import { useCallback, useEffect, useState } from 'react';
import {
  BackgroundImage,
  Box,
  Button,
  Flex,
  Skeleton,
  Space,
  Text,
  Title,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import {
  IoCalendarClearOutline,
  IoGameController,
  IoTv,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

import '@mantine/carousel/styles.css';
import './Slider.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAllEvents } from '../../store/reducers/events';
// Use alias to avoid confusion with global type Event
import { Event as AppEvent } from '../../@types/event';
import Date from '../Date/Date';

function Slider() {
  const dispatch = useAppDispatch();
  const events = useAppSelector((state) => state.events.events);
  const isLoading = useAppSelector((state) => state.events.isLoading);
  const [selectedEvents, setSelectedEvents] = useState<AppEvent[]>([]);

  // Fisher-Yates algorithm to shuffle an array [https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/]
  const shuffle = (originalArray: AppEvent[]) => {
    const array = [...originalArray];
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      // eslint-disable-next-line no-param-reassign
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const selectedRandomEvents = useCallback(
    (eventsArray: AppEvent[], nbOfEvents: number) => {
      const shuffledEvents = shuffle(eventsArray);
      return shuffledEvents.slice(0, nbOfEvents);
    },
    []
  );

  useEffect(() => {
    const randomEvents = selectedRandomEvents(events, 3);
    setSelectedEvents(randomEvents);
  }, [events, selectedRandomEvents]);

  return (
    <Box className="slider">
      <Skeleton visible={isLoading} radius="md">
        <Carousel
          className="carousel"
          height="100%"
          align="start"
          withControls={false}
          withIndicators
          slideSize="100%"
          slidesToScroll={1}
          loop
          style={{ flex: 1 }}
        >
          {selectedEvents.map((event) => (
            <Carousel.Slide key={event.id} className="slide">
              <BackgroundImage
                className="slide-image img"
                component={Link}
                to={`/event/${event.title_slug}`}
                src={
                  event.banner ||
                  'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'
                }
              />

              <Box className="slide-content">
                <Box className="slide-title">
                  <Title order={2}>{event.title}</Title>

                  <Flex gap="sm">
                    <IoCalendarClearOutline />
                    <Date
                      startDate={event.start_date}
                      endDate={event.end_date}
                    />
                  </Flex>

                  <Space h="md" />

                  <Text className="slide-description">{event.description}</Text>
                </Box>

                <Flex justify="space-between">
                  <Flex gap="xs" direction="column" justify="flex-start">
                    <Flex gap="xs">
                      <IoGameController
                        size="22"
                        color="var(--mantine-color-indigo-filled)"
                      />

                      <Text>{event.game?.name}</Text>
                    </Flex>

                    <Flex gap="xs">
                      <IoTv
                        size="22"
                        color="var(--mantine-color-indigo-filled)"
                      />
                      <Text>{event.platform?.name}</Text>
                    </Flex>
                  </Flex>

                  <Button
                    component={Link}
                    to={`/event/${event.title_slug}`}
                    className="slide-button button"
                  >
                    Voir l'événement
                  </Button>
                </Flex>
              </Box>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Skeleton>
    </Box>
  );
}

export default Slider;
