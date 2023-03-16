import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Header from './components/Header';
// import Footer from './components/Footer';

import Main from './pages/Main';
import DevPage from './pages/DevPage';
import "./Api"
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} index={true} />
        <Route path="/devpage" element={<DevPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;



