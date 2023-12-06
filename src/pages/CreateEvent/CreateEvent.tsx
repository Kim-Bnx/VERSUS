import { Box, Button, Grid, TextInput, Title } from '@mantine/core';
import { DateTimePicker, DateValue, DatesProvider } from '@mantine/dates';

import '@mantine/dates/styles.css';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeInputEventValue,
  changeEventDateEventValue,
} from '../../store/reducers/event';

function CreateEvent() {
  const dispatch = useAppDispatch();
  const titleValue = useAppSelector((state) => state.event.title);
  const { startDate, endDate } = useAppSelector(
    (state) => state.event.schedule
  );

  const handleChangeTitleValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    dispatch(changeInputEventValue(newValue));
  };

  const handleChangeDateValue = (value: DateValue): void => {
    const newDate = value.toJSON();
    console.log(newDate);

    dispatch(
      changeEventDateEventValue({ fieldDate: 'startDate', date: newDate })
    );
  };

  return (
    <>
      <Title order={1}>Créer un évènement</Title>
      <Box component="form">
        <TextInput
          name="title"
          label="Titre de l'évènement"
          placeholder="Titre de l'évènement"
          value={titleValue}
          onChange={handleChangeTitleValue}
        />

        <Grid>
          <Grid.Col span={6}>
            <DateTimePicker
              clearable
              name="startDate"
              valueFormat="DD MMMM YYYY à hh:mm"
              label="Commence le"
              placeholder="Choisir une date de début"
              minDate={new Date()}
              date={startDate}
              onChange={handleChangeDateValue}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <DateTimePicker
              clearable
              name="endDate"
              valueFormat="DD MMMM YYYY hh:mm A"
              label="Termine le"
              placeholder="Choisir une date de fin"
              minDate={new Date()}
              date={endDate}
              onDateChange={handleChangeDateValue}
            />
          </Grid.Col>
        </Grid>

        <Button>Créer l&apos;évènement</Button>
      </Box>
    </>
  );
}

export default CreateEvent;
