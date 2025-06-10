import React from 'react';

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
            <a
              href="#"
              className="btn btn-primary contact-trigger"
              data-form-type="demo"
            >
              Request a Demo
            </a>
            <a href="#solutions" className="btn btn-secondary">Explore Solutions</a>
          </div>
        </div>
                <div class="hero-image">
          <div class="device-mockup">
            <div class="device-frame">
              <div class="device-screen">
                <div class="device-content">
                  <video
                    width="100%"
                    height="100%"
                    autoplay
                    loop
                    muted
                    playsinline
                  >
                    <source
                      src="https://snktcodes.github.io/playables/playableShop/demo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div class="video-overlay">
                    <div class="play-button">
                      <i class="fas fa-play"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="floating-elements">
              <div class="float-element float-1">
                <i class="fas fa-chart-line"></i>
              </div>
              <div class="float-element float-2">
                <i class="fas fa-users"></i>
              </div>
              <div class="float-element float-3">
                <i class="fas fa-rocket"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;