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
  PasswordInput,
} from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { login } from '../../../store/reducers/login';
import loginSchema, { LoginSchemaType } from '../../../validations/loginSchema';

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isConnected = useAppSelector((state) => state.login.isConnected);
  const errorMsg = useAppSelector((state) => state.login.error);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
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
        Connexion
      </Title>

      <Stack>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Email"
                placeholder="Saisissez votre adresse email"
                c="#FFF"
                className={`${errors.email ? 'input-error' : ''}`}
              />
            )}
          />

          <Box className="error-message">
            {errors.email && <Text>{errors.email.message}</Text>}
          </Box>

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordInput
                {...field}
                label="Mot de passe"
                placeholder="Saisissez votre mot de passe"
                c="#FFF"
                className={`${errors.password ? 'input-error' : ''}`}
              />
            )}
          />

          <Box className="error-message last-error-box">
            {errors.password && <Text>{errors.password?.message}</Text>}
            {errorMsg && <Text>{errorMsg}</Text>}
          </Box>

          <Group justify="space-between" className="section">
            <Anchor
              href="/forgotten-password"
              c="#FFF"
              fz="0.9rem"
              className="link"
            >
              Mot de passe oublié ?
            </Anchor>

            <Button type="submit" className="button">
              Se connecter
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
            className="last-cta button"
          >
            Créer un compte Versus
          </Button>

          <Anchor href="/" className="link" c="#FFF" fz="0.9rem">
            Retourner à la page d&apos;accueil
          </Anchor>
        </Flex>
      </Stack>
    </Box>
  );
}

export default Login;
