import {
  Anchor,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  TextInput,
  Title,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

function Profile() {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      className="right-content"
    >
      <Box className="title">
        <Title size="1.5rem">Configuration de votre profil</Title>
        <span>Etape 1 sur 2</span>
      </Box>

      <TextInput
        label="Pseudo"
        placeholder="pseudonyme"
        c="#FFF"
        className="section"
      />

      <Flex className="profile-avatar section">
        <Box className="avatar-selected">
          <p className="form-title">Avatar</p>
          <div className="circle" />
        </Box>

        <div className="avatar-selection">
          <p className="form-title">Importer une image ou choisis</p>
          <Grid gutter={{ base: 0, xs: 'md', md: 10, xl: 10 }}>
            <Grid.Col span={4}>
              <div className="circle" />
            </Grid.Col>
            <Grid.Col span={4}>
              <div className="circle" />
            </Grid.Col>
            <Grid.Col span={4}>
              <div className="circle" />
            </Grid.Col>
            <Grid.Col span={4}>
              <div className="circle" />
            </Grid.Col>
            <Grid.Col span={4}>
              <div className="circle" />
            </Grid.Col>
            <Grid.Col span={4}>
              <div className="circle" />
            </Grid.Col>
          </Grid>
        </div>
      </Flex>

      <Flex
        className="navigation section"
        align="center"
        justify="space-between"
      >
        <Anchor>Passer</Anchor>
        <Group>
          <Button leftSection={<IconChevronLeft size={14} />}>Retour</Button>
          <Button rightSection={<IconChevronRight size={14} />}>Suivant</Button>
        </Group>
      </Flex>
    </Flex>
  );
}

export default Profile;
