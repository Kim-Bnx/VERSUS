import { useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  Box,
  Button,
  Anchor,
  AppShell,
  Flex,
  Avatar,
  Burger,
  Text,
} from '@mantine/core';
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
            className="button header__actions-event"
            component="a"
            href={isConnected ? '/event/create' : '/sign-in'}
          >
            Organiser un event
          </Button>

          <SearchBar />
        </div>

        {!isConnected ? (
          <Box className="header__connexion">
            <Button
              component="a"
              href="/sign-in"
              className="button button-login"
            >
              Se connecter
            </Button>
          </Box>
        ) : (
          <Anchor href="/profile" className="header__profile">
            <Flex align="center" gap="sm">
              <Text visibleFrom="md">{userNameValue}</Text>
              <CreateAvatar hw="2.5rem" seed={useAvatarValue} />
            </Flex>
          </Anchor>
        )}
      </div>
    </AppShell.Header>
  );
}

export default Header;
