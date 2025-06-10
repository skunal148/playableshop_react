import React from 'react';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <h2>Case Studies</h2>
        <div className="case-grid">
          {Array.from({ length: 12 }).map((_, index) => (
            <div className="case-item" key={index}>
              <i className="fas fa-desktop fa-5x" style={{ color: '#cccccc' }}></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;