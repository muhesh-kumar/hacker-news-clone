import { useState, useEffect } from 'react';

import News from '@components/News';

import { useNewsStore } from '@utils/store';
import getNewsDataFromAPIResponse from '@utils/getNewsDataFromAPIResponse';
import { getCurrentTimeInSeconds } from '@utils/time';

import { NewsDataType } from 'types/News';

const API_URL = `https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i<=${getCurrentTimeInSeconds()}`;

const NewNewsContainer = () => {
  const currentPageNumber = useNewsStore((state) => state.currentPageNumber);
  const setTotalNumberOfPages = useNewsStore(
    (state) => state.setTotalNumberOfPages,
  );

  const [newsData, setNewsData] = useState<NewsDataType[]>([]);

  useEffect(() => {
    const fetchNewsDataFromAPI = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (currentPageNumber == 1) setTotalNumberOfPages(data.nbPages);

      setNewsData(getNewsDataFromAPIResponse(data));
    };
    fetchNewsDataFromAPI();
  }, [currentPageNumber]);

  return (
    <div className="bg-primaryLight border-[1px] rounded-md">
      {newsData.map((news: NewsDataType) => (
        <News key={news.id} newsData={news} />
      ))}
    </div>
  );
};

export default NewNewsContainer;
