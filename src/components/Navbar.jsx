import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#hero" className="logo" onClick={() => setIsOpen(false)}>
            <span className="logo-text">RF</span>
          </a>

          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li>
              <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            </li>

            {/* Action buttons inside overlay on mobile, hidden on desktop links list */}
            <li className="mobile-only-action">
              <a href="mailto:fadhlurahmanraihan29@gmail.com" className="btn btn-secondary nav-action-btn">EMAIL ME</a>
            </li>
            <li className="mobile-only-action">
              <a href={`${import.meta.env.BASE_URL}CV-Raihan%20Fadhlurahman.pdf`} download="CV-Raihan Fadhlurahman.pdf" className="btn btn-primary nav-action-btn">DOWNLOAD CV</a>
            </li>
          </ul>

          <div className="nav-actions-desktop">
            <a href="mailto:fadhlurahmanraihan29@gmail.com" className="btn btn-secondary nav-btn-secondary">EMAIL ME</a>
            <a href={`${import.meta.env.BASE_URL}CV-Raihan%20Fadhlurahman.pdf`} download="CV-Raihan Fadhlurahman.pdf" className="btn btn-primary nav-btn-primary">DOWNLOAD CV</a>
          </div>

          <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>
      {isOpen && <div className="menu-backdrop" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Navbar;
