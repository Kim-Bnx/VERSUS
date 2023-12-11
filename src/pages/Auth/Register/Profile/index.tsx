import {
  Anchor,
  Box,
  Button,
  Flex,
  Grid,
  Text,
  Group,
  TextInput,
  Title,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

type ProfileProps = {
  onChangeView: (step: string) => void;
};

function Profile({ onChangeView }: ProfileProps) {
  return (
    <Flex align="center" justify="center" direction="column">
      <Box className="title">
        <Title size="1.5rem">Configuration de votre profil</Title>
        <Text>Etape 1 sur 2</Text>
      </Box>

      <TextInput
        label="Pseudo"
        placeholder="pseudonyme"
        c="#FFF"
        className="section"
      />

      <Flex className="profile-avatar section">
        <Box className="avatar-selected">
          <Text className="form-title">Avatar</Text>
          <Box className="circle" />
        </Box>

        <Box>
          <Text className="form-title">Importer une image ou choisir</Text>
          <Grid gutter={{ base: 0, xs: 'md', md: 10, xl: 10 }}>
            <Grid.Col span={4}>
              <Box className="circle" />
            </Grid.Col>
            <Grid.Col span={4}>
              <Box className="circle" />
            </Grid.Col>
            <Grid.Col span={4}>
              <Box className="circle" />
            </Grid.Col>
            <Grid.Col span={4}>
              <Box className="circle" />
            </Grid.Col>
            <Grid.Col span={4}>
              <Box className="circle" />
            </Grid.Col>
            <Grid.Col span={4}>
              <Box className="circle" />
            </Grid.Col>
          </Grid>
        </Box>
      </Flex>

      <Flex
        className="navigation section"
        align="center"
        justify="space-between"
      >
        <Anchor onClick={() => onChangeView('preferences')}>Passer</Anchor>
        <Group>
          <Button
            onClick={() => onChangeView('default')}
            leftSection={<IconChevronLeft size={14} />}
          >
            Retour
          </Button>
          <Button
            onClick={() => onChangeView('preferences')}
            rightSection={<IconChevronRight size={14} />}
          >
            Suivant
          </Button>
        </Group>
      </Flex>
    </Flex>
  );
}

export default Profile;
