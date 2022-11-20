import GeneralPageLayout from '@layouts/GeneralPageLayout';

import SearchPageNewsContainer from '@components/SearchPageNewsContainer';
import Pagination from '@components/Pagination';

import { useSearchStore } from '@utils/store';

const SearchPage = () => {
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
            <option value="story">Stories</option>
            <option value="comment">Comments</option>
            <option value="all">All</option>
          </select>
          <span>by</span>
          <select
            className="bg-white border-[1px] p-2 rounded-md"
            value={searchByOption}
            onChange={handleChangeInSearchByOption}
          >
            <option value="popularity">Popularity</option>
            <option value="date">Date</option>
          </select>
          <span>for</span>
          <select
            className="bg-white border-[1px] p-2 rounded-md"
            value={searchTimeRangeOption}
            onChange={handleChangeInSearchTimeRange}
          >
            <option value="all-time">All time</option>
            <option value="last-24h">Last 24h</option>
            <option value="past-week">Past Week</option>
            <option value="past-month">Past Month</option>
            <option value="past-year">Past Year</option>
            <option value="all-time">Custom Range</option>
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
