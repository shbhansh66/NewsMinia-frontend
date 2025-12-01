import React from "react";
import { Home, Newspaper } from "lucide-react";
import NotesSection from "./NotesSection";
const BottomNav = ({ selectedTab, setSelectedTab }) => {
  const tabs = [
    { id: "home", label: "Home", icon: <Home size={22} /> },
    { id: "notes", label: "Notes", icon: <span className="text-2xl">📝</span> },
  
    { id: "news", label: "News", icon: <Newspaper size={22} /> },
  ];

  return (
    <div className=" bottom-nav fixed bottom-0 left-0 right-0 bg-white shadow-xl border-t border-gray-200 
      flex justify-between px-6 py-2 z-50 sm:hidden">

      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setSelectedTab(tab.id)}
          className={`flex flex-col items-center text-xs ${
            selectedTab === tab.id
              ? "text-indigo-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          <div>{tab.icon}</div>
          {tab.label}
        </button>
      ))}
     
    </div>
  );
};

export default BottomNav;
