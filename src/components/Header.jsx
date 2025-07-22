// src/components/Header.jsx
import React, { useState } from 'react'; // Import useState hook for managing component state
import { motion } from 'framer-motion'; // Assuming you want animations on the header

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the visibility of the mobile menu

  // Function to toggle the mobile menu's open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className="header"
      // Add Framer Motion initial and animate props for header animation
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container header-content"> {/* Added header-content for flex management */}
        <div className="logo">
          <h1>My Portfolio</h1> {/* Your logo/site title */}
        </div>

        {/* Desktop Navigation - will be hidden on mobile */}
        <nav className="main-nav">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Hamburger Menu Toggle Button - visible only on mobile */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle mobile menu">
          &#9776; {/* This is the Unicode character for the hamburger icon (three horizontal lines) */}
        </button>

        {/* Mobile Navigation - conditionally rendered based on isMenuOpen state */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            <ul className="mobile-nav-links">
              {/* Each link in the mobile menu, also closes the menu when clicked */}
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
    </motion.header>
  );
}

export default Header;