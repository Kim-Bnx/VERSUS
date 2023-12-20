import { useCallback, useEffect, useState } from 'react';
import { Anchor, BackgroundImage, Box, Flex, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import TypeTag from '../Element/TypeTag';
import FavoriteBtn from '../Element/FavoriteBtn';

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
      <Carousel
        className="carousel"
        height="100%"
        align="start"
        withControls={false}
        withIndicators
        slideSize="100%"
        slideGap="xs"
        loop
        style={{ flex: 1 }}
      >
        {selectedEvents.map((event) => (
          <Carousel.Slide key={event.id} className="slide">
            <BackgroundImage
              className="slide-image"
              src={
                event.banner ||
                'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80'
              }
            >
              {event.platform && event.platform.name && (
                <TypeTag name={event.platform.name} />
              )}
            </BackgroundImage>

            <Box c="white" className="slide-content">
              <Box className="event">
                <Box className="event-description">
                  <Box className="event-title">
                    <Title size="2rem" className="event-title__name">
                      {event.title}
                    </Title>
                    {event.game && event.game.name && (
                      <Text tt="uppercase" className="event-title__game">
                        {event.game.name}
                      </Text>
                    )}
                  </Box>

                  <Text tt="uppercase" size="0.9rem" className="event__date">
                    <Date
                      startDate={event.start_date}
                      endDate={event.end_date}
                    />
                  </Text>

                  <Text className="event__description">
                    {event.description}
                  </Text>
                </Box>

                <Flex className="event-link">
                  <Anchor
                    href={`/event/${event.title_slug}`}
                    className="button"
                  >
                    Voir plus
                  </Anchor>
                </Flex>

                <FavoriteBtn />
              </Box>
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}

export default Slider;
