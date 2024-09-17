// src/components/Default/Default.tsx
import React from 'react';
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
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { signup } from '../../../../store/reducers/signup';
import { login } from '../../../../store/reducers/login';
import signupSchema, {
  SignupSchemaType,
} from '../../../../validations/signupSchema';

type DefaultProps = {
  onChangeView: (step: string) => void;
};

function Default({ onChangeView }: DefaultProps) {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmation: '',
    },
  });

  const errorMsg = useAppSelector((state) => state.signup.error);

  const onSubmit = async (data: SignupSchemaType) => {
    try {
      await dispatch(signup(data)).unwrap();
      await dispatch(login({ email: data.email, password: data.password }));
      onChangeView('profile');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <Box>
      <Title order={2} className="title" size="2.25rem" c="#FFF">
        Inscription
      </Title>

      <Box
        component="form"
        className="section"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              label="Adresse Email"
              placeholder="Saisissez votre adresse email"
              c="#FFF"
              error={errors.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <PasswordInput
              {...field}
              label="Mot de passe"
              placeholder="Saisissez votre mot de passe"
              c="#FFF"
              mt="1rem"
              error={errors.password?.message}
            />
          )}
        />

        <Controller
          name="confirmation"
          control={control}
          render={({ field }) => (
            <PasswordInput
              {...field}
              label="Confirmation du mot de passe"
              placeholder="Ressaisissez votre mot de passe"
              className="last-input"
              c="#FFF"
              mt="1rem"
              error={errors.confirmation?.message}
            />
          )}
        />

        <Box className="error">{errorMsg && <Text>{errorMsg}</Text>}</Box>

        <Flex justify="flex-end">
          <Button type="submit" className="button">
            S&apos;inscrire
          </Button>
        </Flex>
      </Box>

      <Flex direction="row" wrap="wrap" className="form-bottom">
        <Text c="#FFF" fz="0.9rem">
          Vous avez déjà un compte ?
        </Text>

        <Button
          component="a"
          href="/sign-in"
          variant="outline"
          fullWidth
          className="last-cta button"
        >
          Me connecter avec mon compte
        </Button>

        <Anchor href="/" className="link" c="#FFF" fz="0.9rem">
          Retour à la page d&apos;accueil
        </Anchor>
      </Flex>
    </Box>
  );
}

export default Default;
