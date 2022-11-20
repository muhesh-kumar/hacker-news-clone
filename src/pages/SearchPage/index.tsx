import GeneralPageLayout from '@layouts/GeneralPageLayout';

import SearchPageNewsContainer from '@components/SearchPageNewsContainer';
import Pagination from '@components/Pagination';

import { useSearchStore } from '@utils/store';
import getOptionElementsFromOptionsArray from './getOptionElementsFromOptionsArray';

import {
  searchCategoryOptions,
  searchByOptions,
  searchTimeRangeOptions,
} from './options';

const SearchPage = () => {
  // TODO: don't use multiple state variables to manage the state of a form, instead use an object and only one setState function
  const searchCategory = useSearchStore((state) => state.searchCategory);
  const searchByOption = useSearchStore((state) => state.searchByOption);
  const searchTimeRangeOption = useSearchStore(
    (state) => state.searchTimeRangeOption,
  );

  const setSearchCategory = useSearchStore((state) => state.setSearchCategory);
  const setSearchByOption = useSearchStore((state) => state.setSearchByOption);
  const setSearchTimeRangeOption = useSearchStore(
    (state) => state.setSearchTimeRangeOption,
  );

  const handleChangeInSearchCategory = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => setSearchCategory(e.target.value);
  const handleChangeInSearchByOption = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => setSearchByOption(e.target.value);
  const handleChangeInSearchTimeRange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => setSearchTimeRangeOption(e.target.value);

  return (
    <GeneralPageLayout>
      <div className="flex flex-col gap-5 pb-10">
        <form className="flex gap-3 items-center">
          <span>Search</span>
          <select
            className="bg-white border-[1px] p-2 rounded-md"
            value={searchCategory}
            onChange={handleChangeInSearchCategory}
          >
            {getOptionElementsFromOptionsArray(searchCategoryOptions)}
          </select>
          <span>by</span>
          <select
            className="bg-white border-[1px] p-2 rounded-md"
            value={searchByOption}
            onChange={handleChangeInSearchByOption}
          >
            {getOptionElementsFromOptionsArray(searchByOptions)}
          </select>
          <span>for</span>
          <select
            className="bg-white border-[1px] p-2 rounded-md"
            value={searchTimeRangeOption}
            onChange={handleChangeInSearchTimeRange}
          >
            {getOptionElementsFromOptionsArray(searchTimeRangeOptions)}
          </select>
        </form>
        <SearchPageNewsContainer />
        <div className="flex justify-center">
          <Pagination />
        </div>
      </div>
    </GeneralPageLayout>
  );
};

export default SearchPage;
