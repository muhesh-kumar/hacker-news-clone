import { useState, useEffect } from 'react';

import News from '@components/News';

import { useNewsStore } from '@utils/store';
import { getNewsDataFromAPIResponse } from '@utils/getDataFromAPIResponse';
import ApiUrlBuilder from '@utils/api-url/ApiUrlBuilder';
import ApiUrlDirector from '@utils/api-url/ApiUrlDirector';

import { NewsDataType } from 'types/news';

let API_URL = '';
const builder = new ApiUrlBuilder();
const director = new ApiUrlDirector(builder);

const NewsContainer = () => {
  const currentPageNumber = useNewsStore((state) => state.currentPageNumber);
  const setTotalNumberOfPages = useNewsStore(
    (state) => state.setTotalNumberOfPages,
  );

  const [newsData, setNewsData] = useState<NewsDataType[]>([]);

  // All stories that are on the front/home page right now
  if (currentPageNumber == -1) {
    director.constructFrontPageApiUrl();
    API_URL = builder.build();
    // API_URL = 'https://hn.algolia.com/api/v1/search?tags=front_page';
  }

  // Last stories (i.e., recent stories)
  if (currentPageNumber >= 0) {
    director.constructRecentStoriesApiUrl(currentPageNumber);
    API_URL = builder.build();
    // API_URL = `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${currentPageNumber}`;
  }

  console.log(API_URL);

  useEffect(() => {
    const fetchNewsDataFromAPI = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (currentPageNumber == 0) {
        setTotalNumberOfPages(data.nbPages);
      }

      setNewsData(
        getNewsDataFromAPIResponse(
          data.hits,
          currentPageNumber,
          currentPageNumber > -1 ? data.hitsPerPage : 0,
        ),
      );
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

export default NewsContainer;
