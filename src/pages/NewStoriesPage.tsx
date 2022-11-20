import GeneralPageLayout from '@layouts/GeneralPageLayout';
import NewStoriesNewsContainer from '@components/NewStoriesNewsContainer';

import Pagination from '@components/Pagination';

const NewStoriesPage = () => {
  return (
    <GeneralPageLayout>
      <div className="flex flex-col gap-5 pb-10">
        <NewStoriesNewsContainer />
        <div className="flex justify-center">
          <Pagination />
        </div>
      </div>
    </GeneralPageLayout>
  );
};

export default NewStoriesPage;
