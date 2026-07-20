import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__logo">
          <span className="navbar__logo-icon">🐾</span>
          <span className="navbar__logo-text">
            VETCARE
            <small>Animal Hospital</small>
          </span>
        </a>

        <nav className={`navbar__links ${menuOpen ? "is-open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#service">Service</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar__search">
          <input type="text" placeholder="Search..." />
          <button aria-label="Search">🔍</button>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;
