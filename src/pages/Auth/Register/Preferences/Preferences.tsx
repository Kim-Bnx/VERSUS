import { Anchor, Box, Button, Flex, Grid, Group, Title } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

function Preferences() {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      className="register-preferences register-section"
    >
      <Title size="1.5rem" className="register__title">
        Vos préférences
      </Title>

      <span>Etape 2</span>

      <Box className="profile-games section">
        <p className="subtitle">vos jeux</p>

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
        <p className="subtitle">vos plateformes</p>

        <Grid gutter={15} className="platforms">
          <Grid.Col span={3}>
            <div className="platform">PC</div>
          </Grid.Col>
          <Grid.Col span={3}>
            <div className="platform">Switch</div>
          </Grid.Col>
          <Grid.Col span={3}>
            <div className="platform">PS5</div>
          </Grid.Col>
          <Grid.Col span={3}>
            <div className="platform">XBOX</div>
          </Grid.Col>
          <Grid.Col span={3}>
            <div className="platform">RETRO</div>
          </Grid.Col>
        </Grid>
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
