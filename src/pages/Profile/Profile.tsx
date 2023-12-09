import { Avatar, Box, Flex, Title, Text, Grid, GridCol } from '@mantine/core';
import { IconKey } from '@tabler/icons-react';
import PlatformSquare from '../../components/Element/PlatformSquare';

import './Profile.scss';

function Profile() {
  return (
    <Box className="wrapper">
      <Title size="2rem" order={2}>
        Votre profil
      </Title>

      <Box mt="2rem">
        <Title className="title" order={3}>
          Votre compte
        </Title>

        <Flex className="section" align="center">
          <Flex justify="center" className="wrapper-left">
            <Avatar size="xl" />
          </Flex>

          <Box className="wrapper-right" c="white">
            <Text mb="0.2rem" size="1.2rem" fw="bold">
              Machin Truc
            </Text>
            <Text>mmboudot@gmail.com</Text>
          </Box>
        </Flex>

        <Flex className="section" align="center">
          <Flex justify="center" className="wrapper-left">
            <IconKey className="bg-icon" color="#2d3037" />
          </Flex>

          <Box className="wrapper-right">
            <Text
              size="0.8rem"
              tt="uppercase"
              c="rgb(74 79 93)"
              mb="0.2rem"
              lts="0.02rem"
            >
              Mot de passe
            </Text>
            <Text lts="0.2rem" c="white">
              ********
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box mt="4rem">
        <Title className="title" order={3}>
          Vos préférences
        </Title>

        <Box className="section section-full">
          <Title className="section-title" order={4}>
            Mes plateformes
          </Title>

          <PlatformSquare span={2} />
        </Box>

        <Box className="section section-full">
          <Title className="section-title" order={4}>
            Mes jeux
          </Title>

          <Grid gutter={15}>
            <GridCol span="content">
              <Box className="game">testtesttesttesttest</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">testtest</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">test</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">testtesttest</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">testtest</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">testtesttest</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">testtest</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">test</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">testtest</Box>
            </GridCol>
            <GridCol span="content">
              <Box className="game">testtest</Box>
            </GridCol>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
