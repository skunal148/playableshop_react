import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="process-flow">
          <div className="steps-container">
            <div className="step-block">
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-icon"><i className="fas fa-check"></i></div>
                <div className="step-title">Share Brief</div>
                <div className="step-description">
                  Tell us about your needs or choose from our templates
                </div>
              </div>
            </div>

            <div className="step-block">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-icon"><i className="fas fa-pencil-alt"></i></div>
                <div className="step-title">Build & Customize</div>
                <div className="step-description">
                  We create your experience or you customize our templates
                </div>
              </div>
            </div>

            <div className="step-block">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-icon"><i className="fas fa-rocket"></i></div>
                <div className="step-title">Launch</div>
                <div className="step-description">
                  Deploy across ad networks and marketing platforms
                </div>
              </div>
            </div>

            <div className="step-block">
              <div className="step-number">4</div>
              <div className="step-content">
                <div className="step-icon"><i className="fas fa-chart-bar"></i></div>
                <div className="step-title">Track Results</div>
                <div className="step-description">
                  Monitor performance metrics and optimize campaigns
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;