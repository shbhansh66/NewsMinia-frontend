import React, { useState, useEffect, useRef } from 'react';
import NewsColumn from './NewsColumn/NewsColumn.jsx';
import NotesSection from './NotesSection.jsx';
import Time from './WeatherTime/TimeWidget.jsx';


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
    { id: 'AU', name: 'AMAR UJALA', color: 'bg-green-800' },
    { id: 'DJ', name: 'DAINIK JAGRAN', color: 'bg-orange-800' },
  ];

  const sectionRefs = {
    ET: useRef(null), HINDU: useRef(null), HT: useRef(null),
    TOI: useRef(null), AU: useRef(null), DJ: useRef(null),
  };

  useEffect(() => {
    if (highlightSource && sectionRefs[highlightSource]) {
      sectionRefs[highlightSource].current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [highlightSource]);

  return (
    <div className="p-4 bg-[#f8fafc] min-h-screen font-sans">
      {/* Header Section with Glass effect */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 -mx-4 px-4 py-2 mb-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
                  <h1 className="text-xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight">
            NEWSMANIA
          </h1>
        
        </div>

        {/* Improved Category Filter - Interactive Pills */}
        <div className="mt-4 flex justify-center pb-2">
          <div className="flex overflow-x-auto gap-3 no-scrollbar py-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-1.5 text-xs md:text-sm font-bold rounded-full transition-all duration-300 transform active:scale-95
                  ${selectedCategory === category
                    ? "bg-indigo-600 text-white shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid with stagger effect feel */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsSources.map((source) => (
          <div 
            key={source.id} 
            ref={sectionRefs[source.id]}
            className="group transition-all duration-500 hover:translate-y-[-5px]"
          >
            <div className="h-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <NewsColumn
                sourceId={source.id}
                sourceName={source.name}
                headerColor={source.color}
                initialNews={[]}
                selectedCategory={selectedCategory}
                isSearchMode={false}
              />
            </div>
          </div>
        ))}
      </div>

      <NotesSection />

      {/* Tailwind Custom Animations in your global CSS */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Dashboard;