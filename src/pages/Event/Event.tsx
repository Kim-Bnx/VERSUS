import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import {
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Button,
  Flex,
  Image,
  Pill,
  Stack,
  Tabs,
  Text,
  Title,
  Tooltip,
  TypographyStylesProvider,
} from '@mantine/core';
import {
  IoCalendarClearOutline,
  IoCheckmarkSharp,
  IoCloseOutline,
  IoCreateOutline,
  IoGameController,
  IoLocationSharp,
  IoTv,
} from 'react-icons/io5';
import slugify from 'slugify';
import Date from '../../components/Date/Date';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchEvent } from '../../store/reducers/event';
import { registerToEvent } from '../../store/reducers/registerEvent';
import { unregisterToEvent } from '../../store/reducers/unregisterEvent';
import useNotification, {
  NotificationProps,
} from '../../components/Notification/useNotification';
import './Event.scss';
// import CreateAvatar from '../../components/Element/CreateAvatar';

function Event() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug');
  const eventData = useAppSelector((state) => state.event.event);
  const userData = useAppSelector((state) => state.loggedUser.data);
  const sanitizedEventRules = DOMPurify.sanitize(eventData.rules || '');

  const isRegisterToEvent = () => {
    const participantFound = eventData.participants.map(
      (participant) => participant.id
    );
    return participantFound.includes(userData.id);
  };

  const isEventAdmin = () => {
    return eventData.organizer.id === userData.id;
  };
  const { showNotification } = useNotification();

  const handleEventRegister = () => {
    dispatch(
      registerToEvent({
        event_id: eventData.id,
        user_id: userData.id,
      })
    )
      .unwrap()
      .then(() => {
        const notificationProps: NotificationProps = {
          title: 'Inscription validée !',
          message: "Vous êtes bien inscrit·e à l'évènement.",
          type: 'success',
          onClose: () => navigate(0),
        };

        showNotification(notificationProps);
      });
  };

  const handleEventUnregister = () => {
    dispatch(
      unregisterToEvent({
        event_id: eventData.id,
        user_id: userData.id,
      })
    )
      .unwrap()
      .then(() => {
        const notificationProps: NotificationProps = {
          title: 'Inscription annulée !',
          message: "Vous n'êtes plus inscrit·e à l'évènement.",
          onClose: () => navigate(0),
        };

        showNotification(notificationProps);
      });
  };

  const handleDeleteAttendee = (user_id: number) => {
    dispatch(
      unregisterToEvent({
        event_id: eventData.id,
        user_id,
      })
    )
      .unwrap()
      .then(() => {
        const notificationProps: NotificationProps = {
          title: 'Participant retiré.',
          message: 'Le participant a bien été retiré de cet événement.',
          onClose: () => navigate(0),
        };

        showNotification(notificationProps);
      });
  };

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
              {eventData.type_event && <Pill>{eventData.type_event.name}</Pill>}
              <Flex align="center" gap="sm">
                <Title order={2}>{eventData.title}</Title>

                {isEventAdmin() && eventData.status === 'published' ? (
                  <Tooltip.Floating label="Evènement publié" color="gray">
                    <Badge color="green" size="sm">
                      <IoCheckmarkSharp />
                    </Badge>
                  </Tooltip.Floating>
                ) : (
                  <Tooltip.Floating label="Brouillon" color="gray">
                    <Badge color="gray" size="sm">
                      <IoCreateOutline />
                    </Badge>
                  </Tooltip.Floating>
                )}
              </Flex>
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
                <IoGameController color="var(--mantine-color-indigo-filled)" />
                {eventData.game?.name}
              </Text>
              <Text>
                <IoLocationSharp color="var(--mantine-color-indigo-filled)" />
                {eventData.location}
              </Text>
              <Text>
                <IoTv color="var(--mantine-color-indigo-filled)" />
                {eventData.platform?.name}
              </Text>
            </Flex>
          </div>

          <Stack className="event__buttons">
            {isEventAdmin() && (
              <Button
                className="event__buttons--follow"
                variant="outline"
                component="a"
                href={`/event/${eventData.title_slug}/settings`}
              >
                Editer
              </Button>
            )}
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
        color="indigo"
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

        <Box className="full-width content-grid" mt="50" mih="500">
          <div className="content__tabs-panels">
            <Tabs.Panel value="presentation_tab">
              <TypographyStylesProvider>
                <Box
                  className="event__presentation"
                  dangerouslySetInnerHTML={{
                    __html: sanitizedEventRules,
                  }}
                />
              </TypographyStylesProvider>
            </Tabs.Panel>
            <Tabs.Panel value="participant_tab">
              <Box className="event__attendees">
                {eventData.participants.map((attendee) => (
                  <Box key={attendee.id} className="attendee">
                    <Anchor
                      className="attendee-username"
                      href={`/profile/${slugify(attendee.username, {
                        lower: true,
                      })}`}
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
        </Box>
      </Tabs>
    </>
  );
}

export default Event;
