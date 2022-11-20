import GeneralPageLayout from '@layouts/GeneralPageLayout';
import NewNewsContainer from '@components/NewNewsContainer';

import LoadMoreBtn from '@elements/LoadMoreBtn';

const NewStoriesPage = () => {
  return (
    <GeneralPageLayout>
      <div className="flex flex-col gap-5 pb-10">
        <NewNewsContainer />
        <div className="flex justify-center">
          <LoadMoreBtn />
        </div>
      </div>
    </GeneralPageLayout>
  );
};

export default NewStoriesPage;
