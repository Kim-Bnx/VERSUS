import { notifications } from '@mantine/notifications';
import { IoCheckmarkSharp, IoCloseCircleSharp } from 'react-icons/io5';
import { useMantineTheme, rem } from '@mantine/core';
import { ReactNode } from 'react';

export interface NotificationProps {
  title: string;
  message: string;
  type?: 'success' | 'failed' | 'default';
  onClose?: () => void;
}

const useNotification = () => {
  const theme = useMantineTheme();

  const showNotification = ({
    title,
    message,
    type = 'default',
    onClose,
  }: NotificationProps) => {
    const colorMap: Record<string, string> = {
      success: 'green',
      failed: 'red',
      default: theme.colors.blue[6],
    };

    const iconMap: Record<string, ReactNode> = {
      success: <IoCheckmarkSharp style={{ width: rem(18), height: rem(18) }} />,
      failed: (
        <IoCloseCircleSharp style={{ width: rem(18), height: rem(18) }} />
      ),
      default: <IoCheckmarkSharp style={{ width: rem(18), height: rem(18) }} />,
    };

    notifications.show({
      title,
      message,
      color: colorMap[type],
      icon: iconMap[type],
      autoClose: 3000,
      onClose,
    });
  };

  return { showNotification };
};

export default useNotification;
