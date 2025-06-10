import React from 'react';

const Products = ({ onOpenPopup }) => {
  return (
    <section id="solutions" className="products">
      <div className="container">
        <h2>Our Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-icon">
              <i className="fas fa-cube" style={{ color: 'var(--button)' }}></i>
            </div>
            <h3>Custom Playables</h3>
            <p>
              We specialize in building high-performance, fully customized
              playable ads tailored for your brand, product, or campaign goals.
            </p>
            <ul>
              <li>Unity, Facebook, Google, TikTok</li>
              <li>AppLovin, IronSource, Mintegral</li>
              <li>Vungle, AdColony, Kayzen, GAM</li>
              <li>Server-hosted custom campaigns</li>
            </ul>
            <p className="product-tagline">
              From ideation to final delivery, we ensure each playable runs
              smoothly across platforms and delivers engaging, measurable
              results.
            </p>
            <div className="product-preview">
              <i className="fas fa-gamepad"></i>
            </div>
            <div className="product-actions">
              <button className="btn btn-secondary">Start a Project</button>
            </div>
          </div>

{/*           <div className="product-card">
            <div className="product-icon">
              <i className="fas fa-bolt" style={{ color: 'var(--button)' }}></i>
            </div>
            <h3>SnapPlay</h3>
            <p>
              Our no-code template editor for creating playable ads quickly with
              your own branding and content.
            </p>
            <ul>
              <li>No-code visual editing</li>
              <li>Custom branding & assets</li>
              <li>Quick exports to major platforms</li>
              <li>Unity, Facebook, Google, TikTok</li>
              <li>AppLovin, IronSource & more</li>
            </ul>
            <p className="product-tagline">
              Create, customize, and deploy playable ads in minutes without any
              coding knowledge.
            </p>
            <div className="product-preview">
              <i className="fas fa-object-group"></i>
            </div>
            <div className="product-actions">
              <button className="btn btn-secondary">View Templates</button>
              <button className="btn btn-secondary">Try Beta</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-icon">
              <i className="fas fa-film" style={{ color: 'var(--button)' }}></i>
            </div>
            <h3>Reelify</h3>
            <p>
              Convert standard videos into engaging interactive experiences with
              our powerful video enhancement tool.
            </p>
            <ul>
              <li>Transform videos into playables</li>
              <li>Add interactive elements & hotspots</li>
              <li>Implement custom call-to-actions</li>
              <li>Seamless platform integration</li>
              <li>Detailed analytics & tracking</li>
            </ul>
            <p className="product-tagline">
              Boost engagement metrics by turning passive viewing into active
              participation with just a few clicks.
            </p>
            <div className="product-preview">
              <i className="fas fa-video"></i>
            </div>
            <div className="product-actions">
              <button className="btn btn-secondary">Request Access</button>
            </div>
          </div>*/}
        </div> 
      </div>
    </section>
  );
};

export default Products;