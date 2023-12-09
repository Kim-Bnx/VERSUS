import { Anchor, BackgroundImage, Box, Flex, List, Text } from '@mantine/core';

import './index.scss';

type TeamThumbProps = {
  image: string;
  name: string;
  members: string[];
};

function TeamThumb({ image, members, name }: TeamThumbProps) {
  return (
    <Flex justify="space-between" align="flex-start" className="team">
      <BackgroundImage radius="sd" className="team-image" src={image} />

      <Box className="team-members">
        <Text fw="bold" mb="1rem">
          {name}
        </Text>

        <List withPadding>
          <List.Item>
            <Anchor>{members[0]}</Anchor>
          </List.Item>

          <List.Item>
            <Anchor>{members[1]}</Anchor>
          </List.Item>

          <List.Item>
            <Anchor>{members[2]}</Anchor>
          </List.Item>

          <List.Item>
            <Anchor>{members[3]}</Anchor>
          </List.Item>

          <List.Item>
            <Anchor>{members[4]}</Anchor>
          </List.Item>

          <List.Item>
            <Anchor>{members[5]}</Anchor>
          </List.Item>
        </List>
      </Box>
    </Flex>
  );
}

export default TeamThumb;
