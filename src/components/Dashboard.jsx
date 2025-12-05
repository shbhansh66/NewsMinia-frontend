import React, { useState, useEffect, useRef } from 'react';
import NewsColumn from './NewsColumn/NewsColumn.jsx';
import NotesSection from './NotesSection.jsx';
import Time from './WeatherTime/TimeWidget.jsx';
import Weather from './WeatherTime/WeatherWidget.jsx';

const categories = [
  'All', 'Business', 'Politics', 'Sports', 'Technology',
  'Science', 'World', 'India', 'Miscellaneous'
];

const Dashboard = ({ highlightSource }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const newsSources = [
    { id: 'ET', name: 'THE ECONOMIC TIMES', color: 'bg-yellow-700' },
    { id: 'HINDU', name: 'THE HINDU', color: 'bg-purple-900' }, 
    { id: 'HT', name: 'HINDUSTAN TIMES', color: 'bg-blue-800' },
    { id: 'TOI', name: 'TIMES OF INDIA', color: 'bg-red-800' },
    { id: 'AU', name: 'UMAR UJALA', color: 'bg-green-800' },
    { id: 'DJ', name: 'DAINIK JAGRAN', color: 'bg-orange-800' },
  ];

  // 🔥 ADD REFS FOR AUTO SCROLL
  const sectionRefs = {
    ET: useRef(null),
    HINDU: useRef(null),
    HT: useRef(null),
    TOI: useRef(null),
    AU: useRef(null),
    DJ: useRef(null),
  };

  //  If App sends scroll signal → scroll to that source
  useEffect(() => {
    if (highlightSource && sectionRefs[highlightSource]) {
      sectionRefs[highlightSource].current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [highlightSource]);

  return (
    <div className="p-3 bg-gray-50 min-h-screen">
<Time />

      {/* Title */}
    <h1
  className="
    text-[16px] md:text-4xl font-extrabold mb-6 text-gray-700 text-center
    drop-shadow-[3px_3px_0px_rgba(0,0,0,0.25)]
    animate-titleFade
  "
>
  🗞️ Global News Aggregator
</h1>
<Weather />


      {/* Category Filter */}
      <div className="w-full mb-4 flex justify-center">
        <div className="flex overflow-x-auto gap-2 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-2 py-1 text-sm font-semibold rounded-lg flex-shrink-0 transition-all duration-200
                ${
                  selectedCategory === category
                    ? "bg-indigo-800 text-white shadow-md"
                    : "text-gray-900 hover:bg-indigo-100"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* ALL NEWS COLUMNS */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {newsSources.map((source) => (
          <div key={source.id} ref={sectionRefs[source.id]}>
            <NewsColumn
              sourceId={source.id}
              sourceName={source.name}
              headerColor={source.color}
              initialNews={[]}
              selectedCategory={selectedCategory}
              isSearchMode={false}
            />
          </div>
        ))}
      </div>

      {/* Floating Notes */}
      <NotesSection />
    </div>
  );
};

export default Dashboard;
