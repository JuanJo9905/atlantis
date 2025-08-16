// Alternativa usando tridente SVG personalizado
// src/components/MovieCard/MovieCard.jsx
import React from 'react';
import { TridentIcon } from '../TridentIcon/TridentIcon';
import './MovieCard.css';

export const MovieCard = ({ movie }) => {
  const { nombre, puntuacion, imagen, descripcion } = movie;

  // Crear array de tridentes basado en la puntuación
  const renderTridents = () => {
    const tridents = [];
    const rating = Math.round(puntuacion); // Redondear la puntuación
    
    for (let i = 1; i <= 10; i++) {
      tridents.push(
        <TridentIcon
          key={i}
          className={`movie-card__trident ${
            i <= rating ? 'movie-card__trident--active' : 'movie-card__trident--inactive'
          }`}
          size={14}
        />
      );
    }
    
    return tridents;
  };

  return (
    <article className="movie-card">
      <div className="movie-card__image-container">
        <img 
          src={imagen} 
          alt={`Poster de ${nombre}`}
          className="movie-card__image"
        />
        <div className="movie-card__rating-badge">
          <span className="movie-card__rating-number">{puntuacion}</span>
        </div>
      </div>
      
      <div className="movie-card__content">
        <h3 className="movie-card__title">{nombre}</h3>
        
        <div className="movie-card__rating-tridents">
          {renderTridents()}
          <span className="movie-card__rating-text">({puntuacion}/10)</span>
        </div>
        
        <p className="movie-card__description">{descripcion}</p>
      </div>
    </article>
  );
};