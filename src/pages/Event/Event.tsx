import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  Box,
  Button,
  Flex,
  Image,
  List,
  Pill,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  IoCalendarClearOutline,
  IoGameController,
  IoLocationSharp,
  IoTv,
} from 'react-icons/io5';
import './Event.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchEvent } from '../../store/reducers/event';
import Date from '../../components/Date/Date';

function Event() {
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug');
  const eventData = useAppSelector((state) => state.event.event);

  useEffect(() => {
    dispatch(fetchEvent(slug));
  }, [dispatch, slug]);

  return (
    <>
      <Image
        src={eventData.banner}
        className="event__banner full-height full-width"
      />
      <div className="event__header full-width content-grid">
        <div className="event__header-content">
          <Box className="event__image">
            <Image
              src={eventData.thumbnail}
              h={200}
              w={200}
              radius="sm"
              fit="cover"
            />
          </Box>
          <div className="event__infos">
            <Box className="event_infos--presentation">
              <Flex gap="sm">
                <Pill>{eventData.status}</Pill>

                {eventData.type_event && (
                  <Pill>{eventData.type_event.name}</Pill>
                )}
              </Flex>
              <Title order={1}>{eventData.title}</Title>
              <Text size="md">
                <Flex align="center" gap="sm">
                  <IoCalendarClearOutline />
                  <Date
                    startDate={eventData.start_date}
                    endDate={eventData.end_date}
                  />
                </Flex>
              </Text>
            </Box>

            <Flex gap="xl" className="event__infos-details">
              <Text>
                <IoGameController color="var(--mantine-color-blue-filled)" />
                {eventData.game.name}
              </Text>
              <Text>
                <IoLocationSharp color="var(--mantine-color-blue-filled)" />
                {eventData.location}
              </Text>
              <Text>
                <IoTv color="var(--mantine-color-blue-filled)" />
                PC
              </Text>
            </Flex>
          </div>

          <Stack className="event__buttons">
            <Button
              className="event__buttons--follow"
              variant="outline"
              component="a"
              href={`/event/${eventData.title_slug}/settings`}
            >
              Editer
            </Button>
            <Button className="event__buttons--follow">Suivre</Button>
            <Button className="event__buttons--contact">
              {eventData.contact}
            </Button>
            <Button className="event__buttons--register">
              S&apos;inscrire
            </Button>
          </Stack>
        </div>
      </div>

      <div className="event__content">
        <Title order={1}>Let's fight !</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <Space h="lg" />

        <Title order={2}>Organisation</Title>
        <Text>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </Text>
        <Space h="md" />
        <List>
          <List.Item>Clone or download repository from GitHub</List.Item>
          <List.Item>Install dependencies with yarn</List.Item>
          <List.Item>
            To start development server run npm start command
          </List.Item>
          <List.Item>
            Run tests to make sure your changes do not break the build
          </List.Item>
          <List.Item>Submit a pull request once you are done</List.Item>
        </List>

        <Space h="lg" />

        <Title order={2}>Rules</Title>
        <Text>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </Text>

        <Space h="lg" />
      </div>
    </>
  );
}

export default Event;
