import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  Anchor,
  Text,
  Box,
  Button,
  TextInput,
  Title,
  Flex,
  PasswordInput,
} from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { signup } from '../../../../store/reducers/signup';
import { login } from '../../../../store/reducers/login';

type DefaultProps = {
  onChangeView: (step: string) => void;
};

function Default({ onChangeView }: DefaultProps) {
  const dispatch = useAppDispatch();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const isSuccess = useAppSelector((state) => state.signup.isSuccess);
  const errorMsg = useAppSelector((state) => state.signup.error);

  const handleChangeEmailValue = (event: ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;

    setEmailValue(email);
  };

  const handleChangePasswordValue = (event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPasswordValue(password);
  };

  const handleChangeConfirmPasswordValue = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const confirmPassword = event.target.value;

    setConfirmPasswordValue(confirmPassword);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      signup({
        email: emailValue,
        password: passwordValue,
        confirmation: confirmPasswordValue,
      })
    );
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        login({
          email: emailValue,
          password: passwordValue,
        })
      );

      onChangeView('profile');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <Box>
      <Title className="title" size="2.25rem" c="#FFF">
        Inscription
      </Title>

      <Box component="form" className="section" onSubmit={handleFormSubmit}>
        <TextInput
          onChange={handleChangeEmailValue}
          label="Email"
          placeholder="Saisissez votre email"
          c="#FFF"
        />

        <PasswordInput
          onChange={handleChangePasswordValue}
          label="Mot de passe"
          placeholder="Saisissez votre mot de passe"
          c="#FFF"
          mt="1rem"
        />

        <PasswordInput
          onChange={handleChangeConfirmPasswordValue}
          label="Confirmation de mot de passe"
          placeholder="Saisissez votre mot de passe"
          c="#FFF"
          mt="1rem"
        />

        {errorMsg && <Text>{errorMsg}</Text>}

        <Flex mt="2rem" justify="flex-end">
          <Button type="submit">S&apos;inscrire</Button>
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
