import { BackgroundImage, Box, Flex, Text } from '@mantine/core';
import TypeTag from '../TypeTag';
import FavoriteBtn from '../FavoriteBtn';

import './index.scss';

type PlatformSquareProps = {
  image: string;
  game: string;
  name: string;
  type: string;
  date: string;
  countdown: number;
};

function EventThumb({
  image,
  game,
  name,
  type,
  date,
  countdown,
}: PlatformSquareProps) {
  return (
    <BackgroundImage src={image}>
      <Flex className="thumb" direction="column">
        <FavoriteBtn />

        <Box c="white" className="thumb__infos">
          <Text tt="uppercase">{game}</Text>
          <Text tt="capitalize" size="2rem">
            {name}
          </Text>
        </Box>

        <TypeTag name={type} />

        <Flex
          justify="space-between"
          align="center"
          bg="#1d1d1d"
          miw="100%"
          className="thumb__dates"
        >
          <Text className="thumb__dates-start">{date}</Text>
          <Text className="thumb__dates-duration">{countdown} jours</Text>
        </Flex>
      </Flex>
    </BackgroundImage>
  );
}

export default EventThumb;
