import React from 'react';

const CTA = ({ onOpenPopup }) => {
  return (
    <section id="get-started" className="cta-section">
      <div className="container">
        <div className="cta-container">
          <h3>Ready to Create Engaging Interactive Ads?</h3>
          <p>
            Get started with PlayableShop today and transform your marketing
            campaigns with data-driven playable ads that convert.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary" onClick={() => onOpenPopup('demo')}>
              Request a Demo
            </a>
            <a href="#" className="btn btn-secondary" onClick={() => onOpenPopup('sales')}>
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;