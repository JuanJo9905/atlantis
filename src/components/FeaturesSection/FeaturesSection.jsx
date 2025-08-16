// src/components/FeaturesSection/FeaturesSection.jsx
import React, { useState } from 'react';
import './FeaturesSection.css';

export const FeaturesSection = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  
  const storyData = [
    {
      text: "Había una vez un marinero que navegaba por aguas saladas, turbias y solitarias a la deriva... pues aquel marinero no sabía por qué estaba ahí o qué estaba buscando.",
      centerEmoji: "⛵",
      backgroundGradient: "slate-to-blue",
      animationClass: "story-animation--sailing",
      leftButtonEmoji: "💨",
      rightButtonEmoji: "🔭",
      showLeftButton: true,
      showRightButton: true,
      emojiPositions: [
        { emoji: "⛈️", className: "story-emoji story-emoji--star-1" },
        { emoji: "🌧️", className: "story-emoji story-emoji--star-2" },
        { emoji: "🌩️", className: "story-emoji story-emoji--sparkle-1" },
        { emoji: "🌊", className: "story-emoji story-emoji--wave-1" },
        { emoji: "🌊", className: "story-emoji story-emoji--wave-2" }
      ]
    },
    {
      text: "De repente, en la oscuridad de la noche visualizó una luz brillante bajo el mar, hipnotizado por aquella hermosa luz el marinero no dudó en acercarse al borde para verlo más de cerca.",
      centerEmoji: "⛵",
      backgroundGradient: "night-ocean",
      animationClass: "story-animation--sailing",
      leftButtonEmoji: "💨",
      rightButtonEmoji: "🔭",
      showLeftButton: true,
      showRightButton: true,
      emojiPositions: [
        { emoji: "🌧️", className: "story-emoji story-emoji--star-1" },
        { emoji: "🌧️", className: "story-emoji story-emoji--star-2" },
        { emoji: "🌧️", className: "story-emoji story-emoji--sparkle-1" },
        { emoji: "🧜🏻‍♀️", className: "story-emoji story-emoji--underwater-glow" },
        { emoji: "💎", className: "story-emoji story-emoji--sparkle-underwater-1" },
        { emoji: "💎", className: "story-emoji story-emoji--sparkle-underwater-2" }
      ]
    },
    {
      text: "¡Era una sirena! Tenía que serlo... jamás había visto una criatura tan hermosa.",
      centerEmoji: "🧜🏻‍♀️",
      backgroundGradient: "mermaid-magic",
      animationClass: "story-animation--mermaid",
      leftButtonEmoji: "💨",
      rightButtonEmoji: "🔭",
      showLeftButton: true,
      showRightButton: true,
      emojiPositions: [
        { emoji: "⭐", className: "story-emoji story-emoji--star-1" },
        { emoji: "⭐", className: "story-emoji story-emoji--star-2" },
        { emoji: "✨", className: "story-emoji story-emoji--sparkle-1" },
        { emoji: "🌟", className: "story-emoji story-emoji--magical-1" },
        { emoji: "💖", className: "story-emoji story-emoji--heart-float" },
        { emoji: "🐚", className: "story-emoji story-emoji--shell" },
        { emoji: "🐠", className: "story-emoji story-emoji--fish" }
      ]
    },
    {
      text: "¡Hola!, exclamó aquel marinero... Hola, respondió la sirena. Un inmenso brillo iluminó el cielo de aquel marinero pues desde aquel día sus almas se unieron llevándolos hacia el mismo destino. Llevándolos hacia...",
      centerEmoji: "⛵🧜🏻‍♀️",
      backgroundGradient: "love-journey",
      animationClass: "story-animation--together",
      leftButtonEmoji: "💨",
      rightButtonEmoji: "❓",
      showLeftButton: true,
      showRightButton: true,
      emojiPositions: [
        { emoji: "☀️", className: "story-emoji story-emoji--sun" },
        { emoji: "☁️", className: "story-emoji story-emoji--cloud-1" },
        { emoji: "☁️", className: "story-emoji story-emoji--cloud-2" },
        { emoji: "💕", className: "story-emoji story-emoji--love-hearts" },
        { emoji: "✨", className: "story-emoji story-emoji--magical-1" },
        { emoji: "🌟", className: "story-emoji story-emoji--magical-2" }
      ]
    },
    {
      text: "Atlantis",
      centerEmoji: "🏛️",
      backgroundGradient: "atlantis-reveal",
      animationClass: "story-animation--atlantis",
      leftButtonEmoji: "💨",
      rightButtonEmoji: null,
      showLeftButton: true,
      showRightButton: false,
      emojiPositions: [
        { emoji: "🔱", className: "story-emoji story-emoji--trident-1" },
        { emoji: "🔱", className: "story-emoji story-emoji--trident-2" },
        { emoji: "💎", className: "story-emoji story-emoji--gem-1" },
        { emoji: "💎", className: "story-emoji story-emoji--gem-2" },
        { emoji: "🌊", className: "story-emoji story-emoji--atlantis-wave-1" },
        { emoji: "🌊", className: "story-emoji story-emoji--atlantis-wave-2" },
        { emoji: "🐠", className: "story-emoji story-emoji--fish-circle-1" },
        { emoji: "🐠", className: "story-emoji story-emoji--fish-circle-2" },
        { emoji: "☀️", className: "story-emoji story-emoji--divine-sparkle" }
      ]
    }
  ];
  
  const nextParagraph = () => {
    if (currentParagraph < storyData.length - 1) {
      setCurrentParagraph(currentParagraph + 1);
    }
  };
  
  const prevParagraph = () => {
    if (currentParagraph > 0) {
      setCurrentParagraph(currentParagraph - 1);
    }
  };
  
  const currentStory = storyData[currentParagraph];
  
  return (
    <section className={`features-section features-section--story features-section--${currentStory.backgroundGradient}`}>
      <div className="features-section__story-container">
        
        {/* Párrafo de la historia */}
        <div className="features-section__story-text-container">
          <p className={`features-section__story-text ${currentParagraph === 4 ? 'features-section__story-text--large' : ''}`}>
            {currentStory.text}
          </p>
        </div>
        
        {/* Animación central */}
        <div className="features-section__animation-container">
          {/* Ondas de agua animadas */}
          <div className="features-section__waves">
            <div className="features-section__wave features-section__wave--1"></div>
            <div className="features-section__wave features-section__wave--2"></div>
            <div className="features-section__wave features-section__wave--3"></div>
          </div>
          
          {/* Emoji central principal */}
          <div className={`features-section__center-emoji ${currentParagraph === 4 ? 'features-section__center-emoji--large' : ''} ${currentStory.animationClass}`}>
            {currentStory.centerEmoji}
          </div>
          
          {/* Emojis adicionales */}
          {currentStory.emojiPositions.map((item, index) => (
            <div key={index} className={`${item.className}`}>
              {item.emoji}
            </div>
          ))}
        </div>
        
        {/* Controles de navegación */}
        <div className="features-section__navigation">
          {/* Botón anterior */}
          {currentStory.showLeftButton && (
            <button
              onClick={prevParagraph}
              disabled={currentParagraph === 0}
              className={`features-section__nav-button features-section__nav-button--left ${currentParagraph === 0 ? 'features-section__nav-button--disabled' : ''}`}
            >
              <div className="features-section__nav-button-content">
                <span className="features-section__nav-button-emoji">
                  {currentStory.leftButtonEmoji}
                </span>
              </div>
            </button>
          )}
          
          {!currentStory.showLeftButton && <div className="features-section__nav-spacer"></div>}
          
          {/* Indicador de progreso */}
          <div className="features-section__progress">
            {storyData.map((_, index) => (
              <div
                key={index}
                className={`features-section__progress-dot ${index === currentParagraph ? 'features-section__progress-dot--active' : ''}`}
              />
            ))}
          </div>
          
          {/* Botón siguiente */}
          {currentStory.showRightButton && (
            <button
              onClick={nextParagraph}
              disabled={currentParagraph === storyData.length - 1}
              className={`features-section__nav-button features-section__nav-button--right ${currentParagraph === storyData.length - 1 ? 'features-section__nav-button--disabled' : ''}`}
            >
              <div className="features-section__nav-button-content">
                <span className="features-section__nav-button-emoji">
                  {currentStory.rightButtonEmoji}
                </span>
              </div>
            </button>
          )}
          
          {!currentStory.showRightButton && <div className="features-section__nav-spacer"></div>}
        </div>
      </div>
    </section>
  );
};