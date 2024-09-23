import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Text,
  Box,
  Title,
  Stack,
  Group,
  Divider,
  Button,
  PasswordInput,
} from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { updatePassword } from '../../../store/reducers/updatePassword';
import useNotification, {
  NotificationProps,
} from '../../../components/Notification/useNotification';
import resetPasswordSchema, {
  ResetPasswordSchemaType,
} from '../../../validations/resetPasswordSchema';

function ResetPassword() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const email = searchParams.get('e');
  const token = searchParams.get('t');
  const { showNotification } = useNotification();
  const resetErrorMsg = useAppSelector((state) => state.updatePassword.error);
  const successMsg = useAppSelector((state) => state.updatePassword.success);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmation: '',
    },
  });

  const onSubmit = (data: ResetPasswordSchemaType) => {
    dispatch(
      updatePassword({
        email,
        token,
        password: data.password,
        confirmPassword: data.confirmation,
      })
    );
  };

  // Redirect to 404 if email or token are missing
  useEffect(() => {
    if (!email || !token) {
      navigate('/404');
    }
  }, [email, token, navigate]);

  // Display the notification and redirect after 3 seconds
  useEffect(() => {
    if (successMsg) {
      const notificationProps: NotificationProps = {
        title: 'Modification de mot de passe effectué !',
        message:
          'Vous allez être redirigé vers la page de connexion dans 3 secondes ...',
        type: 'success',
        onClose: () => navigate('/sign-in'),
      };

      showNotification(notificationProps);
    }
  }, [successMsg, navigate, showNotification]);

  return (
    <Box className="right-content">
      <Title order={2} className="title" size="2.25rem" c="#FFF">
        Modification de mot de passe
      </Title>

      <Stack>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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

          <Box className="error-message">
            {errors.password && <Text>{errors.password?.message}</Text>}
          </Box>

          <Controller
            name="confirmation"
            control={control}
            render={({ field }) => (
              <PasswordInput
                {...field}
                label="Confirmation du mot de passe"
                placeholder="Ressaisissez votre mot de passe"
                className={`${errors.confirmation ? 'input-error' : ''}`}
                c="#FFF"
              />
            )}
          />

          <Box className="error-message last-error-box">
            {errors.confirmation && <Text>{errors.confirmation?.message}</Text>}
            {resetErrorMsg && <Text>{resetErrorMsg}</Text>}
          </Box>

          <Group mt="1rem" justify="flex-end">
            <Button type="submit" className="button">
              Changer mon mot de passe
            </Button>
          </Group>
        </Box>

        <Divider my="xl" />
      </Stack>
    </Box>
  );
}

export default ResetPassword;
