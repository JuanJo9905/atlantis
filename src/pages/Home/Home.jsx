import React, { useState, useRef } from 'react';
import { FeaturesSection } from '../../components/FeaturesSection/FeaturesSection';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import './Home.css';

export const Home = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const featuresSectionRef = useRef(null);

  const handleHeartClick = () => {
    setShowFeatures(true);
    
    // Scroll suave hacia el FeaturesSection después de un pequeño delay
    setTimeout(() => {
      if (featuresSectionRef.current) {
        featuresSectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300); // Delay para permitir que el componente se renderice
  };

  return (
    <div className="home">
      <HeroSection onHeartClick={handleHeartClick} />
      {showFeatures && (
        <div ref={featuresSectionRef}>
          <FeaturesSection />
        </div>
      )}
    </div>
  );
};