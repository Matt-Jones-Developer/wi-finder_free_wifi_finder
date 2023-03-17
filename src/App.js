import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from './components/NavBar';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Main from "./pages/Main";
import "./Api";
import "./App.css";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router basename="/wi-finder_free_wifi_finder">
      <Routes>
        <Route path="/" element={<Main />} index={true} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
