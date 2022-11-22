import {
  getStartTimeInSecondsFromTimeRangeOption,
  getCurrentTimeInSeconds,
} from '@utils/time';

export const getSearchTextParam = (searchText: string) =>
  searchText !== '' ? 'query=' + searchText + '&' : '';

export const getSearchByParam = (searchByOption: string) =>
  searchByOption == 'popularity' ? 'search?' : 'search_by_date?';

export const getSearchCategoryParam = (searchCategory: string) => {
  switch (searchCategory) {
    case '':
    case 'all':
      return '';
    default:
      return `tags=${searchCategory}&`;
  }
};

export const getSearchTimeRangeOption = (searchTimeRangeOption: string) =>
  searchTimeRangeOption !== 'all-time'
    ? 'numericFilters=created_at_i>=' +
      getStartTimeInSecondsFromTimeRangeOption(searchTimeRangeOption) +
      '&'
    : '';

export const getPageNumberParam = (currentPageNumber: number) =>
  'page=' + Math.max(0, currentPageNumber);

export const getCurrentTimeParam = () => getCurrentTimeInSeconds() + '&';
