import {
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Flex,
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
        <Title order={1}>L&apos;équipe Versus</Title>
        <Space h="sm" />
        <Text>
          Les visages qui ont fait de Versus un super projet de fin d&apos;étude
          !
        </Text>
        <Space h="xl" />
      </Box>
      <div className="team">
        <Card shadow="sm" padding="lg" radius="md">
          <Card.Section>
            <Image
              src="https://lh3.googleusercontent.com/pw/ABLVV84O-Te_9PRH_unlhEf1j_91OcMSxmWzwQ9H8sp7hx7hH29V4iCOY7qKhKQE35DOOfkYx2lQqaxRCAtUeB1Qx89svQ45ZkeNO6HBMKf5FR1V_Jc4WFsg8C_gN8Bl8JZvg0Iv8rm6V_JManCk8buL-m4J7q6fM3i1qg1Mj1UT0P-1lzzWQjcod5pQ9NppF1Fa4GQlabo9lFEIQg3KQUGpsf_qq4AO5JlkZvR6vLyMGJ5ofvYz1MkAG1E_e7Sx-6iY2uU6AcERq5Sh0sHWX0Zczy2cvTy4ckvUqV-tLA8gJTjV_NfitUhnF55lccs197mmTVrFRsSb8SIB0WYC_EKNpxabz-VOEiqIb-IN0PDCpStDE8tnVaFdf13p26Ey-K0h0dBhGGyFYfpRapJMmDWnBLiC5jPcEunUH7MwNwocmJ9qKPhNLDUF5J1lwKGl4U5ARDOTvGH05RqVt1xM_y9dA-QVKVGwahSvp9XVD7kYcqmRuRefPd_gP4ZhXQOUjIjp3ePd4rnhUw8dv2PHghYnuYQJC-1eTMVlIPFzEOo70CtwxErkOgx97TUHW_7ogUQN2nm9Qq3WBvBKi0K9X7rxx0mG5Fy_KYeEMx8ohXJ8hw-H1fICkwyBLSFh9pGFDowMYC-ven2EVAo0PT6jxVx9I1Rqy6wZgLce2rPduwN4cI6iMsj4UNhmeMpBrhPBM-fEIXdleM4YcFXqSXv8vDp_WcZhjzpKipLc4to30QCeYLLApiJHPup3uems0_e50WQgYHTB9m3IaIS6MezoOnGxcXJ8AhHLM6iQeUq0y54nX2Kcn9fn3AzbTf3Tu3iguVtvuaf0r3QzNQOMh2g4ljqrMyy2r6drf3H_XOLGsmxJVZEVDi4maX659UOau0gsS3qbLJI0mHJXvoadGaInTJtElGHlylwz-lz_hiWvnEPT3iv_drIcuX5zsGr8d2ogU_ZSTCPxipHbZwk6G3vFA0D5bv9v6nSb9U_6sqgvizU---wUVH4GCwcr0DWLbqpFyMqAzU8aN8nQ1JgoxXeHWJs=w552-h981-s-no-gm?authuser=1"
              height={200}
              fit="cover"
              alt="Image Kim"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Title order={2}>Kim</Title>
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
              src="https://lh3.googleusercontent.com/pw/ABLVV874bNzyvcwDrUcl1Nw3L8MmG7fumWKnXBoL0-qVr5R8AO3nNI8qLEZpy2P1VcM6iDNnCfKFSXGT39fFenZ0dmEtz_mb7G2UPJtPqKibVcsz-FC8n_bJ9HNmH4uVJztSBSANDadXeago51QZf0TI3Bnv9dj5CH3k4O92GPf1vlBL-v-SPmBV6Ym_pkcLMozo3U-15NPRn4q09teyNHxEG6zXcPr-Nk7DGkDs9S4ptSpSAIz5t9YUyYeESKkp8s6aKXj5Ru9qyPtAGr1CpKnOaq51w8RhxJz2B4njOpzFjegfa0EZ2jbvc3zJnKESPs4MTOcLx_rxVxnvY5_joVXIpN_nyN1NAUJxZSTi0fgMlaolwLDL7G7KMe9nCqKe4wVCvTkozPzPqfga9537rTahR3hMvBcG5kmwXBp-m2FVlWaK8zr84bAl9wX74qB1AUoF7iMdTX8InCX-cLskGJ2n-GJe8LazDgnS9hoNVeQAYYZxvr5p5ELUoHUDPVMNJf6KoyRBcjuRqxoKZ03U_TSQs9Xx-JLdqQHa7UDA-oPm8OviEARiaUvLycBVmkiALI9QALANjcb5VH9mfuHFmfOailRYdMIUqZzMkue1JDaZxpE7zZlf7RFL47Jv-5SEJiMMLTK-JJr9A47Nqecs7cpGPUbT8N_b4F1cJEIjKitYqu09cu5LYHRUDBG-ZjlpKZsc_pqMIJF5FBUSPgbAQzz-bo8LwdFkhOIMuNlBkgUEG8BzrZPzMrMR0clTBPksFkxZ6jobgbA3udMbtrcmH4wI-SKMAvCqzyX5BzDEeK7zIIwGe-uwyTAfmYO6qezxn_cS8naaI2Axc7oeQtBXvXknDdWLZeN-zLo5lKiDbVbw0aFj-Z228-MTWN9tMC5cWI9l-dwXSNRbSNMr_Y8FxQ6PB-OwSp3NVEDOSGxaKH5fZdz9DdPtaB3zrnKLAv7lyvBX_4x7eydk7Ri46r0wPCLu8Ijs0psYb_dlg2bTpUDwLvvw94LzTXq_kf3UlDblchGp6Q-lGpBCj4X-y2b41RM=w552-h981-s-no-gm?authuser=1"
              height={200}
              fit="cover"
              alt="Image Rami"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Title order={2}>Rami</Title>
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
            <Image height={200} fit="cover" alt="Image Sasha" />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Title order={2}>Sasha</Title>
            <Badge color="indigo">Git master</Badge>
          </Group>

          <Text size="sm">
            Maîtrise le GIT-jutsu à la perfection, ce grand maître se lève à des
            heures interdites pour perfectionner son art.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md">
          <Card.Section>
            <Image height={200} fit="cover" alt="Image Maxime" />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Title order={2}>Maxime</Title>
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
            <Image height={200} fit="cover" alt="Image William" />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Title order={2}>William</Title>
            <Badge color="indigo">Lead Back</Badge>
          </Group>

          <Text size="sm">
            N&apos;est pas né celui ou celle qui osera faire du tord aux deux
            adorables bébés de ce dévoué maître chien.
          </Text>
        </Card>
      </div>
    </>
  );
}

export default About;
