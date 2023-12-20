import { Flex, Grid, Text } from '@mantine/core';

import './index.scss';

type PlatformSquareProps = {
  span: number;
  data: { id: number; name: string }[];
  selectedPlatforms: { [key: number]: boolean };
  handlePlatformSelection: (id: number) => void;
};

function PlatformsSquares({
  span,
  data,
  selectedPlatforms,
  handlePlatformSelection,
}: PlatformSquareProps) {
  return (
    <Grid justify="flex-start" align="center" gutter={15}>
      {data.map((platform) => (
        <Grid.Col span={span} key={platform.id}>
          <Flex
            justify="center"
            align="center"
            className={`platform ${
              selectedPlatforms[platform.id] ? 'selected' : ''
            }`}
            onClick={() => handlePlatformSelection(platform.id)}
          >
            <Text size="0.9rem" px="0.5rem">
              {platform.name}
            </Text>
          </Flex>
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default PlatformsSquares;
