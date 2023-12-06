import { Box, Button, Grid, TextInput, Title } from '@mantine/core';
import { DateTimePicker, DateValue, DatesProvider } from '@mantine/dates';
import 'dayjs/locale/fr';
import '@mantine/dates/styles.css';
import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeInputEventValue,
  changeEventDateEventValue,
  createEvent,
} from '../../store/reducers/event';

function CreateEvent() {
  const dispatch = useAppDispatch();
  const titleValue = useAppSelector((state) => state.event.title);
  const startDate = useAppSelector((state) => state.event.start_date);
  const endDate = useAppSelector((state) => state.event.end_date);

  // ! TYPESCRIPT FIX FOR THE DATEINPUT PROP
  // const startDateValue = new Date(startDate);
  // const endDateValue = new Date(endDate);

  const handleChangeTitleValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    dispatch(changeInputEventValue(newValue));
  };

  const handleChangeStartDateValue = (value: DateValue): void => {
    const newDate = value.toISOString();
    dispatch(
      changeEventDateEventValue({ fieldDate: 'start_date', date: newDate })
    );
  };

  const handleChangeEndDateValue = (value: DateValue): void => {
    const newDate = value.toISOString();
    dispatch(
      changeEventDateEventValue({ fieldDate: 'end_date', date: newDate })
    );
  };

  const handleSubmitCreateEvent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      createEvent({
        title: titleValue,
        start_date: startDate,
        end_date: endDate,
      })
    );
  };

  return (
    <>
      <Title order={1}>Créer un évènement</Title>
      <Box component="form" onSubmit={handleSubmitCreateEvent}>
        <TextInput
          required
          name="title"
          label="Titre de l'évènement"
          placeholder="Titre de l'évènement"
          value={titleValue}
          onChange={handleChangeTitleValue}
        />

        <Grid>
          <Grid.Col span={6}>
            <DatesProvider settings={{ locale: 'fr', timezone: 'CET' }}>
              <DateTimePicker
                clearable
                required
                valueFormat="DD MMMM YYYY à hh:mm"
                label="Commence le"
                placeholder="Choisir une date de début"
                minDate={new Date()}
                onChange={handleChangeStartDateValue}
              />
            </DatesProvider>
          </Grid.Col>
          <Grid.Col span={6}>
            <DateTimePicker
              clearable
              required
              valueFormat="DD MMMM YYYY à hh:mm"
              label="Termine le"
              placeholder="Choisir une date de fin"
              minDate={new Date()}
              onDateChange={handleChangeEndDateValue}
            />
          </Grid.Col>
        </Grid>

        <Button type="submit">Créer l&apos;évènement</Button>
      </Box>
    </>
  );
}

export default CreateEvent;
