import clsx from 'clsx';

import { Box } from '@mantine/core';

import { NavLink } from 'react-router-dom';
import './NavBar.scss';

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
    <Box className="navbar__section">
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
