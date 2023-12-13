/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Fieldset,
  Flex,
  Image,
  Input,
  Modal,
  Select,
  Text,
  TextInput,
  Textarea,
  Title,
  VisuallyHidden,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import slugify from 'slugify';
import { DateTimePicker, DatesProvider } from '@mantine/dates';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { fetchEvent } from '../../store/reducers/event';
import { updateEvent } from '../../store/reducers/updateEvent';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Event } from '../../@types/event';

import eventTypeData from './typeEventData';
import gamesData from './gamesData';

import './EventSettings.scss';

function getTypeEvent(param: string | number) {
  if (typeof param === 'string') {
    const eventTypeFound = eventTypeData.find((event) => event.name === param);
    return eventTypeFound ? eventTypeFound.id : 0;
  }
  const eventTypeFound = eventTypeData.find((event) => event.id === param);
  return eventTypeFound ? eventTypeFound.name : '';
}

function getGames(param: string | number) {
  if (typeof param === 'string') {
    const gameFound = gamesData.find((event) => event.name === param);
    return gameFound ? gameFound.id : 0;
  }
  const gameFound = gamesData.find((event) => event.id === param);
  return gameFound ? gameFound.name : '';
}

function EventSettings() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug');
  const typeNameData = eventTypeData.map((event) => event.name);
  const gamesNameData = gamesData.map((game) => game.name);
  const eventData = useAppSelector((state) => state.event.event);

  const form = useForm({
    initialValues: {
      ...eventData,
      type_event: '',
      game: '',
    },
  });

  useEffect(() => {
    dispatch(fetchEvent(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    form.setValues({
      id: eventData.id,
      title: eventData.title,
      description: eventData.description,
      start_date: new Date(eventData.start_date),
      end_date: new Date(eventData.end_date),
      location: eventData.location,
      banner: eventData.banner,
      thumbnail: eventData.thumbnail,
      type_event: getTypeEvent(eventData.type_event_id),
      game: getGames(eventData.game_id),
    });
  }, [eventData]);

  const handleSubmitUpdateEvent = (values: Event) => {
    const newValues = {
      ...values,
      type_event_id: getTypeEvent(values.type_event),
      game_id: getGames(values.game),
    };

    console.log(newValues);

    dispatch(updateEvent(newValues))
      .unwrap()
      .then((response) => {
        navigate(`/event/${response.title_slug}/settings`);
      })
      .catch(() => {
        console.log('error update');
      });
  };

  const [bannerModal, setBannerModalOpen] = useState(false);
  const [thumbnailModal, setThumbnailModalOpen] = useState(false);

  // Functions to toggle modal visibility
  const toggleBannerModal = () => setBannerModalOpen((prev) => !prev);
  const toggleThumbnailModal = () => setThumbnailModalOpen((prev) => !prev);

  return (
    <form
      className="content-grid full-width full-height settings-form"
      onSubmit={form.onSubmit(handleSubmitUpdateEvent)}
    >
      <div className="full-width content-grid settings_banner">
        <img
          alt="Bannière"
          className="full-width settings_banner-image"
          src={eventData.banner}
        />
        <Button className="settings_banner-button" onClick={toggleBannerModal}>
          Changer la bannière
        </Button>
        <Modal
          opened={bannerModal}
          onClose={toggleBannerModal}
          title="Changer la bannière"
          centered
          className="modal-url"
        >
          <TextInput
            type="url"
            label="URL de la bannière"
            placeholder={eventData.banner}
            {...form.getInputProps('banner')}
          />
          <Button onClick={toggleBannerModal}>
            <IoCheckmarkSharp />
          </Button>
        </Modal>
      </div>

      <div className="settings_header full-width content-grid">
        <Flex align="end" justify="space-between">
          <Box>
            <Title order={1}>Configurer son évènement</Title>
            <Text>{eventData.title}</Text>
          </Box>
          <Button variant="outline">Voir la page</Button>
        </Flex>
      </div>
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
            src={eventData.thumbnail}
          />

          <Button
            className="settings_informations-button"
            onClick={toggleThumbnailModal}
          >
            Changer l&apos;image
          </Button>
          <Modal
            opened={thumbnailModal}
            onClose={toggleThumbnailModal}
            title="Changer l'image"
            className="modal-url"
            centered
          >
            <TextInput
              type="url"
              label="URL du thumbnail"
              placeholder={eventData.thumbnail}
              {...form.getInputProps('thumbnail')}
            />
            <Button onClick={toggleThumbnailModal}>
              <IoCheckmarkSharp />
            </Button>
          </Modal>
        </Box>

        <Box className="settings_informations-inputs">
          <TextInput
            type="text"
            label="Tire de l'évènement"
            placeholder="Titre de l'évènement"
            {...form.getInputProps('title')}
          />
          <TextInput
            label="Description"
            {...form.getInputProps('description')}
          />
        </Box>
      </Fieldset>

      <Fieldset
        legend="Dates"
        variant="unstyled"
        className="fieldset-settings settings_dates"
      >
        <DatesProvider settings={{ locale: 'fr', timezone: 'CET' }}>
          <DateTimePicker
            clearable
            required
            valueFormat="DD MMMM YYYY à hh:mm"
            label="Commence le"
            placeholder="Choisir une date de début"
            minDate={new Date()}
            {...form.getInputProps('start_date')}
          />
          <DateTimePicker
            clearable
            required
            valueFormat="DD MMMM YYYY à hh:mm"
            label="Termine le"
            placeholder="Choisir une date de fin"
            minDate={new Date()}
            {...form.getInputProps('end_date')}
          />
        </DatesProvider>
      </Fieldset>

      <Fieldset
        legend="Organisation"
        variant="unstyled"
        className="fieldset-settings settings_organization"
      >
        <Autocomplete
          className="settings_games"
          label="Choisir le jeu"
          placeholder="Sélectionner le jeu sur lequel se déroule l'événement"
          data={gamesNameData}
          {...form.getInputProps('game')}
        />
        <Select
          label="Type d'événement"
          placeholder="Choisir le type d'événement"
          data={typeNameData}
          {...form.getInputProps('type_event')}
        />
        <TextInput label="Lieu" {...form.getInputProps('location')} />
      </Fieldset>

      <Fieldset
        legend="Présentation"
        className="fieldset-settings settings_presentation"
        variant="unstyled"
      >
        <Textarea label="Présentation de l'évènement" />
      </Fieldset>

      <VisuallyHidden>
        <Input type="number" {...form.getInputProps('id')} />
      </VisuallyHidden>

      <div className="settings_actions">
        <Flex align="center" justify="space-between" gap="md">
          <Button variant="outline" color="red">
            Supprimer
          </Button>
          <Flex gap="md">
            <Button type="submit">Modifier et enregistrer</Button>
            <Button color="green">Publier</Button>
          </Flex>
        </Flex>
      </div>
    </form>
  );
}

export default EventSettings;
