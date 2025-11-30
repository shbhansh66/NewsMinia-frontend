// src/App.jsx

import React from 'react';
import Dashboard from './components/Dashboard';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Dashboard />
            <Footer/>
    </div>
  );
}

export default App;