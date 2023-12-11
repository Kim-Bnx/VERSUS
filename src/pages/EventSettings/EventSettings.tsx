import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { TextInput, Title } from '@mantine/core';
import { fetchEvent } from '../../store/reducers/eventSettings';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

function EventSettings() {
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug');

  const dispatch = useAppDispatch();
  const eventData = useAppSelector((state) => state.event);

  useEffect(() => {
    dispatch(fetchEvent(slug));
  }, [dispatch, slug]);

  console.log(eventData.title);

  return (
    <>
      <Title order={1}>Configurer son évènement</Title>
      <TextInput
        required
        label="Titre de l'évènement"
        placeholder="Titre de l'évènement"
        value={eventData.title}
      />
    </>
  );
}

export default EventSettings;
