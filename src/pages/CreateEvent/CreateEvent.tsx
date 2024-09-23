import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  Space,
  TextInput,
  Title,
  Text,
} from '@mantine/core';
import { DateTimePicker, DatesProvider } from '@mantine/dates';
import 'dayjs/locale/fr';
import { zodResolver } from '@hookform/resolvers/zod';
import slugify from 'slugify';
import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createEvent } from '../../store/reducers/createEvent';
import useNotification, {
  NotificationProps,
} from '../../components/Notification/useNotification';
import createEventSchema, {
  CreateEventSchemaType,
} from '../../validations/createEventSchema';

function CreateEvent() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showNotification } = useNotification();
  const userId = useAppSelector((state) => state.loggedUser.data.id);
  const successMsg = useAppSelector((state) => state.resetPassword.success);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEventSchemaType>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      title: '',
      startDate: undefined,
      endDate: undefined,
    },
  });

  const onSubmit = (data: CreateEventSchemaType) => {
    const eventData = {
      title: data.title,
      start_date: data.startDate.toISOString(),
      end_date: data.endDate.toISOString(),
      user_id: userId,
    };
    dispatch(createEvent(eventData))
      .unwrap()
      .then(() => {
        navigate(`/event/${slugify(data.title, { lower: true })}/settings`);
      });
  };

  useEffect(() => {
    if (successMsg) {
      const notificationProps: NotificationProps = {
        title: `L'événement a été crée avec succés !`,
        message: `Il vient d'être ajouté à vos événements brouillon.`,
        type: 'success',
      };

      showNotification(notificationProps);
    }
  }, [successMsg, showNotification]);

  return (
    <>
      <Title order={2}>Créer un évènement</Title>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Grid.Col span={12}>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Titre de l'évènement"
                  placeholder="Titre de l'évènement"
                  className={`${errors.title ? 'input-error' : ''}`}
                />
              )}
            />

            <Box className="error-message">
              {errors.title && <Text>{errors.title.message}</Text>}
            </Box>
          </Grid.Col>

          <DatesProvider settings={{ locale: 'fr', timezone: 'CET' }}>
            <Grid.Col span={6}>
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <DateTimePicker
                    {...field}
                    clearable
                    valueFormat="DD MMMM YYYY à hh:mm"
                    label="Date de début"
                    placeholder="Choisir une date de début"
                    minDate={new Date()}
                    className={`${errors.startDate ? 'input-error' : ''}`}
                  />
                )}
              />

              <Box className="error-message ">
                {errors.startDate && <Text>{errors.startDate.message}</Text>}
              </Box>
            </Grid.Col>

            <Grid.Col span={6}>
              <Controller
                name="endDate"
                control={control}
                render={({ field }) => (
                  <DateTimePicker
                    {...field}
                    clearable
                    valueFormat="DD MMMM YYYY à hh:mm"
                    label="Date de fin"
                    placeholder="Choisir une date de fin"
                    minDate={new Date()}
                    className={`${errors.endDate ? 'input-error' : ''}`}
                  />
                )}
              />

              <Box className="error-message last-error-box">
                {errors.endDate && <Text>{errors.endDate.message}</Text>}
              </Box>
            </Grid.Col>
          </DatesProvider>
        </Grid>

        <Space h="lg" />
        <Button className="button" type="submit">
          Créer l&apos;évènement
        </Button>
      </Box>
    </>
  );
}

export default CreateEvent;
