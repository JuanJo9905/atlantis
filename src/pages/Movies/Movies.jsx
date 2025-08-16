// src/pages/Movies/Movies.jsx
import React, { useState, useMemo } from 'react';
import { Film, Filter, Star, Calendar, User } from 'lucide-react';
import { peliculasData } from '../../data/peliculas.json';
import './Movies.css';

export const Movies = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  
  // Obtener categorías únicas
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(peliculasData.map(movie => movie.categoria))];
    return ['Todas', ...uniqueCategories.sort()];
  }, []);
  
  // Filtrar películas por categoría
  const filteredMovies = useMemo(() => {
    if (selectedCategory === 'Todas') {
      return peliculasData;
    }
    return peliculasData.filter(movie => movie.categoria === selectedCategory);
  }, [selectedCategory]);
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  // Función para renderizar tridentes según la puntuación
  const renderTridents = (puntuacion) => {
    const fullTridents = Math.floor(puntuacion);
    const hasHalfTrident = puntuacion % 1 >= 0.5;
    const emptyTridents = 10 - Math.ceil(puntuacion);
    
    return (
      <div className="movie-poster__rating">
        {/* Tridentes llenos */}
        {Array.from({ length: fullTridents }, (_, i) => (
          <span key={`full-${i}`} className="movie-poster__trident movie-poster__trident--full">🔱</span>
        ))}
        {/* Tridente medio */}
        {hasHalfTrident && (
          <span className="movie-poster__trident movie-poster__trident--half">🔱</span>
        )}
        {/* Tridentes vacíos */}
        {Array.from({ length: emptyTridents }, (_, i) => (
          <span key={`empty-${i}`} className="movie-poster__trident movie-poster__trident--empty">🔱</span>
        ))}
        <span className="movie-poster__score">{puntuacion}/10</span>
      </div>
    );
  };
  
  // Función para obtener color de categoría
  const getCategoryColor = (categoria) => {
    const colors = {
      'Romance': '#ec4899',
      'Acción': '#ef4444',
      'Aventura': '#10b981',
      'Musical': '#8b5cf6',
      'Thriller': '#f59e0b',
      'Drama': '#6366f1',
      'Comedia': '#06b6d4',
      'Fantasía': '#84cc16'
    };
    return colors[categoria] || '#64748b';
  };

  return (
    <div className="movies">
      <header className="movies__header">
        <div className="movies__title-container">
          <Film className="movies__title-icon" size={32} />
          <h1 className="movies__title">Cartelera de Nuestras Películas Favoritas</h1>
        </div>
        <p className="movies__subtitle">
          Historias que conectan con nuestro corazón y nos transportan a mundos mágicos
        </p>
      </header>

      {/* Filtros por categoría */}
      <section className="movies__filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`movies__filter-button ${
              selectedCategory === category ? 'movies__filter-button--active' : ''
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category === 'Todas' ? (
              <>
                <Filter size={14} />
                <span>Todas</span>
              </>
            ) : (
              <>
                <span>{category}</span>
              </>
            )}
          </button>
        ))}
      </section>


            
      {/* Grid de carteleras de cine */}
      <section className="movies__cinema-grid">
        {filteredMovies.map((pelicula) => (
          <article key={pelicula.id} className="movie-poster">
            <div className="movie-poster__image-container">
              <img 
                src={pelicula.imagen} 
                alt={`Cartelera de ${pelicula.nombre}`}
                className="movie-poster__image"
                loading="lazy"
              />
              <div className="movie-poster__overlay">
                <div className="movie-poster__overlay-content">
                  <h3 className="movie-poster__overlay-title">{pelicula.nombre}</h3>
                  <p className="movie-poster__overlay-description">
                    {pelicula.descripcion}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="movie-poster__info">
              <h3 className="movie-poster__title">{pelicula.nombre}</h3>
              
              <div className="movie-poster__metadata">
                <div className="movie-poster__meta-item">
                  <Calendar size={14} />
                  <span>{pelicula.año}</span>
                </div>
                <div className="movie-poster__meta-item">
                  <User size={14} />
                  <span>{pelicula.director}</span>
                </div>
              </div>
              
              {renderTridents(pelicula.puntuacion)}
              
              <div 
                className="movie-poster__category"
                style={{ 
                  backgroundColor: getCategoryColor(pelicula.categoria),
                  boxShadow: `0 0 10px ${getCategoryColor(pelicula.categoria)}40`
                }}
              >
                {pelicula.categoria}
              </div>
            </div>
          </article>
        ))}
      </section>

      {filteredMovies.length === 0 && (
        <div className="movies__no-results">
          <Film size={48} />
          <p>No se encontraron películas en esta categoría</p>
          <span>Prueba con otra categoría</span>
        </div>
      )}
    </div>
  );
};