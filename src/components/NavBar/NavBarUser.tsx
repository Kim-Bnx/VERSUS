import clsx from 'clsx';

import {
  Accordion,
  Anchor,
  AppShell,
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  Tooltip,
  rem,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';

import { NavLink } from 'react-router-dom';
import './NavBar.scss';

type ItemProps = {
  item: {
    // image: string;
    name: string;
  };
};

function FavItem({ item }: ItemProps) {
  return (
    <Anchor href="/" className="favorite-item">
      <Flex gap="sm" align="center">
        <Avatar src="" alt="Favoris" size="sm" />
        <Text size="md">{item.name}</Text>
      </Flex>
    </Anchor>
  );
}

function NavBarGuest() {
  // MANAGE THE NAVIGATION LINKS
  const navigationLinks = [
    {
      label: 'Mes events',
      href: '/profile/username/events',
    },
    {
      label: 'Mes favoris',
      href: '/profile/username/favorites',
    },
  ];

  return (
    <>
      <Box className="navbar__section">
        <Text size="xs">Navigation</Text>

        {navigationLinks.map((link) => (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) =>
              clsx('navbar__link', { 'navbar__link--active': isActive })
            }
          >
            {link.label}
          </NavLink>
        ))}
      </Box>

      <Box className="navbar__section">
        <Text size="xs">Favoris</Text>

        <Accordion unstyled>
          <Accordion.Item value="test">
            <Accordion.Control>Joueurs</Accordion.Control>
            <Accordion.Panel>
              <FavItem item={{ name: 'bla' }} />
              <FavItem item={{ name: 'bla' }} />
              <FavItem item={{ name: 'bla' }} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <Accordion unstyled>
          <Accordion.Item value="test">
            <Accordion.Control>Evénements</Accordion.Control>
            <Accordion.Panel>
              <FavItem item={{ name: 'bla' }} />
              <FavItem item={{ name: 'bla' }} />
              <FavItem item={{ name: 'bla' }} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <Accordion unstyled>
          <Accordion.Item value="test">
            <Accordion.Control>Equipes</Accordion.Control>
            <Accordion.Panel>
              <FavItem item={{ name: 'bla' }} />
              <FavItem item={{ name: 'bla' }} />
              <FavItem item={{ name: 'bla' }} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>
    </>
  );
}

export default NavBarGuest;
