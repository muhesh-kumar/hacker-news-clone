import {
  getSearchByParam,
  getSearchTextParam,
  getSearchCategoryParam,
  getCurrentTimeParam,
  getSearchTimeRangeOption,
  getPageNumberParam,
} from '@utils/api-url/urlParamMethods';

export default class ApiUrlBuilder {
  // Required attributes
  private baseUrl = 'https://hn.algolia.com/api/v1/';

  // Optional attributes
  private searchText!: string;
  private searchByParam!: string;
  private searchCategoryParam!: string;
  private pageNumberParam!: number;

  // NOTE: At a time only one of the following can be true
  // (either get current time or get time range option)
  private shouldGetCurrentTimeParam = false; // by default we don't need to get current time
  private searchTimeRangeOptionParam!: string;

  setSearchText(searchText: string): ApiUrlBuilder {
    this.searchText = searchText;
    return this;
  }

  setSearchByParam(searchByParam: string): ApiUrlBuilder {
    this.searchByParam = searchByParam;
    return this;
  }

  setSearchCategoryParam(searchCategoryParam: string): ApiUrlBuilder {
    this.searchCategoryParam = searchCategoryParam;
    return this;
  }

  setShouldGetCurrentTimeParam(
    shouldGetCurrentTimeParam: boolean,
  ): ApiUrlBuilder {
    this.shouldGetCurrentTimeParam = shouldGetCurrentTimeParam;
    return this;
  }

  setSearchTimeRangeOption(searchTimeRangeOptionParam: string): ApiUrlBuilder {
    this.searchTimeRangeOptionParam = searchTimeRangeOptionParam;
    return this;
  }

  setPageNumberParam(pageNumberParam: number): ApiUrlBuilder {
    this.pageNumberParam = pageNumberParam;
    return this;
  }

  build(): string {
    return (
      this.baseUrl +
      getSearchByParam(this.searchByParam) +
      getSearchTextParam(this.searchText) +
      getSearchCategoryParam(this.searchCategoryParam) +
      getCurrentTimeParam(this.shouldGetCurrentTimeParam) +
      getSearchTimeRangeOption(this.searchTimeRangeOptionParam) +
      getPageNumberParam(this.pageNumberParam)
    );
  }
}
