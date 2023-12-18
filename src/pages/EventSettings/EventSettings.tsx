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
  Notification,
  Select,
  Text,
  TextInput,
  Title,
  VisuallyHidden,
  rem,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import slugify from 'slugify';
import { DateTimePicker, DatesProvider } from '@mantine/dates';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { fetchEvent } from '../../store/reducers/event';
import {
  changeTextEditorValue,
  updateEvent,
} from '../../store/reducers/updateEvent';
import { deleteEvent } from '../../store/reducers/deleteEvent';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Event } from '../../@types/event';

import eventTypeData from './typeEventData';
import gamesData from './gamesData';
import plateformData from './plateformData';

import './EventSettings.scss';
import TextEditor from '../../components/TextEditor/TextEditor';

function getItem(param: any, data: any[]) {
  if (typeof param === 'string') {
    const itemFound = data.find((item) => item.name === param);
    return itemFound ? itemFound.id : 0;
  }
  const itemFound = data.find((item) => item.id === param);
  return itemFound ? itemFound.name : '';
}

function EventSettings() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug');
  const typeNameData = eventTypeData.map((event) => event.name);
  const gamesNameData = gamesData.map((game) => game.name);
  const plateformNameData = plateformData.map((plateform) => plateform.name);
  const eventData = useAppSelector((state) => state.event.event);
  const [eventRules, setEventRules] = useState(eventData.rules);

  useEffect(() => {
    dispatch(fetchEvent(slug));
  }, [dispatch, slug]);

  const [modified, setModified] = useState(false);

  const checkIcon = (
    <IoCheckmarkSharp style={{ width: rem(20), height: rem(20) }} />
  );

  const form = useForm({
    initialValues: { ...eventData },
  });

  useEffect(() => {
    if (eventData) {
      const formattedStartDate = eventData.start_date
        ? new Date(eventData.start_date)
        : null;
      const formattedEndDate = eventData.end_date
        ? new Date(eventData.end_date)
        : null;

      form.setValues({
        id: eventData.id,
        title: eventData.title,
        description: eventData.description,
        start_date: formattedStartDate,
        end_date: formattedEndDate,
        location: eventData.location,
        banner: eventData.banner,
        thumbnail: eventData.thumbnail,
        type_event: getItem(eventData.type_event_id, eventTypeData),
        game: getItem(eventData.game_id, gamesData),
        plateform: getItem(eventData.plateform_id, plateformData),
      });
    }
    if (eventData.rules) {
      setEventRules(eventData.rules);
    }
  }, [eventData]);

  useEffect(() => {
    dispatch(changeTextEditorValue(eventRules));
  }, [eventRules]);

  const handleSubmitUpdateEvent = (values: Event) => {
    const newValues = {
      ...values,
      type_event_id: getItem(values.type_event, eventTypeData),
      game_id: getItem(values.game, gamesData),
      plateform_id: getItem(values.plateform, plateformData),
      rules: eventRules,
    };

    dispatch(updateEvent(newValues))
      .unwrap()
      .then((response) => {
        navigate(`/event/${response.title_slug}/settings`);

        setModified(true);
        setTimeout(() => {
          setModified(false);
        }, 3000);
      })
      .catch(() => {
        console.log('error update');
      });
  };

  const handleDeleteEvent = () => {
    dispatch(deleteEvent(eventData.id))
      .unwrap()
      .then(() => {
        navigate('/');
      });
  };

  const [bannerModal, setBannerModalOpen] = useState(false);
  const [thumbnailModal, setThumbnailModalOpen] = useState(false);

  // Functions to toggle modal visibility
  const toggleBannerModal = () => setBannerModalOpen((prev) => !prev);
  const toggleThumbnailModal = () => setThumbnailModalOpen((prev) => !prev);

  return (
    <>
      <form
        className="content-grid full-width full-height settings-form"
        onSubmit={form.onSubmit(handleSubmitUpdateEvent)}
      >
        <div className="full-width content-grid settings_banner">
          <img
            alt="Bannière"
            className="full-width settings_banner-image"
            src={form.values.banner}
          />
          <Button
            className="settings_banner-button"
            onClick={toggleBannerModal}
          >
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
            <Button
              component="a"
              variant="outline"
              href={`/event/${slugify(eventData.title, { lower: true })}`}
            >
              Voir la page
            </Button>
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
              src={form.values.thumbnail}
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
              placeholder="Brève description de l&pos;évènement"
              {...form.getInputProps('description')}
            />

            <TextInput
              label="Lieu"
              placeholder="En ligne ou sur place"
              {...form.getInputProps('location')}
            />
            <TextInput
              label="Contact"
              placeholder="Discord, réseaux sociaux, adresse mail..."
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
          legend="Activité"
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
            label="Plateforme"
            placeholder="Choisir la plateforme"
            data={plateformNameData}
            {...form.getInputProps('plateform')}
          />
          <Select
            label="Type d'événement"
            placeholder="Choisir le type d'événement"
            data={typeNameData}
            {...form.getInputProps('type_event')}
          />
        </Fieldset>

        <Fieldset
          legend="Présentation"
          className="fieldset-settings settings_presentation"
          variant="unstyled"
        >
          <TextEditor setEventRules={setEventRules} content={eventRules} />
        </Fieldset>

        <VisuallyHidden>
          <Input type="number" {...form.getInputProps('id')} />
        </VisuallyHidden>

        <div className="settings_actions">
          <Flex align="center" justify="space-between" gap="md">
            <Button variant="outline" color="red" onClick={handleDeleteEvent}>
              Supprimer
            </Button>
            <Flex gap="md">
              <Button type="submit">Modifier et enregistrer</Button>
              <Button color="green">Publier</Button>
            </Flex>
          </Flex>
        </div>
      </form>

      <Notification
        className={`notification_modified ${modified ? 'active' : ''}`}
        icon={checkIcon}
        color="teal"
        title="Modifications enregistrées !"
        mt="md"
      >
        L&apos;évènement a été mis à jour.
      </Notification>
    </>
  );
}

export default EventSettings;
