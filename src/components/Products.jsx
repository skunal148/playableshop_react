import React from 'react';
import Lottie from 'lottie-react';
import customPlayableAnimation from '../../public/lotties/playable_games.json';
import brandsAnimation from '../../public/lotties/playable_brands.json';

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
            <h3>Playables for Brands</h3>
            <p>
              We specialize in building high-performance, fully customized
              playable ads tailored for your brand or campaign goals.
            </p>
            <div className="product-preview">
            <Lottie animationData={customPlayableAnimation} style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="product-actions">
              <button className="btn btn-secondary">Start a Project</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-icon">
              <i className="fas fa-bolt" style={{ color: 'var(--button)' }}></i>
            </div>
            <h3>Playables for Games</h3>
            <p>
              We specialize in building high-performance, fully customized
              playable ads tailored for your apps or games.
            </p>
            <div className="product-preview">
            <Lottie animationData={brandsAnimation} style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="product-actions">
              <button className="btn btn-secondary">Start a Project</button>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default Products;