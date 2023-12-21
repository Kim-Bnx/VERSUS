import { BackgroundImage, Box, Flex, Pill, Text, Title } from '@mantine/core';
import TypeTag from '../../TypeTag';
import FavoriteBtn from '../../FavoriteBtn';
import Date from '../../../Date/Date';

import './index.scss';
import { IoCalendarClearOutline } from 'react-icons/io5';

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
    <BackgroundImage src={image} className="eventhumb" radius="md">
      <Pill className="eventhumb__type">{type}</Pill>

      <Box className="thumb">
        {/* <FavoriteBtn /> */}

        <Box c="white" className="thumb__infos">
          <Text tt="uppercase">{game}</Text>
          <Title order={3}>{name}</Title>
        </Box>

        <Flex
          justify="space-between"
          align="center"
          wrap="wrap"
          miw="100%"
          className="thumb__dates"
        >
          <Flex align="center" gap="sm" className="thumb__dates-start">
            <IoCalendarClearOutline /> <Date startDate={date} />
          </Flex>
          <Text className="thumb__dates-duration">Dans {countdown} jours</Text>
        </Flex>
      </Box>
    </BackgroundImage>
  );
}

export default EventThumb;
