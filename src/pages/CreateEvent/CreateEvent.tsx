import { ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Space, TextInput, Title } from '@mantine/core';
import { DateTimePicker, DateValue, DatesProvider } from '@mantine/dates';
import 'dayjs/locale/fr';
import slugify from 'slugify';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeInputEventValue,
  changeEventDateEventValue,
  createEvent,
} from '../../store/reducers/event';

function CreateEvent() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const titleValue = useAppSelector((state) => state.event.title);
  const startDate = useAppSelector((state) => state.event.start_date);
  const endDate = useAppSelector((state) => state.event.end_date);

  const handleChangeTitleValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    dispatch(changeInputEventValue(newValue));
  };

  const handleChangeStartDateValue = (value: DateValue): void => {
    if (value) {
      const newDate = value.toISOString();

      dispatch(
        changeEventDateEventValue({ fieldDate: 'start_date', date: newDate })
      );
    }
  };

  const handleChangeEndDateValue = (value: DateValue): void => {
    if (value) {
      const newDate = value.toISOString();

      dispatch(
        changeEventDateEventValue({ fieldDate: 'end_date', date: newDate })
      );
    }
  };

  // SUBMIT FORM TO CREATE EVENT
  const handleSubmitCreateEvent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Send the data form to the createEvent reducer
    dispatch(
      createEvent({
        title: titleValue,
        start_date: startDate,
        end_date: endDate,
        status: 'draft',
      })
    )
      // Catch the asyncThunk result
      // https://redux-toolkit.js.org/api/createAsyncThunk#unwrapping-result-actions
      .unwrap()
      .then(() => {
        navigate(`/event/${slugify(titleValue)}/settings`);
      })
      .catch(() => {
        console.log('error');
      });
  };

  return (
    <>
      <Title order={1}>Créer un évènement</Title>
      <Box component="form" onSubmit={handleSubmitCreateEvent}>
        <Grid>
          <Grid.Col span={12}>
            <TextInput
              required
              name="title"
              label="Titre de l'évènement"
              placeholder="Titre de l'évènement"
              value={titleValue}
              onChange={handleChangeTitleValue}
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
                onChange={handleChangeStartDateValue}
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
                onChange={handleChangeEndDateValue}
              />
            </Grid.Col>
          </DatesProvider>
        </Grid>
        <Space h="lg" />
        <Button type="submit">Créer l&apos;évènement</Button>
      </Box>
    </>
  );
}

export default CreateEvent;
