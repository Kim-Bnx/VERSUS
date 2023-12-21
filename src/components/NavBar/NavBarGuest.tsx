import { Box, Button, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

function NavBarGuest() {
  return (
    <Box className="navbar__register">
      <Text size="lg" fw={700}>
        Rejoignez Versus
      </Text>
      <Text size="sm">
        Faîtes vivre vos communautés en rassemblant des joueurs.
      </Text>

      <Button component={Link} to="/sign-up">
        S&apos;inscrire
      </Button>
    </Box>
  );
}

export default NavBarGuest;
