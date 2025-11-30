import React, { useState } from 'react';
import NewsColumn from './NewsColumn.jsx';
import NotesSection from './NotesSection.jsx';
import Footer from './Footer.jsx';

const categories = [
  'All', 'Business', 'Politics', 'Sports', 'Technology',
  'Science', 'World', 'India', 'Miscellaneous'
];

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const newsSources = [
    { id: 'ET', name: 'THE ECONOMIC TIMES', color: 'bg-yellow-700' },
    { id: 'HINDU', name: 'THE HINDU', color: 'bg-purple-900' }, 
    { id: 'HT', name: 'HINDUSTAN TIMES', color: 'bg-blue-800' },
    { id: 'TOI', name: 'TIMES OF INDIA', color: 'bg-red-800' },
    { id: 'AU', name: 'UMAR UJALA', color: 'bg-green-800' },
    { id: 'DJ', name: 'DAINIK JAGRAN', color: 'bg-orange-800' },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 text-center">
        🗞️ Global News Aggregator
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-4xl mx-auto p-3 bg-white rounded-xl shadow-inner">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-indigo-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* All News Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {newsSources.map((source) => (
          <NewsColumn
            key={source.id}
            sourceId={source.id}
            sourceName={source.name}
            headerColor={source.color}
            initialNews={[]}
            selectedCategory={selectedCategory}
            isSearchMode={false}
          />
        ))}
      </div>

      {/* ⭐ Floating Notes Always Visible */}
      <NotesSection />
    </div>
  );
};

export default Dashboard;
