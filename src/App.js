import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Main from './pages/Main';
// import './App.css'

// const App = () => {
//   return (
//     <Router>
//       {/* <NavBar />
//       <Header /> */}
//       <Routes>
//         {/* // why react is random AF!! */}
//         {/* <Route path="/Matt-Jones-Developer/wi-finder_free_wifi_finder" element={ <Main /> } index={true} /> */}
//         {/* vs the correct path */}
//         <Route path="/" element={<Main />} index={true} />
//         {/* <Route path="/new" element={ <New /> } /> */}
//       </Routes>
//       {/* <Footer /> */}
//     </Router>
//   );
// };

// export default App;

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



