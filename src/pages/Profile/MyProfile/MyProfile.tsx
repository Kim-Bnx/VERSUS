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

import { IconKey, IconUpload } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { updateLoggedUser } from '../../../store/reducers/updateLoggedUser';
import { logout } from '../../../store/reducers/login';
import { userGames } from '../../../store/reducers/userGames';
import { fetchGames } from '../../../store/reducers/game';
import { fetchPlatforms } from '../../../store/reducers/platform';
import { updatePassword } from '../../../store/reducers/updatePassword';
import { userPlatforms } from '../../../store/reducers/userPlatforms';
import { loggedUser } from '../../../store/reducers/loggedUser';
import { LocalStorage } from '../../../utils/LocalStorage';
import PlatformSquare from '../../../components/Element/PlatformsSquares';
import GamesLabels from '../../../components/Element/GamesLabels';
import CreateAvatar from '../../../components/Element/CreateAvatar';
import useNotification, {
  NotificationProps,
} from '../../../components/Notification/useNotification';
import editPasswordSchema, {
  EditPasswordSchemaType,
} from '../../../validations/editPasswordSchema';
import '../Profile.scss';

type SelectedItems = { [key: number]: boolean };

function MyProfile() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState('');
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
  const [passwordChanged, setPasswordChanged] = useState(false);
  const { showNotification } = useNotification();
  const resetErrorMsg = useAppSelector((state) => state.updatePassword.error);
  const successMsg = useAppSelector((state) => state.updatePassword.success);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditPasswordSchemaType>({
    resolver: zodResolver(editPasswordSchema),
    defaultValues: {
      password: '',
      confirmation: '',
    },
  });

  const userPasswordValue = '**********';

  const handleEditProfile = () => {
    setToggleEditProfile(!toggleEditProfile);

    if (toggleEditProfile) {
      setUsername(usernameState); // Reset to current username when exiting edit mode
    }
  };

  const handleChangeUsernameValue = (event: ChangeEvent<HTMLInputElement>) => {
    const usernameValue = event.target.value;

    setUsername(usernameValue);
  };

  const handleUsernameSubmit = () => {
    dispatch(
      updateLoggedUser({
        userDatas: { username },
        userId,
      })
    )
      .unwrap()
      .then(() => {
        navigate(0);
      });
  };

  const onPasswordSubmit = (data: EditPasswordSchemaType) => {
    dispatch(
      updatePassword({
        id: userId,
        password: data.password,
        confirmPassword: data.confirmation,
      })
    )
      .unwrap()
      .then(() => {
        setPasswordChanged(true);
        setTimeout(() => {
          dispatch(logout());
          navigate('/');
        }, 5000);
      });
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

  const handleGamesSubmit = () => {
    const selectedGamesIds = Object.keys(selectedGames)
      .filter((key) => selectedGames[parseInt(key, 10)])
      .map((key) => parseInt(key, 10));

    dispatch(userGames({ game_id: selectedGamesIds, userId }));

    window.location.reload();
  };

  const handlePlatformsSubmit = () => {
    const selectedPlatformsIds = Object.keys(selectedPlatforms)
      .filter((key) => selectedPlatforms[parseInt(key, 10)])
      .map((key) => parseInt(key, 10));

    dispatch(userPlatforms({ platform_id: selectedPlatformsIds, userId }));

    window.location.reload();
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

  useEffect(() => {
    if (userGamesState.length > 0) {
      const initialSelectedGames = userGamesState.reduce(
        (acc, game) => ({
          ...acc,
          [game.id]: true,
        }),
        {}
      );
      setSelectedGames(initialSelectedGames);
    }
  }, [userGamesState]);

  useEffect(() => {
    if (userPlatformsState.length > 0) {
      const initialSelectedPlatforms = userPlatformsState.reduce(
        (acc, platform) => ({
          ...acc,
          [platform.id]: true,
        }),
        {}
      );
      setSelectedPlatforms(initialSelectedPlatforms);
    }
  }, [userPlatformsState]);

  useEffect(() => {
    if (successMsg && passwordChanged) {
      const notificationProps: NotificationProps = {
        title: `Mot de passe modifié avec succés !`,
        message: `Vous allez être déconnecté. Veillez à bien vous reconnecter avec votre nouveau mot de passe.`,
        type: 'success',
      };

      showNotification(notificationProps);
      setPasswordChanged(false);
    }
  }, [successMsg, showNotification, passwordChanged]);

  return (
    <Box className="wrapper" w="100%">
      <Flex justify="space-between" align="center">
        <Title order={2} size="2rem">
          {toggleEditProfile ? 'Modifier votre profil' : 'Votre profil'}
        </Title>

        <Flex justify="space-between" align="center">
          <Button className="button" mr="1rem" onClick={handleEditProfile}>
            {toggleEditProfile ? 'Annuler' : 'Éditer mon profil'}
          </Button>
        </Flex>
      </Flex>

      <Box mt="2rem">
        <Title order={3} className="title">
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
                <Button bg="none" className="upload-button">
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
                  <Button
                    className="button"
                    ml="2rem"
                    onClick={handleUsernameSubmit}
                  >
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
              <Box component="form" onSubmit={handleSubmit(onPasswordSubmit)}>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <PasswordInput
                      {...field}
                      maw="30rem"
                      w="80%"
                      aria-label="password"
                      placeholder="Mot de passe"
                      visible={visible}
                      onVisibilityChange={toggle}
                      className={`${errors.password ? 'input-error' : ''}`}
                    />
                  )}
                />

                <Box className="error-message">
                  {errors.password && <Text>{errors.password?.message}</Text>}
                </Box>

                <Text className="input-label">
                  confirmation de mot de passe
                </Text>

                <Controller
                  name="confirmation"
                  control={control}
                  render={({ field }) => (
                    <PasswordInput
                      {...field}
                      maw="30rem"
                      w="80%"
                      aria-label="password-confirmation"
                      placeholder="Confirmation du mot de passe"
                      className={`${errors.confirmation ? 'input-error' : ''}`}
                      visible={visible}
                      onVisibilityChange={toggle}
                    />
                  )}
                />

                <Box className="error-message last-error-box">
                  {errors.confirmation && (
                    <Text>{errors.confirmation?.message}</Text>
                  )}
                  {resetErrorMsg && <Text>{resetErrorMsg}</Text>}
                </Box>

                <Button className="button" type="submit">
                  Valider
                </Button>
              </Box>
            )}
          </Box>
        </Flex>
      </Box>

      <Box mt="4rem">
        <Title order={3} className="title">
          Vos préférences
        </Title>

        <Box className="section section-full">
          <Title order={4} className="section-title">
            Plateformes sur lesquels je joue :
          </Title>

          {!toggleEditProfile ? (
            <Grid justify="flex-start" align="center" gutter={15}>
              {userPlatformsState.map((platform) => (
                <Grid.Col span={1} key={platform.id}>
                  <Flex justify="center" align="center" className="platform">
                    <Text size="0.9rem" px="0.5rem">
                      {platform.name}
                    </Text>
                  </Flex>
                </Grid.Col>
              ))}
            </Grid>
          ) : (
            <>
              <PlatformSquare
                span={1}
                data={platformsState}
                selectedPlatforms={selectedPlatforms}
                handlePlatformSelection={handlePlatformSelection}
              />
              <Flex justify="end" mt="2rem" w="100%">
                <Button className="button" onClick={handlePlatformsSubmit}>
                  Valider
                </Button>
              </Flex>
            </>
          )}
        </Box>

        <Box className="section section-full">
          <Title order={4} className="section-title">
            Jeux auquels je joue :
          </Title>

          {!toggleEditProfile ? (
            <Grid
              justify="flex-start"
              align="center"
              className="games-list"
              gutter={15}
            >
              {userGamesState.map((game) => (
                <GridCol key={game.id} span="content">
                  <Box className="game">
                    <Text>{game.name}</Text>
                  </Box>
                </GridCol>
              ))}
            </Grid>
          ) : (
            <>
              <GamesLabels
                data={gamesState}
                selectedGames={selectedGames}
                handleGameSelection={handleGameSelection}
              />
              <Flex justify="end" mt="2rem" w="100%">
                <Button className="button" onClick={handleGamesSubmit}>
                  Valider
                </Button>
              </Flex>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default MyProfile;
