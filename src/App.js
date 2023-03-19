import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import DevPage from './pages/DevPage';
import Results from './pages/Results';
import Contact from "./pages/Contact";

import './App.css'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} index={true} />
        <Route path="/results" element={<Results />} />
        <Route path="/devpage" element={<DevPage/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
