import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
          <Link to="/">
            <span className="burger-menu-icon"></span>
          </Link>
        </nav>
      );
    };


export default Navbar;