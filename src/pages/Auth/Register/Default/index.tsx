import {
  Anchor,
  Text,
  Box,
  Button,
  Group,
  Stack,
  TextInput,
  Title,
  Flex,
} from '@mantine/core';

type DefaultProps = {
  onChangeView: (step: string) => void;
};

function Default({ onChangeView }: DefaultProps) {
  return (
    <Box>
      <Title className="title" size="2.25rem" c="#FFF">
        Inscription
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

          <TextInput
            label="Confirmation de mot de passe"
            placeholder="Saisissez votre mot de passe"
            c="#FFF"
            className="section"
          />

          <Group justify="flex-end">
            <Button onClick={() => onChangeView('profile')} variant="outline">
              S&apos;inscrire
            </Button>
          </Group>
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
      </Stack>
    </Box>
  );
}

export default Default;
