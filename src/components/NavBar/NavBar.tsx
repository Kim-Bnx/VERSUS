import { AppShell } from '@mantine/core';
import './NavBar.scss';

function NavBar() {
  return (
    <AppShell navbar={{ width: 300, breakpoint: 'sm' }}>
      <AppShell.Navbar className="nav">Navbar</AppShell.Navbar>
    </AppShell>
  );
}

export default NavBar;
