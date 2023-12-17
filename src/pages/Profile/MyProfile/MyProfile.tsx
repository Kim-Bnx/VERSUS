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
import { useCallback, useEffect, useState } from 'react';
import { IconKey, IconSettingsFilled, IconUpload } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { user } from '../../../store/reducers/user';
import PlatformSquare from '../../../components/Element/PlatformsSquares';
import GamesLabels from '../../../components/Element/GamesLabels';
import CreateAvatar from '../../../components/Element/CreateAvatar';
import { LocalStorage } from '../../../utils/LocalStorage';

import '../Profile.scss';

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

type SelectedItems = { [key: number]: boolean };

function MyProfile() {
  const dispatch = useAppDispatch();
  const isConnected = useAppSelector((state) => state.login.isConnected);
  const userData = useAppSelector((state) => state.user.data);
  const [toggleEditProfile, setToggleEditProfile] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [visible, { toggle }] = useDisclosure(false);
  const [selectedGames, setSelectedGames] = useState<{
    [key: number]: boolean;
  }>({});
  const [selectedPlatforms, setSelectedPlatforms] = useState<{
    [key: number]: boolean;
  }>({});

  const userEmailValue = userData.email;
  const userNameValue = userData.username;
  const userPasswordValue = '******';
  const useAvatarValue = userData.avatar;

  const handleEditProfile = () => {
    setToggleEditProfile(!toggleEditProfile);
  };

  const handleSelection = useCallback(
    (
      setId: React.Dispatch<React.SetStateAction<SelectedItems>>,
      id: number
    ) => {
      setId((prevSelected) => ({
        ...prevSelected,
        [id]: !prevSelected[id],
      }));
    },
    []
  );

  const handlePlatformSelection = useCallback(
    (id: number) => {
      handleSelection(setSelectedPlatforms, id);
    },
    [handleSelection]
  );

  const handleGameSelection = useCallback(
    (id: number) => {
      handleSelection(setSelectedGames, id);
    },
    [handleSelection]
  );

  useEffect(() => {
    if (isConnected) {
      const userAuth = LocalStorage.getItem('auth');

      const { userId } = userAuth.auth;
      dispatch(user(userId));
    }
  }, [dispatch, isConnected]);

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
              <CreateAvatar hw="5rem" seed={useAvatarValue} />
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
              <Text fw="bold">{userNameValue}</Text>
            ) : (
              <TextInput
                mb="1rem"
                maw="30rem"
                aria-label="pseudo"
                placeholder={userNameValue}
              />
            )}
            <Text mt="1.5rem" className="input-label">
              adresse email
            </Text>
            <Text>{userEmailValue}</Text>
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
                {userPasswordValue}
              </Text>
            ) : (
              <Stack>
                <PasswordInput
                  mb="1rem"
                  maw="30rem"
                  aria-label="password"
                  placeholder="Mot de passe"
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

          <PlatformSquare
            span={2}
            data={PLATFORMS}
            selectedPlatforms={selectedPlatforms}
            onSelectPlatform={handlePlatformSelection}
          />
        </Box>

        <Box className="section section-full">
          <Title className="section-title" order={4}>
            Mes jeux
          </Title>

          <GamesLabels
            data={GAMES}
            selectedGames={selectedGames}
            onSelectGame={handleGameSelection}
          />
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

export default MyProfile;
