import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Acasa from './Pages/Acasa';
import Navbar from "./Components/Navbar"
// import Hero from './Components/Hero';

function App() {
 
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route index element={<><Acasa/><div className='test'></div></>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
