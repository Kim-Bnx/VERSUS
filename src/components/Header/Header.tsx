import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box, Button, AppShell, Flex, Burger, Text } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import SearchBar from '../SearchBar/SearchBar';

import './Header.scss';
import { LocalStorage } from '../../utils/LocalStorage';
import { loggedUser } from '../../store/reducers/loggedUser';
import CreateAvatar from '../Element/CreateAvatar';

function Header({ opened, toggle }: { opened: boolean; toggle: () => void }) {
  // const [opened, { toggle }] = useDisclosure();
  const dispatch = useAppDispatch();
  const isConnected = useAppSelector((state) => state.login.isConnected);
  const userData = useAppSelector((state) => state.loggedUser.data);
  const userNameValue = userData.username;
  const useAvatarValue = userData.avatar;

  useEffect(() => {
    if (isConnected) {
      const userAuth = LocalStorage.getItem('auth');

      const { userId } = userAuth.auth;
      dispatch(loggedUser(userId));
    }
  }, [dispatch, isConnected]);

  return (
    <AppShell.Header p="lg">
      <div className="header">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        <div className="header__actions">
          <Button
            visibleFrom="sm"
            component={Link}
            to={isConnected ? '/event/create' : '/sign-in'}
            className="button"
          >
            Organiser un event
          </Button>

          <SearchBar />
        </div>

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
              <CreateAvatar hw="2.5rem" seed={useAvatarValue} />
            </Flex>
          </NavLink>
        )}
      </div>
    </AppShell.Header>
  );
}

export default Header;
