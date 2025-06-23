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
                <div className="step-title">Share Your Brief</div>
                <div className="step-description">
                Provide us with your campaign objectives, creative direction, and target platforms. We’ll work closely with you to align on a custom strategy tailored to your brand.
                </div>
              </div>
            </div>

            <div className="step-block">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-icon"><i className="fas fa-pencil-alt"></i></div>
                <div className="step-title">Custom Design & Development</div>
                <div className="step-description">
                Our team crafts a bespoke playable ad from the ground up — designed to engage, perform, and meet your marketing goals.
                </div>
              </div>
            </div>

            <div className="step-block">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-icon"><i className="fas fa-rocket"></i></div>
                <div className="step-title">Preview & Approvals</div>
                <div className="step-description">
                We’ll deliver an interactive preview for review. You can test the experience and provide feedback before final approval.
                </div>
              </div>
            </div>

            <div className="step-block">
              <div className="step-number">4</div>
              <div className="step-content">
                <div className="step-icon"><i className="fas fa-chart-bar"></i></div>
                <div className="step-title">Platform-Ready Export</div>
                <div className="step-description">
                We optimize and export the final creative for seamless integration across major ad platforms — including Meta, Google, Unity, TikTok, Vungle, and others.
                </div>
              </div>
            </div>

            {/* <div className="step-block">
              <div className="step-number">5</div>
              <div className="step-content">
                <div className="step-icon"><i className="fas fa-chart-bar"></i></div>
                <div className="step-title">Tracking & Optimization</div>
                <div className="step-description">
                  Gain actionable insights post-launch. We support A/B testing, performance analysis, and creative iterations to maximize engagement and CTR.
                </div>
              </div>
            </div>  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;