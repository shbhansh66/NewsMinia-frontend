const NewsCard = ({ item }) => {
  return (
    <li className="flex items-start space-x-3 p-1 border-b pb-3 hover:bg-gray-50 rounded-md transition">
      
     <div className="w-28 h-20 overflow-hidden rounded-md bg-gray-100 shadow-md flex-shrink-0">

        <img
          src={item.imageUrl || "https://via.placeholder.com/200x150?text=News"}
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = "https://via.placeholder.com/200x150?text=News")}
        />
      </div>

      <div>
        <a
          href={item.link}
          target="_blank"
          className="text-base font-medium hover:text-blue-700 block"
        >
          • {item.title}
        </a>

        <span className="text-xs text-gray-500">
          Source: {item.source} | {item.category} |{" "}
          {new Date(item.pubDate).toLocaleDateString()}
        </span>
      </div>

    </li>
  );
};

export default NewsCard;
