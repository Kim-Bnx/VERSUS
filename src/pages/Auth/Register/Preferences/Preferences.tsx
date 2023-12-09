import { Anchor, Box, Button, Flex, Grid, Group, Title } from '@mantine/core';
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
        <span>Etape 2</span>
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
            <span className="game">League Of Legend</span>
          </Grid.Col>
          <Grid.Col span="content">
            <span className="game">Super Smash Bros.</span>
          </Grid.Col>
          <Grid.Col span="content">
            <span className="game">Valorant</span>
          </Grid.Col>
          <Grid.Col span="content">
            <span className="game">Overwatch</span>
          </Grid.Col>
          <Grid.Col span="content">
            <span className="game">Minecraft</span>
          </Grid.Col>
          <Grid.Col span="content">
            <span className="game">GTA V</span>
          </Grid.Col>
          <Grid.Col span="content">
            <span className="game">Fall Guys</span>
          </Grid.Col>
          <Grid.Col span="content">
            <span className="game">Call Of Duty</span>
          </Grid.Col>
          <Grid.Col span="auto">
            <span className="game">Demineur</span>
          </Grid.Col>
        </Grid>
      </Box>

      <Box className="profile-platforms section">
        <p className="form-title">vos plateformes</p>

        <PlatformSquare />
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
