import { Box, Button, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NavBarGuest() {
  const [randomCatchLines, setRandomCatchLines] = useState('');

  useEffect(() => {
    const catchlines = [
      'Et montrez au monde que ce n\u2019est pas le nombre de kills qui compte',
      'Et prouvez que vous êtes le seul au monde à avoir environ 150 cs en 6 minutes',
      'Et faîtes vivre votre communauté en rassemblant des joueurs',
      'Et impressionnez vos amies en grabbant à la frame',
      'Et démontrez au monde que PacMan est la meilleur pick',
    ];

    const getRandomIndex = () => Math.floor(Math.random() * catchlines.length);

    setRandomCatchLines(catchlines[getRandomIndex()]);
  }, []);

  return (
    <Box className="navbar__register">
      <Text size="xl" fw={800}>
        Rejoignez Versus
      </Text>
      <Text size="sm" className="catchlines">
        {randomCatchLines} !
      </Text>

      <Button component={Link} to="/sign-up" className="button">
        S&apos;inscrire
      </Button>
    </Box>
  );
}

export default NavBarGuest;
