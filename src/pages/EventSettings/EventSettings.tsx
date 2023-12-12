/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Autocomplete,
  Button,
  Grid,
  Image,
  Input,
  TextInput,
  Title,
  VisuallyHidden,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import slugify from 'slugify';
import { DateTimePicker, DatesProvider } from '@mantine/dates';
import event, { fetchEvent } from '../../store/reducers/event';
import { updateEvent } from '../../store/reducers/updateEvent';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Event } from '../../@types/event';

function EventSettings() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug');
  const eventData = useAppSelector((state) => state.event.event);

  const form = useForm({
    initialValues: { ...eventData },
  });

  // console.log(new Date(eventData.start_date));

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
    });
  }, [eventData]);

  const handleSubmitUpdateEvent = (values: Event) => {
    dispatch(updateEvent(values))
      .unwrap()
      .then((response) => {
        navigate(`/event/${response.title_slug}/settings`);
      })
      .catch(() => {
        console.log('error update');
      });
  };

  return (
    <>
      <Title order={1}>Configurer son évènement</Title>
      <form onSubmit={form.onSubmit(handleSubmitUpdateEvent)}>
        <VisuallyHidden>
          <Input type="number" {...form.getInputProps('id')} />
        </VisuallyHidden>
        <TextInput
          type="text"
          label="Tire de l'évènement"
          placeholder="Titre de l'évènement"
          {...form.getInputProps('title')}
        />
        <TextInput label="Description" {...form.getInputProps('description')} />

        <Image radius="md" h={300} src={form.values.banner} />
        <TextInput
          type="url"
          label="URL de la bannière"
          placeholder={eventData.banner}
          {...form.getInputProps('banner')}
        />

        <Image
          radius="md"
          h={200}
          w={200}
          fit="cover"
          src={form.values.thumbnail}
        />
        <TextInput
          type="url"
          label="URL du thumbnail"
          placeholder={eventData.thumbnail}
          {...form.getInputProps('thumbnail')}
        />

        <Grid>
          <DatesProvider settings={{ locale: 'fr', timezone: 'CET' }}>
            <Grid.Col span={6}>
              <DateTimePicker
                clearable
                required
                valueFormat="DD MMMM YYYY à hh:mm"
                label="Commence le"
                placeholder="Choisir une date de début"
                minDate={new Date()}
                {...form.getInputProps('start_date')}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <DateTimePicker
                clearable
                required
                valueFormat="DD MMMM YYYY à hh:mm"
                label="Termine le"
                placeholder="Choisir une date de fin"
                minDate={new Date()}
                {...form.getInputProps('end_date')}
              />
            </Grid.Col>
          </DatesProvider>
        </Grid>
        <Autocomplete
          label="Choisir le jeu"
          placeholder="Sélectionner le jeu sur lequel se déroule l'événement"
          data={[
            'Smash Bros',
            'League Of Legends',
            'Minecraft',
            'Call of Duty',
          ]}
          {...form.getInputProps('game_id')}
        />
        <Autocomplete
          label="Type d'événement"
          placeholder="Choisir le type d'événement"
          data={['Tournois', 'Concours', 'Roleplay', 'Speedrun']}
          {...form.getInputProps('type_event')}
        />
        <TextInput label="Lieu" {...form.getInputProps('location')} />

        <Button type="submit">Modifier</Button>
      </form>
    </>
  );
}

export default EventSettings;
