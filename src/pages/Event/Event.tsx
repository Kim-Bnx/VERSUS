import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import {
  ActionIcon,
  Anchor,
  BackgroundImage,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Pill,
  Skeleton,
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
import EventInfoDetails from '../../components/Element/EventInfoDetail/EventInfoDetail';

function Event() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug');
  const eventData = useAppSelector((state) => state.event.event);
  const userData = useAppSelector((state) => state.loggedUser.data);
  const sanitizedEventRules = DOMPurify.sanitize(eventData.rules || '');
  const isLoading = useAppSelector((state) => state.event.isLoading);

  const isRegisterToEvent = () => {
    const participantFound = eventData.participants.map(
      (participant) => participant.id
    );
    return participantFound.includes(userData.id);
  };

  const isEventAdminGuard = () => {
    return eventData.organizer?.id === userData?.id;
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
      <Box className="event__banner content-grid full-width">
        <Skeleton visible={isLoading} className="full-width">
          <BackgroundImage h="25rem" bgp="top" src={eventData.banner || ''}>
            <Box className="event__banner--gradient" />
          </BackgroundImage>
        </Skeleton>
      </Box>

      <Box className="event__header full-width content-grid">
        <Flex gap="lg" className="event__header-content">
          <Box className="event__image">
            <Skeleton visible={isLoading} h="100%" w="200px" maw={200}>
              <Image
                src={eventData.thumbnail || eventData.game?.thumbnail}
                radius="sm"
                h="100%"
                w="200px"
                maw={200}
                fit="cover"
              />
            </Skeleton>
          </Box>

          <Flex
            direction="column"
            pt="6rem"
            justify="flex-start"
            style={{ flexGrow: 1 }}
          >
            <Flex
              align="center"
              gap="xl"
              className="event__infos--presentation"
            >
              {isLoading ? (
                <Skeleton height={25} mb={10} mt={5} width="40%" />
              ) : (
                <Title order={2} tt="uppercase">
                  {eventData.title}
                </Title>
              )}

              {isEventAdminGuard() &&
                (eventData.status === 'published' ? (
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
                ))}
            </Flex>

            <Flex align="center" gap="sm">
              <IoCalendarClearOutline />
              {isLoading ? (
                <Skeleton height={15} radius="xl" width="40%" />
              ) : (
                <Date
                  startDate={eventData.start_date}
                  endDate={eventData.end_date}
                />
              )}
            </Flex>

            <Box h="100%" mt="1rem">
              {isLoading ? (
                <>
                  <Skeleton height={8} mt={18} radius="xl" />
                  <Skeleton height={8} mt={6} radius="xl" />
                  <Skeleton height={8} mt={6} radius="xl" />
                  <Skeleton height={8} mt={6} radius="xl" />
                </>
              ) : (
                <Flex direction="column" justify="space-between" h="100%">
                  <Text ta="justify">{eventData.description}</Text>
                  <Text fw="bold">
                    {eventData.participants.length} participants
                  </Text>
                </Flex>
              )}
            </Box>
          </Flex>

          <Flex
            direction="column"
            justify="space-between"
            className="event__buttons"
          >
            {isEventAdminGuard() && (
              <Button
                className="event__buttons--follow"
                variant="outline"
                component="a"
                href={`/event/${eventData.title_slug}/settings`}
              >
                Editer
              </Button>
            )}

            <Text td="underline" className="event__buttons--contact">
              {eventData.contact}
            </Text>

            <Box className="event__buttons--last">
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
            </Box>
          </Flex>
        </Flex>

        <Flex gap="xl" mt="1rem">
          <EventInfoDetails eventData={eventData} />
          {eventData && <Pill>{eventData.event_type?.name}</Pill>}
        </Flex>
      </Box>

      {isEventAdminGuard() ? (
        <Tabs
          color="indigo"
          defaultValue="presentation_tab"
          className="full-width event__content"
        >
          <Box className="content__tabs full-width content-grid">
            <Box className="content__tabs-buttons">
              <Tabs.List>
                <Tabs.Tab value="presentation_tab">Présentation</Tabs.Tab>
                <Tabs.Tab value="participant_tab">
                  Participants ({eventData.participants.length})
                </Tabs.Tab>
              </Tabs.List>
            </Box>
          </Box>

          <Box className="full-width content-grid" mt="50" mih="500">
            <Box className="content__tabs-panels">
              <Tabs.Panel value="presentation_tab">
                <TypographyStylesProvider mt="2rem">
                  <Divider
                    size="xs"
                    mt="1rem"
                    labelPosition="left"
                    my="md"
                    label={<Title order={3}>Régles de l'évènement</Title>}
                  />
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

                      <ActionIcon
                        variant="outline"
                        aria-label="Supprimer participant"
                        onClick={() => handleDeleteAttendee(attendee.id)}
                      >
                        <IoCloseOutline />
                      </ActionIcon>
                    </Box>
                  ))}
                </Box>
              </Tabs.Panel>
            </Box>
          </Box>
        </Tabs>
      ) : (
        <TypographyStylesProvider mt="2rem">
          <Divider
            size="xs"
            mt="1rem"
            labelPosition="left"
            my="md"
            label={<Title order={3}>Régles de l'évènement</Title>}
          />
          <Box
            className="event__presentation"
            dangerouslySetInnerHTML={{
              __html: sanitizedEventRules,
            }}
          />
        </TypographyStylesProvider>
      )}
    </>
  );
}

export default Event;
