import { useState, useEffect } from 'react';

import News from '@components/News';

import { useNewsStore } from '@utils/store';
import { getNewsDataFromAPIResponse } from '@utils/getDataFromAPIResponse';
import ApiUrlBuilder from '@utils/api-url/ApiUrlBuilder';
import ApiUrlDirector from '@utils/api-url/ApiUrlDirector';

import { NewsDataType } from 'types/news';

const builder = new ApiUrlBuilder();
const director = new ApiUrlDirector(builder);

const NewStoriesNewsContainer = () => {
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

  const [newsData, setNewsData] = useState<NewsDataType[]>([]);

  useEffect(() => {
    director.constructNewStoriesApiUrl(currentPageNumber);
    const API_URL = builder.build();

    const fetchNewsDataFromAPI = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (currentPageNumber == 0) setTotalNumberOfPages(data.nbPages);

      // WARNING: currentPageNumber - 1 because the same function assumes that the minimum page number is -1 (because of home page's default behaviour)
      setNewsData(
        getNewsDataFromAPIResponse(
          data.hits,
          currentPageNumber - 1,
          data.hitsPerPage,
        ),
      );
    };

    fetchNewsDataFromAPI();
  }, [currentPageNumber, totalNumberOfPages]);

  return (
    <div className="bg-primaryLight border-[1px] rounded-md">
      {newsData.map((news: NewsDataType) => (
        <News key={news.id} newsData={news} />
      ))}
    </div>
  );
};

export default NewStoriesNewsContainer;
