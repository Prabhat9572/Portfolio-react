// src/components/Navbar.js
import React, { useState } from 'react';
import '../Style/Navbar.scss';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Portfolio</h1>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
        <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
        <li><a href="#slills" onClick={closeMobileMenu}>Skills</a></li>
        <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
      </ul>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span className={`toggle-icon ${isMobileMenuOpen ? 'open' : ''}`}>&#9776;</span>
      </button>
    </nav>
  );
};

export default Navbar;
