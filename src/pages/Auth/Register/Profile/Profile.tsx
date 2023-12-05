import {
  Anchor,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Input,
  Title,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

function Profile() {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      className="register-profile register-section"
    >
      <Title size="1.5rem" className="register__title">
        Configuration de votre profil
      </Title>

      <span>Etape 1 sur 2</span>

      <Input.Wrapper
        className="profile-input section"
        label="Pseudo"
        error="DEFAULT ERROR AREA"
      >
        <Input placeholder="pseudonyme" />
      </Input.Wrapper>

      <Flex className="profile-avatar section">
        <Box className="avatar-selected">
          <p className="subtitle">Avatar</p>
          <div className="circle" />
        </Box>

        <div className="avatar-selection">
          <p className="subtitle">Importer une image ou choisis</p>
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
