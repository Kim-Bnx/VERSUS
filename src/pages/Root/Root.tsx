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
        width: 190,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding={0}
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <Header opened={opened} toggle={toggle} />
      <AppShell.Navbar p="lg" className="navbar">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <NavBar />
      </AppShell.Navbar>
      <Main />
    </AppShell>
  );
}

export default Root;
