import { Routes, BrowserRouter, NavBar, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import Contact from './Contact';
import Navbar from './Link';

function App() {
  return (
    <div>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  </div>
  );
};



export default App;
