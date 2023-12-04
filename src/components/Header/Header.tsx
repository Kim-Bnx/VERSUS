import { useState } from 'react';
import { Box, Button, Anchor, AppShell, Flex, Avatar } from '@mantine/core';
import SearchBar from '../SearchBar/SearchBar';

import './Header.scss';

// AUTHENTIFICATION STATUS
// Render profile if user is log, else CTA connexion
function Authentification() {
  const [isLog, setState] = useState(true);

  if (isLog) {
    return (
      <Flex className="profile" align="center" gap="md">
        <Anchor href="#">xXx.MasterKiller.xXx</Anchor>
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
