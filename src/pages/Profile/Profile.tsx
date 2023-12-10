import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  Avatar,
  Box,
  Flex,
  Title,
  Text,
  FileButton,
  Button,
  TextInput,
  PasswordInput,
  Stack,
} from '@mantine/core';
import { IconKey, IconSettingsFilled, IconUpload } from '@tabler/icons-react';
import PlatformSquare from '../../components/Element/PlatformsSquares';
import GamesLabels from '../../components/Element/GamesLabels';

import './Profile.scss';

const GAMES = [
  {
    id: 0,
    name: 'test',
  },
  {
    id: 1,
    name: 'testtest',
  },
  {
    id: 2,
    name: 'testtesttest',
  },
  {
    id: 3,
    name: 'testtest',
  },
  {
    id: 4,
    name: 'testtesttesttest',
  },
  {
    id: 5,
    name: 'testtesttesttesttesttest',
  },
  {
    id: 6,
    name: 'testtesttest',
  },
  {
    id: 7,
    name: 'testtesttesttest',
  },
];

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

type ProfileProps = {
  avatar: string;
  email: string;
  pseudo: string;
  platforms: { id: number; name: string }[];
  games: { id: number; name: string }[];
};

function Profile({ avatar, pseudo, email, games, platforms }: ProfileProps) {
  const [toggleEditProfile, seTtoggleEditProfile] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [visible, { toggle }] = useDisclosure(false);

  const handleEditProfile = () => {
    seTtoggleEditProfile(!toggleEditProfile);
  };

  return (
    <Box className="wrapper">
      <Flex justify="space-between" align="center">
        <Title size="2rem" order={2}>
          {toggleEditProfile ? 'Modifier votre profil' : 'Votre Profil'}
        </Title>

        <Flex justify="space-between" align="center">
          <Button mr="1rem" onClick={handleEditProfile}>
            <IconSettingsFilled />
          </Button>
        </Flex>
      </Flex>

      <Box mt="2rem">
        <Title className="title" order={3}>
          Votre compte
        </Title>

        <Flex className="section" align="center">
          <Flex justify="center" className="wrapper-left">
            {file && toggleEditProfile && (
              <Text
                unstyled
                className="file_name"
                size="sm"
                ta="center"
                mt="sm"
              >
                {file.name}
              </Text>
            )}
            {!toggleEditProfile ? (
              <Avatar
                size="xl"
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
              />
            ) : (
              <Box className="upload">
                <Button className="upload-button">
                  <FileButton onChange={setFile} accept="image/png,image/jpeg">
                    {(props) => <IconUpload {...props} />}
                  </FileButton>
                </Button>
                <Avatar size="xl" />
              </Box>
            )}
          </Flex>

          <Box className="wrapper-right" c="white">
            <Text className="input-label">pseudonyme</Text>
            {!toggleEditProfile ? (
              <Text fw="bold">Machin Truc</Text>
            ) : (
              <TextInput
                mb="1rem"
                maw="30rem"
                value={pseudo}
                aria-label="pseudo"
                placeholder="Machin Truc"
              />
            )}
            <Text mt="1.5rem" className="input-label">
              adresse email
            </Text>
            <Text>mmboudot@gmail.com</Text>
          </Box>
        </Flex>

        <Flex className="section" align="center">
          <Flex justify="center" className="wrapper-left">
            <IconKey className="bg-icon" color="#2d3037" />
          </Flex>

          <Box className="wrapper-right">
            <Text className="input-label">Mot de passe</Text>
            {!toggleEditProfile ? (
              <Text lts="0.2rem" c="white">
                ********
              </Text>
            ) : (
              <Stack>
                <PasswordInput
                  mb="1rem"
                  maw="30rem"
                  aria-label="password"
                  placeholder="Mot de passe"
                  defaultValue="********"
                  visible={visible}
                  onVisibilityChange={toggle}
                />
                <Text mt="1.5rem" className="input-label">
                  confirmation de mot de passe
                </Text>
                <PasswordInput
                  mb="1rem"
                  maw="30rem"
                  aria-label="password-confirmation"
                  placeholder="Confirmation du mot de passe"
                  defaultValue="********"
                  visible={visible}
                  onVisibilityChange={toggle}
                />
              </Stack>
            )}
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

          <PlatformSquare span={2} data={PLATFORMS} />
        </Box>

        <Box className="section section-full">
          <Title className="section-title" order={4}>
            Mes jeux
          </Title>

          <GamesLabels data={GAMES} />
        </Box>

        {toggleEditProfile && (
          <Flex w="100%" mt="5rem" justify="flex-end" align="center">
            <Button bg="green" onClick={handleEditProfile}>
              Valider les modifications
            </Button>
          </Flex>
        )}
      </Box>
    </Box>
  );
}

export default Profile;
