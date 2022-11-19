import { FC } from 'react';
import { BsTriangleFill } from 'react-icons/bs';

import getISODateFromDate from '@utils/getISODateFromDate';
import getDomainName from '@utils/getDomainName';

import { NewsDataType } from 'types/News';

type NewsPropsType = {
  newsData: NewsDataType;
};

const getTimeElapsedSinceNewsIsPosed = (created_at: string) => {
  const postedTime = getISODateFromDate(new Date(created_at)).getTime() / 1000;
  const currTime = getISODateFromDate(new Date()).getTime() / 1000;
  const difference = currTime - postedTime;

  // FIXME: add more statements to handle days, months and years
  if (difference < 60) {
    return difference + ' seconds';
  } else if (difference < 3600) {
    return Math.floor(difference / 60) + ' minutes';
  } else {
    return Math.floor(difference / 3600) + ' hours';
  }
};

const News: FC<NewsPropsType> = ({ newsData }) => {
  const { id, title, author, url, points, created_at, num_comments } = newsData;
  return (
    <div className="flex gap-5 px-8 py-5 rounded-md border-b-[1px] bg-primaryLight">
      <div className="flex gap-5 py-3 items-center">
        <h3 className="text-lg font-bold text-newsIdColor">{id}</h3>
        <BsTriangleFill className="text-md text-primaryDark hover:cursor-pointer" />
      </div>
      <div>
        <div className="flex gap-5 items-center text-newsFontColor">
          <a href={url} className="text-xl font-medium">
            {title}
          </a>
          {url && (
            <a
              href={url}
              className="text-md hover:underline hover:underline-offset-2"
            >
              ({getDomainName(url)})
            </a>
          )}
        </div>
        <div className="flex gap-2 items-center font-semibold text-xs text-newsFontColor">
          <p>{points} points by</p>
          <p>{author}</p>
          <p>|</p>
          <p>{getTimeElapsedSinceNewsIsPosed(created_at)} ago</p>
          <p>|</p>
          <p>hide</p>
          <p>|</p>
          <p>{num_comments} comments</p>
        </div>
      </div>
    </div>
  );
};

export default News;
