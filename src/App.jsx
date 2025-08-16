// src/App.jsx
import React from 'react';
import { Layout } from './components';
import { Home, Movies } from './pages';
import { useNavigation } from './hooks/useNavigation';

// Estilos globales
import './styles/globals/reset.css';
import './styles/globals/variables.css';
import './styles/globals/animations.css';
import './styles/globals/utilities.css';

const App = () => {
  const { currentPage, navigateTo } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'movies':
        return <Movies />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Layout onNavigate={navigateTo} currentPage={currentPage}>
        {renderPage()}
      </Layout>
    </div>
  );
};

export default App;