import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Text,
  Box,
  Title,
  TextInput,
  Stack,
  Anchor,
  Group,
  Button,
  Flex,
  PasswordInput,
} from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { login } from '../../../store/reducers/login';

// use mantine form validators (https://mantine.dev/form/validators/) ?

function Login() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isConnected = useAppSelector((state) => state.login.isConnected);
  const errorMsg = useAppSelector((state) => state.login.error);

  const handleChangeEmailValue = (event: ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;

    setEmailValue(email);
  };

  const handleChangePasswordValue = (event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;

    setPasswordValue(password);
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      login({
        email: emailValue,
        password: passwordValue,
      })
    );
  };

  useEffect(() => {
    if (isConnected) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  return (
    <Box className="right-content">
      <Title className="title" size="2.25rem" c="#FFF">
        Connexion
      </Title>

      <Stack>
        <Box component="form" onSubmit={handleSubmitForm}>
          <TextInput
            label="Email"
            placeholder="Saisissez votre email"
            c="#FFF"
            className="section"
            onChange={handleChangeEmailValue}
          />

          <PasswordInput
            label="Mot de passe"
            placeholder="Saisissez votre mot de passe"
            c="#FFF"
            className="section"
            onChange={handleChangePasswordValue}
          />

          <Group justify="space-between" className="section">
            <Anchor href="#" underline="always" c="#FFF" fz="0.9rem">
              Mot de passe oublié ?
            </Anchor>

            <Button type="submit" variant="outline">
              Se connecter
            </Button>
          </Group>
        </Box>

        {errorMsg && <Text>{errorMsg}</Text>}

        <Flex direction="row" wrap="wrap" className="form-bottom">
          <Text c="#FFF" fz="0.9rem">
            Vous n&apos;avez pas de compte ?
          </Text>

          <Button variant="outline" fullWidth>
            <Anchor href="/sign-up">Inscrivez-vous</Anchor>
          </Button>

          <Anchor href="/" underline="always" c="#FFF" fz="0.9rem">
            Retour à la page d&apos;acccueil
          </Anchor>
        </Flex>
      </Stack>
    </Box>
  );
}

export default Login;
