import { ChangeEvent, useEffect, useState } from 'react';
import {
  Anchor,
  Box,
  Button,
  Flex,
  Grid,
  Text,
  Group,
  TextInput,
  Title,
  Avatar,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {
  loggedUserUpdate,
  changeInputUserValue,
} from '../../../../store/reducers/loggedUserUpdate';
import CreateAvatar from '../../../../components/Element/CreateAvatar';
import { LocalStorage } from '../../../../utils/LocalStorage';

type ProfileProps = {
  onChangeView: (step: string) => void;
};

function Profile({ onChangeView }: ProfileProps) {
  const dispatch = useAppDispatch();
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const hasError = useAppSelector((state) => state.loggedUser.error);

  const avatars = [
    'avatar1',
    'avatar2',
    'avatar3',
    'avatar4',
    'avatar5',
    'avatar6',
  ];

  const handleChangeUsernameValue = (event: ChangeEvent<HTMLInputElement>) => {
    const usernameValue = event.target.value;

    setUsername(usernameValue);
  };

  const handleClickAvatarValue = (seed: string) => {
    setSelectedAvatar(seed);
  };

  const handleSubmitData = () => {
    const userAuth = LocalStorage.getItem('auth');
    const { userId } = userAuth.auth;

    dispatch(changeInputUserValue({ fieldName: 'username', value: username }));
    dispatch(
      loggedUserUpdate({
        userDatas: { username, avatar: selectedAvatar },
        userId,
      })
    )
      .unwrap()
      .then(() => {
        setIsSuccess(true);
      });
  };

  useEffect(() => {
    if (hasError) {
      setIsSuccess(false);
    } else if (isSuccess) {
      onChangeView('preferences');
    }
  }, [hasError, onChangeView, isSuccess]);

  return (
    <Flex align="center" justify="center" direction="column">
      <Box className="title">
        <Title order={2} size="1.5rem">
          Configuration de votre profil
        </Title>

        <Text>Etape 1 sur 2</Text>
      </Box>

      <Box w="100%">
        <Title order={3} className="form-title" size="1rem">
          Pseudo
        </Title>

        <TextInput
          onChange={handleChangeUsernameValue}
          placeholder="pseudonyme"
          c="#FFF"
          className="section"
        />
      </Box>

      <Flex justify="space-around" className="avatar section">
        <Box className="avatar-selected">
          <Title order={3} className="form-title" size="1rem">
            Avatar
          </Title>
          {!selectedAvatar ? (
            <Avatar className="circle" />
          ) : (
            <CreateAvatar hw="5rem" seed={selectedAvatar} />
          )}
        </Box>

        <Box mt="1rem" w="15rem">
          <Text mb="1rem">Sélectionnez un avatar</Text>

          <Grid gutter={{ base: 0, xs: 'md', md: 10, xl: 10 }}>
            {avatars.map((avatar) => (
              <Grid.Col key={avatar} span={4}>
                <Flex
                  justify="center"
                  onClick={() => handleClickAvatarValue(avatar)}
                >
                  <CreateAvatar hw="4rem" seed={avatar} />
                </Flex>
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Flex>

      <Flex
        className="navigation section"
        align="center"
        justify="space-between"
      >
        <Anchor onClick={() => onChangeView('preferences')}>Passer</Anchor>

        <Group>
          <Button
            onClick={handleSubmitData}
            rightSection={<IconChevronRight size={14} />}
          >
            Suivant
          </Button>
        </Group>
      </Flex>
    </Flex>
  );
}

export default Profile;
