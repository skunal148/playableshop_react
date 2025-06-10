import React, { useState } from 'react';

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

// Import CSS
import './index.css';

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
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Products onOpenPopup={handleOpenPopup} />
        <CaseStudies />
        <HowItWorks />
        <CTA onOpenPopup={handleOpenPopup} />
      </main>
      <Footer />
      <ContactPopup 
        isActive={isPopupActive} 
        onClose={handleClosePopup} 
        title={popupTitle} 
      />
    </>
  );
}

export default App;