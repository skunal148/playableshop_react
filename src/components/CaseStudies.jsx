import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import {caseStudiesData} from '../data/caseStudiesData';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <h2>Case Studies</h2>
        <div className="case-grid">
          {caseStudiesData.map((study) => (
            // Use Link instead of <a> for internal routing
            <Link
              to={`/playable/${study.id}`}
              key={study.id}
              className="case-item"
              target="_blank" // This will open the iframe page in a new tab
              rel="noopener noreferrer"
            >
              <img src={study.thumbnailUrl} alt={study.title} className="case-item-image" />
              <div className="case-item-overlay">
                <h3 className="case-item-title">{study.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;