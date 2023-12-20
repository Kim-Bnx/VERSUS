import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Anchor, Text, Box, Button, Flex, Group, Title } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { userGames } from '../../../../store/reducers/userGames';
import { userPlatforms } from '../../../../store/reducers/userPlatforms';
import PlatformSquares from '../../../../components/Element/PlatformsSquares';
import GamesLabels from '../../../../components/Element/GamesLabels';
import { LocalStorage } from '../../../../utils/LocalStorage';
import { fetchGames } from '../../../../store/reducers/game';
import { fetchPlatforms } from '../../../../store/reducers/platform';

type PreferencesProps = {
  onChangeView: (step: string) => void;
};

type SelectedItems = { [key: number]: boolean };

function Preferences({ onChangeView }: PreferencesProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSuccess = useAppSelector((state) => state.signup.isSuccess);
  const gamesState = useAppSelector((state) => state.game.games);
  const platformsState = useAppSelector((state) => state.platform.platforms);

  const [selectedGames, setSelectedGames] = useState<{
    [key: number]: boolean;
  }>({});

  const [selectedPlatforms, setSelectedPlatforms] = useState<{
    [key: number]: boolean;
  }>({});

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

  const handleSubmitData = () => {
    const userAuth = LocalStorage.getItem('auth');
    const { userId } = userAuth.auth;

    const selectedGamesIds = Object.keys(selectedGames)
      .filter((key) => selectedGames[parseInt(key, 10)])
      .map((key) => parseInt(key, 10));

    const selectedPlatformsIds = Object.keys(selectedPlatforms)
      .filter((key) => selectedPlatforms[parseInt(key, 10)])
      .map((key) => parseInt(key, 10));

    dispatch(userGames({ game_id: selectedGamesIds, userId }));
    dispatch(userPlatforms({ platform_id: selectedPlatformsIds, userId }));

    if (isSuccess) {
      navigate('/');
    }
  };

  useEffect(() => {
    dispatch(fetchGames());
    dispatch(fetchPlatforms());
  }, [dispatch]);

  return (
    <Flex align="center" justify="center" direction="column">
      <Box className="title">
        <Title order={2} size="1.5rem">
          Vos préférences
        </Title>

        <Text>Etape 2 sur 2</Text>
      </Box>

      <Box className="profile-games section">
        <Title order={2} size="1rem" className="form-title">
          vos jeux
        </Title>

        <GamesLabels
          data={gamesState}
          selectedGames={selectedGames}
          handleGameSelection={handleGameSelection}
        />
      </Box>

      <Box className="profile-platforms section">
        <Title order={2} size="1rem" className="form-title">
          vos plateformes
        </Title>

        <PlatformSquares
          span={3}
          data={platformsState}
          selectedPlatforms={selectedPlatforms}
          handlePlatformSelection={handlePlatformSelection}
        />
      </Box>

      <Flex
        className="navigation section"
        align="center"
        justify="space-between"
      >
        <Anchor href="/">Passer</Anchor>

        <Group>
          <Button
            onClick={() => onChangeView('profile')}
            leftSection={<IconChevronLeft size={14} />}
          >
            Retour
          </Button>

          <Button
            onClick={handleSubmitData}
            rightSection={<IconChevronRight size={14} />}
          >
            Terminer
          </Button>
        </Group>
      </Flex>
    </Flex>
  );
}

export default Preferences;
