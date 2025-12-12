import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FcNightLandscape } from 'react-icons/fc';
import { FaSun } from 'react-icons/fa';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle-button"
    >
      {theme === 'light' ? <FcNightLandscape/> :<FaSun/> }
    </button>
  );
};

export default ThemeToggleButton;
