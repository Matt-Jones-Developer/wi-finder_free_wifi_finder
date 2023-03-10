import logo from './logo.svg';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';

import './App.css'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={ <Main /> } index={true} />
        {/* <Route path="/new" element={ <New /> } /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


