import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Main from '../../components/Main/Main';

function Root() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 80 }}
      navbar={{
        width: 170,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding={0}
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <Header opened={opened} toggle={toggle} />
      <NavBar opened={opened} toggle={toggle} />
      <Main />
    </AppShell>
  );
}

export default Root;
