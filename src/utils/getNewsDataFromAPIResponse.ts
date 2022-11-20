import { APIResponse, APINewsDataType } from 'types/news';

export default (APINews: APIResponse) =>
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
