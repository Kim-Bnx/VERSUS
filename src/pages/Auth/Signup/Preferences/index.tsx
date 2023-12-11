import {
  Anchor,
  Text,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Title,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import PlatformSquares from '../../../../components/Element/PlatformsSquares';
import GamesLabels from '../../../../components/Element/GamesLabels';

const PLATFORMS = [
  {
    id: 0,
    name: 'PC',
  },
  {
    id: 1,
    name: 'Switch',
  },
  {
    id: 2,
    name: 'PS5',
  },
  {
    id: 3,
    name: 'XBOX',
  },
  {
    id: 4,
    name: 'Retro',
  },
];

const GAMES = [
  {
    id: 0,
    name: 'League Of Legend',
  },
  {
    id: 1,
    name: 'Super Smash Bros.',
  },
  {
    id: 2,
    name: 'Valorant',
  },
  {
    id: 3,
    name: 'Minecraft',
  },
  {
    id: 4,
    name: 'Overwatch',
  },
  {
    id: 5,
    name: 'GTA V',
  },
  {
    id: 6,
    name: 'Fall Guys',
  },
  {
    id: 7,
    name: 'Call Of Duty',
  },
  {
    id: 8,
    name: 'Demineur',
  },
];

type PreferencesProps = {
  onChangeView: (step: string) => void;
};

function Preferences({ onChangeView }: PreferencesProps) {
  return (
    <Flex align="center" justify="center" direction="column">
      <Box className="title">
        <Title order={2} size="1.5rem">
          Vos préférences
        </Title>
        <Text>Etape 2 sur 2</Text>
      </Box>

      <Box className="profile-games section">
        <Title order={2} size="1rem" className="form-title">
          vos jeux
        </Title>

        <GamesLabels data={GAMES} />
      </Box>

      <Box className="profile-platforms section">
        <Title order={2} size="1rem" className="form-title">
          vos plateformes
        </Title>

        <PlatformSquares span={3} data={PLATFORMS} />
      </Box>

      <Flex
        className="navigation section"
        align="center"
        justify="space-between"
      >
        <Anchor>Passer</Anchor>
        <Group>
          <Button
            onClick={() => onChangeView('profile')}
            leftSection={<IconChevronLeft size={14} />}
          >
            Retour
          </Button>
          <Button rightSection={<IconChevronRight size={14} />}>
            Terminer
          </Button>
        </Group>
      </Flex>
    </Flex>
  );
}

export default Preferences;
