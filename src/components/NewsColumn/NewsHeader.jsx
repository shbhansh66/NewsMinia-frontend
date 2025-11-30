const NewsHeader = ({ title, headerColor, selectedCategory }) => {
  return (
    <div className={`${headerColor} text-white p-4 font-extrabold text-xl flex justify-between`}>
      <span>{title}</span>
      {selectedCategory !== "All" && (
        <span className="text-sm opacity-80">{selectedCategory}</span>
      )}
    </div>
  );
};

export default NewsHeader;
