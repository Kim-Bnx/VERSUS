import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import {
  ActionIcon,
  Anchor,
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Notification,
  Pill,
  Stack,
  Tabs,
  Text,
  Title,
  TypographyStylesProvider,
  rem,
} from '@mantine/core';
import {
  IoCalendarClearOutline,
  IoCheckmarkSharp,
  IoCloseOutline,
  IoGameController,
  IoLocationSharp,
  IoTv,
} from 'react-icons/io5';
import './Event.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchEvent } from '../../store/reducers/event';
import Date from '../../components/Date/Date';
import { registerToEvent } from '../../store/reducers/registerEvent';
import { unregisterToEvent } from '../../store/reducers/unregisterEvent';

function Event() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug');
  const eventData = useAppSelector((state) => state.event.event);
  const userData = useAppSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(fetchEvent(slug));
  }, [dispatch, slug]);

  const sanitizedEventRules = DOMPurify.sanitize(eventData.rules);

  const isRegisterToEvent = () => {
    const participantFound = eventData.participants.map(
      (participant) => participant.id
    );
    return participantFound.includes(userData.id);
  };

  const isEventAdmin = () => {
    return eventData.organizer.id === userData.id;
  };

  const [isRegister, setIsRegister] = useState(false);

  const checkIcon = (
    <IoCheckmarkSharp style={{ width: rem(20), height: rem(20) }} />
  );

  const handleEventRegister = () => {
    dispatch(
      registerToEvent({
        event_id: eventData.id,
        user_id: userData.id,
      })
    );

    setIsRegister(true);
    setTimeout(() => {
      setIsRegister(false);
    }, 3000);
  };

  const handleEventUnregister = () => {
    dispatch(
      unregisterToEvent({
        event_id: eventData.id,
        user_id: userData.id,
      })
    );

    setIsRegister(true);
    setTimeout(() => {
      setIsRegister(false);
    }, 3000);
  };

  const handleDeleteAttendee = (user_id: number) => {
    dispatch(
      unregisterToEvent({
        event_id: eventData.id,
        user_id,
      })
    );
    console.log('participant supprimé');
    navigate(0);
  };

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

            {isRegisterToEvent() ? (
              <Button
                className="event__buttons--register"
                onClick={handleEventUnregister}
              >
                Se désinscrire
              </Button>
            ) : (
              <Button
                className="event__buttons--register"
                onClick={handleEventRegister}
              >
                S&apos;inscrire
              </Button>
            )}
          </Stack>
        </div>
      </div>

      <Tabs
        defaultValue="presentation_tab"
        className="full-width event__content"
      >
        <div className="content__tabs full-width content-grid">
          <div className="content__tabs-buttons">
            <Tabs.List>
              <Tabs.Tab value="presentation_tab">Présentation</Tabs.Tab>
              <Tabs.Tab value="participant_tab">
                Participants ({eventData.participants.length})
              </Tabs.Tab>
            </Tabs.List>
          </div>
        </div>

        <div className="full-width content-grid">
          <div className="content__tabs-panels">
            <Tabs.Panel value="presentation_tab">
              <TypographyStylesProvider>
                <Box
                  className="event__presentation"
                  dangerouslySetInnerHTML={{ __html: sanitizedEventRules }}
                />
              </TypographyStylesProvider>
            </Tabs.Panel>
            <Tabs.Panel value="participant_tab">
              <Box className="event__attendees">
                {eventData.participants.map((attendee) => (
                  <Box key={attendee.id} className="attendee">
                    <Avatar />
                    <Anchor
                      className="attendee-username"
                      href={`/event/profile/${attendee.username}`}
                    >
                      {attendee.username}
                    </Anchor>

                    {isEventAdmin() && (
                      <ActionIcon
                        variant="outline"
                        aria-label="Supprimer participant"
                        onClick={() => handleDeleteAttendee(attendee.id)}
                      >
                        <IoCloseOutline />
                      </ActionIcon>
                    )}
                  </Box>
                ))}
              </Box>
            </Tabs.Panel>
          </div>
        </div>
      </Tabs>

      {isRegisterToEvent() ? (
        <Notification
          className={`notification_registration ${isRegister ? 'active' : ''}`}
          icon={checkIcon}
          color="teal"
          title="Inscription annulée"
          mt="md"
        >
          Vous êtes désinscrit·e à l&apos;évènement
          <br />
          <Anchor onClick={() => navigate(0)}>Recharger la page</Anchor>
        </Notification>
      ) : (
        <Notification
          className={`notification_registration ${isRegister ? 'active' : ''}`}
          icon={checkIcon}
          color="teal"
          title="Inscription validée !"
          mt="md"
        >
          Vous êtes inscrit·e à l&apos;évènement
          <br />
          <Anchor onClick={() => navigate(0)}>Recharger la page</Anchor>
        </Notification>
      )}
    </>
  );
}

export default Event;
