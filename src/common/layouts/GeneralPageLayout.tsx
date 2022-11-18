import { ReactNode, FC } from 'react';

type GeneralPageLayoutProps = {
  children: ReactNode;
};

import Navbar from '@components/Navbar';

const GeneralPageLayout: FC<GeneralPageLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen overflow-x-hidden font-openSans relative bg-primaryLight">
      <Navbar />
      <div className="h-screen px-40 pt-10 bg-background">{children}</div>
    </div>
  );
};

export default GeneralPageLayout;
