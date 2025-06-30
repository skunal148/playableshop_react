import React from 'react';
import CustomPhoneModel from './CustomPhoneModel';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            Create<br /><span className="highlight">Playable</span> Ads<br />That
            Convert.
          </h1>
          <p>
            Interactive playable ads, powered by data. Track users and get
            actionable insights.
          </p>
          <div className="hero-buttons">
            <a href="#solutions" className="btn btn-secondary">Explore Solutions</a>
          </div>
        </div>
        <div class="hero-image">
        <CustomPhoneModel/>
          {/* The floating elements are still here */}
          <div className="floating-elements">
            <div className="float-element float-1">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="float-element float-2">
              <i className="fas fa-users"></i>
            </div>
            <div className="float-element float-3">
              <i className="fas fa-rocket"></i>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;