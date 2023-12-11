/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, Input, TextInput, Title, VisuallyHidden } from '@mantine/core';
import { useForm } from '@mantine/form';
import slugify from 'slugify';
import { fetchEvent } from '../../store/reducers/event';
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
    initialValues: {
      id: 0,
      title: '',
    },
  });

  useEffect(() => {
    dispatch(fetchEvent(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    form.setValues({
      id: eventData.id,
      title: eventData.title,
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
          placeholder="Titre de l'évènement"
          {...form.getInputProps('title')}
        />
        <Button type="submit">Modifier</Button>
      </form>
    </>
  );
}

export default EventSettings;
