import NewsCard from './NewsCard';

const NewsList = ({ news }) => {
  return (
    <ul className="space-y-4">
      {news.map((item) => (
        <NewsCard key={item._id} item={item} />
      ))}
    </ul>
  );
};

export default NewsList;
