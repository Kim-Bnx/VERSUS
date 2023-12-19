import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { fetchEvent } from '../../store/reducers/event';

function EventAdmin({ children }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug');

  const eventData = useAppSelector((state) => state.event.event);
  const userData = useAppSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(fetchEvent(slug))
      .unwrap()
      .catch(() => {
        navigate('/error');
      });
  }, [dispatch, slug]);

  useEffect(() => {
    if (eventData.organizer.id !== userData.id) {
      navigate('/error');
    }
  }, [eventData]);

  return children;
}

export default EventAdmin;
