/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Fieldset,
  Flex,
  Image,
  Modal,
  Select,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import slugify from 'slugify';
import { DateTimePicker, DatesProvider } from '@mantine/dates';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateEvent } from '../../../store/reducers/updateEvent';
import { deleteEvent } from '../../../store/reducers/deleteEvent';
import { publishEvent } from '../../../store/reducers/publishEvent';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Event } from '../../../@types/event';
import eventSchema, { EventSchemaType } from '../../../validations/eventSchema';
import { fetchGames } from '../../../store/reducers/games';
import { fetchPlatforms } from '../../../store/reducers/platforms';
import { fetchEventTypes } from '../../../store/reducers/eventTypes';
import { fetchEvent } from '../../../store/reducers/event';
import TextEditor from '../../../components/TextEditor/TextEditor';
import { LocalStorage } from '../../../utils/LocalStorage';
import useNotification from '../../../components/Notification/useNotification';
import defaultImg from '../../../assets/default_img.png';
import defaultBanner from '../../../assets/default_banner.png';
import './EditEvent.scss';

interface NotificationProps {
  title: string;
  message: string;
  type: 'success' | 'failed';
}

function EditEvent() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  const getAuth = LocalStorage.getItem('auth');
  const userData = useAppSelector((state) => state.loggedUser.data);
  const eventData = useAppSelector((state) => state.event.event);
  const gamesData = useAppSelector((state) => state.games.games);
  const platformsData = useAppSelector((state) => state.platforms.platforms);
  const eventTypesData = useAppSelector((state) => state.eventTypes.types);
  const [bannerModal, setBannerModalOpen] = useState(false);
  const [thumbnailModal, setThumbnailModalOpen] = useState(false);
  const { showNotification } = useNotification();

  if (!slug) throw new Error('Invalid slug');

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventSchemaType>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: '',
      description: '',
      location: '',
      contact: '',
      startDate: undefined,
      endDate: undefined,
      game: 0,
      platform: 0,
      type: 0,
      banner: '',
      thumbnail: '',
      rules: '',
    },
  });

  const gamesNameData = gamesData.map((game) => ({
    label: game.name,
    value: game.id.toString(),
  }));

  const platformsNameData = platformsData.map((platform) => ({
    label: platform.name,
    value: platform.id.toString(),
  }));

  const typesNameData = eventTypesData.map((type) => ({
    label: type.name,
    value: type.id.toString(),
  }));

  const showNotificationWithProps = (notificationProps: NotificationProps) => {
    showNotification(notificationProps);
  };

  const onSubmit = async (data: EventSchemaType) => {
    const formattedStartDate = data.startDate
      ? new Date(data.startDate).toISOString()
      : eventData.start_date;

    const formattedEndDate = data.endDate
      ? new Date(data.endDate).toISOString()
      : new Date(eventData.end_date).toISOString();

    const newSlug = slugify(data.title, { lower: true });

    const newValues: Event = {
      id: eventData.id,
      title_slug: newSlug || eventData.title_slug,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      location: data.location || eventData.location,
      contact: data.contact || eventData.contact,
      game_id: data.game || eventData.game_id,
      platform_id: data.platform || eventData.platform_id,
      type_id: data.type || eventData.type_id,
      rules: data.rules || eventData.rules,
      banner: data.banner || eventData.banner,
      thumbnail: data.thumbnail || eventData.thumbnail,
      title: data.title || eventData.title,
      description: data.description || eventData.description,
      organizer: eventData.organizer,
      participants: eventData.participants || [],
    };

    try {
      await dispatch(updateEvent(newValues)).unwrap();
      showNotificationWithProps({
        title: 'Modifications enregistrées',
        message: 'Les modifications apportées ont bien été enregistrées.',
        type: 'success',
      });
      navigate(`/event/${newSlug || eventData.title_slug}/settings`);
    } catch {
      showNotificationWithProps({
        title: 'Un problème est survenu',
        message: 'Veuillez réessayer dans quelques minutes.',
        type: 'failed',
      });
    }
  };

  const handleDeleteEvent = async () => {
    try {
      await dispatch(deleteEvent(eventData.id)).unwrap();
      showNotificationWithProps({
        title: "L'événement a été supprimé",
        message: 'so long o/',
        type: 'success',
      });
    } catch {
      showNotificationWithProps({
        title: 'Un problème est survenu',
        message: 'Veuillez réessayer dans quelques minutes.',
        type: 'failed',
      });
    }
  };

  const handlePublishEvent = async () => {
    try {
      await dispatch(
        publishEvent({ id: eventData.id, status: 'published' })
      ).unwrap();
      showNotificationWithProps({
        title: "L'événement a été publié !",
        message: "L'événement est maintenant ouvert à tous les participants.",
        type: 'success',
      });
      navigate(`/event/${slugify(eventData.title, { lower: true })}`);
    } catch {
      showNotificationWithProps({
        title: 'Un problème est survenu',
        message: 'Veuillez réessayer dans quelques minutes.',
        type: 'failed',
      });
    }
  };

  useEffect(() => {
    if (eventData) {
      reset({
        title: eventData.title || '',
        description: eventData.description || '',
        location: eventData.location || '',
        contact: eventData.contact || '',
        startDate: eventData.start_date
          ? new Date(eventData.start_date)
          : undefined,
        endDate: eventData.end_date ? new Date(eventData.end_date) : undefined,
        game: eventData.game_id || 0,
        platform: eventData.platform_id || 0,
        type: eventData.type_id || 0,
        banner: eventData.banner || '',
        thumbnail: eventData.thumbnail || '',
        rules: eventData.rules || '',
      });
    }
  }, [eventData, reset]);

  useEffect(() => {
    dispatch(fetchEvent(slug))
      .unwrap()
      .then((response) => {
        if (response.organizer.id !== getAuth.auth.userId) {
          navigate(`/event/${slugify(eventData.title, { lower: true })}`);
        }
      });
  }, [dispatch, slug, userData]);

  useEffect(() => {
    dispatch(fetchGames());
    dispatch(fetchPlatforms());
    dispatch(fetchEventTypes());
  }, [dispatch]);

  return (
    <Box
      component="form"
      className="content-grid full-width full-height settings-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box className="full-width content-grid settings_banner">
        <img
          alt="Bannière"
          className="full-width settings_banner-image"
          src={eventData.banner || defaultBanner}
        />

        <Button
          className="settings_banner-button button"
          onClick={() => setBannerModalOpen(true)}
        >
          Changer la bannière
        </Button>

        <Modal
          opened={bannerModal}
          onClose={() => setBannerModalOpen(false)}
          title="Changer la bannière"
          centered
          className="modal-url"
        >
          <Controller
            name="banner"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                type="url"
                label="URL de la bannière"
                placeholder={eventData.banner}
              />
            )}
          />
          <Button onClick={() => setBannerModalOpen(true)}>
            <IoCheckmarkSharp />
          </Button>
        </Modal>
      </Box>

      <Box className="settings_header full-width content-grid">
        <Flex align="end" justify="space-between">
          <Box>
            <Title order={2}>Configurer son évènement</Title>
            <Text>{eventData.title}</Text>
          </Box>
          <Flex direction="column" gap="md">
            <Button
              component="a"
              href={`/event/${slugify(eventData.title, { lower: true })}`}
            >
              Voir la page
            </Button>

            <Button color="green" onClick={handlePublishEvent}>
              Publier
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Fieldset
        legend="Informations"
        variant="unstyled"
        className="fieldset-settings settings_informations"
      >
        <Box className="settings_informations-thumbnail">
          <Image
            radius="md"
            h={200}
            w={200}
            fit="cover"
            src={eventData.thumbnail || defaultImg}
          />

          <Button
            className="settings_informations-button"
            onClick={() => setThumbnailModalOpen(true)}
          >
            Changer l&apos;image
          </Button>

          <Modal
            opened={thumbnailModal}
            onClose={() => setThumbnailModalOpen(false)}
            title="Changer la bannière"
            className="modal-url"
            centered
          >
            <Controller
              name="thumbnail"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  type="url"
                  label="URL de la banniére"
                  placeholder={eventData.thumbnail}
                />
              )}
            />
            <Button onClick={() => setThumbnailModalOpen(true)}>
              <IoCheckmarkSharp />
            </Button>
          </Modal>
        </Box>

        <Box className="settings_informations-inputs">
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Titre de l'évènement"
                className={`${errors.title ? 'input-error' : ''}`}
                c="#FFF"
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Description"
                placeholder="Brève description de l'évènement"
                className={`${errors.description ? 'input-error' : ''}`}
                c="#FFF"
              />
            )}
          />

          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Lieu"
                placeholder="En ligne ou hors ligne"
                className={`${errors.location ? 'input-error' : ''}`}
                c="#FFF"
              />
            )}
          />

          <Controller
            name="contact"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Contact"
                placeholder="Discord, réseaux sociaux, adresse mail etc..."
                className={`${errors.contact ? 'input-error' : ''}`}
                c="#FFF"
              />
            )}
          />
        </Box>
      </Fieldset>

      <Fieldset
        legend="Dates"
        variant="unstyled"
        className="fieldset-settings settings_dates"
      >
        <DatesProvider settings={{ locale: 'fr', timezone: 'CET' }}>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DateTimePicker
                {...field}
                clearable
                valueFormat="DD MMMM YYYY à HH:mm"
                label="Date de début"
                placeholder="Choisir une date de début"
                minDate={new Date()}
                className={`${errors.startDate ? 'input-error' : ''}`}
              />
            )}
          />
        </DatesProvider>

        <DatesProvider settings={{ locale: 'fr', timezone: 'CET' }}>
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <DateTimePicker
                {...field}
                clearable
                valueFormat="DD MMMM YYYY à HH:mm"
                label="Date de fin"
                placeholder="Choisir une date de fin"
                minDate={new Date()}
                className={`${errors.endDate ? 'input-error' : ''}`}
              />
            )}
          />
        </DatesProvider>
      </Fieldset>

      <Fieldset
        legend="Activité"
        variant="unstyled"
        className="fieldset-settings settings_organization"
      >
        <Controller
          name="game"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              className="settings_games"
              label="Choix du jeu vidéo"
              placeholder="Sélectionner le jeu"
              data={gamesNameData}
              onChange={(selectedGameId) => {
                field.onChange(
                  selectedGameId ? parseInt(selectedGameId, 10) : 0
                );
              }}
              value={field.value ? field.value.toString() : null}
            />
          )}
        />

        <Controller
          name="platform"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label="Plateforme"
              placeholder="Choisir la plateforme"
              data={platformsNameData}
              onChange={(selectedPlatformId) => {
                field.onChange(
                  selectedPlatformId ? parseInt(selectedPlatformId, 10) : 0
                );
              }}
              value={field.value ? field.value.toString() : null}
            />
          )}
        />

        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label="Type d'événement"
              placeholder="Choisir le type d'événement"
              data={typesNameData}
              onChange={(selectedTypeId) => {
                field.onChange(
                  selectedTypeId ? parseInt(selectedTypeId, 10) : 0
                );
              }}
              value={field.value ? field.value.toString() : null}
            />
          )}
        />
      </Fieldset>

      <Fieldset
        legend="Présentation"
        className="fieldset-settings settings_presentation"
        variant="unstyled"
      >
        <Controller
          name="rules"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextEditor content={value} setEventRules={onChange} />
          )}
        />
      </Fieldset>

      <Box className="settings_actions">
        <Flex align="center" justify="space-between" gap="md">
          <Button color="red" onClick={handleDeleteEvent}>
            Supprimer
          </Button>

          <Flex gap="md">
            <Button type="submit">Modifier et enregistrer</Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default EditEvent;
