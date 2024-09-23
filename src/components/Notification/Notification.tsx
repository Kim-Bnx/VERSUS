import { notifications } from '@mantine/notifications';
import { IoCheckmarkSharp, IoCloseCircleSharp } from 'react-icons/io5';
import { MantineTheme, rem } from '@mantine/core';
import { ReactNode } from 'react';

interface NotificationProps {
  title: string;
  message: string;
  type?: 'success' | 'failed' | 'default';
  icon?: ReactNode;
  theme: MantineTheme;
}

const notification = ({
  title,
  message,
  type = 'default',
  icon,
  theme,
}: NotificationProps) => {
  const colorMap: Record<string, string> = {
    success: 'green',
    failed: 'red',
    default: theme.colors.blue[6],
  };

  const iconMap: Record<string, ReactNode> = {
    success: <IoCheckmarkSharp style={{ width: rem(18), height: rem(18) }} />,
    failed: <IoCloseCircleSharp style={{ width: rem(18), height: rem(18) }} />,
    default: <IoCheckmarkSharp style={{ width: rem(18), height: rem(18) }} />, // Default icon
  };

  notifications.show({
    title,
    message,
    color: colorMap[type],
    icon: icon || iconMap[type],
    autoClose: 3000,
  });
};

// notification({
//   title: 'L\'événement a été crée avec succès.',
//   message: 'Il a été ajouté à vos événements brouillon.',
//   type: 'success', // or 'failed' or 'default'
// });

export default notification;
