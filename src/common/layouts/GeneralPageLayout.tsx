import { FC } from 'react';

import Navbar from '@components/Navbar';

import { PageLayoutProps } from 'types/layout';

const GeneralPageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen overflow-x-hidden font-openSans relative bg-primaryLight">
      <Navbar />
      <div className="h-screen px-40 pt-10 bg-background">{children}</div>
    </div>
  );
};

export default GeneralPageLayout;
