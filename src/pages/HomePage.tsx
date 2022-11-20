import GeneralPageLayout from '@layouts/GeneralPageLayout';

import NewsContainer from '@components/NewsContainer';

import LoadMoreBtn from '@elements/LoadMoreBtn';

const HomePage = () => {
  return (
    <GeneralPageLayout>
      <div className="flex flex-col gap-5 pb-10">
        <NewsContainer />
        <div className="flex justify-center">
          <LoadMoreBtn />
        </div>
      </div>
    </GeneralPageLayout>
  );
};

export default HomePage;
