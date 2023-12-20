import clsx from 'clsx';

import { Box, Space } from '@mantine/core';

import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import slugify from 'slugify';
import { useAppSelector } from '../../hooks/redux';

function NavBarGuest() {
  const username = useAppSelector((state) => state.loggedUser.data.username);

  // MANAGE THE NAVIGATION LINKS
  const navigationLinks = [
    {
      label: 'Mes Participations',
      href: `/profile/${slugify(`${username}`, {
        lower: true,
      })}/participations`,
    },
    {
      label: 'Mes évènements',
      href: `/profile/${slugify(`${username}`, {
        lower: true,
      })}/events`,
    },
  ];

  return (
    <Box className="navbar__section">
      <NavLink
        to="/events/populars"
        className={({ isActive }) =>
          clsx('navbar__link', { 'navbar__link--active': isActive })
        }
      >
        Évènements populaires
      </NavLink>
      <NavLink
        to="/events/upcoming"
        className={({ isActive }) =>
          clsx('navbar__link', { 'navbar__link--active': isActive })
        }
      >
        Évènements à venir
      </NavLink>

      <Space h="xl" />
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
  );
}

export default NavBarGuest;
