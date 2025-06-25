import React, { useState } from 'react';
// Step 1: Import HashLink instead of using standard <a> tags
import { HashLink as Link } from 'react-router-hash-link';
import Lottie from 'lottie-react';
import logoAnimation from '../../public/lotties/logo.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the mobile menu. We'll call this on link clicks.
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container header-container">
        <Link to="/#home" smooth className="logo" onClick={handleMenuClose}>
          <img src='/images/logotransparentbg.png' alt='logo'></img>
        </Link>
        <button
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          id="mobileMenuToggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <nav id="mainNav" className={isMenuOpen ? 'active' : ''}>
          <ul>
            {/* Step 2: Replace <a> tags with <Link> and add the 'smooth' prop */}
            <li><Link to="/#home" smooth onClick={handleMenuClose}>Home</Link></li>
            <li><Link to="/#solutions" smooth onClick={handleMenuClose}>Solutions</Link></li>
            <li><Link to="/#case-studies" smooth onClick={handleMenuClose}>Case Studies</Link></li>
            <li><Link to="/#how-it-works" smooth onClick={handleMenuClose}>How It Works</Link></li>
            <li><Link to="/#get-started" className="nav-cta" smooth onClick={handleMenuClose}>Get Started</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;