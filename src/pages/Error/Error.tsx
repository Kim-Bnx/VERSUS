import { Button, Container, Flex, Text, Title } from '@mantine/core';

function Error() {
  return (
    <Container fluid className="error" style={{ height: '100vh' }}>
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="column"
        style={{ height: '100%' }}
      >
        <Title order={1}>404 ERROR</Title>
        <Text>Tu sembles t&apos;être perdu</Text>
        <Button component="a" href="/">
          VERSUS Home
        </Button>
      </Flex>
    </Container>
  );
}

export default Error;
