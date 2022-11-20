import { useState, useEffect } from 'react';

import News from '@components/News';
import Comment from '@components/Comment';

import { useNewsStore, useSearchStore } from '@utils/store';
import {
  getNewsDataFromAPIResponse,
  getCommentDataFromAPIResponse,
} from '@utils/getDataFromAPIResponse';
import {
  getSearchTextParam,
  getSearchByParam,
  getSearchCategoryParam,
  getSearchTimeRangeOption,
  getPageNumberParam,
} from '@utils/apiUrl';

import { NewsDataType } from 'types/news';
import { CommentDataType } from 'types/comments';

const SearchPageNewsContainer = () => {
  const currentPageNumber = useNewsStore((state) => state.currentPageNumber);
  const totalNumberOfPages = useNewsStore((state) => state.totalNumberOfPages);
  const setCurrentPageNumber = useNewsStore(
    (state) => state.setCurrentPageNumber,
  );
  const setTotalNumberOfPages = useNewsStore(
    (state) => state.setTotalNumberOfPages,
  );

  // WARNING: curr page = -1 applies only to home page and not other pages
  if (currentPageNumber == -1) setCurrentPageNumber(0);

  const searchText = useSearchStore((state) => state.searchText);
  const searchCategory = useSearchStore((state) => state.searchCategory);
  const searchByOption = useSearchStore((state) => state.searchByOption);
  const searchTimeRangeOption = useSearchStore(
    (state) => state.searchTimeRangeOption,
  );

  const [newsData, setNewsData] = useState<NewsDataType[]>([]);
  const [commentsData, setCommentsData] = useState<CommentDataType[]>([]);

  useEffect(() => {
    const API_URL =
      'https://hn.algolia.com/api/v1/' +
      getSearchByParam(searchByOption) +
      getSearchTextParam(searchText) +
      getSearchCategoryParam(searchCategory) +
      getSearchTimeRangeOption(searchTimeRangeOption) +
      getPageNumberParam(currentPageNumber);

    const fetchNewsDataFromAPI = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (currentPageNumber == 0) setTotalNumberOfPages(data.nbPages);

      if (searchCategory === 'comment') {
        setCommentsData(getCommentDataFromAPIResponse(data));
        setNewsData([]);
      } else {
        setNewsData(
          getNewsDataFromAPIResponse(
            data,
            currentPageNumber - 1,
            data.hitsPerPage,
          ),
        );
        setCommentsData([]);
      }
    };

    fetchNewsDataFromAPI();
  }, [
    currentPageNumber,
    totalNumberOfPages,
    searchText,
    searchCategory,
    searchByOption,
    searchTimeRangeOption,
  ]);

  return (
    <div className="bg-primaryLight border-[1px] rounded-md">
      {newsData &&
        newsData.map((news: NewsDataType) => (
          <News key={news.id} newsData={news} />
        ))}
      {commentsData &&
        commentsData.map((comment: CommentDataType, idx: number) => (
          <Comment key={idx} commentData={comment} />
        ))}
    </div>
  );
};

export default SearchPageNewsContainer;
