import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Anchor, Text, Box, Button, Flex, Group, Title } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {
  changeInfosUserValue,
  addAccountData,
} from '../../../../store/reducers/signup';
import PlatformSquares from '../../../../components/Element/PlatformsSquares';
import GamesLabels from '../../../../components/Element/GamesLabels';

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

type PreferencesProps = {
  onChangeView: (step: string) => void;
};
type SelectedItems = { [key: number]: boolean };

function Preferences({ onChangeView }: PreferencesProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const usernameValue = useAppSelector(
    (state) => state.signup.accountInfos.username
  );
  const avatarValue = useAppSelector(
    (state) => state.signup.accountInfos.avatar
  );
  const gamesValue = useAppSelector((state) => state.signup.accountInfos.games);
  const platformValue = useAppSelector(
    (state) => state.signup.accountInfos.platforms
  );

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

  const handleAddAccountData = () => {
    const selectedGameIds = Object.keys(selectedGames)
      .filter((key) => selectedGames[parseInt(key, 10)])
      .map((key) => parseInt(key, 10));

    const selectedPlatformIds = Object.keys(selectedPlatforms)
      .filter((key) => selectedPlatforms[parseInt(key, 10)])
      .map((key) => parseInt(key, 10));

    dispatch(
      changeInfosUserValue({ fieldName: 'games', value: selectedGameIds })
    );

    dispatch(
      changeInfosUserValue({
        fieldName: 'platforms',
        value: selectedPlatformIds,
      })
    );

    console.log(usernameValue, avatarValue, gamesValue, platformValue);

    // dispatch(
    //   addAccountData({
    //     username: usernameValue,
    //     avatar: avatarValue,
    //     games: gamesValue,
    //     platforms: platformValue,
    //   })
    // );

    // navigate('/');
  };

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
          data={GAMES}
          selectedGames={selectedGames}
          onSelectGame={handleGameSelection}
        />
      </Box>

      <Box className="profile-platforms section">
        <Title order={2} size="1rem" className="form-title">
          vos plateformes
        </Title>

        <PlatformSquares
          span={3}
          data={PLATFORMS}
          selectedPlatforms={selectedPlatforms}
          onSelectPlatform={handlePlatformSelection}
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
            onClick={handleAddAccountData}
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
