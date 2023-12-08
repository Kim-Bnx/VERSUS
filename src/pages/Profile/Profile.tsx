import {
  Avatar,
  Box,
  Flex,
  Title,
  Text,
  Grid,
  SimpleGrid,
  Container,
} from '@mantine/core';
import './Profile.scss';

function Profile() {
  return (
    <Box className="wrapper">
      <Title order={2}>Votre profil</Title>
      <Title className="title" order={3}>
        Votre compte
      </Title>

      <Flex className="section" align="center" bg="rgb(29 31 35)">
        <Flex justify="center" className="wrapper-left">
          <Avatar />
        </Flex>
        <Box className="wrapper-right">
          <Text>Machin Truc</Text>
          <Text>mmboudot@gmail.com</Text>
        </Box>
      </Flex>

      <Flex className="section" align="center" bg="rgb(29 31 35)">
        <Flex justify="center" className="wrapper-left">
          <Avatar />
        </Flex>
        <Box className="wrapper-right">
          <Text>Mot de passe</Text>
          <Text>********</Text>
        </Box>
      </Flex>

      <Title className="title" order={3}>
        Vos préférences
      </Title>

      <Box className="section" bg="rgb(29 31 35)">
        <Title className="section-title" order={4}>
          Mes jeux
        </Title>
        <SimpleGrid cols={6}>
          <Box>test</Box>
          <Box>test</Box>
          <Box>test</Box>
          <Box>test</Box>
          <Box>test</Box>
          <Box>test</Box>
        </SimpleGrid>
      </Box>

      <Box className="section" w="100%" bg="rgb(29 31 35)">
        <Title className="section-title" order={4}>
          Mes plateformes
        </Title>
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
    </Box>
  );
}

export default Profile;
