import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Main from './pages/Main';
import "./data/Api"
import './App.css'

const App = () => {
  return (
    <Router basename="/wi-finder_free_wifi_finder">
    {/* // <Router> */}
      <Routes>
        <Route path="/" element={<Main />} index={true} />
      </Routes>
    </Router>
  );
};

export default App;



