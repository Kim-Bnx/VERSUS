import './SignIn.scss';
import {
  Container,
  Text,
  Box,
  Title,
  TextInput,
  Stack,
  Anchor,
  Group,
  Button,
} from '@mantine/core';

// use mantine form validators (https://mantine.dev/form/validators/) ?

function SignIn() {
  return (
    <Container fluid className="login">
      <Box className="login__lefty">
        <Text
          className="login__logo"
          tt="uppercase"
          fw={400}
          fz="4rem"
          c="#FFF"
        >
          versus
        </Text>
      </Box>
      <Box component="form" className="login__righty">
        <Title className="login__title" size="2.25rem" c="#FFF">
          Connexion
        </Title>
        <Stack>
          <Box className="login__form">
            <TextInput
              label="Email"
              placeholder="Saisissez votre email"
              c="#FFF"
              className="email__input"
            />
            <TextInput
              label="Mot de passe"
              placeholder="Saisissez votre mot de passe"
              c="#FFF"
              className="password__input"
            />
            <Group justify="space-between">
              <Anchor href="#" underline="always" c="#FFF" fz="0.9rem">
                Mot de passe oublié ?
              </Anchor>
              <Button variant="outline">Se connecter</Button>
            </Group>
          </Box>
          <Box className="navigation">
            <Text className="register__text" c="#FFF" fz="0.9rem">
              Vous n&apos;avez pas de compte ?
            </Text>
            <Button className="register__button" variant="outline" fullWidth>
              Inscrivez-vous
            </Button>
            <Anchor
              className="home"
              href="#"
              underline="always"
              c="#FFF"
              fz="0.9rem"
            >
              Retour à la page d&apos;acccueil
            </Anchor>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default SignIn;
