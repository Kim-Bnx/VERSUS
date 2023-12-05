import {
  AppShell,
  Box,
  Button,
  Flex,
  Text,
  Tooltip,
  rem,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconDeviceGamepad2 } from '@tabler/icons-react';
import './NavBar.scss';
import { IoLogOutOutline, IoMoon, IoSunnySharp } from 'react-icons/io5';
import { useState } from 'react';
import NavBarUser from './NavBarUser';
import NavBarGuest from './NavBarGuest';

function NavBar() {
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
  const [isLog, setIsLog] = useState(true);

  return (
    <AppShell.Navbar p="lg" className="navbar">
      <Box className="logo">
        <IconDeviceGamepad2
          style={{ width: rem(45), height: rem(45) }}
          stroke={1}
        />
      </Box>

      {isLog && <NavBarUser />}

      <Box className="navbar__bottom">
        {!isLog && <NavBarGuest />}

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

          {isLog && (
            <Tooltip label="Se déconnecter">
              <Button className="logout" component="a" href="/">
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
