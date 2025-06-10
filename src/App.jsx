// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Import Components
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Products from './components/Products';
import CaseStudies from './components/CaseStudies';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';
import PlayableViewer from './components/PlayableViewer'; // Import the new component

// Import CSS
import './index.css';

// Main page component to hold all sections
const MainPage = ({ onOpenPopup }) => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Products onOpenPopup={onOpenPopup} />
        <CaseStudies />
        <HowItWorks />
        <CTA onOpenPopup={onOpenPopup} />
      </main>
      <Footer />
    </>
  );
};


function App() {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [popupTitle, setPopupTitle] = useState('Request Information');

  const handleOpenPopup = (formType) => {
    if (formType === 'demo') {
      setPopupTitle('Request a Demo');
    } else if (formType === 'sales') {
      setPopupTitle('Contact Sales');
    }
    setIsPopupActive(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClosePopup = () => {
    setIsPopupActive(false);
    document.body.style.overflow = '';
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the main landing page */}
        <Route path="/" element={<MainPage onOpenPopup={handleOpenPopup} />} />
        
        {/* Route for the playable ad viewer */}
        <Route path="/playable/:id" element={<PlayableViewer />} />
      </Routes>
      
      {/* The popup is outside the routes to be displayed over any page */}
      <ContactPopup
        isActive={isPopupActive}
        onClose={handleClosePopup}
        title={popupTitle}
      />
    </BrowserRouter>
  );
}

export default App;