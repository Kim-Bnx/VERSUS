import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { fetchEvent } from '../../store/reducers/event';
import { LocalStorage } from '../../utils/LocalStorage';

function EventAdmin({ children }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authTest = LocalStorage.getItem('auth');
  const { userId } = authTest.auth;
  const { slug } = useParams();
  if (!slug) throw new Error('Invalid slug');

  const userData = useAppSelector((state) => state.loggedUser.data);

  useEffect(() => {
    dispatch(fetchEvent(slug))
      .unwrap()
      .then((response) => {
        console.log(userData.id);

        if (response.organizer.id !== userId) {
          navigate('/error');
        }
      });
  }, [dispatch, slug, userData]);

  return children;
}

export default EventAdmin;
