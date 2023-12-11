/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo } from 'react';
import { TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { fetchEvent } from '../../store/reducers/eventSettings';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

function EventSettings() {
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug');
  const eventData = useAppSelector((state) => state.event.event);

  const form = useForm({
    initialValues: {
      title: '',
    },
  });

  useEffect(() => {
    dispatch(fetchEvent(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    form.setValues({
      title: eventData.title,
    });
  }, [eventData]);

  return (
    <>
      <Title order={1}>Configurer son évènement</Title>
      <form>
        <TextInput
          type="text"
          placeholder="Titre de l'évènement"
          {...form.getInputProps('title')}
        />
        <p>{eventData.title}</p>
      </form>
    </>
  );
}

export default EventSettings;
