// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { Home, Film, Heart } from 'lucide-react';
import './Sidebar.css';

const navigationItems = [
  {
    id: 'home',
    label: 'Inicio',
    icon: Home
  },
  {
    id: 'movies',
    label: 'Películas',
    icon: Film
  }
];

export const Sidebar = ({ isOpen, onToggle, onNavigate, currentPage }) => {
  const handleItemClick = (pageId) => {
    onNavigate(pageId);
  };

  // Agregar logs para debug en móvil
  console.log('Sidebar isOpen:', isOpen);

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__header">
          <div className="sidebar__logo">
            <Heart className="sidebar__logo-icon" size={24} />
            <h2 className="sidebar__logo-text">Nuestro Atlantis</h2>
          </div>
        </div>

        <nav className="sidebar__nav">
          <ul className="sidebar__nav-list">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id} className="sidebar__nav-item">
                  <button
                    className={`sidebar__nav-button ${
                      currentPage === item.id ? 'sidebar__nav-button--active' : ''
                    }`}
                    onClick={() => handleItemClick(item.id)}
                  >
                    <IconComponent className="sidebar__nav-icon" size={20} />
                    <span className="sidebar__nav-text">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar__footer">
          <p className="sidebar__footer-text">💙 Hecho con amor</p>
        </div>
      </aside>

      {isOpen && (
        <div 
          className="sidebar__overlay" 
          onClick={onToggle}
          aria-label="Close sidebar"
        />
      )}
    </>
  );
};