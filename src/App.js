import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from "./components/Footer";
import Main from './pages/Main';
import DevTeam from './pages/DevTeam';
import Results from './pages/Results';
import Contact from "./pages/Contact";

import './App.css'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} index={true} />
        <Route path="/results" element={<Results />} />
        <Route path="/devteam" element={<DevTeam />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
