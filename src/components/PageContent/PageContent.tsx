import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

import './PageContent.scss';

function PageContent() {
  return (
    <AppShell.Main className="page-content content-grid" unstyled>
      <Outlet />

      <Footer />
    </AppShell.Main>
  );
}

export default PageContent;
