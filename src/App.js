import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Main from './pages/Main';
import "./Api"
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



