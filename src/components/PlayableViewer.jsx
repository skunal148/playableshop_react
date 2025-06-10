// src/components/PlayableViewer.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudiesData } from '../data/caseStudiesData'; // Make sure this path is correct

const PlayableViewer = () => {
  // Get the 'id' from the URL (e.g., /playable/1)
  const { id } = useParams();
  const caseStudy = caseStudiesData.find(study => study.id === id);

  const viewerStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#1e2228',
    color: 'white',
    overflow: 'hidden'
  };

  const iframeStyles = {
    flexGrow: 1, // Takes up all available space
    border: 'none',
    width: '100%',
    height: '100%',
  };

  const headerStyles = {
    padding: '10px 20px',
    backgroundColor: '#2a2f38',
    textAlign: 'center',
  };

  const linkStyles = {
    color: 'var(--secondary)',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  if (!caseStudy) {
    return (
      <div style={viewerStyles}>
        <div style={headerStyles}>
            <h2>Playable Not Found</h2>
            <Link to="/" style={linkStyles}>&larr; Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={viewerStyles}>
      <iframe
        style={iframeStyles}
        src={caseStudy.playableUrl}
        title={`Playable Ad: ${caseStudy.title}`}
        allow="autoplay; fullscreen"
      ></iframe>
    </div>
  );
};

export default PlayableViewer;