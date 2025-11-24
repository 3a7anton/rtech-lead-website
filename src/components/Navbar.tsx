import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/rtech.png" alt="RTech Lead" />
          <span>RTech Lead</span>
        </Link>

        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={isActive('/services') ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <a 
              href="https://wa.me/8801771778880" 
              target="_blank" 
              rel="noopener noreferrer"
              className="navbar-cta"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
