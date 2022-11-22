import { NewsDataType } from 'types/news';
import { CommentDataType } from 'types/comments';
import { NewsAndCommentDataType } from 'types/newsAndComments';

export const getNewsDataFromAPIResponse = (
  APIResponse: NewsDataType[],
  currentPageNumber = 0,
  entriesPerPage = 0,
) =>
  APIResponse.map((data: NewsDataType, idx: number) => {
    return {
      id: (currentPageNumber + 1) * entriesPerPage + idx + 1,
      author: data.author,
      created_at: data.created_at,
      title: data.title,
      url: data.url,
      points: data.points,
      num_comments: data.num_comments,
    };
  });

export const getCommentDataFromAPIResponse = (APIResponse: CommentDataType[]) =>
  APIResponse.map((data: CommentDataType) => {
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

export const getNewsAndCommentDataFromAPIResponse = (
  APIResponse: NewsAndCommentDataType[],
  currentPageNumber = 0,
  entriesPerPage = 0,
) =>
  APIResponse.map((data: NewsAndCommentDataType, idx: number) => {
    console.log(idx, data.comment_text);
    return data.comment_text !== null
      ? {
          story_id: data.story_id,
          author: data.author,
          created_at: data.created_at,
          story_title: data.story_title,
          story_url: data.story_url,
          points: data.points,
          comment_text: data.comment_text,
          isComment: true,
        }
      : {
          id: (currentPageNumber + 1) * entriesPerPage + idx + 1,
          author: data.author,
          created_at: data.created_at,
          title: data.title,
          url: data.url,
          points: data.points,
          num_comments: data.num_comments,
          isComment: false,
        };
  });

export const getNewsDataFromNewsAndCommentData = (
  newsAndCommentData: NewsAndCommentDataType,
): NewsDataType => {
  console.log('news side', newsAndCommentData);
  return {
    id: newsAndCommentData.id ?? 0,
    created_at: newsAndCommentData.created_at ?? '',
    title: newsAndCommentData.title ?? 'No title',
    author: newsAndCommentData.author ?? '',
    url: newsAndCommentData.url ?? 'No URL',
    points: newsAndCommentData.points ?? 0,
    num_comments: newsAndCommentData.num_comments ?? 0,
  };
};

export const getCommentDataFromNewsAndCommentData = (
  newsAndCommentData: NewsAndCommentDataType,
) => {
  console.log('comment side', newsAndCommentData);
  return {
    story_id: newsAndCommentData.story_id ?? 0,
    author: newsAndCommentData.author ?? '',
    created_at: newsAndCommentData.created_at ?? '',
    story_title: newsAndCommentData.story_title ?? '',
    story_url: newsAndCommentData.story_url ?? '',
    points: newsAndCommentData.points ?? 0,
    comment_text: newsAndCommentData.comment_text ?? '',
  };
};
