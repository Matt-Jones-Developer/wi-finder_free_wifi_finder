import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import './App.css'

const App = () => {
  return (
    <Router basename="/wi-finder_free_wifi_finder">
      <Routes>
        <Route path="/" element={<Main />} index={true} />
      </Routes>
    </Router>
  );
};

export default App;



