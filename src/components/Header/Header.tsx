import { useEffect } from 'react';
import { Box, Button, Anchor, AppShell, Flex, Avatar } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import SearchBar from '../SearchBar/SearchBar';

import './Header.scss';
import { LocalStorage } from '../../utils/LocalStorage';
import { loggedUser } from '../../store/reducers/loggedUser';
import CreateAvatar from '../Element/CreateAvatar';

function Header() {
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
    <AppShell.Header p="lg" className="header">
      <Flex gap="md" className="actions" visibleFrom="sm">
        <Button
          className="button button-new__event"
          component="a"
          href={isConnected ? '/event/create' : '/sign-in'}
        >
          Organiser un event
        </Button>

        <SearchBar />
      </Flex>

      {!isConnected ? (
        <Box className="connexion">
          <Button component="a" href="/sign-in" className="button button-login">
            Se connecter
          </Button>
        </Box>
      ) : (
        <Flex className="profile" align="center" gap="md">
          <Anchor href="/profile">{userNameValue}</Anchor>
          <CreateAvatar hw="2.5rem" seed={useAvatarValue} />
        </Flex>
      )}
    </AppShell.Header>
  );
}

export default Header;
