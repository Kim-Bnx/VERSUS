import {
  AppShell,
  Box,
  Button,
  Flex,
  Text,
  Anchor,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
  Burger,
} from '@mantine/core';
import './NavBar.scss';
import { IoLogOutOutline, IoMoon, IoSunnySharp } from 'react-icons/io5';
import NavBarUser from './NavBarUser';
import NavBarGuest from './NavBarGuest';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logout } from '../../store/reducers/login';

function NavBar({ opened, toggle }: { opened: boolean; toggle: () => void }) {
  const dispatch = useAppDispatch();

  // SETTINGS OF THE COLOR SCHEME SWITCH
  //
  // setColorScheme() to apply color scheme
  const { setColorScheme } = useMantineColorScheme();
  // get the current scheme color applied
  const computedColorScheme = useComputedColorScheme('dark', {
    getInitialValueInEffect: true,
  });
  // switch the color scheme
  const handleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };

  // FETCH LOG USER
  const isConnected = useAppSelector((state) => state.login.isConnected);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AppShell.Navbar p="lg" className="navbar">
      <Flex align="center" gap="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Anchor unstyled href="/" className="logo">
          Versus
        </Anchor>
      </Flex>

      <Button
        hiddenFrom="sm"
        className="button header__actions-event"
        component="a"
        href="/event/create"
      >
        Organiser un event
      </Button>

      {isConnected && <NavBarUser />}

      <Box className="navbar__bottom">
        {!isConnected && <NavBarGuest />}

        <Flex
          align="center"
          justify="center"
          gap="md"
          className="navbar__buttons"
        >
          <Tooltip
            label={
              computedColorScheme === 'light' ? 'Mode sombre' : 'Mode clair'
            }
          >
            <Button onClick={handleColorScheme}>
              <Text size="sm">
                {computedColorScheme === 'light' ? (
                  <IoMoon />
                ) : (
                  <IoSunnySharp />
                )}
              </Text>
            </Button>
          </Tooltip>

          {isConnected && (
            <Tooltip label="Se déconnecter">
              <Button className="logout" onClick={handleLogout}>
                <IoLogOutOutline />
              </Button>
            </Tooltip>
          )}
        </Flex>
      </Box>
    </AppShell.Navbar>
  );
}

export default NavBar;
