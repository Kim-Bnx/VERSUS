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
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {
  changeInputSignupValue,
  signup,
} from '../../../../store/reducers/signup';
import { changeInputLoginValue, login } from '../../../../store/reducers/login';

type DefaultProps = {
  onChangeView: (step: string) => void;
};

function Default({ onChangeView }: DefaultProps) {
  const dispatch = useAppDispatch();

  const isSuccess = useAppSelector((state) => state.signup.isSuccess);
  const errorMsg = useAppSelector((state) => state.signup.error);
  const emailValue = useAppSelector((state) => state.signup.credentials.email);
  const passwordValue = useAppSelector(
    (state) => state.signup.credentials.password
  );
  const confirmPasswordValue = useAppSelector(
    (state) => state.signup.credentials.confirmation
  );

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

  const handleChangeConfirmPasswordValue = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const confirmPassword = event.target.value;

    dispatch(
      changeInputSignupValue({
        fieldName: 'confirmation',
        value: confirmPassword,
      })
    );
  };

  const handleSubmit = () => {
    dispatch(
      signup({
        email: emailValue,
        password: passwordValue,
        confirmation: confirmPasswordValue,
      })
    );
  };

  if (isSuccess) {
    dispatch(changeInputLoginValue({ fieldName: 'email', value: emailValue }));

    dispatch(
      changeInputLoginValue({ fieldName: 'password', value: passwordValue })
    );

    dispatch(
      login({
        email: emailValue,
        password: passwordValue,
      })
    );

    onChangeView('profile');
  }

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
          onChange={handleChangeConfirmPasswordValue}
          label="Confirmation de mot de passe"
          placeholder="Saisissez votre mot de passe"
          c="#FFF"
          mt="1rem"
        />

        {errorMsg && <Text>{errorMsg}</Text>}

        <Flex mt="2rem" justify="flex-end">
          <Button onClick={handleSubmit}>S&apos;inscrire</Button>
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
