import { Accordion, Anchor, Avatar, Box, Flex, Text } from '@mantine/core';

type ItemProps = {
  item: {
    // image: string;
    name: string;
  };
};

function FavItem({ item }: ItemProps) {
  return (
    <Anchor href="/" className="favorite-item">
      <Flex gap="sm" align="center">
        <Avatar src="" alt="Favoris" size="sm" />
        <Text size="md">{item.name}</Text>
      </Flex>
    </Anchor>
  );
}

function NavBarFavorites() {
  return (
    <Box className="navbar__section">
      <Text size="xs">Favoris</Text>

      <Accordion unstyled>
        <Accordion.Item value="test">
          <Accordion.Control>Joueurs</Accordion.Control>
          <Accordion.Panel>
            <FavItem item={{ name: 'bla' }} />
            <FavItem item={{ name: 'bla' }} />
            <FavItem item={{ name: 'bla' }} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Accordion unstyled>
        <Accordion.Item value="test">
          <Accordion.Control>Evénements</Accordion.Control>
          <Accordion.Panel>
            <FavItem item={{ name: 'bla' }} />
            <FavItem item={{ name: 'bla' }} />
            <FavItem item={{ name: 'bla' }} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Accordion unstyled>
        <Accordion.Item value="test">
          <Accordion.Control>Equipes</Accordion.Control>
          <Accordion.Panel>
            <FavItem item={{ name: 'bla' }} />
            <FavItem item={{ name: 'bla' }} />
            <FavItem item={{ name: 'bla' }} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}

export default NavBarFavorites;
