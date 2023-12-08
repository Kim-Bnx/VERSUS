import { Flex, Text } from '@mantine/core';

import './index.scss';

type TypeTagProps = {
  name: string;
};

function TypeTag({ name }: TypeTagProps) {
  return (
    <Flex justify="center" align="center" className="type-tag">
      <Text tt="uppercase" size="0.8rem">
        {name}
      </Text>
    </Flex>
  );
}

export default TypeTag;
