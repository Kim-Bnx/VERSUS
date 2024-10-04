import { BackgroundImage, Box, Flex, Text, Title } from '@mantine/core';
import { IoCalendarClearOutline } from 'react-icons/io5';
import Date from '../../../Date/Date';
// import TypeTag from '../../TypeTag';
// import FavoriteBtn from '../../FavoriteBtn';

import './index.scss';

type EventThumbProps = {
  image: string;
  game: string;
  name: string;
  type: string;
  date: string;
  countdown?: number;
  participants?: number;
};

function EventThumb({
  image,
  game,
  name,
  type,
  date,
  countdown,
  participants,
}: EventThumbProps) {
  return (
    <Box className="eventhumb">
      <BackgroundImage src={image} className="eventhumb__image" radius="md">
        <Text className="eventhumb__type">{type}</Text>

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

            <Text className="thumb__dates-duration">
              {/* Show countdown if available, otherwise show participants */}
              {countdown !== undefined
                ? `Dans ${countdown} jours`
                : `${participants} participant${participants !== 1 ? 's' : ''}`}
            </Text>
          </Flex>
        </Box>
      </BackgroundImage>
    </Box>
  );
}

export default EventThumb;
