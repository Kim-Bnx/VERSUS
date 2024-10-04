import { useEffect, lazy, Suspense } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Box,
  Button,
  AppShell,
  Flex,
  Burger,
  Text,
  Skeleton,
} from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import SearchBar from '../SearchBar/SearchBar';
import { LocalStorage } from '../../utils/LocalStorage';
import { loggedUser } from '../../store/reducers/loggedUser';
const CreateAvatar = lazy(() => import('../Element/CreateAvatar'));
import './Header.scss';

function Header({ opened, toggle }: { opened: boolean; toggle: () => void }) {
  const dispatch = useAppDispatch();
  const isConnected = useAppSelector((state) => state.login.isConnected);
  const userData = useAppSelector((state) => state.loggedUser.data);
  const userNameValue = userData.username;
  const userAvatarValue = userData.avatar;

  useEffect(() => {
    if (isConnected) {
      const userAuth = LocalStorage.getItem('auth');

      const { userId } = userAuth.auth;
      dispatch(loggedUser(userId));
    }
  }, [dispatch, isConnected]);

  return (
    <AppShell.Header p="lg">
      <Box className="header">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        <Box className="header__actions">
          <Button
            visibleFrom="sm"
            component={Link}
            to={isConnected ? '/event/create' : '/sign-in'}
            className="button"
          >
            Organiser un event
          </Button>

          <SearchBar />
        </Box>

        {!isConnected ? (
          <Box className="header__connexion">
            <Button component={Link} to="/sign-in" className="button">
              Se connecter
            </Button>
          </Box>
        ) : (
          <NavLink to="/profile" className="header__profile">
            <Flex align="center" gap="sm">
              <Text visibleFrom="md">{userNameValue}</Text>
              <Suspense fallback={<Skeleton height={50} circle />}>
                <CreateAvatar hw="2.5rem" seed={userAvatarValue} />
              </Suspense>
            </Flex>
          </NavLink>
        )}
      </Box>
    </AppShell.Header>
  );
}

export default Header;
