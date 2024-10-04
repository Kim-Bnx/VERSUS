import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, TextInput, Title, Text, Flex } from '@mantine/core';
import { DateTimePicker, DatesProvider } from '@mantine/dates';
import 'dayjs/locale/fr';
import { zodResolver } from '@hookform/resolvers/zod';
import slugify from 'slugify';
import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { createEvent } from '../../../store/reducers/createEvent';
import useNotification, {
  NotificationProps,
} from '../../../components/Notification/useNotification';
import createEventSchema, {
  CreateEventSchemaType,
} from '../../../validations/createEventSchema';

function NewEvent() {
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

            <Box mb="0" className="error-message">
              {errors.title && <Text>{errors.title.message}</Text>}
            </Box>
          </Grid.Col>

          <Grid.Col span={6}>
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

            <Box mb="0" className="error-message">
              {errors.startDate && <Text>{errors.startDate.message}</Text>}
            </Box>
          </Grid.Col>

          <Grid.Col span={6}>
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

            <Box mb="0" className="error-message">
              {errors.endDate && <Text>{errors.endDate.message}</Text>}
            </Box>
          </Grid.Col>
        </Grid>

        <Flex justify="flex-end">
          <Button mt="1rem" className="button" type="submit">
            Créer l&apos;évènement
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default NewEvent;
