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
import PlatformSquare from '../../../../components/Element/PlatformSquare';

function Preferences() {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      className="right-content"
    >
      <Box className="title">
        <Title size="1.5rem">Vos préférences</Title>
        <Text>Etape 2</Text>
      </Box>

      <Box className="profile-games section">
        <p className="form-title">vos jeux</p>

        <Grid
          className="games"
          gutter={10}
          grow
          justify="space-around"
          align="space-between"
        >
          <Grid.Col span="content">
            <Text className="game">League Of Legend</Text>
          </Grid.Col>
          <Grid.Col span="content">
            <Text className="game">Super Smash Bros.</Text>
          </Grid.Col>
          <Grid.Col span="content">
            <Text className="game">Valorant</Text>
          </Grid.Col>
          <Grid.Col span="content">
            <Text className="game">Overwatch</Text>
          </Grid.Col>
          <Grid.Col span="content">
            <Text className="game">Minecraft</Text>
          </Grid.Col>
          <Grid.Col span="content">
            <Text className="game">GTA V</Text>
          </Grid.Col>
          <Grid.Col span="content">
            <Text className="game">Fall Guys</Text>
          </Grid.Col>
          <Grid.Col span="content">
            <Text className="game">Call Of Duty</Text>
          </Grid.Col>
          <Grid.Col span="auto">
            <Text className="game">Demineur</Text>
          </Grid.Col>
        </Grid>
      </Box>

      <Box className="profile-platforms section">
        <p className="form-title">vos plateformes</p>

        <PlatformSquare span={3} />
      </Box>

      <Flex
        className="navigation section"
        align="center"
        justify="space-between"
      >
        <Anchor>Passer</Anchor>
        <Group>
          <Button leftSection={<IconChevronLeft size={14} />}>Retour</Button>
          <Button rightSection={<IconChevronRight size={14} />}>Suivant</Button>
        </Group>
      </Flex>
    </Flex>
  );
}

export default Preferences;
