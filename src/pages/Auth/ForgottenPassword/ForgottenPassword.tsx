import { useEffect } from 'react';
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
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { login } from '../../../store/reducers/login';
import forgottenPasswordSchema, {
  ForgottenPasswordSchema,
} from '../../../validations/forgottenPasswordSchema';

function ForgottenPassword() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isConnected = useAppSelector((state) => state.login.isConnected);
  const errorMsg = useAppSelector((state) => state.login.error);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgottenPasswordSchema>({
    resolver: zodResolver(forgottenPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: ForgottenPasswordSchema) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (isConnected) {
      navigate('/');
    }
  }, [isConnected, navigate]);

  return (
    <Box className="right-content">
      <Title order={2} className="title" size="2.25rem" c="#FFF">
        Mot de passe oublié
        <Text mt="1rem">
          Pas de panique ! Nous avons juste besoin de ton adresse email.
        </Text>
      </Title>

      <Stack>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Adresse Email"
                placeholder="Saisissez votre adresse email"
                c="#FFF"
                className="section"
                error={errors.email?.message}
              />
            )}
          />

          {errorMsg && (
            <Box className="error">
              <Text>{errorMsg}</Text>
            </Box>
          )}

          <Group justify="space-between" className="section">
            <Button type="submit" className="button">
              Réinitialiser mon mot de passe
            </Button>
          </Group>
        </Box>

        <Flex direction="row" wrap="wrap" className="form-bottom">
          <Text c="#FFF" fz="0.9rem">
            Vous n&apos;avez pas encore de compte ?
          </Text>

          <Button
            component="a"
            href="/sign-up"
            variant="outline"
            fullWidth
            className="button"
          >
            Créer un compte Versus
          </Button>
        </Flex>

        <Flex mt="1rem" direction="row" wrap="wrap" className="form-bottom">
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
      </Stack>
    </Box>
  );
}

export default ForgottenPassword;
