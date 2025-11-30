import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsHeader from './NewsHeader';
import NewsList from './NewsList';
import Loader from './Loader';
import ErrorBox from './ErrorBox';

const API_BASE_URL = "https://newsminia-backend-1.onrender.com/api/news";

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

    const query =
      selectedCategory && selectedCategory !== "All"
        ? `?category=${selectedCategory}`
        : "";

    axios
      .get(`${API_BASE_URL}/${sourceId}${query}`)
      .then((res) => {
        if (!res.data || res.data.length === 0) {
          setError("No news found for this source.");
        } else {
          setError(null);
        }
        setNews(res.data || []);
      })
      .catch(() => {
        setError(`Failed to load news for ${sourceName}.`);
      })
      .finally(() => setLoading(false));
  }, [sourceId, selectedCategory, sourceName]);

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
      
      <NewsHeader
        title={sourceName}
        headerColor={headerColor}
        selectedCategory={selectedCategory}
      />

      <div className="p-4 max-h-[80vh] overflow-y-auto no-scrollbar">
        {loading && <Loader />}

        {!loading && error && <ErrorBox message={error} />}

        {!loading && !error && <NewsList news={news} />}
      </div>

    </div>
  );
};

export default NewsColumn;
