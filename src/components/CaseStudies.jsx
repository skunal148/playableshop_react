import React from 'react';

import {caseStudiesData} from '../data/caseStudiesData';

const CaseStudies = () => {
return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <h2>Case Studies</h2>
        <div className="case-grid">
          {caseStudiesData.map((study) => (
             <a
              // The href now points to your local proxy endpoint
              href={`/api/redirect?id=${study.id}`}
              key={study.id}
              className="case-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={study.thumbnailUrl} alt={study.title} className="case-item-image" />
              <div className="case-item-overlay">
                <h3 className="case-item-title">{study.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;