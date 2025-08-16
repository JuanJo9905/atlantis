// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import { Heart } from 'lucide-react';
import './HeroSection.css';

export const HeroSection = ({ onHeartClick }) => {
  return (
    <section className="hero-section">
      <div className="hero-section__animation">
        <div className="hero-section__bubble hero-section__bubble--1"></div>
        <div className="hero-section__bubble hero-section__bubble--2"></div>
        <div className="hero-section__bubble hero-section__bubble--3"></div>
        <div className="hero-section__bubble hero-section__bubble--4"></div>
      </div>
      
      <div className="hero-section__content">
        <h1 className="hero-section__title">
          Bienvenida a Nuestro
          <span className="hero-section__title-gradient"> Atlantis</span>
        </h1>
        
        <p className="hero-section__subtitle">
          Un lugar mágico creado especialmente para ti, mi princesita 💖
        </p>
        
        <div 
          className="hero-section__heart" 
          onClick={onHeartClick}
          role="button"
          tabIndex={0}
          aria-label="Descubrir nuestra historia de amor"
        >
          <Heart className="hero-section__heart-icon" size={120} />
          <p className="hero-section__heart-hint">
            ✨ Haz click Pi 🐙 ✨
          </p>
        </div>
      </div>
    </section>
  );
};