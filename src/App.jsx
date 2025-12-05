import React, { useState } from "react";
import BottomNav from "./components/BottomNav";
import Dashboard from "./components/Dashboard";
import Footer from "./components/footer/Footer";
import NewsPopup from "./components/NewsPopup";


const newsSources = [
  { id: "ET", name: "THE ECONOMIC TIMES" },
  { id: "HINDU", name: "THE HINDU" },
  { id: "HT", name: "HINDUSTAN TIMES" },
  { id: "TOI", name: "TIMES OF INDIA" },
  { id: "AU", name: "AMAR UJALA" },
  { id: "DJ", name: "DAINIK JAGRAN" },
];

function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  const [refreshKey, setRefreshKey] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [highlightSource, setHighlightSource] = useState(null);

  const handleTabClick = (tab) => {
    if (tab === "home") {
      setRefreshKey((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShowPopup(false);
    }

    if (tab === "news") {
      setShowPopup(true);
    }

    setSelectedTab(tab);
  };

  const handleSelectSource = (id) => {
    setHighlightSource(id);
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Dashboard key={refreshKey} highlightSource={highlightSource} />


      <BottomNav selectedTab={selectedTab} setSelectedTab={handleTabClick} />

      <NewsPopup
        visible={showPopup}
        onClose={() => setShowPopup(false)}
        newsSources={newsSources}
        onSelect={handleSelectSource}
      />
      <Footer />
    </div>
  );
}

export default App;
