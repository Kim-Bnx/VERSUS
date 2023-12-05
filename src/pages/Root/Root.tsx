import { AppShell } from '@mantine/core';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import PageContent from '../../components/PageContent/PageContent';

import './Root.scss';

function Root() {
  return (
    <AppShell
      layout="alt"
      header={{ height: 80 }}
      navbar={{
        width: 190,
        breakpoint: 'sm',
      }}
      padding={0}
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <Header />
      <NavBar />
      <PageContent />
    </AppShell>
  );
}

export default Root;
