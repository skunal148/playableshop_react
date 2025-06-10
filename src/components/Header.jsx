import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container header-container">
        <a href="#" className="logo">
          <img src="images/logotransparentbg.png" alt="PlayableShop Logo" />
        </a>
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
            <li><a href="#home">Home</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#get-started" className="nav-cta">Get Started</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;