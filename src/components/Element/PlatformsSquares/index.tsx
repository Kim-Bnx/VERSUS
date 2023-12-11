import { Flex, Grid, Text } from '@mantine/core';

import './index.scss';

type PlatformSquareProps = {
  span: number;
  data: { id: number; name: string }[];
};

function PlatformsSquares({ span, data }: PlatformSquareProps) {
  return (
    <Grid justify="center" align="center" gutter={15}>
      {data.map((platform) => (
        <Grid.Col span={span} key={platform.id}>
          <Flex justify="center" align="center" className="platform">
            <Text size="0.9rem" fw="bold">
              {platform.name}
            </Text>
          </Flex>
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default PlatformsSquares;
