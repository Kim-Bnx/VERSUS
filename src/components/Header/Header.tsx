import { useEffect, useState } from 'react';
import { Box, Button, Anchor, AppShell, Flex, Avatar } from '@mantine/core';
import SearchBar from '../SearchBar/SearchBar';
import { useAppSelector } from '../../hooks/redux';
import './Header.scss';

function Header() {
  const isConnected = useAppSelector((state) => state.login.isConnected);
  const loggedUser = useAppSelector((state) => state.login.auth.userId);

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(isConnected);
  }, [isConnected]);
  return (
    <AppShell.Header p="lg" className="header">
      <Flex gap="md" className="actions" visibleFrom="sm">
        <Button
          className="button button-new__event"
          component="a"
          href="/event/create"
        >
          Organiser un event
        </Button>

        <SearchBar />
      </Flex>

      {!isLogged ? (
        <Box className="connexion">
          <Button component="a" href="/sign-in" className="button button-login">
            Se connecter
          </Button>
        </Box>
      ) : (
        <Flex className="profile" align="center" gap="md">
          <Anchor href="#">userId : {loggedUser}</Anchor>
          <Avatar src="" alt="Avatar" />
        </Flex>
      )}
    </AppShell.Header>
  );
}

export default Header;
