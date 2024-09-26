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
  Divider,
  Button,
  Flex,
} from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { resetPassword } from '../../../store/reducers/resetPassword';
import forgottenPasswordSchema, {
  ForgottenPasswordSchemaType,
} from '../../../validations/forgottenPasswordSchema';
import useNotification, {
  NotificationProps,
} from '../../../components/Notification/useNotification';

function ForgottenPassword() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showNotification } = useNotification();
  const isConnected = useAppSelector((state) => state.login.isConnected);
  const resetErrorMsg = useAppSelector((state) => state.resetPassword.error);
  const successMsg = useAppSelector((state) => state.resetPassword.success);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgottenPasswordSchemaType>({
    resolver: zodResolver(forgottenPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: ForgottenPasswordSchemaType) => {
    const { email } = data;

    dispatch(resetPassword(email));
  };

  useEffect(() => {
    if (isConnected) {
      navigate('/');
    }
  }, [isConnected, navigate]);

  // Display the notification and redirect after 3 seconds
  useEffect(() => {
    if (successMsg) {
      const notificationProps: NotificationProps = {
        title: 'Email de reset envoyé !',
        message:
          'Vous allez bientôt recevoir un email pour changer votre mot de passe.',
        type: 'success',
      };

      showNotification(notificationProps);

      setTimeout(() => {
        navigate('/sign-in');
      }, 3000);
    }
  }, [successMsg, showNotification, navigate]);

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
                className={`${errors.email ? 'input-error' : ''}`}
                c="#FFF"
              />
            )}
          />

          <Box className="error-message last-error-box">
            {errors.email && <Text>{errors.email.message}</Text>}
            {resetErrorMsg && <Text>{resetErrorMsg}</Text>}
          </Box>

          <Group mt="1rem" justify="flex-end">
            <Button type="submit" className="button">
              Réinitialiser mon mot de passe
            </Button>
          </Group>
        </Box>

        <Divider my="xl" />

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
            Retourner à la page d&apos;accueil
          </Anchor>
        </Flex>
      </Stack>
    </Box>
  );
}

export default ForgottenPassword;
