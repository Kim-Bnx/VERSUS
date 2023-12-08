import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Autocomplete, Grid, TextInput, Title } from '@mantine/core';
import { DateTimePicker, DatesProvider } from '@mantine/dates';
import 'dayjs/locale/fr';
import { useForm } from '@mantine/form';
import { fetchEvent } from '../../store/reducers/eventSettings';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

function EventSettings() {
  const { slug } = useParams();
  const dispatch = useAppDispatch();

  dispatch(fetchEvent(slug));

  const form = useForm({
    initialValues: {
      title: useAppSelector((state) => state.event.title),
      description: useAppSelector((state) => state.event.description),
      start_date: useAppSelector((state) => state.event.start_date),
      end_date: useAppSelector((state) => state.event.end_date),
      game_id: useAppSelector((state) => state.event.game_id),
      type_event: useAppSelector((state) => state.event.type_event),
      location: useAppSelector((state) => state.event.location),
    },
    transformValues: (values) => ({
      ...values,
      start_date: values.start_date.toString(),
      end_date: values.end_date.toString(),
    }),
  });

  return (
    <>
      <Title order={1}>Configurer son évènement</Title>
      <form>
        <TextInput
          required
          label="Titre de l'évènement"
          placeholder="Titre de l'évènement"
          {...form.getInputProps('title')}
        />
        <TextInput label="Description" {...form.getInputProps('description')} />
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
      </form>
    </>
  );
}

export default EventSettings;
