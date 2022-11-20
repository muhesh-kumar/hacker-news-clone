import { useState, useEffect } from 'react';

import News from '@components/News';
import Comment from '@components/Comment';

import { useNewsStore, useSearchStore } from '@utils/store';
import {
  getNewsDataFromAPIResponse,
  getCommentDataFromAPIResponse,
} from '@utils/getDataFromAPIResponse';

import { NewsDataType } from 'types/news';
import { CommentDataType } from 'types/comments';

const SECONDS_IN_A_DAY = 60 * 60 * 24;
const SECONDS_IN_A_WEEK = 7 * SECONDS_IN_A_DAY;

// FIXME: handle different number of days in each month
const SECONDS_IN_A_MONTH = 31 * SECONDS_IN_A_DAY;

// FIXME: handle leap years
const SECONDS_IN_A_YEAR = 12 * SECONDS_IN_A_MONTH;

const getStartTimeInSecondsFromTimeRangeOption = (timeRangeOption: string) => {
  const currTime = new Date().getTime();
  if (timeRangeOption == 'all-time') return 0;
  if (timeRangeOption == 'last-24h') return currTime - SECONDS_IN_A_DAY;
  if (timeRangeOption == 'past-week') return currTime - SECONDS_IN_A_WEEK;
  if (timeRangeOption == 'past-month') return currTime - SECONDS_IN_A_MONTH;
  if (timeRangeOption == 'past-year') return currTime - SECONDS_IN_A_YEAR;
};

const SearchPageNewsContainer = () => {
  const currentPageNumber = useNewsStore((state) => state.currentPageNumber);
  const totalNumberOfPages = useNewsStore((state) => state.totalNumberOfPages);
  const setTotalNumberOfPages = useNewsStore(
    (state) => state.setTotalNumberOfPages,
  );

  const searchText = useSearchStore((state) => state.searchText);
  const searchCategory = useSearchStore((state) => state.searchCategory);
  const searchByOption = useSearchStore((state) => state.searchByOption);
  const searchTimeRangeOption = useSearchStore(
    (state) => state.searchTimeRangeOption,
  );

  const [newsData, setNewsData] = useState<NewsDataType[]>([]);
  const [commentsData, setCommentsData] = useState<CommentDataType[]>([]);

  let API_URL = '';

  useEffect(() => {
    API_URL = `https://hn.algolia.com/api/v1/${
      searchByOption == 'popularity' ? 'search' : 'search_by_date'
    }?${searchText !== '' ? 'query=' + searchText + '&' : ''}${
      searchCategory !== '' && searchCategory !== 'all'
        ? 'tags=' + searchCategory + '&'
        : 'tags=story&'
    }${
      searchTimeRangeOption !== 'all-time'
        ? 'numericFilters=created_at_i>=' +
          getStartTimeInSecondsFromTimeRangeOption(searchTimeRangeOption) +
          '&'
        : ''
    }page=${Math.max(0, currentPageNumber)}`;

    const fetchNewsDataFromAPI = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (currentPageNumber == 0) setTotalNumberOfPages(data.nbPages);

      if (searchCategory === 'comment') {
        setCommentsData(getCommentDataFromAPIResponse(data));
        setNewsData([]);
      } else {
        setNewsData(getNewsDataFromAPIResponse(data));
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
