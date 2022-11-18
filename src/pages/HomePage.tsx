import GeneralPageLayout from '@layouts/GeneralPageLayout';
import NewsContainer from '@components/NewsContainer';

const HomePage = () => {
  return (
    <GeneralPageLayout>
      {/* <div className="grid grid-cols-3 gap-20">
        <div className="col-span-2">
          <NewsContainer />
        </div>
        <div className="grid grid-cols px-10">login</div>
      </div> */}

      <NewsContainer />
    </GeneralPageLayout>
  );
};

export default HomePage;
