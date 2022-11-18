import { FC } from 'react';
import { BsTriangleFill } from 'react-icons/bs';

type NewsType = {
  newsData: {
    id: number;
    created_at: string;
    title: string;
    author: string;
    url: string;
    points: number;
  };
};

const News: FC<NewsType> = ({ newsData }) => {
  const { id, title, author, url, points, created_at } = newsData;
  return (
    <div className="flex gap-5 px-8 py-5 rounded-md border-b-[1px] bg-primaryLight">
      <div className="flex gap-5 py-3 items-center">
        <h3 className="text-lg font-bold text-newsIdColor">{id}</h3>
        <BsTriangleFill className="text-md text-primaryDark hover:cursor-pointer" />
      </div>
      <div>
        <div className="flex gap-5 items-center text-newsFontColor">
          <p className="text-xl font-medium">{title}</p>
          <p className="text-md">({url})</p>
        </div>
        <div className="flex gap-2 items-center font-semibold text-xs text-newsFontColor">
          <p>{points} points by</p>
          <p>{author}</p>
          <p>|</p>
          <p>{created_at}</p>
          <p>|</p>
          <p>hide</p>
          <p>|</p>
          <p>12 comments</p>
        </div>
      </div>
    </div>
  );
};

export default News;
