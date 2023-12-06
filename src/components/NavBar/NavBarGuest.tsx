import { Box, Button, Text } from '@mantine/core';

function NavBarGuest() {
  return (
    <Box className="navbar__register">
      <Text size="lg">Rejoignez Versus</Text>
      <Text size="sm">
        Faîtes vivre vos communautés en rassemblant des joueurs.
      </Text>

      <Button component="a" href="/register">
        S&apos;inscrire
      </Button>
    </Box>
  );
}

export default NavBarGuest;