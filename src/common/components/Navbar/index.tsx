import { useLocation } from 'react-router-dom';

import hackerNewsLogo from '@assets/hacker-news-logo.gif';

import Searchbar from '@components/Searchbar';

import pages from './pages';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between gap-5 sticky top-0 px-40 py-6 backdrop-blur -z-[-1] border-b-[1px]">
      <div className="flex gap-5">
        <div className="flex gap-2 items-center">
          <img src={hackerNewsLogo} alt="Hacker News Logo" className="w-6" />
          <a href="/" className="text-lg font-bold">
            Hacker News
          </a>
        </div>
        <div className="flex gap-5 text-lg items-center">
          {pages.map((page, index) => {
            return (
              <a key={index} href={page.href}>
                {page.name}
              </a>
            );
          })}
        </div>
      </div>
      {location.pathname === '/search' && <Searchbar />}
      <div className="flex items-center">
        <a href="/" className="text-lg">
          login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
