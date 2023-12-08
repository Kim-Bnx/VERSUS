import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchEvent } from '../../store/reducers/eventSettings';

function EventSettings() {
  const { slug } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEvent(slug));
  }, [dispatch]);

  const eventTitle = useAppSelector((state) => state.event.title);

  return <div>{eventTitle}</div>;
}

export default EventSettings;
