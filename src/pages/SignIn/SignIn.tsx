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
    <Container fluid className="container">
      <Box className="logo">
        <Text className="logo" tt="uppercase" fw={400} fz="4rem" c="#FFF">
          versus
        </Text>
      </Box>
      <Box component="form" className="login">
        <Title className="login__title" size="2.25rem" c="#FFF">
          Connexion
        </Title>
        <Stack>
          <Box>
            <TextInput
              label="Email"
              placeholder="Saisissez votre email"
              withAsterisk
              fz="1rem"
              c="#FFF"
            />
            <TextInput
              label="Mot de passe"
              placeholder="Saisissez votre mot de passe"
              withAsterisk
              fz="1rem"
              c="#FFF"
            />
            <Group>
              <Anchor href="#" underline="always" c="#FFF" fz="1rem">
                Mot de passe oublié ?
              </Anchor>
              <Button>Se connecter</Button>
            </Group>
          </Box>
          <Box>
            <Text c="#FFF" fz="1rem">
              Vous n&apos;avez pas de compte ?
            </Text>
            <Button>Inscrivez-vous</Button>
          </Box>
          <Box>
            <Anchor href="#" underline="always" c="#FFF" fz="1rem">
              Retour à la page d&apos;acccueil
            </Anchor>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default SignIn;
