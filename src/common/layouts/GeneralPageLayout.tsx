import { ReactNode, FC } from 'react';

type GeneralPageLayoutProps = {
  children: ReactNode;
};

import Navbar from '@components/Navbar';

const GeneralPageLayout: FC<GeneralPageLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen overflow-x-hidden rerlative font-verdana bg-background">
      <Navbar />
      {children}
    </div>
  )
}

export default GeneralPageLayout
