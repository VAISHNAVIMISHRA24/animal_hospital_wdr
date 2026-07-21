import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__container">
          <Link to="/" onClick={closeMenu} className="navbar__logo">
            <span className="navbar__logo-icon">🐾</span>
            <span className="navbar__logo-text">
              VETCARE
              <small>Animal Hospital</small>
            </span>
          </Link>

          <nav className={`navbar__links ${menuOpen ? "is-open" : ""}`}>
            <Link to="/" className={isActive("/") ? "active-link" : ""} onClick={closeMenu}>Home</Link>
            <Link to="/about" className={isActive("/about") ? "active-link" : ""} onClick={closeMenu}>About Us</Link>
            <Link to="/service" className={isActive("/service") ? "active-link" : ""} onClick={closeMenu}>Services</Link>
            <Link to="/pets" className={isActive("/pets") ? "active-link" : ""} onClick={closeMenu}>Adoption & Pets</Link>
            <Link to="/contact" className={isActive("/contact") ? "active-link" : ""} onClick={closeMenu}>Contact</Link>
          </nav>

          <div className="navbar__actions">
            <div className="navbar__search">
              <input
                type="text"
                placeholder="Search care, doctors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button aria-label="Search">
                <i className="bi bi-search"></i>
              </button>
            </div>

            <Link to="/contact" onClick={closeMenu} className="navbar__cta-btn">
              <i className="bi bi-calendar-plus me-1"></i> Book Appointment
            </Link>
          </div>

          <button
            className={`navbar__toggle ${menuOpen ? "is-active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {menuOpen && (
        <div className="navbar__overlay" onClick={closeMenu} />
      )}
    </>
  );
};

export default Navbar;
