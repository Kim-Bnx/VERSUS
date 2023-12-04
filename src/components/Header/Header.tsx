import { Container, Box, Button, TextInput, Anchor } from '@mantine/core';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <Container className="header-wrapper">
        <Box className="actions" visibleFrom="sm">
          <Button className="button button-new__event">
            Organiser un event
          </Button>

          <TextInput
            className="search-bar"
            placeholder="Recherche un évent, team, joueur ..."
          />
        </Box>

        <Box className="profile">
          <Anchor href="#">xXx.MasterKiller.xXx</Anchor>
        </Box>

        <Box className="connexion">
          <Button className="button button-login">Se connecter</Button>
        </Box>
      </Container>
    </header>
  );
}

export default Header;
