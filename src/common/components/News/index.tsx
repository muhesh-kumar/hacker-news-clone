import { FC } from 'react';
import { BsTriangleFill } from 'react-icons/bs';

import { NewsDataType } from 'types/News';

type NewsPropsType = {
  newsData: NewsDataType;
};

const getDomainName = (url: string) => {
  return url.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];
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
          <p>{created_at}</p>
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
