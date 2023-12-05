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

// use mantine form validators (https://mantine.dev/form/validators/) ?

function Login() {
  return (
    <Box component="form" className="right-content">
      <Title className="title" size="2.25rem" c="#FFF">
        Connexion
      </Title>

      <Stack>
        <Box>
          <TextInput
            label="Email"
            placeholder="Saisissez votre email"
            c="#FFF"
            className="section"
          />

          <TextInput
            label="Mot de passe"
            placeholder="Saisissez votre mot de passe"
            c="#FFF"
            className="section"
          />

          <Group justify="space-between" className="section">
            <Anchor href="#" underline="always" c="#FFF" fz="0.9rem">
              Mot de passe oublié ?
            </Anchor>

            <Button variant="outline">Se connecter</Button>
          </Group>
        </Box>

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
