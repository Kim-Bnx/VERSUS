import {
  Anchor,
  Box,
  Button,
  Container,
  FileInput,
  Flex,
  Grid,
  Input,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import '@mantine/core/styles.css';
import './Register.scss';

function Register() {
  return (
    <Container fluid className="page page-register">
      <Flex
        align="center"
        justify="center"
        direction="column"
        className="register-profile"
      >
        <h2 className="register__title">Configuration de votre profil</h2>

        <span>etape 1 sur 2</span>

        <Input.Wrapper
          className="profile-input"
          label="Pseudo"
          error="Input error"
        >
          <Input placeholder="pseudonyme" />
        </Input.Wrapper>

        <Flex className="profile-avatar">
          <div className="avatar-selected">
            <p className="avatar__title">Avatar</p>
            <div className="circle" />
          </div>

          <div className="avatar-selection">
            <p>Importer une image ou choisis</p>
            <Grid gutter={{ base: 0, xs: 'md', md: 'xl', xl: 10 }}>
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

        <div className="navigation">
          <Anchor>Passer</Anchor>
          <Button rightSection={<IconChevronRight size={14} />}>Suivant</Button>
        </div>
      </Flex>

      {/* <Box className="register-preferences"></Box> */}
    </Container>
  );
}

export default Register;
