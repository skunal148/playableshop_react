import React from 'react';

const ContactPopup = ({ isActive, onClose }) => {
  return (
    <div className={`popup-overlay ${isActive ? 'active' : ''}`} id="contactPopup">
      <div className="popup-container">
        <button className="popup-close" id="popupClose" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <h3 class="popup-title">Request Information</h3>
        <form class="contact-form" id="contactForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="product">Product Interest</label>
            <select id="product" name="product" required>
              <option value="" disabled selected>Select a product</option>
              <option value="Custom Playables">Custom Playables</option>
              <option value="SnapPlay">SnapPlay</option>
              <option value="Reelify">Reelify</option>
              <option value="Multiple Products">Multiple Products</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">What are you looking for?</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project needs..."
              required
            ></textarea>
          </div>
          <button type="submit">Submit Request</button>
          <div class="form-message" id="formMessage"></div>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;