import clsx from 'clsx';
import { Box, Divider, Flex, Text } from '@mantine/core';
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.scss';
import slugify from 'slugify';
import { IoPersonSharp, IoCalendarNumber } from 'react-icons/io5';
import { IoLogoGameControllerA } from 'react-icons/io';
import { useAppSelector } from '../../hooks/redux';

function NavBarGuest() {
  const location = useLocation(); // Get the current location
  const username = useAppSelector((state) => state.loggedUser.data.username);

  // MANAGE THE NAVIGATION LINKS
  const navigationLinks = [
    {
      label: 'Mon profil',
      href: `/profile/${slugify(`${username}`, { lower: true })}`,
      icon: <IoPersonSharp />,
    },
    {
      label: 'Mes participations',
      href: `/profile/${slugify(`${username}`, {
        lower: true,
      })}/participations`,
      icon: <IoLogoGameControllerA />,
    },
    {
      label: 'Mes évènements',
      href: `/profile/${slugify(`${username}`, { lower: true })}/events`,
      icon: <IoCalendarNumber />,
    },
  ];

  // Function to determine if the link is active
  const isActiveLink = (href: string) => {
    const currentPath = location.pathname;

    if (currentPath === href) {
      return true;
    }

    if (href === navigationLinks[0].href) {
      return false;
    }

    return currentPath === href;
  };

  return (
    <Box mt="2rem">
      <Divider
        size="xl"
        labelPosition="left"
        mb="0"
        label={
          <Text size="0.8rem" lts="0.1rem" fw="700">
            Évènements
          </Text>
        }
      />

      <Flex
        direction="column"
        gap="xs"
        m="1rem 0 3rem 0"
        className="navbar__section"
      >
        <NavLink
          to="/events/populars"
          className={({ isActive }) =>
            clsx('navbar__link', { 'navbar__link--active': isActive })
          }
        >
          Évènements populaires
        </NavLink>

        <NavLink
          to="/events/all"
          className={({ isActive }) =>
            clsx('navbar__link', { 'navbar__link--active': isActive })
          }
        >
          Tous les Évènements
        </NavLink>
      </Flex>

      <Divider
        size="xl"
        labelPosition="left"
        mb="0"
        label={
          <Text size="0.8rem" lts="0.1rem" fw="700">
            Compte
          </Text>
        }
      />

      <Flex direction="column" gap="xs" m="1rem 0 0 0">
        {navigationLinks.map((link) => (
          <NavLink
            to={link.href}
            key={link.label}
            className={() =>
              clsx('navbar__link', {
                'navbar__link--active': isActiveLink(link.href),
              })
            }
          >
            <Flex align="center" gap="xs">
              {link.icon}
              {link.label}
            </Flex>
          </NavLink>
        ))}
      </Flex>
    </Box>
  );
}

export default NavBarGuest;
