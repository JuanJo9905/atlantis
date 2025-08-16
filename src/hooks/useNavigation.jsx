// src/hooks/useNavigation.jsx
import { useState } from 'react';

export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    navigateTo
  };
};