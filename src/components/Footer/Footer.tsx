import { Anchor, Box, Flex, Text, Title } from '@mantine/core';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer full-width content-grid">
      <Flex justify="space-between" align="end">
        <Box className="footer__versus">
          <Title order={1}>Versus</Title>
          <Text size="md">
            Faîtes vivre vos communautés en rassemblant les joueurs en un seul
            endroit.
          </Text>
        </Box>

        <Flex gap="md">
          <Anchor href="/about">A propos</Anchor>
          <Anchor href="/contact">Contact</Anchor>
          <Anchor href="/terms">Mention légales</Anchor>
        </Flex>
      </Flex>
    </div>
  );
}

export default Footer;
