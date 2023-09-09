import ApiUrlBuilder from '@utils/api-url/ApiUrlBuilder';

export default class ApiUrlDirector {
  private builder: ApiUrlBuilder;

  constructor(builder: ApiUrlBuilder) {
    this.builder = builder;
  }

  constructFrontPageApiUrl() {
    this.builder
      .setSearchByParam('popularity')
      .setSearchCategoryParam('front_page');
  }

  constructRecentStoriesApiUrl(pageNumber: number) {
    this.builder
      .setSearchByParam('date')
      .setSearchCategoryParam('story')
      .setPageNumberParam(pageNumber);
  }

  constructNewStoriesApiUrl(pageNumber: number) {
    this.builder
      .setSearchCategoryParam('story')
      .setShouldGetCurrentTimeParam(true)
      .setPageNumberParam(pageNumber);
  }

  constructSearchPageApiUrl(
    searchByParam: string,
    searchText: string,
    searchCategoryParam: string,
    searchTimeRangeOption: string,
    pageNumberParam: number,
  ) {
    this.builder
      .setSearchByParam(searchByParam)
      .setSearchText(searchText)
      .setSearchCategoryParam(searchCategoryParam)
      .setSearchTimeRangeOption(searchTimeRangeOption)
      .setPageNumberParam(pageNumberParam);
  }
}
