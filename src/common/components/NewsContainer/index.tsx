import News from '@components/News';

const newsData = {
  id: 1,
  author: 'Muhesh Kumar',
  created_at: '2006-10-09T18:21:51.000Z',
  title: 'Hacker News Redesigned',
  url: 'http://ycombinator.com',
  points: 57,
};

const NewsContainer = () => {
  return (
    <div className="bg-primaryLight border-[1px] rounded-md">
      <News newsData={newsData} />
      <News newsData={newsData} />
      <News newsData={newsData} />
      <News newsData={newsData} />
    </div>
  );
};

export default NewsContainer;
