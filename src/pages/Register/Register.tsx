import {
  Anchor,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Input,
  Title,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

import '@mantine/core/styles.css';
import './Register.scss';

function Register() {
  return (
    <Flex justify="space-between" className="page page-register">
      <Flex
        align="center"
        justify="center"
        direction="column"
        className="register-profile register-section"
      >
        <Title size="1.5rem" className="register__title">
          Configuration de votre profil
        </Title>

        <span>Etape 1 sur 2</span>

        <Input.Wrapper
          className="profile-input section"
          label="Pseudo"
          error="DEFAULT ERROR AREA"
        >
          <Input placeholder="pseudonyme" />
        </Input.Wrapper>

        <Flex className="profile-avatar section">
          <Box className="avatar-selected">
            <p className="subtitle">Avatar</p>
            <div className="circle" />
          </Box>

          <div className="avatar-selection">
            <p className="subtitle">Importer une image ou choisis</p>
            <Grid gutter={{ base: 0, xs: 'md', md: 10, xl: 10 }}>
              <Grid.Col span={4}>
                <div className="circle" />
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="circle" />
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="circle" />
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="circle" />
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="circle" />
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="circle" />
              </Grid.Col>
            </Grid>
          </div>
        </Flex>

        <Flex
          className="navigation section"
          align="center"
          justify="space-between"
        >
          <Anchor>Passer</Anchor>
          <Group>
            <Button leftSection={<IconChevronLeft size={14} />}>Retour</Button>
            <Button rightSection={<IconChevronRight size={14} />}>
              Suivant
            </Button>
          </Group>
        </Flex>
      </Flex>

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
            <Button rightSection={<IconChevronRight size={14} />}>
              Suivant
            </Button>
          </Group>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Register;
