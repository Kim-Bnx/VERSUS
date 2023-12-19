import { ChangeEvent, useCallback, useEffect, useState } from 'react';
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
  Grid,
  GridCol,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconKey, IconSettingsFilled, IconUpload } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { loggedUserUpdate } from '../../../store/reducers/loggedUserUpdate';
import { logout } from '../../../store/reducers/login';
import { userGames } from '../../../store/reducers/userGames';
import { fetchGames } from '../../../store/reducers/game';
import { fetchPlatforms } from '../../../store/reducers/platform';
import { userPlatforms } from '../../../store/reducers/userPlatforms';
import { loggedUser } from '../../../store/reducers/loggedUser';
import { LocalStorage } from '../../../utils/LocalStorage';
import PlatformSquare from '../../../components/Element/PlatformsSquares';
import GamesLabels from '../../../components/Element/GamesLabels';
import CreateAvatar from '../../../components/Element/CreateAvatar';

import '../Profile.scss';

type SelectedItems = { [key: number]: boolean };

function MyProfile() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toggleEditProfile, setToggleEditProfile] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [visible, { toggle }] = useDisclosure(false);
  const [selectedGames, setSelectedGames] = useState<{
    [key: number]: boolean;
  }>({});
  const [selectedPlatforms, setSelectedPlatforms] = useState<{
    [key: number]: boolean;
  }>({});

  const isConnected = useAppSelector((state) => state.login.isConnected);
  const usernameState = useAppSelector(
    (state) => state.loggedUser.data.username
  );
  const userEmailValue = useAppSelector((state) => state.loggedUser.data.email);
  const useAvatarValue = useAppSelector(
    (state) => state.loggedUser.data.avatar
  );
  const gamesState = useAppSelector((state) => state.game.games);
  const userGamesState = useAppSelector((state) => state.loggedUser.data.games);
  const platformsState = useAppSelector((state) => state.platform.platforms);
  const userPlatformsState = useAppSelector(
    (state) => state.loggedUser.data.platforms
  );

  const form = useForm({
    initialValues: {
      password: '',
      confirmPassword: '',
    },

    validate: {
      password: (value) =>
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm.test(
          value
        )
          ? null
          : 'Le mot de passe doit faire 8 caractéres au minimum et doit comporter un chiffre, un caractére spécial et une majuscule',
      confirmPassword: (value, values) =>
        value !== values.password
          ? 'Les mots de passe ne correspondent pas.'
          : null,
    },
  });

  const userPasswordValue = '******';

  const handleEditProfile = () => {
    setToggleEditProfile(!toggleEditProfile);
  };

  const handleChangeUsernameValue = (event: ChangeEvent<HTMLInputElement>) => {
    const usernameValue = event.target.value;

    setUsername(usernameValue);
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

  const handleUsernameSubmit = () => {
    dispatch(
      loggedUserUpdate({
        userDatas: { username },
        userId,
      })
    );

    window.location.reload();
  };

  const handlePasswordSubmit = () => {
    const { values } = form;

    setPassword(values.password);

    dispatch(
      loggedUserUpdate({
        userDatas: { password },
        userId,
      })
    );

    dispatch(logout());

    navigate('/');
  };

  const handleGamesSubmit = () => {
    const selectedGamesIds = Object.keys(selectedGames)
      .filter((key) => selectedGames[parseInt(key, 10)])
      .map((key) => parseInt(key, 10));

    dispatch(userGames({ game_id: selectedGamesIds, userId }));

    console.log(selectedGamesIds);
    // window.location.reload();
  };

  const handlePlatformsSubmit = () => {
    const selectedPlatformsIds = Object.keys(selectedPlatforms)
      .filter((key) => selectedPlatforms[parseInt(key, 10)])
      .map((key) => parseInt(key, 10));

    console.log('selectedPlatformsIds');

    dispatch(userPlatforms({ platform_id: selectedPlatformsIds, userId }));

    // window.location.reload();
  };

  useEffect(() => {
    if (isConnected) {
      const userAuth = LocalStorage.getItem('auth');

      const loggedUserId = userAuth.auth.userId;
      setUserId(loggedUserId);
      dispatch(loggedUser(loggedUserId));
      dispatch(fetchGames());
      dispatch(fetchPlatforms());
    }
  }, [dispatch, isConnected]);

  return (
    <Box className="wrapper" w="100%">
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

            <Flex>
              {!toggleEditProfile ? (
                <Text fw="bold">{usernameState}</Text>
              ) : (
                <>
                  <TextInput
                    mb="1rem"
                    maw="30rem"
                    w="80%"
                    aria-label="pseudo"
                    placeholder={usernameState}
                    onChange={handleChangeUsernameValue}
                  />
                  <Button ml="2rem" onClick={handleUsernameSubmit}>
                    Valider
                  </Button>
                </>
              )}
            </Flex>

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
              <form onSubmit={form.onSubmit(handlePasswordSubmit)}>
                <PasswordInput
                  mb="1rem"
                  maw="30rem"
                  w="80%"
                  aria-label="password"
                  placeholder="Mot de passe"
                  visible={visible}
                  onVisibilityChange={toggle}
                  {...form.getInputProps('password')}
                />
                <Text mt="1.5rem" className="input-label">
                  confirmation de mot de passe
                </Text>
                <PasswordInput
                  mb="1rem"
                  maw="30rem"
                  w="80%"
                  aria-label="password-confirmation"
                  placeholder="Confirmation du mot de passe"
                  visible={visible}
                  onVisibilityChange={toggle}
                  {...form.getInputProps('confirmPassword')}
                />
                <Button mt="1rem" type="submit">
                  Valider
                </Button>
              </form>
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

          {!toggleEditProfile ? (
            <Grid justify="flex-start" align="center" gutter={15}>
              {platformsState.map((platform) => (
                <Grid.Col span={2} key={platform.id}>
                  <Flex
                    justify="center"
                    align="center"
                    className={`platform ${
                      selectedPlatforms[platform.id] ? 'selected' : ''
                    }`}
                  >
                    <Text size="0.9rem">{platform.name}</Text>
                  </Flex>
                </Grid.Col>
              ))}
            </Grid>
          ) : (
            <>
              <PlatformSquare
                span={2}
                data={userPlatformsState}
                selectedPlatforms={selectedPlatforms}
                onSelectPlatform={handlePlatformSelection}
              />
              <Flex mt="2rem" w="100%">
                <Button onClick={handleGamesSubmit}>Valider</Button>
              </Flex>
            </>
          )}
        </Box>

        <Box className="section section-full">
          <Title className="section-title" order={4}>
            Mes jeux
          </Title>

          {!toggleEditProfile ? (
            <Grid
              justify="center"
              align="center"
              className="games-list"
              gutter={15}
            >
              {gamesState.map((game) => (
                <GridCol key={game.id} span="content">
                  <Box
                    className={`game ${
                      selectedGames[game.id] ? 'selected' : ''
                    }`}
                  >
                    <Text>{game.name}</Text>
                  </Box>
                </GridCol>
              ))}
            </Grid>
          ) : (
            <>
              <GamesLabels
                data={userGamesState}
                selectedGames={selectedGames}
                onSelectGame={handleGameSelection}
              />
              <Flex mt="2rem" w="100%">
                <Button onClick={handleGamesSubmit}>Valider</Button>
              </Flex>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default MyProfile;
