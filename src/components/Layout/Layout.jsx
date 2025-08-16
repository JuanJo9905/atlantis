import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from '../Sidebar/Sidebar';
import './Layout.css';

export const Layout = ({ children, onNavigate, currentPage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigate = (page) => {
    onNavigate(page);
    setSidebarOpen(false);
  };

  return (
    <div className="layout">
      <header className="layout__header">
        <button 
          className="layout__menu-button" 
          onClick={handleToggleSidebar}
          aria-label="Toggle navigation menu"
        >
          <Menu size={24} />
        </button>
        <h1 className="layout__title">Atlantis</h1>
      </header>

      <Sidebar 
        isOpen={sidebarOpen}
        onToggle={handleToggleSidebar}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      <main className="layout__main">
        <div className="layout__content">
          {children}
        </div>
      </main>
    </div>
  );
};