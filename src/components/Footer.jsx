import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
<div className="footer-column">
            <h4>PlayableShop</h4>
            <p>Interactive ad experiences for brands and marketers.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><a href="#">Custom Playables</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>info@playableshop.com</p>
            <p>+1 (555) 123-4567</p>
            <p>123 Ad Tech Street<br />San Francisco, CA 94103</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2025 PlayableShop. All rights reserved.
            <a href="#">   Privacy Policy</a> | <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;