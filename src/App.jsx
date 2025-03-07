import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from "./components/pages/home/Home";
import { AboutUs } from "./components/pages/AboutUs/AboutUs";

import './App.scss';

function App() {
  return (
    <Router basename='/miller-ins'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
      </Routes>
    </Router>
  );
}

export default App;
