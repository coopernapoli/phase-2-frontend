import { Routes, BrowserRouter, NavBar, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import Contact from './Contact';
import GenerateWorkout from './GenerateWorkout';
import {slide as Menu} from 'react-burger-menu';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="App">
        <nav className="navbar">
          <button className="burger-menu-icon" onClick={handleMenuToggle}>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
          </button>
        </nav>
        <Menu isOpen={isOpen} onClose={handleMenuToggle}>
          <a className="menu-item" href="/">
            Home
          </a>
          <a className="menu-item" href="/about">
            About
          </a>
          <a className="menu-item" href="/contact">
            Contact
          </a>
          <a className="menu-item" href="/generateworkout">
            Random Workout
          </a>
        </Menu>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/generateworkout" element={<GenerateWorkout />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
