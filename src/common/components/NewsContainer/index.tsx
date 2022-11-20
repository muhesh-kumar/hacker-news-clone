import { useState, useEffect } from 'react';

import News from '@components/News';
import { useNewsStore } from '@utils/store';

import { APIResponse, APINewsDataType, NewsDataType } from 'types/News';

let API_URL = '';

const getNewsDataFromAPIResponse = (APINews: APIResponse) =>
  APINews.hits.map((data: APINewsDataType, idx: number) => {
    return {
      // FIXME: give correct id based on currentPageNumber and totalNumberOfPages
      id: idx + 1,
      author: data.author,
      created_at: data.created_at,
      title: data.title,
      url: data.url,
      points: data.points,
      num_comments: data.num_comments,
    };
  });

const NewsContainer = () => {
  const currentPageNumber = useNewsStore((state) => state.currentPageNumber);
  const totalNumberOfPages = useNewsStore((state) => state.totalNumberOfPages);
  const setTotalNumberOfPages = useNewsStore(
    (state) => state.setTotalNumberOfPages,
  );

  const [newsData, setNewsData] = useState<NewsDataType[]>([]);

  // All stories that are on the front/home page right now
  if (currentPageNumber == 0)
    API_URL = 'https://hn.algolia.com/api/v1/search?tags=front_page';

  // Last stories
  if (currentPageNumber > 0)
    API_URL = `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${currentPageNumber}`;

  console.log(currentPageNumber, totalNumberOfPages, API_URL);

  useEffect(() => {
    const fetchNewsDataFromAPI = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);

      if (currentPageNumber == 1) {
        setTotalNumberOfPages(data.nbPages);
      }

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

export default NewsContainer;
