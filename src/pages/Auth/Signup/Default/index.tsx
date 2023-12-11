import { ChangeEvent } from 'react';
import {
  Anchor,
  Text,
  Box,
  Button,
  TextInput,
  Title,
  Flex,
} from '@mantine/core';
import { useAppDispatch } from '../../../../hooks/redux';
import { changeInputSignupValue } from '../../../../store/reducers/signup';

type DefaultProps = {
  onChangeView: (step: string) => void;
};

function Default({ onChangeView }: DefaultProps) {
  const dispatch = useAppDispatch();

  const handleChangeEmailValue = (event: ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;

    dispatch(changeInputSignupValue({ fieldName: 'email', value: email }));
  };

  const handleChangePasswordValue = (event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;

    dispatch(
      changeInputSignupValue({ fieldName: 'password', value: password })
    );
  };

  const handleChangePasswordConfirmValue = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const passwordConfirm = event.target.value;

    dispatch(
      changeInputSignupValue({
        fieldName: 'confirmPassword',
        value: passwordConfirm,
      })
    );
  };

  return (
    <Box>
      <Title className="title" size="2.25rem" c="#FFF">
        Inscription
      </Title>

      <Box className="section">
        <TextInput
          onChange={handleChangeEmailValue}
          label="Email"
          placeholder="Saisissez votre email"
          c="#FFF"
        />

        <TextInput
          onChange={handleChangePasswordValue}
          label="Mot de passe"
          placeholder="Saisissez votre mot de passe"
          c="#FFF"
          mt="1rem"
        />

        <TextInput
          onChange={handleChangePasswordConfirmValue}
          label="Confirmation de mot de passe"
          placeholder="Saisissez votre mot de passe"
          c="#FFF"
          mt="1rem"
        />

        <Flex mt="2rem" justify="flex-end">
          <Button onClick={() => onChangeView('profile')} variant="outline">
            S&apos;inscrire
          </Button>
        </Flex>
      </Box>

      <Flex direction="row" wrap="wrap" className="form-bottom">
        <Text c="#FFF" fz="0.9rem">
          Vous avez déjà un compte ?
        </Text>

        <Button variant="outline" fullWidth>
          <Anchor href="/sign-in">Se connecter</Anchor>
        </Button>

        <Anchor href="/" underline="always" c="#FFF" fz="0.9rem">
          Retour à la page d&apos;acccueil
        </Anchor>
      </Flex>
    </Box>
  );
}

export default Default;
