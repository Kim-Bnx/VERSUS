import {
  Anchor,
  Badge,
  Box,
  Card,
  Group,
  Image,
  Space,
  Text,
  Title,
} from '@mantine/core';

import './About.scss';

function About() {
  return (
    <>
      <Box className="team__presentation">
        <Title order={2}>L&apos;équipe de Versus</Title>

        <Space h="sm" />

        <Text>
          Les visages qui ont fait de Versus un super projet de fin d&apos;étude
          !
        </Text>

        <Space h="xl" />
      </Box>

      <Box className="team full-width">
        <Card shadow="sm" padding="lg" radius="md">
          <Card.Section>
            <Image
              src="https://cdn.discordapp.com/attachments/1177259193451954176/1187344814832881741/image.png?ex=65968c07&is=65841707&hm=65810fcb330d51c2f1a855d328d620cc2b59afedac8f180ae14db73ed9a22999&"
              height={200}
              fit="cover"
              alt="Image Kim"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs" gap="xs">
            <Title order={2}>Kim</Title>
            <Text size="sm">Spé React</Text>
            <Badge color="indigo">Product Owner</Badge>
          </Group>

          <Text size="sm">
            Alias Tim dans ses mauvais jours, ambassadrice de Mantine qui a
            trouvé un projet quelconque juste pour prouver la puissance de sa
            nation.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md">
          <Card.Section>
            <Image
              src="https://avatars.githubusercontent.com/u/138364915?v=4"
              height={200}
              fit="cover"
              alt="Image Rami"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs" gap="xs">
            <Title order={2}>Rami</Title>
            <Text size="sm">Spé React</Text>
            <Badge color="indigo">Scrum Master</Badge>
          </Group>

          <Text size="sm">
            Dans l&apos;ombre, cet inventeur du JWT, sage doyen à la régularité
            infaillible et maître de maison généreux, tire les ficelles
            d&apos;un projet plus grand que Versus.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md">
          <Card.Section>
            <Image
              src="https://avatars.githubusercontent.com/u/137801880?v=4"
              height={200}
              fit="cover"
              alt="Image Sasha"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs" gap="xs">
            <Title order={2}>Sasha</Title>
            <Text size="sm">Spé React</Text>
            <Badge color="indigo">Git master</Badge>
          </Group>

          <Text size="sm">
            Maîtrise le GIT-jutsu à la perfection, ce grand maître se lève à des
            heures interdites pour perfectionner son art.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md">
          <Card.Section>
            <Image
              src="https://avatars.githubusercontent.com/u/36855870?v=4"
              height={200}
              fit="cover"
              alt="Image Maxime"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs" gap="xs">
            <Title order={2}>Maxime</Title>
            <Text size="sm">Spé React</Text>
            <Badge color="indigo">Lead front</Badge>
          </Group>

          <Text size="sm">
            Sa{' '}
            <Anchor href="https://trello.com/b/QukUT0ti/versus">
              description
            </Anchor>{' '}
            et son âme sont sur Trello.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md">
          <Card.Section>
            <Image
              src="https://cdn.discordapp.com/attachments/1177259193451954176/1187343580063342673/20231209_213541.jpg?ex=65968ae1&is=658415e1&hm=f875cec2c33742aa0dcb82ae04193202395082f1c3b1fcd2c5b0cd4e697ee530&"
              height={200}
              fit="cover"
              alt="Image William"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs" gap="xs">
            <Title order={2}>William</Title>
            <Text size="sm">Spé Data</Text>
            <Badge color="indigo">Lead Back</Badge>
          </Group>

          <Text size="sm">
            N&apos;est pas né celui ou celle qui osera faire du tord aux deux
            adorables bébés de ce dévoué maître chien.
          </Text>
        </Card>
      </Box>
    </>
  );
}

export default About;
