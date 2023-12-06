import { useState } from 'react';
import { Box, Button, Anchor, AppShell, Flex, Avatar } from '@mantine/core';
import SearchBar from '../SearchBar/SearchBar';
import { useAppSelector } from '../../hooks/redux';
import './Header.scss';

// AUTHENTIFICATION STATUS
// Render profile if user is log, else CTA connexion
function Authentification() {
  const [isLogged, setState] = useState(true);
  const userEmail = useAppSelector((state) => state.login.credentials.email);

  if (isLogged) {
    return (
      <Flex className="profile" align="center" gap="md">
        <Anchor href="#">{userEmail}</Anchor>
        <Avatar src="" alt="Avatar" />
      </Flex>
    );
  }
  return (
    <Box className="connexion">
      <Button className="button button-login">Se connecter</Button>
    </Box>
  );
}

function Header() {
  return (
    <AppShell.Header p="lg" className="header">
      <Flex gap="md" className="actions" visibleFrom="sm">
        <Button className="button button-new__event">Organiser un event</Button>

        <SearchBar />
      </Flex>

      <Authentification />
    </AppShell.Header>
  );
}

export default Header;
