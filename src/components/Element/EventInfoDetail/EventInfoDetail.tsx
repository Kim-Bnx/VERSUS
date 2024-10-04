import { Flex, Text } from '@mantine/core';
import { IoGameController, IoLocationSharp, IoTv } from 'react-icons/io5';
import { Event } from '../../../@types/event';

function EventInfoDetail({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string | undefined;
}) {
  return (
    <Flex justify="center" align="center" gap="xs">
      <Icon color="var(--mantine-color-indigo-filled)" />
      <Text>{text}</Text>
    </Flex>
  );
}

function EventInfoDetails({ eventData }: { eventData: Event }) {
  return (
    <Flex gap="xl" className="event__infos-details">
      <EventInfoDetail icon={IoGameController} text={eventData.game?.name} />
      <EventInfoDetail icon={IoLocationSharp} text={eventData.location} />
      <EventInfoDetail icon={IoTv} text={eventData.platform?.name} />
    </Flex>
  );
}

export default EventInfoDetails;
