// src/components/MovieCard/MovieCard.jsx
import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import './MovieCard.css';

export const MovieCard = ({ movie }) => {
  const { nombre, puntuacion, imagen, descripcion, categoria, año, director } = movie;

  // Crear array de tridentes basado en la puntuación
  const renderTridents = () => {
    const tridents = [];
    const rating = Math.round(puntuacion); // Redondear la puntuación
    
    for (let i = 1; i <= 10; i++) {
      tridents.push(
        <span
          key={i}
          className={`movie-card__trident ${
            i <= rating ? 'movie-card__trident--active' : 'movie-card__trident--inactive'
          }`}
        >
          🔱
        </span>
      );
    }
    
    return tridents;
  };

  // Función para obtener el color de la categoría
  const getCategoryColor = (categoria) => {
    const colors = {
      'Romance': '#f472b6',
      'Acción': '#ef4444', 
      'Aventura': '#10b981',
      'Musical': '#8b5cf6',
      'Thriller': '#f59e0b',
      'Drama': '#06b6d4'
    };
    return colors[categoria] || '#60a5fa';
  };

  return (
    <article className="movie-card">
      <div className="movie-card__image-section">
        <img 
          src={imagen} 
          alt={`Poster de ${nombre}`}
          className="movie-card__image"
        />
        <div className="movie-card__rating-badge">
          <span className="movie-card__rating-number">{puntuacion}</span>
        </div>
      </div>
      
      <div className="movie-card__content-section">
        <div className="movie-card__header">
          <div className="movie-card__title-group">
            <h3 className="movie-card__title">{nombre}</h3>
            <div 
              className="movie-card__category-badge"
              style={{ backgroundColor: getCategoryColor(categoria) }}
            >
              <Tag size={14} />
              <span>{categoria}</span>
            </div>
          </div>
          
          <div className="movie-card__meta-info">
            <div className="movie-card__meta-item">
              <Calendar size={16} />
              <span>{año}</span>
            </div>
            <div className="movie-card__meta-item">
              <User size={16} />
              <span>{director}</span>
            </div>
          </div>
        </div>

        <div className="movie-card__rating-section">
          <div className="movie-card__rating-tridents">
            {renderTridents()}
          </div>
          <span className="movie-card__rating-text">({puntuacion}/10)</span>
        </div>
        
        <p className="movie-card__description">{descripcion}</p>
      </div>
    </article>
  );
};