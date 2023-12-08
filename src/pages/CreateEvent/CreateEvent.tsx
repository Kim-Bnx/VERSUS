import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Grid,
  Input,
  Space,
  TextInput,
  Title,
  VisuallyHidden,
} from '@mantine/core';
import { TransformedValues, useForm } from '@mantine/form';
import { DateTimePicker, DatesProvider } from '@mantine/dates';
import 'dayjs/locale/fr';
import slugify from 'slugify';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeInputEventValue, createEvent } from '../../store/reducers/event';

function CreateEvent() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: {
      title: useAppSelector((state) => state.event.title),
      start_date: useAppSelector((state) => state.event.start_date),
      end_date: useAppSelector((state) => state.event.end_date),
      user_id: 1,
    },
    transformValues: (values) => ({
      ...values,
      start_date: values.start_date.toString(),
      end_date: values.end_date.toString(),
    }),
  });

  useEffect(() => {
    dispatch(
      changeInputEventValue({ fieldName: 'title', value: form.values.title })
    );
  }, [dispatch, form.values.title]);

  useEffect(() => {
    const startDate = form.values.start_date.toString();
    dispatch(
      changeInputEventValue({
        fieldName: 'start_date',
        value: startDate,
      })
    );
  }, [dispatch, form.values.start_date]);

  useEffect(() => {
    const endDate = form.values.end_date.toString();
    dispatch(
      changeInputEventValue({
        fieldName: 'end_date',
        value: endDate,
      })
    );
  }, [dispatch, form.values.end_date]);

  // SUBMIT FORM TO CREATE EVENT

  const handleSubmitCreateEvent = (values: TransformedValues<typeof form>) => {
    dispatch(createEvent(values))
      // Catch the asyncThunk result
      // https://redux-toolkit.js.org/api/createAsyncThunk#unwrapping-result-actions
      .unwrap()
      .then(() => {
        navigate(`/event/${slugify(values.title, { lower: true })}/settings`);
      })
      .catch(() => {
        console.log('error');
      });
  };

  return (
    <>
      <Title order={1}>Créer un évènement</Title>
      <form onSubmit={form.onSubmit(handleSubmitCreateEvent)}>
        <Grid>
          <Grid.Col span={12}>
            <TextInput
              required
              label="Titre de l'évènement"
              placeholder="Titre de l'évènement"
              {...form.getInputProps('title')}
            />
          </Grid.Col>
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
          <VisuallyHidden>
            <Grid.Col span={12}>
              <Input type="number" {...form.getInputProps('end_date')} />
            </Grid.Col>
          </VisuallyHidden>
        </Grid>

        <Space h="lg" />
        <Button type="submit">Créer l&apos;évènement</Button>
      </form>
    </>
  );
}

export default CreateEvent;
