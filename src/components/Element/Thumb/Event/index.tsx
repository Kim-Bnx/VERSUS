import { BackgroundImage, Box, Flex, Text } from '@mantine/core';
import TypeTag from '../../TypeTag';
import FavoriteBtn from '../../FavoriteBtn';
import Date from '../../../Date/Date';

import './index.scss';

type EventThumbProps = {
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
}: EventThumbProps) {
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
          <Text className="thumb__dates-start">
            <Date startDate={date} />
          </Text>
          <Text className="thumb__dates-duration">
            Commence dans {countdown} jours
          </Text>
        </Flex>
      </Flex>
    </BackgroundImage>
  );
}

export default EventThumb;
