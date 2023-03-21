import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import DevPage from './pages/DevPage';
import Results from './pages/Results';
import Contact from './pages/Contact';
import TermsOfUse from './pages/TermsOfUse';
import About from './pages/About';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} index={true} />
        <Route path="/results" element={<Results />} />
        <Route path="/devpage" element={<DevPage/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termsofuse" element={<TermsOfUse/>}/> 
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
