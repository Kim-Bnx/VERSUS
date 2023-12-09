import { Flex, Grid, Text } from '@mantine/core';

import './index.scss';

type PlatformSquareProps = {
  span: number;
};

function PlatformSquare({ span }: PlatformSquareProps) {
  return (
    <Grid justify="center" align="center" gutter={15}>
      <Grid.Col span={span}>
        <Flex justify="center" align="center" className="platform">
          <Text size="0.9rem" fw="bold">
            PC
          </Text>
        </Flex>
      </Grid.Col>

      <Grid.Col span={span}>
        <Flex justify="center" align="center" className="platform">
          <Text size="0.9rem" fw="bold">
            Switch
          </Text>
        </Flex>
      </Grid.Col>

      <Grid.Col span={span}>
        <Flex justify="center" align="center" className="platform">
          <Text size="0.9rem" fw="bold">
            PS5
          </Text>
        </Flex>
      </Grid.Col>

      <Grid.Col span={span}>
        <Flex justify="center" align="center" className="platform">
          <Text size="0.9rem" fw="bold">
            XBOX
          </Text>
        </Flex>
      </Grid.Col>

      <Grid.Col span={span}>
        <Flex justify="center" align="center" className="platform">
          <Text size="0.9rem" fw="bold">
            RETRO
          </Text>
        </Flex>
      </Grid.Col>
    </Grid>
  );
}

export default PlatformSquare;
