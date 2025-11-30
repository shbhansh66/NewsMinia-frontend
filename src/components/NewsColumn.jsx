import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/news';

const NewsColumn = ({ sourceId, sourceName, headerColor, initialNews = [], isSearchMode = false, selectedCategory }) => {
  const [news, setNews] = useState(initialNews);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isSearchMode) {
      setNews(initialNews);
      setLoading(false);
    }
  }, [initialNews, isSearchMode]);

  useEffect(() => {
    if (isSearchMode) return;

    setLoading(true);
    setError(null);

    const categoryQuery =
      selectedCategory && selectedCategory !== 'All'
        ? `?category=${selectedCategory}`
        : '';

    axios
      .get(`${API_BASE_URL}/${sourceId}${categoryQuery}`)
      .then((response) => {
        if (!response.data || response.data.length === 0) {
          if (selectedCategory && selectedCategory !== 'All') {
            setError(
              `No articles found in the '${selectedCategory}' category for this source.`
            );
          } else {
            setError('No recent news found for this source.');
          }
        } else {
          setError(null);
        }
        setNews(response.data || []);
      })
      .catch((err) => {
        console.error(`Error fetching ${sourceId} news:`, err);
        setError(
          `Failed to load news for ${sourceName}. Ensure backend server is running.`
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sourceId, isSearchMode, selectedCategory, sourceName]);

  const displayLoading = loading && !isSearchMode;

  const headerTitle =
    selectedCategory === 'All' || isSearchMode
      ? sourceName
      : `${sourceName} (${selectedCategory})`;

  return (
    <div
      className={`bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 ${
        isSearchMode ? 'lg:col-span-4' : 'transform hover:scale-[1.02]'
      } transition duration-300`}
    >
      <div
        className={`${headerColor} text-white p-4 font-extrabold text-xl flex items-center justify-between sticky top-0 z-10`}
      >
        <span>{headerTitle}</span>
        {selectedCategory !== 'All' && !isSearchMode && (
          <span className="text-sm font-light opacity-80 ml-2">
            {selectedCategory}
          </span>
        )}
      </div>

      <div className="p-4 max-h-[80vh] overflow-y-auto min-h-[300px]">
        {displayLoading ? (
          <p className="text-gray-500 flex items-center justify-center h-full">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading headlines...
          </p>
        ) : error && !isSearchMode ? (
          <div className="text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
            <p className="font-semibold">⚠️ Error:</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {news.map((item) => (
              <li
                key={item._id}
                className="text-gray-800 border-b border-gray-200 pb-3 hover:bg-gray-50 rounded-md transition duration-150 p-1 -mx-1 flex items-start space-x-3"
              >
                {/* ALWAYS SHOW IMAGE BOX — fallback if missing */}
                <div className="flex-shrink-0 w-24 h-16 overflow-hidden rounded-md bg-gray-100 shadow-md">
                  <img
                    src={
                      item.imageUrl ||
                      'https://via.placeholder.com/200x150?text=News'
                    }
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'https://via.placeholder.com/200x150?text=News';
                    }}
                  />
                </div>

                <div className="flex-grow">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 font-medium text-base block leading-snug"
                  >
                    <span className="text-lg text-gray-400 mr-2">•</span>{' '}
                    {item.title}
                  </a>
                  <span className="text-xs text-gray-500 mt-1 block">
                    Source: {item.source} | Category:{' '}
                    {item.category || 'Misc'} |{' '}
                    {new Date(item.pubDate).toLocaleDateString()}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NewsColumn;
