import { APINewsResponse, APINewsDataType } from 'types/news';
import { APICommentResponse, CommentDataType } from 'types/comments';

export const getNewsDataFromAPIResponse = (APINews: APINewsResponse) =>
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

export const getCommentDataFromAPIResponse = (APINews: APICommentResponse) =>
  APINews.hits.map((data: CommentDataType) => {
    return {
      story_id: data.story_id,
      author: data.author,
      created_at: data.created_at,
      story_title: data.story_title,
      story_url: data.story_url,
      points: data.points,
      comment_text: data.comment_text,
    };
  });
