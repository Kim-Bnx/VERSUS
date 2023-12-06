import { ChangeEvent, FormEvent } from 'react';
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
} from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeInputLoginValue, login } from '../../../store/reducers/login';

// use mantine form validators (https://mantine.dev/form/validators/) ?

function Login() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const emailValue = useAppSelector((state) => state.login.credentials.email);
  const passwordValue = useAppSelector(
    (state) => state.login.credentials.password
  );
  const errorMsg = useAppSelector((state) => state.login.error);

  const handleChangeEmailValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    dispatch(changeInputLoginValue({ fieldName: 'email', value: newValue }));
  };

  const handleChangePasswordValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    dispatch(changeInputLoginValue({ fieldName: 'password', value: newValue }));
  };

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await dispatch(
        login({
          email: emailValue,
          password: passwordValue,
        })
      );

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

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
            value={emailValue}
            onChange={handleChangeEmailValue}
          />

          <TextInput
            label="Mot de passe"
            placeholder="Saisissez votre mot de passe"
            c="#FFF"
            className="section"
            value={passwordValue}
            onChange={handleChangePasswordValue}
          />

          <Group justify="space-between" className="section">
            <Anchor href="#" underline="always" c="#FFF" fz="0.9rem">
              Mot de passe oublié ?
            </Anchor>

            <Button
              onClick={() => handleSubmitForm}
              type="submit"
              variant="outline"
            >
              Se connecter
            </Button>
          </Group>
        </Box>

        {errorMsg && <Box>{errorMsg}</Box>}

        <Flex direction="row" wrap="wrap" className="form-bottom">
          <Text c="#FFF" fz="0.9rem">
            Vous n&apos;avez pas de compte ?
          </Text>

          <Button variant="outline" fullWidth>
            <Anchor href="/register">Inscrivez-vous</Anchor>
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
